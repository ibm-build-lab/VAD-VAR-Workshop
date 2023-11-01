"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3210],{5317:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return w}});var a=n(1151),o=n(7294);function l(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h3:"h3",a:"a",em:"em",h2:"h2",blockquote:"blockquote",ol:"ol",li:"li",code:"code",img:"img",strong:"strong"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"integrating-watson-discovery-with-watsonxai-foundation-models"},o.createElement(t.h1,{id:"integrating-watson-discovery-with-watsonxai-foundation-models"},"Integrating Watson Discovery with watsonx.ai foundation models"),"\n",o.createElement(t.p,null,"This lab will show you how we can use Watson Discovery and watsonx.ai together to solve a Retrieval Augmented Generation (RAG) use case. By combining watsonx.ai LLM's (Large Language Model) foundation models with an existing knowledge base of data we can garner more insightful responses from watsonx that are based on known data and facts."),"\n",o.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"what-is-rag"},o.createElement(t.h3,{id:"what-is-rag"},o.createElement(t.a,{href:"#what-is-rag"},"What is RAG?")),"\n",o.createElement(t.p,null,"For context, RAG or Retrieval Augmented Generation is a now common AI framework used for improving the quality of LLM-generated responses by grounding the model using external sources of knowledge to supplement an LLM’s internal representation of information."),"\n",o.createElement(t.p,null,"The use of external sources provides a few benefits such improving the quality of responses from a LLM as well as overall trustworthiness of those responses."),"\n",o.createElement(t.p,null,"This is in part done by providing an LLM with the most current, reliable facts ",o.createElement(t.em,null,"(i.e. knowledge base)"),", and guaranteeing that users have access to the model’s sources, ensuring that its claims can be checked for accuracy and ultimately trusted."),"\n",o.createElement(t.p,null,"Similarly, by grounding an LLM on a set of external, verifiable facts, the model has fewer opportunities to pull information baked into its parameters or biases from its training data. This reduces the chances that an LLM will leak sensitive data, or ",o.createElement(t.em,null,"‘hallucinate’")," incorrect or misleading information."),"\n")),o.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"watson-discovery"},o.createElement(t.h1,{id:"watson-discovery"},"Watson Discovery"),"\n",o.createElement(t.p,null,"Watson Discovery is an AI-powered platform developed by IBM, accessible through the cloud and designed to assist businesses in deriving meaningful insights from unstructured data. Through  utilizing natural language processing (NLP) and machine learning techniques, Watson Discovery helps organizations uncover valuable information from a diverse range of sources, such as text documents and web content. It's an integral part of IBM's suite of AI tools known as Watson."),"\n",o.createElement(t.p,null,"In this lab we will make use of a knowledge base consisting of some financial documents, which are ingested into Watson Discovery. We will then make use of watsonx.ai ask some insightful questions about the financial documents based on the knowledge base. A link to the financial data used can be found ",o.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/tree/87155f66db7248994ff17fc0dfe80a3b99b64fc9/content/Watsonx/WatsonxAI/docs"},"here"),"."),"\n",o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"ingesting-data-into-watson-discovery"},o.createElement(t.h2,{id:"ingesting-data-into-watson-discovery"},o.createElement(t.a,{href:"#ingesting-data-into-watson-discovery"},"Ingesting Data into Watson Discovery")),"\n",o.createElement(t.p,null,"For this section of the lab we will showcase how you can ingest data into Watson Discovery to create a knowledge that can later be used within watsonx.ai."),"\n",o.createElement(t.blockquote,null,"\n",o.createElement(t.p,null,"If you are completeing this lab in a workshop setting, a Watson Discovery instance with a collection of documents may already be set-up for you; ask your lab instructor.\nIf not, you can create your own Watson Discovery instance from IBM Cloud with your own collection of documents. Steps for how to do so can be found below:"),"\n"),"\n",o.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"creating-a-project-in-watson-discovery"},o.createElement(t.h3,{id:"creating-a-project-in-watson-discovery"},o.createElement(t.a,{href:"#creating-a-project-in-watson-discovery"},"Creating a project in Watson Discovery")),"\n",o.createElement(t.p,null,"Before we can ingest data into Watson Discovery, we will start by creating a new project."),"\n",o.createElement(t.ol,null,"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"From the main Watson Discovery home screen select the ",o.createElement(t.code,null,"New Project")," button"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/1-Discovery-Create-Project.png",alt:"create new project"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"On the next screen, give your new project a name and select the document retrieval selection"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/2-Discovery-Name-Project.png",alt:"name new project"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"On the following screen, select the ",o.createElement(t.code,null,"Upload Data")," option so you can upload your own data into your Watson Discovery project"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/3-Discovery-Upload-Data.png",alt:"upload data"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"In the next screen, give your new collection a new name, such as ",o.createElement(t.em,null,"Financial Documents"),", and select the OCR option under more processing settings."),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/4-Discovery-Collection.png",alt:"discovery collection name"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"On this final screen, drag and drop your data for upload using the dialog box, ",o.createElement(t.em,null,"note the file limitations")),"\n",o.createElement(t.blockquote,null,"\n",o.createElement(t.p,null,"For consistency of this lab you can find a link to the documents used for in this labs collections ",o.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/tree/87155f66db7248994ff17fc0dfe80a3b99b64fc9/content/Watsonx/WatsonxAI/docs"},"here"),"."),"\n"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/5-Discovery-Upload-Page.png",alt:"discovery upload data"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"If uploaded successfully you should see the total number of uploaded documents under the card with the collection you named earlier"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/6-Discovery-Main-Collections.png",alt:"discovery main collections page"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"If you see missing documents or would like to investigate the uploaded data for processing you can click on your named collection and view additional details. Any issues related to processing of your data will be noted by Watson Discovery on this activity tab page."),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/7-Discovery-Collection-Details.png",alt:"discovery collections detail page"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"Under the ",o.createElement(t.code,null,"Manage data")," tab you review the individual documents that make up your collection."),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/8-Discovery-Manage-Collection.png",alt:"discovery collections manage data page"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"Finally, if you want to integrate your Watson Discovery collection into other services, you can view the ",o.createElement(t.code,null,"project_id")," associated with your Watson Discovery collection under the ",o.createElement(t.code,null,"Integrate and deploy")," left-hand side-bar item"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/9-Discovery-Find-Project-ID.png",alt:"discovery project id"}),"\n"),"\n"),"\n"))),o.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"watsonxai"},o.createElement(t.h1,{id:"watsonxai"},"watsonx.ai"),"\n",o.createElement(t.p,null,"In conjunction with Watson Discovey as our knowledge base, we will be making use of watsonx.ai foundation models to answer questions about the documents in our Watson Discovery Collection."),"\n",o.createElement(t.p,null,"After navigating to the watsonx home page ",o.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/wx/home"},"here"),", we will want to open the Notebook editor that we can use to run the notebook associated with this lab. If you don't know how to acccess watsonx.ai or are unsure how to open to the notebook editor, follow the link from the note below which will walk you through the process for accessing watsonx.ai as well as joining the notebook editor."),"\n",o.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"how-to-import-a-notebook-into-watsonx"},o.createElement(t.h3,{id:"how-to-import-a-notebook-into-watsonx"},o.createElement(t.a,{href:"#how-to-import-a-notebook-into-watsonx"},"How to import a notebook into watsonx")),"\n",o.createElement(t.p,null,"To import a notebook into watsonx follow the steps below:"),"\n",o.createElement(t.ol,null,"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"Login and navigate to the watsonx dataplatform main dashboard ",o.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/wx/home"},"here")),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"Click the ",o.createElement(t.strong,null,"Work with data and models in Python or R notebooks")," card/tile"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/10-Dashboard-Notebook-Tile.png",alt:"notebook_card"}),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"A new page with a modal menu titled ",o.createElement(t.strong,null,"Work with data and models in Python or R notebooks")," will appear. In this menu click the ",o.createElement(t.strong,null,"URL")," option in the left-hand navigation"),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"In the ",o.createElement(t.strong,null,"Name")," field type ",o.createElement(t.code,null,"{uniqueId}-rag-discovery"),", where ",o.createElement(t.code,null,"uniqueId")," represents your initials and the location of your workshop such as ",o.createElement(t.code,null,"ao-dallas-rag-discovery"),"; you can also add an optional description."),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"For the ",o.createElement(t.strong,null,"Select runtime")," option use ",o.createElement(t.code,null,"Runtime 22.2 on Python 3.10 XXS"),", larger runtimes use more tokens or cloud credits."),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"In the ",o.createElement(t.strong,null,"Notebook URL")," section copy ",o.createElement(t.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/rag-with-discovery.ipynb")," into the field"),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"Once all the necessary fields are filled, click the ",o.createElement(t.strong,null,"Create")," button. You will then be launched into the notebook."),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/106/11-Create-Notebook.png",alt:"import_notebook"}),"\n"),"\n"),"\n",o.createElement(t.p,null,"Once your notebook is launched and created, you can follow along and run through each cell of the notebook to complete the lab. The notebook contains comments explaining what code in each cell does as well as any necessary input that you might need to provide in order to successfully run a cell."),"\n",o.createElement(t.p,null,"Good luck!"))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?o.createElement(t,e,o.createElement(l,e)):l(e)},s=n(4184),r=n.n(s),c=n(4690),m=n(1140),u=n(8623),d=n(8531),h=n(3383),g=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:l,updated:i}}},children:s}=e,c=(0,o.useRef)(null),{0:p}=(0,o.useState)(""),b=(null===n||n)&&t;return o.createElement(o.Fragment,null,o.createElement(m.Z,{timeToComplete:l,updated:i},t[0].title||a||""),o.createElement(d.Z,{className:g.YS},o.createElement("article",{className:r()(g.Y2,!b&&g.ey),ref:c},o.createElement(u.Z,{components:{h1:()=>null}},s)),b&&o.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return o.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function w(e){return o.createElement(p,e,o.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-106-md-d3d6b72b407902466fb1.js.map