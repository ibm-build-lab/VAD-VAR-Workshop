"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9088],{3805:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return y}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",img:"img",code:"code",ol:"ol",li:"li",blockquote:"blockquote",ul:"ul"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-actions"},a.createElement(t.h1,{id:"102-actions"},"102: Actions"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"in-this-section"},a.createElement(t.h2,{id:"in-this-section"},a.createElement(t.a,{href:"#in-this-section"},"In this section")),"\n",a.createElement(n,{text:"Heads up! Parts of this section will be on the quiz."}),"\n",a.createElement(t.p,null,"Learn about the fundamental building blocks of a virtual assistant."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prerequisites"},a.createElement(t.h2,{id:"prerequisites"},a.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",a.createElement(t.p,null,"Complete this section with the assistant you used in the 101 section ",a.createElement(t.strong,null,"or")," your own assistant. If you\nwant to use your own assistant, you must ",a.createElement(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-admin-backup-restore#backup-restore-import"},"upload")," the following ",a.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Watson-Asst-Lab/main/action-skills/LendyrActions_v17_Live_lastchecked03Jan2023.json"},"Action skill")," which reflects the skill after completing section 101."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"building-your-first-action"},a.createElement(t.h2,{id:"building-your-first-action"},a.createElement(t.a,{href:"#building-your-first-action"},"Building your first action")),"\n",a.createElement(t.p,null,"Let's get started creating a new action. In order to do so start by clicking the ",a.createElement(t.strong,null,"Actions")," option available in the left-hand navigation bar to get to the Actions page. Once there you should see a long list of current actions already there if you imported the JSON file from earlier into your assistant."),"\n",a.createElement(t.img,{src:"/1684760999393.47391089174/image-009.png",alt:""}),"\n",a.createElement(t.p,null,"Clicking the ",a.createElement(t.strong,null,"Search icon")," you should be able to use a text input to query the list. Start by typing ",a.createElement(t.code,null,"Open an account")," into the search field to find the corresponding action."),"\n",a.createElement(t.p,null,'Now, imagine that you work on the Lendyr virtual assistant team, and you received a message that this automation will be discontinued. You need to replace this Action with a new one so that customers don\'t run into a "dead end" when they try to open a new account.'),"\n",a.createElement(t.p,null,"In order to delete the action:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"ellipsis icon")," to show options for the action."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Delete")," from the overflow menu."),"\n",a.createElement(t.li,null,"Confirm the deletion of this action by clicking ",a.createElement(t.strong,null,"Delete")," again in the modal."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999393.47391089175/image-010.jpg",alt:""}),"\n",a.createElement(t.p,null,'Now let\'s build a new conversation flow that starts with the question "I want to open a new checking account please". Something like:'),"\n",a.createElement(t.img,{src:"/1684760999393.47391089176/image-011.png",alt:""}),"\n",a.createElement(t.p,null,"To build it:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"New action +")," button"),"\n",a.createElement(t.li,null,"In the resulting menu select ",a.createElement(t.strong,null,"Start from scratch")),"\n",a.createElement(t.li,null,"Give it the name ",a.createElement(t.code,null,"I want to open a new checking account please")," and click ",a.createElement(t.strong,null,"Save")),"\n"),"\n",a.createElement(t.img,{src:"/1684760999393.47391089177/image-012.png",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999393.47391089178/image-013.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999393.47391089179/image-014.png",alt:""}),"\n",a.createElement(t.p,null,"We've created our action and you should see an empty first step available to you. Now to fill in the Step 1:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Add the clarifying question in the ",a.createElement(t.strong,null,"Assistants says"),' text box, such as "What type of account would you like to open?".'),"\n",a.createElement(t.li,null,"Then click ",a.createElement(t.strong,null,"Define customer response"),"."),"\n",a.createElement(t.li,null,"Hover over ",a.createElement(t.strong,null,"Options"),"."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"As a list")," to enter the account options."),"\n",a.createElement(t.li,null,"On the resulting popup enter three options ",a.createElement(t.strong,null,"Checking"),", ",a.createElement(t.strong,null,"Savings"),", and ",a.createElement(t.strong,null,"Investment"),"."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Apply")," to save your changes."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999393.47391089182/image-017.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999393.47391089183/image-018.png",alt:""}),"\n",a.createElement(t.p,null,"Your are now done with your first step! Click the ",a.createElement(t.strong,null,"Save icon")," in the top-right to save the changes to your new action."),"\n",a.createElement(t.img,{src:"/1684760999393.47391089184/image-019.jpg",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,'Aside from the Save button, Watson Assistant automatically saves changes when you click on a\nnew step or open the preview. There\'s no "undo," however the auto-save can be switched off.\nFor more details, check the product documentation ',a.createElement(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-save-actions"},"here"),"."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"preview-your-action"},a.createElement(t.h2,{id:"preview-your-action"},a.createElement(t.a,{href:"#preview-your-action"},"Preview your action")),"\n",a.createElement(t.p,null,"Note the ",a.createElement(t.strong,null,"Preview")," button in the lower-right which is present on virtually every screen you build your Actions. This button gives you the ability to instantly preview how the assistant works, at any time. Go ahead and click ",a.createElement(t.strong,null,"Preview"),":"),"\n",a.createElement(t.img,{src:"/1684760999393.47391089185/image-020.jpg",alt:""}),"\n",a.createElement(t.p,null,"This open the ",a.createElement(t.strong,null,"Preview"),' panel. Try out the newly added action by entering something similar to "How can I open a new account?".'),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Note that although you didn't train the assistant on that specific question it was still able to response will the correct response for our newly created action."),"\n"),"\n",a.createElement(t.p,null,"Now select one of the account types, and note that the action is complete; there are no additional steps for the assistant to take."),"\n",a.createElement(t.img,{src:"/1684760999397.4741089186/image-021.png",alt:""}),"\n",a.createElement(t.p,null,'Click the refresh icon, and try asking the question another way, such as "I need a new account". Note that the assistant doesn\'t recognize this input:'),"\n",a.createElement(t.img,{src:"/1684760999397.4741089187/image-022.jpg",alt:""}),"\n",a.createElement(t.p,null,"Let's expand the action to be able to understand this phase:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Customer starts with:")," section on the left-hand side."),"\n",a.createElement(t.li,null,"Enter the phrase ",a.createElement(t.code,null,"I need a new account"),"."),"\n",a.createElement(t.li,null,"You should now have 2 phrases available for the customer to start with."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999397.4741089188/image-023.jpg",alt:""}),"\n",a.createElement(t.p,null,"Start the preview again and use this phrase to ensure our assistant is now able to understand it."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-another-clarification-step"},a.createElement(t.h2,{id:"create-another-clarification-step"},a.createElement(t.a,{href:"#create-another-clarification-step"},"Create another clarification step")),"\n",a.createElement(t.p,null,"With your first step created and tested, let's finish this Action by creating another step:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the first step in the side menu."),"\n",a.createElement(t.li,null,"Add ",a.createElement(t.strong,null,"Step 2")," by clicking ",a.createElement(t.strong,null,"New step +"),"."),"\n",a.createElement(t.li,null,"Enter ",a.createElement(t.code,null,"What's your investor number?")," in the ",a.createElement(t.strong,null,"Assistant says")," box."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Define customer response")," and select ",a.createElement(t.strong,null,"Number"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999397.4741089190/image-025.jpg",alt:""}),"\n",a.createElement(t.p,null,"Next, you need to add some flow logic. Given the way this flow is intended to work an investor number should only be gathered in the case of the customer wanting to open an investment account. To do this:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"without conditions")," to ",a.createElement(t.strong,null,"with conditions"),"."),"\n",a.createElement(t.li,null,"Ensure the ensure to the first question was ",a.createElement(t.strong,null,"Investment")," by select it from the dropdown."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Save icon")," to ensure these changes are saved."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999397.4741089191/image-026.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999397.4741089192/image-027.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999397.4741089196/image-033.jpg",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-an-agent-handoff-step"},a.createElement(t.h2,{id:"create-an-agent-handoff-step"},a.createElement(t.a,{href:"#create-an-agent-handoff-step"},"Create an agent handoff step")),"\n",a.createElement(t.p,null,"Now, you will add steps 3 and 4, each of which provide a final outcome to the user. In order to create step 3:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Ensure you are currently viewing ",a.createElement(t.strong,null,"Step 2"),"."),"\n",a.createElement(t.li,null,"Add ",a.createElement(t.strong,null,"Step 3")," by clicking ",a.createElement(t.strong,null,"Next step +"),"."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"with conditions")," to make this step conditional, and enter the same condition used before (Step 1 = Investment)."),"\n",a.createElement(t.li,null,"Enter ",a.createElement(t.code,null,"Let's connect you to an agent who can open a new investment account for you!")," into the ",a.createElement(t.strong,null,"Assistant says")," box."),"\n",a.createElement(t.li,null,"Click the options under ",a.createElement(t.strong,null,"And then")," and select ",a.createElement(t.strong,null,"Connect to agent")),"\n",a.createElement(t.li,null,"In the resulting modal, under ",a.createElement(t.strong,null,"Message to agent (Optional)")," type ",a.createElement(t.code,null,"The customer wants to open an investment account, and their investor number is $")," to give context to the live agent.","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Note that the ",a.createElement(t.code,null,"$")," will cause a dropdown to appear. Be sure to click ",a.createElement(t.strong,null,"2. What's your investor number")," to pass this data along to the agent."),"\n"),"\n"),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Apply")),"\n",a.createElement(t.li,null,"Finally, click the ",a.createElement(t.strong,null,"Save icon")," again in the top-right."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999397.4741089194/image-029.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999397.4741089195/image-030.jpg",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-final-response-step"},a.createElement(t.h2,{id:"create-a-final-response-step"},a.createElement(t.a,{href:"#create-a-final-response-step"},"Create a final response step")),"\n",a.createElement(t.p,null,"Lastly, let's create the final step of this action. This one should return a link to the user based on type of account they want to open. To create this step:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Ensure ",a.createElement(t.strong,null,"Step 3")," is selected."),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Next step +")," to add ",a.createElement(t.strong,null,"Step 4"),"."),"\n",a.createElement(t.li,null,"Under ",a.createElement(t.strong,null,"Assistant says")," type ",a.createElement(t.code,null,"To open a"),"."),"\n",a.createElement(t.li,null,"Now click the ",a.createElement(t.strong,null,"Variable")," button."),"\n",a.createElement(t.li,null,"Insert the response from Step 1 as the Action variable ",a.createElement(t.strong,null,"(1. What type of account would you like to open?)"),"."),"\n",a.createElement(t.li,null,"Now complete the line with ",a.createElement(t.code,null,"account, visit our online portal"),"."),"\n",a.createElement(t.li,null,"Make the text ",a.createElement(t.code,null,"online portal")," a link by selecting it and clicking the ",a.createElement(t.strong,null,"Link")," toolbar icon.","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Under the ",a.createElement(t.strong,null,"URL")," section input ",a.createElement(t.code,null,"lendyr.com/open-a-new-account?account_type=$"),"."),"\n",a.createElement(t.li,null,"The ",a.createElement(t.code,null,"$")," will once again invoke our Action variables, and you can select ",a.createElement(t.strong,null,"type of account")," (Note: this will not create a working URL; it is just an illustration of how a parameter is passed through a link)."),"\n"),"\n"),"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Apply")," to create the link."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999397.4741089197/image-034.png",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999397.4741089198/image-035.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999397.4741089199/image-036.png",alt:""}),"\n",a.createElement(t.p,null,"Now let's apply some conditions by:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Changing ",a.createElement(t.strong,null,"without conditions")," to ",a.createElement(t.strong,null,"with conditions"),"."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"1. What type of account..."),"."),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"is")," to ",a.createElement(t.strong,null,"is any of"),"."),"\n",a.createElement(t.li,null,"Ensure both ",a.createElement(t.strong,null,"Checking")," and ",a.createElement(t.strong,null,"Savings")," are selected."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999401.4741089200/image-037.png",alt:""}),"\n",a.createElement(t.p,null,"Finally, ensure the ",a.createElement(t.strong,null,"And then")," option is set to ",a.createElement(t.strong,null,"End the action")," to end the action after this step."),"\n",a.createElement(t.img,{src:"/1684760999401.4741089201/image-038.jpg",alt:""}),"\n",a.createElement(t.p,null,"Boom! Your steps should now be complete. Open up the preview and test the some of the steps of this action."),"\n",a.createElement(t.img,{src:"/1684760999401.4741089202/image-039.jpg",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"preview-your-assistant"},a.createElement(t.h2,{id:"preview-your-assistant"},a.createElement(t.a,{href:"#preview-your-assistant"},"Preview your assistant")),"\n",a.createElement(n),"\n",a.createElement(t.p,null,"Navigate back to the home page of your assistant. Next, you will check to see how your assistant will appear to users on the web. To do this:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"On the left side, click ",a.createElement(t.strong,null,"Preview"),"."),"\n",a.createElement(t.li,null,"Note the inline preview for you to test the assistant."),"\n",a.createElement(t.li,null,"The ",a.createElement(t.strong,null,"Customize web chat")," button will allow you to change the look of your assistant."),"\n",a.createElement(t.li,null,"Make sure you are in the ",a.createElement(t.strong,null,"Style")," tab of the resulting menu."),"\n",a.createElement(t.li,null,"Change the ",a.createElement(t.strong,null,"Assistant's name as known by customers"),' to "Lendyr Assistant".'),"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"Add an avatar image")," and point to ",a.createElement(t.a,{href:"https://web-chat.global.assistant.watson.appdomain.cloud/assets/Lendyr-Avatar.png"},"this image link"),"."),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"Primary color")," to ",a.createElement(t.code,null,"#004144"),". This is the color of the chant header."),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"Secondary color")," to ",a.createElement(t.code,null,"#3D3D3D"),". This colors the message bubble."),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"Accent color")," to ",a.createElement(t.code,null,"#004144"),". This accentuates certain responses and icons."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999401.4741089207/image-044.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999401.4741089208/image-045.png",alt:""}),"\n",a.createElement(t.img,{src:"/1684760999401.4741089209/image-046.jpg",alt:""}),"\n",a.createElement(t.p,null,"Now you will customize the home screen tab. Start by:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"home screen")," tab."),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"Greeting"),' to: "Hi, I\'m Lendyr assistant! How can I help you?"'),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"Starter 1"),' to: "Get to know Lendyr"'),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"Starter 2"),' to: "Pay bills"'),"\n",a.createElement(t.li,null,"Change ",a.createElement(t.strong,null,"Starter 3"),' to: "Find nearest branches"'),"\n"),"\n",a.createElement(t.p,null,"You've now customized your assistant to be similar to the Lendyr demo."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"preview-your-assistant-on-lendyr-banks-website"},a.createElement(t.h2,{id:"preview-your-assistant-on-lendyr-banks-website"},a.createElement(t.a,{href:"#preview-your-assistant-on-lendyr-banks-website"},"Preview your assistant on Lendyr Bank's website")),"\n",a.createElement(t.p,null,"Now, you will embed your assistant in the Lendyr Bank’s website! To do this:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Embed")," tab."),"\n",a.createElement(t.li,null,"Copy the value of your assistant's ",a.createElement(t.strong,null,"integration ID")," and paste it into a text document. You will use the value shortly"),"\n",a.createElement(t.li,null,"Copy the value of your assistants's ",a.createElement(t.strong,null,"region")," and paste it into a text document."),"\n",a.createElement(t.li,null,"Copy the value of your assistants's ",a.createElement(t.strong,null,"serviceInstanceId")," and paste it into a text document."),"\n",a.createElement(t.li,null,"Finally, click ",a.createElement(t.strong,null,"Save and exit"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684760999401.4741089210/image-047.jpg",alt:""}),"\n",a.createElement(t.p,null,"Now take those three values, and plug them into this URL:"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"https://www.ibm.com/products/watson-assistant/demos/lendyr/demo.html?integrationID=ID_HERE&region=REGION_HERE&serviceInstanceID=ID_HERE")),"\n",a.createElement(t.p,null,'Open this URL and explore the "Open a new account" Action in your assistant. You have successfully created and used your first Action on the Lendyr Bank site! Nicely done.'),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"simple-qa-action"},a.createElement(t.h2,{id:"simple-qa-action"},a.createElement(t.a,{href:"#simple-qa-action"},"Simple Q&A action")),"\n",a.createElement(n),"\n",a.createElement(t.p,null,"Let’s build a second Action. This Action will simply answer an end user’s question about how\nlong it takes to open an account. First, get back to the ",a.createElement(t.strong,null,"Actions (1)")," screen by clicking on the\n",a.createElement(t.strong,null,"Actions")," left-hand menu item. Then, click ",a.createElement(t.strong,null,"New action + (2)"),":"),"\n",a.createElement(t.img,{src:"/1684760999405.4741089211/image-048.png",alt:""}),"\n",a.createElement(t.p,null,"As you did earlier, select the ",a.createElement(t.strong,null,"Start from scratch")," option (we’ll look at templates later in this lab).\nFor the customer utterance, enter “Time to open an account” (",a.createElement(t.strong,null,"1)")," and click ",a.createElement(t.strong,null,"Save (2)"),":"),"\n",a.createElement(t.img,{src:"/1684760999405.4741089213/image-049.png",alt:""}),"\n",a.createElement(t.p,null,"In the first step, in ",a.createElement(t.strong,null,"Assistant says (1)"),', enter: "New Lendyr customers can open a new account in\none to two business days. Existing Lendyr customers can open a new account in minutes via the\nweb portal or by speaking with a Lendyr account expert." Then, click ',a.createElement(t.strong,null,"New step +"),":"),"\n",a.createElement(t.img,{src:"/1684760999405.4741089212/image-049-2.png",alt:""}),"\n",a.createElement(t.p,null,"In this second step, click the ",a.createElement(t.strong,null,"Image response type")," icon in ",a.createElement(t.strong,null,"Assistant says"),":"),"\n",a.createElement(t.img,{src:"/1684760999405.4741089214/image-050.png",alt:""}),"\n",a.createElement(t.p,null,"Then, add an image with the following properties:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Source URL:")," ",a.createElement(t.a,{href:"https://img.money.com/2020/10/checking-vs-savings-revised-1.gif"},"https://img.money.com/2020/10/checking-vs-savings-revised-1.gif")),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Alt text:")," Checking versus savings"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Title:")," Checking versus savings"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Description:")," Learn more about checking, savings, and other account types on our website!"),"\n"),"\n",a.createElement(t.p,null,"Verify that your screen looks like the image below, and click ",a.createElement(t.strong,null,"Apply"),":"),"\n",a.createElement(t.img,{src:"/1684760999405.4741089215/image-051.png",alt:""}),"\n",a.createElement(t.p,null,"This will be the last step in this Action, so change ",a.createElement(t.strong,null,"And then (1)")," to ",a.createElement(t.strong,null,"End the action (2)"),":"),"\n",a.createElement(t.img,{src:"/1684760999405.4741089216/image-052.png",alt:""}),"\n",a.createElement(t.p,null,'Brainstorm and add a few more example phrases to this Action – start with, "How long does it\ntake to open a new account?" (Remember, you can enter these by clicking on the ',a.createElement(t.strong,null,"Customer\nstarts with:")," window.) Now, Save and Preview your new Action using your custom Lendyr\nURL!")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};var i=n(4184),c=n.n(i),s=n(4690),m=n(1140),u=n(2565),h=n(8531),g=n(3383),E=n(7315);const d=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:i}=e,s=(0,a.useRef)(null),{0:d}=(0,a.useState)(""),p=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:E.YS},a.createElement("article",{className:c()(E.Y2,!p&&E.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},i)),p&&a.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:d})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function y(e){return a.createElement(d,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(1151),r=n(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var l=n(7294),a=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:i}=e,{description:c,title:s,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,a.$G)(),h={title:t||s,description:n||c,url:""+m+(o||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,h.title),l.createElement("link",{rel:"canonical",href:h.url}),l.createElement("meta",{name:"description",content:h.description}),l.createElement("meta",{property:"og:title",content:h.title}),l.createElement("meta",{property:"og:url",content:h.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:h.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:h.title}),l.createElement("meta",{name:"twitter:url",content:h.url}),l.createElement("meta",{name:"twitter:description",content:h.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watson-102-md-787dbe1e3674867ca54d.js.map