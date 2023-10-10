"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1560],{1295:function(e,t,a){a.r(t),a.d(t,{Head:function(){return E},default:function(){return x}});var n=a(1151),o=a(7294);function s(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3"},(0,n.ah)(),e.components);return o.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"watsonx-data-and-ai-platform-workshop"},o.createElement(t.h1,{id:"watsonx-data-and-ai-platform-workshop"},"watsonx data and AI platform workshop"),"\n",o.createElement(t.p,null,"This workshop includes hands on labs designed to provide practical experience with IBM's data and AI platform, watsonx."),"\n",o.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"labs"},o.createElement(t.h2,{id:"labs"},o.createElement(t.a,{href:"#labs"},"Labs")),"\n",o.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"watsonxai"},o.createElement(t.h3,{id:"watsonxai"},o.createElement(t.a,{href:"#watsonxai"},o.createElement(t.a,{href:"/watsonx/watsonxai"},"watsonx.ai"))),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"watsonxdata"},o.createElement(t.h3,{id:"watsonxdata"},o.createElement(t.a,{href:"#watsonxdata"},o.createElement(t.a,{href:"/watsonx/watsonxdata"},"watsonx.data"))),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"watsonx-assistant"},o.createElement(t.h3,{id:"watsonx-assistant"},o.createElement(t.a,{href:"#watsonx-assistant"},o.createElement(t.a,{href:"/watsonx/assistant"},"watsonx Assistant"))),"\n"),o.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"watsonx-code-assistant---coming-soon"},o.createElement(t.h3,{id:"watsonx-code-assistant---coming-soon"},o.createElement(t.a,{href:"#watsonx-code-assistant---coming-soon"},"watsonx code assistant - coming soon")))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?o.createElement(t,e,o.createElement(s,e)):s(e)},l=a(4184),c=a.n(l),i=a(4690),d=a(1140),m=a(2565),u=a(8531),h=a(3383),f=a(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:a=!0,title:n,timeToComplete:s,updated:r}}},children:l}=e,i=(0,o.useRef)(null),{0:p}=(0,o.useState)(""),E=(null===a||a)&&t;return o.createElement(o.Fragment,null,o.createElement(d.Z,{timeToComplete:s,updated:r},t[0].title||n||""),o.createElement(u.Z,{className:f.YS},o.createElement("article",{className:c()(f.Y2,!E&&f.ey),ref:i},o.createElement(m.Z,{components:{h1:()=>null}},l)),E&&o.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:p})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:n}}}}=e;return o.createElement(i.Z,{pathname:t,title:a||n[0].title||void 0})};function x(e){return o.createElement(p,e,o.createElement(r,e))}},2565:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),o=a(1151),s=a(7563);const r={table:s.y6,a:s.IW,blockquote:s.R4,SubHeader:s.bU,img:s.fb,code:s.dn,QuizAlert:s.SA,Danger:s.b0,Warning:s.v3,CopyText:s.O5};var l=(0,n.memo)((function(e){let{children:t,components:a={}}=e;return n.createElement(o.Zo,{components:{...r,...a}},t)}))},3383:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),o=a(7500),s=a(4184),r=a.n(s),l=a(6488);const c=function(e,t,a){return void 0===t&&(t=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:n,url:o,items:s}=e;t.splice(t.length,0,{depth:a,title:n,url:o}),s&&s.length>0&&c(s,t,a+1)})),t};var i=e=>{const{itemsList:t}=e,a=(0,n.useMemo)((()=>c(t[0].items||[])),[t]),s=(0,l.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:n.createElement("nav",{className:"TableOfContents-module--toc--54d35"},n.createElement("div",{className:"TableOfContents-module--tocStack--90609"},n.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},n.createElement(o.rU,{to:"#",replace:!0},"On this page")),a.map(((e,t)=>{let{title:a,url:o}=e;return n.createElement("a",{className:r()("TableOfContents-module--link--b292b",s===o.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:o},a)}))))}},7315:function(e,t,a){a.d(t,{Y2:function(){return n},YS:function(){return s},ey:function(){return o}});var n="{mdx-fields__slug}-module--article--e3d5a",o="{mdx-fields__slug}-module--noToc--82387",s="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,a){a.d(t,{Zo:function(){return l},ah:function(){return s}});var n=a(7294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||r:s(e),n.createElement(o.Provider,{value:l},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-readme-md-56a8f64f054d495c372f.js.map