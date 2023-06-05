"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6541],{9382:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",ol:"ol",img:"img",blockquote:"blockquote",code:"code",em:"em"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-data-explorer-threat-hunting-and-case-management"},l.createElement(t.h1,{id:"102-data-explorer-threat-hunting-and-case-management"},"102: Data explorer, threat hunting and case management"),"\n",l.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prerequisite"},l.createElement(t.h2,{id:"prerequisite"},l.createElement(t.a,{href:"#prerequisite"},"Prerequisite")),"\n",l.createElement(t.p,null,"This lab starts from the end of 101. If you have closed your browser, navigate back to the threat intelligence pop up for IP 128.210.157.251 by taking the following steps:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"From the homepage left navigation menu, expand ",l.createElement(t.strong,null,"Case Management")," and click ",l.createElement(t.strong,null,"Cases")),"\n",l.createElement(t.li,null,"Click on the case you created (matching Case ID) at the beginning of Lab 101"),"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"Attack Graph")," tab"),"\n",l.createElement(t.li,null,"Click on the ",l.createElement(t.strong,null,"Exfiltration - Transfer Data to Cloud..")," artifact"),"\n",l.createElement(t.li,null,"Click the Click the Malicious IP address ",l.createElement(t.strong,null,"128.210.157.251")),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"data-sources-and-case-artifacts"},l.createElement(t.h2,{id:"data-sources-and-case-artifacts"},l.createElement(t.a,{href:"#data-sources-and-case-artifacts"},"Data sources and case artifacts")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"At the bottom of the IP report, click ",l.createElement(t.strong,null,"Query in Data Explorer"),".\n",l.createElement(t.img,{src:"/1685968220927.91821103985/queryInDataExplorer.png",alt:""})),"\n",l.createElement(n,{text:"Quiz material"}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Before taking response actions to mitigate the threat, let’s perform some additional threat hunting by searching our connected data sources for some of the IOCs uncovered as part of our initial investigation."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note"),": Data soruces allows an SOC analyst to search multiple sources of data at rest. This is a key differentiator from other solutions that require data ingestion before searching."),"\n",l.createElement(t.p,null,"We will add the following as case artifacts:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Domain name: database.example.com"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"IP address with bad IP reputation 128.210.157.251 (the 199.36.158.100 is already an artifact)"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"User account: dan"),"\n"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the Data Explorer, at the Search Results page, review the results of the query."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"NOTE"),": The query may need to be slightly tweaked to generate results. If no results are returned on the IP address query alone, supplement with a start and end date that correspond with known results. Copy the following in to the STIX query input and click ",l.createElement(t.strong,null,"Run query"),":\n",l.createElement(t.code,null,"[ipv4-addr:value = '128.210.157.251'] START t'2021-09-01T00:00:00.000Z' STOP t'2023-04-14T20:18:00.000Z' ")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The query for that IP address returns two results from the QRadar NDR data source.\n",l.createElement("br"),l.createElement("br"),"From the query results, you see that the Command and Control (C2) Server has only communicated with the two IP addresses discovered by Threat Investigator."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To open the log details of the second log result that has database.example.com domain, click ",l.createElement(t.strong,null,"Expand"),"."),"\n",l.createElement(t.img,{src:"/1685968220915.9181103979/dataExplorer.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To add the domain to the artifact, right-click domain ",l.createElement(t.strong,null,"database.example.com > Add artifact to case"),"."),"\n",l.createElement(t.img,{src:"/1685968220915.9181103980/dataExplorer2.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Let’s add this domain to our list of artifacts so we can isolate this database."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,'At the "Add artifact to case" window, type appropriate ',l.createElement(t.strong,null,"Description"),", select the appropriate ",l.createElement(t.strong,null,"case number")," (the one you created at the beginning of Lab 101)."),"\n",l.createElement(t.img,{src:"/1685968220895.91751103972/addArtifact.png",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Hint"),": When adding the artifact, it is a good practice to describe why artifact is added to the case and ensure that you are using right case number."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Add artifact"),"."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,'Repeat steps 4 and 5 to add additional artifacts "user_id dan" and malicious Command and Control (C2) IP addresses "128.210.157.251".'),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Add user ",l.createElement(t.strong,null,"user_id dan")," and malicious ",l.createElement(t.strong,null,"IP 128.210.157.251")," as the artifacts to the case."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"After we add those artifacts to the case, let’s navigate back to the open case."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Hint"),": You can easily launch to the open case after the artifacts have been added by using the pop-up link that appears the bottom of the page. However, the link disappears quickly."),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"case-management"},l.createElement(t.h2,{id:"case-management"},l.createElement(t.a,{href:"#case-management"},"Case management")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the main menu, go to ",l.createElement(t.strong,null,"Case Management > Cases")," if you're not already .\nYou should confirm that the artifacts collected during the investigation are now part of the case."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Open your case number."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Artifacts")," tab."),"\n",l.createElement(t.img,{src:"/1685968220895.91751103973/caseArtifacts.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Now that we have a better understanding of the malicious activity that has occurred, you can continue the incident response process and complete the next step in our playbook."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Let’s go back to the tasks list."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Tasks")," tab."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"From the tasks list, let’s open and execute the next task ",l.createElement(t.em,null,"Initial triage"),"."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To open the task, click ",l.createElement(t.strong,null,"Initial triage"),"."),"\n",l.createElement(t.img,{src:"/1685968220899.91751103975/caseTasks.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To update the task, click ",l.createElement(t.strong,null,"Edit"),"."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"This task asks you to complete an initial triage of the threat and disclose whether this is a confirmed incident or a false positive. Let’s confirm this incident, which is the default setting."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To confirm the incident, at the Incident Disposition field select ",l.createElement(t.strong,null,"Confirmed"),"."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"NOTE"),': This should be the default value, but if we were not certain of the attack we could disposition as "Unconfirmed", but given the data we should leave it as "Confirmed".'),"\n",l.createElement(t.img,{src:"/1685968220931.91821103989/triageTaskEdit.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"And then we can close this task."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Save"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Complete and Close"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the tasks list, note the newly created tasks."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Completing the previous task generates a new task, asking you to take response actions."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The workflow of the incident response and tasks is driven by the playbooks that are associated with this case. Also, notice how the severity has been automatically set to ",l.createElement(t.strong,null,"High")," and the ",l.createElement(t.strong,null,"Tier 2")," Analyst team has been added as the case owner."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Now, you can open the ",l.createElement(t.em,null,"Take Appropriate Response Actions")," task."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Take appropriate response actions")," task."),"\n",l.createElement(t.img,{src:"/1685968220899.91751103976/caseTasks2.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"You can see that the next step is to Take Response Actions to mitigate the threat"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To update the task, click ",l.createElement(t.strong,null,"Edit"),"."),"\n",l.createElement(t.img,{src:"/1685968220927.91821103986/responseTaskEdit.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the ",l.createElement(t.strong,null,"How to respond?")," field select appropriate options:"),"\n"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Isolate machine")," (database.example.com and 172.20.13.104 are compromised)"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Deactivate user")," (Dan is compromised)."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Blocklist IP address")," (The IP with bad reputation should be blocked: 128.210.157.251 and 199.36.158.100)."),"\n",l.createElement(t.img,{src:"/1685968220923.9181103984/howToRespond.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Using the How to respond field, you can select the response actions that should be taken, and then SOAR will reach out to the integrated tools to orchestrate and execute the response action, and, in this scenario, to post the results back to the case as a note\n",l.createElement("br"),l.createElement("br"),"You will want to execute the following responses:\n",l.createElement("br"),"• Isolate machine; because the database.example.com and 172.20.13.104 (Dan’s PC) are compromised.\n",l.createElement("br"),"• Deactivate user; because the account Dan is compromised.\n",l.createElement("br"),"• Blocklist IP address; because the IP addresses with bad reputation should be blocked: 128.210.157.251 and 199.36.158.100."),"\n"),"\n"),"\n"),"\n",l.createElement(t.ol,{start:"14"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Save"),"."),"\n",l.createElement(t.img,{src:"/1685968220927.91821103987/responseTaskSave.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Review the pop-up message on the page and click ",l.createElement(t.strong,null,"Close"),"."),"\n",l.createElement(t.img,{src:"/1685968220931.91821103988/tasksWereUpdated.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Note that based on the inputs you select, the system will respond accordingly and add additional tasks. Here, we see that we have taken containment actions at the:\n",l.createElement("br"),l.createElement("br"),"Device layer via our integrated EDR, so the affected machines are isolated using the EDR.\n",l.createElement("br"),l.createElement("br"),"Identity layer via our integrated IAM, so the compromised user is isolated.\n",l.createElement("br"),l.createElement("br"),"Network layer via our integrated NDR, so you can block access to the external IP addresses with bad reputation.\n",l.createElement("br"),l.createElement("br"),"The ability to take response actions cross-product is another XDR feature which can be used to help enforce a Zero Trust strategy."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To close the task, click ",l.createElement(t.strong,null,"Complete and Close"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the task list, note the new tasks that are autocompleted."),"\n",l.createElement(t.img,{src:"/1685968220907.91771103977/caseTasks3.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Note that the newly injected tasks are configured to auto-respond. Thus, the SOAR platform can automatically remediate some actions, such as isolating the host by integrating with EDR tools, block-listing the malicious IP addresses in NDR tools. and deactivating compromised accounts in IAM tools. Every task that you perform (user and machine) as part of the response strategy is documented, tracked, and available for reporting.\n",l.createElement("br"),l.createElement("br"),"Before moving on to the post-Incident phase to wrap up this case, you can navigate to the Notes section and review the output from our automations."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Notes")," tab."),"\n",l.createElement(t.img,{src:"/1685968220895.91751103974/caseNotes.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Here, you see that our automation was completed successfully, and you are able to see the users and IP addresses you have taken action on."),"\n"),"\n",l.createElement(t.p,null,"You can now focus on completing the final step in the task list."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Task")," tab."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"To recap, you have effectively detected a threat to the environment, performed analysis with the help of automated threat investigation and federated searches. As a result, you determined it to be a phishing attack, and then you took response actions to contain and mitigate the threat.\n",l.createElement("br"),l.createElement("br"),"Now, as part of the post-incident review, you can generate a case report."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"At the lower right side of the page, click ",l.createElement(t.strong,null,"Generate Case Report"),"."),"\n",l.createElement(t.img,{src:"/1685968220923.9181103981/generateCaseReport.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"At the Select a Template window click ",l.createElement(t.strong,null,"Customize"),"."),"\n",l.createElement(t.img,{src:"/1685968220923.9181103982/generateCaseReport2.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"By default, there are several templates that come with the product, or you can create your own custom templates and save them for future use."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Review the page and click ",l.createElement(t.strong,null,"Back to Case"),"."),"\n",l.createElement(t.img,{src:"/1685968220923.9181103983/generateCaseReport3.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The report is very customizable and provides a lot of data. You can also export the report to a pdf."),"\n"),"\n",l.createElement(t.p,null,"Let's go back to the case and close it."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"After generating the report, mark the ",l.createElement(t.strong,null,"Generated incident report")," task as completed and also the ",l.createElement(t.strong,null,"Investigate Exposure of Personal Information/Data")," task. That automatically closes the case."),"\n",l.createElement(t.img,{src:"/1685968220911.91771103978/caseTasks4.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"After generating the report, you have completed the last task on the list, which automatically closes the case.\n",l.createElement("br"),l.createElement("br"),"We are able to show the whole incident response lifecycle on the QRadar XDR platform.\n",l.createElement("br"),l.createElement("br"),"The case data can be preserved and available to reference in the future from within the platform."),"\n"),"\n"),"\n"),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},l.createElement(t.h2,{id:"summary"},l.createElement(t.a,{href:"#summary"},"Summary")),"\n",l.createElement(t.p,null,"During today’s demonstration, we have covered how the XDR platform can augment the traditional SOC processes and enhance the overall analyst experience through accelerated incident response with simple automation, process standardization, and integration to your existing security tools. Your SOC analysts can work more efficiently by leveraging an open security platform to connect the pieces together using the attack timeline and enrich the data using X-Force threat Intelligence and other third-party threat intelligence, such as VirusTotal. Then the platform orchestrates cross-domain incident response and enables federated threat hunting still leveraging X-Force and other vendors threat intelligence. With the XDR platform, your analysts can achieve faster time-to-value with out of the box capabilities and content to address your most critical use cases.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var c=n(4184),s=n.n(c),i=n(4690),m=n(1140),u=n(2565),d=n(8531),h=n(3383),p=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:c}=e,i=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),g=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(d.Z,{className:p.YS},l.createElement("article",{className:s()(p.Y2,!g&&p.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},c)),g&&l.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(i.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(1151),r=n(5045);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,CopyText:r.O5};var c=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:c}=e,{description:s,title:i,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),d={title:t||i,description:n||s,url:""+m+(o||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:u}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,d.title),a.createElement("link",{rel:"canonical",href:d.url}),a.createElement("meta",{name:"description",content:d.description}),a.createElement("meta",{property:"og:title",content:d.title}),a.createElement("meta",{property:"og:url",content:d.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:d.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:d.title}),a.createElement("meta",{name:"twitter:url",content:d.url}),a.createElement("meta",{name:"twitter:description",content:d.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),c=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&s(r,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-102-md-e106181dcf5c6b5ed4c3.js.map