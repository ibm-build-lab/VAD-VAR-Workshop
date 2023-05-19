"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[403],{1688:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return b}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",blockquote:"blockquote",h3:"h3",strong:"strong",img:"img",ol:"ol",li:"li",ul:"ul",h4:"h4",em:"em",div:"div",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-accessing-data"},a.createElement(t.h1,{id:"101-accessing-data"},"101: Accessing data"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introduction"},a.createElement(t.h2,{id:"introduction"},a.createElement(t.a,{href:"#introduction"},"Introduction")),"\n",a.createElement(t.p,null,"As a data scientist, you have been assigned to analyze employee attrition at your retail electronics company. In 2018, your company, facing severe attrition, built a model to predict which employees would leave the company, allowing the human resources department to proactively work to retain them. However, the model has lost some of its predictive power thanks to changing conditions such as the COVID-19 pandemic, subsequent emphasis on remote work, and supply chain disruptions."),"\n",a.createElement(t.p,null,"You will need to work with data from across the enterprise to develop potential replacement models. You will deploy and evaluate those models, and track them throughout their lifecycle, gathering metrics and metadata to help determine if and when they are ready to be deployed into production."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prerequisites"},a.createElement(t.h2,{id:"prerequisites"},a.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Note: The content below can be completed entirely using free services; however, you will likely exceed your monthly free data allowance for Watson Studio. If at all possible, use a paid account instance of Watson Studio. Otherwise, you may need to wait until your data credits refresh to finish the lab."),"\n"),"\n",a.createElement(t.p,null,"Before you can proceed, you need to set up your environment. This involves importing a project and setting up its machine learning service. This lab has been built on Cloud Pak for Data as a Service (Cloud). For on-premises environments, platform details such as API key creation and data access via object storage will differ, but the vast majority of the lab is still applicable. It is expected that you complete this lab on the cloud."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"1-download-the-project-file"},a.createElement(t.h3,{id:"1-download-the-project-file"},a.createElement(t.a,{href:"#1-download-the-project-file"},"1. Download the project file")),"\n",a.createElement(t.p,null,"Throughout this lab, you will use a Watson Studio project. This project has been prebuilt, and is provided for you in a zip file that is located in the ",a.createElement(t.strong,null,"Data and AI Live Demos")," GitHub repository. Before proceeding, please download the ",a.createElement(t.a,{href:"https://github.com/CloudPak-Outcomes/Outcomes-Projects/raw/main/TrustedAI-L3-Tech-Lab/Trusted-AI-L3-Tech-Lab.zip"},"Trusted-AI-L3-Tech-Lab.zip")," project file."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"2-log-in-to-cloud-pak-for-data"},a.createElement(t.h3,{id:"2-log-in-to-cloud-pak-for-data"},a.createElement(t.a,{href:"#2-log-in-to-cloud-pak-for-data"},"2. Log in to Cloud Pak for Data")),"\n",a.createElement(t.p,null,"If you have not already done so, using the instructions and the screenshots below, log in to ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/"},"IBM Cloud Pak for Data"),". You will use ",a.createElement(t.strong,null,"your personal")," Cloud Pak for Data as a Service account in the ",a.createElement(t.strong,null,"Dallas")," region to do the lab."),"\n",a.createElement(t.img,{src:"/1684513230187.2957862480/1.png",alt:"login_screen"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the ",a.createElement(t.strong,null,"Work with resources")," in this IBM Cloud region: dropdown, select the ",a.createElement(t.strong,null,"Dallas")," region."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"This is ",a.createElement(t.strong,null,"very important")," because all of the cloud services that you were instructed to provision in the ",a.createElement(t.a,{href:"/mlops/100"},"Getting started instructions"),", should be provisioned in the ",a.createElement(t.strong,null,"Dallas")," region."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Enter your ",a.createElement(t.strong,null,"IBM ID")," that you used to sign up for Cloud Pak for Data."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"This should be your personal IBM Cloud ID. If you have logged in to Cloud Pak for Data previously and checked the ",a.createElement(t.strong,null,"Remember IBMid")," check box, it may already be filled in for you. If you have multiple Cloud Pak for Data accounts you can click inside the IBMid area above the ",a.createElement(t.strong,null,"Continue")," button and a list of available IBM IDs will be displayed for you to choose from."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Continue")," button"),"\n"),"\n"),"\n",a.createElement(t.p,null,"If your IBM ID is recognized as an IBM w3id (internal IBM w3 intranet id), you will be prompted to enter your password using the w3id on IBM Security Verify dialog:"),"\n",a.createElement(t.img,{src:"/1684513230275.2961862537/2.png",alt:"sso_login"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Enter the ",a.createElement(t.strong,null,"password")," for your IBM w3id."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Sign in")," button."),"\n"),"\n",a.createElement(t.p,null,"If your IBM Id is ",a.createElement(t.strong,null,"not")," an IBM w3id, you will be prompted to enter your password using the standard IBM Security Verify dialog:"),"\n",a.createElement(t.img,{src:"/1684513230283.2961862548/3.png",alt:"nonibm_login"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Enter the ",a.createElement(t.strong,null,"password")," for your IBM ID."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Log in")," button"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"3-validate-your-environment"},a.createElement(t.h3,{id:"3-validate-your-environment"},a.createElement(t.a,{href:"#3-validate-your-environment"},"3. Validate Your Environment")),"\n",a.createElement(t.p,null,"You will be brought to the Cloud Pak for Data home page. If at any point during these instructions you get a pop-up message from ",a.createElement(t.strong,null,"Cloud Pak for Data")," asking to guide or assist you, dismiss it and simply follow the steps in the instructions."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"make-sure-you-are-in-your-personal-cloud-account"},a.createElement(t.h4,{id:"make-sure-you-are-in-your-personal-cloud-account"},a.createElement(t.a,{href:"#make-sure-you-are-in-your-personal-cloud-account"},"Make sure you are in your personal cloud account")),"\n",a.createElement(t.img,{src:"/1684513230299.2964862560/4.png",alt:"personal _account"}),"\n",a.createElement(t.p,null,"You can be a member of many cloud accounts. This lab is done from your personal cloud account. The account displayed should show ",a.createElement(t.strong,null,"Your cloud account ID - Your name"),". For example, in the screen shot above, the personal account is ",a.createElement(t.strong,null,"1792871 - Rick Buglio"),". If your personal account is selected, like the screen shot above, you can proceed to the next step. If not, follow the instructions below to switch to your personal account. Note that the full menu bar including your account details and region may only appear if your browser window is maximized."),"\n",a.createElement(t.img,{src:"/1684513230315.2964862571/5.png",alt:"techzone_account"}),"\n",a.createElement(t.p,null,"In the screenshot above, the user is in the ",a.createElement(t.strong,null,"Techzone Outcomes")," cloud account and needs to switch to their personal account. This is a common scenario because IBM sellers and business partners could still have a reservation in the Data and AI Live Demos (",a.createElement(t.strong,null,"Techzone Outcomes"),") cloud account to do the Data Fabric Level 2 sales demos. When you login to Cloud Pak for Data, it remembers the last account you logged into, so it's a good practice to check what account you are in before proceeding."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Using the ",a.createElement(t.strong,null,"Cloud account")," dropdown on the toolbar, select ",a.createElement(t.strong,null,"your personal")," cloud account."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"make-sure-you-are-in-the-dallas-region"},a.createElement(t.h4,{id:"make-sure-you-are-in-the-dallas-region"},a.createElement(t.a,{href:"#make-sure-you-are-in-the-dallas-region"},"Make sure you are in the Dallas region")),"\n",a.createElement(t.p,null,"This is ",a.createElement(t.strong,null,"very important"),". Based on the ",a.createElement(t.a,{href:"/mlops/100"},"Getting started")," instructions, you should have your services provisioned in the ",a.createElement(t.strong,null,"Dallas")," region."),"\n",a.createElement(t.p,null,"You ",a.createElement(t.strong,null,"cannot")," work across cloud service regions in Cloud Pak for Data as a Service. Only ",a.createElement(t.strong,null,"global services"),", like ",a.createElement(t.strong,null,"Cloud Object Storage"),", can be used across cloud service regions. Therefore, your services must ",a.createElement(t.strong,null,"all")," be in the same region for you to complete this lab."),"\n",a.createElement(t.img,{src:"/1684513230323.2964862582/6.png",alt:"london"}),"\n",a.createElement(t.p,null,"In the screen shot above, the user is in the ",a.createElement(t.strong,null,"London")," region and needs to switch to the ",a.createElement(t.strong,null,"Dallas")," region. If your region is ",a.createElement(t.strong,null,"not set")," to the ",a.createElement(t.strong,null,"Dallas")," region perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Using the ",a.createElement(t.strong,null,"Region dropdown")," on the toolbar, select the ",a.createElement(t.strong,null,"Dallas")," region."),"\n"),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"4-import-the-lab-project"},a.createElement(t.h3,{id:"4-import-the-lab-project"},a.createElement(t.a,{href:"#4-import-the-lab-project"},"4. Import the lab project")),"\n",a.createElement(t.img,{src:"/1684513230335.2966862593/7.png",alt:"WorkWithData"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"From the Watson Studio Cloud welcome screen, click on ",a.createElement(t.strong,null,"Work with data"),"."),"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"Create a project from a sample or file"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230347.2966862604/8.png",alt:"DropinProject"}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"In the ",a.createElement(t.strong,null,"Upload file")," section, drop in the ",a.createElement(t.strong,null,"Trusted-AI-L3-Tech-Lab.zip")," file you've just downloaded."),"\n",a.createElement(t.li,null,"In the ",a.createElement(t.strong,null,"Name"),' field, give the project a name. For example: "Trusted AI L3 Tech Lab".'),"\n",a.createElement(t.li,null,"Use the ",a.createElement(t.strong,null,"Select storage service")," dropdown to select your Cloud Object Storage instance."),"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"Create"),". The project will be imported, which will take about a minute."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230367.2966862615/9.png",alt:"view_import_summary"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"When the import has finished, click on ",a.createElement(t.strong,null,"View import summary"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230187.2957862481/10.png",alt:"successful_import"}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Verify that all assets have been successfully imported. If they have, click ",a.createElement(t.strong,null,"Close")," and move to step 11. If one or more assets has failed to import, proceed to step 9."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230243.296862506/11.png",alt:"delete_project"}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"If one or more assets failed to import, go to your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"list of projects")," and select the checkbox associated with the new project."),"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"Delete")," button in the top right and follow the prompts on screen to confirm deletion. Return to the ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects/new-project?context=cpdaas"},"new project screen")," and repeat this section, starting from step 2."),"\n",a.createElement(t.li,null,"Once your project has been successfully imported, you may proceed with the rest of the lab."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"5-add-your-watson-machine-learning-wml-service"},a.createElement(t.h3,{id:"5-add-your-watson-machine-learning-wml-service"},a.createElement(t.a,{href:"#5-add-your-watson-machine-learning-wml-service"},"5. Add your Watson Machine Learning (WML) service")),"\n",a.createElement(t.p,null,"The WML service was created earlier as described on the ",a.createElement(t.a,{href:"/mlops/100"},"Getting started")," page."),"\n",a.createElement(t.img,{src:"/1684513230255.296862517/12.png",alt:"AddWMLService"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"In your new project, select the ",a.createElement(t.strong,null,"Manage")," tab."),"\n",a.createElement(t.li,null,"Select Services & integrations from the left menu bar."),"\n",a.createElement(t.li,null,"Click on the blue Associate service button on the right."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230263.2961862528/13.png",alt:"AssociateSvc"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Click on the checkbox associated with the ",a.createElement(t.strong,null,"Machine learning")," service you provisioned. Note that you may have multiple services listed here, so be sure to select one with ",a.createElement(t.strong,null,"Machine Learning")," in the ",a.createElement(t.strong,null,"Type")," column of the table."),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"Associate")," button at the lower right of the screen."),"\n"),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"accessing-data"},a.createElement(t.h2,{id:"accessing-data"},a.createElement(t.a,{href:"#accessing-data"},"Accessing data")),"\n",a.createElement(t.p,null,"Data science is nothing without data. In this section, you will learn how to make data assets available in a project and how to access the data through a notebook. Data can also be accessed through other available tools, which is covered in the ",a.createElement(t.a,{href:"/mlops/103"},"No-code and low-code solutions")," section of this lab."),"\n",a.createElement(t.p,null,"Cloud Pak for Data accesses data through two forms: files and connections. Files are ",a.createElement(t.strong,null,"not")," limited to the comma separated values (csv) format. For example, data can come as archives in a compressed zip or tar format."),"\n",a.createElement(t.p,null,"Connections are access points to different repositories. Here is a ",a.createElement(t.strong,null,"partial list")," of the connections available in Cloud Pak for Data as a Service:"),"\n",a.createElement(t.img,{src:"/1684513230267.2961862531/14.png",alt:"connections"}),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"1-add-a-connection-to-a-project"},a.createElement(t.h3,{id:"1-add-a-connection-to-a-project"},a.createElement(t.a,{href:"#1-add-a-connection-to-a-project"},"1. Add a connection to a project")),"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Getting started")," section of the labs, you were instructed to create a Db2 service. This is the database service used in this lab. It's a perfect example of creating and accessing a connection."),"\n",a.createElement(t.p,null,"Enterprises have critical data sets spread over multiple repositories; to add more complexity, those data assets can reside on-premises or in the cloud. It is critical for data science practitioners to have easy access to this data, while keeping the data in its original location to reduce cost and complexity. Copying the data leads to confusion, where, for example, users would not know if they are using the most up-to-date data. As the number of data copies increases with the number of projects in the enterprise, it leads to confusion on which copy represents the real version of the truth. Over time, different copies of the same data leads to partial versions of the truth, which makes it nearly impossible to decipher."),"\n",a.createElement(t.p,null,"As shown earlier, Cloud Pak for Data supports a wide variety of connection types. Let's see how to create a connection."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Get the credentials for your Db2 service. Open the ",a.createElement(t.a,{href:"https://cloud.ibm.com/resources?groups=resource-instance"},"Services and software resource list")," from the IBM Cloud console."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Db2 service"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230267.2961862532/15.png",alt:"Db2CredentialPage"}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"In the left side panel, select ",a.createElement(t.strong,null,"Service credentials"),"."),"\n",a.createElement(t.li,null,"If there are no credentials, click on the blue ",a.createElement(t.strong,null,"New credential")," button, then click on ",a.createElement(t.strong,null,"Add"),"."),"\n",a.createElement(t.li,null,"Select the twistie for the credentials."),"\n",a.createElement(t.li,null,"Click the copy icon to copy your credentials to your clipboard. Paste them into a text editor, so the specific elements can be referenced in the Db2 connection creation below."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"2-create-a-database-connection"},a.createElement(t.h3,{id:"2-create-a-database-connection"},a.createElement(t.a,{href:"#2-create-a-database-connection"},"2. Create a database connection")),"\n",a.createElement(n),"\n",a.createElement(t.p,null,"In this section, you use the credential created (or found) in the previous step to create a connection to a Db2 database."),"\n",a.createElement(t.p,null,"This example uses the ",a.createElement(t.em,null,"administrator"),' username and password of the administrator. In a real world situation, it would be better to create an additional user and limit its privileges. This is what was done for the use of the "Data Warehouse" connection that is part of this project.'),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"From your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects?context=cpdaas"},"list of projects"),", open the one you imported in a previous step by clicking on its name."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230267.2961862533/16.png",alt:"AssetTab"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Assets")," tab."),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"New asset")," button."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Connection")," tile."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230271.2961862534/17.png",alt:"connection_type"}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"From the list of connection types, scroll down and select ",a.createElement(t.strong,null,"IBM Db2")," (use this specific name from all the Db2-type possibilities)"),"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"Select")," button."),"\n",a.createElement(t.li,null,"Enter a name for your connection (suggested: Db2)."),"\n"),"\n",a.createElement(t.p,null,"For steps 8-12 below, you will be copying values from the credentials you pasted into a text editor into the form. Copy the values between the quotations from the credentials text. The values you will need are ",a.createElement(t.strong,null,"database"),", ",a.createElement(t.strong,null,"hostname"),", ",a.createElement(t.strong,null,"port"),", ",a.createElement(t.strong,null,"username"),", and ",a.createElement(t.strong,null,"password"),". They can be found in the credentials text as follows:"),"\n",a.createElement(t.img,{src:"/1684513230271.2961862535/18.png",alt:"Db2Json"}),"\n",a.createElement(t.p,null,"Copy the values one at a time, and paste them into the corresponding fields:"),"\n",a.createElement(t.img,{src:"/1684513230275.2961862536/19.png",alt:"db_fields"}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Scroll down to the ",a.createElement(t.strong,null,"Database")," field and enter the ",a.createElement(t.strong,null,"database")," credential element (default ",a.createElement(t.strong,null,"bludb"),")."),"\n",a.createElement(t.li,null,"In the ",a.createElement(t.strong,null,"Hostname or IP address")," field, enter the ",a.createElement(t.strong,null,"hostname")," credential element."),"\n",a.createElement(t.li,null,"In the ",a.createElement(t.strong,null,"Port")," field, enter the ",a.createElement(t.strong,null,"port")," credential element"),"\n",a.createElement(t.li,null,"Scroll down to the ",a.createElement(t.strong,null,"Credentials")," section. In the ",a.createElement(t.strong,null,"Username")," field, enter the ",a.createElement(t.strong,null,"username")," credential element. The username also serves as the schema name."),"\n",a.createElement(t.li,null,"In the ",a.createElement(t.strong,null,"Password")," field, enter the ",a.createElement(t.strong,null,"password")," credential element."),"\n",a.createElement(t.li,null,"Scroll down to the ",a.createElement(t.strong,null,"Certificates")," section and select the checkbox for ",a.createElement(t.strong,null,"Port is SSL-enabled"),". While adding SSL credentials was not strictly necessary for this connection, selecting the option allows you to add a level of security by allowing the use of the connection only from trusted hosts."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Test connection")," in the upper right. If the test was unsuccessful, verify that you have correctly entered the credentials."),"\n",a.createElement(t.li,null,"Once the connection test is successful, click the blue ",a.createElement(t.strong,null,"Create")," button in the bottom right."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Create")," in the pop-up window to confirm."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"3-create-connected-data"},a.createElement(t.h3,{id:"3-create-connected-data"},a.createElement(t.a,{href:"#3-create-connected-data"},"3. Create connected data")),"\n",a.createElement(t.p,null,"Connected data allows the use of data coming from any data repository as if it were a file, without copying it to a new location. This provides a way for data scientists and other team members to access the exact data they want instead of having to use SQL or other languages to get to that data."),"\n",a.createElement(t.img,{src:"/1684513230275.2961862538/20.png",alt:"FilterResources"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"To create and populate a table, begin by opening the ",a.createElement(t.a,{href:"https://cloud.ibm.com/resources?groups=resource-instance"},"IBM Cloud Resource list")," and clicking on the Db2 instance."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,'Use the filter by Name and type "Db2" to quickly get to this resource'),"\n"),"\n",a.createElement(t.img,{src:"/1684513230275.2961862539/21.png",alt:"GoToUI"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Manage")," tab."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Go to UI")," button. The ",a.createElement(t.strong,null,"IBM Db2 on Cloud")," dashboard opens in a new browser tab."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230279.2961862540/22.png",alt:"Db2Icons"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"SQL")," icon on the left."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230279.2961862541/23.png",alt:"run_all"}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Enter the following SQL statement:"),"\n"),"\n",a.createElement(t.div,{"data-rehype-pretty-code-fragment":""},a.createElement(t.pre,{"data-language":"sql","data-theme":"default"},a.createElement(t.code,{"data-language":"sql","data-theme":"default"},a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#A56EFF"}},"CREATE"),a.createElement(t.span,{style:{color:"#8D8D8D"}}," "),a.createElement(t.span,{style:{color:"#A56EFF"}},"TABLE"),a.createElement(t.span,{style:{color:"#8D8D8D"}}," "),a.createElement(t.span,{style:{color:"#4589FF"}},"testing"),a.createElement(t.span,{style:{color:"#8D8D8D"}}," (")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8D8D8D"}},"   col1 "),a.createElement(t.span,{style:{color:"#A56EFF"}},"int"),a.createElement(t.span,{style:{color:"#8D8D8D"}},",")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8D8D8D"}},"   col2 "),a.createElement(t.span,{style:{color:"#A56EFF"}},"int"),a.createElement(t.span,{style:{color:"#8D8D8D"}},",")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8D8D8D"}},"   col3 "),a.createElement(t.span,{style:{color:"#A56EFF"}},"int")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8D8D8D"}},");"))))),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"Run all")," button at the top right."),"\n",a.createElement(t.li,null,"Using a local text editor, create and save a file named ",a.createElement(t.strong,null,"test.csv"),", on your computer with four rows of three columns in the following format:"),"\n"),"\n",a.createElement(t.div,{"data-rehype-pretty-code-fragment":""},a.createElement(t.pre,{"data-language":"csv","data-theme":"default"},a.createElement(t.code,{"data-language":"csv","data-theme":"default"},a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8d8d8d"}},"col1,col2,col3")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8d8d8d"}},"8,1,6")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8d8d8d"}},"3,5,7")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8d8d8d"}},"4,9,2"))))),"\n",a.createElement(t.img,{src:"/1684513230279.2961862542/24.png",alt:"DataIcon"}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Data")," icon just below the ",a.createElement(t.strong,null,"SQL")," icon."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230279.2961862543/25.png",alt:"file_selection"}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"Drag and drop the file from your hard drive into the file selection box. You will see it appear under ",a.createElement(t.strong,null,"Selected file")," on the right when uploaded."),"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"Next")," button in the bottom right."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230279.2961862544/26.png",alt:"create_table"}),"\n",a.createElement(t.ol,{start:"11"},"\n",a.createElement(t.li,null,"Select your schema. It is the username from the credential above and should be the only schema listed."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"New table")," button in the ",a.createElement(t.strong,null,"Table")," cell. Name your table ",a.createElement(t.strong,null,"TESTING"),"."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Create")," to create the table."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Next")," three times to skip through the remaining screens until you see the ",a.createElement(t.strong,null,"Begin Load")," button."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Begin Load"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230283.2961862545/27.png",alt:"LoadCompleted"}),"\n",a.createElement(t.p,null,"This should complete with three rows read and three rows loaded. You can close this tab. In the next step you return to your project asset tab in Cloud Pak for Data as a Service (Watson Studio)."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"4-create-a-connected-data-asset-pointing-to-the-table"},a.createElement(t.h3,{id:"4-create-a-connected-data-asset-pointing-to-the-table"},a.createElement(t.a,{href:"#4-create-a-connected-data-asset-pointing-to-the-table"},"4. Create a connected data asset pointing to the table")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Return to the tab with your Watson Studio project. If you have closed the tab, open your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"list of projects")," and click on the name of your project to open it."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230283.2961862546/28.png",alt:"ImportAsset"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Assets")," tab."),"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"Import asset"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684513230283.2961862547/29.png",alt:"connected_data_import"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Connected data"),"."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Db2")," connection (or the name you gave to your connection)."),"\n",a.createElement(t.li,null,"Select your ",a.createElement(t.strong,null,"Db2")," username as the schema name."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"TESTING")," table and click the blue Select button in the lower right."),"\n",a.createElement(t.li,null,"Keep the default name and click ",a.createElement(t.strong,null,"Import"),"."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"5-accessing-files-and-connections-through-a-notebook"},a.createElement(t.h3,{id:"5-accessing-files-and-connections-through-a-notebook"},a.createElement(t.a,{href:"#5-accessing-files-and-connections-through-a-notebook"},"5. Accessing files and connections through a notebook")),"\n",a.createElement(t.p,null,"Now that you have multiple files you can use, let's see how they can be accessed in a Jupyter notebook. Access to these files can also be done using tools such as AutoAI and SPSS Modeler. This will be explored later in this lab."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"For a quick tutorial on Jupyter notebooks, click ",a.createElement(t.a,{href:"https://blog.udemy.com/jupyter-notebook-tutorial/"},"here"),". While in the notebook, you can use the blue ",a.createElement(t.strong,null,"Play")," button or press ",a.createElement(t.strong,null,"Shift + Enter")," on your keyboard to execute the current cell. Executing cells will be marked with an asterisk in the brackets to the left of the cell. When the cell has finished executing, the asterisk will be replaced with a number. When executing cells in the notebook, it's often best to wait until a cell has finished before executing the next one, which allows you to address any errors in the code."),"\n"),"\n",a.createElement(t.p,null,"In the previous (optional) section, you imported a dataset that includes masked columns. As you'll see in this notebook, these columns are unmasked when using a database connection (in this case, Db2). To preserve the masking, you need to use a Watson Query (data virtualization) connection instead."),"\n",a.createElement(t.img,{src:"/1684513230287.2961862553/33.png",alt:"InsertToCode"}),"\n",a.createElement(t.img,{src:"/1684513230287.2961862552/33-1.png",alt:"SelectAsset"}),"\n",a.createElement(t.p,null,"One key activity in the Data access notebook is something called ",a.createElement(t.strong,null,"Code Snippets"),". To access this capability, from a notebook in edit mode, you need to open the data tab. The figure above has a red circle around the code icon. The data tab opens on the right amd will have a button title ",a.createElement(t.strong,null,"Select data from project"),". Once you click this button a new menu will pop open allowing you to select which data items you would like to connect. After clicking ",a.createElement(t.strong,null,"Select")," in this menu the ",a.createElement(t.strong,null,"Code Snippets"),' sidebar will reappear with your select data item and the options for how to load it ("pandas DataFrame", "Credentials"). This is what you will be exploring in the Notebook lab.'),"\n",a.createElement(t.img,{src:"/1684513230287.2961862554/34.png",alt:"EditNotebook"}),"\n",a.createElement(t.p,null,"To get to the notebook, you start from within your project under the Assets tab."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click on the three vertical dots at the end of the line for ",a.createElement(t.strong,null,"01-Data access lab"),". A drop down menu appears."),"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"Edit"),". Once the notebook is open, follow the instructions provided."),"\n"))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};var c=n(4184),s=n.n(c),i=n(4690),u=n(1140),m=n(2565),d=n(8531),h=n(3383),p=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:c}=e,i=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),g=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:o,updated:r},t[0].title||l||""),a.createElement(d.Z,{className:p.YS},a.createElement("article",{className:s()(p.Y2,!g&&p.ey),ref:i},a.createElement(m.Z,{components:{h1:()=>null}},c)),g&&a.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(i.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(E,e,a.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),o=n(987);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...r,...n}},t)}))},4690:function(e,t,n){var l=n(7294),a=n(1072),o=n(2401);t.Z=e=>{const{title:t,description:n,pathname:r,children:c}=e,{description:s,title:i,origin:u}=(0,o.Z)(),{i18n:{language:m}}=(0,a.$G)(),d={title:t||i,description:n||s,url:""+u+(r||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:m}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,d.title),l.createElement("link",{rel:"canonical",href:d.url}),l.createElement("meta",{name:"description",content:d.description}),l.createElement("meta",{property:"og:title",content:d.title}),l.createElement("meta",{property:"og:url",content:d.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:d.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:d.title}),l.createElement("meta",{name:"twitter:url",content:d.url}),l.createElement("meta",{name:"twitter:description",content:d.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(7500),o=n(4184),r=n.n(o),c=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:o}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),o&&o.length>0&&s(o,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),o=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return o},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return o}});var l=n(7294);const a=l.createContext({});function o(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:o(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-ml-ops-101-md-d1cde55ac0d2fd064823.js.map