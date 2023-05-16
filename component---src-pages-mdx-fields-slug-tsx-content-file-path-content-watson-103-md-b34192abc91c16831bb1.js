"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7797],{1447:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var a=n(1151),i=n(7294);function o(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",img:"img",ol:"ol",li:"li",h3:"h3",ul:"ul",code:"code",blockquote:"blockquote"},(0,a.ah)(),e.components),{SubHeader:n,QuizAlert:o}=t;return o||l("QuizAlert",!0),n||l("SubHeader",!0),i.createElement(i.Fragment,null,i.createElement(t.h1,{id:"103-out-the-box-artificial-intelligence"},"103: Out-the-box Artificial Intelligence"),"\n",i.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",i.createElement(t.h2,{id:"in-this-lesson"},i.createElement(t.a,{href:"#in-this-lesson"},"In this lesson")),"\n",i.createElement(o,{text:"Heads up! Parts of this section will be on the quiz."}),"\n",i.createElement(t.p,null,"Learn about the artificial intelligence that runs out-of-the-box in Watson Assistant."),"\n",i.createElement(t.h2,{id:"prerequisites"},i.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",i.createElement(t.p,null,"Complete this section with the assistant you used in the 102 section ",i.createElement(t.strong,null,"or")," your own assistant. If you\nwant to use your own assistant, you must ",i.createElement(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-admin-backup-restore#backup-restore-import"},"upload")," the following ",i.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Watson-Asst-Lab/main/action-skills/begin-103-action-skill.json"},"Action skill")," which reflects the\nskill after completing section 102."),"\n",i.createElement(t.h2,{id:"see-disambiguation-at-work"},i.createElement(t.a,{href:"#see-disambiguation-at-work"},"See Disambiguation at work")),"\n",i.createElement(t.p,null,"To see the confidence scores, you must be in the Preview window within the Actions page of your assistant. Go back to your assistant's ",i.createElement(t.strong,null,"Actions")," page, and open the ",i.createElement(t.strong,null,"Preview"),"."),"\n",i.createElement(t.p,null,'Say "account opening", and note the clarifying question that your assistant asks in response to\nthe input.'),"\n",i.createElement(t.img,{src:"/1684232552741.0921089218/image-002.png",alt:""}),"\n",i.createElement(t.p,null,"To view the confidence scores in your assistant:"),"\n",i.createElement(t.ol,null,"\n",i.createElement(t.li,null,"Click the ",i.createElement(t.strong,null,"Debug mode")," icon."),"\n",i.createElement(t.li,null,"Hover your mouse over the ",i.createElement(t.strong,null,"dial icon"),' next to the "account opening" message.'),"\n",i.createElement(t.li,null,"This will display the confidence scores as percentages."),"\n"),"\n",i.createElement(t.img,{src:"/1684232552741.0921089219/image-003.png",alt:""}),"\n",i.createElement(t.h2,{id:"autolearning"},i.createElement(t.a,{href:"#autolearning"},"Autolearning")),"\n",i.createElement(t.p,null,"When end users interact with your assistant, they provide the assistant with a lot of data on their behavior. Watson Assistant pays attention to this, and it learns from such behaviors over time."),"\n",i.createElement(t.p,null,"Consider disambiguation. When your assistant asks a clarifying question and shows a list of suggested actions, if end users most often click the same on (option #2, for example), then your assistant should (and does!) learn from that experience."),"\n",i.createElement(t.p,null,"It learns that option #2 is likely to be the best answer to that type of question. Next time, it may list option #2 as the first choice, so end users can get to it more quickly."),"\n",i.createElement(t.p,null,"And, if the pattern persists over time, your assistant can change its behavior even further. Instead of asking the customer to choose from a list of options, it will choose option #2 as the answer, rather than asking for clarification.As Watson Assistant learns, end users get the best answer more often, in fewer clicks, and their experience improves!"),"\n",i.createElement(t.h2,{id:"digression--change-conversation-topic"},i.createElement(t.a,{href:"#digression--change-conversation-topic"},"Digression / Change conversation topic")),"\n",i.createElement(t.h3,{id:"what-is-a-digression"},i.createElement(t.a,{href:"#what-is-a-digression"},"What is a digression?")),"\n",i.createElement(t.p,null,'We, as people, often get distracted or change the subject during a conversation. For example,\nimagine I was telling you an incredibly interesting story about seeing my friend Arvind with\nbinoculars. To you, this might be far from the most interesting story you had ever heard. You\nmight interrupt and say, "Wow! Also, before I forget, I got some cheap tickets to see the Jets\nnext month. Want to come with me?""'),"\n",i.createElement(t.p,null,"End users also want to be able to change the topic when they interact with a virtual assistant.\nWatson Assistant is flexible: it can seamlessly switch between actions when the end user wants a\nchange."),"\n",i.createElement(t.h3,{id:"see-digression-at-work"},i.createElement(t.a,{href:"#see-digression-at-work"},"See Digression at work")),"\n",i.createElement(t.p,null,"Here is an example of digression where Watson Assistant moves between different actions:"),"\n",i.createElement(t.ol,null,"\n",i.createElement(t.li,null,"In the ",i.createElement(t.strong,null,"Preview"),' type "I\'m thinking about applying for a student loan".'),"\n",i.createElement(t.li,null,"Note the assistant recognizes the ",i.createElement(t.strong,null,"Applying for a student loan")," action."),"\n",i.createElement(t.li,null,'Now type "How much can we get in loans?".'),"\n",i.createElement(t.li,null,"Note that the assistant will digress to the ",i.createElement(t.strong,null,"Student loan amounts")," action."),"\n",i.createElement(t.li,null,"Then, once you complete the ",i.createElement(t.strong,null,"Student loan amounts"),' action by selecting "Undergraduate", the assistant returns to the original "Applying for a student loan" action.'),"\n"),"\n",i.createElement(t.img,{src:"/1684232552745.0921089220/image-004.png",alt:""}),"\n",i.createElement(t.img,{src:"/1684232552745.0921089221/image-005.png",alt:""}),"\n",i.createElement(t.h2,{id:"slot-filling"},i.createElement(t.a,{href:"#slot-filling"},"Slot-filling")),"\n",i.createElement(t.p,null,"Slot-filling is a term that refers to storing information that the end user shares with the assistant.\nYou can think of the assistant as storing each piece of information in a slot."),"\n",i.createElement(t.p,null,"To see this in action:"),"\n",i.createElement(t.ol,null,"\n",i.createElement(t.li,null,"Open a ",i.createElement(t.strong,null,"Preview")," of the assistant from the ",i.createElement(t.strong,null,"Actions")," page.","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"If you have an active preview open click the refresh button."),"\n"),"\n"),"\n",i.createElement(t.li,null,"Click the ",i.createElement(t.code,null,"fx")," button to see the slots the assistant maintains."),"\n",i.createElement(t.li,null,"Enter some of these utterances:","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,'"I want to open a new account"'),"\n",i.createElement(t.li,null,'"Investment"'),"\n",i.createElement(t.li,null,'"837479088"'),"\n"),"\n"),"\n",i.createElement(t.li,null,"Note how data is filled in on the ",i.createElement(t.strong,null,"Action variable")," window"),"\n"),"\n",i.createElement(t.img,{src:"/1684232552745.0921089222/image-006.jpg",alt:""}),"\n",i.createElement(t.img,{src:"/1684232552745.0921089223/image-007.png",alt:""}),"\n",i.createElement(t.p,null,"This, by itself, is not an artificial intelligence feature. Artificial intelligence comes in when the\nend user corrects themselves or provides information out of order or ahead of time."),"\n",i.createElement(t.p,null,"Click ",i.createElement(t.strong,null,"Refresh"),' and say "I want to open a new account and my investor account is 8875888", and then select "investment" for the type of account. Note that Watson Assistant puts the investor number in its slot, even though you told Watson Assistant previously to expect it in a subsequent step.'),"\n",i.createElement(t.img,{src:"/1684232552745.0921089224/image-008.png",alt:""}),"\n",i.createElement(t.h2,{id:"disabling-digression-and-disambiguation"},i.createElement(t.a,{href:"#disabling-digression-and-disambiguation"},"Disabling digression and disambiguation")),"\n",i.createElement(o),"\n",i.createElement(t.p,null,"While digression and disambiguation are enabled by default for all actions, builders can enable\nor disable disambiguation and digression, either across the entire assistant or for specific actions."),"\n",i.createElement(t.p,null,"When disambiguation is disabled across the entire assistant, the assistant will never ask for\nclarification. It will either go to an action or tell the end user it does not understand their\nmessage. When disambiguation is disabled for a specific action, that action will never be\nsuggested by the assistant as a potential option for the end user to choose from."),"\n",i.createElement(t.p,null,"When digression is disabled across the entire assistant, the assistant will never allow an end user\nto change the topic. The end user must finish their current action before moving to a new topic.\nWhen digression is disabled for a specific action, the assistant will not allow the end user to\nchange topics to or from that specific action."),"\n",i.createElement(t.p,null,"Take a minute to think about why a builder might want to disable disambiguation across the\nentire assistant. How about disabling it across some specific actions? What about disabling\ndigression across the entire assistant? How about disabling digression for some specific actions?"),"\n",i.createElement(t.p,null,"Now practice disabling disambiguation and digression for your assistant. As shown below, go to\nthe ",i.createElement(t.strong,null,"Actions (1)")," page, then click the gear icon in the top right to open the ",i.createElement(t.strong,null,"Global settings (2)"),"."),"\n",i.createElement(t.img,{src:"/1684232552745.0921089225/image-011.jpg",alt:""}),"\n",i.createElement(t.p,null,"The global settings window opens directly on the ",i.createElement(t.strong,null,"Ask clarifying question (1)")," tab. This is where\nyou can toggle disambiguation On or Off (2) for all actions. Leave it On for now."),"\n",i.createElement(t.img,{src:"/1684232552745.0921089226/image-012.jpg",alt:""}),"\n",i.createElement(t.p,null,"Next, move to the ",i.createElement(t.strong,null,"Change conversation topic (1)")," tab, shown below. This is where you can\ntoggle digression ",i.createElement(t.strong,null,"On or Off (2)")," for all actions. Leave it On. You will test turning both features\noff for an individual action, instead. Hit ",i.createElement(t.strong,null,"Close (3)")," to return to the ",i.createElement(t.strong,null,"Actions")," window."),"\n",i.createElement(t.img,{src:"/1684232552745.0921089227/image-013.jpg",alt:""}),"\n",i.createElement(t.p,null,"Now, practice disabling disambiguation and digression for a specific action. Click on the “Open\na new account” action, then click on the ",i.createElement(t.strong,null,"Action settings")," icon:"),"\n",i.createElement(t.img,{src:"/1684232552745.0921089228/image-014.png",alt:""}),"\n",i.createElement(t.p,null,"Then, switch both toggles to ",i.createElement(t.strong,null,"Off"),", and hit ",i.createElement(t.strong,null,"Save"),":"),"\n",i.createElement(t.img,{src:"/1684232552745.0921089229/image-015.png",alt:""}),"\n",i.createElement(t.blockquote,null,"\n",i.createElement(t.p,null,"Note: It was important to leave disambiguation and digression enabled in the global settings,\notherwise the toggles for specific actions would have been locked in the ",i.createElement(t.strong,null,"off")," position."),"\n"),"\n",i.createElement(t.p,null,"Now, go back to the ",i.createElement(t.strong,null,"Preview"),' panel, and try these brief conversations. Type "accounts":'),"\n",i.createElement(t.img,{src:"/1684232552745.0921089230/image-016.png",alt:""}),"\n",i.createElement(t.blockquote,null,"\n",i.createElement(t.p,null,'Note that on the left, the "How do I open a new account" action is not shown as a suggestion –\nthis is because you just excluded it from disambiguation.'),"\n"),"\n",i.createElement(t.p,null,'Now, Refresh the chat, and type "how do I open a new account". Then, instead of responding to\nthe assistant’s question of what type of an account you want to open, try to force a digression by\nsaying "time to open an account":'),"\n",i.createElement(t.img,{src:"/1684232552745.0921089231/image-017.png",alt:""}),"\n",i.createElement(t.p,null,"Note that it does not let you digress when you ask how long it takes to open an account."),"\n",i.createElement(t.blockquote,null,"\n",i.createElement(t.p,null,"Note: Toggle both features back on if you intend to continue using your demo outside of this lab."),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?i.createElement(t,e,i.createElement(o,e)):o(e)};function l(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var r=n(7315),c=n(2125),u=n(403),m=n(4690),h=n(4184),g=n.n(h);const d={table:u.y6,a:u.IW,blockquote:u.R4,SubHeader:u.bU,img:u.fb,code:u.dn,QuizAlert:u.SA},p=i.memo((function(e){let{children:t}=e;return i.createElement(a.Zo,{components:{...d}},t)})),f=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:a}=e,o=(0,i.useRef)(null),{0:s,1:l}=(0,i.useState)("");(0,i.useEffect)((()=>{if(!o.current)return;const e=o.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&l(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const u=(null===n||n)&&t;return i.createElement(i.Fragment,null,i.createElement("article",{className:g()(r.Y,!u&&r.e),ref:o},i.createElement(p,null,a)),u&&i.createElement(c.Z,{itemsList:t,maxDepth:1,currSection:s}))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return i.createElement(m.Z,{pathname:t,title:n||a[0].title||void 0})};function b(e){return i.createElement(f,e,i.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watson-103-md-b34192abc91c16831bb1.js.map