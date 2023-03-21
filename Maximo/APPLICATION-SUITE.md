# Maximo Application Suite

## Getting Started

### Demo Lab Environment Access

Completing this lab requires access to the latest version of the Maximo Application Suite (MAS) v8.6 demo cluster environment. To reserve the MAS demo environment, please perform the following steps:

1. Click on this [TechZone](https://techzone.ibm.com/my/reservations/create/635952829aaefe0019bea350) form to request access to the MAS demo environment.
2. On this form, select **Reserve now**.

<img width="1237" alt="1-mas" src="https://user-images.githubusercontent.com/40394344/225987130-86d17b0d-13ad-440b-8ca2-de8aa4c5e3a3.png">

3. Click on the **Purpose** dropdown and select **Practice/Self-Education** from the list **(A)**.
4. In the **Purpose description** textbox, enter “Level 3 demo” **(B)**.
5. Click on the **Preferred Geography** dropdown and select **Dallas 1 (VPC) (C)**.
6. Feel free to leave the **End date and time** fields as they are **(D)**.
7. Click **Submit (E)**.

   You will almost immediately receive an email notifying that your environment has begun provisioning. After 5-10 minutes, you’ll receive another email notifying you that your environment is ready, with details on how to access it.

   <img width="1290" alt="2-mas" src="https://user-images.githubusercontent.com/40394344/226028615-b2b99991-3c56-47e1-9fcd-beaee3c73ad9.png">

   **Caution:** The maximum duration for reserving this demo environment is 3 days (72 hours). Please try and complete this demo script within that time to avoid losing demo access before completion.

8. Once you receive an email notifying you that your environment is ready to use, locate the URL link in this email for the demo environment **MAS v8.6 Demo Environment URL** and the list of corresponding login credentials. This URL and login credentials will be used later in the demo script.

<img width="1179" alt="3-mas" src="https://user-images.githubusercontent.com/40394344/226029695-74b3aef9-46de-4cbe-9444-d11384152424.png">

9. Scroll down in the email to view a list of login credentials for each application in the Maximo Application Suite. Please take note of the username and password to demonstrate the Manage, Health, and Predict applications.

<img width="1173" alt="4-mas" src="https://user-images.githubusercontent.com/40394344/226029964-7f8553cf-6538-4c9b-99b4-8836a828af83.png">

### Instructions to Use Demo Script

The script in this document is arranged as follows:

1. **Actions:** Outline the presenters’ steps to complete the demo.
2. When instructions are given to enter text, the text is shown with double quotes around it (“this is an example”). This is to help indicate that you need to type all the text within the quotes. However, do not include the double quotes unless explicitly instructed.
3. Action instructions appear before the corresponding screenshot. For your convenience, **bolded text** is used to highlight the User interface (UI) elements in the action statements. The corresponding screenshot also uses a red bounded box and red arrow to point at the UI element. For example, instructions and their corresponding screenshots will appear like the following.

   1. Under the **Name** column, click on **tanking123000_model**.

   <img width="1257" alt="5-mas" src="https://user-images.githubusercontent.com/40394344/226030382-f1797248-c78c-416f-81db-41971cce5f41.png">

4. You will also notice that some action steps do not have a corresponding screenshot right away. Instead, a screenshot is shown after multiple related steps wherever it makes sense. In such cases, you will see bolded letters (like **A**, **B**, or **C**) at the end of each instruction in round brackets. At the end of such instructions, these letters correspond to the order of operations to follow and are consistent with the letters shown in the screenshot representing the multiple steps.

## IBM Maximo Application Suite at-a-glance

IBM Maximo Application Suite (MAS) provides clients with a comprehensive and innovative answer for physical asset management. This flexible solution provides a unified platform that delivers asset performance and maintenance management, with end-to-end asset lifecycle management across the enterprise.

Maximo Application Suite is built to scale a client’s digital transformation journey with integrated solutions, simplified licensing, and multi-cloud deployments. Maximo Application Suite includes a suite of applications such as Maximo Manage, Monitor, Health, Predict, Visual Inspection, and more.

This client demonstration provides a high-level overview of the Maximo’s Monitor, Manage, Health, and Predict applications, through a story about a water waste plant. This demo will connect these various applications, thus illustrating how they can work together to run operations within a business.

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

1. Click on this [Maximo Application Suite Demo Environment](https://wwdemo.home.wwdemomas8.gtm-pat.com/) URL link to launch IBM Maximo Application Suite and bring up the login page. Alternatively, you can also locate and click the MAS demo environment URL link from the email you received containing instructions to use the demo environment as shown in the screenshot below.

<img width="1138" alt="6-mas" src="https://user-images.githubusercontent.com/40394344/226031007-93ea7c43-088a-487b-962a-6fd3d2da7f31.png">

2. The **IBM Maximo Application Suite** login page opens in a web browser.

   1. Enter the Maximo Manage **Username (A)** found in the confirmation email and click **Continue (B)**.
   2. Enter the Maximo Manage **Password** found in the confirmation email and click **Log in** (image not shown for this step).

   <img width="1188" alt="7-mas" src="https://user-images.githubusercontent.com/40394344/226031260-54e3842b-c777-4f47-8d94-e471483dc873.png">

   Once the login credentials are accepted, the Maximo Application **Suite navigator** window opens. Several applications that make up the MAS products are displayed. In this demo, the focus will be on Maximo Monitor, Manage, Health, and Predict.

   <img width="1198" alt="8-mas" src="https://user-images.githubusercontent.com/40394344/226031467-641b1e1c-9382-45a4-8ed8-087b1d8b71ea.png">

   If this is your first-time logging into MAS, you may be prompted to view a quick application tour (how-to tutorial). Please dismiss any such tours for the purposes of this demo.

## Maximo Monitor and Manage

Maximo Monitor and Maximo Manage are ideal starting points for many clients as they begin their journey toward a new digital operating model. Monitor provides near-real-time monitoring capabilities for all enterprise assets. It is targeted to operations, and with it, clients can visualize incoming asset sensor readings on a single dashboard. They can also easily see and respond to alerts. Monitor helps to introduce artificial intelligence (AI) into operations to help recognize anomalies and eliminate false-positive alerts. Clients can react to those alerts directly from the dashboard by issuing service requests, or further investigate an asset’s maintenance history in Manage. Maximo Monitor and Manage together reduce unplanned downtime and increase productivity. The sensor data that flows into Monitor is also the basis of analysis in the other Maximo products, Health and Predict.

### Step 2: Review High Severity Alerts (Anomalies) in Monitor

An Operations Manager for this Water Resource Authority (WRA) needs to view the status of pump assets spread across multiple cities worldwide. This person will need to navigate to Maximo Monitor, as it provides a single place to monitor all enterprise mission-critical global assets from a single dashboard.

**Actions:**

3. From the Maximo **Suite navigator**, click the **Monitor** application tile.

<img width="1163" alt="9-mas" src="https://user-images.githubusercontent.com/40394344/226031815-63a13f1d-5c1c-4446-b9b3-0321030b3006.png">

4. Click the **Monitor** tile on the **Welcome** screen that opens.

<img width="1158" alt="10-mas" src="https://user-images.githubusercontent.com/40394344/226032038-192b29f7-da2c-4197-88c9-07621d63b591.png">

5. On the left sidebar, use the **right arrow (>)** icon to scroll all the Maximo Monitor options **(A)**.
6. Select the **Devices** tab **(B)** from the menu to view the list of device types in this WRA.

<img width="1075" alt="11-mas" src="https://user-images.githubusercontent.com/40394344/226032186-c5b3f651-fd6b-462f-809a-e153d4d2623f.png">

7. Type **“pump”** in the search bar to filter the results.

<img width="1097" alt="12-mas" src="https://user-images.githubusercontent.com/40394344/226032340-a70e238a-3fff-4a4d-bcf2-fb2b4cdf525b.png">

8. Click **Pump** from the filtered list to view a Pump summary dashboard that will appear on the right **(A)**.
9. Click on the left side bar’s **Hide sidebar** icon to collapse it **(B)**.

   <img width="1115" alt="13-mas" src="https://user-images.githubusercontent.com/40394344/226045698-2c272069-72db-4ebb-b095-c06ec9b21a59.png">

   Maximo Monitor allows users to categorize/group device types according to their specific business use case. For example, a user can have a separate dashboard according to an asset’s supplier type such as Original Equipment Manufacturer (OEM) and non-OEM. By selecting the Pump group, the operations manager is viewing metrics for all Pump assets in order to manage and view performance of that entire asset set together.

   The Operations Manager should now navigate through the summary dashboard to see a global map of pump sites. This summary dashboard summarizes important metrics relevant to a pump such as its motor temperature, pressure valves reading, and more. This provides real-time insights on any problems with these assets (These dashboards are fully customizable).

   The Operations Manager notices an alert on one of the site locations in the map (as seen by the triangle with an exclamation point inside).

10. Click on the **alert icon** displayed on the map to view a summary of the anomaly. Notice that a pump is causing an alert at the **Bedford Site**.

    <img width="1174" alt="14-mas" src="https://user-images.githubusercontent.com/40394344/226046290-035f77a4-3b81-47d9-8cf4-e402b25cb953.png">

11. Select the **Pump Alerts** tab to display a list of all pumps with alerts across this enterprise operations.

    <img width="1192" alt="15-mas" src="https://user-images.githubusercontent.com/40394344/226046435-747c7fd3-15ec-4dda-ba6a-a48fef4d7f50.png">

12. On the **Pump Alerts** tab, notice that there is an alert named **VELOCITYX_Alert_KMeans_Anomaly** for **PMPDEVICE005**.

    <img width="1357" alt="16-mas" src="https://user-images.githubusercontent.com/40394344/226047407-3464b32a-bb87-4484-93e6-ab0a10a940d8.png">

    Traditional threshold-based alerts can be overwhelming; Maximo Monitor uses Artificial Intelligence (AI) powered anomaly alerts to remove the false positives. The Operations Manager decided to investigate the PMPDEVICE005 pump further.

13. Click on the **Show sidebar** icon to expand it **(A)**.
14. Expand the **Pump** category by clicking on the **dropdown arrow** to see the full list of pumps in this category **(B)**.

    <img width="1181" alt="17-mas" src="https://user-images.githubusercontent.com/40394344/226047799-46960d66-86a6-40c8-bdcc-86e38a87351d.png">

15. Click on the **PMPDEVICE005** from the expanded list to bring up its dashboard on the right side of the page (If you don't see PMPDEVICE005 listed, scroll down the pump list until you find it). Collapse the left sidebar to view the dashboard in the full view mode.

    <img width="1139" alt="18-mas" src="https://user-images.githubusercontent.com/40394344/226048644-9b1e076b-9e18-4834-a91e-807ce70cc234.png">

16. The **PMPDEVICE005** dashboard marks the location of the pump on the site map using a flag icon and displays critical data about its anomaly alert(s).

    This site map saves the Remote Operations Manager time by pinpointing where exactly this troublesome pump is located at the **Bedford site** and provides critical data about the anomaly alerts. The picture of the pump shows the engineer which part of the pump is experiencing a problem using the alert icon. This is incredibly helpful because it is much easier to fix a problem with detailed knowledge of where it is and what it looks like.

    <img width="1187" alt="19-mas" src="https://user-images.githubusercontent.com/40394344/226049330-eaf2541c-fd28-4cc5-b386-f3b2a550e124.png">

17. Scroll down to view a timeseries of critical pump metrics and alerts for this pump.

    The timeseries of critical pump metrics can be used to investigate any anomalies and take appropriate actions. For example, if the average pump pressure is declining while the average flow is increasing over time, this warrants an investigation as to whether there are leaks in the pipeline. Based on such knowledge, an operations team can then investigate whether the pumps need to be serviced more frequently.

    <img width="1148" alt="20-mas" src="https://user-images.githubusercontent.com/40394344/226049889-353f8d0f-9bd9-4ffe-8d14-5ac580099fb0.png">

### Step 3: Review Asset Work order history

Next, the Operations Manager wants to look at this pump's maintenance history to see if there were any recent services done on it that could be the cause of the current problem.

18. On the **Asset Information** card on this dashboard (bottom right), click on the **PMPDEVICE005** hyperlink under the **Asset_ID** column to open Maximo Manage.

    <img width="1178" alt="21-mas" src="https://user-images.githubusercontent.com/40394344/226050420-c618307b-d38d-4883-a077-286a3f57a6a7.png">

19. The Maximo **Manage** window opens in a separate browser tab.

    <img width="1120" alt="22-mas" src="https://user-images.githubusercontent.com/40394344/226050588-a293d9af-81ec-4db6-8c0a-21188e791b64.png">

20. Select the **Work** tab **(A)** and then click on the filter icon (funnel) to see the available filter options **(B)**.
21. Type **“COMP”** in the **Status** box in the **Work Order** section to filter recent completed work orders for this pump **(C)**. Press **Return** on the keyboard to apply the filter.

    <img width="1161" alt="23-mas" src="https://user-images.githubusercontent.com/40394344/226051373-c1f7ca07-8c04-4a15-b8ce-d819ffd68d5c.png">

22. This is where the Operations Manager can review previously completed work orders to make informed decisions on how to proceed with any maintenance. Let’s assume they did not see any recent work orders that seem relevant.
23. The Operations Manager is convinced a new Service Request needs to be opened for investigation. Close the **Manage** browser tab **(A)**.
24. Return to the **Monitor** browser tab (where you started this demo) to view the **PMPDEVICE005** dashboard in Maximo Monitor **(B)**.

### Step 4: Assign Service Owner

In a real-world scenario, the Operations Manager would return to the VELOCITYX alert on PMPDEVICE005 and assign a Maintenance Supervisor as an owner of this alert. However, due to the shared environment, we will not assign this alert, but will investigate further in Step 5 below.

25. On the **PMPDEVICE005** dashboard in Monitor, scroll to the **ALERTS** section and click **“Select owner”** dropdown option. A list of email addresses of the maintenance team will appear.

    DO NOT ASSIGN THIS TO ANY USER, AS THIS WILL DETRIMENTALLY AFFECT OTHER DEMO USERS. Rather, it can instead be verbalized that this is where the alert could be assigned to the Maintenance Supervisor.

    <img width="1261" alt="24-mas" src="https://user-images.githubusercontent.com/40394344/226051580-f10fdb3f-0330-43a2-ab08-dfde66cd9f94.png">

### Step 5: View near-real-time Metric data from IoT sensors

The Remote Operations Manager decides to look at VelocityX real-time sensor data in the Monitor application to follow up on the AI-triggered VELOCITYX_Alert for this pump.

26. From the left most navigation sidebar (black colored left sidebar), select the **Setup** menu option.

    <img width="1163" alt="25-mas" src="https://user-images.githubusercontent.com/40394344/226052484-eb12b34b-1d57-4904-a8e1-33d93909bd24.png">

27. Select the **Devices** tab and in the search bar under **Device types** type **“pump”**

    <img width="1161" alt="26-mas" src="https://user-images.githubusercontent.com/40394344/226052813-544c44d8-9d45-4755-b766-19872b16b338.png">

28. Click on the **Pump** option from the filtered list to see all assets in this group. Then click the **PMPDEVICE005** hyperlink from the list of pumps that appears on the right.

    <img width="1175" alt="27-mas" src="https://user-images.githubusercontent.com/40394344/226053274-52ac58e5-6a36-4ee6-a526-a8bdbeae7077.png">

29. Click on the **down-arrow beside Metric (A)** and select **VELOCITYX** option from the expanded sub- menu.

    <img width="1188" alt="28-mas" src="https://user-images.githubusercontent.com/40394344/226053617-5b01be0a-9e5c-4314-9cd1-2f9132d7c6c3.png">

30. Notice that the graph of the **VELOCITYX** timeseries for this pump that appears on the right of the screen.

    <img width="1141" alt="29-mas" src="https://user-images.githubusercontent.com/40394344/226053930-2cc7ba45-e9fc-4408-8080-4e3f7f7311a8.png">

    The pump’s motor velocity vector is a combination of velocity in the X, Y, and Z axis. When any axis’ velocity – such as velocity in the X-axis direction (or “velocityX") – experiences exceptional vibration (as shown with the inconsistent y-axis values in this graph), there is something obviously very wrong with the asset.

    If a machine is having problems, it will often show signs beforehand. For example, a pump's operating motor speed or temperature may change by a small amount before the pump fails completely. These changes may go unnoticed by a human, but Maximo Monitor can use advanced AI models like “Anomaly detection” to look at critical sensor data. It can then find these subtle changes that are often indicators of an imminent failure. This way, appropriate individuals can be alerted to take preventative action and reduce costly downtime.

31. Click on **IBM Maximo Application Suite** (on the top left) to navigate back to the MAS **Suite Navigator**.

    <img width="1150" alt="30-mas" src="https://user-images.githubusercontent.com/40394344/226054254-500a5701-66d1-49cb-a18b-895b6b737554.png">

## Maximo Health and Predict

You will now play a role of a Reliability Engineer who must now investigate all similar pumps to the one that created multiple alerts in the previous section. This will ensure that there are no failures before the scheduled maintenance dates for the same reason. Maximo Health and Predict can provide a view of the current state of all enterprise assets (including pumps), as well as AI-powered insights into the projected future conditions of those assets.

In this part of the demo, the Reliability Engineer will identify the health score of PMPDEVICE005 and similar pumps that need attention, investigate those assets, and finally take an action to avoid unplanned downtime.

**Actions:**

32. Click on the **Health** application tile from the Maximo **Suite navigator**.

    <img width="1209" alt="31-mas" src="https://user-images.githubusercontent.com/40394344/226054526-17f93220-05e9-42b4-aa5b-0b2230b2f085.png">

33. The Maximo Health **Assets** page opens.

    <img width="1143" alt="32-mas" src="https://user-images.githubusercontent.com/40394344/226054748-f897e529-e7f1-4d96-a443-4ac3173ef107.png">

    The Maximo Health Asset page provides a universal view of all of the Water Resource Authority’s (WRA’s) managed assets. This is valuable to the reliability team as it allows them to see both IT data (from Maximo Manage) and Operational technology data (from Maximo Monitor) together in a single view. Many failures cannot be prevented with traditional time-based preventive maintenance strategies or solely based on sensor data. Individually, this data only provides part of the picture. Insights on past maintenance issues and service requests, the age of an asset, and historical investments enhances the "sensed conditions" of an asset with real insight. This is the power that Maximo Health and Manage provide.

### Step 5: Asset Health Score

With hundreds of assets deployed in any given complex operation, Maximo Health provides flexibility to generate and customize different views of asset data to make it easier to identify critical assets. Users have the option to add and move columns, filter, search, and sort according to their role and responsibilities.

In the next steps, the Reliability Engineer will utilize a pre-configured view that helps them make repeated pump performance monitoring easy and quick. This view includes filters on select pumps, a pump’s status column, and sorts them by OEM and non-OEM suppliers.

34. Click the selection box dropdown from the top section to view all the pre-saved views. (By default, **All (shared)** option is selected in this selection box)
35. Select the **PMP Devices (private)** saved view from the dropdown menu options that appear.

    <img width="1133" alt="33-mas" src="https://user-images.githubusercontent.com/40394344/226055178-7f2d437f-5d71-43b5-8c39-ce875498ed8c.png">

    In this saved pump view, the engineer can see two columns with calculated data (**Health** and **Days to failure**). Health scores provides a powerful and simplistic approach to combine and distill an asset’s condition assessment readings and historic maintenance history in a simple color-graded numeric scale. Similarly, ‘days to failure’ can help proactively identify assets that are going to fail in the next few days or weeks, allowing engineers to perform necessary corrective maintenance before any downtime occurs.

36. The Reliability Engineer can look at that the **Health** and **Days to failure** scores for various pumps to gauge the risk of multiple pump failures. A lower number of Health score means deteriorated asset health.

    <img width="1249" alt="34-mas" src="https://user-images.githubusercontent.com/40394344/226055453-e5601c64-7633-4971-8db8-d23658cbca12.png">

    It should be noted that risk tolerance can vary among industries, asset types, and enterprises. Monitor allows companies to define the health scoring ranges specific to their business operations tolerance levels and with their own color scheme.

37. Click the **Map** icon at the top right of the screen to view the health score of each of these pumps on a map view.

    <img width="1174" alt="35-mas" src="https://user-images.githubusercontent.com/40394344/226055570-38277f1e-2fce-43fc-9a9e-517ae4825615.png">

    Seeing how the assets are spatially distributed, along with their health score grade, assists the Reliability Engineers to identify and investigate assets at risk. This is particularly true in the Utilities industry, where assets are typically spread over a large geographical area.

    <img width="1166" alt="36-mas" src="https://user-images.githubusercontent.com/40394344/226055687-93ea3cc4-52e5-4f4d-89d9-97fa85753ad4.png">

### Step 6: Work Queue

The Reliability Engineer continues their investigation to determine which water pump(s) are expected to fail soon, yet don’t have a maintenance plan to address the failure. These are the assets more likely to result in unplanned downtime. The easiest way for a Reliability Engineer to do this is by using the work queue feature built into Maximo Health and Predict.

38. Click the **Work queues** menu option from the left sidebar menu list (it will auto-expand as you hover over it) to see the available queues.

    <img width="1210" alt="37-mas" src="https://user-images.githubusercontent.com/40394344/226057956-b886ad86-a72f-4c5c-b70e-d90fe11da4b1.png">

    Work queues are preconfigured views designed to help users find what they’re looking for and to manage their day-to-day activities. These are particularly valuable to a Reliability Engineer who needs to address a specific problem, like a water treatment plant trying to avoid unplanned downtime.

    There are several work queues included with Maximo Health and Predict. These include **High probability of failure**, **Low health**, and **Failing before Preventative Maintenance (PM)**. There are also work queues that show assets with missing data. Work queues describing missing data are extremely useful to a reliability engineer as they can help identify gaps in data necessary to create health scores or predictive failure model.

39. Select the **Failing before PM** work queue to see all the assets that are predicted to fail before planned maintenance work is scheduled for them. It is critical for the Reliability engineer to address these assets to avoid downtime of the water treatment plant.

    <img width="1110" alt="38-mas" src="https://user-images.githubusercontent.com/40394344/226058028-793d69b1-30a3-4d0a-bd33-4c68de940baf.png">

40. This work queue shows all the assets predicted to fail before their scheduled Preventive maintenance (PM). Click the search icon (the magnifying glass) at the top right and type **“pmp”**. Press **Return** on the keyboard to apply this filter and see a list of only pump assets.

    <img width="1179" alt="39-mas" src="https://user-images.githubusercontent.com/40394344/226058055-2489a8f4-79d2-41f0-a624-ffa19ddc5fee.png">

    <img width="1178" alt="40-mas" src="https://user-images.githubusercontent.com/40394344/226058077-bded524c-695a-4bc1-ac23-b325c3fcfac0.png">

41. According to the screen, there are multiple pumps that have a predicted failure before their next planned maintenance date, and they are all non-OEM (non- Original Equipment Manufacturer) pumps.

    <img width="1207" alt="41-mas" src="https://user-images.githubusercontent.com/40394344/226058124-67f5d636-0617-4846-bcf7-f6c1303a3bbb.png">

42. Click on **PMPDEVICE005** from this work queue list

    <img width="1237" alt="42-mas" src="https://user-images.githubusercontent.com/40394344/226058155-ffa4703a-158b-4f09-8972-caa4e349d73b.png">

### Step 7: Detailed Review of the Pump’s Health Score

43. The **PMPDEVICE005** asset’s health detail page opens.

    <img width="1280" alt="43-mas" src="https://user-images.githubusercontent.com/40394344/226058215-409a034d-84a6-4c13-90a0-5998b9e2aeab.png">

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

    <img width="1293" alt="44-mas" src="https://user-images.githubusercontent.com/40394344/226058292-31d8cf17-7643-4031-a367-8b02ead6de9f.png">

    For this asset, and assets in the same group, the Reliability Engineer can see that the health score is a weighted average of open work orders, remaining useful life, and meter health.

### Step 8: Explore available actions

Once the Reliability Engineer decides on what action to take, it can be immediately turned into action from the top of the page. They can create a service request, create a work order, recalculate a health score, or edit the source asset’s record.

45. **Scroll** back to the top of the page and click on the **Action** blue button in the top right corner. DO NOT CLICK ON ANY OF THESE OPTIONS, AS THIS WILL DETRIMENTALLY AFFECT OTHER DEMO USERS. Rather, it can instead be verbalized that there are available options to address this asset’s poor health.

    <img width="1294" alt="45-mas" src="https://user-images.githubusercontent.com/40394344/226058324-4ccae9f3-cdac-4118-9b9c-d097a094201e.png">

46. The Reliability Engineer can finally create and present a detailed report of their findings about current and predicted future state of PMPDEVICE005 (and similar pumps) to the Operations Manager.

## Maximo Predict

Maximo Predict includes templates to help enterprise Data Scientists to get started with building models to project days to failure, calculate probability of failure, detect anomalies, and generate an asset life curve based on an asset’s deployment and retirement dates. These templates include many algorithms, and the Data Scientists can select the one that best fits their data and needs to drive an optimal outcome.

In addition, the Maximo Application Suite includes Watson Studio and Watson Machine Learning, which can be used for building, training, and maintaining predictive models if a more custom solution is needed.

**Actions:**

47. Scroll down and click **Predictions** to expand this tab.

    <img width="1277" alt="46-mas" src="https://user-images.githubusercontent.com/40394344/226058367-98e3bf7e-9ff8-4d72-8de7-aa2ecf6a5dc2.png">

48. The **Predictions** section opens showing the selected pump’s predictive KPIs and failure probability graphs.

    Brief information about the contents of each tile can be found by clicking on the info icon next to each tile’s title.

    <img width="1247" alt="47-mas" src="https://user-images.githubusercontent.com/40394344/226058442-444a66e5-e1b2-495c-95d3-c75d9a64f5ff.png">

### Step 9: Predicted Failure Model

The AI model predicts that this pump will fail within a certain number of days, plus or minus a specified period. If the data history for this asset is rich enough, a Data Scientist can also build predictive models for specific failure modes. It helps to know the probability of failure along with the most probable failure reason (failure mode). For example, knowing information such as “there is a 40% chance the pump will fail within the next 30 days due to the motor failure” is very useful. In this case, the model would look for a sequence of events that led to this failure mode and provide the pump's probability of failure due to its motor burnout. In this way, it helps to plan for preventive maintenance actions.

49. In the **Estimated time to failure** card located at the top left of this page, ensure **PUMPS/STOPPED** failure mode is selected from the dropdown.

    <img width="1045" alt="48-mas" src="https://user-images.githubusercontent.com/40394344/226058497-e3a45815-ab33-4bff-a7e7-4470abfd2bbb.png">

50. The timeframe of the training data in this tile can help to decide if and when the AI model should be retrained.

    <img width="1259" alt="49-mas" src="https://user-images.githubusercontent.com/40394344/226058551-bc078c96-e67d-4254-9016-c9b8c664d575.png">

51. On the **Failure probability** tile, notice the probability of the selected failure mode occurring in the selected prediction **Time window** (currently pre-selected to 2 days as shown at the bottom left of this tile). You can see that this pump has a 0% chance of failing in the next two days (based on the screenshot below).

    <img width="1306" alt="50-mas" src="https://user-images.githubusercontent.com/40394344/226058587-0666eed1-d612-45cf-9869-2730fd18ec31.png">

52. Scroll down to the **Failure probability trend** card (it’s right below **Estimated time to failure** tile). This card shows the failure probability history for each mode, indicating how the probability of failure has changed over time.

    <img width="1214" alt="51-mas" src="https://user-images.githubusercontent.com/40394344/226058619-4d9c16b7-9ab0-4301-873f-262dc8f68092.png">

53. Scroll down to the **Factors that contribute to failures** card (it’s right below **Failure probability trend tile**). It shows which factors from the training data had the biggest impact on failures. This gives an idea of what might cause future failures.

    <img width="1201" alt="52-mas" src="https://user-images.githubusercontent.com/40394344/226058641-117d1223-665b-4ebb-9a38-3ead0728bd9a.png">

54. Scroll to the **Anomaly detection** and **Anomaly detection history** cards which show the anomaly scores for this pump as well as when it crossed the threshold value (red dotted line on the **Anomaly detection history** timeseries graph).

    <img width="1158" alt="53-mas" src="https://user-images.githubusercontent.com/40394344/226058661-b36349f1-2334-4bd5-81e3-d503add1138c.png">

### Step 10: Asset Timeline

55. Scroll down and expand the **Asset timeline** twisty.

    <img width="1349" alt="54-mas" src="https://user-images.githubusercontent.com/40394344/226058750-38c4dd11-d472-4ba8-9d3b-ab39f205b6ed.png">

56. The **Asset timeline** tab provides several pieces of key information about this asset within a single graph.

    Looking at this timeline, the selected pump has a predicted failure (PF) date that will occur before its next planned preventative maintenance (PM) scheduled date! other information from the chart, like past work order and inspection dates, provides valuable insight into the asset's history and may support what kind of action needs to be taken.

    <img width="1188" alt="55-mas" src="https://user-images.githubusercontent.com/40394344/226058798-99831daa-9f84-4a26-97e7-059407476dda.png">

## Closing Remarks

This end-to-end demonstration has shown how an Operations Manager can use AI anomaly detection to monitor all of their enterprise's pumps in near-real time, eliminating false positive alerts. This persona was able to investigate an asset in trouble and submit a service request all by using Maximo Monitor and Maximo Manage.

This demo has also shown how enterprises can detect the current and predicted future conditions of thousands of assets at scale using Maximo Manage and Predict, thus ensuring that operational teams aren't over- or under-maintaining assets. As users address the assets in a work queue, they can provide their organizations tremendous value by reducing downtime, saving on maintenance and operational costs, and increasing revenue.
