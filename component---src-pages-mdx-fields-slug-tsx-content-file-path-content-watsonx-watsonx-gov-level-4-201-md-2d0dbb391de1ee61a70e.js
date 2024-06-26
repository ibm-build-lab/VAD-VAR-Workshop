"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3049],{83757:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return v}});var o=n(11151),a=n(67294);function l(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",h3:"h3",ol:"ol",li:"li",p:"p",strong:"strong",img:"img",code:"code",blockquote:"blockquote",ul:"ul"},(0,o.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"watsonxgovernance-l4-environment-setup"},a.createElement(t.h1,{id:"watsonxgovernance-l4-environment-setup"},"watsonx.governance L4 Environment Setup"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"environment-setup"},a.createElement(t.h2,{id:"environment-setup"},a.createElement(t.a,{href:"#environment-setup"},"Environment Setup")),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"provision-a-watsonxgovernance-environment-from-techzone"},a.createElement(t.h3,{id:"provision-a-watsonxgovernance-environment-from-techzone"},a.createElement(t.a,{href:"#provision-a-watsonxgovernance-environment-from-techzone"},"Provision a watsonx.governance Environment from TechZone")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations/create/65bc253dfe0ac8001156d84f"},"watsonx.governance Level 4 PoX image")," in IBM Technology Zone. Sign in with your IBMid and accept any terms and conditions you are presented with."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For the reservation type, select the ",a.createElement(t.strong,null,"Reserve now")," radio button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-env-reservetype.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Accept the default for the reservation ",a.createElement(t.strong,null,"Name"),", or provide a name of your choosing. For the ",a.createElement(t.strong,null,"Purpose")," of the reservation, select ",a.createElement(t.strong,null,"Education"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-env-reserve-fill.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Fill in the ",a.createElement(t.strong,null,"Purpose description")," box with the reason you are making the reservation (ex. ",a.createElement(t.code,null,"Workshop lab on watsonx.governance Technical Sales Advanced Badge organized by IBM Resell Lab"),"). Then, scroll further down and select your ",a.createElement(t.strong,null,"Preferred geography")," based on your location (ex. ",a.createElement(t.strong,null,"any - AMERICAS - any region - any datacenter"),"). Keep the reservation's ",a.createElement(t.strong,null,"End date and time")," (by default it’s two days (48 hours) from now; it can’t exceed two days initially, but you can extend the reservation by two days, up to two times, before it expires)."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-env-reserve-fill-last.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"On the right-side panel, follow the links to read the Terms & Conditions and the End User Security Policies documents. Then, select the checkbox to agree to those terms. Finally, click ",a.createElement(t.strong,null,"Submit"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-env-reserve-fill-submit.png",alt:""}),"\n",a.createElement(t.p,null,"A message in the upper-right corner will briefly appear stating that the reservation has been created. You may also be presented with an opportunity to provide feedback on the process. Feel free to share your feedback."),"\n",a.createElement(t.p,null,"Shortly after, you will receive an email from IBM Technology Zone acknowledging receipt of the request and that the reservation has started provisioning. You will receive another email from IBM Technology Zone confirming provisioning is complete. Provisioning of the environment may take about ",a.createElement(t.strong,null,"2 hours"),"; however, the environment is not ready to use yet. The Cloud Pak Deployer service still needs to run to install the required software, which typically takes an ",a.createElement(t.strong,null,"additional 3-4 hours"),". If provisioning fails, it may be due to a lack of resources in the geography specified. Try again with the same geography or specify a different one."),"\n",a.createElement(t.p,null,"Reservation status is available at ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"https://techzone.ibm.com/my/reservations"),"."),"\n",a.createElement(t.p,null,"You must now wait until the environment has been provisioned and the Cloud Pak Deployer service installs the required software before moving on to the next section."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"accessing-the-watsonxgovernance-environment"},a.createElement(t.h3,{id:"accessing-the-watsonxgovernance-environment"},a.createElement(t.a,{href:"#accessing-the-watsonxgovernance-environment"},"Accessing the watsonx.governance Environment")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to your ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"TechZone reservations")," page."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Locate and click on the tile for the environment you reserved in a previous step."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-res-tile.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Copy and paste the reservation ",a.createElement(t.strong,null,"Username")," and ",a.createElement(t.strong,null,"Password")," values from the reservation screen into a text file for later use. Then click on the ",a.createElement(t.strong,null,"Open your IBM Cloud environment")," button. A new tab opens with the Red Hat OpenShift log in form."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-res-env-select.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"If given the option to log in with ",a.createElement(t.strong,null,"kube:admin")," credentials or ",a.createElement(t.strong,null,"IBMid")," credentials, click on ",a.createElement(t.strong,null,"kube:admin"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the values you copied in step 3, log in to the OpenShift cluster."),"\n"),"\n"),"\n",a.createElement(t.p,null,"Now that you have successfully logged into your cluster, you will need the credentials to log into Cloud Pak for Data."),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Pipelines")," menu on the left side of the screen to expand it and then click the ",a.createElement(t.strong,null,"Pipelines")," item from the list."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/openshift-pipelines.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"PipelineRuns")," tab to select it. From the list of pipeline runs, click the link for ",a.createElement(t.strong,null,"cloud-pak-deployer-xxx"),". It will likely be the only item in the list."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," if the run is not listed as ",a.createElement(t.strong,null,"Completed")," then you will need to wait for it to finish. This pipeline typically takes ",a.createElement(t.strong,null,"4 hours or longer")," to run and install all the required software."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/openshift-pipelineruns.png",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Logs")," tab. Click on the last item in the list on the left, titled ",a.createElement(t.strong,null,"update-configmap-success-iam"),". ",a.createElement(t.strong,null,"Note")," that if this item does not appear in the list, then either the software installation has failed (if the pipeline run is complete) or has not fully finished. Copy and paste the ",a.createElement(t.strong,null,"Console Route"),", ",a.createElement(t.strong,null,"Username"),", and ",a.createElement(t.strong,null,"Password")," information from the log window into a text file. Throughout the remainder of these labs, you will use these credentials whenever you are instructed to log into Cloud Pak for Data or watsonx."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/openshift-logs.png",alt:""}),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"watsonxai-environment-setup-optional"},a.createElement(t.h2,{id:"watsonxai-environment-setup-optional"},a.createElement(t.a,{href:"#watsonxai-environment-setup-optional"},"watsonx.ai Environment Setup (optional)")),"\n",a.createElement(t.p,null,"If you are planning on governing and evaluating the watsonx.ai generative model as part of ",a.createElement(t.strong,null,a.createElement(t.a,{href:"/watsonx/watsonxgov/level-4/207"},"lab 207"))," and if your Cloud Pak for Data software environment is not equipped with GPUs and doe not have watsonx.ai installed, go through the steps in ",a.createElement(t.strong,null,a.createElement(t.a,{href:"/watsonx/watsonxgov/1"},"lab 1"))," to provision an ",a.createElement(t.strong,null,"IBM watsonx.ai/watsonx.governance SaaS")," environment from TechZone. Once the environment is provisioned, continue to ",a.createElement(t.strong,null,a.createElement(t.a,{href:"/watsonx/watsonxgov/level-4/202"},"lab 202: Deploy up a watsonx.ai model"))),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"getting-amazon-sagemaker-credentials-optional"},a.createElement(t.h2,{id:"getting-amazon-sagemaker-credentials-optional"},a.createElement(t.a,{href:"#getting-amazon-sagemaker-credentials-optional"},"Getting Amazon SageMaker credentials (optional)")),"\n",a.createElement(t.p,null,"If you are planning on governing and evaluating the Amazon SageMaker predictive model as part of ",a.createElement(t.strong,null,a.createElement(t.a,{href:"/watsonx/watsonxgov/level-4/208"},"lab 208")),", go through the following steps."),"\n",a.createElement(t.p,null,"TechZone now offers limited access to deployed models on Amazon SageMaker, including a hiring model used in these hands-on labs."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"provision-an-amazon-sagemaker-environment-from-techzone"},a.createElement(t.h3,{id:"provision-an-amazon-sagemaker-environment-from-techzone"},a.createElement(t.a,{href:"#provision-an-amazon-sagemaker-environment-from-techzone"},"Provision an Amazon SageMaker Environment from TechZone")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations/create/665e09dd1c9f95001e8dceb1"},"Access to Pre-Deployed SageMaker ML Models")," in IBM Technology Zone. Sign in with your IBMid and accept any terms and conditions you are presented with."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For the reservation type, select the ",a.createElement(t.strong,null,"Reserve now")," radio button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-aws-env-reservetype.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Accept the default for the reservation ",a.createElement(t.strong,null,"Name"),", or provide a name of your choosing. For the ",a.createElement(t.strong,null,"Purpose")," of the reservation, select ",a.createElement(t.strong,null,"Education"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-aws-env-reserve-fill.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Fill in the ",a.createElement(t.strong,null,"Purpose description")," box with the reason you are making the reservation (ex. ",a.createElement(t.code,null,"Workshop lab on watsonx.governance Technical Sales Advanced Badge organized by IBM Resell Lab"),"). Then, scroll further down and select your ",a.createElement(t.strong,null,"Preferred geography")," based on your location (ex. ",a.createElement(t.strong,null,"US West 1"),"). Keep the reservation's ",a.createElement(t.strong,null,"End date and time")," (by default it’s two weeks from now; it can’t exceed three weeks)."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-aws-env-reserve-fill-last.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"On the right-side panel, follow the links to read the Terms & Conditions and the End User Security Policies documents. Then, select the checkbox to agree to those terms. Finally, click ",a.createElement(t.strong,null,"Submit"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-env-reserve-fill-submit.png",alt:""}),"\n",a.createElement(t.p,null,"A message in the upper-right corner will briefly appear stating that the reservation has been created. You may also be presented with an opportunity to provide feedback on the process. Feel free to share your feedback."),"\n",a.createElement(t.p,null,"Shortly after, you will receive an email from IBM Technology Zone acknowledging receipt of the request and that the reservation has started provisioning. You will receive another email from IBM Technology Zone confirming provisioning is complete. Provisioning of the environment may take about ",a.createElement(t.strong,null,"10-15 minutes"),"."),"\n",a.createElement(t.p,null,"Reservation status is available at ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"https://techzone.ibm.com/my/reservations"),"."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"getting-amazon-sagemaker-credentials"},a.createElement(t.h3,{id:"getting-amazon-sagemaker-credentials"},a.createElement(t.a,{href:"#getting-amazon-sagemaker-credentials"},"Getting Amazon SageMaker credentials")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"When you receive the email from IBM Technology Zone confirming provisioning is complete, click on the tile for the reservation from your ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"TechZone reservations page"),". The reservation information screen opens."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-aws-res-tile.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Scroll down to the ",a.createElement(t.strong,null,"Environment")," section. Copy and past the values for ",a.createElement(t.strong,null,"Region"),", ",a.createElement(t.strong,null,"AWS_ACCESS_KEY_ID")," and ",a.createElement(t.strong,null,"AWS_SECRET_KEY_ID")," into a text file for later use in the labs."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-aws-credentials.png",alt:""}),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"getting-microsoft-azure-credentials-optional"},a.createElement(t.h2,{id:"getting-microsoft-azure-credentials-optional"},a.createElement(t.a,{href:"#getting-microsoft-azure-credentials-optional"},"Getting Microsoft Azure credentials (optional)")),"\n",a.createElement(t.p,null,"If you are planning on governing and evaluating the Microsoft Azure OpenAI generative model as part of ",a.createElement(t.strong,null,a.createElement(t.a,{href:"/watsonx/watsonxgov/level-4/207"},"lab 207")),", go through the following steps."),"\n",a.createElement(t.p,null,"TechZone now offers limited access to deployed models on Microsoft Azure."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"provision-a-microsoft-azure-environment-from-techzone"},a.createElement(t.h3,{id:"provision-a-microsoft-azure-environment-from-techzone"},a.createElement(t.a,{href:"#provision-a-microsoft-azure-environment-from-techzone"},"Provision a Microsoft Azure Environment from TechZone")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations/create/66605ba777e8f1001e3a2cb5"},"Access to Pre-Deployed Azure OpenAI gpt-35-turbo LLM")," in IBM Technology Zone. Sign in with your IBMid and accept any terms and conditions you are presented with."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For the reservation type, select the ",a.createElement(t.strong,null,"Reserve now")," radio button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-aws-env-reservetype.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Accept the default for the reservation ",a.createElement(t.strong,null,"Name"),", or provide a name of your choosing. For the ",a.createElement(t.strong,null,"Purpose")," of the reservation, select ",a.createElement(t.strong,null,"Education"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-msft-env-reserve-fill.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Fill in the ",a.createElement(t.strong,null,"Purpose description")," box with the reason you are making the reservation (ex. ",a.createElement(t.code,null,"Workshop lab on watsonx.governance Technical Sales Advanced Badge organized by IBM Resell Lab"),"). Then, scroll further down and select your ",a.createElement(t.strong,null,"Preferred geography")," based on your location (ex. ",a.createElement(t.strong,null,"East US 2"),"). Keep the reservation's ",a.createElement(t.strong,null,"End date and time")," (by default it’s two weeks from now; it can’t exceed three weeks)."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-msft-env-reserve-fill-last.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"On the right-side panel, follow the links to read the Terms & Conditions and the End User Security Policies documents. Then, select the checkbox to agree to those terms. Finally, click ",a.createElement(t.strong,null,"Submit"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-env-reserve-fill-submit.png",alt:""}),"\n",a.createElement(t.p,null,"A message in the upper-right corner will briefly appear stating that the reservation has been created. You may also be presented with an opportunity to provide feedback on the process. Feel free to share your feedback."),"\n",a.createElement(t.p,null,"Shortly after, you will receive an email from IBM Technology Zone acknowledging receipt of the request and that the reservation has started provisioning. You will receive two more emails when the provisioning is complete: One form IBM Technology Zone confirming provisioning is complete and another from Microsoft inviting you to join the Microsoft Azure account associated with the environment. Provisioning of the environment may take about ",a.createElement(t.strong,null,"20 minutes"),"."),"\n",a.createElement(t.p,null,"Reservation status is available at ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"https://techzone.ibm.com/my/reservations"),"."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"getting-microsoft-azure-credentials"},a.createElement(t.h3,{id:"getting-microsoft-azure-credentials"},a.createElement(t.a,{href:"#getting-microsoft-azure-credentials"},"Getting Microsoft Azure credentials")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"When you receive the email from Microsoft inviting you to join a Microsoft Azure account, open the email and press ",a.createElement(t.strong,null,"Accept invitation"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/msft-email.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"A new window will open up with a permissions request, press ",a.createElement(t.strong,null,"Accept"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/msft-accept-permissions.png",alt:""}),"\n",a.createElement(t.p,null,'You will then be brought to the Microsoft Azure portal. If a quick start guide pops up, you can press the "',a.createElement(t.strong,null,"X"),'" to close it in the top right corner. You now have acess to Microsoft Azure.'),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"When you receive the email from IBM Technology Zone confirming provisioning is complete, click on the tile for the reservation from your ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"TechZone reservations page"),". The reservation information screen opens."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-msft-res-tile.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Scroll down to the ",a.createElement(t.strong,null,"Environment")," section. Copy and paste the below values to a text file for later use in a Jupyter notebook in the labs:"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"The API endpoint for the deployed model")," - It will be the ",a.createElement(t.strong,null,"AZURE_API_ENDPOINT")," value in the Jupyter notebook."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"The name of the deployed model")," - It will be the ",a.createElement(t.strong,null,"AZURE_DEPLOYMENT_NAME")," value in the Jupyter notebook."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"The Client ID (Application ID) of the Service Principal")," - It will be the ",a.createElement(t.strong,null,"AZURE_CLIENT_ID")," value in the Jupyter notebook."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"The Client Secret of the Service Principal")," - It will be the ",a.createElement(t.strong,null,"AZURE_CLIENT_SECRET")," value in the Jupyter notebook."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/201/techzone-msft-credentials.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-reached-the-end-of-lab-201"},a.createElement(t.h3,{id:"congratulations-youve-reached-the-end-of-lab-201"},a.createElement(t.a,{href:"#congratulations-youve-reached-the-end-of-lab-201"},"Congratulations, you've reached the end of lab 201.")),"\n",a.createElement(t.p,null,"If you followed the ",a.createElement(t.strong,null,"watsonx.ai Environment Setup (optional)")," steps, continue to ",a.createElement(t.strong,null,a.createElement(t.a,{href:"/watsonx/watsonxgov/level-4/202"},"lab 202"))),"\n",a.createElement(t.p,null,"To start the L4 Labs, continue to ",a.createElement(t.strong,null,a.createElement(t.a,{href:"/watsonx/watsonxgov/level-4/203"},"lab 203"))))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},i=n(94184),s=n.n(i),c=n(24690),m=n(81140),h=n(48623),u=n(88531),g=n(13383),p=n(27315);const d=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:o,timeToComplete:l,updated:r}}},children:i}=e,c=(0,a.useRef)(null),{0:d}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:l,updated:r},t[0].title||o||""),a.createElement(u.Z,{className:p.YS},a.createElement("article",{className:s()(p.Y2,!E&&p.ey),ref:c},a.createElement(h.Z,{components:{h1:()=>null}},i)),E&&a.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:d})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:o}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||o[0].title||void 0})};function v(e){return a.createElement(d,e,a.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-gov-level-4-201-md-2d0dbb391de1ee61a70e.js.map