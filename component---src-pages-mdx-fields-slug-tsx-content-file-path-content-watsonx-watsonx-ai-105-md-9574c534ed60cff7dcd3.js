"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[596],{6098:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return g}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",ol:"ol",h3:"h3",code:"code",blockquote:"blockquote",strong:"strong",h4:"h4"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"lab-105-building-ai-apps-with-langchain-and-watsonxai"},l.createElement(t.h1,{id:"lab-105-building-ai-apps-with-langchain-and-watsonxai"},"Lab 105: Building AI apps with Langchain and watsonx.ai"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"about"},l.createElement(t.h2,{id:"about"},l.createElement(t.a,{href:"#about"},"About")),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://docs.langchain.com/docs/"},"Langchain")," is a framework which helps in developing more complex AI powered apps. It works with many language models, and provides a set of tools to make intricate logic more manageable, such as sending system and human instructions, dynamic prompts using templates, chaining, output parsing, and more."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Langchain python module: ",l.createElement(t.a,{href:"https://pypi.org/project/langchain/"},"https://pypi.org/project/langchain/")),"\n",l.createElement(t.li,null,"Supports Python and Javascript / Typescript"),"\n"),"\n",l.createElement(t.p,null,"Today, we will be using Langchain with ",l.createElement(t.a,{href:"https://www.ibm.com/products/watsonx-ai"},"watsonx.ai"),", and the ",l.createElement(t.a,{href:"https://ibm.github.io/watson-machine-learning-sdk/"},"IBM Watson Machine Learning SDK"),", specifically the SDK's ",l.createElement(t.a,{href:"https://ibm.github.io/watson-machine-learning-sdk/fm_extensions.html#langchain"},"Langchain extension"),". Langchain already provides support for over 70 LLMs, but in case you want to support a new one, there is also custom LLM functionality. Read more ",l.createElement(t.a,{href:"https://python.langchain.com/docs/modules/model_io/models/llms/custom_llm"},"here")),"\n",l.createElement(t.p,null,"The first part starts with a gentle introduction to some langchain capabilities, including how to initialize a model, change inference parameters, use templates, chains, and load documents. We will then move on to summarization of large amounts of text, which includes more moving parts."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"there-are-2-ways-you-can-run-these-langchain-labs"},l.createElement(t.h2,{id:"there-are-2-ways-you-can-run-these-langchain-labs"},l.createElement(t.a,{href:"#there-are-2-ways-you-can-run-these-langchain-labs"},"There are 2 ways you can run these Langchain labs:")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Locally on your laptop (requires slightly more technical expertise)"),"\n",l.createElement(t.li,null,"In our shared JupyterHub environment"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"run-the-labs-locally-on-your-laptop"},l.createElement(t.h2,{id:"run-the-labs-locally-on-your-laptop"},l.createElement(t.a,{href:"#run-the-labs-locally-on-your-laptop"},"Run the labs locally on your laptop:")),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"prerequisites"},l.createElement(t.h3,{id:"prerequisites"},l.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Make sure Python >= 3.11 is installed. (",l.createElement(t.code,null,"python3 --version"),")"),"\n",l.createElement(t.li,null,"In your terminal, navigate to a folder where you want to work, and create a Virtual Environment: ",l.createElement(t.code,null,"python3 -m venv langchain")," Note: you might want to create this in a folder where there aren't any other projects or version control to avoid conflicts."),"\n",l.createElement(t.li,null,"Activate the environment:","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"MacOS + Linux: ",l.createElement(t.code,null,"source langchain/bin/activate")),"\n",l.createElement(t.li,null,"Windows:","\n",l.createElement("pre",null,l.createElement(t.p,null,l.createElement(t.code,null,"# If using Windows cmd.exe: (command prompt)"),"\n",l.createElement(t.code,null,"langchain\\Scripts\\activate.bat"),"\n",l.createElement(t.code,null,"# If using Windows PowerShell:"),"\n",l.createElement(t.code,null,"langchain\\Scripts\\Activate.ps1"))),"\n"),"\n",l.createElement(t.li,null,"You can deactivate it later with ",l.createElement(t.code,null,"deactivate")," when done with the labs."),"\n"),"\n"),"\n",l.createElement(t.li,null,"Download ",l.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/requirements.txt"},"requirements.txt")," into your folder, and install the requirements: ",l.createElement(t.code,null,"python3 -m pip install -r requirements.txt")),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"NOTE"),": If using Windows, you may have to increase the default length of your PATH variable. Instructions ",l.createElement(t.a,{href:"https://www.howtogeek.com/266621/how-to-make-windows-10-accept-file-paths-over-260-characters/"},"here")),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"NOTE"),": ChromaDB requires that you have C++ build tools installed. If your install shows an error similar to ",l.createElement(t.code,null,"Failed building wheel for chroma-hnswlib"),", try the following:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Windows: Install ",l.createElement(t.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"C++ build tools")),"\n",l.createElement(t.li,null,"MacOS: Make sure Xcode command line tools are installed ",l.createElement(t.code,null,"xcode-select --install")),"\n",l.createElement(t.li,null,"Linux (debian based): Make sure you have the Python -dev release and build-essentials installed ",l.createElement(t.code,null,"sudo apt install python3.11-dev build-essential")),"\n"),"\n"),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Download ",l.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/env-test.ipynb"},"env-test.ipynb")," into your folder, and start Jupyter Notebook with ",l.createElement(t.code,null,"jupyter notebook"),". Run the ",l.createElement(t.code,null,"env-test.ipynb")," to make sure there aren't any errors with your environment or dependencies."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Using the ",l.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/.env.example"},".env.example")," file, create an ",l.createElement(t.code,null,".env")," file in your folder."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Fill out the values in the ",l.createElement(t.code,null,".env")," file:"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"NOTE:")," If you are attending a workshop, ask your instructors how to acquire these values. Additional instructions on how to find these values are below."),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"API_KEY")," can be found at ",l.createElement(t.a,{href:"https://cloud.ibm.com/iam/apikeys"},"cloud.ibm.com/iam/apikeys")," after logging in. (If you don't have access to create an API key, contact your IBM cloud account Admin.)"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"IBM_CLOUD_URL")," should be your regional IBM cloud URL like in ",l.createElement(t.code,null,".env.example"),'. You can find this value by clicking the "View code" button next to the model dropdown in the Prompt Lab. You should use the URL ',l.createElement(t.strong,null,"without")," and paths."),"\n"),"\n",l.createElement("img",{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/karsten/ws-follow-on/content/Watsonx/WatsonxAI/images/105/instance-url.png",alt:"instance-url",width:"250"}),"\n",l.createElement("img",{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/karsten/ws-follow-on/content/Watsonx/WatsonxAI/images/105/instance-url-2.png",alt:"instance-url",width:"250"}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"PROJECT_ID")," can be found under ",l.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/projects/?context=wx"},"watsonx projects")," under the project manage tab. The id is also part of the URL: ",l.createElement(t.code,null,"https://dataplatform.cloud.ibm.com/projects/<project-id>/manage/general?context=wx")),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,"After finishing the prerequisites, complete the labs with the jupyter notebooks below."),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"run-the-labs-in-jupyterhub"},l.createElement(t.h2,{id:"run-the-labs-in-jupyterhub"},l.createElement(t.a,{href:"#run-the-labs-in-jupyterhub"},"Run the labs in JupyterHub:")),"\n",l.createElement(t.p,null,"Your instructor will provide the URL and login information for the hub. Just log in and follow the instructions in the notebooks. They are the same notebooks as listed below. If needed, follow step 7 above to get the values for environment variables."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"notebooks"},l.createElement(t.h3,{id:"notebooks"},l.createElement(t.a,{href:"#notebooks"},"Notebooks:")),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"part-1"},l.createElement(t.h4,{id:"part-1"},l.createElement(t.a,{href:"#part-1"},"Part 1:")),"\n",l.createElement(t.p,null,"Complete the lab by following the instructions in the notebook: ",l.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/langchain-intro.ipynb"},"langchain-intro.ipynb")),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"part-2"},l.createElement(t.h4,{id:"part-2"},l.createElement(t.a,{href:"#part-2"},"Part 2:")),"\n",l.createElement(t.p,null,"Complete the lab by following the instructions in the notebook: ",l.createElement(t.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/langchain-summarization.ipynb"},"langchain-summarization.ipynb"))))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},i=n(4184),c=n.n(i),s=n(4690),u=n(1140),m=n(8623),h=n(8531),d=n(3383),p=n(7315);const b=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:o,updated:r}}},children:i}=e,s=(0,l.useRef)(null),{0:b}=(0,l.useState)(""),E=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:o,updated:r},t[0].title||a||""),l.createElement(h.Z,{className:p.YS},l.createElement("article",{className:c()(p.Y2,!E&&p.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},i)),E&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:b})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function g(e){return l.createElement(b,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-105-md-9574c534ed60cff7dcd3.js.map