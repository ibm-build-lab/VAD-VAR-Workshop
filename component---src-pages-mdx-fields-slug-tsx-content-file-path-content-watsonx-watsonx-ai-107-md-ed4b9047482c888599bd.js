"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4160],{49574:function(e,t,a){a.r(t),a.d(t,{Head:function(){return b},default:function(){return w}});var n=a(11151),o=a(67294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",img:"img",em:"em",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",code:"code"},(0,n.ah)(),e.components);return o.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"integrating-vectordb-with-watsonxai-foundation-models"},o.createElement(t.h1,{id:"integrating-vectordb-with-watsonxai-foundation-models"},"Integrating VectorDB with watsonx.ai foundation models"),"\n",o.createElement(t.p,null,"This lab will show you how we can use watsonx.ai and a Vector Database together to solve a Retrieval Augmented Generation (RAG) use case. By combining watsonx.ai LLM's (Large Language Model) foundation models with an existing knowledge base of data we can provide insightful context for our watsonx foundation models when generating an answer; in this case we will make use of a PDF to provide additional context to prompts given to our watsonx.ai foundation model."),"\n",o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"what-is-rag"},o.createElement(t.h2,{id:"what-is-rag"},o.createElement(t.a,{href:"#what-is-rag"},"What is RAG?")),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/107/1-Retrieval-Step.png",alt:"RAG Retrieval Step Overview... image courtesy of scriv.ai"}),"\n",o.createElement(t.p,null,"In the previous lab we discussed what RAG or Retrieval Augmented Generation is, for a quick recap, RAG is an AI framework for improving the quality of LLM-generated responses by grounding the model on external sources of knowledge to supplement the LLM’s internal representation of information."),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"what-are-embeddings-and-why-use-a-vectordb"},o.createElement(t.h2,{id:"what-are-embeddings-and-why-use-a-vectordb"},o.createElement(t.a,{href:"#what-are-embeddings-and-why-use-a-vectordb"},"What are embeddings and why use a VectorDB?")),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/107/2-Embedding.png",alt:"Embeddings to language diagram.. image courtesy of scriv.ai"}),"\n",o.createElement(t.p,null,"To set a baseline, a vector database (Vector DB) is specialized databases which is used for storing data in vectorized format, mostly commonly in the form of arrays with different pairs of numbers. The next question might be ",o.createElement(t.em,null,"Why use a Vector DB?"),"; to understand that we first need to understand what embeddings are. Human language is very complex, the human brain is capable of understanding when we use words that mean the same thing or understand that certain words belong to a specific group. For example, our brains are able to understand that ",o.createElement(t.em,null,'"red"')," and ",o.createElement(t.em,null,'"blue"')," are both colors despite them being different words, we can also understand that when someone uses the words ",o.createElement(t.em,null,'"happy"')," and ",o.createElement(t.em,null,'"joyful"')," they generally represent the same emotion or feeling depsite them being two very different words. Trying to explain that to a machine is very difficult, but LLM's try to mirror some of this complexity in their own way, through a complex understanding of numbers. In short, an LLM tries to understand human language in a format that makes sense to machines, groups of numbers. Without getting to complicated LLM's use a translator to convert human language into numbers that it can easily associate with, this translator is usually an embedding function, and the output is a vector of numbers known as ",o.createElement(t.em,null,"embeddings"),". A simple example of this might be the the phrase ",o.createElement(t.em,null,'"Good morning"')," represented as the following ",o.createElement(t.em,null,"[34, 12, 234, 638, 12, ...]"),"."),"\n",o.createElement(t.p,null,"While to humans, this might not make any sense, it's meaningful to a machine because these numbers represent a sort of comprehesion for a machine to properly understand human language. These vectors can be plotted on a graph as they can represent coordinates which can be plotted, from these coordinates we can determine how close two embeddings, ",o.createElement(t.em,null,"or two pieces of text"),", are to one another; this idea of closeness is a core principle behind ",o.createElement(t.em,null,"semantic search"),", which we use when we want to query or look through all of our stored embeddings for text ",o.createElement(t.em,null,"(or embeddings)")," similar to our query. Now comes our VectorDB, it stores all of our embeddings ",o.createElement(t.em,null,"(along with associated metadata)")," and conceptually acts as a plot of all of the vectors that we have stored; when we make a query against our VectorDB it can return the embeddings that are closest ",o.createElement(t.em,null,"(shortest distance)")," to our query from the plot. A simple visual representation of this can be seen in the image below:"),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/107/3-Vector-Plots.jpg",alt:"Vector coordinate plots... image courtesy of weaviate.io"}),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"what-is-chroma-db"},o.createElement(t.h2,{id:"what-is-chroma-db"},o.createElement(t.a,{href:"#what-is-chroma-db"},"What is Chroma DB?")),"\n",o.createElement(t.p,null,"ChromaDB ",o.createElement(t.em,null,"(or Chroma)")," is marketed as a database for building A.I applications, but at its core can be simplified as a database for storing vectorized data as embeddings. The distinction for embeddings is important because embeddings have emerged to become the A.I-native way to represent any kind of data (i.e. text, video, images), making them ideal for working with all kinds of A.I-powered tools and algorithms. One things that makes Chroma unique from other embeddings database is its lightweight nature allowing it to be run in-memory if there is no need persistence. Being lightweight also lends Chroma to be fast, easily scalable ",o.createElement(t.em,null,"(by supporting other traditional databases for persistence)")," and easy to use SDKs integration using Python and Javascript."),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"putting-it-all-together-rag-with-vectordb"},o.createElement(t.h2,{id:"putting-it-all-together-rag-with-vectordb"},o.createElement(t.a,{href:"#putting-it-all-together-rag-with-vectordb"},"Putting it all together... RAG with VectorDB")),"\n",o.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/107/4-RAG-Steps.png",alt:"RAG Steps Diagram.. image courtesy of scriv.ai"}),"\n",o.createElement(t.p,null,"Now the we have enough background information, we can put it all together and try to understand from a high-level how the pieces for RAG using Vector DB fit together. As discussed previously, Retrieval Augmented Generation (RAG) is an approach used to improve the context provided to an LLM (Large Language Model) in generative AI use-cases, including chatbot and general question-answer applications. The vector database is used to enhance the input prompt passed to the LLM by adding additional context to the input query. Instead of passing the prompt directly to the LLM, ",o.createElement(t.em,null,"in this case watsonx.ai"),", in the RAG approach you follow the steps below:"),"\n",o.createElement(t.ul,null,"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"Generate embeddings, which are output as vectors, from an existing dataset that serves as the knowledge base - This dataset, which adds additional context to the LLMs response, can come in the form of product documentation, research data, technical specifications, product catalog and descriptions, and even more."),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"Store the output embeddings from the previous step into a Vectorized database. Vectors are easy to index and can be queried very fast."),"\n"),"\n"),"\n",o.createElement(t.p,null,"When a user initiates a prompt, instead of passing it directly to the LLM, we augment it with additional context:"),"\n",o.createElement(t.ul,null,"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"The user prompt is passed into the same embedding model used for our dataset, returning a vector embedding representation of the query."),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"This embedding is used as the query (semantic search) against the vector database, which returns similar vectors."),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"These vectors are used to look up the content they relate to (if not embedded directly alongside the vectors as metadata)."),"\n"),"\n",o.createElement(t.li,null,"\n",o.createElement(t.p,null,"This content is provided as context alongside the original user prompt, providing additional context to the LLM and allowing it to return an answer that is likely to be far more contextual than the standalone prompt."),"\n"),"\n"),"\n",o.createElement(t.p,null,"With all those pieces together you can complete a RAG use-case using Vector DB however, there other ways to complete RAG."),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"comparing-with-watson-discovery"},o.createElement(t.h2,{id:"comparing-with-watson-discovery"},o.createElement(t.a,{href:"#comparing-with-watson-discovery"},"Comparing with Watson Discovery")),"\n",o.createElement(t.p,null,"In the ",o.createElement(t.a,{href:"/watsonx/watsonxai/106"},"previous lab")," we completed a RAG use-case using Watson Discovery; in this lab we make use of a Vector database instead. While both fo these techniques can be used to achieve the same thing, they differ in their approach. Watson Discovery is primarily used as a document understanding and analysis platform, this works out very well in scenarios where large numbers of documents are used or needed to make business decisions. For example, a large corporation sifting through larges amounts of company financial documents to determine insights before making a merger or acquisition; or a law firm sifting through briefings and other law documents to conduct legal research for legal precedents. Vector databases work a bit different by creating embeddings, or arrays of large numbers, from tokens of text which are then stored into a database and can be quickly referenced when a similar embedding query of user input is supplied to the vector database. Both solutions achieve the same results for determining context, however they way they are impletmented is their biggest differentiator. With Watson Discovery, you can make use of a managed service and sleek UI to ingest and even annotate documents for future Natural Language queries; given its managed nature Watson Discovery also proves to be an easier tool to integrate into other servies using a simple API Key, Service URL, and Project ID; however, this simplicity comes at the cost of granular control. Vector databases can used as both as a managed ",o.createElement(t.em,null,"(i.e. PineconeDB)")," or unmanaged ",o.createElement(t.em,null,"(i.e. ChromaDB)")," service, unlike Watson Discovery which is only provided as a managed offering. Vector databases also provide more fine tuned controls such as using different embedding models (for vectorization) or tokenizers allowing users to customize the DB to better fit their unique use-case which can be much better approach the general one-size fits all approach of Watson Discovery. This additional controls, does come with added complexity making it harder to easily integrate VectorDB the same way you can with Watson Discovery. Overall both approaches are able to support the RAG model that is becoming popular with LLM's, since you have already completed RAG with Watson Discovery, this lab will explore doing the same with Vector databases."),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"run-the-vectordb--watsonxai-lab"},o.createElement(t.h2,{id:"run-the-vectordb--watsonxai-lab"},o.createElement(t.a,{href:"#run-the-vectordb--watsonxai-lab"},"Run the VectorDB + watsonx.ai lab")),"\n",o.createElement(t.p,null,"To run the lab for this section we will start by logging into the watsonx platform; after navigating to the watsonx home page ",o.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/wx/home"},"here"),", we will want to open the Notebook editor that we can use to run the notebook associated with this lab."),"\n",o.createElement(t.blockquote,null,"\n",o.createElement(t.p,null,"If you don't know how to acccess watsonx.ai or are unsure how to open to the notebook editor, follow ",o.createElement(t.a,{href:"/watsonx/watsonxai/100#how-do-i-import-a-jupyter-notebook-in-watsonxai"},"this reference link")," which will walk you through the process for accessing watsonx.ai and opening the Jupyter notebook editor."),"\n"),"\n",o.createElement(t.p,null,"Use the following values for this lab:"),"\n",o.createElement(t.ul,null,"\n",o.createElement(t.li,null,o.createElement(t.strong,null,"Name:")," ",o.createElement(t.code,null,"{uniqueid}-rag-chromadb")),"\n",o.createElement(t.li,null,o.createElement(t.strong,null,"Notebook URL:")," ",o.createElement(t.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/rag-with-chromadb.ipynb")),"\n"),"\n",o.createElement(t.p,null,"After your notebook is launched and created, you can follow along and run through each cell of the notebook to complete the lab. The notebook contains comments explaining what code in each cell does as well as any necessary input that you might need to provide in order to successfully run a cell."),"\n",o.createElement(t.p,null,"Good luck!")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?o.createElement(t,e,o.createElement(r,e)):r(e)},s=a(94184),l=a.n(s),c=a(24690),d=a(81140),h=a(48623),m=a(88531),u=a(13383),g=a(27315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:a=!0,title:n,timeToComplete:r,updated:i}}},children:s}=e,c=(0,o.useRef)(null),{0:p}=(0,o.useState)(""),b=(null===a||a)&&t;return o.createElement(o.Fragment,null,o.createElement(d.Z,{timeToComplete:r,updated:i},t[0].title||n||""),o.createElement(m.Z,{className:g.YS},o.createElement("article",{className:l()(g.Y2,!b&&g.ey),ref:c},o.createElement(h.Z,{components:{h1:()=>null}},s)),b&&o.createElement(u.Z,{itemsList:t,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:n}}}}=e;return o.createElement(c.Z,{pathname:t,title:a||n[0].title||void 0})};function w(e){return o.createElement(p,e,o.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-107-md-ed4b9047482c888599bd.js.map