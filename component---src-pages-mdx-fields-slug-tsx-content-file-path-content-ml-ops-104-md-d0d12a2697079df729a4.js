"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5310],{5846:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return y}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",img:"img",ol:"ol",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",span:"span",ul:"ul",h3:"h3",blockquote:"blockquote"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"deploying-models-and-functions"},a.createElement(t.h1,{id:"deploying-models-and-functions"},"Deploying models and functions"),"\n",a.createElement(t.p,null,"A model is only useful if it is used; this model needs to be made available in an easily consumable way. What's more, the model deployment process also has to be done in an orderly manner. For example, you cannot let anyone put models into production. For this purpose, the Cloud Pak for Data environment includes deployment spaces."),"\n",a.createElement(t.p,null,"Anyone can create their own personal deployment space and promote models to it. However, in an enterprise, designated administrators should be the only ones able to promote a models to production deployment space."),"\n",a.createElement(t.p,null,"In this section of the lab, you will see what is required to deploy models. You will also explore FactSheets, and see how and why you can deploy Python functions."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-creating-a-deployment-space"},a.createElement(t.h2,{id:"1-creating-a-deployment-space"},a.createElement(t.a,{href:"#1-creating-a-deployment-space"},"1. Creating a deployment space")),"\n",a.createElement(t.p,null,"Before you can deploy any model, you have to create a deployment space:"),"\n",a.createElement(t.img,{src:"/1684690533956.3657862636/85.png",alt:"Hamburger"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"From the the [IBM Cloud Pak for Data] home screen, click the navigation menu (four stacked horizontal bars)."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Deployments"),"."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Spaces")," tab. If you already have a administrator privileges in a deployment space, you may use that space and skip ahead to step 9. Otherwise, continue with these instructions."),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"New deployment space")," button in the upper right."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533960.366862637/86.png",alt:"new_space"}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,'Give this new deployment space a name like "lab deployment space".'),"\n",a.createElement(t.li,null,"Make sure the storage service you created for this lab is selected."),"\n",a.createElement(t.li,null,"Select the machine learning service you created for this lab form the drop down."),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"Create")," button in the bottom right."),"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"Close"),"."),"\n"),"\n",a.createElement(t.p,null,"You can now see your newly created deployment space under the ",a.createElement(t.strong,null,"Spaces")," tab. If you click on the deployment space name, you see multiple tabs: ",a.createElement(t.strong,null,"Overview"),", ",a.createElement(t.strong,null,"Assets"),", ",a.createElement(t.strong,null,"Deployments"),", ",a.createElement(t.strong,null,"Jobs"),", and ",a.createElement(t.strong,null,"Manage"),". You'll visit some of these tabs later in this lab."),"\n",a.createElement(t.p,null,"Note that in the ",a.createElement(t.strong,null,"Manage")," section of a deployment space, you can add collaborators just as you would for a project."),"\n",a.createElement(t.ol,{start:"10"},"\n",a.createElement(t.li,null,"Return to your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects/?context=cpdaas"},"list of projects")," and click on the name of your project."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-deploying-an-online-model"},a.createElement(t.h2,{id:"2-deploying-an-online-model"},a.createElement(t.a,{href:"#2-deploying-an-online-model"},"2. Deploying an online model")),"\n",a.createElement(t.p,null,"In the ",a.createElement(t.a,{href:"/mlops/102"},"Augmenting open-source tools")," section of the lab, you created a few models. It is time to deploy one of them. You will deploy the model created using a Spark environment."),"\n",a.createElement(t.img,{src:"/1684690533960.366862638/87.png",alt:"Deploy_promote2space"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Asset")," tab in your project."),"\n",a.createElement(t.li,null,"Click on the three vertical dots at the end of the line for the ",a.createElement(t.strong,null,"attrition challenger - spark")," model."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Promote to space"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533964.3662862639/88.png",alt:"promote_to_space"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Use the ",a.createElement(t.strong,null,"Target space")," dropdown to select the space you created in the previous step."),"\n",a.createElement(t.li,null,"Select the checkbox for ",a.createElement(t.strong,null,"Go to the model in the space")," after promoting it."),"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"Promote")," button on the bottom right."),"\n"),"\n",a.createElement(t.p,null,"With step 5, you avoid having to navigate to ",a.createElement(t.strong,null,"Deployments"),", then selecting the space, then clicking on your model. This way, you are taken there automatically, and are ready to deploy the model."),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"New deployment")," button on the right."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533968.3665862640/89.png",alt:"create_deployment"}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Online")," tile as the deployment type."),"\n",a.createElement(t.li,null,"Give the deployment a name, such as ",a.createElement(t.strong,null,"attrition challenger - spark deployment"),"."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Create")," button on the bottom right."),"\n"),"\n",a.createElement(t.p,null,"It takes a few seconds to create the service, then the model deployment is completed. In the next step, you will explore how you can either call your newly created deployment from a REST API endpoint or test your model using the built-in Watson Studio Cloud user interface (UI)."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-test-a-model-through-the-user-interface-ui"},a.createElement(t.h2,{id:"3-test-a-model-through-the-user-interface-ui"},a.createElement(t.a,{href:"#3-test-a-model-through-the-user-interface-ui"},"3. Test a model through the user interface (UI)")),"\n",a.createElement(n),"\n",a.createElement(t.p,null,"From where you left off in the previous step, click on the name of the deployment."),"\n",a.createElement(t.p,null,"The first thing you see is the ",a.createElement(t.strong,null,"API reference")," tab. This tab provides all the information you need to use your model. First, it gives you the API endpoint, which will look like:"),"\n",a.createElement(t.div,{"data-rehype-pretty-code-fragment":""},a.createElement(t.pre,{"data-language":"txt","data-theme":"default"},a.createElement(t.code,{"data-language":"txt","data-theme":"default"},a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8d8d8d"}},"us-south.ml.cloud.ibm.com/ml/v4/deployments/e4d5734c-2f6e-4715-889d-08f26c357332/predictions?version=2022-08-03")),"\n",a.createElement(t.span,{className:"line"},a.createElement(t.span,{style:{color:"#8d8d8d"}}))))),"\n",a.createElement(t.p,null,"Then it provides code snippets for multiple languages to help you get started using your model with various types of application code. To complete the code snippet, you need to provide an ",a.createElement(t.strong,null,"API key")," from the ",a.createElement(t.a,{href:"#augmenting-open-source-tools"},"Augmenting open-source tools")," section that will authorize access to the model. You also need to provide the data that will be scored. This data represents a record similar to the training data. It is provided in JSON format."),"\n",a.createElement(t.p,null,"You can also try your model through the Watson Studio Cloud user interface by selecting the Test tab. You have multiple methods of entering the records you want to score:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Type in records in the table provided."),"\n",a.createElement(t.li,null,"Import a file that follows the CSV template."),"\n",a.createElement(t.li,null,"Paste JSON content into the provided space."),"\n",a.createElement(t.li,null,"Import a JSON file."),"\n"),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"attrition challenger - spark")," model does not contain all the metadata required to support CSV files. In this lab, you will use a JSON file that contains records to score."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Right-click on ",a.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Outcomes-Projects/main/TrustedAI-L3-Tech-Lab/records_to_score.json"},"records_to_score.json"),' and use the "Download Linked File As..." or "Save As..." option, depending on the browser you use, then save the file on your local machine. If the saved file has a "txt" extension, change it to "json".'),"\n"),"\n",a.createElement(t.p,null,"If the right-click option is not available, just click on the link. The file content will display in a new tab. Save its content to a file on your local machine."),"\n",a.createElement(t.img,{src:"/1684690533968.3665862642/90.png",alt:"TestOnlineDeploy"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Test")," tab."),"\n",a.createElement(t.li,null,"Drop the ",a.createElement(t.strong,null,"records_to_score.json")," file in the screen input section, over the sample JSON text where you can see: ",a.createElement(t.strong,null,'"input_data":[]')),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"Predict")," button at the bottom right."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"JSON view"),"."),"\n",a.createElement(t.li,null,"Scroll down to the bottom of the fields section. You will see see four additional fields: ",a.createElement(t.strong,null,"features"),", ",a.createElement(t.strong,null,"rawPrediction"),", ",a.createElement(t.strong,null,"probability"),", ",a.createElement(t.strong,null,"prediction"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533968.3665862643/91.png",alt:"DeployTestResult"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Scroll down to the end of the first record to see the new fields."),"\n"),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"values")," section needs some explanations. You get all the input values passed to the model and four additional fields as follow (you can see these names in the fields section at the beginning of the prediction results):"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"features"),": An array of values from the input record"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"rawPrediction"),": Raw prediction values for each possibility. For example, +1.18 for no attrition and -0.73 for attrition"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"probability"),": probability of each event to occur, or a measure of confidence the model has in its prediction. The closer the value is to 1, the more confident the model is. Example: 0.914 and 0.086"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"prediction"),": Result of the prediction. For example: 1 if the model predicts the employee will leave the company, or 0 if the model predicts the employee will stay"),"\n"),"\n",a.createElement(t.p,null,"With these additional fields you don't only know what the model predicted, but its confidence level as well. An application could take advantage of this by raising an alert when the confidence level is below a certain threshold."),"\n",a.createElement(t.p,null,"In testing, if the confidence level is always 100%, it would most likely indicate a problem with the model; for example, it might suggest that the model is too specific to the training data and you are testing with data that was used for training."),"\n",a.createElement(t.p,null,"The output of a model varies depending on which tool or library is used. Still, having the result in JSON format allows for some flexibility on processing these results if multiple models created with different tools and libraries are used."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"4-using-a-batch-deployment"},a.createElement(t.h2,{id:"4-using-a-batch-deployment"},a.createElement(t.a,{href:"#4-using-a-batch-deployment"},"4. Using a batch deployment")),"\n",a.createElement(t.p,null,"There is another way to deploy models: batch deployment."),"\n",a.createElement(t.p,null,"A ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/deploy-batch-details.html?context=cpdaas&audience=wdp"},"batch deployment")," processes input data from a file, data connection, or connected data in a storage bucket, and writes the output to a selected destination. Batch processing is done through a deployed job that can be scheduled for a one-time execution or as a recurring job."),"\n",a.createElement(t.p,null,"Batch jobs are ideal for processing large data sets with no real-time requirements: the results can be analyzed as they become available. Scheduling jobs on an interval basis could also be useful in situations where records added during the course of a day can be processed at night and the results can be reviewed at the beginning of the next day."),"\n",a.createElement(t.p,null,"Two important facts to keep in mind when working with batch models:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"The input data asset must be in the same deployment space as the deployed model."),"\n",a.createElement(t.li,null,"The available data asset type varies per ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/deploy-batch-input-by-framework.html?context=cpdaas&audience=wdp"},"model framework type"),"."),"\n"),"\n",a.createElement(t.p,null,"In the exercise below, you will re-deploy the attrition challenger - spark model, this time in batch mode. Spark models only accept inline data. The output is generated as a log, as you'll see later."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click on the hamburger icon in the top-left to open the ",a.createElement(t.strong,null,"Navigation Menu"),", then select ",a.createElement(t.strong,null,"Deployments"),"."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Spaces")," tab, then click on the linked name of the deployment space you created at the beginning of this section."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Assets")," tab."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533972.3667862644/92.png",alt:"Deploy_batch"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Hover your mouse over the ",a.createElement(t.strong,null,"attrition challenger - spark")," model, then click the ",a.createElement(t.strong,null,"Deploy")," (rocket) icon that appears."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Batch")," deployment tile."),"\n",a.createElement(t.li,null,"Give it a name such as ",a.createElement(t.strong,null,"attrition challenger - spark")," batch and optionally enter a description."),"\n",a.createElement(t.li,null,'Scroll down and note the available hardware specifications. Keep the default of "1 CPU and 4 GB RAM".'),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"Create")," button in the bottom right."),"\n"),"\n",a.createElement(t.p,null,"This takes you to the deployment, where you can now create a job to try the deployed batch model."),"\n",a.createElement(t.img,{src:"/1684690533972.3667862645/93.png",alt:"new_job"}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"New job")," button on the right."),"\n",a.createElement(t.li,null,'Give the job a name such as "First batch job", then click on the blue ',a.createElement(t.strong,null,"Next")," button at the bottom right."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533972.3667862646/94.png",alt:"job_retention"}),"\n",a.createElement(t.ol,{start:"11"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the ",a.createElement(t.strong,null,'"i"')," next to ",a.createElement(t.strong,null,"Job run retention settings")," to get an idea of what it does. Click the ",a.createElement(t.strong,null,"Next")," button."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Leave the ",a.createElement(t.strong,null,"Schedule off")," toggle set to off. Click the ",a.createElement(t.strong,null,"Next")," button."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"You can configure the job to send notifications when it succeeds or fails, but for now, skip this and click the ",a.createElement(t.strong,null,"Next")," button."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Clear all data from the ",a.createElement(t.strong,null,"Input")," field."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1684690533972.3667862647/95.png",alt:"BatchInput"}),"\n",a.createElement(t.ol,{start:"15"},"\n",a.createElement(t.li,null,"Earlier you used the ",a.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Outcomes-Projects/main/TrustedAI-L3-Tech-Lab/records_to_score.json"},"records_to_score.json")," file. Copy its contents into the input field. Click the ",a.createElement(t.strong,null,"Next")," button."),"\n"),"\n",a.createElement(t.p,null,"In cases where frameworks are used to support other input data types, an output file would be identified as part of the job definition."),"\n",a.createElement(t.ol,{start:"16"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Create")," button."),"\n"),"\n",a.createElement(t.p,null,"At this point, the job is created and executed."),"\n",a.createElement(t.img,{src:"/1684690533976.367862648/96.png",alt:"job_link"}),"\n",a.createElement(t.ol,{start:"17"},"\n",a.createElement(t.li,null,"Click on the link for the job you created to open the job details screen."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533976.367862649/97.png",alt:"timestamp"}),"\n",a.createElement(t.ol,{start:"18"},"\n",a.createElement(t.li,null,"When the ",a.createElement(t.strong,null,"Status")," shows ",a.createElement(t.strong,null,"Completed"),", click on the timestamp to view the output."),"\n"),"\n",a.createElement(t.p,null,'In the output, you can see the same format as in the online processing with the four additional fields added to the prediction records: "features", "rawPrediction", "probability", and "prediction".'),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"5-view-the-updated-factsheets-for-the-deployed-model"},a.createElement(t.h2,{id:"5-view-the-updated-factsheets-for-the-deployed-model"},a.createElement(t.a,{href:"#5-view-the-updated-factsheets-for-the-deployed-model"},"5. View the updated FactSheets for the deployed model")),"\n",a.createElement(t.p,null,"You have now deployed one of the models created by the notebook in a previous step. Because you enabled FactSheet tracking for this model, you can now see the model metadata, which has been automatically updated to reflect the deployment of the model."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Navigate to the catalog model entry you created in the ",a.createElement(t.a,{href:"https://cp4d-outcomes.techzone.ibm.com/data-fabric-lab/trusted-ai#Augmenting_open-source_tools"},"Augmenting open-source tools")," section of the lab. You can copy and paste the URL for the catalog asset into a new browser tab if you saved it earlier."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533976.367862650/98.png",alt:"entry_catalog_search"}),"\n",a.createElement(t.p,null,"Alternately, type the name of your entry in the search field at the top of the screen and press ",a.createElement(t.strong,null,"Enter"),". This will search your catalogs for assets with this name."),"\n",a.createElement(t.img,{src:"/1684690533976.367862651/99.png",alt:"filter_type"}),"\n",a.createElement(t.p,null,"If necessary, set the ",a.createElement(t.strong,null,"Type")," filter dropdown on the left to ",a.createElement(t.strong,null,"Model entry"),". Select the model entry you created earlier from the list of search results."),"\n",a.createElement(t.img,{src:"/1684690533792.3567862508/100.png",alt:"entry_asset"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Asset")," tab for the model entry. Note that there is now a new entry in the ",a.createElement(t.strong,null,"Deploy")," bucket. The spark model, which you deployed earlier, now has a new entry. Because it was promoted to a deployment space, it is listed underneath that space in the bucket."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533836.3591862523/101.png",alt:"deployed_spark_entry"}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Click on the name of the deployed Spark model in the table. Note that the ",a.createElement(t.strong,null,"Deployment information")," section contains information on when the model was deployed, its associated deployment space, and how many copies are running. Also note that the ",a.createElement(t.strong,null,"Evaluation information")," section is blank, as the model is awaiting an evaluation."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"6-deploy-a-python-function"},a.createElement(t.h2,{id:"6-deploy-a-python-function"},a.createElement(t.a,{href:"#6-deploy-a-python-function"},"6. Deploy a Python function")),"\n",a.createElement(t.p,null,"You saw earlier that it is easy to deploy models for use through a REST API."),"\n",a.createElement(t.p,null,"Deploying functions gives you the ability to hide details (such as credentials), pre-process data before you pass it to models, handle errors, and include calls to multiple models, all within the deployed function instead of in your application."),"\n",a.createElement(t.p,null,"To demonstrate this capability, this lab deploys a function that uses the already deployed ",a.createElement(t.strong,null,"attrition challenger - spark deployment")," model. Most of this part of the lab is through a notebook, but you need to prepare some information beforehand."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"gather-the-necessary-credentials"},a.createElement(t.h3,{id:"gather-the-necessary-credentials"},a.createElement(t.a,{href:"#gather-the-necessary-credentials"},"Gather the necessary credentials")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Make sure you have the API key that was created in the ",a.createElement(t.strong,null,"Create an API key and a project token")," portion of the ",a.createElement(t.a,{href:"/mlops/102"},"Augmenting open-source tools")," section. If you no longer have your API key, follow the instructions provided in that section to create a new one. Remember, you cannot go back and retrieve this key."),"\n",a.createElement(t.li,null,"You will need to retrieve the GUID of your deployment space. Go to your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/ml-runtime?context=cpdaas"},"list of spaces")," and click on the link for your space."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533836.3591862524/102.png",alt:"Space_guid"}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Manage")," tab."),"\n",a.createElement(t.li,null,"Copy the ",a.createElement(t.strong,null,"Space GUID")," by using the ",a.createElement(t.strong,null,"copy")," icon to the right of the GUID, and save it for later."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533840.3594862525/103.png",alt:"SparkDeployDetails"}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"You will also need the deployment ID for the deployed Spark model. Select the ",a.createElement(t.strong,null,"Deployments")," tab."),"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"attrition challenger - spark deployment")," link from the list."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533840.3594862526/104.png",alt:"deployment_id"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Deployment details")," tab."),"\n",a.createElement(t.li,null,"Copy the ",a.createElement(t.strong,null,"Deployment ID")," by using the ",a.createElement(t.strong,null,"copy")," icon to the right of the ID, save it for later."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"run-the-notebook"},a.createElement(t.h3,{id:"run-the-notebook"},a.createElement(t.a,{href:"#run-the-notebook"},"Run the notebook")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Return to your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects?context=cpdaas"},"list of projects")," and click on the link for the project you are using."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533840.3594862527/105.png",alt:"edit_function_notebook"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Assets")," tab."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Source Code")," asset type from the list on the left."),"\n",a.createElement(t.li,null,"Click the three vertical dots to the right of the ",a.createElement(t.strong,null,"04-Deploy function lab")," notebook, and select ",a.createElement(t.strong,null,"Edit"),". Follow the instructions and run through the notebook."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Editing this notebook is done the same way you edited the ",a.createElement(t.strong,null,"01-Data access lab")," notebook in the ",a.createElement(t.strong,null,"Accessing data")," section."),"\n"),"\n",a.createElement(t.p,null,"The rest of this section assumes the successful completion of the notebook run."),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Go to your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/ml-runtime?context=cpdaas"},"list of spaces")," and click on the link for your space."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Assets")," tab. Note that the function ",a.createElement(t.strong,null,"attrition function")," is now listed in the ",a.createElement(t.strong,null,"Functions")," section."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533844.3596862528/106.png",alt:"deployed_function"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Deployments")," tab."),"\n",a.createElement(t.li,null,"Click on link for the deployed function: ",a.createElement(t.strong,null,"attrition function"),"."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Test")," tab."),"\n"),"\n",a.createElement(t.img,{src:"/1684690533844.3596862529/107.png",alt:"predict_function"}),"\n",a.createElement(t.ol,{start:"10"},"\n",a.createElement(t.li,null,"Drag and drop the records_to_score.json file to the text entry field."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Predict")," button in the lower right."),"\n",a.createElement(t.li,null,"Optionally: Change the view to a JSON view."),"\n"),"\n",a.createElement(t.p,null,"As you have seen, you can call the deployed Python function using both the notebook and the Watson Studio Cloud user interface. Deployed Python functions can be useful for preprocessing data sent to models, manipulating the data the models return, or even combining inputs and outputs for multiple models. In this case, the Python function called the ",a.createElement(t.strong,null,"attrition challenger - spark deployment")," model and processed the results to return only the prediction and its probability."))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};var c=n(4184),i=n.n(c),s=n(4690),m=n(1140),u=n(2565),d=n(8531),h=n(3383),p=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:c}=e,s=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),g=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:o,updated:r},t[0].title||l||""),a.createElement(d.Z,{className:p.YS},a.createElement("article",{className:i()(p.Y2,!g&&p.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},c)),g&&a.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function y(e){return a.createElement(E,e,a.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),o=n(987);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...r,...n}},t)}))},4690:function(e,t,n){var l=n(7294),a=n(1072),o=n(2401);t.Z=e=>{const{title:t,description:n,pathname:r,children:c}=e,{description:i,title:s,origin:m}=(0,o.Z)(),{i18n:{language:u}}=(0,a.$G)(),d={title:t||s,description:n||i,url:""+m+(r||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,d.title),l.createElement("link",{rel:"canonical",href:d.url}),l.createElement("meta",{name:"description",content:d.description}),l.createElement("meta",{property:"og:title",content:d.title}),l.createElement("meta",{property:"og:url",content:d.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:d.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:d.title}),l.createElement("meta",{name:"twitter:url",content:d.url}),l.createElement("meta",{name:"twitter:description",content:d.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),o=n(4184),r=n.n(o),c=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:o}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),o&&o.length>0&&i(o,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>i(t[0].items||[])),[t]),o=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return o},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return o}});var l=n(7294);const a=l.createContext({});function o(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:o(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-ml-ops-104-md-d0d12a2697079df729a4.js.map