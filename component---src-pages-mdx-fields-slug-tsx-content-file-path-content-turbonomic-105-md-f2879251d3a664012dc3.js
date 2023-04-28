"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[666],{105:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return b}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",h3:"h3",ol:"ol",img:"img",h4:"h4"},(0,l.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"105-planning-and-custom-dashboards"},"105: Planning and Custom Dashboards"),"\n",a.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",a.createElement(t.h2,{id:"planning"},a.createElement(t.a,{href:"#planning"},"Planning")),"\n",a.createElement(t.p,null,"Planning page in Turbonomic is used to run simulations for what-if scenarios that will help you gain insight into what are the results of certain changes before making them. A plan has no impact on real-time environments."),"\n",a.createElement(t.p,null,"When you click Run to start a plan, the following occurs:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"The entities take their current actions in the plan market"),"\n",a.createElement(t.li,null,"Entity utilization is re-calculated"),"\n",a.createElement(t.li,null,"The entities continue acting"),"\n",a.createElement(t.li,null,"Utilization is continually re-calculated"),"\n",a.createElement(t.li,null,"This process continues until no entities want to act, anymore","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"At this point, the plan has ",a.createElement(t.strong,null,"converged")),"\n",a.createElement(t.li,null,"The entities have reached a ",a.createElement(t.strong,null,"Desired State"),"!"),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"There are many scenarios which you can take advantage of the planning capability in Turbonomic, but in this lab we will focus on migrating to the cloud."),"\n",a.createElement(t.h3,{id:"migrate-to-cloud"},a.createElement(t.a,{href:"#migrate-to-cloud"},"Migrate to cloud")),"\n",a.createElement(t.p,null,"A Migrate to Cloud plan simulates migration of on-prem VMs to the cloud, or migration of VMs from one cloud provider to another."),"\n",a.createElement(t.p,null,"This plan focuses on optimizing performance and costs by choosing the most suitable cloud resources for your VMs and the volumes they use."),"\n",a.createElement(t.p,null,"To further optimize your costs, the plan can recommend moving workloads from on-demand to discounted pricing and purchasing more discounts."),"\n",a.createElement(t.p,null,"The plan calculates costs according to the billing and price adjustments that you have negotiated with your cloud provider. Costs include compute, service (such as IP services), and license costs."),"\n",a.createElement(t.p,null,"The plan also calculates discount purchases for VMs that can benefit from discounted pricing."),"\n",a.createElement(t.p,null,"In this lab, you will run a scenario where you'll move on-prem VMs to AWS."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"From the navigator, click on the ",a.createElement(t.strong,null,"Plan")," button with a light bulb icon. Then in the ",a.createElement(t.strong,null,"Plan Management")," page on the top right, click on ",a.createElement(t.strong,null,"New Plan"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382524.57421589874/plan1.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"From the list, select ",a.createElement(t.strong,null,"Migrate to cloud"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382512.57421589867/cloud1.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"In the newly opened page, click on ",a.createElement(t.strong,null,"Clusters")," under ",a.createElement(t.strong,null,"On-prem")," (since we want to migrate on-prem virtual machines to the cloud). Select the cluster named ",a.createElement(t.strong,null,"vsphere-dc20-DC01/vsphere-dc20-Clus01")," Then click on ",a.createElement(t.strong,null,"Next: Where to migrate")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382512.57421589868/cloud2.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"AWS Accounts")," then select the account number ",a.createElement(t.strong,null,"136039713045"),". Then click on ",a.createElement(t.strong,null,"Next: Region"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382516.57421589869/cloud3.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"In this part you can select a region within your AWS account you'd like to move your on-prem VMs to in the future, and want to see if it is a suitable location. Since you are moving an entire cluster you'd want to choose a region that already is light on number of VMs. Select ",a.createElement(t.strong,null,"aws-US East (N. Virginia)"),". Then click on ",a.createElement(t.strong,null,"Next: Licensing"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382516.57421589870/cloud4.png",alt:""}),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"In this section you can choose if you'd like the plan to include the cost of the OS as part of the migration plan or not. For this lab we will assume that your on-prem OS licenses are non-transferable so we will include the cost in the migration plan. Once done select ",a.createElement(t.strong,null,"Next: RI Settings"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382520.57421589871/cloud5.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"In this section you can choose your reserved instance (RI) settings. You can choose different settings from your AWS profile that fits your needs best and if there are any discounts available you can choose them for this plan. For this lab, leave all settings as default and click on ",a.createElement(t.strong,null,"Run Plan"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382520.57421589872/cloud6.png",alt:""}),"\n",a.createElement(t.p,null,"The plan may take few minutes to run. Once the plan has converged, the results will appear on the screen to the right. The plan will offer two routes to migrate your on-prem VMs to cloud."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Lift and Shift")," : this plan tries to match your on-prem capacities with what exists in the cloud region. So applies minimal changes to the migrated VMs."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Optimize"),": this plan not only simulates migration to the cloud region of your choice, but also optimizes this migration. It looks at the historical utilization of VMs and storage to select the best instance type and storage tier for each VM and disk."),"\n"),"\n",a.createElement(t.p,null,"The plan will also provide you with list of actions necessary to make this migration and their associated cost."),"\n",a.createElement(t.p,null,"Explore the plan results further. Notice how the optimized migration will make the VMs run more efficiently and saves about 27% on cost compared to if you just do a lift and shift."),"\n",a.createElement(t.img,{src:"/1682717382524.57421589873/cloud7.png",alt:""}),"\n",a.createElement(t.h2,{id:"custom-dashboards"},a.createElement(t.a,{href:"#custom-dashboards"},"Custom Dashboards")),"\n",a.createElement(t.p,null,"A custom dashboard is a view that you create to focus on specific aspects of your environment. You can create dashboards that are private to your user account, or dashboards that are visible to any user who logs into your Turbonomic deployment."),"\n",a.createElement(t.h3,{id:"creating-a-custom-dashboard"},a.createElement(t.a,{href:"#creating-a-custom-dashboard"},"Creating a Custom Dashboard")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"To create a custom dashboard, Click on ",a.createElement(t.strong,null,"Dashboards")," as shown below:"),"\n"),"\n",a.createElement(t.img,{src:"/1682717382524.57421589875/turbo_custom_dashboard1.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"NEW DASHBOARD")," to add a new dashboard to your Turbonomic session."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382524.57421589876/turbo_custom_dashboard2.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"The dashboard appears with a default name and without chart widgets. The time range in the Time Slider is set to 24 hours by default as shown below"),"\n"),"\n",a.createElement(t.img,{src:"/1682717382524.57421589877/turbo_custom_dashboard3.gif",alt:""}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Click 1")," from the above screenshot and give a name that describes the dashboard. If you will share the dashboard with all Turbonomic users, the name will help them decide whether to view it."),"\n",a.createElement(t.p,null,"Next ",a.createElement(t.strong,null,"Click 2")," (Gear to change the setting) from above screenshot to set the dashboard access."),"\n",a.createElement(t.p,null,"Dashboard access can be:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Only Me – The dashboard is only available to your Turbonomic user account."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"All Users – Every Turbonomic user can see this dashboard."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1682717382524.57421589878/turbo_custom_dashboard4.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Add chart widgets to the dashboard by clicking ",a.createElement(t.strong,null,"ADD WIDGET")),"\n"),"\n",a.createElement(t.p,null,"We will customize this dashboard to show certain metrics for ",a.createElement(t.strong,null,"Quote Of The Day")," Application."),"\n",a.createElement(t.h4,{id:"adding-health-widget"},a.createElement(t.a,{href:"#adding-health-widget"},"Adding Health Widget")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"You will see the default screen with multiple Widget Galleries as shown below:"),"\n"),"\n",a.createElement(t.img,{src:"/1682717382528.57421589888/turbo_custom_dashboard_main.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Type ",a.createElement(t.strong,null,"Health")," in the search bar as shown below and select that widget by clicking anywhere in the white space."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382524.57421589879/turbo_custom_dashboard_health.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Under ",a.createElement(t.strong,null,"Scope"),", ",a.createElement(t.strong,null,"Click to change scope")),"\n"),"\n",a.createElement(t.img,{src:"/1682717382524.57421589880/turbo_custom_dashboard_health1.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Next, ",a.createElement(t.strong,null,"Select Scope"),", ensure you are on Entities and select ",a.createElement(t.strong,null,"Business Application")," as shown in the below image. Follow the order (1 to 3)"),"\n"),"\n",a.createElement(t.img,{src:"/1682717382528.57421589881/turbo_custom_dashboard_health2.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Next, Select ",a.createElement(t.strong,null,"Quote of the Day")," from ",a.createElement(t.strong,null,"Business Application"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1682717382528.57421589882/turbo_custom_dashboard_health3.png",alt:""}),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"Next, select ",a.createElement(t.strong,null,"Application Components")," from ",a.createElement(t.strong,null,"Entity Type")),"\n"),"\n",a.createElement(t.img,{src:"/1682717382528.57421589883/turbo_custom_dashboard_health4.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Next, select ",a.createElement(t.strong,null,"Ring Chart")," from ",a.createElement(t.strong,null,"Chart Type")),"\n"),"\n",a.createElement(t.img,{src:"/1682717382528.57421589885/turbo_custom_dashboard_health5.png",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Next, click ",a.createElement(t.strong,null,"Update Preview")," button to see the result and then click ",a.createElement(t.strong,null,"Save")," at the bottom"),"\n"),"\n",a.createElement(t.img,{src:"/1682717382528.57421589886/turbo_custom_dashboard_health7.png",alt:""}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"Finally, you will see your widget published on your Custom Dashboard"),"\n"),"\n",a.createElement(t.img,{src:"/1682717382528.57421589887/turbo_custom_dashboard_health8.png",alt:""}),"\n",a.createElement(t.p,null,"To learn more about the chart types / widgets available, please review our documentation by ",a.createElement(t.a,{href:"https://www.ibm.com/docs/en/tarm/8.8.3?topic=views-chart-types"},"clicking here"),"."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};var c=n(7315),s=n(2125),i=n(403),u=n(4690),m=n(4184),h=n.n(m);const d={table:i.y6,a:i.IW,blockquote:i.R4,SubHeader:i.bU,img:i.fb,code:i.dn,QuizAlert:i.SA},g=a.memo((function(e){let{children:t}=e;return a.createElement(l.Zo,{components:{...d}},t)})),E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:l}=e,r=(0,a.useRef)(null),{0:o,1:i}=(0,a.useState)("");(0,a.useEffect)((()=>{if(!r.current)return;const e=r.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&i(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const u=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement("article",{className:h()(c.Y,!u&&c.e),ref:r},a.createElement(g,null,l)),u&&a.createElement(s.Z,{itemsList:t,maxDepth:1,currSection:o}))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(u.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(E,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-105-md-f2879251d3a664012dc3.js.map