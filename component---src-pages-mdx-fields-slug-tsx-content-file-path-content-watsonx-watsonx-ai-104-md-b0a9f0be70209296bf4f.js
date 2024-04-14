"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1302],{1331:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",blockquote:"blockquote",code:"code",ol:"ol",li:"li",img:"img",ul:"ul",pre:"pre",span:"span",em:"em"},(0,l.ah)(),e.components),{Warning:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Warning",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-using-jupyter-notebooks-with-prompts"},a.createElement(t.h1,{id:"104-using-jupyter-notebooks-with-prompts"},"104: Using Jupyter notebooks with Prompts"),"\n",a.createElement(t.p,null,"In previous sections, you have been working with prompt engineering via the console. However, this is not how data and AI engineers typically work. In this section, you will create a Jupyter notebook for a prompt and work with prompts in a Jupyter notebook in ",a.createElement(t.strong,null,"watsonx.ai"),"."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"getting-an-api-key"},a.createElement(t.h2,{id:"getting-an-api-key"},a.createElement(t.a,{href:"#getting-an-api-key"},"Getting an API key")),"\n",a.createElement(t.p,null,"To run a Jupyter notebook, you will need your API key. If you have not generated one before, you can do so by following the steps below."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," When using watsonx.ai on-prem (CP4D) the process is slightly different. For this exercise you will not need an api key, as the ",a.createElement(t.code,null,"ibm_watson_studio_lib")," python package can be invoked to authenticate your current session. You can however find instructions to obtain a key ",a.createElement(t.a,{href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=steps-generating-api-keys"},"here.")),"\n"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Log onto the IBM Cloud Console, or if you are using the Prompt Lab, you can click the icon in the upper left corner."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image123.png",alt:""}),"\n",a.createElement(t.p,null,"Select the option ",a.createElement(t.strong,null,"Access (IAM)")," option from the pop-up menu (you may have to log into the cloud console)."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image124.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Access (IAM)")," to bring up the ",a.createElement(t.strong,null,"Manage access and users panel"),". Find and select the ",a.createElement(t.strong,null,"API keys")," item from the left-hand panel."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image125.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"On the ",a.createElement(t.strong,null,"API keys")," panel, click ",a.createElement(t.strong,null,"Create"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image126.png",alt:""}),"\n",a.createElement(t.p,null,"On the next panel – you need to provide a name. You can use any name. In the example here, the name ",a.createElement(t.strong,null,"watsonx.ai api key")," is used. Now click ",a.createElement(t.strong,null,"Create"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image127.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"An API key will be created for you. On the resulting panel, you have several choices:"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,'Select the blue "eye" icon on the right to look at the key'),"\n",a.createElement(t.li,null,"Copy the key"),"\n",a.createElement(t.li,null,"Download the key"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image128.png",alt:""}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"It is recommended")," that you download your key. This key will be downloaded to a file called ",a.createElement(t.strong,null,"apikey.json"),". You might want to rename this file to ensure you remember what it is. If necessary, you can always create another API key."),"\n",a.createElement(t.p,null,"You might see this message:"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image129.png",alt:""}),"\n",a.createElement(t.p,null,"Simply close this window and the ",a.createElement(t.strong,null,"API keys")," window."),"\n",a.createElement(t.p,null,"Now that you have the key, you are ready to work with the Jupyter notebook."),"\n",a.createElement(t.p,null,"For more information, see ",a.createElement(t.a,{href:"https://cloud.ibm.com/docs/account?topic=account-userapikey&interface=ui#create_user_key"},"Creating an API key"),"."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"creating-a-jupyter-notebook-from-a-prompt"},a.createElement(t.h2,{id:"creating-a-jupyter-notebook-from-a-prompt"},a.createElement(t.a,{href:"#creating-a-jupyter-notebook-from-a-prompt"},"Creating a Jupyter notebook from a prompt")),"\n",a.createElement(t.p,null,"If you recall from the prompt and prompt session exercise, there is a third option when you choose to save a prompt, this is what you will do now."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Open the watsonx.ai Prompt Lab and scroll down to the ",a.createElement(t.strong,null,"Projects")," and select to open the project you were using. In a workshop setting the project will be provided for you. If you are running the lab on your own, it will most likely be ",a.createElement(t.strong,null,"[Your name]'s sandbox"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image130.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"In the list of assets (under the ",a.createElement(t.strong,null,"Assets")," tab), select the ",a.createElement(t.code,null,"{uniqueid}_Flan_ul2_prompt_session_v1")," prompt session that you saved in lab 103."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image131.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"clock")," icon on the left to open the history of this prompt session."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image132.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"If the ",a.createElement(t.strong,null,"Now")," version is not highlighted, click it now."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select ",a.createElement(t.strong,null,"Save work"),", and then select ",a.createElement(t.strong,null,"Save as"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image133.png",alt:""}),"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Notebook")," tile and fill in the fields as follows:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Use the ",a.createElement(t.strong,null,"Name")," ",a.createElement(t.code,null,"{uniqueid}_Flan_ul2_notebook_v1")),"\n",a.createElement(t.li,null,"Use the ",a.createElement(t.strong,null,"Description")," ",a.createElement(t.code,null,"Jupyter notebook, Flan ul2 prompt")),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"View in project after saving")),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Save")),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image134.png",alt:""}),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Watsonx.ai")," will open the Jupyter notebook with the content of the prompt."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image135.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"pencil")," icon in the top menu bar to go into edit mode."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image137.png",alt:""}),"\n",a.createElement(n,{text:"You can now work with the Jupyter notebook"}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Inspect the notebook and the various cells"),"\n"),"\n",a.createElement(t.p,null,"The first cell is the setup cell. ",a.createElement(t.strong,null,"Watsonx.ai")," has automatically filled in all the necessary data such as wml_url and sets up an inferencing class that makes a REST API call to the ",a.createElement(t.strong,null,"watsonx")," foundation model to generate output from your input. This part of the notebook is not the focus of this lab so you will not spend more time on this cell."),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"The next cell defines the credentials necessary to work with the watsonx API. When you run this cell, you will be asked to enter your API key."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image138.png",alt:""}),"\n",a.createElement(t.p,null,"You need to enter your API key, and “hit enter” as instructed, before executing the next cell. You will be asked each time to provide your API key. As a workaround, you can modify the code by changing the ",a.createElement(t.code,null,"apikey")," line:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-py"},a.createElement(t.span,{className:"hljs-comment"},"# from"),"\napikey = getpass.getpass(",a.createElement(t.span,{className:"hljs-string"},'"Please enter your api key (hit enter):"'),"),\n",a.createElement(t.span,{className:"hljs-comment"},"# to"),"\napi = ",a.createElement(t.span,{className:"hljs-string"},'"[your API key]"'),"\n")),"\n",a.createElement(t.p,null,"For example, it may look like this:"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image139.png",alt:""}),"\n",a.createElement(t.p,null,"After this change, you will not need to provide your key for each run session of the notebook."),"\n",a.createElement(t.ol,{start:"10"},"\n",a.createElement(t.li,null,"The following cell identifies the model you are using. For the 5 models available, here are the respective names you should use for ",a.createElement(t.strong,null,"model_id")," in a Jupyter notebook:"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"granite-13b-chat-v2"),' model_id="ibm/granite-13b-chat-v2"'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"flan-ul2-20b"),' model_id="google/flan-ul2"'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"flan-t5-xl-3b"),' model_id="google/flan-t5-xl"'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"flan-t5-xxl-11b"),' model_id="google/flan-t5-xxl"'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"mt0-xxl-13b"),' model_id="bigscience/mt0-xxl"'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"llama-2-70b-chat"),' model_id="meta-llama/llama-2-70b-chat"'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"codellama-34b-instruct-hf"),' model_id="codellama/codellama-34b-instruct-hf"'),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"mixtral-8x7b-instruct-v01-q"),' model_id="ibm-mistralai/mixtral-8x7b-instruct-v01-q"'),"\n"),"\n",a.createElement(t.ol,{start:"11"},"\n",a.createElement(t.li,null,"The next section contains a list of the model parameters that you can update. These are the same ones as from the user interface."),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"decoding_method")," greedy or sample"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"min_new_tokens")," 0 or larger"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"max_new_tokens")," positive integer"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"temperature")," 0.0 to 1.0"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"top_k")," 0 to 100"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"top_p")," 0.0 to 1.0"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"repetition_penalty")," 1.0 to 2.0"),"\n"),"\n",a.createElement(t.p,null,"Now that you have put your API key in the notebook, you can easily experiment by changing these runtime configuration parameters and see how they can affect the output."),"\n",a.createElement(t.p,null,"For example, try changing the values of ",a.createElement(t.strong,null,"max_new_tokens")," in combination with different values of ",a.createElement(t.strong,null,"repetition_penalty"),"; and changing values of ",a.createElement(t.strong,null,"top_p")," and ",a.createElement(t.strong,null,"top_k"),"."),"\n",a.createElement(t.ol,{start:"12"},"\n",a.createElement(t.li,null,"The next section defines the project id, you should not need to touch it."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image140.png",alt:""}),"\n",a.createElement(t.ol,{start:"13"},"\n",a.createElement(t.li,null,"The following section is your “prompt” - your input into the inference engine."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image141.png",alt:""}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,'From the model’s point of view, everything between the pair of triple double quotes ("") is the prompt.'),"\n",a.createElement(t.li,null,"Note that this was the one-shot prompt example you worked on earlier. When you do this (similarly for few-shots), you are simply inserting it before the section that you want to derive results on."),"\n",a.createElement(t.li,null,"You can use this notebook to quickly test out a ",a.createElement(t.em,null,'"few-shot"')," example – simply insert another sample section in the cell."),"\n",a.createElement(t.li,null,"Another important item to remember is that here the words ",a.createElement(t.strong,null,"Input")," and ",a.createElement(t.strong,null,"Output")," are not ",a.createElement(t.em,null,'"fixed"')," and you can change them. You should try changing Output to something different like Summarize or Conclusion. If you do change it, you might also change the Output in the one-shot (in the middle of the text box), or your answer may be surprising."),"\n",a.createElement(t.li,null,"Always keep in mind, that this is NOT a human reading the input as natural language. A model sees the input as a series of tokens, and it is calculating probability – changing words in key locations (such as the last word in the prompt) can have interesting impacts."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"section-summary"},a.createElement(t.h2,{id:"section-summary"},a.createElement(t.a,{href:"#section-summary"},"Section summary")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"In this section, you learned how to create a Jupyter notebook from the Prompt Lab."),"\n",a.createElement(t.li,null,"You need your own API key to use the notebook. You can input the API key into the notebook, so you do not need to provide it on every run."),"\n",a.createElement(t.li,null,"You can use the notebook to quickly test out changing the prompt, the model, or any of the configuration parameters."),"\n")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};var i=n(4184),s=n.n(i),c=n(4690),m=n(1140),u=n(8623),h=n(8531),p=n(3383),g=n(7315);const d=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:i}=e,c=(0,a.useRef)(null),{0:d}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:o,updated:r},t[0].title||l||""),a.createElement(h.Z,{className:g.YS},a.createElement("article",{className:s()(g.Y2,!E&&g.ey),ref:c},a.createElement(u.Z,{components:{h1:()=>null}},i)),E&&a.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:d})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(d,e,a.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-104-md-b0a9f0be70209296bf4f.js.map