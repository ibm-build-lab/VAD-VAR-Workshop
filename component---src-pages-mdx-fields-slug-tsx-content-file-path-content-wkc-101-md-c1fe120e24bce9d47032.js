"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1932],{2982:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ol:"ol",li:"li",ul:"ul",h3:"h3",img:"img",h4:"h4",hr:"hr"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-introduction-and-prerequisites"},l.createElement(t.h1,{id:"101-introduction-and-prerequisites"},"101: Introduction and Prerequisites"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introduction"},l.createElement(t.h2,{id:"introduction"},l.createElement(t.a,{href:"#introduction"},"Introduction")),"\n",l.createElement(t.p,null,"As a data steward, you are assigned to the analytics project that has been tasked with doing deeper analysis and AI to determine what might be causing the significant drop in customer satisfaction over the last year. Based on metrics available on the executive dashboard, management can clearly see that there was a drop in order fulfillment and increased shipping times and customers have been complaining about it in their surveys and to customer service."),"\n",l.createElement(t.p,null,"In order to investigate this further, the analytics team is requesting employee data, data related to staff members working in the warehouse, and supporting logistics data related to warehouse staff availability and shifts. The data request specifies that the team needs the following data to perform the analytical and AI tasks to deliver on their business objectives:"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Data Requested"),l.createElement(t.th,null,"Analytics and AI Use Case"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"Employee"),l.createElement(t.td,null,"Needed for decision optimization analysis to investigate warehouse staffing and executive dashboard enhancements.")),l.createElement(t.tr,null,l.createElement(t.td,null,"Warehouse Shifts"),l.createElement(t.td,null,"Needed for decision optimization analysis to investigate warehouse staffing and executive dashboard enhancements.")),l.createElement(t.tr,null,l.createElement(t.td,null,"Warehouse Staff"),l.createElement(t.td,null,"Needed for decision optimization analysis to investigate warehouse staffing and executive dashboard enhancements.")),l.createElement(t.tr,null,l.createElement(t.td,null,"Warehouse Staffing"),l.createElement(t.td,null,"Needed for decision optimization analysis to investigate warehouse staffing and executive dashboard enhancements.")))),"\n",l.createElement(t.p,null,"Before the analytics team can begin doing business analytics, and building and training machine learning and AI models to help determine the decline in customer satisfaction, it’s important to understand and trust the data. The analytics and resulting outcomes are only as good as the data. The best data is data that is fully understood and trusted and just because you can access the data doesn’t mean that it’s prepared for AI use cases."),"\n",l.createElement(t.p,null,"To satisfy the project team's request to meet their analytical goals, you will use the ",l.createElement(t.strong,null,"Data governance")," capabilities of IBM's data fabric solution, ",l.createElement(t.strong,null,"Cloud Pak for Data"),", that are provided by ",l.createElement(t.strong,null,"Watson Knowledge Catalog"),", to ensure the data needed is easily found and accessible from a trusted source, that the data content is of the highest quality, and can be fully understood, and that any confidential, personal or sensitive information is governed and protected with no risk of being exposed to those who do not have the authority to access or view it."),"\n",l.createElement(t.p,null,"To accomplish this, you will perform the following tasks:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Define and publish the following governance artifacts to the Business Glossary:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Categories"),"\n",l.createElement(t.li,null,"Classifications"),"\n",l.createElement(t.li,null,"Data Classes"),"\n",l.createElement(t.li,null,"Business Terms"),"\n",l.createElement(t.li,null,"Reference Data"),"\n",l.createElement(t.li,null,"Policies"),"\n",l.createElement(t.li,null,"Data Governance Rules"),"\n",l.createElement(t.li,null,"Data Protection Rules"),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,"Data classes and business terms can be leveraged and assigned during the metadata enrichment process as data assets are automatically profiled, so data consumers can get a better understanding of the data content and business context."),"\n",l.createElement(t.p,null,"There are two types of rules: ",l.createElement(t.strong,null,"Data governance")," and ",l.createElement(t.strong,null,"Data protection"),". Data governance rules are only descriptive and are ",l.createElement(t.strong,null,"not")," enforceable, must be assigned to a category, and can be imported using a CSV file. Data protection rules are enforceable and actionable, are not assigned to a category, cannot be imported, and reside outside of the governance artifact category hierarchy. Data protection rules autonomously enforce data privacy actions, without any human intervention, to eliminate the risk of confidential, personal, and sensitive information being exposed to those who are not authorized to access or view it."),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Discover and import the data assets needed using the automated ",l.createElement(t.strong,null,"Metadata Import")," process."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Enrich the metadata of the data assets needed using the ",l.createElement(t.strong,null,"Metadata Enrichment")," processes to automatically:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Profile data content"),"\n",l.createElement(t.li,null,"Access data quality"),"\n",l.createElement(t.li,null,"Assign data classifications"),"\n",l.createElement(t.li,null,"Assign business terms"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Publish the data assets to a governed catalog."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Augment and socialize the cataloged data assets."),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prerequisites"},l.createElement(t.h2,{id:"prerequisites"},l.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"1-download-the-lab-files"},l.createElement(t.h3,{id:"1-download-the-lab-files"},l.createElement(t.a,{href:"#1-download-the-lab-files"},"1. Download the Lab Files")),"\n",l.createElement(t.p,null,"In the ",l.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/102"},"Build the Business Glossary")," section of this lab, you will be instructed to use a series of governance artifact CSV files. These files have been predefined and are provided for you in a zip file that is located in the ",l.createElement(t.strong,null,"IBM Data and AI Live Demos")," GitHub repository. Before proceeding, click on the link below to download the zip file:"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/CloudPak-Outcomes/Outcomes-Projects/blob/main/Data-Governance-Privacy-L3-Tech-Lab/Data-Governance-Privacy-L3-Tech-Lab.zip"},"Data-Governance-Privacy-L3-Tech-Lab.zip")),"\n",l.createElement(t.img,{src:"/1686806104982.5361518961/image0.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"Download")," button."),"\n"),"\n",l.createElement(t.p,null,"When the download is complete, go to the download location and unzip the ",l.createElement(t.strong,null,"Data-Governance-Privacy-L3-Tech-Lab.zip")," file on your system. Remember where you extracted the files because you will be instructed to select them by name throughout the ",l.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/102"},"Build the Business Glossary")," section of the lab."),"\n",l.createElement(t.p,null,"Unzipping the file will create a directory named ",l.createElement(t.strong,null,"Data-Governance-Privacy-L3-Tech-Lab")," that will contain the following CSV files:"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"File Name"),l.createElement(t.th,null,"Description"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"governance-rules.csv"),l.createElement(t.td,null,"Data governance rules")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-policies.csv"),l.createElement(t.td,null,"Data governance policies")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-categories.csv"),l.createElement(t.td,null,"Data governance categories")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-data-classes.csv"),l.createElement(t.td,null,"Data governance data classes")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-classifications.csv"),l.createElement(t.td,null,"Data governance classifications")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-business-terms.csv"),l.createElement(t.td,null,"Data governance business terms")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-reference-data.csv"),l.createElement(t.td,null,"Data governance reference data sets")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-reference-position.csv"),l.createElement(t.td,null,"Data governance reference data positions")),l.createElement(t.tr,null,l.createElement(t.td,null,"governance-reference-department.csv"),l.createElement(t.td,null,"Data governance reference data departments")))),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"2-log-in-to-cloud-pak-for-data"},l.createElement(t.h3,{id:"2-log-in-to-cloud-pak-for-data"},l.createElement(t.a,{href:"#2-log-in-to-cloud-pak-for-data"},"2. Log in to Cloud Pak for Data")),"\n",l.createElement(t.p,null,"If you have not already done so, using the instructions and the screen shots below, ",l.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/"},"Log in to IBM Cloud Pak for Data"),". You will use ",l.createElement(t.strong,null,"your personal")," Cloud Pak for Data as a Service account in the ",l.createElement(t.strong,null,"Dallas")," region to do the lab."),"\n",l.createElement(t.img,{src:"/1686806104990.5361518962/image1.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Using the ",l.createElement(t.strong,null,"Work with resources in this IBM Cloud region:")," dropdown, select the ",l.createElement(t.strong,null,"Dallas")," region."),"\n",l.createElement(t.p,null,"This is ",l.createElement(t.strong,null,"very important")," because all of the cloud services that you were instructed to provision in the data fabric lab ",l.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/getting-started"},"Getting started")," section should be provisioned in the ",l.createElement(t.strong,null,"Dallas")," region."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Enter your ",l.createElement(t.strong,null,"IBM Id")," that you used to sign up for Cloud Pak for Data."),"\n",l.createElement(t.p,null,"This is your personal IBM Cloud Id. If you have logged in to Cloud Pak for Data previously, and checked the ",l.createElement(t.strong,null,"Remember IBMid")," check box, it may already be filled in for you. If you have multiple Cloud Pak for Data accounts, you can click inside the IBMid area above the ",l.createElement(t.strong,null,"Continue")," button and a list of available IBM Ids will be displayed for you to choose from."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Continue")," button."),"\n"),"\n"),"\n",l.createElement(t.p,null,"If your IBM Id is recognized as an IBM w3id (internal IBM w3 intranet id), you will be prompted to enter your password using the w3id on IBM Security Verify dialog:"),"\n",l.createElement(t.img,{src:"/1686806105134.5383519074/image2.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Enter the ",l.createElement(t.strong,null,"password")," for your IBM w3id."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Sign in")," button."),"\n"),"\n"),"\n",l.createElement(t.p,null,"If your IBM Id is ",l.createElement(t.strong,null,"not")," an IBM w3id, you will be prompted to enter your password using the standard IBM Security Verify dialog:"),"\n",l.createElement(t.img,{src:"/1686806105282.5405519185/image3.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Enter the ",l.createElement(t.strong,null,"password")," for your IBM Id."),"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"Log in")," button."),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"3-validate-your-environment"},l.createElement(t.h3,{id:"3-validate-your-environment"},l.createElement(t.a,{href:"#3-validate-your-environment"},"3. Validate Your Environment")),"\n",l.createElement(t.p,null,"You will be brought to the Cloud Pak for Data home page. If at any point during these instructions you get a pop-up message from ",l.createElement(t.strong,null,"Cloud Pak for Data")," asking to guide or assist you, dismiss it and simply follow the steps in the instructions."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"make-sure-you-are-in-your-personal-cloud-account"},l.createElement(t.h4,{id:"make-sure-you-are-in-your-personal-cloud-account"},l.createElement(t.a,{href:"#make-sure-you-are-in-your-personal-cloud-account"},"Make sure you are in ",l.createElement(t.strong,null,"your")," personal cloud account")),"\n",l.createElement(t.hr),"\n",l.createElement(t.p,null,"You can be a member of many cloud accounts. This lab is done using your personal cloud account, so you want to ensure you are in the correct account before you proceed with the lab."),"\n",l.createElement(t.img,{src:"/1686806105454.543519295/image4.png",alt:""}),"\n",l.createElement(t.p,null,"The account displayed on the toolbar should show ",l.createElement(t.strong,null,"Your cloud account ID - Your name"),". For example, in the screen shot above, the personal account is ",l.createElement(t.strong,null,"1792871 - Rick Buglio"),". If your personal account is selected, like the screen shot above, you can proceed to the next step. If not, follow the instructions below to switch to your personal account."),"\n",l.createElement(t.img,{src:"/1686806105470.5432519306/image5.png",alt:""}),"\n",l.createElement(t.p,null,"In the screen shot above, the user is in the ",l.createElement(t.strong,null,"Techzone Outcomes")," cloud account and needs to switch to their personal account. This is a common scenario because IBM sellers and business partners could still have a reservation in the Data and AI Live Demos, ",l.createElement(t.strong,null,"Techzone Outcomes"),", cloud account to do the Data Fabric Level 2 sales demos. When you login to Cloud Pak for Data, it remembers the last account you logged into, so its a good practice to check what account you are in before proceeding."),"\n",l.createElement(t.p,null,"Using the ",l.createElement(t.strong,null,"Cloud account")," dropdown on the toolbar, select ",l.createElement(t.strong,null,"Your personal")," cloud account."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"make-sure-you-are-in-the-dallas-region"},l.createElement(t.h4,{id:"make-sure-you-are-in-the-dallas-region"},l.createElement(t.a,{href:"#make-sure-you-are-in-the-dallas-region"},"Make sure you are in the ",l.createElement(t.strong,null,"Dallas")," region")),"\n",l.createElement(t.hr),"\n",l.createElement(t.p,null,"This is ",l.createElement(t.strong,null,"very important"),". Based on the ",l.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/getting-started"},"Getting started")," instructions, you should have the ",l.createElement(t.strong,null,"Watson Knowledge Catalog")," and ",l.createElement(t.strong,null,"Watson Studio")," services provisioned in the ",l.createElement(t.strong,null,"Dallas")," region. At a minimum, you need these two services provisioned in your cloud account in the ",l.createElement(t.strong,null,"Dallas")," region to do this lab."),"\n",l.createElement(t.p,null,"You ",l.createElement(t.strong,null,"cannot")," work across cloud service regions in Cloud Pak for Data as a Service. Only ",l.createElement(t.strong,null,"Global")," services, like ",l.createElement(t.strong,null,"Cloud Object Storage"),", can be used across cloud service regions. The majority of this lab is done using ",l.createElement(t.strong,null,"Watson Knowledge Catalog"),", but it also relies heavily on a ",l.createElement(t.strong,null,"Watson Studio")," project to do metadata import and enrichment, and to publish assets to a governed catalog. Therefore, you must have the ability to create projects and catalogs, and use all the features of ",l.createElement(t.strong,null,"Watson Knowledge Catalog"),", and be able to publish from a project to a catalog that reside in the same region in the same account."),"\n",l.createElement(t.img,{src:"/1686806105490.5435519317/image6.png",alt:""}),"\n",l.createElement(t.p,null,"In the screen shot above, the region is set to ",l.createElement(t.strong,null,"London"),". The region needs to be set to ",l.createElement(t.strong,null,"Dallas"),". If your region is ",l.createElement(t.strong,null,"not")," set to ",l.createElement(t.strong,null,"Dallas"),", perform the following steps:"),"\n",l.createElement(t.p,null,"Using the ",l.createElement(t.strong,null,"Region")," dropdown on the toolbar, select the ",l.createElement(t.strong,null,"Dallas")," region."),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"4-check-lite-plan-limits"},l.createElement(t.h3,{id:"4-check-lite-plan-limits"},l.createElement(t.a,{href:"#4-check-lite-plan-limits"},"4. Check Lite Plan Limits")),"\n",l.createElement(t.p,null,"This lab uses the ",l.createElement(t.strong,null,"Lite")," service plan of ",l.createElement(t.strong,null,"Watson Knowledge Catalog"),". The Lite service plan has the following limitations:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"You can only create 2 catalogs"),"\n",l.createElement(t.li,null,"You can only create 10 categories"),"\n",l.createElement(t.li,null,"You can only create 300 business terms"),"\n"),"\n",l.createElement(t.p,null,"To provide you with the most in depth introduction to the capabilities and differentiators of ",l.createElement(t.strong,null,"Watson Knowledge Catalog"),", you will need the ability to create ",l.createElement(t.strong,null,"1")," Catalog, ",l.createElement(t.strong,null,"3")," Categories, and ",l.createElement(t.strong,null,"150")," Business Terms. The steps in this section will instruct you on how to verify the catalog, category, and business term capacity in your environment to successfully complete this lab."),"\n",l.createElement(t.p,null,"After performing the verification steps below, if your environment ",l.createElement(t.strong,null,"does not")," meet the capacity requirements, please notify a team member who is supporting this workshop."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"verify-category-capacity"},l.createElement(t.h4,{id:"verify-category-capacity"},l.createElement(t.a,{href:"#verify-category-capacity"},"Verify Category Capacity")),"\n",l.createElement(t.hr),"\n",l.createElement(t.p,null,"The Lite plan of Watson Knowledge Catalog has a limit of 10 categories. That limit includes sub-categories and it counts the ",l.createElement(t.strong,null,"[uncategorized]")," and ",l.createElement(t.strong,null,"Locations")," system categories, created by Watson Knowledge Catalog, as part of the 10 category limit, so you really only have the ability to create ",l.createElement(t.strong,null,"8")," new categories."),"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"[uncategorized]")," category contains the 165 predefined data classes and 4 classifications supplied by Watson Knowledge Catalog. The ",l.createElement(t.strong,null,"Locations")," category contains the predefined reference data sets that provide the physical location and sovereign location that you select when you are designing data location rules to move data from one location to another. Data location rules are still in the ",l.createElement(t.strong,null,"experimental")," stage, so they will not be covered in this lab, but the ",l.createElement(t.strong,null,"Locations")," category is still included and counts towards your 10 category maximum."),"\n",l.createElement(t.p,null,"This lab imports and creates ",l.createElement(t.strong,null,"3 categories")," to showcase cross category dependencies and relationships, and the use of sub-categories, so you can experience the advantage of using the automated import method without having to create everything manually."),"\n",l.createElement(t.p,null,"Before you begin the lab, follow the steps below to ensure you have enough category capacity available:"),"\n",l.createElement(t.img,{src:"/1686806105506.5437519328/image7.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Select the ",l.createElement(t.strong,null,"Navigation")," menu (the 4 stacked horizontal lines in the upper left corner)."),"\n"),"\n",l.createElement(t.img,{src:"/1686806105526.544519339/image8.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Select ",l.createElement(t.strong,null,"Governance > Categories")," from the menu."),"\n"),"\n",l.createElement(t.img,{src:"/1686806105542.5442519350/image9.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Select the category ",l.createElement(t.strong,null,"explorer")," icon in the upper left corner to open the explorer tree view."),"\n"),"\n",l.createElement(t.img,{src:"/1686806104990.5361518963/image10.png",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Your category explorer view will not look exactly like the example in the screen shot above, but you will be able to determine how many open category slots you have by fully expanding all levels of categories in the tree to expose any sub-categories."),"\n",l.createElement(t.p,null,"In this account, there are ",l.createElement(t.strong,null,"6 categories")," created. The system supplied ",l.createElement(t.strong,null,"[uncategorized]")," and ",l.createElement(t.strong,null,"Locations")," categories, one parent category and 3 sub-categories. Therefore, it has the capacity to import and create the 3 new categories in the CSV file provided."),"\n",l.createElement(t.img,{src:"/1686806105006.5364518974/image11.png",alt:""}),"\n",l.createElement(t.p,null,"It is very unlikely that you ",l.createElement(t.strong,null,"don't")," have 3 category slots available. Most likely, your environment will look like the screen shot above with just the 2 system categories of ",l.createElement(t.strong,null,"[uncategorized]")," and ",l.createElement(t.strong,null,"Locations")," since you probably have a newly provisioned ",l.createElement(t.strong,null,"Watson Knowledge Catalog")," service with an empty business glossary."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"verify-business-term-capacity"},l.createElement(t.h4,{id:"verify-business-term-capacity"},l.createElement(t.a,{href:"#verify-business-term-capacity"},"Verify Business Term Capacity")),"\n",l.createElement(t.hr),"\n",l.createElement(t.p,null,"The Lite plan of Watson Knowledge Catalog has a limit of ",l.createElement(t.strong,null,"300")," business terms. This lab imports, and creates, ",l.createElement(t.strong,null,"150")," business terms to have a complete, and meaningful business glossary, with a term defined for every column of the data assets that will be added by the metadata import process, so they can be leveraged by the metadata enrichment process."),"\n",l.createElement(t.p,null,"Before you begin the lab, follow the steps below to ensure you have enough business term capacity available:"),"\n",l.createElement(t.img,{src:"/1686806105026.5366518985/image12.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Select the ",l.createElement(t.strong,null,"Navigation")," menu (the 4 stacked horizontal lines in the upper left corner)."),"\n"),"\n",l.createElement(t.img,{src:"/1686806105038.5369518996/image13.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Select ",l.createElement(t.strong,null,"Governance > Business terms")," from the menu."),"\n"),"\n",l.createElement(t.img,{src:"/1686806105054.537519007/image14.png",alt:""}),"\n",l.createElement(t.p,null,"If you have a newly deployed ",l.createElement(t.strong,null,"Watson Knowledge Catalog")," service, your environment will look like the screen shot above with no published business terms. If so, you will be able to successfully import and create the ",l.createElement(t.strong,null,"150")," new business terms in the ",l.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/102#4-create-business-terms"},"Create Business Terms")," section below."),"\n",l.createElement(t.img,{src:"/1686806105070.5374519018/image15.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"If your environment has some published business terms like the screen shot above:"),"\n",l.createElement(t.p,null,"a. Scroll down to the bottom of the page."),"\n",l.createElement(t.p,null,"b. Look at the total number of accessible business terms that are published and make a note of how many you have."),"\n"),"\n"),"\n",l.createElement(t.p,null,"If the number is less than or equal to ",l.createElement(t.strong,null,"150")," you will be able to successfully import and create the ",l.createElement(t.strong,null,"150")," new business terms in the ",l.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/102#4-create-business-terms"},"Create Business Terms")," section below."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"verify-catalog-capacity"},l.createElement(t.h4,{id:"verify-catalog-capacity"},l.createElement(t.a,{href:"#verify-catalog-capacity"},"Verify Catalog Capacity")),"\n",l.createElement(t.hr),"\n",l.createElement(t.p,null,"The Lite service plan of Watson Knowledge Catalog only allows for ",l.createElement(t.strong,null,"2")," catalogs to be created in addition to the ",l.createElement(t.strong,null,"Platform assets catalog"),". This lab creates ",l.createElement(t.strong,null,"1")," new catalog that will contain the published data assets for the lab."),"\n",l.createElement(t.p,null,"Before you begin the lab, follow the steps below to ensure you have enough catalog capacity available:"),"\n",l.createElement(t.img,{src:"/1686806105082.5376519029/image16.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Select the ",l.createElement(t.strong,null,"Navigation")," menu (the 4 stacked horizontal lines in the upper left corner)."),"\n"),"\n",l.createElement(t.img,{src:"/1686806105098.5378519040/image17.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Select ",l.createElement(t.strong,null,"Catalogs > View all catalogs")," from the menu."),"\n"),"\n",l.createElement(t.img,{src:"/1686806105110.5378519051/image18.png",alt:""}),"\n",l.createElement(t.p,null,"It is more likely that your environment will look like the screen shot above with just the ",l.createElement(t.strong,null,"Platform assets catalog")," because you probably have a newly provisioned ",l.createElement(t.strong,null,"Watson Knowledge Catalog")," service."),"\n",l.createElement(t.img,{src:"/1686806105122.538519062/image19.png",alt:""}),"\n",l.createElement(t.p,null,"Your environment might also look like the screen shot above. This environment has ",l.createElement(t.strong,null,"2")," catalogs from the ",l.createElement(t.strong,null,"Techzone Outcomes")," cloud account because the account owner has an active reservation in Technology Zone for the ",l.createElement(t.strong,null,"Data fabric demo"),". The account owner ",l.createElement(t.strong,null,"does not")," own these catalogs so they ",l.createElement(t.strong,null,"do not")," count against the ",l.createElement(t.strong,null,"2")," catalog limit, and ",l.createElement(t.strong,null,"2")," of the catalogs are ",l.createElement(t.strong,null,"Platform asset")," catalogs which do not count towards the catalog limit. Therefore, this account has the ability to create a new catalog."),"\n",l.createElement(t.p,null,"If you already have ",l.createElement(t.strong,null,"2")," catalogs in addition to the ",l.createElement(t.strong,null,"Platform assets catalog"),", and you ",l.createElement(t.strong,null,"cannot")," create a new one, you can do the following:"),"\n",l.createElement(t.p,null,"a. Use an existing catalog that you own and have full administer rights to, and very importantly, that has the ",l.createElement(t.strong,null,"Governed")," flag enabled so data protection rules will be enforced.\nb. Delete an existing catalog, if you can, to make room for the new catalog this lab creates."),"\n",l.createElement(t.p,null,"If your environment meets all of the capacity requirements, you are ready to begin the lab! Otherwise, please notify a team member who is supporting this workshop.")))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},s=n(4184),i=n.n(s),c=n(4690),u=n(1140),m=n(2565),d=n(8531),h=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:o,updated:r}}},children:s}=e,c=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),p=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:o,updated:r},t[0].title||a||""),l.createElement(d.Z,{className:g.YS},l.createElement("article",{className:i()(g.Y2,!p&&g.ey),ref:c},l.createElement(m.Z,{components:{h1:()=>null}},s)),p&&l.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:E})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(1151),o=n(7563);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA,Danger:o.b0,Warning:o.v3,CopyText:o.O5};var s=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...r,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7500),o=n(4184),r=n.n(o),s=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:o}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),o&&o.length>0&&i(o,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>i(t[0].items||[])),[t]),o=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return o},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return o}});var a=n(7294);const l=a.createContext({});function o(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||r:o(e),a.createElement(l.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-wkc-101-md-c1fe120e24bce9d47032.js.map