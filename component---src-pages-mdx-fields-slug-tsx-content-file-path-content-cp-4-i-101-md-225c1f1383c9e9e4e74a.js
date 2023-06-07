"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2546],{5873:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",em:"em",a:"a",img:"img",ul:"ul",li:"li",strong:"strong",ol:"ol",h2:"h2",blockquote:"blockquote",code:"code",pre:"pre"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-create-deploy-and-test-a-new-api-using-the-api-connect-developer-toolkit"},a.createElement(t.h1,{id:"101-create-deploy-and-test-a-new-api-using-the-api-connect-developer-toolkit"},"101: Create, deploy and test a new API using the API Connect Developer Toolkit"),"\n",a.createElement(t.p,null,"In this lab you will create a new API using the OpenAPI definition of an existing RESTful web-service that gets realtime stock quotes. You will then test the deployed API by deploying the ",a.createElement(t.em,null,"IBM Trader Lite")," application which is a simple stock trading sample, written as a set of microservices. The app uses the API definition that you will create to get realtime stock quotes."),"\n",a.createElement(t.p,null,"The architecture of the app is shown below:"),"\n",a.createElement(t.a,{href:"/1686178342548.91191105157/architecture.png"},a.createElement(t.img,{src:"/1686178342548.91191105157/architecture.png",alt:""})),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Tradr")," is a Node.js UI for the portfolio service"),"\n",a.createElement(t.li,null,"The ",a.createElement(t.strong,null,"portfolio")," microservice sits at the center of the application. This microservice:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"persists trade data using JDBC to a MariaDB database"),"\n",a.createElement(t.li,null,"invokes the ",a.createElement(t.strong,null,"stock-quote")," service that invokes an API defined in API Connect in CP4I to get stock quotes"),"\n",a.createElement(t.li,null,"calls the ",a.createElement(t.strong,null,"trade-history")," service to store trade data in a PostgreSQL database that can be queried for reporting purposes."),"\n",a.createElement(t.li,null,"calls the ",a.createElement(t.strong,null,"trade-history")," service to get aggregated historical trade data."),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"This lab is broken up into the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},"Download the OpenAPI definition file for the external Stock Quote service")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-2-import-the-openapi-definition-file-into-api-manager"},"Import the OpenAPI definition file into API Manager")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-3-configure-the-api"},"Configure the API")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-4-test-the-api"},"Test the API")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-5-install-the-traderlite-app"},"Install the TraderLite app")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},"Verify that the Trader Lite app is calling your API successfully")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#summary"},"Summary")),"\n"),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},a.createElement(t.h2,{id:"step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},a.createElement(t.a,{href:"#step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},"Step 1: Download the OpenAPI definition file for the external Stock Quote service")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," You can click on any image in the instructions below to zoom in and see more details. When you do that just click on your browser's back button to return to the previous state."),"\n"),"\n",a.createElement(t.p,null,"1.1 In your browser right click on the following link, right click and select ",a.createElement(t.strong,null,"Save Link As ...")," from the context menu. Save the file ",a.createElement(t.em,null,"stock-quote-api.yaml")," to your local system."),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://raw.githubusercontent.com/IBMStockTraderLite/traderlite-cp4i/master/apic/stock-quote-api.yaml"},"stock-quote-api.yaml")),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-2-import-the-openapi-definition-file-into-api-manager"},a.createElement(t.h2,{id:"step-2-import-the-openapi-definition-file-into-api-manager"},a.createElement(t.a,{href:"#step-2-import-the-openapi-definition-file-into-api-manager"},"Step 2: Import the OpenAPI definition file into API Manager")),"\n",a.createElement(t.p,null,"2.1 Go to the CP4I Platform Navigator browser tab"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note"),": If you've closed the Platform Navigator tab in your browser follow the instructions in the ",a.createElement(t.a,{href:"https://ibmcp4i.github.io/cloudpakforintegration-multitenant-workshop/faq/"},"FAQ"),"."),"\n"),"\n",a.createElement(t.p,null,"2.2 Click on the link to the API Connect instance"),"\n",a.createElement(t.a,{href:"/1686178342592.9141105188/nav-to-apic.png"},a.createElement(t.img,{src:"/1686178342592.9141105188/nav-to-apic.png",alt:""})),"\n",a.createElement(t.p,null,"2.3 Select the ",a.createElement(t.strong,null,"OpenLDAP Local")," user registry"),"\n",a.createElement(t.a,{href:"/1686178342596.91431105192/nav-to-ldap.png"},a.createElement(t.img,{src:"/1686178342596.91431105192/nav-to-ldap.png",alt:""})),"\n",a.createElement(t.p,null,"2.4 Log in with the same credentials your were given for the workshop."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," The API Connect application can take a long time to load when you use it for the first time."),"\n"),"\n",a.createElement(t.p,null,"2.5 Click on the ",a.createElement(t.strong,null,"Develop APIs and Products tile")),"\n",a.createElement(t.a,{href:"/1686178342544.91161105152/api-manager.png"},a.createElement(t.img,{src:"/1686178342544.91161105152/api-manager.png",alt:""})),"\n",a.createElement(t.p,null,"2.6 Click ",a.createElement(t.strong,null,"Add")," and select ",a.createElement(t.strong,null,"API (from REST,GraphQL or SOAP)")," from the context menu"),"\n",a.createElement(t.a,{href:"/1686178342536.91111105149/add-api.png"},a.createElement(t.img,{src:"/1686178342536.91111105149/add-api.png",alt:""})),"\n",a.createElement(t.p,null,"2.7 On the next screen select ",a.createElement(t.strong,null,"Existing OpenAPI")," under ",a.createElement(t.strong,null,"Import")," and then click ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.a,{href:"/1686178342572.9131105175/existing-api.png"},a.createElement(t.img,{src:"/1686178342572.9131105175/existing-api.png",alt:""})),"\n",a.createElement(t.p,null,"2.8 Now choose ",a.createElement(t.strong,null,"stock-quote-api.yaml")," from your local file system and click ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.a,{href:"/1686178342552.9121105161/choose-file.png"},a.createElement(t.img,{src:"/1686178342552.9121105161/choose-file.png",alt:""})),"\n",a.createElement(t.p,null,"2.9 Do not select ",a.createElement(t.strong,null,"Activate API"),". Click ",a.createElement(t.strong,null,"Next")),"\n",a.createElement(t.p,null,"2.10 The API should be imported successfully as shown below. Click ",a.createElement(t.strong,null,"Edit API"),"."),"\n",a.createElement(t.a,{href:"/1686178342564.91261105171/edit-api.png"},a.createElement(t.img,{src:"/1686178342564.91261105171/edit-api.png",alt:""})),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-3-configure-the-api"},a.createElement(t.h2,{id:"step-3-configure-the-api"},a.createElement(t.a,{href:"#step-3-configure-the-api"},"Step 3: Configure the API")),"\n",a.createElement(t.p,null,"After importing the existing API, the first step is to configure basic security before exposing it to other developers. By creating a client key you are able to identify the app using the services. Next, we will define the backend endpoints where the API is actually running. API Connect supports pointing to multiple backend endpoints to match your multiple build stage environments."),"\n",a.createElement(t.p,null,"3.1 In the left navigation select ",a.createElement(t.strong,null,"Host")," and replace the hard coded endpoint address with ",a.createElement(t.code,null,"$(catalog.host)")," to indicate that you want calls to the external API to go through API Connect."),"\n",a.createElement(t.a,{href:"/1686178342548.91191105159/catalog-host.png"},a.createElement(t.img,{src:"/1686178342548.91191105159/catalog-host.png",alt:""})),"\n",a.createElement(t.p,null,"3.2 Click ",a.createElement(t.strong,null,"Save")),"\n",a.createElement(t.p,null,"3.3 In the Edit API screen click ",a.createElement(t.strong,null,"Security Schemes(0)")," in the left navigation"),"\n",a.createElement(t.p,null,"3.4 In the ",a.createElement(t.strong,null,"Security")," section, click the ",a.createElement(t.strong,null,"Add")," button on the right and then click on ",a.createElement(t.strong,null,"Create a security scheme"),"."),"\n",a.createElement(t.a,{href:"/1686178342616.91531105206/security-scheme.png"},a.createElement(t.img,{src:"/1686178342616.91531105206/security-scheme.png",alt:""})),"\n",a.createElement(t.p,null,"3.5 In the ",a.createElement(t.strong,null,"Security Scheme Name(Key)")," field, type ",a.createElement(t.code,null,"client-id"),"."),"\n",a.createElement(t.p,null,"3.6 Under ",a.createElement(t.strong,null,"Security Definition Type"),", choose ",a.createElement(t.strong,null,"apiKey"),"."),"\n",a.createElement(t.p,null,"3.6 Under ",a.createElement(t.strong,null,"Key Type"),", choose ",a.createElement(t.strong,null,"client_id"),"."),"\n",a.createElement(t.p,null,"3.7 For ",a.createElement(t.strong,null,"Located In")," choose ",a.createElement(t.strong,null,"header"),"."),"\n",a.createElement(t.p,null,"3.8 Enter ",a.createElement(t.code,null,"X-IBM-Client-Id")," as the ",a.createElement(t.strong,null,"Variable Name"),". Your screen should now look like the image below."),"\n",a.createElement(t.a,{href:"/1686178342564.91261105170/edit-api-complete.png"},a.createElement(t.img,{src:"/1686178342564.91261105170/edit-api-complete.png",alt:""})),"\n",a.createElement(t.p,null,"3.9 Click the ",a.createElement(t.strong,null,"Create")," button and then click ",a.createElement(t.strong,null,"Save"),"."),"\n",a.createElement(t.p,null,"3.10 Next you'll require use of the Client Id to access your API. In the left Navigation select ",a.createElement(t.strong,null,"Security(0)")," and then click on ",a.createElement(t.strong,null,"Create a Security Requirement")),"\n",a.createElement(t.a,{href:"/1686178342560.91241105166/create-security-req.png"},a.createElement(t.img,{src:"/1686178342560.91241105166/create-security-req.png",alt:""})),"\n",a.createElement(t.p,null,"3.11 Select the Security Scheme you just created and the click ",a.createElement(t.strong,null,"Create"),"."),"\n",a.createElement(t.a,{href:"/1686178342616.91531105205/security-req.png"},a.createElement(t.img,{src:"/1686178342616.91531105205/security-req.png",alt:""})),"\n",a.createElement(t.p,null,"3.12 Click ",a.createElement(t.strong,null,"Save")),"\n",a.createElement(t.p,null,"3.13 Next you'll define the endpoint for the external API. Select the ",a.createElement(t.strong,null,"Gateway")," tab, expand ",a.createElement(t.strong,null,"Properties")," in the left navigation."),"\n",a.createElement(t.p,null,"3.14 Click on the ",a.createElement(t.strong,null,"target-url")," property."),"\n",a.createElement(t.p,null,"3.15 Copy then paste the following URL into the ",a.createElement(t.strong,null,"Property Value")," field:"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://stocktrader.ibmc.buildlab.cloud"},"https://stocktrader.ibmc.buildlab.cloud")),"\n",a.createElement(t.a,{href:"/1686178342632.9161105216/target-url.png"},a.createElement(t.img,{src:"/1686178342632.9161105216/target-url.png",alt:""})),"\n",a.createElement(t.p,null,"3.16 Click ",a.createElement(t.strong,null,"Save")," to complete the configuration."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-4-test-the-api"},a.createElement(t.h2,{id:"step-4-test-the-api"},a.createElement(t.a,{href:"#step-4-test-the-api"},"Step 4: Test the API")),"\n",a.createElement(t.p,null,"In the API designer, you have the ability to test the API immediately after creation."),"\n",a.createElement(t.p,null,"4.1 On the left Navigation, click ",a.createElement(t.strong,null,"Policies"),"."),"\n",a.createElement(t.p,null,"4.2 Click ",a.createElement(t.strong,null,"invoke")," in the flow designer. Note the window on the right with the configuration. The ",a.createElement(t.strong,null,"invoke")," node calls the ",a.createElement(t.strong,null,"target-url")," (ie the external service)."),"\n",a.createElement(t.a,{href:"/1686178342580.91331105180/invoke.png"},a.createElement(t.img,{src:"/1686178342580.91331105180/invoke.png",alt:""})),"\n",a.createElement(t.p,null,"4.3 Modify the ",a.createElement(t.strong,null,"URL")," field to include the request path passed in by the caller as well by appending ",a.createElement(t.code,null,"$(request.path)")," to the ",a.createElement(t.strong,null,"URL"),". When you're done the field should be set to:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"   $(target-url)$(request.path)\n")),"\n",a.createElement(t.a,{href:"/1686178342576.91331105179/invoke-edited.png"},a.createElement(t.img,{src:"/1686178342576.91331105179/invoke-edited.png",alt:""})),"\n",a.createElement(t.p,null,"4.4 Click ",a.createElement(t.strong,null,"Save")),"\n",a.createElement(t.p,null,"4.5 Toggle the ",a.createElement(t.strong,null,"Offline")," switch and then click on the ",a.createElement(t.strong,null,"Test")," tab"),"\n",a.createElement(t.a,{href:"/1686178342632.9161105217/test-tab.png"},a.createElement(t.img,{src:"/1686178342632.9161105217/test-tab.png",alt:""})),"\n",a.createElement(t.p,null,"4.6 The ",a.createElement(t.strong,null,"Request")," should be prefilled with the GET request to ",a.createElement(t.strong,null,"/stock-quote/djia"),"."),"\n",a.createElement(t.p,null,"4.7 Note that your ",a.createElement(t.strong,null,"client-id")," is prefilled for you."),"\n",a.createElement(t.p,null,"4.8 Click ",a.createElement(t.strong,null,"Send"),"."),"\n",a.createElement(t.a,{href:"/1686178342576.91331105178/invoke-api.png"},a.createElement(t.img,{src:"/1686178342576.91331105178/invoke-api.png",alt:""})),"\n",a.createElement(t.p,null,"4.9 If this is the first test of the API, you may see a certificate exception. Simply click on the link provided. This will open a new tab and allow you to click through to accept the self signed certificate. ",a.createElement(t.strong,null,"Note"),": Stop when you get a ",a.createElement(t.code,null,"401")," error code in the new tab."),"\n",a.createElement(t.a,{href:"/1686178342552.9121105160/cert-exception.png"},a.createElement(t.img,{src:"/1686178342552.9121105160/cert-exception.png",alt:""})),"\n",a.createElement(t.p,null,"4.10 Go back to the previous tab and click ",a.createElement(t.strong,null,"Send")," again."),"\n",a.createElement(t.p,null,"4.11 Now you should see a ",a.createElement(t.strong,null,"Response")," section with Status code ",a.createElement(t.code,null,"200 OK")," and the ",a.createElement(t.strong,null,"Body")," displaying the details of the simulated ",a.createElement(t.em,null,"Dow Jones Industrial Average"),"."),"\n",a.createElement(t.a,{href:"/1686178342616.91531105204/response.png"},a.createElement(t.img,{src:"/1686178342616.91531105204/response.png",alt:""})),"\n",a.createElement(t.p,null,"4.12 Next you'll get the ",a.createElement(t.em,null,"Client Id")," and ",a.createElement(t.em,null,"Gateway endpoint")," so you can test your API from the TraderLite app. Click on the ",a.createElement(t.strong,null,"Endpoint")," tab."),"\n",a.createElement(t.p,null,"4.13 Copy the value of the ",a.createElement(t.strong,null,"api-gateway-service")," URL and the ",a.createElement(t.strong,null,"Client-Id")," to a local text file so it can be used in the Stock Trader application later (",a.createElement(t.strong,null,"Note:")," this is a shortcut to the regular process of publishing the API and then subscribing to it as a consumer)."),"\n",a.createElement(t.a,{href:"/1686178342568.91281105173/endpoint-client-id.png"},a.createElement(t.img,{src:"/1686178342568.91281105173/endpoint-client-id.png",alt:""})),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-5-install-the-traderlite-app"},a.createElement(t.h2,{id:"step-5-install-the-traderlite-app"},a.createElement(t.a,{href:"#step-5-install-the-traderlite-app"},"Step 5: Install the TraderLite app")),"\n",a.createElement(t.p,null,"5.1 In a separate browser tab go to the OpenShift console URL for the cluster assigned to you by for the workshop."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note"),": There is a link to your assigned cluster's console on your Workshop Information page. If you have closed it, you can access it following the instructions in the ",a.createElement(t.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/faq/"},"FAQ"),"."),"\n"),"\n",a.createElement(t.p,null,"5.2 Click on ",a.createElement(t.strong,null,"Projects")," in the left navigation and then click on your ",a.createElement(t.strong,null,a.createElement(t.em,null,"studentnnn"))," project in the list"),"\n",a.createElement(t.a,{href:"/1686178342624.91551105211/select-traderlite-project.png"},a.createElement(t.img,{src:"/1686178342624.91551105211/select-traderlite-project.png",alt:""})),"\n",a.createElement(t.p,null,"5.3 Click on ",a.createElement(t.strong,null,"Installed Operators")," (in the ",a.createElement(t.strong,null,"Operators")," section) in the left navigation and then click on the ",a.createElement(t.strong,null,"TraderLite Operator")," in the list."),"\n",a.createElement(t.a,{href:"/1686178342620.91551105209/select-traderlite-operator.png"},a.createElement(t.img,{src:"/1686178342620.91551105209/select-traderlite-operator.png",alt:""})),"\n",a.createElement(t.p,null,"5.4 Click the ",a.createElement(t.strong,null,"Create Instance")," to start the installation of the TraderLite app."),"\n",a.createElement(t.a,{href:"/1686178342640.91651105224/traderlite-create-instance.png"},a.createElement(t.img,{src:"/1686178342640.91651105224/traderlite-create-instance.png",alt:""})),"\n",a.createElement(t.p,null,"5.5 Name the instance ",a.createElement(t.em,null,"traderlite")),"\n",a.createElement(t.p,null,"5.6 Scroll down the page to the ",a.createElement(t.strong,null,"Stock Quote Microservice")," and replace the ",a.createElement(t.strong,null,"API Connect URL")," and ",a.createElement(t.strong,null,"API Connect ClientId")," with the ",a.createElement(t.strong,null,"api-gateway-service")," URL and the ",a.createElement(t.strong,null,"Client-Id")," you saved in the previous section. Click ",a.createElement(t.strong,null,"Create")),"\n",a.createElement(t.a,{href:"/1686178342644.91671105227/traderlite-create-values.png"},a.createElement(t.img,{src:"/1686178342644.91671105227/traderlite-create-values.png",alt:""})),"\n",a.createElement(t.p,null,"5.7 In the left navigation select ",a.createElement(t.strong,null,"Pods")," (in the ",a.createElement(t.strong,null,"Workloads")," section) and then wait for all the TraderLite pods to have a status of ",a.createElement(t.strong,null,"Running")," and be in the ",a.createElement(t.strong,null,"Ready")," state."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Note: You will know the traderlite-xxxxx pods are in a ready state when the ",a.createElement(t.code,null,"Ready")," column shows ",a.createElement(t.code,null,"1/1"),".")),"\n"),"\n",a.createElement(t.a,{href:"/1686178342652.9171105230/traderlite-pods-ready.png"},a.createElement(t.img,{src:"/1686178342652.9171105230/traderlite-pods-ready.png",alt:""})),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},a.createElement(t.h2,{id:"step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},a.createElement(t.a,{href:"#step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},"Step 6: Verify that the Trader Lite app is calling your API successfully")),"\n",a.createElement(t.p,null,"6.1 In your OpenShift console click on ",a.createElement(t.strong,null,"Routes")," (in the ",a.createElement(t.strong,null,"Networking")," section) in the left navigation and then click on the icon next to the url for the ",a.createElement(t.strong,null,"tradr")," app (the UI for TraderLite)"),"\n",a.createElement(t.a,{href:"/1686178342652.9171105231/traderlite-run-tradr.png"},a.createElement(t.img,{src:"/1686178342652.9171105231/traderlite-run-tradr.png",alt:""})),"\n",a.createElement(t.p,null,"6.2 Log in using the username ",a.createElement(t.code,null,"stock")," and the password ",a.createElement(t.code,null,"trader")),"\n",a.createElement(t.a,{href:"/1686178342628.91581105213/stock-trader-login.png"},a.createElement(t.img,{src:"/1686178342628.91581105213/stock-trader-login.png",alt:""})),"\n",a.createElement(t.p,null,"6.3 If the simulated DJIA summary has data then congratulations ! It means that the API you created in API Connect is working !"),"\n",a.createElement(t.a,{href:"/1686178342564.91261105169/djia-success.png"},a.createElement(t.img,{src:"/1686178342564.91261105169/djia-success.png",alt:""})),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},a.createElement(t.h2,{id:"summary"},a.createElement(t.a,{href:"#summary"},"Summary")),"\n",a.createElement(t.p,null,"Congratulations ! You successfully completed the following key steps in this lab:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Created an API by importing an OpenAPI definition for an existing REST service."),"\n",a.createElement(t.li,null,"Configured a ClientID/API Key for security set up a proxy to the existing API."),"\n",a.createElement(t.li,null,"Tested the API in the API Connect developer toolkit."),"\n",a.createElement(t.li,null,"Deployed the Trader Lite app and configured it to use the API you created."),"\n",a.createElement(t.li,null,"Tested the Trader Lite app to make sure it successfully uses your API."),"\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},o=n(4184),i=n.n(o),s=n(4690),u=n(1140),m=n(2565),p=n(8531),h=n(3383),d=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:c}}},children:o}=e,s=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:r,updated:c},t[0].title||l||""),a.createElement(p.Z,{className:d.YS},a.createElement("article",{className:i()(d.Y2,!E&&d.ey),ref:s},a.createElement(m.Z,{components:{h1:()=>null}},o)),E&&a.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(g,e,a.createElement(c,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),a=n(1151),r=n(7563);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var o=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...c,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),c=n.n(r),o=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&i(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>i(t[0].items||[])),[t]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-cp-4-i-101-md-225c1f1383c9e9e4e74a.js.map