---
title: SNO MAS Installation
updated: 2024-07-18
toc: true
---

# Maximo Technical Sales Workshop

If you are an IBM Business Partner or an IBMer, this is a skinny but complete guide to create a MAS Manage environment in IBM TechZone.

 ![](./images/sno/sno-diagram.png)

 General diagram of Gym Network

  ![](./images/sno/sno-gym-network.png)

At high level, the following steps are going to be described in this guide:
1. How to create a vSphere-based environment in TechZone. This environment includes a Bastion
Server and a Router with DHCP, NAT and DNS.
2. The creation of an SNO iso file using the Red Hat Console and its download into the Bastion
Server
3. How to connect to the vSphere-based environment thru VPN
4. The upload of the SNO iso file from the Bastion Server into vCenter
5. How to create a VM instance that will run the SNO and use the uploaded iso file for booting
6. How to clone from GitHub the Ansible collection that will be use to install MAS and run it

## Create a vSphere-based environment in TechZone

1. Navigate to https://techzone.ibm.com/collection/ocp-gymnasium/environments and login using your IBMId

    You will see following tile, click on **Reserve** button

    ![](./images/sno/environment.png)

2. In the Create a Reservation page input and click **Submit** button

    **Name:** MAS SNO Workshop
    **Purpose:** Practice / Self education
    **Purpose description:** Educate myself how to install SNO and MAS
    **Preferred Geography:** AMERICAS
    **VMware Datastore Size:** 3 TB
    **VPN Access:** Enable

  You should also have received an email that **“Your environment/access request is provisioning”**

  When the environment is ready, you will receive another email with subject **“Your environment is ready”**

3. The environment that is being create contains a Bastion computer (RHEL based) and a Router (pfSense based). When it will be available, you can VPN into it and directly access the computers running in it.

  Setting up the VPN is very simple. When the environment will be ready, you can click on the tile and you will see a page with lots of useful information. At the bottom of that page, you will find the button to download the Wireguard VPN configuration from reservation page.

  Download the configuration, install Wireguard (https://www.wireguard.com/install/) if you don’t have it already and import the configuration. You can activate the VPN as needed and access also the OpenShift cluster we are going to deploy.

## Creating new Cluster

1. Navigate to reserved instance in Techzone. Click on the blue button, which will open a new browser window. Click on the **+** signs to expand the sections:

    ![](./images/sno/bastion.png)

  Click on the Remote Desktop option to open the Bastion remote desktop. The Bastion runs RHEL, therefore you can use the **Activities** button at the top left to open a tile and click on the Firefox icon.

2. Log into the Red Hat Console for OpenShift (https://console.redhat.com/openshift). You should see a blue **Create cluster** button. Click it.

> **Note:** You can register, if you have not registered yet. 

    ![](./images/sno/bastion-cluster.png)

3. In the following screen, click on the **Datacenter** tab, and click on the blue **Create cluster** button. 

    ![](./images/sno/bastion-cluster-create.png)

  Fill the form that shows up in this way:
    **Cluster name:** ocpgym
    **Base domain:** gym.lan
    **OpenShift version:** OCP 4.12.x
    **select** “Install single node OpenShift (SNO)”
    **Hosts' network configuration:** DHCP Only

    ![](./images/sno/cluster-detail.png)

4. Click the **Next** button. Don’t change anything in the next screen and click again **Next**. 

    ![](./images/sno/bastion-cluster-create.png)

5. Click the **Add host** button. In the dialog that will be shown, select **Full image file: Download a self-contained ISO**, upload your **SSH public key** and click on the **Generate Discovery ISO** button.

    ![](./images/sno/cluster-detail-add-host.png)

> **Note** In case you have never used SSH and you need to generate your private/public keys, use the ssh-keygen tool. Open a Terminal window on the Bastion computer, type ssh-keygen and accept all the defaults (i.e. location of files, no passphrase, etc.). When done, you can find your SSH public key in the ~/.ssh folder. Keep in mind that you may also avoid to upload your SSH public key, but this will prevent you in the future from accessing the node using SSH.

```bash
    $ ssh-keygen
    $ cat .ssh/id_rsa.pub
```

6. After the Discovery ISO has been generated, in the following dialog, click the **Download Discovery ISO** button and save the ISO file on the Bastion computer. It will have a filename like this: **e430fdbb-8c63-4b42-b15f-62bd3d8fbef0-discovery.iso**

Close the dialog. We’ll come back to this screen later, but now we want to upload the ISO into the TechZone vCenter.

## Create a Virtual Machine in vShpare

1. In the Firefox window, notice that there is a predefined button to access the vCenter.

    ![](./images/sno/vCenter.png)

  Click on that button. You can find credential for vCenter at the bottom of the Techzone reservation page.

2. Once you login, At the top left of the screen you should see a symbol of a drum disk. **Click** on it. Open the pull down and select the storage with the name that start with “**gym-**“. On the right side select **Files**.

    ![](./images/sno/upload-iso.png)

3. Create an iso folder called “sno” under the main storage element using the **NEW FOLDER** option shown in the previous picture. **Click** on the newly created **sno** folder and upload in it the ISO you downloaded from Red Hat using the **UPLOAD FILES** option. You can check the upload progress from the status window.

4. When the ISO has uploaded, we create a new VM that will become the Single Node OpenShift. **Click** on the servers icon at the top left of the screen and open all the sections
    ![](./images/sno/vm-navigate.png)

5. **Right click** on the resource pool highlighted and chose **New Virtual Machine…**
    ![](./images/sno/new-vm.png)

6. In the dialog that will be shown, select **Create a new virtual machine** and click **Next**
    ![](./images/sno/new-vm-create.png)

7. Set the **virtual machine name** as **ocpgym** and select the folder the one starting with gym-...

    ![](./images/sno/new-vm-create-name.png)

8. Click **Next**. Select the compute resource starting with **gym-...**
    ![](./images/sno/new-vm-create-compute.png)

9. Click **Next**. Select the storage starting with **gym-...**
    ![](./images/sno/new-vm-create-storage.png)

10. Click **Next**. Select compatibility **ESXi 7.0 U2 and later**.

11. Click **Next**. Select Guest OS Family **Linux** and **Version RHEL 8 64 bit** 

12. In the next panel set **CPU to 16**, **memory to 64**, **primary disk 300 GB**, use the **ADD NEW DEVICE** to add a secondary Hard Disk of **500 GB**, set the **New CD/DVD Drive to “Datastore ISO File”** and **select** the ISO you uploaded before.

Make sure to **select** the **Connect** checkmark. The final result should look like the following picture.

    ![](./images/sno/new-vm-create-hardware.png)

13. At this point click on the **VM Options** tab and open the **Advanced** section. Find the **Configuration Parameters** section and click on **EDIT CONFIGURATION**. In the following panel, click on **ADD CONFIGURATION PARAMS**. Type in the name **disk.EnableUUID** and set the value to **TRUE**

    ![](./images/sno/new-vm-create-hardware-parameter.png)

Click **OK** on the **Configuration Parameter** panel.

14. Click **Next**. Review one more time everything and click **Finish**.

The new VM should now show in your pool under the bastion and the router. **Select** it by clicking on it and start it by either typing **crtl+alt+b** or by **right clicking** and using the **Power->Power ON** menu item.

## Installing OCP Cluster

Switch back to the **Redhat Window** where you have created new cluster

