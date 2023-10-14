"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1613],{9291:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h2:"h2",a:"a",p:"p",ol:"ol",li:"li",strong:"strong",pre:"pre",code:"code",span:"span",img:"img",blockquote:"blockquote",em:"em",h3:"h3"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"time-travel-and-rollback"},l.createElement(t.h2,{id:"time-travel-and-rollback"},l.createElement(t.a,{href:"#time-travel-and-rollback"},"Time Travel and Rollback")),"\n",l.createElement(t.p,null,"The Iceberg open table format provides a number of benefits to users, including the ability to see a table as it existed at a point in the past. This time travel capability is useful in a number of different ways. For example, having the ability to query historical data is useful for auditing purposes. Or if an application corrupts table data in some way, you can imagine the value in being able to quickly reverse those changes by resetting the table to a known good state."),"\n",l.createElement(t.p,null,"Iceberg uses snapshots to support this time travel capability. A snapshot represents the state of a table at some point in time. When data is modified in a table, such as inserting, updating, or deleting records, a new snapshot is created. There are maintenance operations that can be used to clean up older snapshots that are no longer needed."),"\n",l.createElement(t.p,null,"As of 3Q 2023, time travel queries are not yet supported in watsonx.data. However, you can roll back a table to an earlier point in time using snapshots. You will go through that process in this section."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Query workspace")," icon from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Copy and paste the following SQL statement into the ",l.createElement(t.strong,null,"SQL worksheet"),". Click ",l.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},"create table iceberg_data.my_schema.airport_id as ",l.createElement(t.span,{className:"hljs-keyword"},"select")," * from hive_data.ontime.airport_id;\n")),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/result.png",alt:""}),"\n",l.createElement(t.p,null,"As shown in the output above after running the query, there are 6,250 rows in this table."),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Data manager")," icon from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Navigate to the ",l.createElement(t.strong,null,"iceberg_data")," > ",l.createElement(t.strong,null,"my_schema")," > ",l.createElement(t.strong,null,"airport_id")," table (if you don’t see the table, refresh the schema). Then, select the ",l.createElement(t.strong,null,"Time travel")," tab."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/time-travel.png",alt:""}),"\n"),"\n"),"\n",l.createElement(t.p,null,"This tab lists the snapshots associated with the table (identified by a ",l.createElement(t.strong,null,"Snapshot ID"),"). At this point there is only one snapshot and there are 6,250 total records (matching what you saw earlier)."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," For reference, you can get snapshot information through SQL as well. For example (and no need to run this now), this will query the snapshots available for the airport_id table:"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select")," * from iceberg_data.my_schema.",l.createElement(t.span,{className:"hljs-string"},'"airport_id',l.createElement(t.span,{className:"hljs-variable"},"$snapshots"),'"')," order by committed_at;\n")),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Query workspace")," icon again from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Copy and paste the following SQL statement into the ",l.createElement(t.strong,null,"SQL worksheet")," and click ",l.createElement(t.em,null,"Run on presto-01"),"."),"\n"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},"insert into iceberg_data.my_schema.airport_id values (10000, ",l.createElement(t.span,{className:"hljs-string"},"'North Pole: Reindeer Field'"),");\n")),"\n",l.createElement(t.ol,{start:"7"},"\n",l.createElement(t.li,null,"Copy and paste (replacing the SQL already there) the following SQL statement into the ",l.createElement(t.strong,null,"SQL worksheet")," and click ",l.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select")," * from iceberg_data.my_schema.airport_id ",l.createElement(t.span,{className:"hljs-built_in"},"where")," code = 10000;\n")),"\n",l.createElement(t.p,null,"You should see the row you inserted in the previous step."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/insert-result.png",alt:""}),"\n",l.createElement(t.ol,{start:"8"},"\n",l.createElement(t.li,null,"Copy and paste (replacing the SQL already there) the following SQL statement into the ",l.createElement(t.strong,null,"SQL worksheet")," and click ",l.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select")," count(*) from iceberg_data.my_schema.airport_id;\n")),"\n",l.createElement(t.p,null,"You should see a count of 6,251 rows."),"\n",l.createElement(t.ol,{start:"9"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Data manager")," icon again from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"As before, navigate to the ",l.createElement(t.strong,null,"iceberg_data")," > ",l.createElement(t.strong,null,"my_schema")," > ",l.createElement(t.strong,null,"airport_id")," table. Then, select the ",l.createElement(t.strong,null,"Time travel")," tab."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/time-travel-snapshot.png",alt:""}),"\n"),"\n"),"\n",l.createElement(t.p,null,"Note how are there are now two snapshots shown. If you do not see a second snapshot then refresh your browser and repeat this step."),"\n",l.createElement(t.p,null,"The second snapshot shows that there are 6,251 total rows, with 1 row having been added in this new version of the table."),"\n",l.createElement(t.p,null,"You are now going to roll the table back to the first snapshot, representing the initial state of the table. This version of the table did not have the row you added."),"\n",l.createElement(t.ol,{start:"11"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"overflow menu")," icon (vertical ellipses) at the end of the row for the original snapshot (the first snapshot shown, with the earlier ",l.createElement(t.strong,null,"Committed at timestamp")," and ",l.createElement(t.strong,null,"6250 Added records"),"). Click ",l.createElement(t.strong,null,"Rollback"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/rollback.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the ",l.createElement(t.strong,null,"Confirm rollback")," pop-up window, click ",l.createElement(t.strong,null,"Rollback"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/rollback-confirm.png",alt:""}),"\n"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," For reference, the following SQL statement will perform the equivalent roll back operation (DO NOT RUN THIS NOW):"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},"call iceberg_data.system.rollback_to_snapshot (",l.createElement(t.span,{className:"hljs-string"},"'my_schema'"),", ",l.createElement(t.span,{className:"hljs-string"},"'airport_id'"),", <snapshotID>);\n")),"\n",l.createElement(t.ol,{start:"13"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Query workspace")," icon again from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Copy and paste the following SQL statement into the ",l.createElement(t.strong,null,"SQL worksheet")," and click ",l.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select")," * from iceberg_data.my_schema.airport_id ",l.createElement(t.span,{className:"hljs-built_in"},"where")," code = 10000;\n")),"\n",l.createElement(t.p,null,"The row you added earlier is now gone!"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/rollback-result.png",alt:""}),"\n",l.createElement(t.ol,{start:"15"},"\n",l.createElement(t.li,null,"Copy and paste (replacing the SQL already there) the following SQL statement into the ",l.createElement(t.strong,null,"SQL worksheet")," and click ",l.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select")," count(*) from iceberg_data.my_schema.airport_id;\n")),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/108/result-original.png",alt:""}),"\n",l.createElement(t.p,null,"You should see a count of 6,250 rows, which matches the original count when you first created the table. The table is back at the state it was in when it was first created!"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-reached-the-end-of-lab-108"},l.createElement(t.h3,{id:"congratulations-youve-reached-the-end-of-lab-108"},l.createElement(t.a,{href:"#congratulations-youve-reached-the-end-of-lab-108"},"Congratulations, you've reached the end of lab 108.")),"\n",l.createElement(t.p,null,"This concludes the L3 lab. More watsonx.data resources, including further demo modules can be found on the ",l.createElement(t.a,{href:"https://ibm.seismic.com/Link/Content/DCbbPfP64CX3RG4CJPH7bH8XjGBP"},"“IBM watsonx.data Sales Kit\n” seismic page"),"."),"\n",l.createElement(t.p,null,"You can now ",l.createElement(t.a,{href:"https://learn.ibm.com/course/view.php?id=13178"},"complete the quiz")," for IBM watsonx.data for Technical Sales Level 3 Quiz")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},s=n(4184),c=n.n(s),i=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:s}=e,i=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),E=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(h.Z,{className:p.YS},l.createElement("article",{className:c()(p.Y2,!E&&p.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},s)),E&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(i.Z,{pathname:t,title:n||a[0].title||void 0})};function b(e){return l.createElement(g,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var s=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),s=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&c(r,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-108-md-541a8347ae216da03f5e.js.map