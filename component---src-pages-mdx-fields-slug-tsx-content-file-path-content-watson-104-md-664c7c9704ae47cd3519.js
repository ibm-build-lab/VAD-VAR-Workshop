"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8602],{6135:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return f}});var a=n(1151),r=n(7294);function o(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",h3:"h3",ol:"ol",li:"li",img:"img",ul:"ul",blockquote:"blockquote"},(0,a.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"104-analytics"},"104: Analytics"),"\n",r.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",r.createElement(t.h2,{id:"in-this-lesson"},r.createElement(t.a,{href:"#in-this-lesson"},"In this lesson")),"\n",r.createElement(t.p,null,"Learn about Watson Assistant’s analytics, a powerful capability that takes the guesswork out of\nimproving your assistant’s performance."),"\n",r.createElement(t.h2,{id:"prerequisites"},r.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",r.createElement(t.p,null,"Complete this section with the assistant you used in the 103 section ",r.createElement(t.strong,null,"or")," your own assistant. If you\nwant to use your own assistant, you must ",r.createElement(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-admin-backup-restore#backup-restore-import"},"upload")," the following ",r.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Watson-Asst-Lab/main/action-skills/begin-104-action-skill.json"},"Action skill")," which reflects the\nskill after completing section 103."),"\n",r.createElement(t.h2,{id:"introducing-analytics"},r.createElement(t.a,{href:"#introducing-analytics"},"Introducing Analytics")),"\n",r.createElement(t.p,null,"Welcome back to the Watson Assistant hands-on lab! In this section, you will play the role of a\nbuilder or a product manager for a virtual assistant, exploring its Analyze page."),"\n",r.createElement(t.h3,{id:"landing-on-the-analytics-page"},r.createElement(t.a,{href:"#landing-on-the-analytics-page"},"Landing on the Analytics page")),"\n",r.createElement(t.p,null,"Unless you thoroughly tested or experimented with your assistant as you completed previous sections of this lab, your assistant will not have a lot of data to populate its analytics. To see them:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Click the ",r.createElement(t.strong,null,"Analyze")," option in the left-hand menu."),"\n",r.createElement(t.li,null,"Once there ensure you looking at the ",r.createElement(t.strong,null,"Draft")," environment."),"\n"),"\n",r.createElement(t.img,{src:"/1683140666612.3591590171/image-000.jpg",alt:""}),"\n",r.createElement(t.p,null,"The Analyze page displays high-level metrics on the performance of your assistant. These metrics and their underlying data are populated in real time. Take a moment to look around – you will see metrics such as number of unique users, conversations, and requests handled by the assistant in the specified date range."),"\n",r.createElement(t.h3,{id:"adding-data-to-the-analyze-page-via-lendyr"},r.createElement(t.a,{href:"#adding-data-to-the-analyze-page-via-lendyr"},"Adding data to the Analyze page via Lendyr")),"\n",r.createElement(t.p,null,"Open your assistant on the Lendyr using the link you created in the previous section to embed your assistant. Try out a few different conversations. To engage in an additional separate conversation with your assistant there should be a ",r.createElement(t.strong,null,"Restart")," button in upper-left menu."),"\n",r.createElement(t.img,{src:"/1683140666616.3591590172/image-001.jpg",alt:""}),"\n",r.createElement(t.img,{src:"/1683140666616.3591590173/image-002.jpg",alt:""}),"\n",r.createElement(t.p,null,"After this return to the ",r.createElement(t.strong,null,"Analyze")," page. Click the ",r.createElement(t.strong,null,"Refresh")," button in the top-right corner to pull in the latest data from the conversation you just had with the assistant."),"\n",r.createElement(t.img,{src:"/1683140666616.3591590174/image-003.jpg",alt:""}),"\n",r.createElement(t.p,null,"When the page refreshes, you should now see a slightly higher request and conversation count."),"\n",r.createElement(t.h3,{id:"adding-data-to-the-analyze-page-via-preview"},r.createElement(t.a,{href:"#adding-data-to-the-analyze-page-via-preview"},"Adding data to the Analyze page via Preview")),"\n",r.createElement(t.p,null,"Imagine you are a builder who has finished writing a set of actions that address a new use case."),"\n",r.createElement(t.p,null,"You need a way to share your assistant with a testing or quality assurance (QA) team, so they can go test the updated actions before you deploy them to a live or production environment. In order to do so:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Go the the ",r.createElement(t.strong,null,"Preview")," page for your assistant."),"\n",r.createElement(t.li,null,"Then click the ",r.createElement(t.strong,null,"Copy link to share")," button."),"\n",r.createElement(t.li,null,"Open this link in a new tab.","\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"As a builder or product manager, you can copy this shared link and send it to a testing team. The testing team can then use this shared link to access and test the assistant."),"\n"),"\n"),"\n"),"\n",r.createElement(t.img,{src:"/1683140666616.3591590175/image-004.jpg",alt:""}),"\n",r.createElement(t.p,null,"Once the testers access the system, you will be able to see the testing team’s conversation data appear in the Analyze page. Since you opened a new tab, imagine you are one of the testers. Go ahead and have a conversation with the assistant. Then, return to the Analyze page in your assistant, then refresh it again to pull in the data from your latest conversation."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"Note that conversations with the assistant via a Preview link generate data in the Draft environment. You can change the Analyze page to filter between Draft and Live environment data. The Draft environment data comes from the Preview page, and the Live environment data comes from the assistant in front of real end users."),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)};var l=n(7315),i=n(2125),c=n(403),u=n(4690),h=n(4184),m=n.n(h);const d={table:c.y6,a:c.IW,blockquote:c.R4,SubHeader:c.bU,img:c.fb,code:c.dn,QuizAlert:c.SA},p=r.memo((function(e){let{children:t}=e;return r.createElement(a.Zo,{components:{...d}},t)})),g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:a}=e,o=(0,r.useRef)(null),{0:s,1:c}=(0,r.useState)("");(0,r.useEffect)((()=>{if(!o.current)return;const e=o.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&c(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const u=(null===n||n)&&t;return r.createElement(r.Fragment,null,r.createElement("article",{className:m()(l.Y,!u&&l.e),ref:o},r.createElement(p,null,a)),u&&r.createElement(i.Z,{itemsList:t,maxDepth:1,currSection:s}))},y=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return r.createElement(u.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return r.createElement(g,e,r.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watson-104-md-664c7c9704ae47cd3519.js.map