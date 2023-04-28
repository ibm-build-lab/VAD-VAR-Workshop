---
title: '104: Turbonomic Actions and Policies'
timeToComplete: 15
updated: 2023-05-01
---

# 104: Turbonomic Actions and Policies

## Goal

After you deploy your targets, Turbonomic starts to perform market analysis as part of its Application Resource Management process. This holistic analysis identifies problems in your environment and the actions you can take to resolve and avoid these problems. Turbonomic then generates a set of actions for that particular analysis and displays it in the Pending Actions charts for you to investigate.

In this lab you will learn about:

- Different types of actions
- Action categories
- Action Modes

**Please note that your number and types of actions may vary on your environment**

## Types of Actions in Turbonomic

- **Placement** — These actions determine the best provider for an entity. These include initial placement for a new entity and move actions that change it to use a different provider. For example, moving a VM assigns it to a different host. Moving a VM’s storage means the VM will use a different datastore.

- **Scaling** — Resize allocation of resources, based on consumption.
  Resize up, shown as a required investment.
  Resize down, shown as savings.
  Discount Optimization — Increase discount coverage and reduce costs by scaling VMs to instance types that are charged discounted rates.

- **Configuration** — These are reconfigure and resize actions. Reconfigure actions can add necessary network access or reconfigure storage. Resize actions allocate more or less resource capacity on an entity, which can include adding or reducing VCPUs or VMem on a VM, adding or reducing capacity on a datastore, and adding or reducing volumes in a disk array.

- **Start/Buy** — Start a new instance to add capacity to the environment, shown as a required investment. For cloud environments, purchase discounts to reduce costs.

- **Stop/Suspend** — Suspend an instance to increase efficient use of resources, shown as savings.

- **Delete** — Delete actions affect storage. For example, Turbonomic might recommend that you delete wasted files to free up storage space or delete unused storage in your cloud environment to reduce storage costs.

### Explore different action types

1. Navigate to the main dashboard by clicking on the **On** button from the navigator. Then select **Show All** from the **Pending Actions** section

![](./images/104/pendingactions.png)

2. In this page you will see all pending actions - including on-prem and cloud. If you look at the list on the left you will see actions are categorized by their type. Spend few minutes to explore actions by going to the on-prem or cloud tabs.

![](./images/104/actionpage.png)

3. While exploring actions, you will notice that each action type has multiple entities that it affects. For example, the type **Scale** - which is basically a resize action for cloud entities - affects VMs, databases, VM storage and volumes. Let's take a closer look at some of these actions.

Navigate to **Volumes** under **Scale** action type.

![](./images/104/scalevolume.png)

Select the **Azure** tab. Then click on **Details** for an action that is market **Performance** and reduces your cost. You may need to scroll to the right to locate the button.

![](./images/104/volumedetail.png)

This page displays all the detail about this action including why it was generated, what is the impact if taken, costs or cost savings associated with taking this action, and important information about if it will cause downtime if taken and whether or not it is reversable. Let's take a closer look at the information specified in this action details.

1. This section informs you of the action, the entity it affects, the location in which the entity exists and the reason. In this picture we have a scaling volume action for entity named **ptericdisks3_datadisk_2** in the deployment named **EA - Development** and the reason is IOPS Congestion.

2. The action essentials section gives a quick view into what you need to know about taking this action.

   - The action can be accepted and executed immediately means there is currently no restrictions that will prevent you from taking it right now. We will explore what this means further when we disscuss action modes.
   - Whether or not there is downtime associated with taking this action. In our example, this change requires a period of downtime so when considering taking it one must plan ahead and inform the users of this volume of a planned downtime.
   - Whether or not this action is reversible.

3. In this section you will learn why this action is generated. Typically Turbonomic observes the entity over a period of time and captures the 95th percentile for it. Considering the example shown in the picture below, Turbonomic tells us that the IOPS utilization is about 100% for 95% of the time during a 30-day observation period. This means there is an IOPS congestion on this volume so a scaling action is generated for this entity to move it to a more suitable volume.

4. The IOPS 95th percentile graph.

5. IOPS daily average graph.

6. The dotted line represents the projected 95th percentile after taking this action.

7. Detailed comparison between the current state of the resources and the projected result after taking the action.

8. Detailed cost savings comparison for if you take this action. Notice how scaling to a different volume will result in higher IOPS, lower utilization and it even saves money. So why wouldn't you take it?

![](./images/104/actiondetail1.png)

![](./images/104/actiondetail2.png)

## Action Modes

Action modes specify the degree of automation for the generated actions. For example, in some environments you might not want to automate resize down of VMs because that is a disruptive action. You would use action modes in a policy to set that business rule. We will explore this further in **Policies** lab.

Turbonomic supports the following action modes:

**Recommend** — Recommend the action so a user can execute it via the given hypervisor or by other means.

**Manual** — Recommend the action and provide the option to execute that action through the Turbonomic user interface.

**Automatic** — Execute the action automatically. This automation is defined in **Policies**. We will explore this further in the Policies lab

## Manually perform an action

### Optimize on-prem resources

In this section you will take actions that will optimize your on-prem resources while assuring performance. Taking such actions will result in resources being released by entities or VMs that are not utilizing what they have over the observation period (by default 30 days) so that they can be allocated to workloads that needs these resources.

1. Navigate to **On-Prem** tab from your actions page. Then under "resize" select "Virtual Machines".

2. Scroll down the list and select an action to downsize virtual memory that has **Efficiency** as its action category. Click on its **Details**.

![](./images/104/optimize1.png)

3. Check the details, you will notice that this VM's virtual memory utilization was under 1% for 95% of the time over 30 days. This means this VM has overallocated memory which it does not consume. So you can safely reduce the memory capacity while still providing optimal performance. Notice the projected results of taking the action, it will bump up the utilization from 1% to 2% which is perfectly acceptable.

Once you approve of all details and ensure this action is safe, click on **Execute Action** button at the bottom of the details page. Once you execute this action, Turbonomic will use API calls to adjust the virtual memory of this VM for you. So you won't need to log into your vCenter environment. If the action is executed successfully, you will see a green checkmark next to that action.

![](./images/104/optimize2.png)
