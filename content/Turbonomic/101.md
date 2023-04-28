---
title: '101: Turbonomic Overview'
timeToComplete: 20
updated: 2023-05-01
---

# 101: Turbonomic Overview and lab environment

## Goal

In this proof of technology session, you will go through a series of labs to explore Turbonomic and its components and walk through scenarios of which this APM tool can add benefit.

# Introduction

Application Resource Management is a top-down, application-driven approach that continuously analyzes applications' resource needs and generates fully automatable actions to ensure applications always get what they need to perform. It runs 24/7/365 and scales with the largest, most complex environments.

To perform Application Resource Management, Turbonomic represents your environment holistically as a supply chain of resource buyers and sellers, all working together to meet application demand. By empowering buyers (VMs, instances, containers, and services) with a budget to seek the resources that applications need to perform, and sellers to price their available resources (CPU, memory, storage, network) based on utilization in real-time, Turbonomic keeps your environment within the desired state — operating conditions that achieve the following conflicting goals at the same time:

**Assured application performance** - Prevent bottlenecks, upsize containers/VMs, prioritize workload, and reduce storage latency.

**Efficient use of resources** - Consolidate workloads to reduce infrastructure usage to the minimum, downsize containers, prevent sprawl, and use the most economical cloud offerings.

# Lab Environment

To go through your lab sessions you need to first access your environment. Most of the labs will use the Turbonomic UI. Below is the list of the instances you will use during this proof of technology session.

**Bastion VM** - This is your main desktop. You will run the labs in this VM. It can be accessed using the link provided by your proctor. The link should automatically log you in the system (no user and password required).

**Turbonomic** - Which will be accessible through web browser on your bastion VM.

**Instana** - This will also be accessible through a bastion VM.

**Credentials file** - The file including all credentials you need to go through this workshop is named "Turbo-PoT-Credentials.html" and is preset as a browser window on your bastion VM. To access it go to you bastion VM desktop and open FireFox window from activities on top left of the screen. The file should pop open.

## Access bastion VM

Use the link provided by your proctor. Once you click on it, it should open below page in your browser. Click on the **Remote Desktop** item from the list and it will open up your bastion VM desktop.

![](./images/101/bastion.png)

By default all the pages you will need for this session will be pre-populated for you, if not navigate to the top left corner click on **Activities** and select **FireFox**. All the pages you need is in this browser and will open up as new tabs.

![](./images/101/bastion1.png)

## Access your Turbonomic environment

The Turbonomic instance is pre-populated in Firefox on your bastion VM. If you can not find it, refer to the Turbo-PoT-Credentials file to get your Turbonomic URL and open it on your bastion VM browser.

![](./images/101/desktop.png)

### Turbonomic Credentials

Username: administrator

Password: Refer to "Turbo-PoT-Credentials" on you bastion VM

Please note, your Turbonomic tab on the browser may have a warning message as shown below. This is not an issue, just click on **Advanced...** and then click on **Accept the Risk and Continue**.

![](./images/101/desktop2.png)

### Access your Instana environment

Instana UI is also pre-populated in Firefox on your bastion VM. You won't spend much time in the Instana instance as it is pre-setup for you. You will access it only once to create an API key.

#### Instana Credentials

Endpoint IP address: 10.0.0.2

Username: admin@instana.local

Password: Refer to "Turbo-PoT-Credentials" on you bastion VM
