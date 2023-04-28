---
title: '105: Planning and Custom Dashboards'
timeToComplete: 15
updated: 2023-05-01
---

# 105: Planning and Custom Dashboards

## Planning

Planning page in Turbonomic is used to run simulations for what-if scenarios that will help you gain insight into what are the results of certain changes before making them. A plan has no impact on real-time environments.

When you click Run to start a plan, the following occurs:

- The entities take their current actions in the plan market
- Entity utilization is re-calculated
- The entities continue acting
- Utilization is continually re-calculated
- This process continues until no entities want to act, anymore
  - At this point, the plan has **converged**
  - The entities have reached a **Desired State**!

There are many scenarios which you can take advantage of the planning capability in Turbonomic, but in this lab we will focus on migrating to the cloud.

### Migrate to cloud

A Migrate to Cloud plan simulates migration of on-prem VMs to the cloud, or migration of VMs from one cloud provider to another.

This plan focuses on optimizing performance and costs by choosing the most suitable cloud resources for your VMs and the volumes they use.

To further optimize your costs, the plan can recommend moving workloads from on-demand to discounted pricing and purchasing more discounts.

The plan calculates costs according to the billing and price adjustments that you have negotiated with your cloud provider. Costs include compute, service (such as IP services), and license costs.

The plan also calculates discount purchases for VMs that can benefit from discounted pricing.

In this lab, you will run a scenario where you'll move on-prem VMs to AWS.

1. From the navigator, click on the **Plan** button with a light bulb icon. Then in the **Plan Management** page on the top right, click on **New Plan**.

![](./images/105/plan1.png)

2. From the list, select **Migrate to cloud**.

![](./images/105/cloud1.png)

3. In the newly opened page, click on **Clusters** under **On-prem** (since we want to migrate on-prem virtual machines to the cloud). Select the cluster named **vsphere-dc20-DC01/vsphere-dc20-Clus01** Then click on **Next: Where to migrate** button.

![](./images/105/cloud2.png)

4. Click on **AWS Accounts** then select the account number **136039713045**. Then click on **Next: Region**.

![](./images/105/cloud3.png)

5. In this part you can select a region within your AWS account you'd like to move your on-prem VMs to in the future, and want to see if it is a suitable location. Since you are moving an entire cluster you'd want to choose a region that already is light on number of VMs. Select **aws-US East (N. Virginia)**. Then click on **Next: Licensing**.

![](./images/105/cloud4.png)

6. In this section you can choose if you'd like the plan to include the cost of the OS as part of the migration plan or not. For this lab we will assume that your on-prem OS licenses are non-transferable so we will include the cost in the migration plan. Once done select **Next: RI Settings**.

![](./images/105/cloud5.png)

7. In this section you can choose your reserved instance (RI) settings. You can choose different settings from your AWS profile that fits your needs best and if there are any discounts available you can choose them for this plan. For this lab, leave all settings as default and click on **Run Plan**.

![](./images/105/cloud6.png)

The plan may take few minutes to run. Once the plan has converged, the results will appear on the screen to the right. The plan will offer two routes to migrate your on-prem VMs to cloud.

- **Lift and Shift** : this plan tries to match your on-prem capacities with what exists in the cloud region. So applies minimal changes to the migrated VMs.
- **Optimize**: this plan not only simulates migration to the cloud region of your choice, but also optimizes this migration. It looks at the historical utilization of VMs and storage to select the best instance type and storage tier for each VM and disk.

The plan will also provide you with list of actions necessary to make this migration and their associated cost.

Explore the plan results further. Notice how the optimized migration will make the VMs run more efficiently and saves about 27% on cost compared to if you just do a lift and shift.

![](./images/105/cloud7.png)

## Custom Dashboards

A custom dashboard is a view that you create to focus on specific aspects of your environment. You can create dashboards that are private to your user account, or dashboards that are visible to any user who logs into your Turbonomic deployment.
