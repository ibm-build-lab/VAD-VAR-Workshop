"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1666],{105:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return b}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",h3:"h3",ol:"ol",img:"img",h4:"h4"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"105-planning-and-custom-dashboards"},a.createElement(t.h1,{id:"105-planning-and-custom-dashboards"},"105: Planning and Custom Dashboards"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"planning"},a.createElement(t.h2,{id:"planning"},a.createElement(t.a,{href:"#planning"},"Planning")),"\n",a.createElement(t.p,null,"The planning page in Turbonomic is used to run simulations for what-if scenarios that will help you gain insight into what are the results of certain changes before making them. A plan has no impact on real-time environments."),"\n",a.createElement(t.p,null,"When you click Run to start a plan, the following occurs:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"The entities take their current actions in the planned market"),"\n",a.createElement(t.li,null,"Entity utilization is re-calculated"),"\n",a.createElement(t.li,null,"The entities continue acting"),"\n",a.createElement(t.li,null,"Utilization is continually re-calculated"),"\n",a.createElement(t.li,null,"This process continues until no entities want to act, any more","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"At this point, the plan has ",a.createElement(t.strong,null,"converged")),"\n",a.createElement(t.li,null,"The entities have reached a ",a.createElement(t.strong,null,"Desired State"),"!"),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"There are many scenarios in which you can take advantage of the planning capability in Turbonomic, but in this lab, we will focus on migrating to the cloud."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"migrate-to-the-cloud"},a.createElement(t.h3,{id:"migrate-to-the-cloud"},a.createElement(t.a,{href:"#migrate-to-the-cloud"},"Migrate to the cloud")),"\n",a.createElement(t.p,null,"A Migrate to Cloud plan simulates the migration of on-prem VMs to the cloud, or the migration of VMs from one cloud provider to another."),"\n",a.createElement(t.p,null,"This plan focuses on optimizing performance and costs by choosing the most suitable cloud resources for your VMs and the volumes they use."),"\n",a.createElement(t.p,null,"To further optimize your costs, the plan can recommend moving workloads from on-demand to discounted pricing and purchasing more discounts."),"\n",a.createElement(t.p,null,"The plan calculates costs according to the billing and price adjustments that you have negotiated with your cloud provider. Costs include computing, service (such as IP services), and license costs."),"\n",a.createElement(t.p,null,"The plan also calculates discount purchases for VMs that can benefit from discounted pricing."),"\n",a.createElement(t.p,null,"In this lab, you will run a scenario where you'll move on-prem VMs to AWS."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"From the navigator, click on the ",a.createElement(t.strong,null,"Plan")," button with a light bulb icon. Then on the ",a.createElement(t.strong,null,"Plan Management")," page on the top right, click on ",a.createElement(t.strong,null,"New Plan"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602297.76421104591/plan1.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"From the list, select ",a.createElement(t.strong,null,"Migrate to the cloud"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602285.7641104584/cloud1.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"In the newly opened page, click on ",a.createElement(t.strong,null,"Clusters")," under ",a.createElement(t.strong,null,"On-prem")," (since we want to migrate on-prem virtual machines to the cloud). Select the cluster named ",a.createElement(t.strong,null,"vsphere-dc20-DC01/vsphere-dc20-Clus01")," Then click on ",a.createElement(t.strong,null,"Next: Where to migrate")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602285.7641104585/cloud2.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"AWS Accounts")," then select the account number ",a.createElement(t.strong,null,"136039713045"),". Then click on ",a.createElement(t.strong,null,"Next: Region"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602289.7641104586/cloud3.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"In this part you can select a region within your AWS account you'd like to move your on-prem VMs to in the future, and want to see if it is a suitable location. Since you are moving an entire cluster you'd want to choose a region that already is light on number of VMs. Select ",a.createElement(t.strong,null,"aws-US East (N. Virginia)"),". Then click on ",a.createElement(t.strong,null,"Next: Licensing"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602289.7641104587/cloud4.png",alt:""}),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"In this section you can choose if you'd like the plan to include the cost of the OS as part of the migration plan or not. For this lab we will assume that your on-prem OS licenses are non-transferable so we will include the cost in the migration plan. Once done select ",a.createElement(t.strong,null,"Next: RI Settings"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602293.7641104588/cloud5.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"In this section you can choose your reserved instance (RI) settings. You can choose different settings from your AWS profile that fits your needs best and if there are any discounts available you can choose them for this plan. For this lab, leave all settings as default and click on ",a.createElement(t.strong,null,"Run Plan"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602293.7641104589/cloud6.png",alt:""}),"\n",a.createElement(t.p,null,"The plan may take a few minutes to run. Once the plan has converged, the results will appear on the screen to the right. The plan will offer two routes to migrate your on-prem VMs to the cloud."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Lift and Shift"),": this plan tries to match your on-prem capacities with what exists in the cloud region. So applies minimal changes to the migrated VMs."),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Optimize"),": this plan not only simulates migration to the cloud region of your choice but also optimizes this migration. It looks at the historical utilization of VMs and storage to select the best instance type and storage tier for each VM and disk."),"\n"),"\n",a.createElement(t.p,null,"The plan will also provide you with a list of actions necessary to make this migration and their associated cost."),"\n",a.createElement(t.p,null,"Explore the plan results further. Notice how the optimized migration will make the VMs run more efficiently and save about 27% on the cost compared to if you just do a lift and shift."),"\n",a.createElement(t.img,{src:"/1686266602297.76421104590/cloud7.png",alt:""}),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"custom-dashboards"},a.createElement(t.h2,{id:"custom-dashboards"},a.createElement(t.a,{href:"#custom-dashboards"},"Custom Dashboards")),"\n",a.createElement(t.p,null,"A custom dashboard is a view that you create to focus on specific aspects of your environment. You can create dashboards that are private to your user account, or dashboards that are visible to any user who logs into your Turbonomic deployment."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"creating-a-custom-dashboard"},a.createElement(t.h3,{id:"creating-a-custom-dashboard"},a.createElement(t.a,{href:"#creating-a-custom-dashboard"},"Creating a Custom Dashboard")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"To create a custom dashboard, Click on ",a.createElement(t.strong,null,"Dashboards")," as shown below:"),"\n"),"\n",a.createElement(t.img,{src:"/1686266602297.76421104592/turbo_custom_dashboard1.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"NEW DASHBOARD")," to add a new dashboard to your Turbonomic session."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602297.76421104593/turbo_custom_dashboard2.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"The dashboard appears with a default name and without chart widgets. The time range in the Time Slider is set to 24 hours by default as shown below"),"\n"),"\n",a.createElement(t.img,{src:"/1686266602297.76421104594/turbo_custom_dashboard3.gif",alt:""}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Click 1")," from the above screenshot and give a name that describes the dashboard. If you will share the dashboard with all Turbonomic users, the name will help them decide whether to view it."),"\n",a.createElement(t.p,null,"Next ",a.createElement(t.strong,null,"Click 2")," (Gear to change the setting) from the above screenshot to set the dashboard access."),"\n",a.createElement(t.p,null,"Dashboard access can be:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Only Me – The dashboard is only available to your Turbonomic user account."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"All Users – Every Turbonomic user can see this dashboard."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686266602297.76421104595/turbo_custom_dashboard4.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Add chart widgets to the dashboard by clicking ",a.createElement(t.strong,null,"ADD WIDGET")),"\n"),"\n",a.createElement(t.p,null,"We will customize this dashboard to show certain metrics for the ",a.createElement(t.strong,null,"Quote Of The Day")," Application."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"adding-health-widget"},a.createElement(t.h4,{id:"adding-health-widget"},a.createElement(t.a,{href:"#adding-health-widget"},"Adding Health Widget")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"You will see the default screen with multiple Widget Galleries as shown below:"),"\n"),"\n",a.createElement(t.img,{src:"/1686266602301.76421104605/turbo_custom_dashboard_main.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Type ",a.createElement(t.strong,null,"Health")," in the search bar as shown below and select that widget by clicking anywhere in the white space."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602297.76421104596/turbo_custom_dashboard_health.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Under ",a.createElement(t.strong,null,"Scope"),", ",a.createElement(t.strong,null,"Click to change scope")),"\n"),"\n",a.createElement(t.img,{src:"/1686266602297.76421104597/turbo_custom_dashboard_health1.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Next, ",a.createElement(t.strong,null,"Select Scope"),", ensure you are on Entities and select ",a.createElement(t.strong,null,"Business Application")," as shown in the below image. Follow the order (1 to 3)"),"\n"),"\n",a.createElement(t.img,{src:"/1686266602301.76421104598/turbo_custom_dashboard_health2.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Next, Select ",a.createElement(t.strong,null,"Quote of the Day")," from ",a.createElement(t.strong,null,"Business Application"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686266602301.76421104599/turbo_custom_dashboard_health3.png",alt:""}),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"Next, select ",a.createElement(t.strong,null,"Application Components")," from ",a.createElement(t.strong,null,"Entity Type")),"\n"),"\n",a.createElement(t.img,{src:"/1686266602301.76421104600/turbo_custom_dashboard_health4.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Next, select ",a.createElement(t.strong,null,"Ring Chart")," from ",a.createElement(t.strong,null,"Chart Type")),"\n"),"\n",a.createElement(t.img,{src:"/1686266602301.76421104602/turbo_custom_dashboard_health5.png",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Next, click ",a.createElement(t.strong,null,"Update Preview")," button to see the result and then click ",a.createElement(t.strong,null,"Save")," at the bottom"),"\n"),"\n",a.createElement(t.img,{src:"/1686266602301.76421104603/turbo_custom_dashboard_health7.png",alt:""}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"Finally, you will see your widget published on your Custom Dashboard"),"\n"),"\n",a.createElement(t.img,{src:"/1686266602301.76421104604/turbo_custom_dashboard_health8.png",alt:""}),"\n",a.createElement(t.p,null,"To learn more about the chart types/widgets available, please review our documentation by ",a.createElement(t.a,{href:"https://www.ibm.com/docs/en/tarm/8.8.3?topic=views-chart-types"},"clicking here"),".")))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=n(4184),s=n.n(c),i=n(4690),u=n(1140),m=n(2565),h=n(8531),d=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:c}=e,i=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),p=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:g.YS},a.createElement("article",{className:s()(g.Y2,!p&&g.ey),ref:i},a.createElement(m.Z,{components:{h1:()=>null}},c)),p&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:E})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(i.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(E,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),c=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&s(r,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-105-md-da09408511baf4dc4b6c.js.map