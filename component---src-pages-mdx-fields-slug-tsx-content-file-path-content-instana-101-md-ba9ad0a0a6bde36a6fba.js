"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4200],{6318:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ol:"ol",li:"li",img:"img",strong:"strong",em:"em",code:"code"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-instana-ui"},a.createElement(t.h1,{id:"101-instana-ui"},"101: Instana UI"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"goal"},a.createElement(t.h2,{id:"goal"},a.createElement(t.a,{href:"#goal"},"Goal")),"\n",a.createElement(t.p,null,"The goal of this lab is to help explore / familiarize yourself with some key capabilities available in through the Instana UI, specifically monitoring of Kubernetes and services."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"logging-into-the-ui"},a.createElement(t.h2,{id:"logging-into-the-ui"},a.createElement(t.a,{href:"#logging-into-the-ui"},"Logging into the UI")),"\n",a.createElement(t.p,null,"For lab consistency, we will all make use of a shared read-only environment located at: ",a.createElement(t.a,{href:"https://play-with.instana.io"},"https://play-with.instana.io")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"You will be requested to provide an email in order to gain access to the sandbox, type in your work email or any email you are comfortable with sharing"),"\n",a.createElement(t.img,{src:"/1686166718603.5105789098/image-001-signup.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Once complete, you should see the default view for the Play-With-Instana sandbox dashboard"),"\n",a.createElement(t.img,{src:"/1686166718607.5107789099/image-002-dashboard.png",alt:""}),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"exploring-the-infrastructure-view"},a.createElement(t.h2,{id:"exploring-the-infrastructure-view"},a.createElement(t.a,{href:"#exploring-the-infrastructure-view"},"Exploring the Infrastructure View")),"\n",a.createElement(t.p,null,"Now that you have logged into the sandbox, we will spend a bit of time examining the ",a.createElement(t.strong,null,"Infrastructure")," View using the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the ",a.createElement(t.em,null,a.createElement(t.strong,null,"Infrastructure"))," icon on the left hand side of the navigation panel."),"\n",a.createElement(t.img,{src:"/1686166718607.5107789101/image-004-explore-infra.png",alt:""}),"\n",a.createElement(t.p,null,"Notice the 3D visualization of the different components for your infrastructure."),"\n",a.createElement(t.p,null,"This view provides an overview of all the monitored systems, grouped into zones of 3D (three-dimensional) rectangles"),"\n",a.createElement(t.p,null,"From the birds-eye view, each zone consists of pillars, and each pillar represents an Instana agent running on a respective system.\nIn the example image above and in your sandbox, the pillars represent worker nodes for a GKE Kubernetes cluster."),"\n",a.createElement(t.p,null,"Instana is able to visualize all of this information thanks to the Dynamic Graph and its support for over 250+ sensor technologies."),"\n",a.createElement(t.p,null,"As you zoom in to the pillar, you can see the smaller boxes ",a.createElement(t.em,null,"(pizza boxes)")," that make up the larger overall pillar. Each one of these smaller boxes represent an entity, or a sensor technology that Instana has discovered and is monitoring; Instana not only monitors each entity, but also provides associated information, represented as a small stack, such as the technology used for a given entity."),"\n",a.createElement(t.img,{src:"/1686166718619.5112789105/image-008-stack.png",alt:""}),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"filtering"},a.createElement(t.h2,{id:"filtering"},a.createElement(t.a,{href:"#filtering"},"Filtering")),"\n",a.createElement(t.p,null,"In large environments, it can be difficult to find the server or zone that you are looking for. Fortunately, there are a number of ways that you can search for things within the ",a.createElement(t.em,null,"Infrastructure view"),"."),"\n",a.createElement(t.img,{src:"/1686166718607.5107789102/image-005-filter.jpg",alt:""}),"\n",a.createElement(t.p,null,"Imagine you are monitoring hundreds of services, servers, and endpoints. While Instana, would be able to easily provide observability for all of them, it would be overwhelming if you are only looking for services or servers with high CPU cycles."),"\n",a.createElement(t.p,null,"The answer to this problem is to change the view using the icons for Tag View, Aggregate Metric View, Metric View & 3D, and Table toggle. In this case, we will be exploring the Metrics view."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"metrics-view"},a.createElement(t.h2,{id:"metrics-view"},a.createElement(t.a,{href:"#metrics-view"},"Metrics View")),"\n",a.createElement(t.p,null,"These metrics view allow for one to easily view useful metrics as part of the broader infrastructure view."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the bottom right-hand corner try changing the default view to show the aggregate CPU cycle time"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Cycle through all the different metrics"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"CPU Load"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"CPU Usage"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Free Memory or Memory Used (depending on what you see)"),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Reset the metric view and return to the default component view by clicking the metrics icon and select reset in the lower right corner."),"\n",a.createElement(t.img,{src:"/1686166718619.5112789103/image-006-metrics.gif",alt:""}),"\n",a.createElement(t.p,null,a.createElement(t.em,null,a.createElement(t.strong,null,"Note"),": While in the metrics view, the metrics icon itself will be highlighted as long as a metric is selected to remind you that it is turned on.")),"\n",a.createElement(t.p,null,"In addition to the options provided in the lower right-hand legend, Instana also makes use of the ",a.createElement(t.em,null,"lucene query language")," in the filter/search bar at the top of the page while in the Infrastructure view. We can make use of this search bar to filter entities and drill down to specific services or endpoints. Before beginning the search, hover on one of the towers and identify the hostname of one of the servers. For example ",a.createElement(t.code,null,"geke.<fully qualified hostname>")),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"query--search"},a.createElement(t.h2,{id:"query--search"},a.createElement(t.a,{href:"#query--search"},"Query / Search")),"\n",a.createElement(t.p,null,"Let's try out a query by looking for a specific host"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,'Click in the filter bar and select "Entity"'),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the dropdown-list start typing ",a.createElement(t.em,null,"host"),' and you will see the list filtered to "host". Once you see the single entry, select host.'),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"You should see ",a.createElement(t.em,null,"entity.host.name:"),'. After the ":", you can do a wildcard search. For example "entity.host.name:',a.createElement(t.em,null,"abc"),'". Type in a wildcard string that matches the beginning of the hostname you want to look for. We will specify "entity.host.name:*gke*" to filter only the GKE servers.'),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"One you have specified the filter, you'll see that the infrastructure view is filtered to just a set of GKE servers that matches your search."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,'Next we will type out another query to filter out entities within a specific zone. Type out "entity.zone:*',a.createElement(t.em,null,"eu"),'*" as the query search and notice we no longer see the GKE servers, but only a single AWS entity located in the ',a.createElement(t.code,null,"eu")),"\n",a.createElement(t.img,{src:"/1686166718619.5112789104/image-007-query.png",alt:""}),"\n",a.createElement(t.p,null,a.createElement(t.em,null,a.createElement(t.strong,null,"Note"),": the search filter engine supports many different queries, including AND, OR, and NOT conditions. More info on the lucene query language can be ",a.createElement(t.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=instana-filtering-dynamic-focus"},"found here"))),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Clear the filter at the top of the page by clicking on the ",a.createElement(t.em,null,"x")," before moving onto the next step."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"dependency-graph"},a.createElement(t.h2,{id:"dependency-graph"},a.createElement(t.a,{href:"#dependency-graph"},"Dependency Graph")),"\n",a.createElement(t.p,null,"Now lets take a look at another key Instana feature, automated discovery of dependencies thanks in part to the Dynamic Graph feature that is part of Instana"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Start by selecting the Applications icon from the left hand navigation menu"),"\n",a.createElement(t.img,{src:"/1686166718623.5112789108/image-011-app-menu.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Next select the ",a.createElement(t.code,null,"robot-shop with frontend")," from the list of available applications, once complete you should have a default application view like the one below. Then select the ",a.createElement(t.code,null,"Dependencies")," tab"),"\n",a.createElement(t.img,{src:"/1686166718623.5112789109/image-012-dep-menu.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"View the robot-shop application dependencies as discovered by Instana. Calls between services and endpoints are represented via lines, and the live traffic is visually represented as moving dots along the connection."),"\n",a.createElement(t.p,null,a.createElement(n,{text:"There is a quiz question related to dependencies."})," ",a.createElement(t.img,{src:"/1686166718627.5115789110/image-013-dep-tab.png",alt:""})),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"When viewing a specifc service for your application, note that the connections to other services are dimmed, allowing you to focus on the service or connections that you are interested in investigating."),"\n",a.createElement(t.p,null,a.createElement(n,{text:"There is a quiz question related to dependencies."})," ",a.createElement(t.img,{src:"/1686166718631.5115789111/image-014-dep-highlight.png",alt:""})),"\n"),"\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};var o=n(4184),c=n.n(o),s=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:i}}},children:o}=e,s=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),f=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:i},t[0].title||l||""),a.createElement(h.Z,{className:p.YS},a.createElement("article",{className:c()(p.Y2,!f&&p.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},o)),f&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:g})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function E(e){return a.createElement(g,e,a.createElement(i,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),a=n(1151),r=n(7563);const i={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var o=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...i,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),i=n.n(r),o=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:i()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-101-md-ba9ad0a0a6bde36a6fba.js.map