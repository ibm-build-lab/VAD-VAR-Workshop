"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6081],{2157:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",ul:"ul",li:"li",h3:"h3",ol:"ol",img:"img",blockquote:"blockquote",code:"code",em:"em",pre:"pre",span:"span"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"demonstration-preparation-guide"},a.createElement(t.h1,{id:"demonstration-preparation-guide"},"Demonstration Preparation Guide"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introduction"},a.createElement(t.h2,{id:"introduction"},a.createElement(t.a,{href:"#introduction"},"Introduction")),"\n",a.createElement(t.p,null,"In this lab, you will set up a demo instance of QRadar Security Information\nand Event Management product with sample data. Afterwards, the environment\ncan be used for exploring the product key features or delivering a demo to\na customer. Here are supplemental links for you to use ",a.createElement(t.strong,null,"after")," completing\nthe in-person workshop."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"View the ",a.createElement(t.a,{href:"https://ibm.seismic.com/Link/Content/DCDJ8qCbhJPB28MTDjXBpB63WP7d"},"video\nexample"),"\nthat shows how this demo can be delivered."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Request a new live demo by using the ",a.createElement(t.a,{href:"https://ibm.biz/L300-SEIM-TZ"},"QRadar Instance reserved on the Tech\nZone"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Prepare the demo as described in this ",a.createElement(t.a,{href:"/qradar-siem/102.md"},"demonstration preparation\nguide"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"[OPTIONAL] Use the ",a.createElement(t.a,{href:"https://ibm.seismic.com/Link/Content/DCMh7JWdbXjQR89MR2TRjBJmPhJG"},"virtual demo, also known as a click-through\ndemo,"),"\nfor this usecase."),"\n"),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"pre-requisites"},a.createElement(t.h3,{id:"pre-requisites"},a.createElement(t.a,{href:"#pre-requisites"},"Pre-requisites")),"\n",a.createElement(t.p,null,"Although it is not required, for the best experience, using a VPN with ",a.createElement(t.a,{href:"https://www.wireguard.com/"},"Wireguard")," is strongly recommended. Please install this application on your workstation before completing attempting to connect to QRadar using the direct URL or direct ssh. If you are using a Microsoft Windows platform 10 or later, it includes a ssh client. Otherwise you can install ",a.createElement(t.a,{href:"https://www.putty.org/"},"putty")," or ",a.createElement(t.a,{href:"https://gitforwindows.org/"},"git bash")," for direct ssh access."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"optional-request-access-to-a-live-deployment"},a.createElement(t.h3,{id:"optional-request-access-to-a-live-deployment"},a.createElement(t.a,{href:"#optional-request-access-to-a-live-deployment"},"[OPTIONAL] Request access to a live deployment")),"\n",a.createElement(t.p,null,"At a later time, if you want to demonstrate the use case using the live system, you can\nrequest access to the QRadar SIEM demo system on the IBM Technology\nZone. For the in-person workshop, these steps have been performed for you, so skip ahead to the ",a.createElement(t.a,{href:"#learn-about-lab-architecture-and-get-access"},"next section")),"\n",a.createElement(t.p,null,"TODO - update screenshots, TechZone has changed"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Use the following link for access to the QRadar instance on the IBM\nTechZone."),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://ibm.biz/L300-SEIM-TZ"},"https://ibm.biz/L300-SEIM-TZ")),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Hint"),": The URL is case sensitive."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Use your IBMid to authenticate to the site."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the left menu bar, select ",a.createElement(t.strong,null,"Environments"),"."),"\n",a.createElement(t.img,{src:"/1686178343816.97531105919/image1.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Reserve"),"."),"\n",a.createElement(t.img,{src:"/1686178343832.9761105930/image2.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select ",a.createElement(t.strong,null,"Reserve now"),"."),"\n",a.createElement(t.img,{src:"/1686178343836.97631105934/image3.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the Fill out your reservation form, populate all fields, and for\nPreferred Geography, choose the geography data center that is\nclosest to you to reduce latency and to improve the demo experience."),"\n",a.createElement(t.img,{src:"/1686178343840.97631105935/image4.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select an appropriate reservation time."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The demo also offers two extensions."),"\n"),"\n",a.createElement(t.img,{src:"/1686178343840.97631105936/image5.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Submit")," your reservation."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To see the status of your new environment, go to ",a.createElement(t.strong,null,"My\nreservations"),"."),"\n",a.createElement(t.p,null,"[",a.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations"},"https://techzone.ibm.com/my/reservations"),"]"),"\n",a.createElement(t.img,{src:"/1686178343840.97631105937/image6.png",alt:""}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Hint"),": The reservation takes about ",a.createElement(t.strong,null,"30 minutes")," to provision. Then\nyou can access the demo."),"\n"),"\n"),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"learn-about-lab-architecture-and-get-access"},a.createElement(t.h2,{id:"learn-about-lab-architecture-and-get-access"},a.createElement(t.a,{href:"#learn-about-lab-architecture-and-get-access"},"Learn about lab architecture and get access")),"\n",a.createElement(t.p,null,"The QRadar SIEM lab uses two virtual machines."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"CentOS 8"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"QRadar SIEM"),"\n"),"\n"),"\n",a.createElement(t.p,null,"The Linux CentOS system is used as the Jump System to access the\nQRadar SIEM virtual machine over SSH (terminal) and HTTPS (browser)."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For SSH access use the root account and password ",a.createElement(t.code,null,"Q1d3m0")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For HTTPS access, use the ",a.createElement(t.code,null,"admin")," account and password ",a.createElement(t.code,null,"Q1d3m0.Demo")),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686178343840.97631105938/image7.png",alt:""}),"\n",a.createElement(t.p,null,"For the fastest response, we recommend to ",a.createElement(t.a,{href:"#using-wireguard-vpn-to-access-the-lab"},"use VPN to directly access the lab"),", but if you do not want to set up the additional software, which consists of wireguard and an ssh client, you can use a web browser to ",a.createElement(t.a,{href:"#using-the-jump-server-to-access-the-lab"},"access a virtual desktop on the Jump Server")),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"using-wireguard-vpn-to-access-the-lab"},a.createElement(t.h3,{id:"using-wireguard-vpn-to-access-the-lab"},a.createElement(t.a,{href:"#using-wireguard-vpn-to-access-the-lab"},"Using wireguard vpn to access the lab")),"\n",a.createElement(t.p,null,"You should already have ",a.createElement(t.a,{href:"https://www.wireguard.com/"},"wireguard")," installed and running on your workstation."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After the demo is provisioned, from the My reservations page, click\nyour reserved demo."),"\n",a.createElement(t.img,{src:"/1686178343840.97631105939/image8.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll to the bottom of the reservation page and click on the download for the VPN configuration"),"\n",a.createElement(t.img,{src:"/1686178343844.97661105942/wg-config-dwnld.png",alt:"wg config dwnld"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After the ",a.createElement(t.code,null,"conf_wg_download.conf")," file has downloaded, from the wireguard application, select ",a.createElement(t.strong,null,"Import tunnel(s) from File")," option"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the file using the file browser and click on ",a.createElement(t.strong,null,"Import"),". Immediately after, if you are prompted by the application or operating system to add the tunnel, ",a.createElement(t.strong,null,"Allow")," the request."),"\n",a.createElement(t.img,{src:"/1686178343844.97661105945/wireguard-import.png",alt:"wireguard import"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"With the configuration selected in the ",a.createElement(t.strong,null,"Manage WireGuard Tunnels")," panel, select on ",a.createElement(t.strong,null,"Edit"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select and remove the ",a.createElement(t.strong,null,"DNS")," entry as this lab will not require access to resolve DNS names over the VPN."),"\n",a.createElement(t.img,{src:"/1686178343844.97661105943/wg-delete-dns.png",alt:"wg delete dns"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Save")," the updated configuration"),"\n",a.createElement(t.img,{src:"/1686178343844.97661105944/wg-save-config.png",alt:"wg save config"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the ",a.createElement(t.strong,null,"Activate")," button to enable the VPN tunnel and the status will change to ",a.createElement(t.strong,null,"Active"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Access the QRadar console. In a browser tab, open ",a.createElement(t.a,{href:"https://172.16.60.10"},"https://172.16.60.10"),", accept any certificate warnings that are presented and log in with the user ",a.createElement(t.code,null,"admin")," and the password ",a.createElement(t.code,null,"Q1d3m0.Demo"),", then click ",a.createElement(t.strong,null,"Login")),"\n",a.createElement(t.img,{src:"/1686178343840.97631105941/qradar-direct.png",alt:"qradar-direct"}),"\n"),"\n"),"\n",a.createElement(t.p,null,"If the login is successful, you are set with direct access from your workstation to the QRadar live instance. Skip ahead to ",a.createElement(t.a,{href:"#verify-and-configure-the-live-demo-setup"},"verify the environment"),"."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"using-the-jump-server-to-access-the-lab"},a.createElement(t.h3,{id:"using-the-jump-server-to-access-the-lab"},a.createElement(t.a,{href:"#using-the-jump-server-to-access-the-lab"},"Using the jump server to access the lab")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After the demo is provisioned, from the My reservations page, click\nyour reserved demo."),"\n",a.createElement(t.img,{src:"/1686178343840.97631105939/image8.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll to the bottom of the reservation page and click the blue\nbutton for the VM Remote Console to the CentOS system."),"\n",a.createElement(t.img,{src:"/1686178343840.97631105940/image9.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the new pop-up window, click ",a.createElement(t.strong,null,"Open in a new window"),"."),"\n",a.createElement(t.img,{src:"/1686178343816.97531105920/image10.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For the best experience, in the new window, click ",a.createElement(t.strong,null,"Full screen"),"."),"\n",a.createElement(t.img,{src:"/1686178343820.97531105921/image11.png",alt:""}),"\n",a.createElement(t.p,null,"You now have access to the demo. Verify the system and inject some demo\ndata before you proceed with the demonstration steps."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the CentOS desktop, open the ",a.createElement(t.strong,null,"Applications > Favorites >\nFirefox"),"."),"\n",a.createElement(t.img,{src:"/1686178343820.97531105922/image12.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"On the login page, if needed, provide the admin password\n(Q1d3m0.Demo) and click ",a.createElement(t.strong,null,"Login"),"."),"\n",a.createElement(t.img,{src:"/1686178343824.97561105923/image13.png",alt:""}),"\n"),"\n"),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"verify-and-configure-the-live-demo-setup"},a.createElement(t.h2,{id:"verify-and-configure-the-live-demo-setup"},a.createElement(t.a,{href:"#verify-and-configure-the-live-demo-setup"},"Verify and configure the live demo setup")),"\n",a.createElement(t.p,null,"Whether you are using a direct connection through wireguard or a connection via the jump server, it is now time to verify the system.\nTo verify that your system is working, perform the following steps."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"access-the-qradar-console-from-the-centos-system"},a.createElement(t.h3,{id:"access-the-qradar-console-from-the-centos-system"},a.createElement(t.a,{href:"#access-the-qradar-console-from-the-centos-system"},"Access the QRadar Console from the CentOS system")),"\n",a.createElement(t.p,null,"In the QRadar Console, go to ",a.createElement(t.strong,null,"Offenses > All offenses"),"."),"\n",a.createElement(t.img,{src:"/1686178343824.97561105924/image14.png",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Confirm that you do not have any open offense."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If you do have open offenses, clear the offenses before you run the\ndemo with these steps, otherwise continue in the next section."),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Select all offenses, then expand ",a.createElement(t.strong,null,"Actions")," and select ",a.createElement(t.strong,null,"Close"),"."),"\n",a.createElement(t.li,null,"\n",a.createElement(t.img,{src:"/1686178343824.97561105925/image15.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"In the Close Offense window, for the ",a.createElement(t.em,null,"closing reasons")," select False-positive and in the notes section type test."),"\n"),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"generate-the-random-events"},a.createElement(t.h3,{id:"generate-the-random-events"},a.createElement(t.a,{href:"#generate-the-random-events"},"Generate the random events")),"\n",a.createElement(t.p,null,"Before starting with the demo, you must generate event data and the\noffenses."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.em,null,"If using the remote deskop on the Jump Server")," open a terminal by, selecting to ",a.createElement(t.strong,null,"Applications > Favorites >\nTerminal"),"."),"\n",a.createElement(t.img,{src:"/1686178343824.97561105926/image16.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Use this command in either a local (vpn) or remote (jump server desktop) terminal to ssh to the QRadar server."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"ssh root@172.16.60.10\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the prompt type the root password: ",a.createElement(t.code,null,"Q1d3m0")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To run the random event generator, type the following commands"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},a.createElement(t.span,{className:"hljs-built_in"},"cd")," /labfiles\n./noiseOn.sh\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Allow the generator to run for ",a.createElement(t.strong,null,"15 minutes"),", so the events result in random\noffenses. Continue with the remaining steps in the lab while waiting."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"verify-new-ui"},a.createElement(t.h3,{id:"verify-new-ui"},a.createElement(t.a,{href:"#verify-new-ui"},"Verify New UI")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Switch back to the browser."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the QRadar Console, go to the ",a.createElement(t.strong,null,"Log Activity")," tab."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Confirm that you see new real-time events populating the Log\nActivity view."),"\n",a.createElement(t.img,{src:"/1686178343828.97581105927/image17.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the main menu, click ",a.createElement(t.strong,null,"Try the New UI"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the New UI, confirm that you see the other important apps for the\ndemo."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Pulse"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Use Case Manager"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Reference Data Management"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"User Analytics"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Assistant"),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686178343828.97581105928/image18.png",alt:""}),"\n"),"\n"),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"optional----troubleshooting-the-apps-if-they-do-not-show-up-in-the-new-ui"},a.createElement(t.h2,{id:"optional----troubleshooting-the-apps-if-they-do-not-show-up-in-the-new-ui"},a.createElement(t.a,{href:"#optional----troubleshooting-the-apps-if-they-do-not-show-up-in-the-new-ui"},"[Optional] -- troubleshooting the apps if they do not show up in the New UI")),"\n",a.createElement(t.p,null,"TODO - remove if we are getting consistently OK envs from TechZone"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Switch back to the terminal window, or from the Jump Server, go to\n",a.createElement(t.strong,null,"Applications > Favorites > Terminal"),"."),"\n",a.createElement(t.img,{src:"/1686178343824.97561105926/image16.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"If needed, reconnect to the QRadar SSH console."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"ssh root@172.16.60.10\n")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the prompt, type the root password: ",a.createElement(t.code,null,"Q1d3m0")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To verify status of all apps, type the following command"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"/opt/qradar/support/qappmanager\n")),"\n",a.createElement(t.img,{src:"/1686178343832.9761105929/image19.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Inspect the status of all apps. If some app is not in the RUNNING\nstate, type option 23."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Then, type ID that correlates to the Admin Name. Most likely it is\n2."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Type the instance ID that is not in the running state. In this case\nit is 1054."),"\n",a.createElement(t.img,{src:"/1686178343832.9761105931/image20.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Wait for ",a.createElement(t.strong,null,"a few minutes"),", and run option 20 to confirm that the\napp is brought into the RUNNING state."),"\n",a.createElement(t.img,{src:"/1686178343836.97631105932/image21.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"If the app is not in the running state, wait a few more minutes and\ntype option 20 again."),"\n",a.createElement(t.p,null,"You can repeat those steps for all apps that are not in the RUNNING\nstate."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the end, exit the app manager using the option 0."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"inject-the-data-that-is-use-case-specific"},a.createElement(t.h2,{id:"inject-the-data-that-is-use-case-specific"},a.createElement(t.a,{href:"#inject-the-data-that-is-use-case-specific"},"Inject the data that is use case specific")),"\n",a.createElement(t.p,null,"To consistently and reliably demonstrate the SIEM solution, in addition\nto random events and offenses, you also must inject the events that are\nuse case specific, by using the following shell script in the QRadar SSH\nterminal console."),"\n",a.createElement(t.p,null,"If you already have the SSH terminal with QRadar open, run the following\ncommands. (If you have closed the QRadar SSH terminal session, use the ",a.createElement(t.a,{href:"#generate-the-random-events"},"Generate the random events")," section steps to reconnect to QRadar.):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},a.createElement(t.span,{className:"hljs-built_in"},"cd")," /labfiles\n./runUC.sh\n")),"\n",a.createElement(t.p,null,"Wait for the script to complete (about ",a.createElement(t.strong,null,"5 minutes"),")."),"\n",a.createElement(t.img,{src:"/1686178343836.97631105933/image22.png",alt:""}),"\n",a.createElement(t.p,null,"At this time, setup of the demo environment is ready. You now can start the demo and follow the guidance in the ",a.createElement(t.a,{href:"/qradar-siem/102.md"},"Demonstration Script"),".")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=n(4184),s=n.n(c),i=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:c}=e,i=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),g=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:p.YS},a.createElement("article",{className:s()(p.Y2,!g&&p.ey),ref:i},a.createElement(u.Z,{components:{h1:()=>null}},c)),g&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(i.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(E,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),c=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&s(r,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-siem-101-md-b2d8b2dacc68e5966cf9.js.map