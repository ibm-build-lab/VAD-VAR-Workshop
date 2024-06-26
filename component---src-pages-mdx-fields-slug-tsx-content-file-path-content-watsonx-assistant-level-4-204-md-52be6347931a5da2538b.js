"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9387],{52154:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return y}});var l=n(11151),a=n(67294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",a:"a",em:"em",ol:"ol",strong:"strong",code:"code",img:"img"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"204-deploy-neuralseek-with-watsonx-assistant-and-watson-discovery"},a.createElement(t.h1,{id:"204-deploy-neuralseek-with-watsonx-assistant-and-watson-discovery"},"204: Deploy NeuralSeek with watsonx Assistant and Watson Discovery"),"\n",a.createElement(t.p,null,"In this tutorial, you will use the Watson Discovery, watsonx Assistant, and NeuralSeek services that are available from the IBM Cloud catalog to create a virtual assistant that can answer questions about Watson Discovery. The assistant will generate answers by using the existing Watson Discovery product documentation as its knowledge base."),"\n",a.createElement(t.p,null,"By the time you finish the tutorial, you will understand how to:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Create a Document Retrieval project in Discovery."),"\n",a.createElement(t.li,null,"Upload PDF documents to your project, and apply a user-trained Smart Document Understanding model to your PDFs."),"\n",a.createElement(t.li,null,"Connect your Discovery project to a NeuralSeek service instance. NeuralSeek is an AI-powered answer generation engine."),"\n",a.createElement(t.li,null,"Create an assistant in watsonx Assistant and apply a NeuralSeek integration to it."),"\n",a.createElement(t.li,null,"Add an action to your watsonx Assistant that connects to NeuralSeek for answers."),"\n",a.createElement(t.li,null,"Use your assistant to answer questions about Discovery."),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prerequisites"},a.createElement(t.h2,{id:"prerequisites"},a.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",a.createElement(t.p,null,"The following steps assume that you already have an IBMid. If this is not the case, create an IBMid first."),"\n",a.createElement(t.p,null,"Follow ",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations/create/64e6866b41bf2a0017d986ad"},"this link")," to reserve a ",a.createElement(t.em,null,"Customer Care - GenAI")," TechZone environment. This environment will provision watsonx Assistant, Watson Discovery, and NeuralSeek services that are required for this lab."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Reserve Now")," and ",a.createElement(t.strong,null,"Practice / Self-Education"),"."),"\n",a.createElement(t.li,null,"Enter ",a.createElement(t.code,null,"watsonx Assistant L4")," in the ",a.createElement(t.strong,null,"Purpose description")," field."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.em,null,"us-south")," as your ",a.createElement(t.strong,null,"Preferred Geography"),"."),"\n",a.createElement(t.li,null,"Check the box to agree to the terms and conditions and click ",a.createElement(t.strong,null,"Submit"),"."),"\n"),"\n",a.createElement(t.p,null,"You should get an email informing you that your environment is being provisioned. Shortly afterward, you should receive a second email informing you that your environment is ready:"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/001.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"View My Reservations")," and then click on your reserved enviroment."),"\n"),"\n",a.createElement(t.p,null,"At the bottom of this page, you will find links to the ",a.createElement(t.em,null,"Watson Discovery service instance page")," and the ",a.createElement(t.em,null,"watsonx Assistant service instance page"),". When these pages are mentioned in the lab below, you can navigate to them via these links (they will be different for your environment):"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/002.png",alt:""}),"\n",a.createElement(t.p,null,"Alternatively, you can open the Navigation Menu in IBM Cloud, click ",a.createElement(t.strong,null,"Resource List"),", open the ",a.createElement(t.strong,null,"AI / Machine Learning")," menu, click on a service there, and click ",a.createElement(t.strong,null,"View full details"),". This is also how you can navigate to the ",a.createElement(t.em,null,"NeuralSeek Lite service instance page")," (",a.createElement(t.code,null,"...neuralseek-lite"),")."),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"Go to ",a.createElement(t.strong,null,"Notifications")," in IBM Cloud (the bell icon in the top-right) and accept the invitation to the TechZone environment by clicking ",a.createElement(t.strong,null,"Join now"),"."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-1-get-the-product-documentation"},a.createElement(t.h2,{id:"step-1-get-the-product-documentation"},a.createElement(t.a,{href:"#step-1-get-the-product-documentation"},"Step 1: Get the product documentation")),"\n",a.createElement(t.p,null,"To use the Discovery product documentation as our knowledge base, we will download the product documentation as two PDF files. The documentation has been split across two files so that it can be enriched faster in Discovery."),"\n",a.createElement(t.p,null,"Go ",a.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/static/watsonx-assistant/discovery-data-1.pdf"},"here")," and click ",a.createElement(t.strong,null,"Download raw file")," to download ",a.createElement(t.em,null,"discovery-data-1.pdf"),"."),"\n",a.createElement(t.p,null,"Go ",a.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/static/watsonx-assistant/discovery-data-2.pdf"},"here")," and click ",a.createElement(t.strong,null,"Download raw file")," to download ",a.createElement(t.em,null,"discovery-data-2.pdf"),"."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-2-create-a-document-retrieval-project"},a.createElement(t.h2,{id:"step-2-create-a-document-retrieval-project"},a.createElement(t.a,{href:"#step-2-create-a-document-retrieval-project"},"Step 2: Create a Document Retrieval project")),"\n",a.createElement(t.p,null,"Now that you have the latest copy of the product documentation, add it to a Discovery project as your data source."),"\n",a.createElement(t.p,null,"In Discovery, you will create a ",a.createElement(t.em,null,"Document Retrieval")," project type. Documents that you add to a project of this type are automatically enriched in the following ways:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Entities, such as proper nouns, are identified and tagged."),"\n",a.createElement(t.li,null,"Parts of speech are identified and tagged."),"\n"),"\n",a.createElement(t.p,null,"This tagged information is used later when a natural language phrase is submitted as a search query to return an accurate response."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Open a new web browser tab and navigate to IBM Cloud."),"\n",a.createElement(t.li,null,"From the ",a.createElement(t.em,null,"Watson Discovery service instance page")," in IBM Cloud, click ",a.createElement(t.strong,null,"Launch Watson Discovery"),"."),"\n",a.createElement(t.li,null,"From the ",a.createElement(t.em,null,"My Projects")," page, click ",a.createElement(t.strong,null,"New Project"),"."),"\n",a.createElement(t.li,null,"Name your project ",a.createElement(t.code,null,"Discovery documentation"),", and then click the ",a.createElement(t.strong,null,"Document Retrieval")," tile."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/003.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Next"),"."),"\n"),"\n",a.createElement(t.p,null,"You'll configure the data source for the project in the next step."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-3-upload-data-to-the-project"},a.createElement(t.h2,{id:"step-3-upload-data-to-the-project"},a.createElement(t.a,{href:"#step-3-upload-data-to-the-project"},"Step 3: Upload data to the project")),"\n",a.createElement(t.p,null,"Add the documentation PDFs to your Discovery project."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/004.png",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Name the collection ",a.createElement(t.em,null,"Discovery docs part 1"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Drag and drop files here or upload"),", and then browse to add the first PDF file that you created earlier."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Finish"),"."),"\n",a.createElement(t.p,null,"Your file is processed as it is added to the collection."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the navigation panel, click ",a.createElement(t.strong,null,"Manage collections"),", and then click ",a.createElement(t.strong,null,"New collection"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/005.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Repeat the previous steps to add the second PDF file as a collection named ",a.createElement(t.em,null,"Discovery docs part 2"),"."),"\n"),"\n",a.createElement(t.p,null,"After the data is uploaded, it is processed and indexed by Discovery. While the data is being processed, let's create our virtual assistant."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-4-create-an-assistant"},a.createElement(t.h2,{id:"step-4-create-an-assistant"},a.createElement(t.a,{href:"#step-4-create-an-assistant"},"Step 4: Create an assistant")),"\n",a.createElement(t.p,null,"For this tutorial, you will create an assistant with a single action."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open a new web browser tab and navigate to IBM Cloud."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the ",a.createElement(t.em,null,"watsonx Assistant service instance page")," in IBM Cloud, click ",a.createElement(t.strong,null,"Launch watsonx Assistant"),"."),"\n",a.createElement(t.p,null,"The watsonx Assistant product user interface is displayed where you can create your first assistant."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Add ",a.createElement(t.code,null,"Discovery expert")," as the assistant name, and then click ",a.createElement(t.strong,null,"Next"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"If you are asked to share information about you and your assistant, complete the required fields, and then click ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.p,null,"When you create an assistant, a web chat application is created for you automatically."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Create")," to create the assistant and the corresponding web chat app."),"\n"),"\n"),"\n",a.createElement(t.p,null,"After a congratulatory message, the home page for your new assistant is displayed."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/006.png",alt:""}),"\n",a.createElement(t.p,null,"Before we add anything to our new assistant, let's check on the status of our data."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-5-prepare-your-data-for-retrieval"},a.createElement(t.h2,{id:"step-5-prepare-your-data-for-retrieval"},a.createElement(t.a,{href:"#step-5-prepare-your-data-for-retrieval"},"Step 5: Prepare your data for retrieval")),"\n",a.createElement(t.p,null,"To improve the retrievability of the information in your PDF files, you will split the PDF files into many smaller documents. To do so, you will first teach Discovery about the structure of your PDF files, so it understands how subsections are formatted and can split the document by subsection."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Return to the web browser tab where your Discovery project is displayed."),"\n",a.createElement(t.p,null,"The ",a.createElement(t.em,null,"Improve and customize")," page for the last PDF file that you uploaded is displayed."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the ",a.createElement(t.em,null,"Improvement tools")," panel, expand ",a.createElement(t.em,null,"Define structure"),", and then click ",a.createElement(t.strong,null,"New fields"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/007.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Choose the ",a.createElement(t.em,null,"Discovery docs part 1")," collection."),"\n",a.createElement(t.p,null,"The Identify fields tab is displayed, where you can choose the type of Smart Document Understanding model that you want to use."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"User-trained models"),", and then click ",a.createElement(t.strong,null,"Submit"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/008.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Apply changes and reprocess"),"."),"\n",a.createElement(t.p,null,"After some processing occurs, a representation of the document is displayed in the Smart Document Understanding tool. The tool shows you a view of the original document along with a representation of the document, where the text is replaced by blocks. The blocks represent field types."),"\n",a.createElement(t.p,null,"Initially, the blocks are labeled as ",a.createElement(t.code,null,"text")," because all of the document content is considered to be standard text by default, and is indexed in the ",a.createElement(t.code,null,"text")," field."),"\n",a.createElement(t.p,null,"We want to label all first- and second-level headings as subtitles instead of text."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the thumbnails view, click the thumbnail for the first full-text page from the document to open the first page with real content."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/009.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"To annotate the document, click the ",a.createElement(t.code,null,"subtitle")," label from the ",a.createElement(t.em,null,"Field")," labels list. Then, click each block in the representation of the PDF page that represents a heading to change its label from ",a.createElement(t.code,null,"text")," to ",a.createElement(t.code,null,"subtitle"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/010.png",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After every subtitle on the current page is labeled, click ",a.createElement(t.strong,null,"Submit page"),"."),"\n",a.createElement(t.p,null,"The next page of the PDF file is displayed."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/011.png",alt:""}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Repeat this process until the tool is able to label the headings correctly for you in a consistent way when new pages are loaded into the tool. At that point, click ",a.createElement(t.strong,null,"Apply changes and reprocess"),"."),"\n",a.createElement(t.p,null,"Congratulations! You have successfully trained a Smart Document Understanding (SDU) model that can recognize subtitles in your documents. Let's apply the same model to the other PDF file that you added to the project."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the SDU editor toolbar, click the ",a.createElement(t.em,null,"Export model")," icon (down arrow), and then click ",a.createElement(t.strong,null,"Export"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Save the ",a.createElement(t.code,null,".sdumodel")," file to your system in a location where you can access it again shortly."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the navigation panel, click ",a.createElement(t.strong,null,"Manage collections"),", and then open the ",a.createElement(t.em,null,"Discovery docs part 2")," collection."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the ",a.createElement(t.em,null,"Identify fields")," tab."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"User-trained models"),", and then click ",a.createElement(t.strong,null,"Submit"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Apply changes and reprocess"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the SDU editor toolbar, click the ",a.createElement(t.em,null,"Import model")," icon (up arrow), and then click ",a.createElement(t.strong,null,"Upload"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.code,null,".sdumodel")," file that you downloaded earlier, and then click ",a.createElement(t.strong,null,"Select model"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Apply changes and reprocess")," to apply the same SDU model to the first collection."),"\n"),"\n"),"\n",a.createElement(t.p,null,"Discovery reprocesses the data in its index to identify subtitles in the documents. While the data is being reprocessed, let's create our answer generator."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-6-create-a-neuralseek-service-instance"},a.createElement(t.h2,{id:"step-6-create-a-neuralseek-service-instance"},a.createElement(t.a,{href:"#step-6-create-a-neuralseek-service-instance"},"Step 6: Create a NeuralSeek service instance")),"\n",a.createElement(t.p,null,"You can use a search extension in watsonx Assistant to connect your assistant directly to Discovery and return passages straight from the data source. However, we will add the NeuralSeek service between watsonx Assistant and Discovery in this tutorial. NeuralSeek retrieves the passages from Discovery and then converts them into answers that sound more conversational."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Open a new web browser tab and navigate to IBM Cloud."),"\n",a.createElement(t.li,null,"From the ",a.createElement(t.em,null,"NeuralSeek Lite service instance page")," in IBM Cloud, click ",a.createElement(t.strong,null,"Launch NeuralSeek"),"."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Configure")," tab and click the ",a.createElement(t.strong,null,"Show Advanced Options")," button."),"\n",a.createElement(t.li,null,"Under ",a.createElement(t.strong,null,"KnowledgeBase Connection"),":","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Set ",a.createElement(t.strong,null,"KnowledgeBase Language")," to English."),"\n",a.createElement(t.li,null,"Specify the ",a.createElement(t.strong,null,"Discovery Service URL")," and ",a.createElement(t.strong,null,"Discovery API Key")," (both found on the ",a.createElement(t.strong,null,"Watson Discovery service instance page"),")."),"\n",a.createElement(t.li,null,"Specify the ",a.createElement(t.strong,null,"Discovery Project ID")," (in Watson Discovery, click ",a.createElement(t.strong,null,"Integrate and deploy")," from the navigation panel, open the ",a.createElement(t.em,null,"API Information")," page, and copy the ",a.createElement(t.em,null,"Project ID"),")."),"\n"),"\n"),"\n",a.createElement(t.li,null,"Under ",a.createElement(t.strong,null,"KnowledgeBase Tuning"),":","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Set ",a.createElement(t.strong,null,"Document Score Range")," to 50%."),"\n",a.createElement(t.li,null,"Set ",a.createElement(t.strong,null,"Snippet size")," to 400 characters."),"\n"),"\n"),"\n",a.createElement(t.li,null,"Under ",a.createElement(t.strong,null,"Company / Organization Preferences"),", provide the name of your company."),"\n",a.createElement(t.li,null,"Under ",a.createElement(t.strong,null,"Governance & Guardrails"),", set ",a.createElement(t.strong,null,"Minimum Confidence %")," to 30%."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Save"),"."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-7-split-your-pdf-documents"},a.createElement(t.h2,{id:"step-7-split-your-pdf-documents"},a.createElement(t.a,{href:"#step-7-split-your-pdf-documents"},"Step 7: Split your PDF documents")),"\n",a.createElement(t.p,null,"Now that subtitles are indexed properly in Discovery, use them as the basis for splitting the PDF files into many smaller documents."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Return to the web browser tab where your Discovery project is displayed."),"\n",a.createElement(t.li,null,"Open the ",a.createElement(t.strong,null,"Manage fields")," tab for the current collection."),"\n",a.createElement(t.li,null,"Under ",a.createElement(t.em,null,"Improve query results by splitting your documents"),", click ",a.createElement(t.strong,null,"Split document +"),"."),"\n",a.createElement(t.li,null,"In the ",a.createElement(t.em,null,"Split document on each occurrence of")," field, choose ",a.createElement(t.strong,null,"subtitle"),", and then click ",a.createElement(t.strong,null,"Apply changes and reprocess"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/012.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"From the navigation panel, click ",a.createElement(t.strong,null,"Manage collections"),", and then open the other collection."),"\n",a.createElement(t.li,null,"Go to the ",a.createElement(t.em,null,"Manage fields")," page, and then choose ",a.createElement(t.strong,null,"subtitle")," in the ",a.createElement(t.em,null,"Split document on each occurrence of")," field."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Apply changes and reprocess"),"."),"\n"),"\n",a.createElement(t.p,null,"The collections start to be reprocessed. After reindexing is finished, instead of containing one document each, the collections will contain several hundred documents each."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/013.png",alt:""}),"\n",a.createElement(t.p,null,"While the index is being rebuilt, let's get our assistant ready."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-8-add-an-extension-to-your-assistant"},a.createElement(t.h2,{id:"step-8-add-an-extension-to-your-assistant"},a.createElement(t.a,{href:"#step-8-add-an-extension-to-your-assistant"},"Step 8: Add an extension to your assistant")),"\n",a.createElement(t.p,null,"Connect your assistant to your NeuralSeek service instance."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"From your NeuralSeek tab, click the ",a.createElement(t.em,null,"Integrate")," tab and follow the instructions to set up the NeuralSeek custom extension for your assistant. When you finish step 6 of the procedure in NeuralSeek, continue to next step of the procedure here."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/014.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"From the watsonx Assistant navigation panel, click ",a.createElement(t.strong,null,"Actions"),", and then click ",a.createElement(t.strong,null,"Create action +"),"."),"\n",a.createElement(t.li,null,"Choose ",a.createElement(t.strong,null,"Quick start from templates"),", and then scroll to find and click the ",a.createElement(t.strong,null,"NeuralSeek Starter kit"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/015.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Select this starter kit"),", and then click ",a.createElement(t.strong,null,"Add templates"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click to open the ",a.createElement(t.em,null,"NeuralSeek search")," action that you just added to the assistant."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Add the following user example queries:"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"What Watson Discovery project types are available and what do they do?")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"What external data sources are supported by Watson Discovery?")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"Can I add a custom dictionary to Watson Discovery?")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"How do I use the Content Mining application?")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"When should I add query expansions to my project?")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"Which file types support Smart Document Understanding models?")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"Can I enable optical character recognition for all file types?")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"Does my data have to be written in English?")),"\n"),"\n"),"\n",a.createElement(t.p,null,"watsonx Assistant uses the sample questions to recognize the types of user questions it should route to this action."),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.em,null,"Step 3")," to open it for editing."),"\n",a.createElement(t.p,null,"In the ",a.createElement(t.em,null,"And then")," section, click ",a.createElement(t.strong,null,"Edit extension"),"."),"\n",a.createElement(t.p,null,"Set the variables as shown below (",a.createElement(t.code,null,"query_text")," is under ",a.createElement(t.em,null,"Session variables"),"):"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/016.png",alt:""}),"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Apply"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.em,null,"Step 6")," to open it for editing."),"\n",a.createElement(t.p,null,"This step shows a link that users can click to get more information. We want this link to go directly to the product documentation on the IBM Cloud Docs site."),"\n",a.createElement(t.p,null,"Change the hypertext reference in the anchor HTML element to contain the following URL:"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,'<a href="https://cloud.ibm.com/docs/discovery-data?topic=discovery-data-about" target="_blank">')),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/017.png",alt:""}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"Save your changes, and then click the X to close the step."),"\n"),"\n",a.createElement(t.p,null,"Congratulations! You successfully created an action that recognizes questions about Discovery, and gets its answers from the connected NeuralSeek extension."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-9-configure-the-web-chat-for-your-assistant"},a.createElement(t.h2,{id:"step-9-configure-the-web-chat-for-your-assistant"},a.createElement(t.a,{href:"#step-9-configure-the-web-chat-for-your-assistant"},"Step 9: Configure the web chat for your assistant")),"\n",a.createElement(t.p,null,"To preview your assistant, you will use the built-in web chat as the chat user interface for interacting with the assistant."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the navigation panel in watsonx Assistant, click ",a.createElement(t.strong,null,"Environments"),"."),"\n",a.createElement(t.p,null,"The draft environment is displayed. It shows that a web chat is connected to your assistant. You also can see that the web chat is connected to the NeuralSeek extension."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/018.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.em,null,"Web chat")," tile to edit the web chat."),"\n",a.createElement(t.p,null,"We don't want to add multiple starter questions, so we're going to turn off the home screen for the web chat. Click the ",a.createElement(t.strong,null,"Home screen")," tab. Set the switcher to ",a.createElement(t.strong,null,"Off"),", and then click ",a.createElement(t.strong,null,"Save and exit"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/019.png",alt:""}),"\n",a.createElement(t.p,null,"You're ready to preview your assistant!"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-10-preview-the-assistant"},a.createElement(t.h2,{id:"step-10-preview-the-assistant"},a.createElement(t.a,{href:"#step-10-preview-the-assistant"},"Step 10: Preview the assistant")),"\n",a.createElement(t.p,null,"To preview an assistant that connects to data that is stored in Discovery, you must preview the assistant from the ",a.createElement(t.em,null,"Environments")," page. When you preview the web chat independently, the assistant is not able to retrieve data from Discovery; it needs the environment resources to be able to connect to Discovery."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the ",a.createElement(t.em,null,"Environments")," page, click ",a.createElement(t.strong,null,"Preview this environment"),"."),"\n",a.createElement(t.p,null,"A sample web page is displayed that includes a chat icon."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the chat icon to open the web chat window."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/020.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Enter the following text question:"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"What project types are available?")),"\n",a.createElement(t.p,null,"The correct answer is returned and it includes a link to the product documentation."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/021.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Submit a question that wasn't used as a query example when you created the action."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"How do you define synonyms in Watson Discovery?")),"\n",a.createElement(t.p,null,"A detailed answer is returned."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/022.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Optionally ask the assistant other questions."),"\n",a.createElement(t.p,null,"If the assistant doesn't know the answer, reword the question to include “in Watson Discovery” to make it clearer that you are asking about how something works in Discovery specifically."),"\n"),"\n"),"\n",a.createElement(t.p,null,"Congratulations! You successfully created an assistant that can answer questions about Discovery by retrieving information from the product documentation by way of the NeuralSeek service."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},a.createElement(t.h2,{id:"summary"},a.createElement(t.a,{href:"#summary"},"Summary")),"\n",a.createElement(t.p,null,"In this tutorial, you created a Watson Discovery Document Retrieval project with uploaded PDF files that contain the Discovery product documentation. Separately, you created a watsonx Assistant virtual assistant with a single action that can recognize user questions about Discovery. You added a custom extension to your assistant that connects to a third-party service called NeuralSeek that gets the correct answer from Discovery and rewords the response. Finally, you tested your virtual assistant by asking a question and getting an accurate and well-written response.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},s=n(94184),c=n.n(s),i=n(24690),u=n(81140),m=n(48623),d=n(88531),h=n(13383),p=n(27315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:s}=e,i=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),g=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(d.Z,{className:p.YS},a.createElement("article",{className:c()(p.Y2,!g&&p.ey),ref:i},a.createElement(m.Z,{components:{h1:()=>null}},s)),g&&a.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(i.Z,{pathname:t,title:n||l[0].title||void 0})};function y(e){return a.createElement(E,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-assistant-level-4-204-md-52be6347931a5da2538b.js.map