"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5913],{6596:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var o=n(1151),a=n(7294);function l(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",img:"img",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote",ul:"ul"},(0,o.ah)(),e.components),{QuizAlert:n,Danger:l}=t;return l||i("Danger",!0),n||i("QuizAlert",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-augmenting-open-source-tools"},a.createElement(t.h1,{id:"102-augmenting-open-source-tools"},"102: Augmenting open-source tools"),"\n",a.createElement(t.p,null,'When selling Watson Studio Data & AI solutions to clients, one of the most frequent objections you will hear is, "We don\'t need IBM, we rely on open-source solutions." It is critical to understand and be able to communicate to the client that Watson Studio provides access to the full range of open-source tools, but also augments those tools with greater automation, standardization, and opportunities for collaboration.'),"\n",a.createElement(t.p,null,"In this section, you will develop two models using Jupyter notebooks and open-source libraries. Along the way, you will see how the added functionality of Watson Studio can simplify, automate, and improve the daily workflow for model developers."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-create-a-catalog-entry-for-factsheets"},a.createElement(t.h2,{id:"1-create-a-catalog-entry-for-factsheets"},a.createElement(t.a,{href:"#1-create-a-catalog-entry-for-factsheets"},"1. Create a catalog entry for FactSheets")),"\n",a.createElement(t.p,null,"Released in 2022, IBM FactSheets provide an automated, standardized way to track and store information about model development, testing, validation, and deployment. That data is stored and searchable in Watson Knowledge Catalog."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Navigate to the ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/"},"Cloud Pak for Data home screen"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103730.5176517803/35-1.png",alt:"view_catalogs"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"New catalog")," button in the top-right corner of the screen."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103730.5176517804/35-2.png",alt:"new_catalog"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Once you see the ",a.createElement(t.strong,null,"New Catalog")," screen appear given your catalog a name (My Catalog for instance) and optionally a description. The ",a.createElement(t.strong,null,"IBM Cloud Storage")," dropdown should already pre-populate the instance you created early. If it is not use the dropdown to select the correct instance."),"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"Create")," button in the bottom-right corner to create your catalog."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103730.5176517805/35-3.png",alt:"create_catalog"}),"\n",a.createElement(t.p,null,"Next, we will create a ",a.createElement(t.strong,null,"model use case")," in our newly created catalog."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Navigate to the ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/"},"Cloud Pak for Data home screen"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103734.5178517806/35.png",alt:"model_inventory"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Click on the hamburger navigation icon in the upper-left corner, and select ",a.createElement(t.strong,null,"Model inventory")," from the ",a.createElement(t.strong,null,"Catalogs")," section. Watson Studio may offer you a guided tour of model governance; click ",a.createElement(t.strong,null,"Maybe later")," to close the popup, and the click ",a.createElement(t.strong,null,"Done")," to close the ",a.createElement(t.strong,null,"Relaunch tour panel")," window if necessary."),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"New model use case")," button in the top-right of the screen to open the ",a.createElement(t.strong,null,"New model use case")," dialog form."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103734.5178517807/36.png",alt:"new_model_entry_form"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Give your model entry a name such as ",a.createElement(t.strong,null,"predictive attrition entry"),", and an optional description. If you have multiple catalogs available in your account, the ",a.createElement(t.strong,null,"Catalog")," dropdown will appear. From the ",a.createElement(t.strong,null,"Catalog")," dropdown, select the catalog you are using for this lab. If there is only one catalog available on your account, the dropdown will not appear and you can proceed. Click the blue ",a.createElement(t.strong,null,"Save")," button to create the model entry."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-create-an-api-key-and-a-project-token"},a.createElement(t.h2,{id:"2-create-an-api-key-and-a-project-token"},a.createElement(t.a,{href:"#2-create-an-api-key-and-a-project-token"},"2. Create an API key and a project token")),"\n",a.createElement(t.p,null,"API keys allow you to authenticate with different IBM services such as Watson Machine Learning. Project tokens allow notebook code to read assets from and write files to your Watson Studio projects. You will need to create both to proceed. If you already have an IBM Cloud API key available for use, you may skip ahead to step four of this section to create a project token."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Navigate to the ",a.createElement(t.a,{href:"https://cloud.ibm.com/iam/apikeys"},"IBM Cloud API keys")," page."),"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"Create an IBM Cloud API key")," button. Give your key a descriptive name, such as ",a.createElement(t.strong,null,"MLOps lab"),", and optional description. Click the blue ",a.createElement(t.strong,null,"Create")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103738.5178517808/37.png",alt:"copy_api_key"}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Once the key has been created, click the ",a.createElement(t.strong,null,"Copy")," button to copy the key to your clipboard. ",a.createElement(t.strong,null,"Paste it into a text editor for later use, since you WILL NOT be able to retrieve it again")," and will have to create a new one if you lose it."),"\n",a.createElement(t.li,null,"Navigate to ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"your list of data science projects"),"."),"\n",a.createElement(t.li,null,"Click on the project you created at the beginning of the lab."),"\n",a.createElement(t.li,null,"From the project home screen, click the ",a.createElement(t.strong,null,"Manage")," tab."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103738.5178517809/38.png",alt:"access_control"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Access control")," from the navigation on the left side of the screen to open the ",a.createElement(t.strong,null,"Access control")," window."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Access tokens")," tab."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103738.5178517810/39.png",alt:"new_access_token"}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"New access token")," button. In the form that appears, give your token a descriptive name such as ",a.createElement(t.strong,null,"Notebook access token"),". Select ",a.createElement(t.strong,null,"Editor")," from the ",a.createElement(t.strong,null,"Access role")," dropdown, and then click the blue ",a.createElement(t.strong,null,"Create")," button. Your token will be created, and an entry will display in the table."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-explore-runtime-environments"},a.createElement(t.h2,{id:"3-explore-runtime-environments"},a.createElement(t.a,{href:"#3-explore-runtime-environments"},"3. Explore runtime environments")),"\n",a.createElement(t.p,null,"As the administrator of the project, you can control and fully customize the different runtime environments available to your data scientists and developers. Rather than each team member working on their own machine with their own (often conflicting or incompatible) set of libraries and tools, they can collaborate in Watson Studio with a common environment, adding the tools they need."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Environments")," from the navigation on the left side of the screen. Any currently running environments will show in the list on the ",a.createElement(t.strong,null,"Tool runtimes")," tab."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103742.5178517812/40.png",alt:"template_list"}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Templates")," tab to see the list of available environments. Note the wide variety of runtime environments available, which include everything from standard Python and R to Spark, Scala, and even GPU acceleration. The ability to choose any of these runtimes, and even dynamically change them as the needs of the notebook environment change, is one of the major advantages of doing data science work with IBM Cloud Pak for Data over locally-installed Jupyter environments."),"\n",a.createElement(t.li,null,"Click the blue ",a.createElement(t.strong,null,"New template")," button on the right side of the screen to open the ",a.createElement(t.strong,null,"New environment")," window."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103742.5178517813/41.png",alt:"template_configurations"}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Note that you can define configurations here, choosing whether to include Spark, DataStage, or GPU acceleration. You can use the ",a.createElement(t.strong,null,"Hardware configuration")," dropdown to customize the amount of CPU and RAM available to the environment. Finally, you can choose the software version, selecting from different versions of Python or R."),"\n",a.createElement(t.li,null,"Now that you have seen the available options for runtime environments, click ",a.createElement(t.strong,null,"Cancel")," to close the window."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"4-create-a-notebook"},a.createElement(t.h2,{id:"4-create-a-notebook"},a.createElement(t.a,{href:"#4-create-a-notebook"},"4. Create a notebook")),"\n",a.createElement(t.p,null,"Next, you will create a Python notebook that will be used for model development. As you saw in the previous section, Watson Studio's Jupyter notebook environments provide a large variety of runtimes and enhancements, such as configured Spark installs and GPU acceleration. Recent licensing changes to JupyterLab have created potential issues for client developers who rely on it for locally-installed Jupyter notebooks. Using Jupyter notebooks in Watson Studio allows for the same flexibility, while removing the headaches of dealing with the licenses, and provides greater opportunity for collaboration."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Assets")," tab of your project, then click the blue ",a.createElement(t.strong,null,"New asset")," button."),"\n",a.createElement(t.li,null,"Use the ",a.createElement(t.strong,null,"Tool type")," filter on the left of the screen to select ",a.createElement(t.strong,null,"Code editors"),", and click the tile for ",a.createElement(t.strong,null,"Jupyter notebook editor"),". The ",a.createElement(t.strong,null,"New notebook")," screen opens."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"From URL")," tab. Give your notebook a name like ",a.createElement(t.strong,null,"attrition model development"),", and an optional description. Click the dropdown beneath ",a.createElement(t.strong,null,"Select runtime"),". Note that the runtimes listed here are the environments shown in the previous step. Had you created a new environment template, it would be available in this dropdown list."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Default Spark & Python")," environment. Note that the available versions change over time, as new versions of the runtime are released and subsequently supported by Watson Studio. At the time of writing, the environment is ",a.createElement(t.strong,null,"Default Spark 3.3 & Python 3.9"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103742.5178517814/42.png",alt:"notebook_configuration"}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Copy and paste the following URL into the ",a.createElement(t.strong,null,"Notebook URL")," field:"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-txt"},"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/MLOps/files/02-Open%20source%20lab.ipynb\n")),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Create")," to create your notebook and start the runtime environment. It may take up to 30 seconds before you are able to work with the notebook."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"5-edit-and-run-the-notebook"},a.createElement(t.h2,{id:"5-edit-and-run-the-notebook"},a.createElement(t.a,{href:"#5-edit-and-run-the-notebook"},"5. Edit and run the notebook")),"\n",a.createElement(n),"\n",a.createElement(t.p,null,"Jupyter notebooks are an industry-standard way to work with and visualize data, build models, and more. In the ",a.createElement(t.a,{href:"/mlops/101#accessing-data"},"Accessing data")," section of this lab, you saw how Watson Studio allows you to add data to projects from local files, connections, or databases. You also saw how this data could be inserted as code directly into the notebook with just a few clicks. The ability to easily and quickly work with data from across the enterprise while following data privacy regulations and standards is another major advantage of using Watson Studio over traditional open source."),"\n",a.createElement(t.img,{src:"/1686806103746.5178517815/43.png",alt:"insert_project_token"}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"The notebook has been heavily commented, and should be easy to follow as you execute individual cells. Be sure to start by inserting the project access token you created earlier in this lab by clicking the ",a.createElement(t.strong,null,"three vertical dots")," icon at the top of the screen and selecting ",a.createElement(t.strong,null,"Insert project token"),". Note that the token code inserted at the top of the notebook will contain your project ID, which you will need in the cell immediately below. You will also need the IBM Cloud API key you created earlier in the lab. Execute the cell before proceeding with the rest of the notebook."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103746.5178517816/44.png",alt:"turn_off_spark"}),"\n",a.createElement(t.p,null,"When running Spark commands in your notebooks, the Spark monitoring functionality can add a great deal of visual clutter as it updates the status of each command. You can turn off Spark monitoring by clicking the icon in the toolbar."),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Follow the steps in the rest of the notebook, inserting data to code where specified, and running the cells."),"\n"),"\n",a.createElement(l,{text:"The rest of this section assumes the successful completion of the notebook run."}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Note: After completing the notebooks and publishing the models to the project, you can use the same steps at the end of the ",a.createElement(t.strong,null,"Accessing Data")," lab to turn off any runtimes that are still active."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"6-examine-the-factsheets-for-the-models"},a.createElement(t.h2,{id:"6-examine-the-factsheets-for-the-models"},a.createElement(t.a,{href:"#6-examine-the-factsheets-for-the-models"},"6. Examine the FactSheets for the models")),"\n",a.createElement(t.p,null,"At the beginning of this lab, you created a Watson Knowledge Catalog entry for IBM FactSheets to collect data about your models. The notebooks you ran in the previous step used the FactSheets API to activate monitoring for the models, writing out metadata relating to training data, accuracy scores, and more. Now it's time to go find that data."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Return to your project home screen, either by clicking the name of the project from the breadcrumb trail at the top left of the screen, or by navigating to your ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"list of projects")," and clicking it there."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Assets")," tab of the project. Click on ",a.createElement(t.strong,null,"Models")," from the list of ",a.createElement(t.strong,null,"Assets types")," on the left."),"\n",a.createElement(t.li,null,"The scikit-learn and spark models you created when you ran the notebook should appear in the list of models. Click on the name of one of the models to open the model details screen."),"\n",a.createElement(t.li,null,"Click on the blue ",a.createElement(t.strong,null,"Track this model")," button. You will now associate the model with the model entry you created in the catalog."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Select an existing model entry"),". From the list of model entries, select the one you created earlier in the lab. Click ",a.createElement(t.strong,null,"Track"),". You will be returned to the model details page, and should see that model tracking is now active."),"\n",a.createElement(t.li,null,"Return to your project assets list, and repeat steps 3-5 with the other model, so both are now being tracked."),"\n"),"\n",a.createElement(t.img,{src:"/1686806103746.5178517817/45.png",alt:"open_in_model_inventory"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Once you have enabled tracking on both models, from the model information screen, click on ",a.createElement(t.strong,null,"Open in model inventory"),". The catalog entry opens. Click on the ",a.createElement(t.strong,null,"Asset")," tab."),"\n"),"\n",a.createElement(t.p,null,"The model inventory is divided into four buckets: ",a.createElement(t.strong,null,"Develop"),", ",a.createElement(t.strong,null,"Deploy"),", ",a.createElement(t.strong,null,"Validate"),", and ",a.createElement(t.strong,null,"Operate"),". As your models move through the lifecycle, they will be automatically moved to the corresponding bucket. Currently, having just been created and not deployed, they are in the ",a.createElement(t.strong,null,"Development")," stage."),"\n",a.createElement(t.img,{src:"/1686806103746.5178517818/46.png",alt:"spark_model"}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Click on the name of the spark model in the ",a.createElement(t.strong,null,"Development")," bucket. Note that the FactSheet for the model contains a great deal of automatically-collected metadata.","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"The ",a.createElement(t.strong,null,"Model information")," section contains the creation and last modified dates, as well as the model's type and software specification."),"\n",a.createElement(t.li,null,"The ",a.createElement(t.strong,null,"Training information")," section contains the name of the project used to create the model and information on the training data."),"\n",a.createElement(t.li,null,"The ",a.createElement(t.strong,null,"Training parameters")," section contains a great deal of information specific to the type of model you created (Gradient Boost Classifier), as well as the Vector Assembler included in the model pipeline."),"\n",a.createElement(t.li,null,"Finally, the ",a.createElement(t.strong,null,"Training tags")," section contains additional metadata on the estimator used, and the runtime environment."),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"You will be referring back to this FactSheet frequently in the upcoming demo steps, so you may want to copy the URL and paste it into a text editor."),"\n",a.createElement(t.p,null,"This kind of information is invaluable for model validators, as they seek to understand when and how a model has been built. Watson Studio provides a way to standardize and automate the collection of the metadata, meaning that data scientists can spend their time working on meaningful, interesting problems instead of collecting, maintaining, and publishing this data.")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(4184),s=n.n(c),m=n(4690),u=n(1140),d=n(2565),h=n(8531),g=n(3383),p=n(7315);const f=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:o,timeToComplete:l,updated:r}}},children:i}=e,c=(0,a.useRef)(null),{0:m}=(0,a.useState)(""),f=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:l,updated:r},t[0].title||o||""),a.createElement(h.Z,{className:p.YS},a.createElement("article",{className:s()(p.Y2,!f&&p.ey),ref:c},a.createElement(d.Z,{components:{h1:()=>null}},i)),f&&a.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:m})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:o}}}}=e;return a.createElement(m.Z,{pathname:t,title:n||o[0].title||void 0})};function b(e){return a.createElement(f,e,a.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),a=n(1151),l=n(7563);const r={table:l.y6,a:l.IW,blockquote:l.R4,SubHeader:l.bU,img:l.fb,code:l.dn,QuizAlert:l.SA,Danger:l.b0,Warning:l.v3,CopyText:l.O5};var i=(0,o.memo)((function(e){let{children:t,components:n={}}=e;return o.createElement(a.Zo,{components:{...r,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),a=n(7500),l=n(4184),r=n.n(l),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:o,url:a,items:l}=e;t.splice(t.length,0,{depth:n,title:o,url:a}),l&&l.length>0&&c(l,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,o.useMemo)((()=>c(t[0].items||[])),[t]),l=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:o.createElement("nav",{className:"TableOfContents-module--toc--54d35"},o.createElement("div",{className:"TableOfContents-module--tocStack--90609"},o.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},o.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return o.createElement("a",{className:r()("TableOfContents-module--link--b292b",l===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return o},YS:function(){return l},ey:function(){return a}});var o="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",l="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return l}});var o=n(7294);const a=o.createContext({});function l(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:l(e),o.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-ml-ops-102-md-6c15aba996494d9f3c85.js.map