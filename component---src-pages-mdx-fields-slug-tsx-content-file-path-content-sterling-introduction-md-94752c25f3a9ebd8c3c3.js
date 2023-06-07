"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9234],{185:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var l=n(1151),a=n(7294);function i(e){const t=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",ul:"ul",li:"li",img:"img"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"introduction"},a.createElement(t.h1,{id:"introduction"},"Introduction"),"\n",a.createElement(t.p,null,"Welcome to the IBM Sterling Data Exchange Level 3 demonstration workshop! The goal of this guide is to provide IBM and Business Partner technical sellers with the knowledge and tools to perform hands-on demonstrations of IBM Sterling B2B Integrator."),"\n",a.createElement(t.p,null,"In addition to completing all the steps in this demonstration guide, to obtain the associated IBM Sterling Data Exchange Level 3 badge:"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"IBM Technical Sellers")," must develop and record a Stand & Deliver presentation. This video is intended to simulate delivery of a “live” demo in front of a client — on camera. IBMers will have flexibility in defining a hypothetical client, the pain points the client has, and the goals they aspire to achieve. The recording will then cover the seller’s hands-on demonstration and pitch to the client the value of the IBM solution using the environment and techniques of this lab. Specific criteria that must be demonstrated as part of the Stand & Deliver recordings is provided within the documentation that accompanies the Level 3 course in Your Learning."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Business Partners")," must pass an accreditation quiz after completing this demonstration guide. The quiz consists of multiple choice questions, with four possible responses (and only one correct answer) for each question. The quiz verifies use of the demonstration environment and not general knowledge of the offering.",a.createElement(t.strong,null,"Hint: keep the demonstration guide and the associated IBM Technology Zone (TechZone) environment active while completing the quiz.")),"\n",a.createElement(n,{text:"Topics that are important for the quiz are marked in a note like this"}),"\n",a.createElement(t.p,null,"Before jumping to the Demonstration Overview, please read the guidance below. ",a.createElement(t.strong,null,"Reading and understanding the information will save time while completing the steps in this guide.")),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"recommended-browsers"},a.createElement(t.h2,{id:"recommended-browsers"},a.createElement(t.a,{href:"#recommended-browsers"},"Recommended browsers")),"\n",a.createElement(t.p,null,"It is recommended to use either Firefox or Safari web browsers. There has been at least one instance reported using the Chrome browser and some popup menus not being populated and some popup dialogs not appearing. No testing has been done using the Microsoft Edge browser."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"helpful-tips-for-using-this-demonstration-guide-and-environment"},a.createElement(t.h2,{id:"helpful-tips-for-using-this-demonstration-guide-and-environment"},a.createElement(t.a,{href:"#helpful-tips-for-using-this-demonstration-guide-and-environment"},"Helpful tips for using this demonstration guide and environment")),"\n",a.createElement(t.p,null,"Throughout the guide, images are used to help guide students through the demonstration."),"\n",a.createElement(t.p,null,"The following styles of highlighting are utilized in images:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Action highlight box: Illustrates where to click, enter, or select an item:"),"\n"),"\n",a.createElement(t.img,{src:"/1686102517435.72461104168/ClickActionRectangle.png",alt:"image"}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Path/explore highlight box: Illustrates one of two things:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"the path to follow to get to a specific location in the user interface"),"\n",a.createElement(t.li,null,"areas to explore"),"\n"),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686102517535.72311104317/PathExploreHighlight.png",alt:"image"}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Copy to clipboard box: The text is copied to the clipboard. Click the copy icon (highlighted below) and then paste using the operating system's paste function. For example, entering ++ctrl++",a.createElement(t.strong,null,"+v"),", ++cmd++",a.createElement(t.strong,null,"+v"),", or right-click and select paste."),"\n"),"\n",a.createElement(t.img,{src:"/1686102517543.72311104328/Usage-Clipboard.png",alt:"image"}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"acronyms"},a.createElement(t.h2,{id:"acronyms"},a.createElement(t.a,{href:"#acronyms"},"Acronyms")),"\n",a.createElement(t.p,null,"The following acronyms are used throughout this demonstration guide:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Applicability Statement 2 (AS2)"),"\n",a.createElement(t.li,null,"Application programming interfaces (APIs)"),"\n",a.createElement(t.li,null,"Artificial Intelligence (AI)"),"\n",a.createElement(t.li,null,"Business Partner (BP)"),"\n",a.createElement(t.li,null,"Electronic Data Interchange (EDI)"),"\n",a.createElement(t.li,null,"IBM Sterling Business to Business Integrator (B2Bi)"),"\n",a.createElement(t.li,null,"IBM Sterling Partner Engagement Manager (PEM)"),"\n",a.createElement(t.li,null,"IBM Technology Zone (ITZ)"),"\n",a.createElement(t.li,null,"Red Hat OpenShift on IBM Cloud (ROKS)"),"\n",a.createElement(t.li,null,"User Interface (UI)"),"\n",a.createElement(t.li,null,"Virtual Machine (VM)"),"\n",a.createElement(t.li,null,"Yet Another Markup Language (YAML)"),"\n"),"\n",a.createElement(t.p,null,"It is now time to proceed to the Demonstration Overview.")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)};var o=n(4184),s=n.n(o),c=n(4690),m=n(1140),u=n(2565),d=n(8531),h=n(3383),g=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:i,updated:r}}},children:o}=e,c=(0,a.useRef)(null),{0:p}=(0,a.useState)(""),f=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:i,updated:r},t[0].title||l||""),a.createElement(d.Z,{className:g.YS},a.createElement("article",{className:s()(g.Y2,!f&&g.ey),ref:c},a.createElement(u.Z,{components:{h1:()=>null}},o)),f&&a.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:p})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function E(e){return a.createElement(p,e,a.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),a=n(1151),i=n(7563);const r={table:i.y6,a:i.IW,blockquote:i.R4,SubHeader:i.bU,img:i.fb,code:i.dn,QuizAlert:i.SA,Danger:i.b0,Warning:i.v3,CopyText:i.O5};var o=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...r,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(7500),i=n(4184),r=n.n(i),o=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:i}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),i&&i.length>0&&s(i,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),i=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:r()("TableOfContents-module--link--b292b",i===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return i},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",i="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return i}});var l=n(7294);const a=l.createContext({});function i(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-introduction-md-94752c25f3a9ebd8c3c3.js.map