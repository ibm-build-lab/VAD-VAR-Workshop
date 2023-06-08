"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3894],{4437:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",ol:"ol",li:"li",ul:"ul",h2:"h2",a:"a",blockquote:"blockquote",img:"img",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"100-technical-lab-preparation"},a.createElement(t.h1,{id:"100-technical-lab-preparation"},"100: Technical Lab Preparation"),"\n",a.createElement(t.p,null,"This section instructs you on how to prepare your ",a.createElement(t.strong,null,"IBM Cloud")," and ",a.createElement(t.strong,null,"Cloud Pak for Data as a Service")," environments to perform the Data and AI ",a.createElement(t.strong,null,"Data fabric labs"),"."),"\n",a.createElement(t.p,null,"These tasks are a pre-requisite in order to perform ",a.createElement(t.strong,null,"any")," of the ",a.createElement(t.strong,null,"Data fabric labs")," successfully. These labs are ",a.createElement(t.strong,null,"not")," done in the shared, multi-user, pre-configured ",a.createElement(t.strong,null,"Data and AI Live Demos")," environment. That environment, which requires a reservation request, is primarily a read only environment that is used exclusively for the ",a.createElement(t.strong,null,"Data fabric demos"),". These technical labs require more flexibility and this is why you have to prepare your own Cloud Pak for Data accounts to do these labs."),"\n",a.createElement(t.p,null,"You will need an ",a.createElement(t.strong,null,"IBM Cloud")," and ",a.createElement(t.strong,null,"IBM Cloud Pak for Data as a Service")," account to do these technical ",a.createElement(t.strong,null,"Data fabric labs"),". Depending on your account status, follow the steps below so you can use your personal IBM Cloud and Cloud Pak for Data as a Service account. This ensures that there will be zero conflicts with other users and services, that you have the proper cloud and Cloud Pak for Data as a Service privileges, and that no special naming conventions or processing will be needed for you to complete these technical labs."),"\n",a.createElement(t.p,null,"To prepare your personal IBM Cloud and Cloud Pak for Data environments for these technical labs, you will perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Setup your personal IBM Cloud account."),"\n",a.createElement(t.li,null,"Setup your personal IBM Cloud Pak for Data as a Service account."),"\n",a.createElement(t.li,null,"Provision the IBM Cloud and Cloud Pak for Data as a Service Lite services."),"\n",a.createElement(t.li,null,"Create the Cloud Pak for Data ",a.createElement(t.strong,null,"Platform assets catalog"),"."),"\n",a.createElement(t.li,null,"Create the ",a.createElement(t.strong,null,"Platform connections")," to the Data and AI Live Demos data sources."),"\n"),"\n",a.createElement(t.p,null,"Warning: Cloud Park for Data does not support Apple's ",a.createElement(t.strong,null,"Safari")," browser. You must use one of the following supported browsers:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Mozilla Firefox (recommended) - Version 69 and higher"),"\n",a.createElement(t.li,null,"Google Chrome - Version 80 and higher"),"\n",a.createElement(t.li,null,"Microsoft Edge - Version 95 and higher"),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"obtain-an-ibm-cloud-account"},a.createElement(t.h2,{id:"obtain-an-ibm-cloud-account"},a.createElement(t.a,{href:"#obtain-an-ibm-cloud-account"},"Obtain an IBM Cloud Account")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If you have an IBM Cloud account you can skip this step."),"\n"),"\n",a.createElement(t.p,null,"If you ",a.createElement(t.strong,null,"do not")," have an IBM Cloud account, ",a.createElement(t.a,{href:"https://cloud.ibm.com/registration"},"click this link")," to create one. After registration, you will be sent an email to activate your account. This can take a few hours to process. Once you receive the confirmation email, follow the instructions provided in the email to activate your account."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"sign-up-for-cloud-pak-for-data"},a.createElement(t.h2,{id:"sign-up-for-cloud-pak-for-data"},a.createElement(t.a,{href:"#sign-up-for-cloud-pak-for-data"},"Sign Up for Cloud Pak for Data")),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"Data and AI Live Demos")," use Cloud Pak for Data services that are provisioned in the IBM cloud ",a.createElement(t.strong,null,"Dallas")," service region. This means you must use Cloud Pak for Data in the ",a.createElement(t.strong,null,"Dallas")," region, and register you account for a Cloud Pak for Data as a Service account in the ",a.createElement(t.strong,null,"Dallas")," region to do the Data fabric labs, ",a.createElement(t.strong,null,"even")," if you have an account in another region."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If you have an IBM Cloud Pak for Data as a Service account in the Dallas region you can skip this step."),"\n"),"\n",a.createElement(t.p,null,"If you have ",a.createElement(t.strong,null,"not")," signed up for an IBM Cloud Pak for Data as a Service account in the ",a.createElement(t.strong,null,"Dallas")," region, ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/registration/stepone?context=cpdaas&apps=all"},"click this link")," to sign up for one in the ",a.createElement(t.strong,null,"Dallas")," region."),"\n",a.createElement(t.p,null,"Follow the instructions below to complete the account registration process and setup your account in the Dallas region:"),"\n",a.createElement(t.img,{src:"/1686261650579.27561088721/1.png",alt:"image1"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Use the ",a.createElement(t.strong,null,"Select a region")," dropdown to select the ",a.createElement(t.strong,null,"Dallas")," region for your Cloud Pak for Data instance."),"\n",a.createElement(t.li,null,"Select the checkbox to agree to the terms."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Log in")," with your ",a.createElement(t.strong,null,"IBMId")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650587.2761088726/2.png",alt:"image2"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Enter your ",a.createElement(t.strong,null,"IBMid"),". This should be your IBM Cloud Id."),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"If you have previously logged in to Cloud Pak for Data and checked the ",a.createElement(t.strong,null,"Remember IBMid")," check box, it may already be filled in for you. If you have multiple Cloud Pak for Data accounts, you can click inside the ",a.createElement(t.strong,null,"IBMid")," area above the ",a.createElement(t.strong,null,"Continue")," button and a list of your available IBM Ids will be displayed for you to choose from."),"\n"),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Continue")," button."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If prompted, and depending on the authentication method you are presented with, enter your IBMId or IBM w3id ",a.createElement(t.strong,null,"password"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650591.2761088727/3.png",alt:"image3"}),"\n",a.createElement(t.p,null,"If you have not logged in to Cloud Pak for Data in a while, you might be presented with an IBM Privacy Statement that you have to agree to. If so, follow these steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Scroll ",a.createElement(t.strong,null,"down")," to the bottom of the privacy statement page."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Proceed")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650599.27611088728/4.png",alt:"image4"}),"\n",a.createElement(t.p,null,"You will see the ",a.createElement(t.strong,null,"Provisioning your IBM Cloud Pak for Data core services")," screen with a progress bar."),"\n",a.createElement(t.p,null,"When ",a.createElement(t.strong,null,"Done!")," appears above the progress bar with a message of: ",a.createElement(t.strong,null,"Your IBM Cloud Pak for Data apps are ready to use"),":"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Go to IBM Cloud Pak for Data")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650603.27641088729/5.png",alt:"image5"}),"\n",a.createElement(t.p,null,"If you are presented with a ",a.createElement(t.strong,null,"Welcome to Cloud Pak for Data!")," dialog:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Skip for now")," button."),"\n"),"\n",a.createElement(t.p,null,"Now that you have an activated IBM Cloud account and have registered for a Cloud Pak for Data account in the ",a.createElement(t.strong,null,"Dallas")," region, you can proceed to the next step to request a reservation."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"provision-the-services"},a.createElement(t.h2,{id:"provision-the-services"},a.createElement(t.a,{href:"#provision-the-services"},"Provision the Services")),"\n",a.createElement(t.p,null,"This step instructs you on how to provision the ",a.createElement(t.strong,null,"free")," IBM Cloud and Cloud Pak for Data ",a.createElement(t.strong,null,"Lite")," services that you will need to perform the technical ",a.createElement(t.strong,null,"Data fabric labs"),". These instructions were created using an empty IBM Cloud and Cloud Pak for Data account with no services provisioned for the benefit of those who have never setup their accounts with provisioned services. Therefore, your environment may look different than the screen shots in these instructions, but the end result should be the same."),"\n",a.createElement(t.p,null,"Not all of the ",a.createElement(t.strong,null,"Lite")," service plans are in every cloud service region. For example, the IBM Match 360 with Watson and Watson OpenScale services are only available in the ",a.createElement(t.strong,null,"Dallas")," region. DataStage is only available in the ",a.createElement(t.strong,null,"Dallas")," and ",a.createElement(t.strong,null,"Frankfurt")," regions. Therefore, as you can imagine, this is a chaotic matrix of service availability. Therefore, to ensure inclusion, consistency, simplicity, and predictability, the ",a.createElement(t.strong,null,"Data fabric labs")," requires that ",a.createElement(t.strong,null,"all")," of the ",a.createElement(t.strong,null,"Lite")," services are provisioned in the ",a.createElement(t.strong,null,"Dallas")," region."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"It is very important that all services be provisioned for the ",a.createElement(t.strong,null,"Dallas region")," (excluding Cloud Object Storage)"),"\n"),"\n",a.createElement(t.p,null,"Some services take longer than others to provision, so do not be alarmed if a service status does not instantly appear after you provision them, or they have a status of ",a.createElement(t.strong,null,"Provisioning"),". By the time you are done provisioning all the required services they should all be in an ",a.createElement(t.strong,null,"Active")," status."),"\n",a.createElement(t.p,null,"Lastly, if you make a mistake and choose a pricing plan other than the ",a.createElement(t.strong,null,"Lite")," plan, or assigned a service to the wrong resource group, you can ",a.createElement(t.strong,null,"delete")," the service from the Cloud Pak for Data ",a.createElement(t.strong,null,"Services instances")," section and re-provision the service again. All other changes, like renaming a service, have to be managed from your IBM Cloud account."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"1-required-services"},a.createElement(t.h3,{id:"1-required-services"},a.createElement(t.a,{href:"#1-required-services"},"1. Required Services")),"\n",a.createElement(t.p,null,"For the technical labs, you will need to provision the following services:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Service Catalog Category"),a.createElement(t.th,null,"Service Catalog Service Name"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,"AI / Machine Learning"),a.createElement(t.td,null,"Watson OpenScale")),a.createElement(t.tr,null,a.createElement(t.td,null,"AI / Machine Learning"),a.createElement(t.td,null,"Watson Studio")),a.createElement(t.tr,null,a.createElement(t.td,null,"AI / Machine Learning"),a.createElement(t.td,null,"Watson Knowledge Catalog")),a.createElement(t.tr,null,a.createElement(t.td,null,"AI / Machine Learning"),a.createElement(t.td,null,"IBM Match 360 with Watson")),a.createElement(t.tr,null,a.createElement(t.td,null,"AI / Machine Learning"),a.createElement(t.td,null,"Watson Machine Learning")),a.createElement(t.tr,null,a.createElement(t.td,null,"Databases"),a.createElement(t.td,null,"Db2")),a.createElement(t.tr,null,a.createElement(t.td,null,"Databases"),a.createElement(t.td,null,"Watson Query")),a.createElement(t.tr,null,a.createElement(t.td,null,"Databases"),a.createElement(t.td,null,"DataStage")),a.createElement(t.tr,null,a.createElement(t.td,null,"Analytics"),a.createElement(t.td,null,"IBM Cognos Embedded Dashboard")),a.createElement(t.tr,null,a.createElement(t.td,null,"Storage"),a.createElement(t.td,null,"Cloud Object Storage")))),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If you already have any of the services listed above already provisioned in your cloud account in the ",a.createElement(t.strong,null,"Dallas")," region, you can ",a.createElement(t.strong,null,"skip")," provisioning that service."),"\n"),"\n",a.createElement(t.p,null,"All of the services listed in the table above can be provisioned and maintained directly from the ",a.createElement(t.strong,null,"Services")," section of your Cloud Pak for Data account. After provisioning these services, you will remain in your Cloud Pak for Data account ",a.createElement(t.strong,null,"except")," when you provision the ",a.createElement(t.strong,null,"Cloud Object Storage")," service (which is why you provision it last). Since the Cloud Object Storage service is a global cloud service, Cloud Pak for Data will take you to your IBM Cloud account in a new tab (or window) in your browser to provision it."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"2-datastage-service"},a.createElement(t.h3,{id:"2-datastage-service"},a.createElement(t.a,{href:"#2-datastage-service"},"2. DataStage Service")),"\n",a.createElement(t.p,null,"The following instructions walk you through provisioning the ",a.createElement(t.strong,null,"DataStage")," service as an example. The remaining service provisioning instructions ",a.createElement(t.strong,null,"do not")," supply detailed screen shots. Only the required service properties and suggested names will be supplied to provision the remaining ",a.createElement(t.strong,null,"8")," required services. With that in mind, take the time to follow the detailed ",a.createElement(t.strong,null,"DataStage")," instructions so the other services will be easy to provision."),"\n",a.createElement(t.img,{src:"/1686261650607.27641088730/6.png",alt:"image6"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"In your Cloud Pak for Data home screen, select the ",a.createElement(t.strong,null,"Navigation")," menu (the 4 stacked horizontal lines in the upper left corner)."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650607.27641088731/7.png",alt:"image7"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Services > Services catalog")," menu item."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650611.27641088732/8.png",alt:"image8"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Databases")," checkbox on the left."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"DataStage")," service tile (it's likely at the bottom)."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650611.27641088733/9.png",alt:"image9"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Using the ",a.createElement(t.strong,null,"Select a region")," dropdown, select the ",a.createElement(t.strong,null,"Dallas")," region from the list."),"\n",a.createElement(t.li,null,"Scroll ",a.createElement(t.strong,null,"down")," the service page."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650579.27561088722/10.png",alt:"image10"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Lite")," plan by clicking on this plan's tile. You will see a checkmark appear on the right of the Lite plan."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650583.2761088723/11.png",alt:"image11"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"For the ",a.createElement(t.strong,null,"Service name"),", enter any name you want or accept the supplied default."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"This example removes the --xx default characters at the end of the service name and simply names it DataStage. You can name the service whatever you want, or take the default name."),"\n"),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Using the ",a.createElement(t.strong,null,"Select a resource group")," dropdown, select a resource group from the list or take the default displayed."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Services have to be assigned to a cloud account resource group. IBM Cloud automatically creates a resource group when you register for an IBM Cloud account. This resource group is named ",a.createElement(t.strong,null,"Default"),". If you have not created any additional resource groups, or renamed the ",a.createElement(t.strong,null,"Default")," resource group, you will only have one resource group and it will be automatically chosen for you and greyed out."),"\n"),"\n",a.createElement(t.p,null,"This example shows a resource group named ",a.createElement(t.strong,null,"Cloud Pak for Data")," from the list because the cloud account, where these screen shots that were taken from, has multiple resource groups defined."),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Create")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1686261650583.2761088724/12.png",alt:"image12"}),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"Create")," button will be greyed out and turn to ",a.createElement(t.strong,null,"Creating"),"."),"\n",a.createElement(t.img,{src:"/1686261650583.2761088725/13.png",alt:"image13"}),"\n",a.createElement(t.p,null,"Upon successful completion, you will be taken to your Cloud Pak for Data account ",a.createElement(t.strong,null,"Service instances")," section. ",a.createElement(t.strong,null,"Make sure")," (look at the ",a.createElement(t.strong,null,"highlighted columns")," on the screen shot) you deployed a ",a.createElement(t.strong,null,"Lite")," service ",a.createElement(t.strong,null,"Plan"),", that it was placed in the ",a.createElement(t.strong,null,"Resource Group")," you specified, and that the service ",a.createElement(t.strong,null,"Status")," is ",a.createElement(t.strong,null,"Active"),"."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Add service +")," button to create any additional required ",a.createElement(t.strong,null,"Data fabric lab")," services in the ",a.createElement(t.strong,null,"Required Services")," table above."),"\n"),"\n",a.createElement(t.p,null,"Repeat the process you just followed to deploy the ",a.createElement(t.strong,null,"DataStage")," service for all the remaining required services using the information for each service. The ",a.createElement(t.strong,null,"Service name")," provided in the information for each service is only a recommendation. You can name these services whatever you want and assign them to whatever resource group you want. However, ",a.createElement(t.strong,null,"make sure")," you choose the ",a.createElement(t.strong,null,"Lite")," plan so you do not get charged for the services you provision."))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=n(4184),i=n.n(c),s=n(4690),u=n(1140),m=n(2565),d=n(8531),h=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:c}=e,s=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),p=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(d.Z,{className:g.YS},a.createElement("article",{className:i()(g.Y2,!p&&g.ey),ref:s},a.createElement(m.Z,{components:{h1:()=>null}},c)),p&&a.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:E})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(E,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),c=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&i(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>i(t[0].items||[])),[t]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-ml-ops-100-md-bdd5b5ec1253e187e9cd.js.map