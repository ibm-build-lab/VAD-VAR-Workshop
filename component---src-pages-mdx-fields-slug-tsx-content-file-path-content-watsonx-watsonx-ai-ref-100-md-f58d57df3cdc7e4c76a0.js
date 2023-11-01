"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6117],{6793:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",ul:"ul",li:"li",p:"p",strong:"strong",h2:"h2",a:"a",em:"em",h3:"h3",code:"code"},(0,a.ah)(),e.components),{TokenizationApplet:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TokenizationApplet",!0),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"ai-glossary-of-terms"},l.createElement(t.h1,{id:"ai-glossary-of-terms"},"AI glossary of terms"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Foundation models")," are typically built using a specific kind of neural network architecture, called a transformer, which is designed to generate sequences of related data elements (for example, a sentence)."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Generative AI")," refers to a set of AI algorithms that can generate new outputs — such as text, images, code,  or audio — based on the training data, unlike traditional AI systems that are designed to recognize patterns and make predictions. Sometimes the AI that powers these solutions is referred to as decoders."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Hallucination")," is a well-known phenomenon in large language models (LLMs) in which the system provides an answer that is factually incorrect, irrelevant, or nonsensical because of limitations in its training data and architecture; more concerning is the hallucinated answer sounds plausible."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"A ",l.createElement(t.strong,null,"large language model (LLM)")," is a type of machine learning model that has been trained on large quantities of unlabeled text using self-supervised learning and can perform a variety of natural language processing (NLP) tasks (even when that language is a programming language). Output may range from books, articles, social media posts, online conversations, and even code. The architecture of an LLM consists of layers of neural networks that learn to generate language in a way that is similar to how humans use language."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Natural language processing (NLP)")," is the technology that gives computers the ability to understand text and spoken words in much the same way human beings can. NLP combines computational linguistics — rule-based modeling of human language — with statistical, machine learning, and deep learning models. These technologies enable computers to process human language in the form of text or voice data and to ‘understand’ its full meaning, complete with the speaker or writer’s intent and sentiment."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Prompt")," – input and query that users or programs use to interface with foundation models so they can respond with useful/desirable results. A prompt can be a simple NLP question, or it can be a large body of text. The structure of the prompt is very important in eliciting proper responses from foundation models."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Prompt Engineering")," – Prompt engineering is the process of crafting prompt text to best effect a given model and parameters."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Decoder-only model")," – Models designed explicitly for generative AI use cases; represents the architectures used in GPT-3 and other popular Large Language Models."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Encoder-only model")," – Models with best cost performance trade-off for non-generative use cases but require task-specific labeled data for fine-tuning.\n "),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Encoder-decoder model"),"  - Models that support both generative and non-generative use cases. These have the best cost-performance trade-off for generative use cases when the input is large but the generated output is small."),"\n"),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"tokens"},l.createElement(t.h2,{id:"tokens"},l.createElement(t.a,{href:"#tokens"},"Tokens")),"\n",l.createElement(t.p,null,"A ",l.createElement(t.em,null,"token")," is a collection of characters that has semantic meaning for a model. Tokenization is the process of converting the words in your prompt into tokens."),"\n",l.createElement(t.p,null,"Within the ",l.createElement(t.strong,null,"Prompt Lab")," text is converted to tokens before being processed by foundation models."),"\n",l.createElement(t.p,null,"The correlation between words and tokens is complex:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Sometimes a single word is broken into multiple tokens"),"\n",l.createElement(t.li,null,"The same word might be broken into a different number of tokens, depending on context (such as: where the word appears, or surrounding words)"),"\n",l.createElement(t.li,null,"Spaces, newline characters, and punctuation are sometimes included in tokens and sometimes not"),"\n",l.createElement(t.li,null,"The way words are broken into tokens varies from language to language"),"\n",l.createElement(t.li,null,"The way words are broken into tokens varies from model to model"),"\n",l.createElement(t.li,null,"For a rough idea, a sentence that has 10 words could be 15 to 20 tokens."),"\n"),"\n",l.createElement(t.p,null,"The raw output from a model is also tokens. In the Prompt Lab in IBM watsonx.ai, the output tokens from the model are converted to words to be displayed in the prompt editor."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"illustrative-example"},l.createElement(t.h3,{id:"illustrative-example"},l.createElement(t.a,{href:"#illustrative-example"},"Illustrative Example")),"\n",l.createElement(t.p,null,"Below is an interactive demo of the tokenization algorithm used by the ",l.createElement(t.code,null,"google/flan-t5-small")," model."),"\n",l.createElement(n))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var s=n(4184),i=n.n(s),c=n(4690),m=n(1140),u=n(8623),d=n(8531),h=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:s}=e,c=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),f=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(d.Z,{className:p.YS},l.createElement("article",{className:i()(p.Y2,!f&&p.ey),ref:c},l.createElement(u.Z,{components:{h1:()=>null}},s)),f&&l.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:g})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function E(e){return l.createElement(g,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-ref-100-md-f58d57df3cdc7e4c76a0.js.map