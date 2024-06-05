---
title: Application Suite
timeToComplete: 30
updated: 2023-03-24
---

# Maximo Application Suite

In this lab you will get a tour of how 4 key applications within Maximo Application Suite (MAS) can be used to troubleshoot a real world situation. All L3 Quiz questions can be answered using this lab.

HEADS UP! L3 Quiz Content denoted with 🟢

## Lab Story Line

A Water Resource Authority (WRA) needs to manage water and wastewater treatment assets across multiple cities and regions to maintain water quality standards.

**Scene 1: Remote Operational Manager monitors assets in Maximo Monitor**

1. The Operational Support Manager navigates to a summary dashboard of all the pumps in this WRA.
2. The Manager sees a critical alert for a pump and decides to investigate further.
3. The Manager reviews the asset’s maintenance history.
4. The Manager monitors the pump's velocity using the sensor data.
5. The Manager assigns an owner to take care of the vibration issue with the pump.

**Scene 2: Reliability Engineer (RE) views current and predicted asset performance in Maximo Health and Predict**

1. The RE views the health scores of all the pumps in this WRA in a single grid view.
2. The RE find assets with predicted failures before their planned maintenance.
3. The RE further investigates the underperforming pump that is predicted to fail before its next
   scheduled maintenance.
4. The RE reviews the asset detail page and the asset timeline

## Lab Script

### Step 1: Log into the Maximo Application Suite Navigator

To complete this step, please refer to the email confirming your demo access and containing instructions to access the demo environment.

**Actions:**

1. Click on this [Maximo Application Suite Demo Environment](https://wwdemo.home.wwdemomas8.gtm-pat.com/) URL link to launch IBM Maximo Application Suite and bring up the login page. Alternatively, you can also locate and click the MAS demo environment URL link from the email you received after TechZone environment reservation.

2. The **IBM Maximo Application Suite** login page opens in a web browser.

   - Enter the Maximo Manage **Username (A)** found in the confirmation email and click **Continue (B)**.

   - Enter the Maximo Manage **Password** found in the confirmation email and click **Log in** (image not shown for this step).

   ![](_attatchments/mas/login.png)
   <br />
   Once the login credentials are accepted, the Maximo Application **Suite navigator** window opens. Several applications that make up the MAS products are displayed. In this demo, the focus will be on Maximo Monitor, Manage, Health, and Predict.

   ![](_attatchments/mas/suite-navigator.png)

### Step 2: Review High Severity Alerts (Anomalies) in Monitor

An Operations Manager for this Water Resource Authority (WRA) needs to view the status of pump assets spread across multiple cities worldwide. This person will need to navigate to Maximo Monitor, as it provides a single place to monitor all enterprise mission-critical global assets from a single dashboard.

**Actions:**

3. From the Maximo **Suite navigator**, click the **Monitor** application tile.

   ![](_attatchments/mas/suite-nav-monitor.png)

4. Click the **Monitor** tile on the **Welcome** screen that opens.

   ![](_attatchments/mas/monitor-root.png)

5. On the left sidebar, use the **right arrow (>)** icon to scroll all the Maximo Monitor options **(A)**.
6. Select the **Devices** tab **(B)** from the menu to view the list of device types in this WRA.

   ![](_attatchments/mas/monitor-devices.png)

7. Type **“pump”** in the search bar to filter the results.

   ![](_attatchments/mas/monitor-devices-pump.png)

8. Click **Pump** from the filtered list to view a Pump summary dashboard that will appear on the right **(A)**.

9. Click on the left side bar’s **Hide sidebar** icon to collapse it **(B)**.

   ![](_attatchments/mas/monitor-devices-hide.png)

   Maximo Monitor allows users to categorize/group device types according to their specific business use case. For example, a user can have a separate dashboard according to an asset’s supplier type such as Original Equipment Manufacturer (OEM) and non-OEM. By selecting the Pump group, the operations manager is viewing metrics for all Pump assets in order to manage and view performance of that entire asset set together.

   The Operations Manager should now navigate through the summary dashboard to see a global map of pump sites. This summary dashboard summarizes important metrics relevant to a pump such as its motor temperature, pressure valves reading, and more. This provides real-time insights on any problems with these assets (These dashboards are fully customizable).

   The Operations Manager notices an alert on one of the site locations in the map (as seen by the triangle with an exclamation point inside).

10. Click on the **alert icon** displayed on the map to view a summary of the anomaly. Notice that a pump is causing an alert at the **Bedford Site**. 🟢

    ![](_attatchments/mas/monitor-pump-alert.png)

11. Select the **Pump Alerts** tab to display a list of all pumps with alerts across this enterprise operations.

    ![](_attatchments/mas/monitor-pump-alert-tab.png)

12. On the **Pump Alerts** tab, notice that there is an alert named **VELOCITYX_Alert_KMeans_Anomaly** for **PMPDEVICE005**.
    **NOTE**: New alerts are generated frequently. You may need to filter on you may need to filter by "005" int he Search textbox to find it. But we will be working with PMPDEVICE005.

    ![](_attatchments/mas/monitor-pump-alert-velocity.png)

    Traditional threshold-based alerts can be overwhelming; Maximo Monitor uses Artificial Intelligence (AI) powered anomaly alerts to remove the false positives. The Operations Manager decided to investigate the PMPDEVICE005 pump further.

13. Click on the **Show sidebar** icon to expand it **(A)**.
14. Expand the **Pump** category by clicking on the **dropdown arrow** to see the full list of pumps in this category **(B)**.

    ![](_attatchments/mas/monitor-devices-pump-dropdown.png)

15. Click on the **PMPDEVICE005** from the expanded list to bring up its dashboard on the right side of the page (If you don't see PMPDEVICE005 listed, scroll down the pump list until you find it). Collapse the left sidebar to view the dashboard in the full view mode. 🟢

    ![](_attatchments/mas/monitor-devices-pump-select.png)

16. The **PMPDEVICE005** dashboard marks the location of the pump on the site map using a flag icon and displays critical data about its anomaly alert(s).

    This site map saves the Remote Operations Manager time by pinpointing where exactly this troublesome pump is located at the **Bedford site** and provides critical data about the anomaly alerts. The picture of the pump shows the engineer which part of the pump is experiencing a problem using the alert icon. This is incredibly helpful because it is much easier to fix a problem with detailed knowledge of where it is and what it looks like.

    ![](_attatchments/mas/monitor-pump-dashboard.png)

17. Scroll down to view a timeseries of critical pump metrics and alerts for this pump.

    The timeseries of critical pump metrics can be used to investigate any anomalies and take appropriate actions. For example, if the average pump pressure is declining while the average flow is increasing over time, this warrants an investigation as to whether there are leaks in the pipeline. Based on such knowledge, an operations team can then investigate whether the pumps need to be serviced more frequently.

    ![](_attatchments/mas/monitor-pump-timeseries.png)

### Step 3: Review Asset Work order history

Next, the Operations Manager wants to look at this pump's maintenance history to see if there were any recent services done on it that could be the cause of the current problem.

18. On the **Asset Information** card on this dashboard (bottom right), click on the **PMPDEVICE005** hyperlink under the **Asset_ID** column to open Maximo Manage. 🟢

    ![](_attatchments/mas/monitor-manage-asset-link.png)

19. The Maximo **Manage** window opens in a separate browser tab.

    ![](_attatchments/mas/manage-assets.png)

20. Select the **Work** tab **(A)** and then click on the filter icon (funnel) to see the available filter options **(B)**.
21. Type **“COMP”** in the **Status** box in the **Work Order** section to filter recent completed work orders for this pump **(C)**. Press **Return** on the keyboard to apply the filter.

    ![](_attatchments/mas/manage-assets-work.png)

22. This is where the Operations Manager can review previously completed work orders to make informed decisions on how to proceed with any maintenance. Let’s assume they did not see any recent work orders that seem relevant.

23. The Operations Manager is convinced a new Service Request needs to be opened for investigation. Close the **Manage** browser tab **(A)**.

24. Return to the **Monitor** browser tab (where you started this demo) to view the **PMPDEVICE005** dashboard in Maximo Monitor **(B)**.

### Step 4: Assign Service Owner

In a real-world scenario, the Operations Manager would return to the VELOCITYX alert on PMPDEVICE005 and assign a Maintenance Supervisor as an owner of this alert. However, to preserve this use case in the shared environment will not assign this alert, but will investigate further in Step 5 below.

25. This is a placeholder step to mention that an Operations Manager could easily assign a service owner from the device dashboard.

### Step 5: View near-real-time Metric data from IoT sensors

The Remote Operations Manager decides to look at VelocityX real-time sensor data in the Monitor application to follow up on the AI-triggered VELOCITYX_Alert for this pump.

26. From the left most navigation sidebar (black colored left sidebar), select the **Setup** menu option.

    ![](_attatchments/mas/monitor-setup.png)

27. Select the **Devices** tab and in the search bar under **Device types** type **“pump”**

    ![](_attatchments/mas/monitor-setup-devices.png)

28. Click on the **Pump** option from the filtered list to see all assets in this group. Then click the **PMPDEVICE005** hyperlink from the list of pumps that appears on the right.

    ![](_attatchments/mas/monitor-setup-devices-pump.png)

29. Click on the **down-arrow beside Metric (A)** and select **VELOCITYX** option from the expanded sub- menu.

    ![](_attatchments/mas/monitor-setup-pump-data.png)

30. Notice that the graph of the **VELOCITYX** timeseries for this pump that appears on the right of the screen.

    ![](_attatchments/mas/monitor-setup-pump-velocityx.png)

    The pump’s motor velocity vector is a combination of velocity in the X, Y, and Z axis. When any axis’ velocity – such as velocity in the X-axis direction (or “velocityX") – experiences exceptional vibration (as shown with the inconsistent y-axis values in this graph), there is something obviously very wrong with the asset.

    If a machine is having problems, it will often show signs beforehand. For example, a pump's operating motor speed or temperature may change by a small amount before the pump fails completely. These changes may go unnoticed by a human, but Maximo Monitor can use advanced AI models like “Anomaly detection” to look at critical sensor data. It can then find these subtle changes that are often indicators of an imminent failure. This way, appropriate individuals can be alerted to take preventative action and reduce costly downtime.

31. Click on **IBM Maximo Application Suite** (on the top left) to navigate back to the MAS **Suite Navigator**.

    ![](_attatchments/mas/monitor-setup-click-header.png)

## Maximo Health and Predict

You will now play a role of a Reliability Engineer who must now investigate all similar pumps to the one that created multiple alerts in the previous section. This will ensure that there are no failures before the scheduled maintenance dates for the same reason. Maximo Health and Predict can provide a view of the current state of all enterprise assets (including pumps), as well as AI-powered insights into the projected future conditions of those assets.

In this part of the demo, the Reliability Engineer will identify the health score of PMPDEVICE005 and similar pumps that need attention, investigate those assets, and finally take an action to avoid unplanned downtime.

**Actions:**

32. Click on the **Health** application tile from the Maximo **Suite navigator**.

    ![](_attatchments/mas/suite-nav-health.png)

33. The Maximo Health **Assets** page opens.

    ![](_attatchments/mas/health-assets.png)

    The Maximo Health Asset page provides a universal view of all of the Water Resource Authority’s (WRA’s) managed assets. This is valuable to the reliability team as it allows them to see both IT data (from Maximo Manage) and Operational technology data (from Maximo Monitor) together in a single view. Many failures cannot be prevented with traditional time-based preventive maintenance strategies or solely based on sensor data. Individually, this data only provides part of the picture. Insights on past maintenance issues and service requests, the age of an asset, and historical investments enhances the "sensed conditions" of an asset with real insight. This is the power that Maximo Health and Manage provide.

### Step 5: Asset Health Score

With hundreds of assets deployed in any given complex operation, Maximo Health provides flexibility to generate and customize different views of asset data to make it easier to identify critical assets. Users have the option to add and move columns, filter, search, and sort according to their role and responsibilities.

In the next steps, the Reliability Engineer will utilize a pre-configured view that helps them make repeated pump performance monitoring easy and quick. This view includes filters on select pumps, a pump’s status column, and sorts them by OEM and non-OEM suppliers.

34. Click the selection box dropdown from the top section to view all the pre-saved views. (By default, **All (shared)** option is selected in this selection box)
35. Select the **PMP Devices (private)** saved view from the dropdown menu options that appear.

    ![](_attatchments/mas/health-assets-pmpdevices.png)

    In this saved pump view, the engineer can see two columns with calculated data (**Health** and **Days to failure**). Health scores provides a powerful and simplistic approach to combine and distill an asset’s condition assessment readings and historic maintenance history in a simple color-graded numeric scale. Similarly, ‘days to failure’ can help proactively identify assets that are going to fail in the next few days or weeks, allowing engineers to perform necessary corrective maintenance before any downtime occurs.

36. The Reliability Engineer can look at that the **Health** and **Days to failure** scores for various pumps to gauge the risk of multiple pump failures. A lower number of Health score means deteriorated asset health.

    ![](_attatchments/mas/health-assets-pmpdevices2.png)

    It should be noted that risk tolerance can vary among industries, asset types, and enterprises. Monitor allows companies to define the health scoring ranges specific to their business operations tolerance levels and with their own color scheme.

37. Click the **Map** icon at the top right of the screen to view the health score of each of these pumps on a map view.

    ![](_attatchments/mas/health-assets-pmpdevices3.png)

    Seeing how the assets are spatially distributed, along with their health score grade, assists the Reliability Engineers to identify and investigate assets at risk. This is particularly true in the Utilities industry, where assets are typically spread over a large geographical area.

    ![](_attatchments/mas/health-assets-map.png)

### Step 6: Work Queue

The Reliability Engineer continues their investigation to determine which water pump(s) are expected to fail soon, yet don’t have a maintenance plan to address the failure. These are the assets more likely to result in unplanned downtime. The easiest way for a Reliability Engineer to do this is by using the work queue feature built into Maximo Health and Predict.

38. Click the **Work queues** menu option from the left sidebar menu list (it will auto-expand as you hover over it) to see the available queues.

    ![](_attatchments/mas/health-work-queue.png)

    Work queues are preconfigured views designed to help users find what they’re looking for and to manage their day-to-day activities. These are particularly valuable to a Reliability Engineer who needs to address a specific problem, like a water treatment plant trying to avoid unplanned downtime.

    There are several work queues included with Maximo Health and Predict. These include **High probability of failure**, **Low health**, and **Failing before Preventative Maintenance (PM)**. There are also work queues that show assets with missing data. Work queues describing missing data are extremely useful to a reliability engineer as they can help identify gaps in data necessary to create health scores or predictive failure model.

39. Select the **Failing before PM** work queue to see all the assets that are predicted to fail before planned maintenance work is scheduled for them. It is critical for the Reliability engineer to address these assets to avoid downtime of the water treatment plant.

    ![](_attatchments/mas/health-work-queue2.png)

40. This work queue shows all the assets predicted to fail before their scheduled Preventive maintenance (PM). Click the search icon (the magnifying glass) at the top right and type **“pmp”**. Press **Return** on the keyboard to apply this filter and see a list of only pump assets.

    ![](_attatchments/mas/health-work-queue3.png)

    ![](_attatchments/mas/health-work-queue4.png)

41. According to the screen, there are multiple pumps that have a predicted failure before their next planned maintenance date, and they are all non-OEM (non- Original Equipment Manufacturer) pumps.

    ![](_attatchments/mas/health-work-queue5.png)

42. Click on **PMPDEVICE005** from this work queue list

    ![](_attatchments/mas/health-work-queue6.png)

### Step 7: Detailed Review of the Pump’s Health Score

43. The **PMPDEVICE005** asset’s health detail page opens.

    ![](_attatchments/mas/health-work-queue-pump.png)

    The PMPDEVICE005 asset’s health details page is an incredibly useful tool for investigating a pump’s current and predicted future conditions. The Reliability Engineer can find all the asset’s information presented on a single page, and in easy-to-read tables, charts, and graphs.

    The Key Performance Indicators (KPIs) at the top of the Asset Health details page provide a snapshot of the current state of this pump. The health score of the pump is listed. If a previous health score was calculated, the title cards also show the increase or decrease in asset health since the last calculation.

    Because this is a live and dynamic demo environment that is also used by other sellers, the percentages shown in this script may vary from what you may see in the demo environment. Therefore, this script attempts to be generic in language.

    Clicking on the information icon (small _i_ in a circle) in each of these KPI tiles provides a brief description about the corresponding metric. Specifically:

    1. **Health Score:** The overall condition of the asset on a user defined scale. This helps to gauge the general maintenance needs of the asset.
    2. **Criticality:** The importance of an asset to its business. This helps to prioritize maintenance and repair activities.
    3. **Risk:** The probability of a high-impact failure. This helps to identify potential problems before they occur.
    4. **End of life:** The probability of an imminent end-of-life failure. This helps to schedule replacement of the asset in a timely manner.
    5. **Effective age:** Effective age is the actual age relative to the asset's current health score. This helps to determine the remaining useful life of the asset.
    6. **Next PM:** The days until the next scheduled generation of a preventive maintenance (PM) work order. The card is empty if the generation date is the current date or no other work order generations are scheduled. This helps to ensure that PM work orders are generated in a timely manner.
    7. **MRR:** The maintenance-to-replacement ratio (MRR) for the asset. The MRR is calculated by dividing the current total cost of all maintenance for the asset, including parts and labor, by the replacement cost. If the percentage is 100% or greater, the current total cost of the asset is greater than the cost to replace the asset.
    8. **Next failure:** The time until the asset is predicted to fail, according to a predictive model. This helps to prioritize actions and schedule asset maintenance.

    Below the KPI section, the Reliability Engineer can view more information about this pump, which comes directly from the Water Resource Authority’s Enterprise Asset Management (EAM) system (in this case, Maximo Manage).

44. Scroll to the **Health details** section. This section shows a breakdown of the health score drivers and factors that provide insight into what is causing this pump’s poor health.

    ![](_attatchments/mas/health-work-queue-pump2.png)

    For this asset, and assets in the same group, the Reliability Engineer can see that the health score is a weighted average of open work orders, remaining useful life, and meter health.

### Step 8: Explore available actions

45. Once the Reliability Engineer decides on what action to take, it can be immediately turned into action from the top of the page. They can create a service request, create a work order, recalculate a health score, or edit the source asset’s record. We will NOT take any action in the shared environment.

46. The Reliability Engineer can finally create and present a detailed report of their findings about current and predicted future state of PMPDEVICE005 (and similar pumps) to the Operations Manager.

## Maximo Predict

Maximo Predict includes templates to help enterprise Data Scientists to get started with building models to project days to failure, calculate probability of failure, detect anomalies, and generate an asset life curve based on an asset’s deployment and retirement dates. These templates include many algorithms, and the Data Scientists can select the one that best fits their data and needs to drive an optimal outcome.

In addition, the Maximo Application Suite includes Watson Studio and Watson Machine Learning, which can be used for building, training, and maintaining predictive models if a more custom solution is needed.

**Actions:**

47. Scroll down and click **Predictions** to expand this tab.

    ![](_attatchments/mas/predict-predictions.png)

48. The **Predictions** section opens showing the selected pump’s predictive KPIs and failure probability graphs.

    Brief information about the contents of each tile can be found by clicking on the info icon next to each tile’s title.

    ![](_attatchments/mas/predict-predictions2.png)

### Step 9: Predicted Failure Model

The AI model predicts that this pump will fail within a certain number of days, plus or minus a specified period. If the data history for this asset is rich enough, a Data Scientist can also build predictive models for specific failure modes. It helps to know the probability of failure along with the most probable failure reason (failure mode). For example, knowing information such as “there is a 40% chance the pump will fail within the next 30 days due to the motor failure” is very useful. In this case, the model would look for a sequence of events that led to this failure mode and provide the pump's probability of failure due to its motor burnout. In this way, it helps to plan for preventive maintenance actions.

49. In the **Estimated time to failure** card located at the top left of this page, ensure **PUMPS/STOPPED** failure mode is selected from the dropdown.

    ![](_attatchments/mas/predict-predictions3.png)

50. The timeframe of the training data in this tile can help to decide if and when the AI model should be retrained.

    ![](_attatchments/mas/predict-predictions4.png)

51. On the **Failure probability** tile, notice the probability of the selected failure mode occurring in the selected prediction **Time window** (currently pre-selected to 2 days as shown at the bottom left of this tile). You can see that this pump has a 0% chance of failing in the next two days (based on the screenshot below). 🟢

    ![](_attatchments/mas/predict-predictions5.png)

52. Scroll down to the **Failure probability trend** card (it’s right below **Estimated time to failure** tile). This card shows the failure probability history for each mode, indicating how the probability of failure has changed over time.

    ![](_attatchments/mas/predict-predictions6.png)

53. Scroll down to the **Factors that contribute to failures** card (it’s right below **Failure probability trend tile**). It shows which factors from the training data had the biggest impact on failures. This gives an idea of what might cause future failures.

    ![](_attatchments/mas/predict-predictions7.png)

54. Scroll to the **Anomaly detection** and **Anomaly detection history** cards which show the anomaly scores for this pump as well as when it crossed the threshold value (red dotted line on the **Anomaly detection history** timeseries graph).

    ![](_attatchments/mas/predict-predictions8.png)

### Step 10: Asset Timeline

55. Scroll down and expand the **Asset timeline** twisty.

    ![](_attatchments/mas/predict-asset-timeline.png)

56. The **Asset timeline** tab provides several pieces of key information about this asset within a single graph. 🟢

    Looking at this timeline, the selected pump has a predicted failure (PF) date that will occur before its next planned preventative maintenance (PM) scheduled date! other information from the chart, like past work order and inspection dates, provides valuable insight into the asset's history and may support what kind of action needs to be taken.

    ![](_attatchments/mas/predict-asset-timeline2.png)

## Closing Remarks

This end-to-end demonstration has shown how an Operations Manager can use AI anomaly detection to monitor all of their enterprise's pumps in near-real time, eliminating false positive alerts. This persona was able to investigate an asset in trouble and submit a service request all by using Maximo Monitor and Maximo Manage.

This demo has also shown how enterprises can detect the current and predicted future conditions of thousands of assets at scale using Maximo Manage and Predict, thus ensuring that operational teams aren't over- or under-maintaining assets. As users address the assets in a work queue, they can provide their organizations tremendous value by reducing downtime, saving on maintenance and operational costs, and increasing revenue.
