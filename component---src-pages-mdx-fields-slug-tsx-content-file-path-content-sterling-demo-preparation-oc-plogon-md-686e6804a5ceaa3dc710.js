"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[201],{1318:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return E}});var r=n(1151),o=n(7294);function a(e){const t=Object.assign({section:"section",h1:"h1",p:"p",a:"a",strong:"strong",img:"img"},(0,r.ah)(),e.components);return o.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"demo-prep---openshift-logon"},o.createElement(t.h1,{id:"demo-prep---openshift-logon"},"Demo prep - OpenShift Logon"),"\n",o.createElement(t.p,null,"This demonstration workshop uses an OpenShift environment provisioned from IBM Technology Zone (ITZ) ",o.createElement(t.a,{href:"https://techzone.ibm.com/my/reservations/create/63dba359cc19150018af084f"},"here"),". If you are attending the workshop in-person, this OpenShift environment has already been created for you."),"\n",o.createElement(t.p,null,"In a web browser open the link to the OpenShift Cluster provided from your workshop leader."),"\n",o.createElement(t.p,null,"When the page loads, you will see an IDP selector, choose ",o.createElement(t.strong,null,"workshop-user")),"\n",o.createElement(t.img,{src:"/1684835682208.1619852452/OCPIDPChooser.png",alt:"image"}),"\n",o.createElement(t.p,null,"At the login prompt, type in ",o.createElement(t.strong,null,"cluster-user")," as the Username and enter the password from your workshop leader. Then, press ",o.createElement(t.strong,null,"Log in"),"."),"\n",o.createElement(t.img,{src:"/1684835682208.1619852453/OCPLogin.png",alt:"image"}),"\n",o.createElement(t.p,null,"In a moment, a page like the one below should open in the browser window."),"\n",o.createElement(t.img,{src:"/1684835682224.162852469/OSWebConsoleOverview.png",alt:"image"}),"\n",o.createElement(t.p,null,"Leave this browser window open. It will be used again later."),"\n",o.createElement(t.p,null,"That concludes the setup of access to the OpenShift cluster. Proceed to the next part of the demonstration guide to configure B2Bi."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?o.createElement(t,e,o.createElement(a,e)):a(e)},c=n(4184),i=n.n(c),m=n(4690),s=n(1140),u=n(2565),p=n(8531),d=n(3383),h=n(7315);const f=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:r,timeToComplete:a,updated:l}}},children:c}=e,m=(0,o.useRef)(null),{0:f}=(0,o.useState)(""),g=(null===n||n)&&t;return o.createElement(o.Fragment,null,o.createElement(s.Z,{timeToComplete:a,updated:l},t[0].title||r||""),o.createElement(p.Z,{className:h.YS},o.createElement("article",{className:i()(h.Y2,!g&&h.ey),ref:m},o.createElement(u.Z,{components:{h1:()=>null}},c)),g&&o.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:f})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:r}}}}=e;return o.createElement(m.Z,{pathname:t,title:n||r[0].title||void 0})};function E(e){return o.createElement(f,e,o.createElement(l,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),o=n(1151),a=n(987);const l={table:a.y6,a:a.IW,blockquote:a.R4,SubHeader:a.bU,img:a.fb,code:a.dn,QuizAlert:a.SA};var c=(0,r.memo)((function(e){let{children:t,components:n={}}=e;return r.createElement(o.Zo,{components:{...l,...n}},t)}))},4690:function(e,t,n){var r=n(7294),o=n(1072),a=n(2401);t.Z=e=>{const{title:t,description:n,pathname:l,children:c}=e,{description:i,title:m,origin:s}=(0,a.Z)(),{i18n:{language:u}}=(0,o.$G)(),p={title:t||m,description:n||i,url:""+s+(l||"")};return r.createElement(r.Fragment,null,r.createElement("html",{lang:u}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),r.createElement("title",null,p.title),r.createElement("link",{rel:"canonical",href:p.url}),r.createElement("meta",{name:"description",content:p.description}),r.createElement("meta",{property:"og:title",content:p.title}),r.createElement("meta",{property:"og:url",content:p.url}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:description",content:p.description}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:title",content:p.title}),r.createElement("meta",{name:"twitter:url",content:p.url}),r.createElement("meta",{name:"twitter:description",content:p.description}),r.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),r.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),o=n(7500),a=n(4184),l=n.n(a),c=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:r,url:o,items:a}=e;t.splice(t.length,0,{depth:n,title:r,url:o}),a&&a.length>0&&i(a,t,n+1)})),t};var m=e=>{const{itemsList:t}=e,n=(0,r.useMemo)((()=>i(t[0].items||[])),[t]),a=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:r.createElement("nav",{className:"TableOfContents-module--toc--54d35"},r.createElement("div",{className:"TableOfContents-module--tocStack--90609"},r.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},r.createElement(o.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:o}=e;return r.createElement("a",{className:l()("TableOfContents-module--link--b292b",a===o.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:o},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return r},YS:function(){return a},ey:function(){return o}});var r="{mdx-fields__slug}-module--article--e3d5a",o="{mdx-fields__slug}-module--noToc--82387",a="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return a}});var r=n(7294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:a(e),r.createElement(o.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-demo-preparation-oc-plogon-md-686e6804a5ceaa3dc710.js.map