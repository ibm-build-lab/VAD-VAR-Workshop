In this chapter, learn how to create a B2Bi partner community, add partners to the community, create a group with these users, create a routing template for the group, and create routing channels.

To make this workshop interesting, we will implement a collection of trading partner networks, with each sharing files within their network. To do this, each workshop participant will uniquely name resources by using a prefix of their initials on resources. All of the examples that follow are what Bilbo Baggins would use (bb).

## Create a partner community

1. Return to the OpenShift web console and click on the route link to the IBM Sterling File Gateway user interface (UI): **sterling-fg-b2bi-asi-internal-route-filegateway**.

    ![](_attachments/OSRoutesFileGateway.png)

1. Enter **fg_sysadmin** in the User ID field, **password#** in the Password field, and then click the **Sign In** button.

    ![](_attachments/FG_login.png)

1. Click the **Participants** pull-down menu item on top menu bar.

    ![](_attachments/FG_Participants.png)

1. Click **Communities** in the **Participants** menu.

    ![](_attachments/FG_CommunitiesMenu.png)

1. In the **Communities** pop-up window, click the **add** link.

    ![](_attachments/FG_CommunitiesAddLink.png)

1. Append your initials to the community name followed by an underscore. For example, Bilbo Baggins would enter **bb_sftp_community** in the **Community Name** entry field and click **Next**.

    ![](_attachments/BB_FG_CommunitiesName.png)

1. Select both the **Partner Initiates Protocol Connections to Mailbox** and the **Partner Listens for Protocol Connections** check boxes.

    ![](_attachments/FG_CommunitiesProtocol-1.png)

1. Select the **SSH/SFTP** checkbox and click **Next**.

    ![](_attachments/FG_CommunitiesProtocol-2.png)

1. Click **Next** on the **Add Community: Notifications** form.

    ![](_attachments/FG_CommunitiesNotifications.png)

1. Click **Finish** to confirm the creation of the new community.

    ![](_attachments/FG_CommunitiesFinish.png)

1. Click **Return** on the community confirmation screen.

    ![](_attachments/FG_CommunitiesComplete.png)

## Add partners to the partner community

Next, add 2 partners to the newly created **bb-sftp_community**.

1. Click the **edit** link for the community that has your initials as the prefix (following the same example for Bilbo): **bb_sftp_community** on the **Communities** pop-up window.

    ![](_attachments/BB_FG_CommunitiesEdit.png)

1. Under **Partner**, click the **Add** link.

    ![](_attachments/BB_FG_CommunitiesDetails.png)

1. Use your initials followed by a **dash** as a prefix for the first partner identifier. Enter **bb-partner1** in the **Partner Name** field, 10 digits in the **Phone** field, **bb-partner1@localhost.com** in the **Email Address** field, and then click **Next**.

    ![](_attachments/BB_FG_CommunitiesPartner1.png)

1. Enter **bb-partner1** in the **User Name** field, **password** in the **Password** field, **password** in the **Confirm Password** field, **BB Partner** in the **Given Name** field, **One** in **Surname** field, and then click **Next**. Technically, you can use any password you prefer, but it will be needed later in client demo lab.

    ![](_attachments/BB_FG_CommunitiesPartner1Password.png)

1. Click **bb-partner1 is a Producer of Data** and then click **Next**.

    ![](_attachments/BB_FG_CommunitiesPartner1Role.png)

1. Review the default settings on the **Initiate Connections Settings** screen and then click **Next**.

    ![](_attachments/BB_FG_CommunitiesPartner1ICS.png)

1. Review the default settings on the **PGP Settings** screen and then click **Next**.

    ![](_attachments/BB_FG_CommunitiesPartner1PGP.png)

1. Review the settings for **bb-partner1** and click **Finish**.

    ![](_attachments/BB_FG_CommunitiesPartner1Confirm.png)

1. Click **Return** on the **Added Partner Successful** screen.

    ![](_attachments/FG_CommunitiesPartner1Success.png)

1. Repeat the Steps 13 through 20 to create a second partner named **partner2** using the same settings.

    ![](_attachments/BB_FG_CommunitiesPartner2.png)

1. Click **Return** on the **Edit Community: bb_sftp_community** screen after creating both partners.

    ![](_attachments/BB_FG_CommunitiesReturn.png)

1. Close the **Communities** pop-up window.

    ![](_attachments/BB_FG_CommunitiesClose.png)

1. Click **Partners** under the **Participants** menu.

    ![](_attachments/FG_ParticipantsPartnersMenu.png)

1. Click the **Refresh** button if **partner1** and **partner2** do not appear in the **Partners** table.

    ![](_attachments/BB_FG_PartnersTable.png)

## Create a group

You will now add a group to make mapping selecting users into a routing channel more simple and scalable

1. Click **Groups** under the **Participants** menu.

    ![](_attachments/BB_FG_Groups.png)

1. Click **Create** to add a new Group.

    ![](_attachments/BB_FG_GroupsCreate.png)

1. Enter your capital initials followed by a space and then **Partners**, continuing with the example, it would be **BB Partners**. Then click on **Save**.

    ![](_attachments/BB_FG_GroupsCreateName.png)

    Click on **Ok** to clear the confirmation.

    ![](_attachments/BB_FG_GroupsCreateConf.png)

1. With the Group you added selected, click on **Add Partners...**.

    ![](_attachments/BB_FG_GroupsAddPartners.png)

1. Select the identities that you added and the group (use Ctrl-Click for multiple selections) and then Click **Execute**

    ![](_attachments/BB_FG_GroupsSelectPartners.png)

1. Review the proposed changes for moving the users to the group and Click **Ok**

    ![](_attachments/BB_FG_GroupsConfirmPartners.png)

1. Click **Back** to return to the previous page.

    ![](_attachments/BB_FG_GroupsClosePartners.png)

1. Select the group to confirm that the partners are showing as belonging in the group.

    ![](_attachments/BB_FG_GroupsVerify.png)

## Create a routing template

1. Click **Templates** under the **Routes** menu.

    ![](_attachments/FG_RoutesMenuTemplates.png)

1. Click the **Create** button at the bottom of the **Routing Channel Templates** page.

    ![](_attachments/FG_Templates.png)

1. Enter **BB Passthrough** in the **Template Name** field and then click **Next>>**.

    ![](_attachments/BB_FG_TemplateCreateName.png)

1. Review the **Special Characters** settings and then click **Next>>**.

    ![](_attachments/BB_FG_TemplateCreateSpecialChars.png)

1. Add only **BB Partners** to both the **Producer Groups** and **Consumer Groups** tables.

    ![](_attachments/BB_FG_TemplateCreateGroups1.png)

1. Click **Next>>** after adding **BB Partners** to both groups.

    ![](_attachments/BB_FG_TemplateCreateGroups2.png)

1. Review the **Provisioning Facts** page and then click **Next>>**.

    ![](_attachments/FG_TemplateCreateProvisioningFacts.png)

1. Review the **File Operation** page and then click **Next>>**.

    ![](_attachments/FG_TemplateCreateFileOperation.png)

1. Click the **Add** button on the **Producer** page.

    ![](_attachments/FG_TemplateCreateProducerAdd.png)

1. Click the **Producer File Type** pull-down menu and select **Unknown**.

    ![](_attachments/FG_TemplateCreateProducerUnknownMenuSelect.png)

1. Enter **.+** in the **File name pattern as regular expression** field and then click **Save**.

    ![](_attachments/FG_TemplateCreateProducerUnknownPattern.png)

    Setting the file pattern to the regular expression **.+** allows for file names of one or more characters.

1. Click **Next>>** on the **Producer** page.

    ![](_attachments/FG_TemplateCreateProducerNext.png)

1. Click the **Add** button on the **Consumer** page.

    ![](_attachments/FG_TemplateCreateConsumerAdd.png)

1. Click the **Add** button on the **New Delivery Channel** pop-up window.

    ![](_attachments/FG_TemplateCreateConsumerNewDeliveryChannel.png)

1. Click **Unknown** in the **Consumer File Type** pull-down menu.

    ![](_attachments/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeMenu.png)

1. Enter **${ProducerFileName}** in the **File name format*** field.

    ```
    ${ProducerFileName}
    ```

1. Review the help information regarding file name formats by hovering over the **File name format** entry field and then click **Save**.

    ![](_attachments/FG_TemplateCreateConsumerNewDeliveryChannelFileTypeFormat.png)

1. Click **Save** on the **New Delivery Channel** pop-up window.

    ![](_attachments/FG_TemplateCreateConsumerNewDeliveryChannelSave.png)

1. Click **Save** on the **Consumer** page.

    ![](_attachments/FG_TemplateCreateConsumerSave.png)

1. Click **OK** on the **Routing Channel Template successfully created.** pop-up message.

    ![](_attachments/FS_TemplateCreated.png)

1. Review the settings for the new **BB Passthrough** routing channel template.

    ![](_attachments/BB_FS_TemplateSummary.png)

## Create routing channels

1. Click the **Channels** option under the **Routes** menu.

    ![](_attachments/FG_RoutesChannelsMenu.png)

1. Click the **Create** button at bottom right to create a new **Channel**.

    ![](_attachments/FG_ChannelCreate.png)

1. Select **BB Passthrough** for the **Routing Channel Template**, **bb-partner1** for the **Producer**, and **bb-partner2** for the **Consumer**, and then click **Save** to create the new channel.

    ![](_attachments/BB_FG_ChannelCreateP1toP2.png)

1. Click **OK** on the **Success** pop-up window.

    ![](_attachments/BB_FG_ChannelCreateP1toP2Success.png)

1. Repeat the prior steps to create a channel from bb-partner2 to bb-partner1.

    ![](_attachments/BB_FG_ChannelCreateP2toP1.png)

1. Click **Sign Out**.

    ![](_attachments/BB_FG_SignOut.png)

In the next chapter, the fun begins as the partners start to securely exchange files.
