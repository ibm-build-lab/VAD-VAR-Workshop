"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5240],{549:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",h3:"h3",ol:"ol",img:"img",em:"em"},(0,a.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"103-connect-instana-to-turbonomic"},"103: Connect Instana to Turbonomic"),"\n",l.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",l.createElement(t.h2,{id:"goal"},l.createElement(t.a,{href:"#goal"},"Goal")),"\n",l.createElement(t.p,null,"In this lab, you will add one target to your Turbonomic environment"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"An application performance monitoring target - Instana"),"\n"),"\n",l.createElement(t.h2,{id:"adding-the-instana-target"},l.createElement(t.a,{href:"#adding-the-instana-target"},"Adding the Instana target")),"\n",l.createElement(t.p,null,"Turbonomic supports discovery of applications that are managed by APM tools - in this case the Instana platform. Turbonomic includes the discovered information about these applications in its calculations for environment health."),"\n",l.createElement(t.p,null,"We have already prepared an Instana server for your environment. This server is monitoring two applications: ",l.createElement(t.strong,null,"RobotShop")," and ",l.createElement(t.strong,null,"Quote of the Day"),". In this section, you will go through steps to add this Instana instance to your Turbonomic environment."),"\n",l.createElement(t.h3,{id:"generate-instana-api-token"},l.createElement(t.a,{href:"#generate-instana-api-token"},"Generate Instana API Token")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To connect Instana to Turbonomic you will need API token from your Instana server so that Turbonomic can authenticate the connection. To generate this key navigate to your bastion VM and click on the Instana tab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"This will take you to the Instana login page. Log in using your Instana credentials. Instana credentials are provided in ",l.createElement(t.strong,null,"Turbo-PoT-Credentials")," tab."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"/1683923090876.35231089062/instanatab.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Once you have logged in, click on the gear icon on the left menu to open settings."),"\n"),"\n",l.createElement(t.img,{src:"/1683923090860.3521089058/instana2.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"In the settings page, under ",l.createElement(t.strong,null,"Team Settings")," click on ",l.createElement(t.strong,null,"API Tokens"),". Then click on ",l.createElement(t.strong,null,"Add New Token"),"."),"\n"),"\n",l.createElement(t.img,{src:"/1683923090864.35231089059/instana3.png",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"Give your token a unique name like ",l.createElement(t.em,null,"api_YourInitials"),". Then scroll down and click on ",l.createElement(t.strong,null,"Save"),". You can leave all other settings as default."),"\n"),"\n",l.createElement(t.img,{src:"/1683923090868.35231089060/instana4.png",alt:""}),"\n",l.createElement(t.img,{src:"/1683923090872.35231089061/instana5.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Now click on the eye icon to reveal your API token and take a note of it. You will need this key in the next section."),"\n"),"\n",l.createElement(t.h3,{id:"add-instana-as-a-target"},l.createElement(t.a,{href:"#add-instana-as-a-target"},"Add Instana as a target")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Navigate to your Turbonomic console on the bastion VM, then click on ",l.createElement(t.strong,null,"Settings")," from the left navigator."),"\n"),"\n",l.createElement(t.img,{src:"/1683923090888.35231089066/turbo-main.png",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Tip"),": If the ",l.createElement(t.strong,null,"Settings")," does not appear in the left navigator, try zooming out by pressing the Ctrl and minus (-) buttons")),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Select the ",l.createElement(t.strong,null,"Target Configuration")," option. This will open up the page containing all configured targets."),"\n"),"\n",l.createElement(t.img,{src:"/1683923090884.35231089065/target-settings.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Click on ",l.createElement(t.strong,null,"New Target"),". This will open up a page with a list of available target types for this environment."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Tip"),": This is not an extensive list of available target types. To view the full list and supported versions visit the ",l.createElement(t.a,{href:"https://www.ibm.com/docs/en/tarm/8.8.0?topic=overview-turbonomic-targets"},"documentation site"),".")),"\n",l.createElement(t.img,{src:"/1683923090884.35231089064/target-page.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"From the list select ",l.createElement(t.strong,null,"Applications and Databases"),". Then select ",l.createElement(t.strong,null,"Instana"),"."),"\n"),"\n",l.createElement(t.img,{src:"/1683923090852.3521089054/add-instana-1.png",alt:""}),"\n",l.createElement(t.img,{src:"/1683923090856.3521089055/add-instana-2.png",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"To add Instana all you need is the host name or IP address of your instana server (10.0.0.2), and an API token generated from your Instana backend. Once you filled out these information click on ",l.createElement(t.strong,null,"Add")," at the bottom of the page. Since we don't have a proxy we can leave those parts empty."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Note"),": If you see the host name and/or IP address is prepopulated as administrator and a password in this step, clear both and type in your information.")),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Tip"),": Keep in mind, the hostname or IP address must be visible to Turbonomic. If you have your Instana and Turbonomic instances installed in different networks or the communication between them is blocked by a firewall, the target configuration will fail.")),"\n",l.createElement(t.img,{src:"/1683923090856.3521089056/add-instana-3.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Your newly added Instana target will appear in your list of targets. Check the ",l.createElement(t.strong,null,"status")," and ",l.createElement(t.strong,null,"severity"),", it must show as ",l.createElement(t.strong,null,"Validated")," and ",l.createElement(t.strong,null,"Normal"),". Congratulations, you have successfully connected your Instana environment to Turbonomic."),"\n"),"\n",l.createElement(t.img,{src:"/1683923090888.35231089067/validated.png",alt:""}),"\n",l.createElement(t.p,null,"Now that you have added a new target, allow 15 minutes for Turbonomic to run discovery and add the data from Instana. To check this, look at your top business applications and look for two applications that will be added in from Instana: ",l.createElement(t.strong,null,"Quote of the Day"),", and ",l.createElement(t.strong,null,"RobotShop"),"."),"\n",l.createElement(t.img,{src:"/1683923090880.35231089063/listapps.png",alt:""}),"\n",l.createElement(t.img,{src:"/1683923090860.3521089057/apps.png",alt:""}))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var i=n(7315),s=n(2125),c=n(403),m=n(4690),u=n(4184),d=n.n(u);const g={table:c.y6,a:c.IW,blockquote:c.R4,SubHeader:c.bU,img:c.fb,code:c.dn,QuizAlert:c.SA},p=l.memo((function(e){let{children:t}=e;return l.createElement(a.Zo,{components:{...g}},t)})),h=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:a}=e,r=(0,l.useRef)(null),{0:o,1:c}=(0,l.useState)("");(0,l.useEffect)((()=>{if(!r.current)return;const e=r.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&c(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const m=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement("article",{className:d()(i.Y,!m&&i.e),ref:r},l.createElement(p,null,a)),m&&l.createElement(s.Z,{itemsList:t,maxDepth:1,currSection:o}))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(m.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(h,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-103-md-313866928093292fd2ca.js.map