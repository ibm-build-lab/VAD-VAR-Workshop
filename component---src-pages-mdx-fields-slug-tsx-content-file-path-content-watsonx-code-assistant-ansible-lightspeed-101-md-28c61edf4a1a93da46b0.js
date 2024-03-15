"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3088],{4485:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return E}});var o=n(1151),l=n(7294);function a(e){const t=Object.assign({section:"section",h1:"h1",h3:"h3",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",img:"img",code:"code",blockquote:"blockquote"},(0,o.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-ibm-watsonx-code-assistant-wca-for-red-hat-ansible-lightspeed-environment-setup"},l.createElement(t.h1,{id:"101-ibm-watsonx-code-assistant-wca-for-red-hat-ansible-lightspeed-environment-setup"},"101: IBM watsonx Code Assistant (WCA) for Red Hat Ansible Lightspeed Environment Setup"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"goal"},l.createElement(t.h3,{id:"goal"},l.createElement(t.a,{href:"#goal"},"Goal")),"\n",l.createElement(t.p,null,"The goal of this lab is to provision, access and configure the IBM watsonx Code Assistant (WCA) for Red Hat Ansible Lightspeed IBM Technology Zone Environment for use for the next lab."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"provision-ibm-technology-zone-environment"},l.createElement(t.h2,{id:"provision-ibm-technology-zone-environment"},l.createElement(t.a,{href:"#provision-ibm-technology-zone-environment"},"Provision IBM Technology Zone Environment")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Navigate ",l.createElement(t.a,{href:"https://techzone.ibm.com/collection/ibm-watson-x-code-assistant-for-ansible-lightspeed/environments"},"here")," to reserve and provision a Linux virtual machine (VM) with Visual Studio (VS) Code and IBM watsonx Code Assistant for Red Hat Ansible Lightspeed pre-installed."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Main WCA for Ansible Demo: Visual Studio Desktop 1.2")," tile."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/techzone-tile.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"For the reservation type, select the ",l.createElement(t.strong,null,"Reserve now")," radio button."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/techzone-reserve-now.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"Accept the default for the reservation ",l.createElement(t.strong,null,"Name"),", or provide a name of your choosing. For the Purpose of the reservation, select ",l.createElement(t.strong,null,"Practice / Self-Education"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/techzone-name-purpose.png",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"Fill in the ",l.createElement(t.strong,null,"Purpose description")," box with the reason you are making the reservation (e.g. ",l.createElement(t.code,null,"Workshop lab on watsonx Code Assistant for Red Hat Ansible Lightspeed Technical Sales Intermediate Badge organized by IBM Resell Lab"),"). Then, scroll further down and select your ",l.createElement(t.strong,null,"Preferred Geography")," based on your location.(e.g. AMERICAS - us-east region - wdc04 datacenter). Keep the reservation's ",l.createElement(t.strong,null,"End date and time")," (by default it’s two days (48 hours) from now; it can’t exceed two days initially, but you can extend the reservation by two days, up to two times, before it expires)."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/techzone-description-geography-datetime.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"On the right-side panel, follow the links to read the Terms & Conditions and the End User Security Policies documents. Then, select the checkbox to agree to those terms. Finally, click Submit."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/techzone-agree-submit.png",alt:""}),"\n",l.createElement(t.p,null,"A message in the upper-right corner will briefly appear stating that the reservation has been created. You may also be presented with an opportunity to provide feedback on the process. Feel free to share your feedback."),"\n",l.createElement(t.p,null,"Shortly after, you will receive an email from IBM Technology Zone acknowledging receipt of the request and you will receive another email when the provisioning is complete. Provisioning may be as quick as 15 minutes, or it may take an hour or more. If provisioning fails, it may be due to a lack of resources in the geography specified. Try again with the same geography or specify a different one."),"\n",l.createElement(t.p,null,"You must now wait until the environment has been provisioned before moving on to the next section. Specifically, you can continue on to the next section once you have received the Reservation Ready on IBM Technology Zone email from IBM Technology Zone."),"\n",l.createElement(t.p,null,"Reservation status is available at ",l.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"https://techzone.ibm.com/my/reservations"),"."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"access--configure-ibm-technology-zone-environment"},l.createElement(t.h2,{id:"access--configure-ibm-technology-zone-environment"},l.createElement(t.a,{href:"#access--configure-ibm-technology-zone-environment"},"Access & Configure IBM Technology Zone Environment")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Once you have received the Reservation Ready on IBM Technology Zone email from IBM Technology Zone, access your newly provisioned environment ",l.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"here")," and select the ",l.createElement(t.strong,null,"Main WCA for Ansible Demo: Visual Studio Desktop 1.2")," tile."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/techzone-reservation.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Under the ",l.createElement(t.strong,null,"Published services")," section, click on the ",l.createElement(t.strong,null,"noVNC")," link. This will open a new window."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/techzone-novnc.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"In the newly opened window, press ",l.createElement(t.strong,null,"Connect")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/novnc-connect.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"For the password, type ",l.createElement(t.code,null,"IBMDem0s!")," and then press ",l.createElement(t.strong,null,"Send Credentials"),". Once logged in, you should see the home desktop for your Linux virtual machine (VM)."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"On the docker, select and open ",l.createElement(t.strong,null,"Visual Studio Code")),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/vm-vsc.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"For the ",l.createElement(t.strong,null,"Authentication required")," popup in Visual Studio Code, type in ",l.createElement(t.code,null,"IBMDem0s!")," and press ",l.createElement(t.strong,null,"Unlock"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/vsc-authentication.png",alt:""}),"\n",l.createElement(t.p,null,'To begin experimenting with WCA generative AI capabilities, you will first need access to some Ansible Playbooks to generate Tasks with. Playbooks have already been prepared ahead of time, which you will make use of here. You need to clone (replicate) the Playbooks from GitHub to a folder on your local machine. A "clone" request in GitHub is essentially a request to replicate code from the cloud-hosted repository into the local (VS Code and local machine) environment.'),"\n",l.createElement(t.ol,{start:"7"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To perform a clone request with VS Code, press ",l.createElement(t.code,null,"CTRL")," + ",l.createElement(t.code,null,"Shift")," + ",l.createElement(t.code,null,"P")," to open an executable console at the top of VS Code."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Enter ",l.createElement(t.code,null,"git:clone")," into the console and hit ",l.createElement(t.code,null,"Return")," to confirm."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/vsc-gitclone.png",alt:""}),"\n",l.createElement(t.ol,{start:"9"},"\n",l.createElement(t.li,null,"Now you must specify the public repository from which to clone the data. Copy and paste ",l.createElement(t.code,null,"https://github.com/craig-br/lightspeed-demos.git")," into the console and hit ",l.createElement(t.code,null,"Return")," to confirm."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," You can copy and paste by using the clipboard above"),"\n"),"\n",l.createElement(t.ol,{start:"10"},"\n",l.createElement(t.li,null,"You will be asked to select (using your local machine's file browser) the destination for where the cloned data will be saved locally. Select ",l.createElement(t.strong,null,"Documents")," (or your preference) and then confirm by clicking ",l.createElement(t.strong,null,"Select as Repository Destination")," to kick off the replication from GitHub to your local machine."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/cloned-data-location.png",alt:""}),"\n",l.createElement(t.ol,{start:"11"},"\n",l.createElement(t.li,null,"A prompt will appear asking ",l.createElement(t.strong,null,"Would you like to open the cloned repository, or add it to the current workspace?")," — click ",l.createElement(t.strong,null,"Open"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/open-clone-prompt.png",alt:""}),"\n",l.createElement(t.p,null,"Next, you will need to activate your Ansible Lightspeed Technical Preview extension for VS Code."),"\n",l.createElement(t.ol,{start:"12"},"\n",l.createElement(t.li,null,"On the left sidebar, click the ",l.createElement(t.strong,null,"Extensions")," icon (as shown in the screenshot below) to open the marketplace of Microsoft services and open source technologies that can be integrated with VS Code."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/vsc-sidebar-extensions.png",alt:""}),"\n",l.createElement(t.ol,{start:"13"},"\n",l.createElement(t.li,null,'Locate the installed Ansible extension from the list and click the mechanical "cog" icon (as shown below), located on the right side of the Ansible service tile. From the dropdown list of options, click ',l.createElement(t.strong,null,"Extension Settings"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/ansible-extension.png",alt:""}),"\n",l.createElement(t.ol,{start:"14"},"\n",l.createElement(t.li,null,"A settings panel for Ansible will fill the screen. Select the ",l.createElement(t.strong,null,"Workspace")," toggle option."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/ansible-workspace.png",alt:""}),"\n",l.createElement(t.ol,{start:"15"},"\n",l.createElement(t.li,null,"Scroll down the list of settings until you locate the fields ",l.createElement(t.strong,null,"Ansible > Lightspeed")," and ",l.createElement(t.strong,null,"Ansible > Lightspeed > Suggestions"),". By default, these will be disabled. Click the checkmark icons to the left of ",l.createElement(t.strong,null,"BOTH")," entries to ",l.createElement(t.strong,null,"ENABLE")," IBM watsonx Code Assistant for Red Hat Ansible Lightspeed Tech Preview features within the VS Code environment."),"\n"),"\n",l.createElement(t.p,null,'The settings will automatically be applied without needing to confirm or "save" manually. Close the Settings tab using the X icon along the top of the taskbar to proceed.'),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/ansible-settings.png",alt:""}),"\n",l.createElement(t.ol,{start:"16"},"\n",l.createElement(t.li,null,"Due to a token login issue from the environment creation, you have to relogin to Ansible Lightspeed. To do this, on the left sidebar of the VS Code environment, click the ",l.createElement(t.strong,null,"Accounts")," icon (as shown in the screenshot below), locate the Ansible Lightspeed user (ex. ",l.createElement(t.code,null,"ibm-wxca-demo-user-1"),"), and press ",l.createElement(t.strong,null,"Sign Out"),". On the popup, press ",l.createElement(t.strong,null,"Sign Out")," again."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/ansible-logout.png",alt:""}),"\n",l.createElement(t.ol,{start:"17"},"\n",l.createElement(t.li,null,'To relogin, click the Ansible icon from the sidebar of the VS Code environment (look for the large "A" icon). A panel will open displaying details about Ansible Lightspeed Login. Click the blue ',l.createElement(t.strong,null,"Connect")," button to launch the authorization tool. A popup will appear stating that ",l.createElement(t.strong,null,"The extension Ansible wants to sign in using Ansible Lightspeed")," — click ",l.createElement(t.strong,null,"Allow"),". You will then be asked about opening an external website — click ",l.createElement(t.strong,null,"Open"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/ansible-login.png",alt:""}),"\n",l.createElement(t.ol,{start:"18"},"\n",l.createElement(t.li,null,"Your web browser will then load to a page asking you to login. Click the ",l.createElement(t.strong,null,"Log in with Red Hat")," option. Accept any license agreements that accompany the log in request."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/browser-login.png",alt:""}),"\n",l.createElement(t.ol,{start:"19"},"\n",l.createElement(t.li,null,"Use the prefilled Red Hat login and press ",l.createElement(t.strong,null,"Next"),". For the password, click on the password line to bring up the autofill password for the prefilled login. Select the autofill password and press ",l.createElement(t.strong,null,"Log in"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/browser-password.png",alt:""}),"\n",l.createElement(t.ol,{start:"20"},"\n",l.createElement(t.li,null,"You will be asked to Authorize Ansible Lightspeed for VS Code — click ",l.createElement(t.strong,null,"Authorize"),". You will now be brought back to VS Code and successfully relogged into Ansible Lightspeed."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/101/browser-authorize.png",alt:""}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-you-have-reached-the-end-of-lab-101"},l.createElement(t.h3,{id:"congratulations-you-have-reached-the-end-of-lab-101"},l.createElement(t.a,{href:"#congratulations-you-have-reached-the-end-of-lab-101"},"Congratulations, you have reached the end of lab 101.")),"\n",l.createElement(t.p,null,"Click, ",l.createElement(t.a,{href:"/watsonx/codeassistant/ansible-lightspeed/102"},"lab 102")," to start next lab."))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},s=n(4184),r=n.n(s),c=n(4690),m=n(1140),h=n(8623),u=n(8531),d=n(3383),g=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:o,timeToComplete:a,updated:i}}},children:s}=e,c=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),b=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:a,updated:i},t[0].title||o||""),l.createElement(u.Z,{className:g.YS},l.createElement("article",{className:r()(g.Y2,!b&&g.ey),ref:c},l.createElement(h.Z,{components:{h1:()=>null}},s)),b&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:o}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||o[0].title||void 0})};function E(e){return l.createElement(p,e,l.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-ansible-lightspeed-101-md-28c61edf4a1a93da46b0.js.map