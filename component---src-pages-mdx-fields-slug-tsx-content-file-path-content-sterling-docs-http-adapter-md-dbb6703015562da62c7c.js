"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[84],{8791:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",img:"img",blockquote:"blockquote",div:"div",pre:"pre",span:"span"},(0,l.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"bonus---configure-a-secured-http-endpoint"},"Bonus - Configure a secured HTTP endpoint"),"\n",r.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",r.createElement(t.p,null,"In this activity, you will learn more about how services and adapters can be configured in Sterling B2B Integrator. Like the Configuration Part 1 activity, since the steps in this lab will deploy a new service in the cluster, the first section where the service is configured will be performed once per cluster."),"\n",r.createElement(t.p,null,"For the last section, each lab user could configure their own route in the ",r.createElement(t.code,null,"b2bi")," project if desired."),"\n",r.createElement(t.h2,{id:"add-a-http-service-adapter"},r.createElement(t.a,{href:"#add-a-http-service-adapter"},"Add a HTTP Service Adapter")),"\n",r.createElement(t.p,null,"Sterling B2B Integrator includes a number of pre-installed adapters that can be configured to send and receive data. To make this section a little different from Configuration Part 1, instead of configuring the HTTP Service Adapter for the ASI (application server-independent) node, it will be configured on the Adapter Container (AC) node. The AC node is a supplemental node to the ASI and allows Service Adapters to be distributed off the ASI."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Return to the OpenShift ",r.createElement(t.strong,null,"Routes")," list and open the ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route-dashboard")," route. When prompted, log in using the ",r.createElement(t.strong,null,"admin")," user. Then expand ",r.createElement(t.strong,null,"Deployment")," -> ",r.createElement(t.strong,null,"Services")," and click on ",r.createElement(t.strong,null,"Configuration"),"."),"\n",r.createElement(t.img,{src:"/1684171269871.6181088954/HSA_ServiceConfigMenu.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Type ",r.createElement(t.strong,null,"HTTP Server Adapter")," for the Service Name in the Search panel and click on ",r.createElement(t.strong,null,"Go!"),"."),"\n",r.createElement(t.img,{src:"/1684171269887.61741088961/HSA_ServiceSearch.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Find the row with ",r.createElement(t.strong,null,"Http Server Adapter")," in the name column and click on the ",r.createElement(t.strong,null,"copy")," text/icon."),"\n",r.createElement(t.img,{src:"/1684171269883.61771088958/HSA_ServiceCopy.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Change the name to ",r.createElement(t.strong,null,"AC Hosted Authenticating Http Server Adapter"),", scroll in the ",r.createElement(t.strong,null,"Environment")," panel to select the ",r.createElement(t.strong,null,"node 1 Adapter Container1")," resource. Then, click on ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684171269875.6181088955/HSA_ServiceConfigName.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"To find a port to use for the Http Server Adapter instance, go back to the OpenShift console and the ",r.createElement(t.strong,null,"Services")," list. This time, select the ",r.createElement(t.strong,null,"sterling-fg-b2bi-ac-backend-svc")," service and note the port used for the ",r.createElement(t.code,null,"adapters-2")," Service port."),"\n",r.createElement(t.img,{src:"/1684171269859.61841088943/HSA_OCPACBackendSvcPort.png",alt:"image"}),"\n",r.createElement(t.p,null,"Notice that the Kubernetes service and the node port are identical. Techincally, they do not need to match. The important part to note is the port number associated with the service, or the pod port if given. Since the pod port name matches the service port mapping name, the correct port to choose is ",r.createElement(t.code,null,"30352"),"."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter the port from the service in for the ",r.createElement(t.strong,null,"HTTP Listen Port"),", change ",r.createElement(t.strong,null,"User Authentication Required")," to ",r.createElement(t.strong,null,"Yes"),". Then, click on ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684171269879.61771088956/HSA_ServiceConfigPort.png",alt:"image"}),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"There is a warning on this page that not enabling SSL would result in a weak security configuration. This is generally true, but we will mitigate the security exposure of credentials going over the Internet in cleartext when we create the ",r.createElement(t.strong,null,"Route")," to expose the service using OpenShift."),"\n"),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the option to specify a particular group for access to the service, but do not make changes. Click on ",r.createElement(t.strong,null,"Save"),"."),"\n",r.createElement(t.img,{src:"/1684171269871.6181088953/HSA_ServiceConfigGroup.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"In the confirmation page, scroll down to find the ",r.createElement(t.strong,null,"URI: /hello")," entry. Notice that the Business Process to run is called ",r.createElement(t.strong,null,"Hello World")),"\n",r.createElement(t.img,{src:"/1684171269867.61821088951/HSA_ServiceCheckBP.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Continue scrolling to the bottom of the confirmation page and click on ",r.createElement(t.strong,null,"Finish"),"."),"\n",r.createElement(t.img,{src:"/1684171269867.61821088952/HSA_ServiceCheckFinish.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click on ",r.createElement(t.strong,null,"Return")," to go back to the Services Configuration panel."),"\n",r.createElement(t.img,{src:"/1684171269879.61771088957/HSA_ServiceConfigReturn.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Check the status of the new adapter. Using ",r.createElement(t.strong,null,"Select Node"),", change to ",r.createElement(t.strong,null,"node1AC1"),"."),"\n",r.createElement(t.img,{src:"/1684171269887.61741088959/HSA_ServiceListAC1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click on the exclamation mark for the service adapter to check the running status (it will be automatically enabled since it was copied from an enabled service adapter)."),"\n",r.createElement(t.img,{src:"/1684171269863.61821088950/HSA_ServiceCheckAC1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Note the progression in timestamps ending with ",r.createElement(t.strong,null,"REGISTER_JNDI"),", this shows the service adapter is operating. Click on ",r.createElement(t.strong,null,"CLOSE")," in the upper right to dismiss the panel."),"\n"),"\n"),"\n",r.createElement(t.h2,{id:"explore-the-sample-business-process"},r.createElement(t.a,{href:"#explore-the-sample-business-process"},"Explore the sample Business Process")),"\n",r.createElement(t.p,null,"Before configuring an OpenShift Route to access the service, spend a moment reviewing the sample Business Process that will be invoked when the ",r.createElement(t.code,null,"/hello")," endpoint is accessed."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"On the main B2Bi left navigation, expand ",r.createElement(t.strong,null,"Business Process")," -> ",r.createElement(t.strong,null,"Manager"),". Then, type ",r.createElement(t.strong,null,"Hello World")," as the Process Name in the Search panel. Finally, click on ",r.createElement(t.strong,null,"Go!"),"."),"\n",r.createElement(t.img,{src:"/1684171269851.61871088938/HSA_BPSearch.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click on the Process Name to open a view of the process."),"\n",r.createElement(t.img,{src:"/1684171269851.61871088937/HSA_BPOpen.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Expand the window so that the full business process is shown."),"\n",r.createElement(t.img,{src:"/1684171269847.61871088935/HSA_BPHelloWorld.png",alt:"image"}),"\n",r.createElement(t.p,null,"Without getting too technical, it is clear to see that the sequence of this business process has three operations. The first operation generates a xml document with a data element containing ",r.createElement(t.code,null,"Hello World!"),'. The second operation invokes an XSL Transformation using a stylesheet called "HelloWorld". If you were to look up this XSL stylesheet in the B2Bi dashboard you would see that it takes the data from the xml document and wraps it with some basic html tags. The last operation creates a http response sending the data from the XSL Transformation. In effect, when this business process is invoked it will generate a response like this to the caller:'),"\n",r.createElement(t.div,{"data-rehype-pretty-code-fragment":""},r.createElement(t.pre,{"data-language":"html","data-theme":"default"},r.createElement(t.code,{"data-language":"html","data-theme":"default"},r.createElement(t.span,{className:"line"},r.createElement(t.span,{style:{color:"#1192E8"}},"<"),r.createElement(t.span,{style:{color:"#FA4D56"}},"html"),r.createElement(t.span,{style:{color:"#1192E8"}},">")),"\n",r.createElement(t.span,{className:"line"},r.createElement(t.span,{style:{color:"#8D8D8D"}},"  "),r.createElement(t.span,{style:{color:"#1192E8"}},"<"),r.createElement(t.span,{style:{color:"#FA4D56"}},"body"),r.createElement(t.span,{style:{color:"#1192E8"}},">")),"\n",r.createElement(t.span,{className:"line"},r.createElement(t.span,{style:{color:"#8D8D8D"}},"    Hello World!")),"\n",r.createElement(t.span,{className:"line"},r.createElement(t.span,{style:{color:"#8D8D8D"}},"  "),r.createElement(t.span,{style:{color:"#1192E8"}},"</"),r.createElement(t.span,{style:{color:"#FA4D56"}},"body"),r.createElement(t.span,{style:{color:"#1192E8"}},">")),"\n",r.createElement(t.span,{className:"line"},r.createElement(t.span,{style:{color:"#1192E8"}},"</"),r.createElement(t.span,{style:{color:"#FA4D56"}},"html"),r.createElement(t.span,{style:{color:"#1192E8"}},">"))))),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Close the view of the business process by clicking on ",r.createElement(t.strong,null,"CLOSE")," in either the upper right or lower right corner."),"\n",r.createElement(t.img,{src:"/1684171269847.61871088936/HSA_BPHelloWorldClose.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(t.h2,{id:"configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},r.createElement(t.a,{href:"#configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},"Configure an OpenShift Route to expose the HTTP Service Adapter and its endpoints")),"\n",r.createElement(t.p,null,"Red Hat OpenShift has a resource type called a ",r.createElement(t.code,null,"Route")," that is very similar to the Kubernetes ",r.createElement(t.code,null,"ingress")," resource. In OpenShift, routes allow the cluster (or project) administrator to expose a service in the project for access over http or https. When creating a route that implements https, there are three options that can be selected; ",r.createElement(t.strong,null,"edge"),", ",r.createElement(t.strong,null,"reencrypt"),", and ",r.createElement(t.strong,null,"passthrough"),". For the sake of simplicity, this lab will use an ",r.createElement(t.strong,null,"edge")," route to securely terminate the inbound connection on a routing pod in the cluster."),"\n",r.createElement(t.p,null,"As was done earlier in the lab, if you are working in a multi-tenant environment, the route that you create should be made unique by prefixing the name with your initials in lower case with a ",r.createElement(t.code,null,"-")," immediately after."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Switch back to the OpenShift console and go to the ",r.createElement(t.strong,null,"Routes")," panel with the ",r.createElement(t.strong,null,"b2bi")," project selected. Then, click on the ",r.createElement(t.strong,null,"Create Route")," button."),"\n",r.createElement(t.img,{src:"/1684171269855.61841088940/HSA_CreateRoute.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"For then name of the route, use the base name of ",r.createElement(t.code,null,"auth-helloworld"),". If you are working in a group, place your initials followed by a dash before this name. Following the example from the earlier lab, Bilbo Baggins would enter ",r.createElement(t.code,null,"bb-auth-helloworld"),"."),"\n",r.createElement(t.img,{src:"/1684171269859.61841088947/HSA_RouteName.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"For the hostname, place this name to the left of the cluster apps domain name in the browser URL, leaving off any path elements. For example for this console url:"),"\n",r.createElement(t.img,{src:"/1684171269859.61841088944/HSA_OCPAppsDomain.png",alt:"image"}),"\n",r.createElement(t.p,null,"Bilbo would use the ",r.createElement(t.strong,null,"Hostname")," of ",r.createElement(t.code,null,"bb-auth-helloworld.apps.ocp-100000gsew-sqwx.cloud.techzone.ibm.com")),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Keep the ",r.createElement(t.strong,null,"Path")," as the default and for ",r.createElement(t.strong,null,"Service"),", select ",r.createElement(t.strong,null,"sterling-fg-b2bi-ac-backend-svc"),". For the ",r.createElement(t.strong,null,"Target Port")," select ",r.createElement(t.strong,null,"30352 -> adapters-2 (TCP)"),"."),"\n",r.createElement(t.img,{src:"/1684171269863.61821088948/HSA_RouteServicePort.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select the checkbox next to ",r.createElement(t.strong,null,"Secure Route")," and select ",r.createElement(t.strong,null,"Edge")," from the ",r.createElement(t.strong,null,"TLS termination")," pulldown."),"\n",r.createElement(t.img,{src:"/1684171269863.61821088949/HSA_RouteTLS.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"The remaining parts of the form for ",r.createElement(t.strong,null,"Insecure traffic")," and ",r.createElement(t.strong,null,"Certificates")," may be left at their default. Click on the ",r.createElement(t.strong,null,"Create")," button to create the route."),"\n",r.createElement(t.img,{src:"/1684171269859.61841088945/HSA_RouteConfirm.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"OpenShift will display a status page with the newly created ",r.createElement(t.strong,null,"Location")," shown. Copy the URL."),"\n",r.createElement(t.img,{src:"/1684171269859.61841088946/HSA_RouteCreated.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Open a new browser tab and paste the URL and append ",r.createElement(t.code,null,"/hello")," as the endpoint."),"\n",r.createElement(t.img,{src:"/1684171269855.61841088942/HSA_HostWithPath.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"In the dialog, enter in the username and password for one of the trading partners created in the earlier lab and click on ",r.createElement(t.strong,null,"Sign In"),"."),"\n",r.createElement(t.img,{src:"/1684171269851.61871088939/HSA_BasicAuth.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"The expected response is provided back from the business process."),"\n",r.createElement(t.img,{src:"/1684171269855.61841088941/HSA_HelloWorld.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(t.h2,{id:"summary"},r.createElement(t.a,{href:"#summary"},"Summary")),"\n",r.createElement(t.p,null,"In this activity, another protocol adapter was added to the B2B Integrator environment. In addition to the very simple HelloWorld business process, this adapter also supports a large number of other relevant business processes for B2B integration scenarios and can be customized as needed for business requirements."),"\n",r.createElement(t.p,null,"When the HTTP Service Adapter was configured, it was set to match a port defined in a Kubernetes ",r.createElement(t.strong,null,"Service"),". This made it very simple to expose the HTTP Service Adapter securely on the OpenShift cluster using a Route. Note that in this simplified example, there was no grouping of access set with the HTTP Service Adapter. This means that any valid trading partner username and password would work for authentication. In a production environment, further organization around group-based access would be common."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var c=n(7315),i=n(2125),s=n(403),m=n(4690),u=n(4184),h=n.n(u);const p={table:s.y6,a:s.IW,blockquote:s.R4,SubHeader:s.bU,img:s.fb,code:s.dn,QuizAlert:s.SA},d=r.memo((function(e){let{children:t}=e;return r.createElement(l.Zo,{components:{...p}},t)})),g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:l}=e,a=(0,r.useRef)(null),{0:o,1:s}=(0,r.useState)("");(0,r.useEffect)((()=>{if(!a.current)return;const e=a.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&s(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const m=(null===n||n)&&t;return r.createElement(r.Fragment,null,r.createElement("article",{className:h()(c.Y,!m&&c.e),ref:a},r.createElement(d,null,l)),m&&r.createElement(i.Z,{itemsList:t,maxDepth:1,currSection:o}))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return r.createElement(m.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return r.createElement(g,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-docs-http-adapter-md-dbb6703015562da62c7c.js.map