"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1354],{1712:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return E}});var l=n(1151),a=n(7294);function i(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ol:"ol",li:"li",strong:"strong",img:"img",em:"em",ul:"ul",blockquote:"blockquote",code:"code"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-ansible-lightspeed-environment-setup-in-vs-code"},a.createElement(t.h1,{id:"103-ansible-lightspeed-environment-setup-in-vs-code"},"103: Ansible Lightspeed environment setup in VS Code"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"goal"},a.createElement(t.h2,{id:"goal"},a.createElement(t.a,{href:"#goal"},"Goal")),"\n",a.createElement(t.p,null,"The goal of this lab is to install the Ansible Lightspeed extension and enable and authenticate the extension in VS Code."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"install-ansible-extension-in-vs-code"},a.createElement(t.h2,{id:"install-ansible-extension-in-vs-code"},a.createElement(t.a,{href:"#install-ansible-extension-in-vs-code"},"Install Ansible extension in VS Code")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the VS Code application."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the (1) ",a.createElement(t.strong,null,"Extensions")," icon on the left sidebar. Then search for (2) ",a.createElement(t.strong,null,"Ansible")," in the search box and then click the (3) ",a.createElement(t.strong,null,"Install")," button"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/search-for-ansible.png",alt:""}),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"enable-the-ansible-lightspeed-extension"},a.createElement(t.h2,{id:"enable-the-ansible-lightspeed-extension"},a.createElement(t.a,{href:"#enable-the-ansible-lightspeed-extension"},"Enable the Ansible Lightspeed extension")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After installing the Ansible extension, click on the little gear icon and select the ",a.createElement(t.strong,null,"Extension Settings")," option."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," ",a.createElement(t.em,null,"You may need to restart VS Code before the full set of ansible options is available")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/gear-icon.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Search settings bar, type ",a.createElement(t.strong,null,"lightspeed")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"If they are not already selected, check all of the following boxes:"),"\n"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Ansible > Lightspeed: ",a.createElement(t.strong,null,"Enabled")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Ansible > Lightspeed > Suggestions: ",a.createElement(t.strong,null,"Enabled"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/enable-lightspeed.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," ",a.createElement(t.em,null,"For the purpose of this demo, we will disable Ansible Lint and Ansible Execution Environment because they are not required to showcase the Ansible Lightspeed features and they required more time to setup.")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Search settings bar, type ",a.createElement(t.strong,null,"ansible lint"),". If it is not already unselected, ",a.createElement(t.em,null,"uncheck")," the ",a.createElement(t.strong,null,"Ansible > Validation > Lint: ",a.createElement(t.strong,null,"Enabled"))," box."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/disable-ansible-lint.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Search settings bar, type ",a.createElement(t.strong,null,"ansible execution"),". If it is not already unselected, ",a.createElement(t.em,null,"uncheck")," the ",a.createElement(t.strong,null,"Ansible > Execution Environment: ",a.createElement(t.strong,null,"Enabled"))," box."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," ",a.createElement(t.em,null,"The Ansible Execution Environment requires a container engine, so it would require installing Docker or Podman as a prerequisite.")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/disable-ansible-exec.png",alt:""}),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"authenticate-ansible-lightspeed-with-github"},a.createElement(t.h2,{id:"authenticate-ansible-lightspeed-with-github"},a.createElement(t.a,{href:"#authenticate-ansible-lightspeed-with-github"},"Authenticate Ansible Lightspeed with GitHub")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open the Ansible extension icon on the left-hand side of the Visual Studio Code interface and click ",a.createElement(t.strong,null,"Connect"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/connect-ansible.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Follow the prompts to sign in to Ansible Lightspeed with IBM watsonx Code Assistant using your GitHub credentials."),"\n",a.createElement(t.p,null,"a. Click on the ",a.createElement(t.strong,null,"Allow")," button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/ansible-sign-in.png",alt:""}),"\n",a.createElement(t.p,null,"b. Click on the ",a.createElement(t.strong,null,"Open")," button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/external-website.png",alt:""}),"\n",a.createElement(t.p,null,"c. Click on the ",a.createElement(t.strong,null,"Log in to Tech Preview")," link."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"NOTE: If you have a paid subscription to Red Hat Ansible Lightspeed, choose ",a.createElement(t.strong,null,"Log in with Red Hat"),"."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/github-login.png",alt:""}),"\n",a.createElement(t.p,null,"d. You will be redirected to the IBM and Red Hat terms and agreement page."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/terms-agreement-page.png",alt:""}),"\n",a.createElement(t.p,null,"e. Scroll to the bottom of the IBM and Red Hat terms and agreement page and click on the ",a.createElement(t.strong,null,"Agree")," button."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/agree-terms-button.png",alt:""}),"\n",a.createElement(t.p,null,"f. A dialog with the title ",a.createElement(t.code,null,"Authorize Ansible Lightspeed for VS Code")," will be shown. Click on the ",a.createElement(t.strong,null,"Authorize")," button"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/authorize-ansible.png",alt:""}),"\n",a.createElement(t.p,null,"g. Click on the ",a.createElement(t.strong,null,"Authorize ansible")," button"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/authorize-ansible-github.png",alt:""}),"\n",a.createElement(t.p,null,"h. Upon successful completion of the login flow, you should see a ",a.createElement(t.strong,null,"Logged in as your GitHub id")," message in the Ansible side bar like the one below:"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," ",a.createElement(t.em,null,"You may be prompted to allow access to VS Code from your browser and vice versa. Make sure you allow this.")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/103/ansible-logged.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.p,null,"Now you are all set to continue to the next portion of this workshop!")))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},o=n(4184),r=n.n(o),c=n(4690),m=n(1140),u=n(8623),h=n(8531),b=n(3383),g=n(7315);const d=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:i,updated:s}}},children:o}=e,c=(0,a.useRef)(null),{0:d}=(0,a.useState)(""),p=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:i,updated:s},t[0].title||l||""),a.createElement(h.Z,{className:g.YS},a.createElement("article",{className:r()(g.Y2,!p&&g.ey),ref:c},a.createElement(u.Z,{components:{h1:()=>null}},o)),p&&a.createElement(b.Z,{itemsList:t,maxDepth:2,currSection:d})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function E(e){return a.createElement(d,e,a.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-ansible-lightspeed-103-md-361c088774c493e7bf18.js.map