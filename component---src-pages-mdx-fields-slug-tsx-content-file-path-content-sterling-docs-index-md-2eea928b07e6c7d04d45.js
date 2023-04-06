"use strict";(self.webpackChunkvad_var=self.webpackChunkvad_var||[]).push([[454],{4939:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return h}});var a=n(1151),i=n(7294);function o(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",ul:"ul",li:"li",span:"span"},(0,a.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),i.createElement(i.Fragment,null,i.createElement(t.h1,{id:"introduction"},"Introduction"),"\n",i.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",i.createElement(t.p,null,"Welcome to the IBM Sterling Data Exchange Level 3 demonstration workshop! The goal of this guide is to provide IBM and Business Partner technical sellers with the knowledge and tools to perform hands-on demonstrations of IBM Sterling B2B Integrator."),"\n",i.createElement(t.p,null,"In addition to completing all the steps in this demonstration guide, to obtain the associated IBM Sterling Data Exchange Level 3 badge:"),"\n",i.createElement(t.p,null,i.createElement(t.strong,null,"IBM Technical Sellers")," must develop and record a Stand & Deliver presentation. This video is intended to simulate delivery of a “live” demo in front of a client — on camera. IBMers will have flexibility in defining a hypothetical client, the pain points the client has, and the goals they aspire to achieve. The recording will then cover the seller’s hands-on demonstration and pitch to the client the value of the IBM solution using the environment and techniques of this lab. Specific criteria that must be demonstrated as part of the Stand & Deliver recordings is provided within the documentation that accompanies the Level 3 course in Your Learning."),"\n",i.createElement(t.p,null,i.createElement(t.strong,null,"Business Partners")," must pass an accreditation quiz after completing this demonstration guide. The quiz consists of multiple choice questions, with four possible responses (and only one correct answer) for each question. The quiz verifies use of the demonstration environment and not general knowledge of the offering.",i.createElement(t.strong,null,'Hint: keep the demonstration guide and the associated IBM Technology Zone (TechZone) environment active while completing the quiz. Watch for the "BP quiz question" :green_circle: icon in the demonstration guide.')),"\n",i.createElement(t.p,null,"Before jumping to the Demonstration Overview, please read the guidance below. ",i.createElement(t.strong,null,"Reading and understanding the information will save time while completing the steps in this guide.")),"\n",i.createElement(t.h2,{id:"recommended-browsers"},i.createElement(t.a,{href:"#recommended-browsers"},"Recommended browsers")),"\n",i.createElement(t.p,null,"It is recommended to use either Firefox or Safari web browsers. There has been at least one instance reported using the Chrome browser and some popup menus not being populated and some popup dialogs not appearing. No testing has been done using the Microsoft Edge browser."),"\n",i.createElement(t.h2,{id:"helpful-tips-for-using-this-demonstration-guide-and-environment"},i.createElement(t.a,{href:"#helpful-tips-for-using-this-demonstration-guide-and-environment"},"Helpful tips for using this demonstration guide and environment")),"\n",i.createElement(t.p,null,"Throughout the guide, images are used to help guide students through the demonstration."),"\n",i.createElement(t.p,null,"The following styles of highlighting are utilized in images:"),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Action highlight box: Illustrates where to click, enter, or select an item:"),"\n"),"\n",i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 212px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/VAD-VAR-Workshop/static/54d4bf3af439648685985a027fac4dd4/69bf9/ClickActionRectangle.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.122699386503065%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4klEQVR42r3RPUsDQRSF4WcTCUQLQYQlViKkV2yiiIIBG0WwsRT8QJMVbYwo+MvDrrOyw2LQQpMgFm9x4Mw793Ih1bSHHnbmpKdpF8s0ZCite3eotK90MCVVt6/UEaKj4YKWYQwvCpeCI8GJ4PgXqk5fkAkeFNGx6IaFWjiQa8efZmNVcFsL264mwnuFtXr0Zhz/Z6pO1e0K7j6F11+FaS2chY1/FXb+cuVMYWmOo6TfhS2DGEbGMrkzufMpOZV7khsaT66ceIwhVdpW2pyR6s1KvX4Sh9OVeMUIz3MyknjD1gdaEd9+Cb/aPAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/VAD-VAR-Workshop/static/54d4bf3af439648685985a027fac4dd4/3ee7d/ClickActionRectangle.webp 163w,\n/VAD-VAR-Workshop/static/54d4bf3af439648685985a027fac4dd4/5074d/ClickActionRectangle.webp 212w"\n              sizes="(max-width: 212px) 100vw, 212px"\n              type="image/webp"\n            />\n          <source\n            srcset="/VAD-VAR-Workshop/static/54d4bf3af439648685985a027fac4dd4/c649e/ClickActionRectangle.png 163w,\n/VAD-VAR-Workshop/static/54d4bf3af439648685985a027fac4dd4/69bf9/ClickActionRectangle.png 212w"\n            sizes="(max-width: 212px) 100vw, 212px"\n            type="image/png"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/VAD-VAR-Workshop/static/54d4bf3af439648685985a027fac4dd4/69bf9/ClickActionRectangle.png"\n            alt="image"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n  </a>\n    </span>'}}),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"\n",i.createElement(t.p,null,"Path/explore highlight box: Illustrates one of two things:"),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"the path to follow to get to a specific location in the user interface"),"\n",i.createElement(t.li,null,"areas to explore"),"\n"),"\n"),"\n"),"\n",i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 212px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/VAD-VAR-Workshop/static/4e6ae4842773b8dc76c3a0037068c759/69bf9/PathExploreHighlight.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.122699386503065%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR42r3SPUsDQRCA4Wc1ASV+NxELP4kKNoYQuIiCv8QiWqiFlYLgLw933skthyE23h1i8RazzLw7szvQF1wjwaQlieAKmwTPKPR9OlI4aMC+wrHCijw6uGPJUwxuZC7lTuRO5Qa/UOYcyiWRLDq6HubCkVQn3tSMVblRJeyYzoVjmfWq9VCTMndnQXi/KOx9v0V9tv9VuPaXI5eH3Raf0vspXPYYg9swM5Y6l7qoyZnUJDKr1mZaLvZLDLYU9uKCF3YbUNZsVOOH2JyB4B2veGtJWfuB4Rf+CNNwc4muMwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/VAD-VAR-Workshop/static/4e6ae4842773b8dc76c3a0037068c759/3ee7d/PathExploreHighlight.webp 163w,\n/VAD-VAR-Workshop/static/4e6ae4842773b8dc76c3a0037068c759/5074d/PathExploreHighlight.webp 212w"\n              sizes="(max-width: 212px) 100vw, 212px"\n              type="image/webp"\n            />\n          <source\n            srcset="/VAD-VAR-Workshop/static/4e6ae4842773b8dc76c3a0037068c759/c649e/PathExploreHighlight.png 163w,\n/VAD-VAR-Workshop/static/4e6ae4842773b8dc76c3a0037068c759/69bf9/PathExploreHighlight.png 212w"\n            sizes="(max-width: 212px) 100vw, 212px"\n            type="image/png"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/VAD-VAR-Workshop/static/4e6ae4842773b8dc76c3a0037068c759/69bf9/PathExploreHighlight.png"\n            alt="image"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n  </a>\n    </span>'}}),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Copy to clipboard box: The text is copied to the clipboard. Click the copy icon (highlighted below) and then paste using the operating system's paste function. For example, entering ++ctrl++",i.createElement(t.strong,null,"+v"),", ++cmd++",i.createElement(t.strong,null,"+v"),", or right-click and select paste."),"\n"),"\n",i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 650px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/8ac1d/Usage-Clipboard.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 25.766871165644172%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR42n3GW27CMBCFYe9/SZVYAepreSBXj+OZCRDsQhKbxB4UKlWVKiF95+hXGqBpdVXVYAwRIREzb2MGY8B0zIxEWkNnrUUEAETCnpquUc75LDLO4T7NWWSTJeXtfzv96Syy5PQlh4/rTp0vQ1yzv41g6XL14xyn8Pgxvkz/3EOoot6fPtXgfBKZ46I7PA8uLOmR5L24ZhH5dl4VZcn9ySLVra5bbZGQ+D2LRH1/LIsnrDwZmcIsuY0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/3ee7d/Usage-Clipboard.webp 163w,\n/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/2da83/Usage-Clipboard.webp 325w,\n/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/96d09/Usage-Clipboard.webp 650w,\n/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/57a17/Usage-Clipboard.webp 756w"\n              sizes="(max-width: 650px) 100vw, 650px"\n              type="image/webp"\n            />\n          <source\n            srcset="/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/c649e/Usage-Clipboard.png 163w,\n/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/3a76f/Usage-Clipboard.png 325w,\n/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/28895/Usage-Clipboard.png 650w,\n/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/8ac1d/Usage-Clipboard.png 756w"\n            sizes="(max-width: 650px) 100vw, 650px"\n            type="image/png"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/VAD-VAR-Workshop/static/1a7b3a33b619f56908015eb6486e62b4/28895/Usage-Clipboard.png"\n            alt="image"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n  </a>\n    </span>'}}),"\n",i.createElement(t.h2,{id:"acronyms"},i.createElement(t.a,{href:"#acronyms"},"Acronyms")),"\n",i.createElement(t.p,null,"The following acronyms are used throughout this demonstration guide:"),"\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"Applicability Statement 2 (AS2)"),"\n",i.createElement(t.li,null,"Application programming interfaces (APIs)"),"\n",i.createElement(t.li,null,"Artificial Intelligence (AI)"),"\n",i.createElement(t.li,null,"Business Partner (BP)"),"\n",i.createElement(t.li,null,"Electronic Data Interchange (EDI)"),"\n",i.createElement(t.li,null,"IBM Sterling Business to Business Integrator (B2Bi)"),"\n",i.createElement(t.li,null,"IBM Sterling Partner Engagement Manager (PEM)"),"\n",i.createElement(t.li,null,"IBM Technology Zone (ITZ)"),"\n",i.createElement(t.li,null,"Red Hat OpenShift on IBM Cloud (ROKS)"),"\n",i.createElement(t.li,null,"User Interface (UI)"),"\n",i.createElement(t.li,null,"Virtual Machine (VM)"),"\n",i.createElement(t.li,null,"Yet Another Markup Language (YAML)"),"\n"),"\n",i.createElement(t.p,null,"It is now time to proceed to the Demonstration Overview."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?i.createElement(t,e,i.createElement(o,e)):o(e)};var r=n(7315),s=n(2125),c=n(7752),p=n(4690);const g={table:c.y6,a:c.IW,blockquote:c.R4,SubHeader:c.bU},d=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:o}=e,l=(0,i.useRef)(null),{0:c,1:p}=(0,i.useState)("");return(0,i.useEffect)((()=>{if(!l.current)return;const e=l.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&p(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]),i.createElement(i.Fragment,null,i.createElement("article",{className:r.Y,ref:l},i.createElement(a.Zo,{components:{...g}},o)),(null===n||n)&&t&&i.createElement(s.Z,{itemsList:t,maxDepth:1,currSection:c}))},m=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return i.createElement(p.Z,{pathname:t,title:n||a[0].title||void 0})};function h(e){return i.createElement(d,e,i.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-docs-index-md-2eea928b07e6c7d04d45.js.map