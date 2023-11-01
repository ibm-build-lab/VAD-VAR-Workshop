"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7840],{6859:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return E}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",img:"img",blockquote:"blockquote",pre:"pre",span:"span"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"bonus---configure-a-secured-http-endpoint"},l.createElement(t.h1,{id:"bonus---configure-a-secured-http-endpoint"},"Bonus - Configure a secured HTTP endpoint"),"\n",l.createElement(t.p,null,"In this activity, you will learn more about how services and adapters can be configured in Sterling B2B Integrator. Like the Configuration Part 1 activity, since the steps in this lab will deploy a new service in the cluster, the first section where the service is configured will be performed once per cluster."),"\n",l.createElement(t.p,null,"For the last section, each lab user could configure their own route in the ",l.createElement(t.code,null,"b2bi")," project if desired."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"add-a-http-service-adapter"},l.createElement(t.h2,{id:"add-a-http-service-adapter"},l.createElement(t.a,{href:"#add-a-http-service-adapter"},"Add a HTTP Service Adapter")),"\n",l.createElement(t.p,null,"Sterling B2B Integrator includes a number of pre-installed adapters that can be configured to send and receive data. To make this section a little different from Configuration Part 1, instead of configuring the HTTP Service Adapter for the ASI (application server-independent) node, it will be configured on the Adapter Container (AC) node. The AC node is a supplemental node to the ASI and allows Service Adapters to be distributed off the ASI."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Return to the OpenShift ",l.createElement(t.strong,null,"Routes")," list and open the ",l.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route-dashboard")," route. When prompted, log in using the ",l.createElement(t.strong,null,"admin")," user. Then expand ",l.createElement(t.strong,null,"Deployment")," -> ",l.createElement(t.strong,null,"Services")," and click on ",l.createElement(t.strong,null,"Configuration"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceConfigMenu.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Type ",l.createElement(t.strong,null,"HTTP Server Adapter")," for the Service Name in the Search panel and click on ",l.createElement(t.strong,null,"Go!"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceSearch.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Find the row with ",l.createElement(t.strong,null,"Http Server Adapter")," in the name column and click on the ",l.createElement(t.strong,null,"copy")," text/icon."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceCopy.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Change the name to ",l.createElement(t.strong,null,"AC Hosted Authenticating Http Server Adapter"),", scroll in the ",l.createElement(t.strong,null,"Environment")," panel to select the ",l.createElement(t.strong,null,"node 1 Adapter Container1")," resource. Then, click on ",l.createElement(t.strong,null,"Next"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceConfigName.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To find a port to use for the Http Server Adapter instance, go back to the OpenShift console and the ",l.createElement(t.strong,null,"Services")," list. This time, select the ",l.createElement(t.strong,null,"sterling-fg-b2bi-ac-backend-svc")," service and note the port used for the ",l.createElement(t.code,null,"adapters-2")," Service port."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_OCPACBackendSvcPort.png",alt:"image"}),"\n",l.createElement(t.p,null,"Notice that the Kubernetes service and the node port are identical. Techincally, they do not need to match. The important part to note is the port number associated with the service, or the pod port if given. Since the pod port name matches the service port mapping name, the correct port to choose is ",l.createElement(t.code,null,"30352"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Enter the port from the service in for the ",l.createElement(t.strong,null,"HTTP Listen Port"),", change ",l.createElement(t.strong,null,"User Authentication Required")," to ",l.createElement(t.strong,null,"Yes"),". Then, click on ",l.createElement(t.strong,null,"Next"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceConfigPort.png",alt:"image"}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"There is a warning on this page that not enabling SSL would result in a weak security configuration. This is generally true, but we will mitigate the security exposure of credentials going over the Internet in cleartext when we create the ",l.createElement(t.strong,null,"Route")," to expose the service using OpenShift."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Review the option to specify a particular group for access to the service, but do not make changes. Click on ",l.createElement(t.strong,null,"Save"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceConfigGroup.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the confirmation page, scroll down to find the ",l.createElement(t.strong,null,"URI: /hello")," entry. Notice that the Business Process to run is called ",l.createElement(t.strong,null,"Hello World")),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceCheckBP.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Continue scrolling to the bottom of the confirmation page and click on ",l.createElement(t.strong,null,"Finish"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceCheckFinish.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"Return")," to go back to the Services Configuration panel."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceConfigReturn.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Check the status of the new adapter. Using ",l.createElement(t.strong,null,"Select Node"),", change to ",l.createElement(t.strong,null,"node1AC1"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceListAC1.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the exclamation mark for the service adapter to check the running status (it will be automatically enabled since it was copied from an enabled service adapter)."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_ServiceCheckAC1.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Note the progression in timestamps ending with ",l.createElement(t.strong,null,"REGISTER_JNDI"),", this shows the service adapter is operating. Click on ",l.createElement(t.strong,null,"CLOSE")," in the upper right to dismiss the panel."),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"explore-the-sample-business-process"},l.createElement(t.h2,{id:"explore-the-sample-business-process"},l.createElement(t.a,{href:"#explore-the-sample-business-process"},"Explore the sample Business Process")),"\n",l.createElement(t.p,null,"Before configuring an OpenShift Route to access the service, spend a moment reviewing the sample Business Process that will be invoked when the ",l.createElement(t.code,null,"/hello")," endpoint is accessed."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"On the main B2Bi left navigation, expand ",l.createElement(t.strong,null,"Business Process")," -> ",l.createElement(t.strong,null,"Manager"),". Then, type ",l.createElement(t.strong,null,"Hello World")," as the Process Name in the Search panel. Finally, click on ",l.createElement(t.strong,null,"Go!"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_BPSearch.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the Process Name to open a view of the process."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_BPOpen.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Expand the window so that the full business process is shown."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_BPHelloWorld.png",alt:"image"}),"\n",l.createElement(t.p,null,"Without getting too technical, it is clear to see that the sequence of this business process has three operations. The first operation generates a xml document with a data element containing ",l.createElement(t.code,null,"Hello World!"),'. The second operation invokes an XSL Transformation using a stylesheet called "HelloWorld". If you were to look up this XSL stylesheet in the B2Bi dashboard you would see that it takes the data from the xml document and wraps it with some basic html tags. The last operation creates a http response sending the data from the XSL Transformation. In effect, when this business process is invoked it will generate a response like this to the caller:'),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-html"},l.createElement(t.span,{className:"hljs-tag"},"<",l.createElement(t.span,{className:"hljs-name"},"html"),">"),"\n  ",l.createElement(t.span,{className:"hljs-tag"},"<",l.createElement(t.span,{className:"hljs-name"},"body"),">"),"\n    Hello World!\n  ",l.createElement(t.span,{className:"hljs-tag"},"</",l.createElement(t.span,{className:"hljs-name"},"body"),">"),"\n",l.createElement(t.span,{className:"hljs-tag"},"</",l.createElement(t.span,{className:"hljs-name"},"html"),">"),"\n")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Close the view of the business process by clicking on ",l.createElement(t.strong,null,"CLOSE")," in either the upper right or lower right corner."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_BPHelloWorldClose.png",alt:"image"}),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},l.createElement(t.h2,{id:"configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},l.createElement(t.a,{href:"#configure-an-openshift-route-to-expose-the-http-service-adapter-and-its-endpoints"},"Configure an OpenShift Route to expose the HTTP Service Adapter and its endpoints")),"\n",l.createElement(t.p,null,"Red Hat OpenShift has a resource type called a ",l.createElement(t.code,null,"Route")," that is very similar to the Kubernetes ",l.createElement(t.code,null,"ingress")," resource. In OpenShift, routes allow the cluster (or project) administrator to expose a service in the project for access over http or https. When creating a route that implements https, there are three options that can be selected; ",l.createElement(t.strong,null,"edge"),", ",l.createElement(t.strong,null,"reencrypt"),", and ",l.createElement(t.strong,null,"passthrough"),". For the sake of simplicity, this lab will use an ",l.createElement(t.strong,null,"edge")," route to securely terminate the inbound connection on a routing pod in the cluster."),"\n",l.createElement(t.p,null,"As was done earlier in the lab, if you are working in a multi-tenant environment, the route that you create should be made unique by prefixing the name with your initials in lower case with a ",l.createElement(t.code,null,"-")," immediately after."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Switch back to the OpenShift console and go to the ",l.createElement(t.strong,null,"Routes")," panel with the ",l.createElement(t.strong,null,"b2bi")," project selected. Then, click on the ",l.createElement(t.strong,null,"Create Route")," button."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_CreateRoute.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"For then name of the route, use the base name of ",l.createElement(t.code,null,"auth-helloworld"),". If you are working in a group, place your initials followed by a dash before this name. Following the example from the earlier lab, Bilbo Baggins would enter ",l.createElement(t.code,null,"bb-auth-helloworld"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_RouteName.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"For the hostname, place this name to the left of the cluster apps domain name in the browser URL, leaving off any path elements. For example for this console url:"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_OCPAppsDomain.png",alt:"image"}),"\n",l.createElement(t.p,null,"Bilbo would use the ",l.createElement(t.strong,null,"Hostname")," of ",l.createElement(t.code,null,"bb-auth-helloworld.apps.ocp-100000gsew-sqwx.cloud.techzone.ibm.com")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Keep the ",l.createElement(t.strong,null,"Path")," as the default and for ",l.createElement(t.strong,null,"Service"),", select ",l.createElement(t.strong,null,"sterling-fg-b2bi-ac-backend-svc"),". For the ",l.createElement(t.strong,null,"Target Port")," select ",l.createElement(t.strong,null,"30352 -> adapters-2 (TCP)"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_RouteServicePort.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the checkbox next to ",l.createElement(t.strong,null,"Secure Route")," and select ",l.createElement(t.strong,null,"Edge")," from the ",l.createElement(t.strong,null,"TLS termination")," pulldown."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_RouteTLS.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The remaining parts of the form for ",l.createElement(t.strong,null,"Insecure traffic")," and ",l.createElement(t.strong,null,"Certificates")," may be left at their default. Click on the ",l.createElement(t.strong,null,"Create")," button to create the route."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_RouteConfirm.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"OpenShift will display a status page with the newly created ",l.createElement(t.strong,null,"Location")," shown. Copy the URL."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_RouteCreated.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Open a new browser tab and paste the URL and append ",l.createElement(t.code,null,"/hello")," as the endpoint."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_HostWithPath.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the dialog, enter in the username and password for one of the trading partners created in the earlier lab and click on ",l.createElement(t.strong,null,"Sign In"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_BasicAuth.png",alt:"image"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The expected response is provided back from the business process."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Sterling/_attachments/HSA_HelloWorld.png",alt:"image"}),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},l.createElement(t.h2,{id:"summary"},l.createElement(t.a,{href:"#summary"},"Summary")),"\n",l.createElement(t.p,null,"In this activity, another protocol adapter was added to the B2B Integrator environment. In addition to the very simple HelloWorld business process, this adapter also supports a large number of other relevant business processes for B2B integration scenarios and can be customized as needed for business requirements."),"\n",l.createElement(t.p,null,"When the HTTP Service Adapter was configured, it was set to match a port defined in a Kubernetes ",l.createElement(t.strong,null,"Service"),". This made it very simple to expose the HTTP Service Adapter securely on the OpenShift cluster using a Route. Note that in this simplified example, there was no grouping of access set with the HTTP Service Adapter. This means that any valid trading partner username and password would work for authentication. In a production environment, further organization around group-based access would be common.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(4184),s=n.n(i),c=n(4690),m=n(1140),h=n(8623),u=n(8531),p=n(3383),g=n(7315);const d=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:i}=e,c=(0,l.useRef)(null),{0:d}=(0,l.useState)(""),b=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(u.Z,{className:g.YS},l.createElement("article",{className:s()(g.Y2,!b&&g.ey),ref:c},l.createElement(h.Z,{components:{h1:()=>null}},i)),b&&l.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:d})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function E(e){return l.createElement(d,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-http-adapter-md-144c11fd63c7715aeb52.js.map