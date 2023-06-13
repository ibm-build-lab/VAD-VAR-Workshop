"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8179],{3691:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",img:"img",h3:"h3",ul:"ul",li:"li",strong:"strong"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-envizi-data-management"},l.createElement(t.h1,{id:"104-envizi-data-management"},"104: Envizi data management"),"\n",l.createElement(t.p,null,"The Envizi Technical Sales Intermediate badge demo displays the power of Envizi for identifying opportunities to ESG improvements, track ESG progress year over year, and perform ESG reporting in accordance with numerious ESG frameworks."),"\n",l.createElement(t.p,null,"Streamlined reporting and accelerated decarbonization depends on a comprehensive set of relevant ESG data.  The first step in crafting an Envizi solution is to build that data foundation.  This lab discusses the data management architecture within Envizi."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"envizi-organization-model"},l.createElement(t.h2,{id:"envizi-organization-model"},l.createElement(t.a,{href:"#envizi-organization-model"},"Envizi organization model")),"\n",l.createElement(t.p,null,"The following explains how data is organized and managed for an organization in Envizi."),"\n",l.createElement(t.img,{src:"/1686663287005.4871106775/organization.png",alt:""}),"\n",l.createElement(t.p,null,"An organization represents the whole of a client's business. High level enterprise reporting aggregates all of the data from all accounts and meters in Envizi."),"\n",l.createElement("br"),"\n",l.createElement(t.img,{src:"/1686663286965.4861106770/group.png",alt:""}),"\n",l.createElement(t.p,null,"Groups can be used to organize reporting, as well as for user access. This can be very helpful if you want to delegate regions to certain managers. There are 3 tiers of groups available, main groups and up to 2 child groups. For example a main group might be all company office buildings, with sub groups for each country such as Spain and the UK, and additional sub groups within those for regions in the country, such as London and the South East."),"\n",l.createElement("br"),"\n",l.createElement(t.img,{src:"/1686663286973.48631106771/location.png",alt:""}),"\n",l.createElement(t.p,null,"Locations usually represent a physical building or group of buildings. In addition to the data from accounts and meters at a location, other attributes can be stored such as address, region, date opened, refurbishments and their dates, floor space, occupancy and more."),"\n",l.createElement("br"),"\n",l.createElement(t.img,{src:"/1686663286993.48681106773/meter+account.png",alt:""}),"\n",l.createElement(t.p,null,"Transactional & activity data. Accounts can vary widely from Electricty bills to flight travel data, spend with a particular supplier or on goods or materials. Meters capture much more granular data from IT sensors or smart meters at 15, 30, or 60 minutes."),"\n",l.createElement("br"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"group-management"},l.createElement(t.h2,{id:"group-management"},l.createElement(t.a,{href:"#group-management"},"Group management")),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"groups"},l.createElement(t.h3,{id:"groups"},l.createElement(t.a,{href:"#groups"},"Groups")),"\n",l.createElement(t.p,null,'To manage groups in Envizi, click "Manage" -> "Groups"'),"\n",l.createElement(t.img,{src:"/1686663286981.48661106772/manage-groups.png",alt:""}),"\n",l.createElement(t.p,null,'The group list is highly configurable. Groups can be searched, filtered, and the column names can be drag-and-dropped and shown / hidden to customize the view. These preferences are user specific and will persist. New groups can be created in 4 different ways, 3 via the UI, and also via email by sending the bulk creation setup template. Clicking the "New group" button is the simplest way to add a new group. The "Create new group with memberships" button allows you to specify locations that are part of the group, which is most commonly used after the fact when locations are already created. Note that you can always right click and edit a group after the fact.'),"\n",l.createElement(t.img,{src:"/1686663286953.48581106769/group-view.png",alt:""}),"\n",l.createElement(t.p,null,"Group Type:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Classification groups are the main category that is used, and represent primary reporting hierarchy."),"\n",l.createElement(t.li,null,"Portfolio groups can represent any other secondary group for user access or reporting purposes."),"\n"),"\n",l.createElement(t.p,null,"Belongs To:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"The organization which the group is under."),"\n"),"\n",l.createElement(t.p,null,"Part Of:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"NA represents a level 1 top tier group."),"\n",l.createElement(t.li,null,"Clicking another choice will create this group as a secondary or tertiary group underneath."),"\n"),"\n",l.createElement(t.img,{src:"/1686663286997.48681106774/new-group.png",alt:""}),"\n",l.createElement(t.p,null,"Bulk creating of groups is also possible via upload of a bulk group template file, downloadable below."),"\n",l.createElement("a",{href:"/envizi/Envizi_SetupGroups_VEST.xlsx"},"bulk group create / update template"),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,'Click "Manage" -> "Upload files" -> "Create new" and attach the filled out template. You can then verify the group(s) have been created by going back to the groups view.'),"\n",l.createElement(t.img,{src:"/1686663287009.48731106776/template-upload.png",alt:""}),"\n",l.createElement(t.p,null,"There is another tool which allows you to see uploaded / emailed files and re-download them or verify they loaded correctly."),"\n",l.createElement(t.img,{src:"/1686663286949.48581106768/extract-groups.png",alt:""}),"\n",l.createElement(t.p,null,"Similar processes exist for the creation of locations, accounts, meters, users, and historical data, but those are out of scope for this section."),"\n",l.createElement(t.p,null,"That's the end of this section! Continue on to learn about the more granular data model within accounts."),"\n",l.createElement("hr"),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"granular-data-model"},l.createElement(t.h2,{id:"granular-data-model"},l.createElement(t.a,{href:"#granular-data-model"},"Granular data model")),"\n",l.createElement(t.p,null,"The following is an explanation of the four key components of the Envizi data management system at the account level."),"\n",l.createElement(t.img,{src:"/1686663286945.48561106765/data-model-summary.png",alt:""}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Flexible"),"\n",l.createElement(t.li,null,"Hierarchical in nature"),"\n",l.createElement(t.li,null,"Configured to meet client requirements"),"\n"),"\n",l.createElement(t.p,null,"Each customer data model is mapped out during the onboarding process through customer consultation to determine the data types that would need to be captured and account styles needed to capture specific fields that might be either:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Account styles mapped from supplier files that would be used in automated data collection"),"\n",l.createElement(t.li,null,"fields needed to satisfy reporting requirements."),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"data-types"},l.createElement(t.h3,{id:"data-types"},l.createElement(t.a,{href:"#data-types"},"Data Types")),"\n",l.createElement(t.p,null,"Data Types are the foundational building block of Envizi's data model."),"\n",l.createElement(t.p,null,"Configurable, but managed by envizi's product team."),"\n",l.createElement(t.p,null,"Define:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Data category to be managed (e.g. Water, Natural Gas, Electricity)"),"\n",l.createElement(t.li,null,"Primary unit of measure (cost and consumption) to be recorded against the data type"),"\n",l.createElement(t.li,null,"Emissions scope (1, 2, or 3) and emissions factor assignment process for the data type if applicable."),"\n"),"\n",l.createElement(t.p,null,'Social metrics or building information data types may have "No Scope".'),"\n",l.createElement(t.p,null,"Scope and data category play a part in how the emissions factor is applied for that data in the platform."),"\n",l.createElement(t.p,null,"Envizi has an existing library of 4,000+ data types. The library is constantly expanding when necessary to meet client data collection needs."),"\n",l.createElement(t.img,{src:"/1686663286949.48581106767/data-types-example.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"account-styles"},l.createElement(t.h3,{id:"account-styles"},l.createElement(t.a,{href:"#account-styles"},"Account Styles")),"\n",l.createElement(t.p,null,"Data schema configured on top of a Data Type\nConfigured ",l.createElement(t.strong,null,"per customer")," to provide flexibility to meet different data capture requirements"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Defines the specific data fields to be captured, split in to primary and secondary fields."),"\n",l.createElement(t.li,null,"Can allow for drop-downs to be added to support things like multi-unit data capture, currency pick-lists, etc."),"\n",l.createElement(t.li,null,"Supports rules to:","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Make certain fields mandatory"),"\n",l.createElement(t.li,null,"Provide default values"),"\n",l.createElement(t.li,null,"Perform simple math on input to derive a field value based on other captured data."),"\n"),"\n"),"\n"),"\n",l.createElement(t.img,{src:"/1686663286945.48561106764/account-styles.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"accounts"},l.createElement(t.h3,{id:"accounts"},l.createElement(t.a,{href:"#accounts"},"Accounts")),"\n",l.createElement(t.p,null,"Accounts are the end point for data storage within Envizi.  Data captured via UI or connectors is associated with an Account."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Unique by name and ID"),"\n",l.createElement(t.li,null,"Configured at a location level"),"\n",l.createElement(t.li,null,"Configured with a specific data type and account style."),"\n",l.createElement(t.li,null,"When creating a new account, first choose the data type, then the account style."),"\n",l.createElement(t.li,null,"Serves as the end point for data storage when data is injested either by manual capture or automation via Connectors."),"\n",l.createElement(t.li,null,"Use as reporting entity that rolls up through grouping hierarchy."),"\n"),"\n",l.createElement(t.img,{src:"/1686663286941.48561106763/account-example.png",alt:""}),"\n",l.createElement(t.p,null,"Continue to ",l.createElement(t.a,{href:"/envizi/105"},"lab 105"),"."))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(4184),c=n.n(i),s=n(4690),u=n(1140),m=n(2565),d=n(8531),p=n(3383),h=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:i}=e,s=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),f=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(d.Z,{className:h.YS},l.createElement("article",{className:c()(h.Y2,!f&&h.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},i)),f&&l.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:g})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function E(e){return l.createElement(g,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-envizi-104-md-fe15ffa82f013f55e17e.js.map