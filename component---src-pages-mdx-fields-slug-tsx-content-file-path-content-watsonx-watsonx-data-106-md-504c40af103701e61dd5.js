"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5124],{87136:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return E}});var a=n(11151),l=n(67294);function o(e){const t=Object.assign({section:"section",h2:"h2",a:"a",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",span:"span",ol:"ol",li:"li",img:"img",ul:"ul",em:"em",h3:"h3"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"federated-queries"},l.createElement(t.h2,{id:"federated-queries"},l.createElement(t.a,{href:"#federated-queries"},"Federated Queries")),"\n",l.createElement(t.p,null,"Unlike traditional database systems, Presto doesn’t have its own native database storage. Instead, Presto supports separation of compute and storage, with dozens of connectors that let Presto access data where it lives – which could be in relational databases, NoSQL databases, data warehouses, data lakes, data lakehouses, and more."),"\n",l.createElement(t.p,null,"Although Presto supports a wide range of connectors, watsonx.data officially only supports a subset of them. This is because IBM wants to ensure quality, performance, and security of connectors before adding support (which may require updating connector source code to do this). More connectors will be added over time."),"\n",l.createElement(t.p,null,"The most current list of connectors and the types of SQL statements supported can be found ",l.createElement(t.a,{href:"https://www.ibm.com/docs/en/watsonxdata/1.0.x?topic=watsonxdata-supported-sql-statements"},"here"),". The list of supported connectors will grow over time."),"\n",l.createElement(t.p,null,"In this section you will combine data from watsonx.data’s object storage with data in Db2 and PostgreSQL databases. To avoid you having to provision these databases yourself, they’ve been installed in the same VM as watsonx.data and are pre-populated with data."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," : The password of the embedded Db2 server expired in October 2023. Before proceeding with the instructions in this section, please open a terminal command window and run the following commands to fix the password issue."),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},"ssh -p <port",l.createElement(t.span,{className:"hljs-comment"},"#> watsonx@<hostname>"),"\n")),"\n",l.createElement(t.p,null,"When prompted for the password, enter ",l.createElement(t.code,null,"watsonx.data")," (you will not see the password as you type it)."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},"sudo su -\n")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},"docker ",l.createElement(t.span,{className:"hljs-built_in"},"exec")," db2server chage -I -1 -m 0 -M 99999 -E -1 db2inst1\n")),"\n",l.createElement(t.p,null,"With the password issue fixed, please continue with the steps below."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Infrastructure manager")," icon from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Add component")," dropdown menu at the right-side of the screen. Select ",l.createElement(t.strong,null,"Add Database"),"."),"\n"),"\n"),"\n",l.createElement(n,{text:"Quiz material: pay attention to the Add components menu"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/add-database.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Add database")," pop-up window, select/enter the following pieces of information in the ",l.createElement(t.strong,null,"1. Database definition")," section:"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Database type"),":    IBM Db2"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Database name"),":    GOSALES"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Display name"),":     Db2DW"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Hostname"),":         192.168.252.2"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Port"),":             50000"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Username"),":         db2inst1"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Password"),":         db2inst1"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"SSL connection"),":   ",l.createElement(t.em,null,l.createElement(t.strong,null,"Uncheck"))),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/add-database-form1.png",alt:""}),"\n",l.createElement(t.p,null,"When a new bucket or database is added to watsonx.data, a new catalog is created as well."),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"Scroll down to section ",l.createElement(t.strong,null,"2. Associated catalog definition"),". Enter ",l.createElement(t.strong,null,"db2catalog")," for the ",l.createElement(t.strong,null,"Catalog name"),". Then, click ",l.createElement(t.strong,null,"Add"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/add-database-form2.png",alt:""}),"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Db2DW")," database and ",l.createElement(t.strong,null,"db2catalog")," catalog have been added to watsonx.data and are now reflected in the topology view of the infrastructure components."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/add-database-output.png",alt:""}),"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"db2catalog")," catalog is automatically associated with the ",l.createElement(t.strong,null,"Db2DW")," database, but to be able to query data from this database, the ",l.createElement(t.strong,null,"db2catalog")," catalog must also be associated with the ",l.createElement(t.strong,null,"presto-01")," engine."),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"Hover your mouse pointer over the ",l.createElement(t.strong,null,"db2catalog")," catalog tile and the ",l.createElement(t.strong,null,"Manage associations")," icon will appear. Click the ",l.createElement(t.strong,null,"Manage associations")," icon."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/manage-association.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Manage associations")," pop-up window, select the checkbox for the ",l.createElement(t.strong,null,"presto-01")," engine and then click ",l.createElement(t.strong,null,"Save and restart engine"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/manage-association-save.png",alt:""}),"\n",l.createElement(t.p,null,"A line now connects ",l.createElement(t.strong,null,"presto-01")," with ",l.createElement(t.strong,null,"db2catalog"),", indicating that they’re associated."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/manage-association-connect.png",alt:""}),"\n",l.createElement(t.p,null,"Next you will add the PostgreSQL database. The password for the PostgreSQL admin account is specific to your environment and the following steps will extract it for you."),"\n",l.createElement(t.ol,{start:"7"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Open a terminal command window to the watsonx.data server as the root user."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The administrative user for the PostgreSQL database is ",l.createElement(t.strong,null,"admin"),". Run the following command to extract and display the ",l.createElement(t.strong,null,"password"),". Copy the value shown to a location you can refer to later."),"\n"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},"docker ",l.createElement(t.span,{className:"hljs-built_in"},"exec")," ibm-lh-postgres ",l.createElement(t.span,{className:"hljs-built_in"},"printenv")," | grep POSTGRES_PASSWORD | sed ",l.createElement(t.span,{className:"hljs-string"},"'s/.*=//'"),"\n")),"\n",l.createElement(t.ol,{start:"9"},"\n",l.createElement(t.li,null,"Repeat Steps 2-6 from above to add the PostgreSQL database to watsonx.data. Use the following information:"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Database type"),":    PostgreSQL(it can be found under Other Databases)"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Database name"),":    gosales"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Display name"),":     PostgreSQLDB"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Hostname"),":         192.168.252.2"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Port"),":             5432"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Username"),":         admin"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Password"),":         ",l.createElement(t.em,null,l.createElement(t.strong,null,"The password generated in the previous step"))),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Catalog name"),":     pgcatalog"),"\n"),"\n",l.createElement(t.p,null,"With both the Db2 and PostgreSQL databases added, the topology should look like the image below."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/add-database-output-pg.png",alt:""}),"\n",l.createElement(t.ol,{start:"10"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Data manager")," icon from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Expand both the db2catalog and pgcatalog catalogs."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/data-manager-view.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"NOTE"),": If you get a 'db2inst1 password expired' error when trying to toggle the 'db2catalog' and the schema and table information do not show up, the following steps will help you remedy it:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Go back to the Infrastructure Manager page and disconnect Presto from db2catalog"),"\n",l.createElement(t.li,null,"Hover over the db2catalog tile and click the trashcan icon to remove it."),"\n",l.createElement(t.li,null,"SSH into your watsonx instance on the command line, and change to root user. (",l.createElement(t.code,null,"sudo su -"),")"),"\n",l.createElement(t.li,null,"Run the following Docker command to extend the password expiry: ",l.createElement(t.code,null,"docker exec db2server chage -I -1 -m 0 -M 99999 -E -1 db2inst1")),"\n",l.createElement(t.li,null,"Go back and follow steps 2-6 to re-add the db2 database."),"\n"),"\n"),"\n",l.createElement(t.p,null,"Schema and table information are shown for both of these databases. Both include an identical ",l.createElement(t.strong,null,"gosalesdw")," schema with tables containing sales data for the fictional Great Outdoors company. Remember that there is also a copy of this same data in object storage, managed by the ",l.createElement(t.strong,null,"hive_data")," catalog."),"\n",l.createElement(t.p,null,"If you do not see any tables associated with the ",l.createElement(t.strong,null,"gosalesdw")," schema in either of the catalogs, you can refresh the schema."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/data-manager-refresh.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," If for some reason the list of tables does not refresh, or if you see a message appear in the upper-right corner saying ",l.createElement(t.em,null,l.createElement(t.strong,null,"“An error occurred while loading the tables in gosalesdw”")),", similar to the image below, you can still proceed. The table information is in the catalog and queries that reference these tables will still work. Please proceed with the rest of the lab."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/data-manager-view-refresh-error.png",alt:""}),"\n",l.createElement(t.p,null,"You now have copies of the Great Outdoors company sales tables in object storage (hive_data), Db2 (db2catalog), and PostgreSQL (pgcatalog). This isn’t something you’d have in a real-world scenario (after all, the benefit of being able to federate access to multiple data sources is to avoid data duplication). However, it’s being done here for the purposes of highlighting Presto’s federation capabilities."),"\n",l.createElement(t.p,null,"You will now see how you can run a federated query that combines data from all three of these data sources."),"\n",l.createElement(t.ol,{start:"12"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Query workspace")," icon from the left-side menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Copy and paste the query below into the ",l.createElement(t.strong,null,"SQL worksheet"),". Click ",l.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n"),"\n",l.createElement(t.p,null,"This sample query could be used by the fictional business to determine which purchasing method is associated with the largest orders. The query accesses five tables, one of which is in PostgreSQL, two are in Db2, and two are in watsonx.data’s object storage."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select"),"  pll.product_line_en as product, md.order_method_en as order_method, ",l.createElement(t.span,{className:"hljs-built_in"},"sum"),"(sf.quantity) as total \n  from \n    pgcatalog.gosalesdw.sls_order_method_dim as md, \n    db2catalog.GOSALESDW.SLS_PRODUCT_DIM as pd, \n    db2catalog.GOSALESDW.SLS_PRODUCT_LINE_LOOKUP as pll,\n    hive_data.gosalesdw.sls_product_brand_lookup as pbl,\n    hive_data.gosalesdw.sls_sales_fact as sf \n  ",l.createElement(t.span,{className:"hljs-built_in"},"where"),"\n    pd.product_key = sf.product_key\n    and md.order_method_key = sf.order_method_key\n    and pll.product_line_code = pd.product_line_code \n    and pbl.product_brand_code = pd.product_brand_code\n  group by pll.product_line_en, md.order_method_en \n  order by product, order_method;\n")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," If the SQL statement pastes into the worksheet as a single line, you can nicely format it by clicking the ",l.createElement(t.strong,null,"Format worksheet")," icon."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/query-format.png",alt:""}),"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Result set")," for the query is found at the bottom of the screen."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/query-result.png",alt:""}),"\n",l.createElement(t.ol,{start:"14"},"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"Explain")," button in the menu bar of the worksheet."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/query-result-explain.png",alt:""}),"\n",l.createElement(t.p,null,"The visual explain output for this query looks a lot more interesting than the one shown earlier. If you scroll through the visual explain output, you’ll see five ",l.createElement(t.strong,null,"ScanProject")," leaf nodes in the tree. These correspond to the five tables being read."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/106/query-result-tables.png",alt:""}),"\n",l.createElement(t.ol,{start:"15"},"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"X")," in the upper-right corner of the ",l.createElement(t.strong,null,"Explain")," window to close it."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Optional step :")," Here are two other queries you can try running as well, which combine data from the same three data sources."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"The following query displays all Canadian and Mexican employees, along with their region and country. This is the kind of query that a reporting tool might generate, based on input from the user."),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select")," distinct branch_region_dim.region_en region, \n  branch_region_dim.country_en country,\n  emp_employee_dim.employee_name employee \nfrom \n  hive_data.gosalesdw.go_region_dim branch_region_dim,\n  pgcatalog.gosalesdw.emp_employee_dim emp_employee_dim,\n  db2catalog.GOSALESDW.GO_BRANCH_DIM go_branch_dim\n",l.createElement(t.span,{className:"hljs-built_in"},"where")," \n  branch_region_dim.country_en ",l.createElement(t.span,{className:"hljs-keyword"},"in")," (",l.createElement(t.span,{className:"hljs-string"},"'Canada'"),", ",l.createElement(t.span,{className:"hljs-string"},"'Mexico'"),") and\n  branch_region_dim.country_code = go_branch_dim.country_code and\n  emp_employee_dim.branch_code = go_branch_dim.branch_code \norder by region, country, employee;\n")),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"In many businesses, departments (or organizations, as they’re called in this dataset) are hierarchical, in that a department falls under another department, which in turn falls under another one. This query displays the two parent departments for a given set of departments. As in the previous query, this is the kind of query that a reporting tool might generate."),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-bash"},l.createElement(t.span,{className:"hljs-keyword"},"select")," gosalesdw.go_org_dim.organization_key, \n  go_org_dim_1.organization_parent as org_level1_code, \n  go_org_name_lookup_1.organization_name_en as org_level1_name, \n  gosalesdw.go_org_dim.organization_parent as org_level2_code, \n  go_org_name_lookup_2.organization_name_en as org_level2_name, \n  gosalesdw.go_org_dim.organization_code as org_code, \n  gosalesdw.go_org_name_lookup.organization_name_en as org_name\nfrom  pgcatalog.gosalesdw.go_org_name_lookup  go_org_name_lookup_2 \n        inner ",l.createElement(t.span,{className:"hljs-built_in"},"join"),"\n      hive_data.gosalesdw.go_org_dim \n        inner ",l.createElement(t.span,{className:"hljs-built_in"},"join"),"\n      pgcatalog.gosalesdw.go_org_name_lookup\n        on hive_data.gosalesdw.go_org_dim.organization_code = pgcatalog.gosalesdw.go_org_name_lookup.organization_code\n        on go_org_name_lookup_2.organization_code = hive_data.gosalesdw.go_org_dim.organization_parent\n        inner ",l.createElement(t.span,{className:"hljs-built_in"},"join"),"\n      pgcatalog.gosalesdw.go_org_name_lookup go_org_name_lookup_1\n        inner ",l.createElement(t.span,{className:"hljs-built_in"},"join")," \n      hive_data.gosalesdw.go_org_dim go_org_dim_1\n        on go_org_name_lookup_1.organization_code = go_org_dim_1.organization_parent\n        on hive_data.gosalesdw.go_org_dim.organization_parent = go_org_dim_1.organization_code\n",l.createElement(t.span,{className:"hljs-built_in"},"where")," (hive_data.gosalesdw.go_org_dim.organization_code between ",l.createElement(t.span,{className:"hljs-string"},"'1700'")," and ",l.createElement(t.span,{className:"hljs-string"},"'5730'"),")\norder by org_code;\n")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," Try running the two queries above from within the Presto CLI as well. You should get the same results in the Presto CLI as you did in the Query workspace."),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"watsonxdata-l3-course-quiz"},l.createElement(t.h2,{id:"watsonxdata-l3-course-quiz"},l.createElement(t.a,{href:"#watsonxdata-l3-course-quiz"},"Watsonx.data L3 Course Quiz")),"\n",l.createElement(t.p,null,"Congratulations! You have completed the necessary labs needed to complete the watsonx.data L3 course quiz. The quiz can be found ",l.createElement(t.a,{href:"https://learn.ibm.com/course/view.php?id=13171"},"here"),". ",l.createElement(t.strong,null,"Note:")," You do not need to watch the videos as the labs have covered all course content except for the quiz. You can click through the lessons and take the quiz."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-reached-the-end-of-lab-106"},l.createElement(t.h3,{id:"congratulations-youve-reached-the-end-of-lab-106"},l.createElement(t.a,{href:"#congratulations-youve-reached-the-end-of-lab-106"},"Congratulations, you've reached the end of lab 106.")),"\n",l.createElement(t.p,null,"Click, ",l.createElement(t.a,{href:"/watsonx/watsonxdata/107"},"lab 107")," to start next lab."))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var s=n(94184),c=n.n(s),i=n(24690),m=n(81140),d=n(48623),u=n(88531),h=n(13383),g=n(27315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:o,updated:r}}},children:s}=e,i=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),b=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:o,updated:r},t[0].title||a||""),l.createElement(u.Z,{className:g.YS},l.createElement("article",{className:c()(g.Y2,!b&&g.ey),ref:i},l.createElement(d.Z,{components:{h1:()=>null}},s)),b&&l.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(i.Z,{pathname:t,title:n||a[0].title||void 0})};function E(e){return l.createElement(p,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-106-md-504c40af103701e61dd5.js.map