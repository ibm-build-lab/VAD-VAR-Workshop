"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4011],{2308:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return b}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",blockquote:"blockquote",ul:"ul",em:"em",img:"img",pre:"pre",code:"code",span:"span",h3:"h3"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"working-with-ibm-cloud-cos"},a.createElement(t.h1,{id:"working-with-ibm-cloud-cos"},"Working with IBM Cloud COS"),"\n",a.createElement(t.p,null,"The TechZone watsonx.data environment comes pre-configured with presto engine, iceberg and hive catalog associated with MinIO object storage. In this lab, you are going to register IBM Cloud Object Storage (COS) to watsonx.data."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"register-ibm-cloud-object-storage"},a.createElement(t.h2,{id:"register-ibm-cloud-object-storage"},a.createElement(t.a,{href:"#register-ibm-cloud-object-storage"},"Register IBM Cloud Object Storage")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Infrastructure manager")," icon from the left-side menu."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Add component")," dropdown menu at the right-side of the screen. Select ",a.createElement(t.strong,null,"Add bucket"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Add bucket")," pop-up window, select/enter the following pieces of information"),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," If you have an IBM Cloud account, you can create your own bucket and use it in this lab. You can also use the following bucket provided for your workshop, but make sure you prefix your schema name with your initials to avoid naming conflicts in the COS bucket."),"\n"),"\n",a.createElement(t.p,null,"Bucket definition section"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Bucket type"),":  IBM Cloud Object Storage"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Bucket name"),":\t",a.createElement(t.em,null,a.createElement(t.strong,null,"from slack"))),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Display name"),": ibm-cos-vest"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Endpoint"),":\t    ",a.createElement(t.em,null,a.createElement(t.strong,null,"from slack"))),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Access key"),":\t  **********"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Secret key"),":\t  **********"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Activation"),":   ",a.createElement(t.em,null,a.createElement(t.strong,null,"Activate now"))),"\n"),"\n",a.createElement(t.p,null,"Associated catalog definition"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Catalog type"),":\tApache Iceberg"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Catalog name"),":\ticeberg_ibm_cos"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/cos-add.png",alt:""}),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"ibm-cos-vest")," bucket and ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog have been added to watsonx.data and are now reflected in the topology view of the infrastructure components."),"\n"),"\n"),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog is automatically associated with the ",a.createElement(t.strong,null,"ibm-cos-vest bucket"),", but to be able to query data from this bucket, the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog must also be associated with the ",a.createElement(t.strong,null,"presto-01")," engine."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Hover your mouse pointer over the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog tile and the ",a.createElement(t.strong,null,"Manage associations")," icon will appear. Click the ",a.createElement(t.strong,null,"Manage associations")," icon."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Manage associations")," pop-up window, select the checkbox for the ",a.createElement(t.strong,null,"presto-01")," engine and then click ",a.createElement(t.strong,null,"Save and restart engine"),"."),"\n",a.createElement(t.p,null,"A line now connects ",a.createElement(t.strong,null,"presto-01")," with ",a.createElement(t.strong,null,"iceberg_ibm_cos"),", indicating that they’re associated."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/infra-cos.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"offloading-data-from-a-data-warehouse-to-associated-bucket"},a.createElement(t.h2,{id:"offloading-data-from-a-data-warehouse-to-associated-bucket"},a.createElement(t.a,{href:"#offloading-data-from-a-data-warehouse-to-associated-bucket"},"Offloading data from a Data Warehouse to Associated bucket")),"\n",a.createElement(t.p,null,"In this example scenario, you’re going to “move” the ",a.createElement(t.strong,null,"sls_product_line_lookup")," table from Db2 to watsonx.data’s IBM COS. It will be created as an Iceberg table, in a new schema you will create called ",a.createElement(t.strong,null,"wxgosalesdw_ibm"),", managed by the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Data manager")," icon from the left-side menu."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Go to the top of the navigation pane and click the ",a.createElement(t.strong,null,"Create")," dropdown menu. Select ",a.createElement(t.strong,null,"Create schema"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Create schema")," pop-up window, select/enter the following information, and then click the ",a.createElement(t.strong,null,"Create")," button:"),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," If you are using the shared COS bucket provided for your workshop, prefix the schema name with your initials or some other uniqueid value to avoid naming conflicts in the COS bucket."),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Catalog"),": iceberg_ibm_cos"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Name"),": ",a.createElement(t.em,null,a.createElement(t.strong,null,"uniqueid")),"_wxgosalesdw_ibm"),"\n"),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Expand the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog. The new schema should be listed."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Query workspace")," icon from the left-side menu."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Copy and paste the following SQL into the ",a.createElement(t.strong,null,"SQL worksheet"),". Click ",a.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n"),"\n",a.createElement(t.p,null,"This will create a table called ",a.createElement(t.strong,null,"sls_product_line_lookup")," in ",a.createElement(t.strong,null,"iceberg_ibm_cos.wxgosalesdw_ibm(",a.createElement(t.em,null,"and your initials as a prefix"),")")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"create table iceberg_ibm_cos.wxgosalesdw_ibm.sls_product_line_lookup as ",a.createElement(t.span,{className:"hljs-keyword"},"select")," * from db2catalog.GOSALESDW.SLS_PRODUCT_LINE_LOOKUP;\n")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/table-added.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"As a test, you can run a federated query that combines the new table in IBM COS with the existing tables in MinIO and  Db2 catalog."),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},a.createElement(t.span,{className:"hljs-keyword"},"select")," pll.product_line_en as product, ",a.createElement(t.span,{className:"hljs-built_in"},"sum"),"(sf.quantity) as total\nfrom\n  db2catalog.GOSALESDW.SLS_PRODUCT_DIM as pd, \n  iceberg_ibm_cos.wxgosalesdw_ibm.sls_product_line_lookup as pll, \n  iceberg_data.wxgosalesdw.sls_sales_fact as sf\n",a.createElement(t.span,{className:"hljs-built_in"},"where"),"\n  pd.product_key = sf.product_key\n  and pll.product_line_code = pd.product_line_code\ngroup by pll.product_line_en \norder by product;\n")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/result.png",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Login to IBM Cloud and explore the data stored in the bucket."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/ibm-cos.png",alt:""}),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-completed-l3-lab-109"},a.createElement(t.h3,{id:"congratulations-youve-completed-l3-lab-109"},a.createElement(t.a,{href:"#congratulations-youve-completed-l3-lab-109"},"Congratulations, you've completed L3+ lab 109.")),"\n",a.createElement(t.p,null,"Click, ",a.createElement(t.a,{href:"/watsonx/watsonxdata/110"},"lab 110")," to start next lab."),"\n",a.createElement(t.p,null,"Click, ",a.createElement(t.a,{href:"/watsonx/watsonxdata"},"watsonx.data")," to go to watsonx.data home page."))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=n(4184),s=n.n(c),i=n(4690),m=n(1140),u=n(8623),d=n(8531),g=n(3383),E=n(7315);const h=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:c}=e,i=(0,a.useRef)(null),{0:h}=(0,a.useState)(""),p=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:o,updated:r},t[0].title||l||""),a.createElement(d.Z,{className:E.YS},a.createElement("article",{className:s()(E.Y2,!p&&E.ey),ref:i},a.createElement(u.Z,{components:{h1:()=>null}},c)),p&&a.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:h})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(i.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(h,e,a.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-109-md-78887bb63bf8ffac9776.js.map