"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3307],{1523:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return b}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",h3:"h3",a:"a",p:"p",strong:"strong",h2:"h2",ol:"ol",li:"li",img:"img",code:"code",blockquote:"blockquote",ul:"ul"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"114-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},l.createElement(t.h1,{id:"114-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},"114: IBM watsonx Code Assistant (WCA) for Z Transform COBOL Code to Java"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"goal"},l.createElement(t.h3,{id:"goal"},l.createElement(t.a,{href:"#goal"},"Goal")),"\n",l.createElement(t.p,null,"The goal of this lab is to focus on the ",l.createElement(t.strong,null,"Transform")," phase of the mainframe application modernization lifecycle for z/OS applications. Converting the code from COBOL to Java harnesses the generative AI capabilities that are part of the Code Assistant for Z to generate Java code from the refactored COBOL code. The Java code produced is a well architected object-oriented Java that has been optimized for IBM Z runtimes and qualities of service with the required interoperability, integration, and standardization."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"transform-cobol-code-to-java"},l.createElement(t.h2,{id:"transform-cobol-code-to-java"},l.createElement(t.a,{href:"#transform-cobol-code-to-java"},"Transform COBOL Code to Java")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Click the Windows ",l.createElement(t.strong,null,"Start")," button (the Microsoft Windows logo in the bottom left corner of the demo screen), and select the ",l.createElement(t.strong,null,"Visual Studio Code")," integrated development environment (IDE)."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/open-vscode.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Expand the ",l.createElement(t.strong,null,"New: IBM watsonx Code Assistant for Z in Z Open Editor")," twistie, and select ",l.createElement(t.strong,null,"Enable the IBM watsonx Code Assistant for Z integration with Z Open Editor (requires an account)")," checkbox, if not selected already. Then close the ",l.createElement(t.strong,null,"Welcome to Z Open Editor")," window by clicking the ",l.createElement(t.strong,null,"X")," at the top of the tab’s name."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/enable-wcaz.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Explorer")," panel on the left, expand ",l.createElement(t.strong,null,"IBM WATSONX CODE ASSISTANT FOR Z")," at the bottom. You will see a warning that the IDE is missing an API key. Click the ",l.createElement(t.strong,null,"Missing watsonx API key")," warning (the yellow text)."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/select-missing-api-key.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"The ",l.createElement(t.strong,null,"Enter watsonx API key (Press ‘Enter’ to confirm or ‘Escape’ to cancel)")," box appears at the top of the IDE - Visual Studio Code screen. Enter ",l.createElement(t.code,null,"ABCDEFGH")," and press the ",l.createElement(t.strong,null,"Enter")," key on your keyboard."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," ",l.createElement(t.strong,null,"ABCDEFGH")," is a fake API only for this demo. In a real environment, a real API key must be used."),"\n"),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Explorer")," panel on the left, expand the ",l.createElement(t.strong,null,"NAZARE-DEMO-CICS-GENAPP (WORKSPACE)")," twistie, and click ",l.createElement(t.strong,null,"LGACDB01.cbl")," under the cobol section. A new tab opens to the right displaying the COBOL code. Scroll down to ",l.createElement(t.strong,null,"line 151")," to view the ",l.createElement(t.strong,null,"INSERT CUSTOMER")," part of the code. You will notice this is the COBOL code that was exported from the workbook from the ",l.createElement(t.strong,null,"Refactor")," phase of the previous lab."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/open-cobol-code.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Explorer")," panel on the left, right-click on ",l.createElement(t.strong,null,"LGACDB01.cbl"),", and select on ",l.createElement(t.strong,null,"Import COBOL program"),". ",l.createElement(t.strong,null,"Note:")," The COBOL program is imported to ",l.createElement(t.strong,null,"IBM WATSONX CODE ASSISTANT FOR Z")," as ",l.createElement(t.strong,null,"base\\LGACDB01.cbl"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/import-cobol.png",alt:""}),"\n",l.createElement(t.ol,{start:"7"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Explorer")," panel, under ",l.createElement(t.strong,null,"IBM WATSONX CODE ASSISTANT FOR Z"),", expand the ",l.createElement(t.strong,null,"base\\LGACDB01.cbl")," twistie. You will see two entries: ",l.createElement(t.strong,null,"Generate Java Identifiers")," & ",l.createElement(t.strong,null,"Generate Java Methods"),". Click ",l.createElement(t.strong,null,"Generate Java Identifiers"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generate-java-identifiers.png",alt:""}),"\n",l.createElement(t.ol,{start:"8"},"\n",l.createElement(t.li,null,"A ",l.createElement(t.strong,null,"Generate Java Classes")," input bar appears at the top middle of the IDE - Visual Studio Code screen. Enter ",l.createElement(t.code,null,"java")," as the relative directory within the workspace to generate the java classes, and press the ",l.createElement(t.strong,null,"Enter")," key on your keyboard."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/java-class-directory.png",alt:""}),"\n",l.createElement(t.ol,{start:"9"},"\n",l.createElement(t.li,null,"A new input bar opens in the same location. Enter ",l.createElement(t.code,null,"com.ibm.wcaz")," as the Java package name used by the generated Java classes, and press the ",l.createElement(t.strong,null,"Enter")," key on your keyboard."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/java-package.png",alt:""}),"\n",l.createElement(t.ol,{start:"10"},"\n",l.createElement(t.li,null,"A new ",l.createElement(t.strong,null,"Java identifiers")," tab appears on the right-hand side of the window. Click the twisties to expand the ",l.createElement(t.strong,null,"LGACDB01")," and ",l.createElement(t.strong,null,"CUSTOMER")," artifacts. You can see the variables that are used in the ",l.createElement(t.strong,null,"LGACDB01")," and ",l.createElement(t.strong,null,"CUSTOMER")," artifacts. Next, click on ",l.createElement(t.strong,null,"Generate Java classes"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generate-java-classes.png",alt:""}),"\n",l.createElement(t.p,null,"In the ",l.createElement(t.strong,null,"Explorer")," panel, you will notice the newly generated java classes under the ",l.createElement(t.strong,null,"java\\com\\ibm\\wcaz")," directory."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generated-java-classes.png",alt:""}),"\n",l.createElement(t.ol,{start:"11"},"\n",l.createElement(t.li,null,"Double-click on the ",l.createElement(t.strong,null,"Customer.java")," class to open it. ",l.createElement(t.strong,null,"Customer.java")," opens in a new tab. In the ",l.createElement(t.strong,null,"Customer.java")," class, you can see the getter, setters, and variable overrides (You might have to scroll to see all of the code)."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/customer-class.png",alt:""}),"\n",l.createElement(t.ol,{start:"12"},"\n",l.createElement(t.li,null,"Now double-click on the ",l.createElement(t.strong,null,"CustomerRequest.java")," class to open it. ",l.createElement(t.strong,null,"CustomerRequest.java")," opens in a new tab. At the bottom of ",l.createElement(t.strong,null,"CustomerRequest.java")," (You might have to scroll to see all of the code), right click on the ",l.createElement(t.strong,null,"insertCustomer")," method name. Then click ",l.createElement(t.strong,null,"IBM Watsonx Code Assistantfor Z")," and select ",l.createElement(t.strong,null,"Generate Method"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/insert-customer-method.png",alt:""}),"\n",l.createElement(t.ol,{start:"13"},"\n",l.createElement(t.li,null,"A new ",l.createElement(t.strong,null,"java-generate")," tab opens to the right. Click ",l.createElement(t.strong,null,"Insert")," at the bottom right of the ",l.createElement(t.strong,null,"java-generate")," tab to insert the Java method into the ",l.createElement(t.strong,null,"CustomerRequest.java")," code file."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generate-method.png",alt:""}),"\n",l.createElement(t.p,null,"Notice that the Java method details are added to ",l.createElement(t.strong,null,"CustomerRequest.java")," class file in the ",l.createElement(t.strong,null,"insertCustomer")," method."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generated-method.png",alt:""}),"\n",l.createElement(t.p,null,"You have successfully completed the ",l.createElement(t.strong,null,"Transform")," phase of the mainframe application modernization lifecycle. In this lab:"),"\n",l.createElement(n,{text:"There is a quiz question on the Transform phase."}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"You used the ",l.createElement(t.strong,null,"LGACDB01")," workbook that you exported in the ",l.createElement(t.strong,null,"Refactor")," phase to insert customer functionality"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"You imported this workbook using IBM watsonx Code Assistant for z"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"You generated Java classes and Java methods"),"\n"),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-reached-the-end-of-lab-114-using-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},l.createElement(t.h3,{id:"congratulations-youve-reached-the-end-of-lab-114-using-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},l.createElement(t.a,{href:"#congratulations-youve-reached-the-end-of-lab-114-using-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},"Congratulations, you've reached the end of lab 114 using IBM watsonx Code Assistant (WCA) for Z Transform COBOL Code to Java.")),"\n",l.createElement(t.p,null,"You can now ",l.createElement(t.strong,null,l.createElement(t.a,{href:"https://learn.ibm.com/course/view.php?id=16039"},"complete the quiz"))," for IBM watsonx Code Assistant for Z for Technical Sales Level 3 Quiz."),"\n",l.createElement(t.p,null,"Once the quiz is completed, click, ",l.createElement(t.strong,null,l.createElement(t.a,{href:"/watsonx/codeassistant/z"},"IBM watsonx Code Assistant for Z"))," to go to the IBM watsonx Code Assistant for Z home page.")))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var s=n(4184),c=n.n(s),i=n(4690),m=n(1140),u=n(8623),h=n(8531),d=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:o,updated:r}}},children:s}=e,i=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),p=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:o,updated:r},t[0].title||a||""),l.createElement(h.Z,{className:g.YS},l.createElement("article",{className:c()(g.Y2,!p&&g.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},s)),p&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:E})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(i.Z,{pathname:t,title:n||a[0].title||void 0})};function b(e){return l.createElement(E,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-z-114-md-3bcd4c8e270c622d3b12.js.map