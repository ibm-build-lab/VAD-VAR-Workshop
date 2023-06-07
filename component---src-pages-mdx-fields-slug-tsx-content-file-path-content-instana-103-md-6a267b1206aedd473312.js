"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9466],{9185:function(e,n,t){t.r(n),t.d(n,{Head:function(){return E},default:function(){return f}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",img:"img",em:"em",strong:"strong",ol:"ol",li:"li",ul:"ul",code:"code"},(0,l.ah)(),e.components);return a.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-alerting-and-synthetics"},a.createElement(n.h1,{id:"103-alerting-and-synthetics"},"103: Alerting and Synthetics"),"\n",a.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alerting"},a.createElement(n.h2,{id:"alerting"},a.createElement(n.a,{href:"#alerting"},"Alerting")),"\n",a.createElement(n.p,null,"Instana currently supports 13 technologies for ",a.createElement(n.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=apis-alerting#alerting-integrations"},"alert channels"),". The full list of available technologies is below:"),"\n",a.createElement(n.img,{src:"/1686155956525.749781803/supported-channels.png",alt:"Instana supported alert channels"}),"\n"),a.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"adding-slack-as-an-alert-channel"},a.createElement(n.h2,{id:"adding-slack-as-an-alert-channel"},a.createElement(n.a,{href:"#adding-slack-as-an-alert-channel"},"Adding ",a.createElement(n.em,null,"Slack")," as an alert channel")),"\n",a.createElement(n.p,null,"In order to create alerts, we first need to create an alert channel. This is a simple process that involves adding an incoming webhook to ",a.createElement(n.em,null,"Slack")," for a specific ",a.createElement(n.em,null,"Slack")," channel. To avoid having each person create a new channel, we will just use an existing one for this lab."),"\n",a.createElement(n.p,null,"In your provided Slack Workspace please join the ",a.createElement(n.strong,null,"#instana-alerts")," channel in ",a.createElement(n.em,null,"Slack"),"."),"\n",a.createElement(n.p,null,"For the Webhook URL, look for the pinned message in the ",a.createElement(n.strong,null,"#instana-alerts")," channel that will contain the URL."),"\n"),a.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"creating-an-alert-channel"},a.createElement(n.h2,{id:"creating-an-alert-channel"},a.createElement(n.a,{href:"#creating-an-alert-channel"},"Creating an alert channel")),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"In the left-hand navigation sidebar, click on the ",a.createElement(n.strong,null,"Settings")," section."),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"In ",a.createElement(n.strong,null,"Settings")," page, on the left-hand navigation sidebar, click on the ",a.createElement(n.em,null,"Alert Channels")," section. Then click on the ",a.createElement(n.strong,null,"Add Alert Channel")," field and select ",a.createElement(n.strong,null,"Slack"),"."),"\n",a.createElement(n.img,{src:"/1686155956517.749781798/create-alert-channel.png",alt:"Create Alert Channel"}),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"From the newly opened ",a.createElement(n.strong,null,"Create Slack Alert Channel")," page, fill out the requested information using the following details;"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Name"),": ",a.createElement(n.code,null,"<your-name>-slack-channel")),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Webhook URL"),": ",a.createElement(n.em,null,"Refer to the pinned message in the ",a.createElement(n.strong,null,"#instana-alerts")," channel in your Slack workspace")),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Icon URL")," (optional): ",a.createElement(n.em,null,"Can be left blank or provide an PNG icon image URL to differentiate your Slack channel alerts")),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Channel Name"),": ",a.createElement(n.code,null,"instana-alerts")),"\n"),"\n"),"\n",a.createElement(n.p,null,"Once complete, hit ",a.createElement(n.strong,null,"Test Channel")," to ensure everything is setup correctly, you should see a green box indicating a successful channel test. Hit ",a.createElement(n.code,null,"Create")," to create you new Alert Channel"),"\n",a.createElement(n.img,{src:"/1686155956513.749781796/alert-channels-test-successful.png",alt:"Alert Channel Test"}),"\n"),"\n"),"\n"),a.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"sending-specific-events-to-the-channel"},a.createElement(n.h2,{id:"sending-specific-events-to-the-channel"},a.createElement(n.a,{href:"#sending-specific-events-to-the-channel"},"Sending specific events to the channel")),"\n",a.createElement(n.p,null,"With the channels already created, we can proceed to decide which alerts we want to push to ",a.createElement(n.em,null,"Slack"),". For this demo we will push all ",a.createElement(n.code,null,"robot-shop")," issues to the ",a.createElement(n.em,null,"Slack")," channel."),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"In the left-hand navigation sidebar, click on the ",a.createElement(n.strong,null,"Settings")," section."),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"In ",a.createElement(n.strong,null,"Settings")," page, on the left-hand navigation sidebar, click on the ",a.createElement(n.em,null,"Alerts")," section which is just above the Alert Channels. Then click on the ",a.createElement(n.strong,null,"New Alert")," field"),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"For the name use this pattern, ",a.createElement(n.code,null,"<your-name>-alert")),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"Under ",a.createElement(n.strong,null,"Events"),", choose the ",a.createElement(n.strong,null,"Alert on Event Type(s)")," option, and then toggle all of the options. This will allow us to showcase how different events show up in ",a.createElement(n.em,null,"Slack"),"."),"\n",a.createElement(n.img,{src:"/1686155956525.749781801/event-types.png",alt:"Set Event Types"}),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"Under ",a.createElement(n.strong,null,"Scope"),", choose the ",a.createElement(n.strong,null,"Application Perspective")," option, and then select the ",a.createElement(n.strong,null,"Add Application Perspectives")," option. Then ",a.createElement(n.strong,null,"Select All")," of the options."),"\n",a.createElement(n.p,null,a.createElement(n.em,null,"Note: If you are using Instana to observe multiple applications, you can add alerts from multiple different applications at once, or you can create multiple alerts, one for each perspective.")),"\n",a.createElement(n.img,{src:"/1686155956513.749781797/app-perspective.png",alt:"App perspective"}),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"Under Alert Channels, select the channel you created in the earlier steps ",a.createElement(n.strong,null,"<your-name>-slack-channel")),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"In the ",a.createElement(n.code,null,"Custom Payloads")," section, click ",a.createElement(n.strong,null,"Add Row")," and enter ",a.createElement(n.code,null,"workshop-user")," for the custom ",a.createElement(n.em,null,"key"),"; for the ",a.createElement(n.em,null,"value")," enter your name or something that uniquely identifies you such as your initials. Since we will all be using the same Slack Channel for this lab, these custom payloads will be able to help us identify which events belong to whose Instana instance."),"\n",a.createElement(n.img,{src:"/1686155956517.749781799/custom-payload.png",alt:"Custom Payload"}),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"Once complete click ",a.createElement(n.strong,null,"Create"),". This channel will allow Instana to post to the ",a.createElement(n.strong,null,"#instana-alerts")," ",a.createElement(n.em,null,"Slack")," channel. Wait a few minutes and watch for events within the ",a.createElement(n.strong,null,"#instana-alerts")," Slack channel, be sure to watch for events that contain your custom payload to uniquely identify the events from your Instana instance."),"\n"),"\n"),"\n",a.createElement(n.p,null,"That's it! Now as events are generated from Instana, they will be pushed to the ",a.createElement(n.em,null,"Slack")," channel. This powerful, flexible alerting method allows for need specific alerting, such as using different ",a.createElement(n.em,null,"Slack")," channels for alerts of different severity, or even paging out developers from PagerDuty for critical issues as they arise."),"\n"),a.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"synthetics"},a.createElement(n.h2,{id:"synthetics"},a.createElement(n.a,{href:"#synthetics"},"Synthetics")),"\n",a.createElement(n.p,null,"Synthetics are brand new in Instana! They allow for simulated user experiences in your application, and monitoring for various performance characteristics."),"\n",a.createElement(n.p,null,a.createElement(n.em,null,"Note: Synthetics are only available in a SaaS instance, not on-prem.")),"\n",a.createElement(n.p,null,"While outside the scope of this lab, given that we are using on-prem Instana instances, directions are provided here to help support you in the future, should you decice to try out this feature within the SaaS version of Instana."),"\n",a.createElement(n.p,null,"For this section we will be creating synthetics to monitor our application. In order to create a synthetic test, you must first have a Point of Presence (PoP) installed and running. Multiple PoPs can be deployed to clusters in various geographic regions to simulate user experience for those regions. Instructions for deploying PoPs can be found ",a.createElement(n.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=beta-pop-deployment"},"here.")," This is out of scope for this lab, and we will be using an existing PoP already registered in the Instana dashboard."),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"In the Instana SaaS instance (",a.createElement(n.a,{href:"https://sandbox-partner.instana.io/#/home"},"https://sandbox-partner.instana.io/#/home"),") navigate to ",a.createElement(n.strong,null,"Synthetic Monitoring")," in the left-hand side navigation, and click on ",a.createElement(n.strong,null,"Create New Test"),"."),"\n",a.createElement(n.img,{src:"/1686155956533.749781805/synthetic-create.png",alt:"Synthetic create"}),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"To get familiar with the functionality, we will create a ping synthetic."),"\n",a.createElement(n.p,null,"Under ",a.createElement(n.strong,null,"Step 2: Request Details")," add URL for the specific region of your application and choose ",a.createElement(n.strong,null,"synthetic-dc")," as the Point of Presence. Click Next."),"\n",a.createElement(n.img,{src:"/1686155956521.749781800/dc-pop.png",alt:"Add DC PoP"}),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"For Frequency choose 1 Minute, and then click next."),"\n",a.createElement(n.img,{src:"/1686155956529.749781804/syn-timing.png",alt:"Synthetic timing"}),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"Name your synthetic using this pattern ",a.createElement(n.code,null,"<your name>-synthetic"),", and provide an optional description. Check ",a.createElement(n.strong,null,"All Services")," and then click the ",a.createElement(n.strong,null,"Create")," button."),"\n",a.createElement(n.img,{src:"/1686155956525.749781802/karsten-synthetic.png",alt:"create synthetic ping test"}),"\n"),"\n"),"\n",a.createElement(n.p,null,"You can now view your synthetic test analytics and metrics under the ",a.createElement(n.strong,null,"Tests")," list")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},i=t(4184),o=t.n(i),s=t(4690),u=t(1140),m=t(2565),h=t(8531),d=t(3383),p=t(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:t=!0,title:l,timeToComplete:r,updated:c}}},children:i}=e,s=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),E=(null===t||t)&&n;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:r,updated:c},n[0].title||l||""),a.createElement(h.Z,{className:p.YS},a.createElement("article",{className:o()(p.Y2,!E&&p.ey),ref:s},a.createElement(m.Z,{components:{h1:()=>null}},i)),E&&a.createElement(d.Z,{itemsList:n,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:n,title:t||l[0].title||void 0})};function f(e){return a.createElement(g,e,a.createElement(c,e))}},2565:function(e,n,t){t.d(n,{Z:function(){return i}});var l=t(7294),a=t(1151),r=t(7563);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,l.memo)((function(e){let{children:n,components:t={}}=e;return l.createElement(a.Zo,{components:{...c,...t}},n)}))},3383:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(7294),a=t(7500),r=t(4184),c=t.n(r),i=t(6488);const o=function(e,n,t){return void 0===n&&(n=[]),void 0===t&&(t=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;n.splice(n.length,0,{depth:t,title:l,url:a}),r&&r.length>0&&o(r,n,t+1)})),n};var s=e=>{const{itemsList:n}=e,t=(0,l.useMemo)((()=>o(n[0].items||[])),[n]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return t.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),t.map(((e,n)=>{let{title:t,url:a}=e;return l.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:a},t)}))))}},7315:function(e,n,t){t.d(n,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,t){t.d(n,{Zo:function(){return i},ah:function(){return r}});var l=t(7294);const a=l.createContext({});function r(e){const n=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:i},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-103-md-6a267b1206aedd473312.js.map