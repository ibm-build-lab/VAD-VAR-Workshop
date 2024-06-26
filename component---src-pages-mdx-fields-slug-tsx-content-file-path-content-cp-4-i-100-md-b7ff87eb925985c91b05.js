"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5520],{31634:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return E}});var l=n(11151),a=n(67294);function o(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",section:"section",h1:"h1",h2:"h2",a:"a",ol:"ol",li:"li",img:"img"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," API Connect is installed with self-signed certificates, which most browsers do not like. We recommend that you complete these labs an incognito or private browser window."),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"100-environment-setup"},a.createElement(t.h1,{id:"100-environment-setup"},"100: Environment Setup"),"\n",a.createElement(t.p,null,"The environment for labs 101 and 102 is not yet accessible to business partners and must be facilitated as part of an IBM workshop. Labs 103 (the L3 badge lab) and 104 are facilitated with a TechZone environment that is available for IBM business partners, but an IBM workshop may still utilize a shared environment."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"cloud-pak-for-integration-platform-navigator"},a.createElement(t.h2,{id:"cloud-pak-for-integration-platform-navigator"},a.createElement(t.a,{href:"#cloud-pak-for-integration-platform-navigator"},"Cloud Pak for Integration Platform Navigator")),"\n",a.createElement(t.p,null,"The Cloud Pak for Integration Platform Navigator is a web-based application that allows you to access all the components in CP4I. For shared environments, your instructor will provider you with a URL for the CP4I Platform Navigator and login credentials. You will need this link to access all the CP4I components that you will use in the labs. We recommend that you keep it open in a separate tab."),"\n",a.createElement(t.p,null,"To log in to the Platform Navigator do the following:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to the URL provided to you by your instructor for the Platform Navigator."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Enterprise LDAP")," user repository, enter your username and password and click on ",a.createElement(t.strong,null,"Log in")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/pn-login.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The will launch the CP4I Platform Navigator with links to all the various CP4I components. Keep this tab open for the rest of the workshop as it has all the information and links needed for you to complete the lab exercises."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/pn-landing-page.png",alt:""}),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"openshift-cluster-console"},a.createElement(t.h2,{id:"openshift-cluster-console"},a.createElement(t.a,{href:"#openshift-cluster-console"},"OpenShift Cluster Console")),"\n",a.createElement(t.p,null,"You will need to access the OpenShift console to install applications used in the lab to interact with the CP4I components. For shared environments, your instructor will provide you with a link. Click on the link for the OpenShift console."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to the URL provided for the OpenShift console."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"ldapidp")," user repository"),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/ocp-login.png",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Enter the same username and password you used in the previous step and click on ",a.createElement(t.strong,null,"Log in"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on ",a.createElement(t.strong,null,"Skip tour")," when prompted"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/skip-tour.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Switch to the ",a.createElement(t.strong,null,"Administrator")," view"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/admin-view.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the link for the project with the same name as your username."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/student-project.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The OpenShift console should now look like the following image. Keep this browser tab open as you will need to use the OpenShift console during the labs"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/ocp-console.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," You can click on any image in the instructions below to zoom in and see more details. When you do that just click on your browser's back button to return to the previous state."),"\n"))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},i=n(94184),s=n.n(i),c=n(24690),m=n(81140),u=n(48623),h=n(88531),p=n(13383),d=n(27315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:i}=e,c=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),b=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:o,updated:r},t[0].title||l||""),a.createElement(h.Z,{className:d.YS},a.createElement("article",{className:s()(d.Y2,!b&&d.ey),ref:c},a.createElement(u.Z,{components:{h1:()=>null}},i)),b&&a.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function E(e){return a.createElement(g,e,a.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-cp-4-i-100-md-b7ff87eb925985c91b05.js.map