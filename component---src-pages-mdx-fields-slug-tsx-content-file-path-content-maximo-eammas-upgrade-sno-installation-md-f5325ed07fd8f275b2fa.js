"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8131],{37887:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var l=n(11151),a=n(67294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",img:"img",ol:"ol",li:"li",h2:"h2",a:"a",strong:"strong",blockquote:"blockquote",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"maximo-technical-sales-workshop"},a.createElement(t.h1,{id:"maximo-technical-sales-workshop"},"Maximo Technical Sales Workshop"),"\n",a.createElement(t.p,null,"If you are an IBM Business Partner or an IBMer, this is a skinny but complete guide to create a MAS Manage environment in IBM TechZone."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/sno-diagram.png",alt:""}),"\n",a.createElement(t.p,null,"General diagram of Gym Network"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/sno-gym-network.png",alt:""}),"\n",a.createElement(t.p,null,"At high level, the following steps are going to be described in this guide:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"How to create a vSphere-based environment in TechZone. This environment includes a Bastion\nServer and a Router with DHCP, NAT and DNS."),"\n",a.createElement(t.li,null,"The creation of an SNO iso file using the Red Hat Console and its download into the Bastion\nServer"),"\n",a.createElement(t.li,null,"How to connect to the vSphere-based environment thru VPN"),"\n",a.createElement(t.li,null,"The upload of the SNO iso file from the Bastion Server into vCenter"),"\n",a.createElement(t.li,null,"How to create a VM instance that will run the SNO and use the uploaded iso file for booting"),"\n",a.createElement(t.li,null,"How to clone from GitHub the Ansible collection that will be use to install MAS and run it"),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-vsphere-based-environment-in-techzone"},a.createElement(t.h2,{id:"create-a-vsphere-based-environment-in-techzone"},a.createElement(t.a,{href:"#create-a-vsphere-based-environment-in-techzone"},"Create a vSphere-based environment in TechZone")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to ",a.createElement(t.a,{href:"https://techzone.ibm.com/collection/ocp-gymnasium/environments"},"https://techzone.ibm.com/collection/ocp-gymnasium/environments")," and login using your IBMId"),"\n",a.createElement(t.p,null,"You will see following tile, click on ",a.createElement(t.strong,null,"Reserve")," button"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/environment.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Create a Reservation page input and click ",a.createElement(t.strong,null,"Submit")," button"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Name:")," MAS SNO Workshop\n",a.createElement(t.strong,null,"Purpose:")," Practice / Self education\n",a.createElement(t.strong,null,"Purpose description:")," Educate myself how to install SNO and MAS\n",a.createElement(t.strong,null,"Preferred Geography:")," AMERICAS\n",a.createElement(t.strong,null,"VMware Datastore Size:")," 3 TB\n",a.createElement(t.strong,null,"VPN Access:")," Enable"),"\n"),"\n"),"\n",a.createElement(t.p,null,"You should also have received an email that ",a.createElement(t.strong,null,"“Your environment/access request is provisioning”")),"\n",a.createElement(t.p,null,"When the environment is ready, you will receive another email with subject ",a.createElement(t.strong,null,"“Your environment is ready”")),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"The environment that is being create contains a Bastion computer (RHEL based) and a Router (pfSense based). When it will be available, you can VPN into it and directly access the computers running in it."),"\n"),"\n",a.createElement(t.p,null,"Setting up the VPN is very simple. When the environment will be ready, you can click on the tile and you will see a page with lots of useful information. At the bottom of that page, you will find the button to download the Wireguard VPN configuration from reservation page."),"\n",a.createElement(t.p,null,"Download the configuration, install Wireguard (",a.createElement(t.a,{href:"https://www.wireguard.com/install/"},"https://www.wireguard.com/install/"),") if you don’t have it already and import the configuration. You can activate the VPN as needed and access also the OpenShift cluster we are going to deploy."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"creating-new-cluster"},a.createElement(t.h2,{id:"creating-new-cluster"},a.createElement(t.a,{href:"#creating-new-cluster"},"Creating new Cluster")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to reserved instance in Techzone. Click on the blue button, which will open a new browser window. Click on the ",a.createElement(t.strong,null,"+")," signs to expand the sections:"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/bastion.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.p,null,"Click on the Remote Desktop option to open the Bastion remote desktop. The Bastion runs RHEL, therefore you can use the ",a.createElement(t.strong,null,"Activities")," button at the top left to open a tile and click on the Firefox icon."),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Log into the Red Hat Console for OpenShift (",a.createElement(t.a,{href:"https://console.redhat.com/openshift"},"https://console.redhat.com/openshift"),"). You should see a blue ",a.createElement(t.strong,null,"Create cluster")," button. Click it."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," You can register, if you have not registered yet."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/bastion-cluster.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the following screen, click on the ",a.createElement(t.strong,null,"Datacenter")," tab, and click on the blue ",a.createElement(t.strong,null,"Create cluster")," button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/bastion-cluster-create.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.p,null,"Fill the form that shows up in this way:\n",a.createElement(t.strong,null,"Cluster name:")," ocpgym\n",a.createElement(t.strong,null,"Base domain:")," gym.lan\n",a.createElement(t.strong,null,"OpenShift version:")," OCP 4.12.x\n",a.createElement(t.strong,null,"select")," “Install single node OpenShift (SNO)”\n",a.createElement(t.strong,null,"Hosts' network configuration:")," DHCP Only"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/cluster-detail.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Next")," button. Don’t change anything in the next screen and click again ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/bastion-cluster-create.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Add host")," button. In the dialog that will be shown, select ",a.createElement(t.strong,null,"Full image file: Download a self-contained ISO"),", upload your ",a.createElement(t.strong,null,"SSH public key")," and click on the ",a.createElement(t.strong,null,"Generate Discovery ISO")," button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/cluster-detail-add-host.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note")," In case you have never used SSH and you need to generate your private/public keys, use the ssh-keygen tool. Open a Terminal window on the Bastion computer, type ssh-keygen and accept all the defaults (i.e. location of files, no passphrase, etc.). When done, you can find your SSH public key in the ~/.ssh folder. Keep in mind that you may also avoid to upload your SSH public key, but this will prevent you in the future from accessing the node using SSH."),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"    $ ssh-keygen\n    $ ",a.createElement(t.span,{className:"hljs-built_in"},"cat")," .ssh/id_rsa.pub\n")),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"After the Discovery ISO has been generated, in the following dialog, click the ",a.createElement(t.strong,null,"Download Discovery ISO")," button and save the ISO file on the Bastion computer. It will have a filename like this: ",a.createElement(t.strong,null,"e430fdbb-8c63-4b42-b15f-62bd3d8fbef0-discovery.iso")),"\n"),"\n",a.createElement(t.p,null,"Close the dialog. We’ll come back to this screen later, but now we want to upload the ISO into the TechZone vCenter."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-virtual-machine-in-vshpare"},a.createElement(t.h2,{id:"create-a-virtual-machine-in-vshpare"},a.createElement(t.a,{href:"#create-a-virtual-machine-in-vshpare"},"Create a Virtual Machine in vShpare")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Firefox window, notice that there is a predefined button to access the vCenter."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/vCenter.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.p,null,"Click on that button. You can find credential for vCenter at the bottom of the Techzone reservation page."),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Once you login, At the top left of the screen you should see a symbol of a drum disk. ",a.createElement(t.strong,null,"Click")," on it. Open the pull down and select the storage with the name that start with “",a.createElement(t.strong,null,"gym-"),"“. On the right side select ",a.createElement(t.strong,null,"Files"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/upload-iso.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Create an iso folder called “sno” under the main storage element using the ",a.createElement(t.strong,null,"NEW FOLDER")," option shown in the previous picture. ",a.createElement(t.strong,null,"Click")," on the newly created ",a.createElement(t.strong,null,"sno")," folder and upload in it the ISO you downloaded from Red Hat using the ",a.createElement(t.strong,null,"UPLOAD FILES")," option. You can check the upload progress from the status window."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"When the ISO has uploaded, we create a new VM that will become the Single Node OpenShift. ",a.createElement(t.strong,null,"Click")," on the servers icon at the top left of the screen and open all the sections\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/vm-navigate.png",alt:""})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Right click")," on the resource pool highlighted and chose ",a.createElement(t.strong,null,"New Virtual Machine…"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/new-vm.png",alt:""})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the dialog that will be shown, select ",a.createElement(t.strong,null,"Create a new virtual machine")," and click ",a.createElement(t.strong,null,"Next"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/new-vm-create.png",alt:""})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Set the ",a.createElement(t.strong,null,"virtual machine name")," as ",a.createElement(t.strong,null,"ocpgym")," and select the folder the one starting with gym-..."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/new-vm-create-name.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Next"),". Select the compute resource starting with ",a.createElement(t.strong,null,"gym-..."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/new-vm-create-compute.png",alt:""})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Next"),". Select the storage starting with ",a.createElement(t.strong,null,"gym-..."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/new-vm-create-storage.png",alt:""})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Next"),". Select compatibility ",a.createElement(t.strong,null,"ESXi 7.0 U2 and later"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Next"),". Select Guest OS Family ",a.createElement(t.strong,null,"Linux")," and ",a.createElement(t.strong,null,"Version RHEL 8 64 bit")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the next panel set ",a.createElement(t.strong,null,"CPU to 16"),", ",a.createElement(t.strong,null,"memory to 64"),", ",a.createElement(t.strong,null,"primary disk 300 GB"),", use the ",a.createElement(t.strong,null,"ADD NEW DEVICE")," to add a secondary Hard Disk of ",a.createElement(t.strong,null,"500 GB"),", set the ",a.createElement(t.strong,null,"New CD/DVD Drive to “Datastore ISO File”")," and ",a.createElement(t.strong,null,"select")," the ISO you uploaded before."),"\n"),"\n"),"\n",a.createElement(t.p,null,"Make sure to ",a.createElement(t.strong,null,"select")," the ",a.createElement(t.strong,null,"Connect")," checkmark. The final result should look like the following picture."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/new-vm-create-hardware.png",alt:""}),"\n",a.createElement(t.ol,{start:"13"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At this point click on the ",a.createElement(t.strong,null,"VM Options")," tab and open the ",a.createElement(t.strong,null,"Advanced")," section. Find the ",a.createElement(t.strong,null,"Configuration Parameters")," section and click on ",a.createElement(t.strong,null,"EDIT CONFIGURATION"),". In the following panel, click on ",a.createElement(t.strong,null,"ADD CONFIGURATION PARAMS"),". Type in the name ",a.createElement(t.strong,null,"disk.EnableUUID")," and set the value to ",a.createElement(t.strong,null,"TRUE")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/EAMMASUpgrade/images/sno/new-vm-create-hardware-parameter.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"OK")," on the ",a.createElement(t.strong,null,"Configuration Parameter")," panel."),"\n",a.createElement(t.ol,{start:"14"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Next"),". Review one more time everything and click ",a.createElement(t.strong,null,"Finish"),"."),"\n"),"\n",a.createElement(t.p,null,"The new VM should now show in your pool under the bastion and the router. ",a.createElement(t.strong,null,"Select")," it by clicking on it and start it by either typing ",a.createElement(t.strong,null,"crtl+alt+b")," or by ",a.createElement(t.strong,null,"right clicking")," and using the ",a.createElement(t.strong,null,"Power->Power ON")," menu item."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"installing-ocp-cluster"},a.createElement(t.h2,{id:"installing-ocp-cluster"},a.createElement(t.a,{href:"#installing-ocp-cluster"},"Installing OCP Cluster")),"\n",a.createElement(t.p,null,"Switch back to the ",a.createElement(t.strong,null,"Redhat Window")," where you have created new cluster")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(94184),c=n.n(i),s=n(24690),m=n(81140),u=n(48623),h=n(88531),g=n(13383),d=n(27315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:i}=e,s=(0,a.useRef)(null),{0:p}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:d.YS},a.createElement("article",{className:c()(d.Y2,!E&&d.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},i)),E&&a.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:p})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(p,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-maximo-eammas-upgrade-sno-installation-md-f5325ed07fd8f275b2fa.js.map