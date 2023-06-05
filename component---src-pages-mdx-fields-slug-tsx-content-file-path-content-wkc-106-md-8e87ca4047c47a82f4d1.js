"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6430],{6784:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",a:"a",h4:"h4",h2:"h2",img:"img",ol:"ol",li:"li"},(0,l.ah)(),e.components),{CopyText:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CopyText",!0),a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"106-governing-virtual-data"},a.createElement(t.h1,{id:"106-governing-virtual-data"},"106: Governing Virtual Data"),"\n",a.createElement(t.p,null,"Watson Query can integrate with Watson Knowledge Catalog to govern the virtual data that is published to a governed catalog. This section is ",a.createElement(t.strong,null,"optional")," for technical sellers and business partners that are interested in learning how to govern virtualized data in ",a.createElement(t.strong,null,"Watson Query")," using the data governance features of ",a.createElement(t.strong,null,"Watson Knowledge Catalog"),". This section uses a very simple masking example based on column names using the ",a.createElement(t.strong,null,"Redaction")," masking method, to demonstrate the integration between the two services with the least amount of setup and configuration. It ",a.createElement(t.strong,null,"does not")," use the ",a.createElement(t.strong,null,"advanced data privacy")," masking methods that are defined in the ",a.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/102#7-create-data-protection-rules"},"Create Data Protection Rules")," section of this ",a.createElement(t.strong,null,"Data governance")," lab above."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"provision-a-watson-knowledge-catalog-service"},a.createElement(t.h4,{id:"provision-a-watson-knowledge-catalog-service"},a.createElement(t.a,{href:"#provision-a-watson-knowledge-catalog-service"},"Provision a Watson Knowledge Catalog Service")),"\n",a.createElement(t.p,null,"Before you proceed, you must have a ",a.createElement(t.strong,null,"Watson Knowledge Catalog")," service provisioned in the same cloud account, and cloud region where your ",a.createElement(t.strong,null,"Watson Query")," service is provisioned. If not, go to the ",a.createElement(t.strong,null,"Provision the Services")," step of the ",a.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/getting-started"},"Getting started")," section of the ",a.createElement(t.strong,null,"Data fabric lab")," and follow the instructions to provision one."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-create-service-authorizations"},a.createElement(t.h2,{id:"1-create-service-authorizations"},a.createElement(t.a,{href:"#1-create-service-authorizations"},"1. Create Service Authorizations")),"\n",a.createElement(t.p,null,"In order for ",a.createElement(t.strong,null,"Watson Query")," to publish to a governed catalog and enforce ",a.createElement(t.strong,null,"Watson Knowledge Catalog")," data protection rules, a service to service authorization has to be created in your IBM Cloud account using ",a.createElement(t.strong,null,"Identify and Access Management")," (IAM)."),"\n",a.createElement(t.img,{src:"/1685968221831.93871104685/image389.png",alt:""}),"\n",a.createElement(t.p,null,"Go to the ",a.createElement(t.a,{href:"https://cloud.ibm.com/login"},"IBM Cloud")," Log in page."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Enter your IBM Id."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Continue")," button."),"\n"),"\n"),"\n",a.createElement(t.p,null,"When prompted, enter your password and any additional authentication requests you are presented with."),"\n",a.createElement(t.img,{src:"/1685968221835.93871104687/image390.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Manage")," menu on the toolbar."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Access (IAM)")," menu item."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1685968221839.9391104688/image391.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Authorizations")," menu item from the ",a.createElement(t.strong,null,"Manage access")," section of the menu on the left."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Create")," button."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1685968221839.9391104689/image392.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select ",a.createElement(t.strong,null,"This account")," as the Source account. (It should be selected by default)."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the ",a.createElement(t.strong,null,"Source service")," dropdown, start typing ",a.createElement(t.strong,null,"watson know")," into the search area, select ",a.createElement(t.strong,null,"Watson Knowledge Catalog")," from the service list."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"All Resources")," radio button for how you want to scope the source service access."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the ",a.createElement(t.strong,null,"Target service")," dropdown, select ",a.createElement(t.strong,null,"Watson Query")," from the service list. (It should be the only service listed)."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"All Resources")," radio button for how you want to scope the target service access."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll ",a.createElement(t.strong,null,"down")," to the bottom of the authorizations page."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1685968221839.9391104690/image393.png",alt:""}),"\n",a.createElement(t.ol,{start:"13"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the checkbox in the ",a.createElement(t.strong,null,"Service access")," section next to ",a.createElement(t.strong,null,"DataAccess (For Service to Service Authorization Only)"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Authorize")," button."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1685968221839.9391104691/image394.png",alt:""}),"\n",a.createElement(t.p,null,"You will see the new service to service authorization in your cloud account in the ",a.createElement(t.strong,null,"Manage authorizations")," table."),"\n",a.createElement(t.ol,{start:"15"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"IBM Cloud")," label in the upper left corner to get back to the home page."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-create-governed-catalog"},a.createElement(t.h2,{id:"2-create-governed-catalog"},a.createElement(t.a,{href:"#2-create-governed-catalog"},"2. Create Governed Catalog")),"\n",a.createElement(t.p,null,"In order to govern virtual data in ",a.createElement(t.strong,null,"Watson Query"),", you will need a ",a.createElement(t.strong,null,"governed")," catalog that is created in the same account that your ",a.createElement(t.strong,null,"Watson Query")," service is deployed. This is a catalog that was created with the ",a.createElement(t.strong,null,"Enforce data policies")," option enabled. You can not use the ",a.createElement(t.strong,null,"Platform assets catalog")," because it is ",a.createElement(t.strong,null,"not")," a governed catalog and it cannot be modified to become one."),"\n",a.createElement(t.p,null,"If you have done the ",a.createElement(t.strong,null,"Data governance")," technical lab, you should have a governed catalog created in your account. If not, you can use an existing governed catalog, in the same account and region that your ",a.createElement(t.strong,null,"Watson Query")," service is deployed, or create a new governed catalog."),"\n",a.createElement(t.p,null,"If you need to create a governed catalog, go to the ",a.createElement(t.a,{href:"https://vest.buildlab.cloud/en/wkc/104#1-create-the-catalog"},"Create the Catalog")," section of this lab for instructions on how to create one."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-create-data-protection-rule"},a.createElement(t.h2,{id:"3-create-data-protection-rule"},a.createElement(t.a,{href:"#3-create-data-protection-rule"},"3. Create Data Protection Rule")),"\n",a.createElement(t.p,null,"In this step, you will create a data protection rule to protect sensitive credit card information in the ",a.createElement(t.strong,null,"CUSTOMER")," virtual data asset, by using the ",a.createElement(t.strong,null,"Redaction")," masking method, so the values are not visible to those who do not have the authority to view the information. You will create the data protection rule using ",a.createElement(t.strong,null,"Column name")," as the criteria for the rule condition for columns named: ",a.createElement(t.strong,null,"CREDIT_CARD_NUMBER"),", ",a.createElement(t.strong,null,"CREDIT_CARD_CVV")," and ",a.createElement(t.strong,null,"CREDIT_CARD_EXPIRY"),"."),"\n",a.createElement(t.img,{src:"/1685968221903.94041104729/image7.png",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Navigation")," menu (the 4 stacked horizontal lines in the upper left corner)."),"\n"),"\n",a.createElement(t.img,{src:"/1685968221843.9391104692/image395.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Governance > Rules")," menu."),"\n"),"\n",a.createElement(t.img,{src:"/1685968221843.9391104693/image396.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Using the ",a.createElement(t.strong,null,"Add rule")," dropdown, select ",a.createElement(t.strong,null,"New rule"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1685968221439.92971104402/image133.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Data protection rule"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1685968221443.931104403/image134.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Next")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1685968221847.9391104694/image397.png",alt:""}),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"Copy the text below and paste it into the ",a.createElement(t.strong,null,"Name")," field:"),"\n"),"\n",a.createElement(n,{text:"Protect Credit Card Information"}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Copy the text below and paste it into the ",a.createElement(t.strong,null,"Business definition")," field:"),"\n"),"\n",a.createElement(n,{text:"Protect all components of a credit card. Including the credit card number, credit card validation number (CVV) and the credit card expiration date using the data privacy redaction masking method."}),"\n",a.createElement(t.p,null,"Specify the rule ",a.createElement(t.strong,null,"Criteria")," for ",a.createElement(t.strong,null,"Condition 1")," as follows:"),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the ",a.createElement(t.strong,null,"If")," statement dropdown on the left, select ",a.createElement(t.strong,null,"Column name"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the ",a.createElement(t.strong,null,"If")," statement dropdown on the right, select ",a.createElement(t.strong,null,"contains any"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Copy the text below and paste it into the ",a.createElement(t.strong,null,"Column name")," field:"),"\n"),"\n"),"\n",a.createElement(n,{text:"CREDIT_CARD_NUMBER, CREDIT_CARD_CVV, CREDIT_CARD_EXPIRY"}),"\n",a.createElement(t.ol,{start:"11"},"\n",a.createElement(t.li,null,"Press the ",a.createElement(t.strong,null,"Enter")," or ",a.createElement(t.strong,null,"Return")," key on your keyboard."),"\n"),"\n",a.createElement(t.p,null,"Specify the rule ",a.createElement(t.strong,null,"Action")," as follows:"),"\n",a.createElement(t.ol,{start:"12"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the ",a.createElement(t.strong,null,"then")," statement ",a.createElement(t.strong,null,"Action")," dropdown on the left, select ",a.createElement(t.strong,null,"mask columns"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Using the ",a.createElement(t.strong,null,"then")," statement ",a.createElement(t.strong,null,"in columns containing")," dropdown on the right, select ",a.createElement(t.strong,null,"Column name"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"CREDIT_CARD_NUMBER"),", ",a.createElement(t.strong,null,"CREDIT_CARD_CVV"),", and ",a.createElement(t.strong,null,"CREDIT_CARD_EXPIRY")," columns will automatically be filled in for you."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select ",a.createElement(t.strong,null,"Redact")," as the masking method in the ",a.createElement(t.strong,null,"Select masking method")," section."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Create")," button."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1685968221847.9391104695/image398.png",alt:""}),"\n",a.createElement(t.p,null,"You should see a ",a.createElement(t.strong,null,"Successfully created!")," message and see the new rule created."),"\n",a.createElement(t.ol,{start:"17"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Rules")," breadcrumb in the upper left corner to return to Rules main page."),"\n"),"\n",a.createElement(t.p,null,"Data governance is now setup for ",a.createElement(t.strong,null,"Watson Query")," to use ",a.createElement(t.strong,null,"Watson Knowledge Catalog")," to protect sensitive credit card information.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};var c=n(4184),i=n.n(c),s=n(4690),m=n(1140),u=n(2565),g=n(8531),d=n(3383),E=n(7315);const h=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:c}=e,s=(0,a.useRef)(null),{0:h}=(0,a.useState)(""),p=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(g.Z,{className:E.YS},a.createElement("article",{className:i()(E.Y2,!p&&E.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},c)),p&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:h})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(h,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),r=n(5045);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,CopyText:r.O5};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var l=n(7294),a=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:c}=e,{description:i,title:s,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,a.$G)(),g={title:t||s,description:n||i,url:""+m+(o||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,g.title),l.createElement("link",{rel:"canonical",href:g.url}),l.createElement("meta",{name:"description",content:g.description}),l.createElement("meta",{property:"og:title",content:g.title}),l.createElement("meta",{property:"og:url",content:g.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:g.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:g.title}),l.createElement("meta",{name:"twitter:url",content:g.url}),l.createElement("meta",{name:"twitter:description",content:g.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),c=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&i(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>i(t[0].items||[])),[t]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-wkc-106-md-8e87ca4047c47a82f4d1.js.map