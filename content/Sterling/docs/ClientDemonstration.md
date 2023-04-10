---
title: 5. Client Demonstration
---

# Client Demonstration

It is now time for the partners to transfer files between each other using the newly created B2Bi SFTP adapter, but first one last setup step to make the demonstration more visually exciting.

In this demonstration, the FileZilla application will be used. FileZilla is a free and open-source, cross-platform FTP application, consisting of FileZilla Client and FileZilla Server. Clients are available for Windows, Linux, and macOS. Learn more about FileZilla [here](https://filezilla-project.org/).

If users do not already have FileZilla installed, do so now. IBM employees can download FileZilla from the Mac@IBM store. For Business Partners and IBMers on Microsoft Windows, the download links are available at the link above.

If users are unable to use FileZilla, it is recommended to use the IBM Sterling File Gateway clients for both users in the scenario that follows. To avoid having to log in and out between user actions, it is recommended to use two different browsers (e.g. Chrome and Firefox) for each user or private/incognito windows for each user when accessing the IBM Sterling File Gateways.

When doing a client demonstration, it is recommended to split the FileZilla and browser windows on the same screen to avoid switching back and forth during the demonstration.

For this scenario, **partner1** will use the IBM Sterling File Gateway clients, and **partner2** will use FileZilla.

As an introduction, watch this brief video of the steps to be performed.

## Configure FileZilla for partner2

To configure FileZilla for **partner2** both the File Gateway route address and port number will be needed.

1. Return to the OpenShift web console and click on the **sterling-fg-b2bi-asi-internal-route** route on the **Routes** page.

   ![image](_attachments/OS_InternalRoute1.png)

1. Select the **Host** field, right click, and click **Copy**.

   Note, the example below was captured using Firefox on MacOS. Others browser menus options may be labeled differently.

   ![image](_attachments/OS_InternalRoute2.png)

1. Open the FileZilla application on local computer.

   ![image](_attachments/FileZilla.png)

1. Click the **FileZilla Site Manager** ![image](_attachments/FZSiteManagerIcon.png) icon.

   ![image](_attachments/FileZillaSiteManager.png)

1. Click the **New site** button.

   ![image](_attachments/FZ_NewSiteButton.png)

1. Enter **B2BGateway** for the **New Site** name and press enter.

   ![image](_attachments/FZ_NewSiteName.png)

1. Select **SFTP - Secure File Transfer Protocol** on the **Protocol** pull-down menu.

   ![image](_attachments/FZ_NewSiteProtocol.png)

1. Paste the **hostname** copied from the OpenShift Route in step 2 into the **Host** field.

   ![image](_attachments/FZ_NewSitePasteHost.png)

1. Enter the **port number** of the **sterling-fg-b2bi-asi-backend-svc** service in the **Port** field.

   ![image](_attachments/FZ_NewSitePort.png)

   > "Don't remember the port number?" The port number can be found in the details of the **sterling-fg-b2bi-asi-backend-svc** service (under Networking -> Services) in the OpenShift web console - use **adapters-1's** **Node port**.

1. Enter **bb-partner2** in the **User** field and **password** in the **Password** field and click the **Connect** button.

   ![image](_attachments/BB_FZ_NewSiteUserPassword.png)

   > If you have told FileZilla not to save passwords, you will see a warning about the login process being changed from 'Normal' to 'Ask for password'. This is ok and you will just be prompted for the password for **bb-partner2** when connecting to the SFTP server.

1. Check the **Always trust this host, add this key to cache** checkbox and click **OK** on the **Unknown host key** pop-up window.

   ![image](_attachments/FZ_UKnknownHostKey.png)

1. Notice the connection is established and the **Remote site** shows no files.

   ![image](_attachments/FZ_Connected.png)

1. At this time, it is recommended to have both FileZilla and the OpenShift web console both visible at the same time (either split on a single screen or using multiple monitors).

   ![image](_attachments/OS_FZ_splitScreen.png)

1. Create or download the 2 sample files that will be transferred between partner1 and partner2. Since the templates created earlier allow for any file names to be transferred it does not matter what files are used. It is suggested to use small files so the transfers happen quickly. Feel free to download these two sample invoice files. In most browsers, select the link names below, right click on the links, and click **Save link as** to the local Downloads directory.

   - [SampleInvoice1.xml](https://raw.githubusercontent.com/IBM/SalesEnablement-SterlingDataExchange-L3/main/tools/SampleInvoice1.xml)

   - [SampleInvoice2.xml](https://raw.githubusercontent.com/IBM/SalesEnablement-SterlingDataExchange-L3/main/tools/SampleInvoice2.xml)

## Transfer a file from partner1 to partner2 using the IBM Sterling My File Gateway 2.0

1. In the OpenShift web console click the link to open the link to the **sterling-fg-b2bi-asi-internal-route-myfg** route.

   ![image](_attachments/OS_Route-MyFG.png)

1. Enter **bb-partner1** in the **User name** field, **password** in the **Password** field, and then click **Log in**.

   ![image](_attachments/BB_MyFG_login.png)

1. Click the hamburger menu icon ![image](_attachments/MyFG_HamburgerIcon.png) at top left and click **Uploads**.

   ![image](_attachments/MyFG_UploadsMenu.png)

1. Click the **/** directory in left-hand panel.

   ![image](_attachments/MyFG_DirectorySelect.png)

1. Click the **select** link in the **Upload to /** panel.

   ![image](_attachments/MyFG_UploadPanel.png)

1. Click the **SampleInvoice1.xml** file in the **Downloads** directory and click **Open**.

   > Navigate to the directory where the sample invoice files were downloaded or pick another file to transfer. Do not transfer any file with confidential or personal information. The image above was captured using Firefox on MacOS, other browsers and operating system combinations may look different.

   ![image](_attachments/MyFG_UploadFileDialog.png)

1. Verify in the **myFileGateway** application that the file transferred successfully.

   ![image](_attachments/BB_MyFG_UploadFileTransferSuccess.png)

1. Verify in **FileZilla** that **bb-partner2** received the file.

   ![image](_attachments/BB_FZ_UploadFileTransferSuccess.png)

   > The file size shown in **IBM Sterling My File Gateway 2.0** is in kilobytes (KB) and in **FileZilla** the file size is displayed in bytes, but they are the same and the file transfer was successful.

   It is important to realize the file has been transferred to the **B2Bi Gateway** repository. In a production environment, **bb-partner2** would need to download the file. FileZilla is showing the contents of the data store on the gateway that **bb-partner2** has permissions to see.

## View the details of the file transfer in **IBM Sterling My File Gateway 2.0**

1. Click **File activity** under the hamburger menu icon ![image](_attachments/MyFG_HamburgerIcon.png).

   ![image](_attachments/MyFG_FileActivityMenu.png)

1. Click the link for the recently uploaded file: **SampleInvoice1.xml**.

   ![image](_attachments/BB_MyFG_FileActivity.png)

1. Review the events that occurred during the file transfer.

   ![image](_attachments/BB_MyFG_FileActivityDetails.png)

   Notice events **FG_0503** and **FG_0504** show the **BB Passthrough** channel template was used to properly route the transferred file to **bb-partner2**.

   :green_circle: There is a quiz question related to the events of a successful file transfer. A screen capture of all the events and event numbers will help answer the question.

For additional demonstrations, consider the following:

- Transfer a file from **bb-partner2** to **bb-partner1**.
- Verify the file transfers using the **IBM Sterling File Gateway** application.
- Transfer a file using the older version of **IBM Sterling My File Gateway** using the **sterling-fg-b2bi-asi-internal-route-myfilegateway** route found in the OpenShift web console.
