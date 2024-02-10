"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5370],{5787:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return g}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",em:"em",blockquote:"blockquote",ol:"ol",img:"img",strong:"strong",pre:"pre",code:"code"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),a.createElement(a.Fragment,null,a.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"large-language-model-application-building-blocks"},a.createElement(t.h1,{id:"large-language-model-application-building-blocks"},"Large language model application building blocks"),"\n",a.createElement(t.p,null,"This hands-on exercise will show you how to integrate large language models (LLMs) with client applications. We will review several Python code samples which can be used as “building blocks” for an LLM application.\nWe will then use a simple UI prototype implemented with ",a.createElement(t.a,{href:"https://streamlit.io/"},"Streamlit")," to show how these building blocks can be invoked from client applications."),"\n",a.createElement(t.p,null,"Prompt engineering is just one of the steps in the process of integrating LLMs into business applications. It is outside the scope of this guide to provide an introduction to prompt engineering in watsonx.ai. For an introduction to prompt engineering in watsonx.ai, check out the ",a.createElement(t.a,{href:"/watsonx/watsonxai"},"VEST watsonx.ai L3 Labs")),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prerequisites"},a.createElement(t.h2,{id:"prerequisites"},a.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Access to watsonx.ai."),"\n",a.createElement(t.li,null,"Python IDE with Python 3.10 environment","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"We will be using the Python IDE, ",a.createElement(t.a,{href:"https://code.visualstudio.com/"},"Visual Studio Code (VSCode)")),"\n"),"\n"),"\n",a.createElement(t.li,null,"You will also need to download the lab files from ",a.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/tree/main/content/Watsonx/WatsonxAI/files/202"},"this GitHub folder"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"We will refer to this folder as the ",a.createElement(t.em,null,"repo")," folder."),"\n"),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"review-scripts-for-various-llm-tasks"},a.createElement(t.h2,{id:"review-scripts-for-various-llm-tasks"},a.createElement(t.a,{href:"#review-scripts-for-various-llm-tasks"},"Review scripts for various LLM tasks")),"\n",a.createElement(t.p,null,"In this section we will review 4 Python scripts and 2 notebooks that can be used as building blocks for LLM applications."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Note: Prompts and model configuration in the scripts may not always return perfect results. If you wish, you can modify prompts and model parameters."),"\n"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Load the following scripts from the repo/scripts folder into your Python IDE:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"use_case_infererence.py"),"\n",a.createElement(t.li,null,"use_case_summary.py"),"\n",a.createElement(t.li,null,"use_case_generate.py"),"\n",a.createElement(t.li,null,"use_case_transform.py"),"\n"),"\n",a.createElement(t.p,null,"As you can tell from the script names, the scripts contain prompts for most common LLM use cases.\nEach script follows a similar code structure:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.em,null,"ibm-watson-machine-learning")," library is used to invoke LLMs deployed in watsonx.ai."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"An IBM Cloud API key and watsonx project id are retrieved from the ",a.createElement(t.em,null,".env")," file (environmental file) which we will create in a later step in this lab."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/credentials.png",alt:"credentials"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"get_model()")," parameterized function creates a model object that will be used to invoke the LLM in order for the application to get responses for text that you input to the prompt."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_model.png",alt:"get_model"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"get_prompt()")," function will create the final prompt that will be passed to the model. The function will use text from a passed in parameter from either the ",a.createElement(t.strong,null,"get_review()")," or ",a.createElement(t.strong,null,"get_sample_text()")," function which will be analyzed by the LLM."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"It's possible to organize the code without hardcoding the instruction part of the prompt, but we will not cover it in this lab."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_prompt.png",alt:"get_prompt"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"main()")," function specifies the model parameters and invokes the other functions. The function prints LLM output to the terminal."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/main.png",alt:"main"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Lastly, each script contains at least one function that can be called by an external Python module. For example, in ",a.createElement(t.em,null,"use_case_generate.py"),", the function name is ",a.createElement(t.strong,null,"generate"),"."),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Prior to running the scripts, create a ",a.createElement(t.em,null,".env")," file in the root directory of your project and add your IBM Cloud API key and watsonx project id."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"For more information, see ",a.createElement(t.a,{href:"https://cloud.ibm.com/docs/account?topic=account-userapikey&interface=ui#create_user_key"},"Creating an IBM Cloud API key")," and ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-project-id.html?context=wx"},"Looking up your watsonx project ID"),"."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open a terminal and navigate to the scripts's location. Run each script. For example you can run one of the scripts with the following command:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"   python ./use_case_generate.py\n")),"\n",a.createElement(t.p,null,"As you review and run the code, consider the following questions:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"How can this code be improved?"),"\n",a.createElement(t.li,null,"Why results could be different in each execution?"),"\n",a.createElement(t.li,null,"What parameters we can adjust to minimize variability of the model output to make it more deterministic?"),"\n",a.createElement(t.li,null,"Why did we implement this code as scripts, and not notebooks?"),"\n",a.createElement(t.li,null,"When does it make sense to implement this code as notebooks?"),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"Next, we will review the sample Streamlit application that uses these scripts in real-time."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"streamlit-ui-application"},a.createElement(t.h2,{id:"streamlit-ui-application"},a.createElement(t.a,{href:"#streamlit-ui-application"},"Streamlit UI application")),"\n",a.createElement(t.p,null,"Streamlit is an open source framework for creating Web applications. We include it in our workshop because of its ease of use. While customers can use Streamlit, it’s not a requirement\nfor integration with watsonx.ai."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Load the sample ",a.createElement(t.em,null,"Streamlit")," application, ",a.createElement(t.em,null,"sample_llm_ui_demo.py"),", from the repo/scripts folder into your Python IDE."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To run this script, you will need to install some dependencies in your Python environment. You can do so by downloading the ",a.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/files/202/requirements.txt"},"requirements.txt")," into your project, and install the requirements by running this command:"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"python3 -m pip install -r requirements.txt"),"."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Important: If you’re running on Windows, you will need to run this script in an Anaconda Python environment because it’s the only supported Python environment on Windows. Both VS Code and Pycharm can be configured to use Anaconda."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Let’s review the application."),"\n",a.createElement(n,{text:"This will be on the quiz"}),"\n",a.createElement(t.p,null,"The majority of the code creates the UI and handles UI interactions. LLMs are invoked on the button click event. Each click will send a request to run a script and inference our prompts."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_summary_clicked.png",alt:"main"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"When you run the script, Python will open the Streamlit UI in your browser in the local url ",a.createElement(t.a,{href:"http://localhost:8501"},"http://localhost:8501"),"."),"\n",a.createElement(t.p,null,"If you invoke Python application from a terminal, and not an IDE then use the following\ncommand:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"   streamlit run ./sample_llm_ui_demo.py\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Run the application and review results."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"You can paste different reviews into the Web UI"),"\n",a.createElement(t.li,null,"Test the Summary and the Extraction use cases"),"\n",a.createElement(t.li,null,"If you want to change model parameters, change them in:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.em,null,"use_case_summary.py")," – function ",a.createElement(t.em,null,"get_summary()")),"\n",a.createElement(t.li,null,a.createElement(t.em,null,"use_case_inference.py")," – function ",a.createElement(t.em,null,"extract()")),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"As you experiment with different models, you will notice that output is not perfect. We’re using the same prompt for all models to keep the code relatively simple. In most production applications the end user will not have a choice of a model, so you will be able to optimize the prompt for the best performance."),"\n",a.createElement(n,{text:"This will be on the quiz"}),"\n",a.createElement(t.p,null,"Currently, the llama-70b-2-chat model is one of the best models for zero-shot prompting.\nWhile it may seem like an obvious choice to always use llama-70b-2-chat in watsonx.ai, it\nmay not be possible for several reasons:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Model availability in the data center (due to resources or licensing)"),"\n",a.createElement(t.li,null,"Inference cost"),"\n",a.createElement(t.li,null,"Hosting cost (for on-premises or hybrid cloud deployments)"),"\n"),"\n",a.createElement(t.p,null,"It may be possible to achieve similar results with other models or with smaller versions of llama by using few-shot prompting or fine-tuning, that’s why it’s important to experiment with multiple models and understand prompt/turning techniques. We encourage you to try other models (for example, granite and mpt-7b) in the ",a.createElement(t.strong,null,"Prompt Lab")," to experiment with and optimize the prompt, and then paste it in the respective modules."),"\n"),"\n"),"\n",a.createElement(t.p,null,"Next, we’ll look into an alternative implementation of a classification use case."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"classification"},a.createElement(t.h2,{id:"classification"},a.createElement(t.a,{href:"#classification"},"Classification")),"\n",a.createElement(t.p,null,"Classification is one of the most established use cases in Natural Language Processing (NLP). Using LLMs for classification has pros and cons. Consider the following when using LLMs for classification:"),"\n",a.createElement(n,{text:"This will be on the quiz"}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Pro: LLMs don’t require training data"),"\n",a.createElement(t.li,null,"Con: Without prompt tuning or fine tuning LLMs will likely produce less accurate results than traditional ML models"),"\n",a.createElement(t.li,null,"Con: cost of inference (if using a Cloud offering, token count is often used as a charge metric)."),"\n"),"\n",a.createElement(t.p,null,"For our next use case we will implement the traditional NLP approach because we have labeled\ndata, and we would like to “save” our token usage for tasks that can not be completed by traditional NLP models, such as summarization and content generation."),"\n",a.createElement(t.p,null,"While we will not use the prompt or LLM for deployment for Step 1 of this section we recommend that you complete it to understand the classification capabilities of LLMs."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In ",a.createElement(t.strong,null,"watsox.ai")," open the ",a.createElement(t.strong,null,"Prompt Lab")," and test the prompt using the following instructions."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Sample prompt: ",a.createElement(t.em,null,"Bank_complaint_classification.txt")," (in the repo/prompts folder)","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"The prompt uses the few-shot prompting technique by providing examples in the prompt after the instruction."),"\n"),"\n"),"\n",a.createElement(t.li,null,"Model: flan or mpt"),"\n",a.createElement(t.li,null,"Decoding: greedy","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Since this is a less creative or fact-based use case we will use greedy decoding. Sampling will produce greater variability/creativity in generated content (see ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-model-parameters.html?context=wx&audience=wdp"},"documentation")," for more information)."),"\n"),"\n"),"\n",a.createElement(t.li,null,"Sample data: ",a.createElement(t.em,null,"classification_training_data.csv")," (in the repo/data folder)"),"\n"),"\n",a.createElement(t.p,null,"The sample dataset contains labeled data – it was labeled by an analyst who read the notes and assigned the class (category/subject) of a complaint."),"\n",a.createElement(t.p,null,"When testing, paste a single cell from the ",a.createElement(t.strong,null,"Consumer complaint narrative")," column at the bottom of the prompt and make sure to leave the ",a.createElement(t.strong,null,"Class")," blank."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/consumer_complaint_column.png",alt:"main"}),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/classification_prompt.png",alt:"main"}),"\n",a.createElement(t.p,null,"While it’s possible to automate testing for all the consumer complaint narrative records and compare it with the classification labels for accuracy, we will not use this approach in the lab because it will use up our ",a.createElement(t.em,null,"IBM Cloud/watsonx.ai")," service token allocation."),"\n",a.createElement(t.p,null,"You may have noticed that the notes are lengthy, and because of token limitations for each model, we will not be able to send a large number of examples (limited few-shot learning)."),"\n",a.createElement(t.p,null,"It’s important to understand the following facts about tokens:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"LLMs have a limit for the number of supported tokens. The maximum number of tokens is usually captured in documentation or in the UI, as you’ve seen in the ",a.createElement(t.strong,null,"Prompt Lab"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/max_token_prompt_lab.png",alt:"main"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The maximum number of tokens includes both input and output tokens, also known as the ",a.createElement(t.em,null,"context window"),". This means that you can’t provide an unlimited number of examples in the prompt. In addition to that, each model has the maximum number of output tokens (see ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp"},"documentation"),")."),"\n"),"\n"),"\n",a.createElement(t.p,null,"The token constraint limitation can be solved with several approaches. If we need to provide more examples to the model, we can use an approach called Multitask Prompt Tuning (MPT) or fine tuning. We are not covering these advanced approaches in this lab."),"\n"),"\n"),"\n",a.createElement(t.p,null,"At this time, we will switch to the traditional NLP approach."),"\n",a.createElement(t.p,null,"Watson NLP is a Python NLP library that provides natural language processing functions for\nsyntax analysis and for a variety of text processing tasks, such as sentiment analysis, keyword extraction, and classification."),"\n",a.createElement(t.p,null,"Watson NLP contains both pre-built models and models than can be trained with data specific for the use case. One of the other advantages of Watson NLP is the support for 20 languages. You can learn more about Watson NLP in ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/watson-nlp-block-catalog.html?context=wx&audience=wdp"},"documentation"),"."),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Import the two sample NLP notebooks from the repo/notebooks folder into your watsonx.ai project in IBM Cloud:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.em,null,"Classify_notes_model_build")),"\n",a.createElement(t.li,null,a.createElement(t.em,null,"Classify_notes_score")),"\n"),"\n",a.createElement(t.p,null,"For each notebook, do the following instructions:"),"\n",a.createElement(t.p,null,"a. In watsonx.ai click on the tile ",a.createElement(t.strong,null,"Work with data and models in Python or R notebooks"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/notebook_tile.png",alt:"main"}),"\n",a.createElement(t.p,null,"b. Click the ",a.createElement(t.strong,null,"Local file")," tab on the left and navigate to the downloaded git repo/notebooks folder to select a notebook. Make sure that the NLP Runtime 23.1 environment is selected."),"\n",a.createElement(t.p,null,"c. Click ",a.createElement(t.strong,null,"Create")," to import the notebook."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/import_notebook.png",alt:"main"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Import the data used by the notebooks into your project. The data files can be found under ",a.createElement(t.em,null,"repo/notebooks"),"."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.em,null,"classification_training.csv")),"\n",a.createElement(t.li,null,a.createElement(t.em,null,"notes_scoring.csv")),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/add_data.png",alt:"main"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Let’s review the notebooks. Detailed explanation of model training and scoring is provided in each notebook. On a high level, the model building notebook:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Uses the prebuilt Watson NLP models for syntax and embeddings."),"\n",a.createElement(t.li,null,"Trains an SVM and an ensemble model using sample data."),"\n",a.createElement(t.li,null,"Evaluates model accuracy."),"\n",a.createElement(t.li,null,"Saves models to the project."),"\n"),"\n",a.createElement(t.p,null,"The model scoring notebook loads the models from the project and scores data. We assume that this model will be deployed for batch scoring. If our goal was to deploy classification for real time scoring, then we could wrapper it into a Python function as described in ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ml-deploy-py-function-write.html?context=wx&audience=wdp"},"documentation"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the ",a.createElement(t.em,null,"model building")," (Classify_notes_model_build) notebook  in ",a.createElement(t.em,null,"Edit")," mode and make the required changes before running it (see instructions in the notebook):"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Generate a project access token. See instructions ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/token.html?context=cpdaas"},"here"),"."),"\n",a.createElement(t.li,null,"Regenerate/update code to load training data."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the ",a.createElement(t.em,null,"model scoring")," (Classify_notes_score) notebook in ",a.createElement(t.em,null,"Edit")," mode and make the required changes before running it (see instructions in the notebook):"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Generate a project access token. See instructions ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/token.html?context=cpdaas"},"here"),"."),"\n",a.createElement(t.li,null,"Regenerate/update code to load scoring data."),"\n"),"\n",a.createElement(t.p,null,"As you review and run the code, consider the following questions:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Why did we implement this code as a notebook, and not scripts?"),"\n",a.createElement(t.li,null,"Can this code be implemented in Python scripts outside of watsonx.ai?"),"\n",a.createElement(t.li,null,"How can this code be improved?"),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"There are several options for deploying classification model scoring. While it can be deployed for real time scoring, a more common scenario is running scoring as a batch job. A batch job can be invoked on demand."),"\n",a.createElement(t.p,null,"In this lab we’re not going to walk through the deployment process. You can read more about batch deployment in ",a.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/deploy-batch-details.html?context=wx&audience=wdp"},"documentation"),". At this time, in watsonx.ai you will need to wrap the model scoring code info a ",a.createElement(t.em,null,"Python function")," and deploy the function for batch scoring."),"\n",a.createElement(t.p,null,"You may have noticed that the sample ",a.createElement(t.em,null,"Streamlit")," application has an ",a.createElement(t.strong,null,"Analyze Data")," option in the use case dropdown."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/analyze_data_dropdown.png",alt:"main"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Run the Streamlit application and click the ",a.createElement(t.strong,null,"Run Analysis")," button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/run_analysis.png",alt:"main"}),"\n",a.createElement(t.p,null,"In our sample application we’re not invoking on-demand batch scoring, but simply providing the file with scoring results."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_notes_data.png",alt:"main"}),"\n",a.createElement(t.p,null,"In a production implementation this function should perform two steps:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Invoke the model configured for batch scoring (as described in mentioned documentation)"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Load results from the data source that was used as the output data source of batch scoring"),"\n"),"\n"),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"conclusion"},a.createElement(t.h2,{id:"conclusion"},a.createElement(t.a,{href:"#conclusion"},"Conclusion")),"\n",a.createElement(t.p,null,"You have finished the LLM Application Building Blocks lab. In this lab you learned:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"How to write work with the watson-machine-learning library to invoke LLMs that perform various tasks."),"\n",a.createElement(t.li,null,"How to write modular code that can be used from client applications."),"\n",a.createElement(t.li,null,"How to implement a classification use case with the Watson NLP library."),"\n",a.createElement(t.li,null,"About a cost-performance tradeoff of the LLM based approach and cases when it makes more sense to leverage traditional ML (classification)."),"\n"))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};var r=n(4184),s=n.n(r),c=n(4690),m=n(1140),u=n(8623),p=n(8531),d=n(3383),h=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:i}}},children:r}=e,c=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),b=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:o,updated:i},t[0].title||l||""),a.createElement(p.Z,{className:h.YS},a.createElement("article",{className:s()(h.Y2,!b&&h.ey),ref:c},a.createElement(u.Z,{components:{h1:()=>null}},r)),b&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function g(e){return a.createElement(E,e,a.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-202-md-3c6d45b77410e83d1c3c.js.map