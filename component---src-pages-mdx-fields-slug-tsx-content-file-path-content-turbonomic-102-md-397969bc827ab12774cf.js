"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4033],{9001:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",em:"em",strong:"strong",ol:"ol",li:"li",img:"img"},(0,l.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"102-explore-turbonomic-ui"},"102: Explore Turbonomic UI"),"\n",a.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",a.createElement(t.h2,{id:"goal"},a.createElement(t.a,{href:"#goal"},"Goal")),"\n",a.createElement(t.p,null,"Welcome to Turbonomic! In this lab, you will explore the Turbonomic user interface and familiarize yourself with its different parts."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,a.createElement(t.strong,null,"Note"),": You logged in with an admin user so you will be able to see the entire environment monitored by Turbonomic. Once you go through the ",a.createElement(t.strong,null,"Administration")," lab, you will learn that different access levels can be assigned to users and their dashboard will differ from what you see here.")),"\n",a.createElement(t.p,null,a.createElement(t.em,null,a.createElement(t.strong,null,"Tip:")," L3 Quiz Content denoted with 🟢")),"\n",a.createElement(t.h1,{id:"main-dashboard"},"Main Dashboard"),"\n",a.createElement(t.p,null,"Upon login, you will be presented with the main Turbonomic dashboard."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"The three tabs at the top give you access to global (full-environment) views."),"\n",a.createElement(t.li,null,"The Supply Chain on the left shows you the entities Turbonomic has discovered and their health."),"\n",a.createElement(t.li,null,"The pending actions shows you the actions you should take to optimize your environment and assure performance. We will explore this further in the ",a.createElement(t.strong,null,"Actions")," lab."),"\n",a.createElement(t.li,null,"These are Widgets. They are panels that contain information regarding your environment."),"\n",a.createElement(t.li,null,"On the far left is the Navigator – you can use this to access Turbonomic’s other features. 🟢"),"\n"),"\n",a.createElement(t.img,{src:"/1684146510694.2421089044/dashboard.png",alt:""}),"\n",a.createElement(t.p,null,"Click on ",a.createElement(t.strong,null,"On-Prem")," from the tabs above to view the health of your entire on-prem environment."),"\n",a.createElement(t.img,{src:"/1684146510702.24221089047/onprem.png",alt:""}),"\n",a.createElement(t.p,null,"Now click on the ",a.createElement(t.strong,null,"Cloud")," tab to narrow the focus on all of the cloud environments being monitored."),"\n",a.createElement(t.p,null,"Since cloud instances usually have dollar values associated with them, Turbonomic is able to provide you with a detailed report of what are the necessary investments you need to make to assure performance, and what would be the total cost savings as result of taking all actions."),"\n",a.createElement(t.p,null,"Keep in mind, the total dollar amount is IF you take ALL actions generated by Turbonomic for the cloud instances. As you can see in the example below, the cost savings is significant compared to the necessary investments. And this is while assuring application performance."),"\n",a.createElement(t.p,null,"Click on ",a.createElement(t.strong,null,"Show All")," under both ",a.createElement(t.strong,null,"Necessary Investments")," and ",a.createElement(t.strong,null,"Potential Savings")," to explore actions regarding each. We will go through actions thoroughly in the ",a.createElement(t.strong,null,"Actions")," lab."),"\n",a.createElement(t.img,{src:"/1684146510690.24171089043/cloud.png",alt:""}),"\n",a.createElement(t.h1,{id:"supply-chain"},"Supply chain"),"\n",a.createElement(t.p,null,"Let's take a closer look at the ",a.createElement(t.strong,null,"Supply Chain"),". From the three tabs above, click on ",a.createElement(t.strong,null,"Applications")," to go back to the main dashboard. Business applications are comprised of multiple application components running on lots of different infrastructure. Each circle in the supply chain represent an entity. Each entity has a name, number and is surrounded by a circle of colors. Green being desired state, Yellow represents efficiency actions, Red shows that the resources are congested. See the example below. 🟢"),"\n",a.createElement(t.img,{src:"/1684146510710.24241089052/supply-chain1.png",alt:""}),"\n",a.createElement(t.p,null,"The direction of arrows are also meaningful. They show the direction of purchase of resources. Turbonomic sees the resources available as a marketplace. Every entity can sell resources and/or buy them. For example, a VM buys resources from the host it is residing on, and then sells it to the application components running on it. In this scenario, a VM is both a consumer of resources (from the physical host) and is a supplier of resources (for the application components). See the image below."),"\n",a.createElement(t.img,{src:"/1684146510686.24171089042/buysell.png",alt:""}),"\n",a.createElement(t.p,null,"Click on the Host entity in the supply chain. This will open up a page with information regarding all your hosts, policies applied to them and list of actions for them."),"\n",a.createElement(t.p,null,"Explore each tab. The pending actions section shows you the actions that Turbonomic recommends that you tackle to assure performance, save cost, etc. It analyses your environment once you add it as a target and start providing the actions. We will go deeper into actions in the ",a.createElement(t.strong,null,"Actions")," lab."),"\n",a.createElement(t.img,{src:"/1684146510698.2421089045/host1.png",alt:""}),"\n",a.createElement(t.h1,{id:"navigator"},"Navigator"),"\n",a.createElement(t.p,null,"The Navigator will provide you quick access to different parts of Turbonomic. This toolbar will remain constant as you explore different parts of the environment."),"\n",a.createElement(t.img,{src:"/1684146510698.2421089046/nav1.png",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"ON")," Button will always bring you back to the main dashboard view. The main dashboard can be different depending on user access levels and customizations - you will learn more about this in the ",a.createElement(t.strong,null,"Custom Dashboard")," labs. 🟢"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Use the ",a.createElement(t.strong,null,"Search")," page to find the entities you are looking for. This page will provide categorized view of your entities and also provide you filters to narrow down the entity you are looking for."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1684146510706.24221089050/search1.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Planning page in Turbonomic is used to run simulations for what-if scenarios that will help you gain insight into what are the results of certain changes before making them. A plan has no impact on real-time environments. You will learn more about this important feature in ",a.createElement(t.strong,null,"Planning")," lab."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the Workload Placement Page, you can set up reservations to save the resources you will need to deploy VMs at a future date. Turbonomic calculates optimal placement for these VMs and then reserves the host and storage resources that they need."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Dashboard tab will allow you to create custom dashboards to fit your needs. You will learn more about this in the ",a.createElement(t.strong,null,"Custom Dashboard")," lab."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Reports")," tab will allow you to generate different reports of your environment and resources. By clicking on ",a.createElement(t.strong,null,"Reports")," a new window will open that contains a list of predefined reports under the ",a.createElement(t.strong,null,"General")," folder. Explore different reports."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1684146510706.24221089049/report2.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"The ",a.createElement(t.strong,null,"Settings")," page includes important links including, Policies, License, User Management, Targets, etc. You will explore ",a.createElement(t.strong,null,"Targets"),", ",a.createElement(t.strong,null,"Policies")," and ",a.createElement(t.strong,null,"User Management")," extensively in their corresponding labs."),"\n"),"\n",a.createElement(t.img,{src:"/1684146510706.24221089051/settings.png",alt:""}))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};var i=n(7315),s=n(2125),c=n(403),u=n(4690),m=n(4184),h=n.n(m);const p={table:c.y6,a:c.IW,blockquote:c.R4,SubHeader:c.bU,img:c.fb,code:c.dn,QuizAlert:c.SA},d=a.memo((function(e){let{children:t}=e;return a.createElement(l.Zo,{components:{...p}},t)})),g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:l}=e,o=(0,a.useRef)(null),{0:r,1:c}=(0,a.useState)("");(0,a.useEffect)((()=>{if(!o.current)return;const e=o.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&c(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const u=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement("article",{className:h()(i.Y,!u&&i.e),ref:o},a.createElement(d,null,l)),u&&a.createElement(s.Z,{itemsList:t,maxDepth:1,currSection:r}))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(u.Z,{pathname:t,title:n||l[0].title||void 0})};function E(e){return a.createElement(g,e,a.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-102-md-397969bc827ab12774cf.js.map