#!/usr/bin/bash

# Short-circuit if there are extra arguments provided, in order to avoid unexpected behaviour
if [[ $# -gt 0 ]] ; then
    echo 'Too many additional arguments provided, please re-run the script with no arguments '
    echo -e '\nExample Usage: \n\n\t./script.sh\n'
    exit 0
fi

USERNAME="cocuser"

GENERATED_KEY=$(openssl rand -base64 66 | tr -dc 'a-zA-Z' | head -c 22)

docker_agent_install_cmd="(docker stop instana-agent && docker rm instana-agent || true) && sudo docker run --detach --name instana-agent --volume /var/run:/var/run --volume /run:/run --volume /dev:/dev:ro --volume /sys:/sys:ro --volume /var/log:/var/log:ro --privileged --net=host --pid=host --env=\"INSTANA_AGENT_ENDPOINT=169.62.62.167.nip.io\" --env=\"INSTANA_AGENT_ENDPOINT_PORT=1444\" --env=\"INSTANA_AGENT_KEY=$GENERATED_KEY\" --env=\"INSTANA_DOWNLOAD_KEY=$GENERATED_KEY\" icr.io/instana/agent"
linux_agent_install_cmd="sudo curl -o setup_agent.sh https://setup.instana.io/agent && chmod 700 ./setup_agent.sh && sudo ./setup_agent.sh -a $GENERATED_KEY -d $GENERATED_KEY -t dynamic -e 169.62.62.167.nip.io:1444 -y -s"
kube_agent_install_cmd="curl -s -N https://gist.githubusercontent.com/adams0619/a9b9d89a9cb2946ecab5ba8930fc2781/raw/21f23eeb69cf3f6def6cc582cb0b0899f3f13a86/instana-agent.yaml"
kube_apply_cmd="kubectl apply -f -"

# Instana Server
ipot_instana=169.62.62.167

# Linux VMs
ipot_vm=169.62.62.165
ipot_mqace=169.62.62.188

# Docker VM
ipot_docker=169.62.62.187

# K8s VMs
ipot_rs_master=169.62.62.185
ipot_qotd_master=169.62.62.174
    
# list of different servers
docker_server=("$ipot_docker")
linux_servers=("$ipot_vm" "$ipot_mqace")
k8s_servers=("$ipot_rs_master" "$ipot_qotd_master")

declare -A install_cmds
install_cmds[docker]="$docker_agent_install_cmd"
install_cmds[linux]="$linux_agent_install_cmd"
install_cmds[kube]="$kube_agent_install_cmd"

declare -A servers
servers[docker]="${docker_server[*]}"
servers[kube]+="${k8s_servers[*]}"
servers[linux]+="${linux_servers[*]}"

yaml_config_install_cmds="<<-EOF
apiVersion: v1
kind: Namespace
metadata:
  name: instana-agent
  labels:
    app.kubernetes.io/name: instana-agent
    app.kubernetes.io/version: 1.2.54
---
apiVersion: v1
kind: Secret
metadata:
  name: instana-agent
  namespace: instana-agent
  labels:
    app.kubernetes.io/name: instana-agent
    app.kubernetes.io/version: 1.2.54
type: Opaque
data:
  key: $(echo -n "$GENERATED_KEY" | base64)
  downloadKey: $(echo -n "$GENERATED_KEY" | base64)
EOF"

install_agent() {
  # Add our newly generated key 
  ssh -p 2022 ${USERNAME}@"$ipot_instana" "sudo instana agentkey add $GENERATED_KEY"

  echo -e "\n\nRunning the Instana Agent Install Script\n"

  for server_type in "${!servers[@]}"; do
    echo -e "\nCurrent server type: ${server_type}\n"
    for server in ${servers[$server_type]}; do
      echo "Running commands for the following the following ${server_type} located at IP: ${server}" 
      
      # Add k8s ns & key refs
      if [[ $server_type == "kube" ]] ; then
          ssh -p 2022 ${USERNAME}@"$server" "$kube_apply_cmd $yaml_config_install_cmds"
      fi

      # Update robot-shops YAML configuaion 
      if [[ $server_type == "kube" && $server == "$ipot_rs_master" ]] ; then
        local rs_repalce_cmd="sed -e 's/ipot-qotd/ipot-robotshop/g'"
        install_cmds[kube]="$kube_agent_install_cmd | $rs_repalce_cmd | $kube_apply_cmd"
      elif [[ $server_type == "kube" ]] ; then
         install_cmds[kube]="$kube_agent_install_cmd | $kube_apply_cmd"
      fi

      echo -e "SSHing ${USERNAME}@$server to run install agent script"
      echo -e "Running the following command: \n\n\t${install_cmds[$server_type]}\n"
      ssh -p 2022 ${USERNAME}@"$server" "${install_cmds[$server_type]}"
    done
  done
}

# Run Instana agents install script
if install_agent; then
  echo "=========  Successfully installed all Instana agents  ========="
else 
  echo "================== Failed to install Instana agents =================="
fi
