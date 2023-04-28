---
title: '102: Connect Instana to Turbonomic'
timeToComplete: 30
updated: 2023-05-01
---

# 102: Connect Instana to Turbonomic

## Goal

In this lab, you will add one target to your Turbonomic environment

- An application performance monitoring target - Instana

## Adding Instana Target

Turbonomic supports discovery of applications that are managed by APM tools - in this case the Instana platform. Turbonomic includes the discovered information about these applications in its calculations for environment health.

We have already prepared an Instana server for your environment. This server is monitoring two applications: RobotShop and Quote of the Day. In this section, you will go through steps to add this Instana instance to your Turbonomic environment.

### Generate Instana API Token

1. To connect Instana to Turbonomic you will need API token from your Instana server so that Turbonomic can authenticate the connection. To generate this key navigate to you bastion VM and click on the Instana tab.

2. This will take you to the Instana login page. log in using your Instana credentials. Instana credentials are provided in Turbo-PoT-Credentials tab.

![](./images/102/instanatab.png)

3. Once you logged in, click on the gear icon on the left menu to open settings.

![](./images/102/instana2.png)

4. In the settings page, under **Team Settings** click on **API Tokens**. Then click on **Add New Token**.

![](./images/102/instana3.png)

5. Give your token a unique name like _api_YourInitials_. Then scroll down and click on **Save**. You can leave all other settings as default.

![](./images/102/instana4.png)

![](./images/102/instana5.png)

6. Now click on the eye icon to reveal your API token and take a note of it. You will need this key in next section.

### Add Instana as a target

1. Navigate to your Turbonomic console on the bastion VM, then click on **Settings** from the navigator.

![](./images/102/turbo-main.png)

2. Select the **Target Configuration** option. This will open up the page containing all configured targets.

![](./images/102/target-settings.png)

3. Click on **New Target**. This will open up a page with a list of available target types for this environment.

_**Tip**: This is not an extensive list of available target types. To view the full list and supported versions visit the [documentation site](https://www.ibm.com/docs/en/tarm/8.8.0?topic=overview-turbonomic-targets)._

![](./images/102/target-page.png)

4. From the list select **Applications and Databases**. Then select **Instana**.

![](./images/102/add-instana-1.png)

![](./images/102/add-instana-2.png)

5. To add Instana all you need is the host name or IP address of your instana server, and an API token generated from your Instana backend. Once you filled out these information click on **Add** at the bottom of the page. Since we don't have a proxy we can leave those parts empty.

_**Note**: If you see the host name and/or IP address is prepopulated as administrator and a password in this step, clear both and type in your information._

_**Tip**: Keep in mind, the hostname or IP address must be visible to Turbonomic. If you have your Instana and Turbonomic instances installed in different networks or the communication between them is blocked by a firewall, the target configuration will fail._

![](./images/102/add-instana-3.png)

6. Your newly added Instana target will appear in your list of targets. Check the **status** and **severity**, it must show as **Validated** and **Normal**. Congratulations, you have successfully connected your Instana environment to Turbonomic.

![](./images/102/validated.png)

Now that you have added a new target, allow 15 minutes for Turbonomic to run discovery and add the data from Instana. To check this, look at your top business applications and look for two applications that will be added in from Instana: **Quote of the Day**, and **RobotShop**.

![](./images/102/listapps.png)

![](./images/102/apps.png)
