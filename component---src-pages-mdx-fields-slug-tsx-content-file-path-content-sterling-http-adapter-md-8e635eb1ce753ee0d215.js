"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7840],{6859:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",img:"img",blockquote:"blockquote",pre:"pre",span:"span"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"bonus---configure-a-secured-http-endpoint"},a.createElement(t.h1,{id:"bonus---configure-a-secured-http-endpoint"},"Bonus - Configure a secured HTTP endpoint"),"\n",a.createElement(t.p,null,"In this activity, you will learn more about how services and adapters can be configured in Sterling B2B Integrator. Like the Configuration Part 1 activity, since the steps in this lab will deploy a new service in the cluster, the first section where the service is configured will be performed once per cluster."),"\n",a.createElement(t.p,null,"For the last section, each lab user could configure their own route in the ",a.createElement(t.code,null,"b2bi")," project if desired."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"add-a-http-service-adapter"},a.createElement(t.h2,{id:"add-a-http-service-adapter"},a.createElement(t.a,{href:"#add-a-http-service-adapter"},"Add a HTTP Service Adapter")),"\n",a.createElement(t.p,null,"Sterling B2B Integrator includes a number of pre-installed adapters that can be configured to send and receive data. To make this section a little different from Configuration Part 1, instead of configuring the HTTP Service Adapter for the ASI (application server-independent) node, it will be configured on the Adapter Container (AC) node. The AC node is a supplemental node to the ASI and allows Service Adapters to be distributed off the ASI."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Return to the OpenShift ",a.createElement(t.strong,null,"Routes")," list and open the ",a.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route-dashboard")," route. When prompted, log in using the ",a.createElement(t.strong,null,"admin")," user. Then expand ",a.createElement(t.strong,null,"Deployment")," -> ",a.createElement(t.strong,null,"Services")," and click on ",a.createElement(t.strong,null,"Configuration"),"."),"\n",a.createElement(t.img,{src:"/1686261651395.29251089471/HSA_ServiceConfigMenu.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Type ",a.createElement(t.strong,null,"HTTP Server Adapter")," for the Service Name in the Search panel and click on ",a.createElement(t.strong,null,"Go!"),"."),"\n",a.createElement(t.img,{src:"/1686261651411.2931089478/HSA_ServiceSearch.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Find the row with ",a.createElement(t.strong,null,"Http Server Adapter")," in the name column and click on the ",a.createElement(t.strong,null,"copy")," text/icon."),"\n",a.createElement(t.img,{src:"/1686261651403.29271089475/HSA_ServiceCopy.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Change the name to ",a.createElement(t.strong,null,"AC Hosted Authenticating Http Server Adapter"),", scroll in the ",a.createElement(t.strong,null,"Environment")," panel to select the ",a.createElement(t.strong,null,"node 1 Adapter Container1")," resource. Then, click on ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.img,{src:"/1686261651399.29271089472/HSA_ServiceConfigName.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To find a port to use for the Http Server Adapter instance, go back to the OpenShift console and the ",a.createElement(t.strong,null,"Services")," list. This time, select the ",a.createElement(t.strong,null,"sterling-fg-b2bi-ac-backend-svc")," service and note the port used for the ",a.createElement(t.code,null,"adapters-2")," Service port."),"\n",a.createElement(t.img,{src:"/1686261651383.29221089460/HSA_OCPACBackendSvcPort.png",alt:"image"}),"\n",a.createElement(t.p,null,"Notice that the Kubernetes service and the node port are identical. Techincally, they do not need to match. The important part to note is the port number associated with the service, or the pod port if given. Since the pod port name matches the service port mapping name, the correct port to choose is ",a.createElement(t.code,null,"30352"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Enter the port from the service in for the ",a.createElement(t.strong,null,"HTTP Listen Port"),", change ",a.createElement(t.strong,null,"User Authentication Required")," to ",a.createElement(t.strong,null,"Yes"),". Then, click on ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.img,{src:"/1686261651399.29271089473/HSA_ServiceConfigPort.png",alt:"image"}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"There is a warning on this page that not enabling SSL would result in a weak security configuration. This is generally true, but we will mitigate the security exposure of credentials going over the Internet in cleartext when we create the ",a.createElement(t.strong,null,"Route")," to expose the service using OpenShift."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Review the option to specify a particular group for access to the service, but do not make changes. Click on ",a.createElement(t.strong,null,"Save"),"."),"\n",a.createElement(t.img,{src:"/1686261651395.29251089470/HSA_ServiceConfigGroup.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the confirmation page, scroll down to find the ",a.createElement(t.strong,null,"URI: /hello")," entry. Notice that the Business Process to run is called ",a.createElement(t.strong,null,"Hello World")),"\n",a.createElement(t.img,{src:"/1686261651391.29251089468/HSA_ServiceCheckBP.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Continue scrolling to the bottom of the confirmation page and click on ",a.createElement(t.strong,null,"Finish"),"."),"\n",a.createElement(t.img,{src:"/1686261651391.29251089469/HSA_ServiceCheckFinish.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on ",a.createElement(t.strong,null,"Return")," to go back to the Services Configuration panel."),"\n",a.createElement(t.img,{src:"/1686261651403.29271089474/HSA_ServiceConfigReturn.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Check the status of the new adapter. Using ",a.createElement(t.strong,null,"Select Node"),", change to ",a.createElement(t.strong,null,"node1AC1"),"."),"\n",a.createElement(t.img,{src:"/1686261651407.29271089476/HSA_ServiceListAC1.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the exclamation mark for the service adapter to check the running status (it will be automatically enabled since it was copied from an enabled service adapter)."),"\n",a.createElement(t.img,{src:"/1686261651391.29251089467/HSA_ServiceCheckAC1.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Note the progression in timestamps ending with ",a.createElement(t.strong,null,"REGISTER_JNDI"),", this shows the service adapter is operating. Click on ",a.createElement(t.strong,null,"CLOSE")," in the upper right to dismiss the panel."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"explore-the-sample-business-process"},a.createElement(t.h2,{id:"explore-the-sample-business-process"},a.createElement(t.a,{href:"#explore-the-sample-business-process"},"Explore the sample Business Process")),"\n",a.createElement(t.p,null,"Before configuring an OpenShift Route to access the service, spend a moment reviewing the sample Business Process that will be invoked when the ",a.createElement(t.code,null,"/hello")," endpoint is accessed."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"On the main B2Bi left navigation, expand ",a.createElement(t.strong,null,"Business Process")," -> ",a.createElement(t.strong,null,"Manager"),". Then, type ",a.createElement(t.strong,null,"Hello World")," as the Process Name in the Search panel. Finally, click on ",a.createElement(t.strong,null,"Go!"),"."),"\n",a.createElement(t.img,{src:"/1686261651379.29221089455/HSA_BPSearch.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the Process Name to open a view of the process."),"\n",a.createElement(t.img,{src:"/1686261651379.29221089454/HSA_BPOpen.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Expand the window so that the full business process is shown."),"\n",a.createElement(t.img,{src:"/1686261651375.29221089452/HSA_BPHelloWorld.png",alt:"image"}),"\n",a.createElement(t.p,null,"Without getting too technical, it is clear to see that the sequence of this business process has three operations. The first operation generates a xml document with a data element containing ",a.createElement(t.code,null,"Hello World!"),'. The second operation invokes an XSL Transformation using a stylesheet called "HelloWorld". If you were to look up this XSL stylesheet in the B2Bi dashboard you would see that it takes the data from the xml document and wraps it with some basic html tags. The last operation creates a http response sending the data from the XSL Transformation. In effect, when this business process is invoked it will generate a response like this to the caller:'),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-html"},a.createElement(t.span,{className:"hljs-tag"},"<",a.createElement(t.span,{className:"hljs-name"},"html"),">"),"\n  ",a.createElement(t.span,{className:"hljs-tag"},"<",a.createElement(t.span,{className:"hljs-name"},"body"),">"),"\n    Hello World!\n  ",a.createElement(t.span,{className:"hljs-tag"},"</",a.createElement(t.span,{className:"hljs-name"},"body"),">"),"\n",a.createElement(t.span,{className:"hljs-tag"},"</",a.createElement(t.span,{className:"hljs-name"},"html"),">"),"\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Close the view of the business process by clicking on ",a.createElement(t.strong,null,"CLOSE")," in either the upper right or lower right corner."),"\n",a.createElement(t.img,{src:"/1686261651375.29221089453/HSA_BPHelloWorldClose.png",alt:"image"}),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},a.createElement(t.h2,{id:"configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},a.createElement(t.a,{href:"#configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},"Configure an OpenShift Route to expose the HTTP Service Adapter and its endpoints")),"\n",a.createElement(t.p,null,"Red Hat OpenShift has a resource type called a ",a.createElement(t.code,null,"Route")," that is very similar to the Kubernetes ",a.createElement(t.code,null,"ingress")," resource. In OpenShift, routes allow the cluster (or project) administrator to expose a service in the project for access over http or https. When creating a route that implements https, there are three options that can be selected; ",a.createElement(t.strong,null,"edge"),", ",a.createElement(t.strong,null,"reencrypt"),", and ",a.createElement(t.strong,null,"passthrough"),". For the sake of simplicity, this lab will use an ",a.createElement(t.strong,null,"edge")," route to securely terminate the inbound connection on a routing pod in the cluster."),"\n",a.createElement(t.p,null,"As was done earlier in the lab, if you are working in a multi-tenant environment, the route that you create should be made unique by prefixing the name with your initials in lower case with a ",a.createElement(t.code,null,"-")," immediately after."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Switch back to the OpenShift console and go to the ",a.createElement(t.strong,null,"Routes")," panel with the ",a.createElement(t.strong,null,"b2bi")," project selected. Then, click on the ",a.createElement(t.strong,null,"Create Route")," button."),"\n",a.createElement(t.img,{src:"/1686261651383.29221089457/HSA_CreateRoute.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For then name of the route, use the base name of ",a.createElement(t.code,null,"auth-helloworld"),". If you are working in a group, place your initials followed by a dash before this name. Following the example from the earlier lab, Bilbo Baggins would enter ",a.createElement(t.code,null,"bb-auth-helloworld"),"."),"\n",a.createElement(t.img,{src:"/1686261651387.29251089464/HSA_RouteName.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For the hostname, place this name to the left of the cluster apps domain name in the browser URL, leaving off any path elements. For example for this console url:"),"\n",a.createElement(t.img,{src:"/1686261651383.29221089461/HSA_OCPAppsDomain.png",alt:"image"}),"\n",a.createElement(t.p,null,"Bilbo would use the ",a.createElement(t.strong,null,"Hostname")," of ",a.createElement(t.code,null,"bb-auth-helloworld.apps.ocp-100000gsew-sqwx.cloud.techzone.ibm.com")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Keep the ",a.createElement(t.strong,null,"Path")," as the default and for ",a.createElement(t.strong,null,"Service"),", select ",a.createElement(t.strong,null,"sterling-fg-b2bi-ac-backend-svc"),". For the ",a.createElement(t.strong,null,"Target Port")," select ",a.createElement(t.strong,null,"30352 -> adapters-2 (TCP)"),"."),"\n",a.createElement(t.img,{src:"/1686261651387.29251089465/HSA_RouteServicePort.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the checkbox next to ",a.createElement(t.strong,null,"Secure Route")," and select ",a.createElement(t.strong,null,"Edge")," from the ",a.createElement(t.strong,null,"TLS termination")," pulldown."),"\n",a.createElement(t.img,{src:"/1686261651387.29251089466/HSA_RouteTLS.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The remaining parts of the form for ",a.createElement(t.strong,null,"Insecure traffic")," and ",a.createElement(t.strong,null,"Certificates")," may be left at their default. Click on the ",a.createElement(t.strong,null,"Create")," button to create the route."),"\n",a.createElement(t.img,{src:"/1686261651383.29221089462/HSA_RouteConfirm.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"OpenShift will display a status page with the newly created ",a.createElement(t.strong,null,"Location")," shown. Copy the URL."),"\n",a.createElement(t.img,{src:"/1686261651387.29251089463/HSA_RouteCreated.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open a new browser tab and paste the URL and append ",a.createElement(t.code,null,"/hello")," as the endpoint."),"\n",a.createElement(t.img,{src:"/1686261651383.29221089459/HSA_HostWithPath.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the dialog, enter in the username and password for one of the trading partners created in the earlier lab and click on ",a.createElement(t.strong,null,"Sign In"),"."),"\n",a.createElement(t.img,{src:"/1686261651379.29221089456/HSA_BasicAuth.png",alt:"image"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The expected response is provided back from the business process."),"\n",a.createElement(t.img,{src:"/1686261651383.29221089458/HSA_HelloWorld.png",alt:"image"}),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},a.createElement(t.h2,{id:"summary"},a.createElement(t.a,{href:"#summary"},"Summary")),"\n",a.createElement(t.p,null,"In this activity, another protocol adapter was added to the B2B Integrator environment. In addition to the very simple HelloWorld business process, this adapter also supports a large number of other relevant business processes for B2B integration scenarios and can be customized as needed for business requirements."),"\n",a.createElement(t.p,null,"When the HTTP Service Adapter was configured, it was set to match a port defined in a Kubernetes ",a.createElement(t.strong,null,"Service"),". This made it very simple to expose the HTTP Service Adapter securely on the OpenShift cluster using a Route. Note that in this simplified example, there was no grouping of access set with the HTTP Service Adapter. This means that any valid trading partner username and password would work for authentication. In a production environment, further organization around group-based access would be common.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(4184),c=n.n(i),s=n(4690),m=n(1140),u=n(2565),h=n(8531),p=n(3383),d=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:i}=e,s=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:d.YS},a.createElement("article",{className:c()(d.Y2,!E&&d.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},i)),E&&a.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(g,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-http-adapter-md-8e635eb1ce753ee0d215.js.map