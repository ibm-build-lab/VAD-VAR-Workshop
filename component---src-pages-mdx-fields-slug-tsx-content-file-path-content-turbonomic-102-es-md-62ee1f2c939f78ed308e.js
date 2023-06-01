"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1581],{885:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return f}});var t=a(1151),r=a(7294);function l(e){const n=Object.assign({section:"section",h2:"h2",a:"a",p:"p",em:"em",strong:"strong",h1:"h1",ol:"ol",li:"li",img:"img"},(0,t.ah)(),e.components),{QuizAlert:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),r.createElement(r.Fragment,null,r.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},r.createElement(n.h2,{id:"objetivo"},r.createElement(n.a,{href:"#objetivo"},"Objetivo")),"\n",r.createElement(n.p,null,"¡Bienvenido a Turbonomic! En este laboratorio, explorará el interfaz de usuario de Turbonomic y se familiarizará con sus diferentes partes."),"\n",r.createElement(n.p,null,r.createElement(n.em,null,r.createElement(n.strong,null,"Nota:")," Ha iniciado sesión con un usuario administrador, por lo que podrá ver todo el ambiente supervisado por Turbonomic. Una vez que pase por el laboratorio de ",r.createElement(n.strong,null,"Administration"),", aprenderá que se pueden establecer diferentes niveles de acceso para los usuarios y que su panel de control será diferente del que ve aquí.")),"\n",r.createElement(a,{text:"El contenido del cuestionario L3 está marcado en verde"}),"\n"),r.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"panel-principal"},r.createElement(n.h1,{id:"panel-principal"},"Panel principal"),"\n",r.createElement(n.p,null,"Al iniciar sesión, aparecerá el panel principal de Turbonomic."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Las tres pestañas de la parte superior le dan acceso a las vistas globales (del ambiente entero)."),"\n",r.createElement(n.li,null,"La cadena de suministro de la izquierda le muestra las entidades que Turbonomic ha descubierto y su estado."),"\n",r.createElement(n.li,null,"\n",r.createElement(n.ol,{start:"3"},"\n",r.createElement(n.li,null,"Las acciones pendientes le muestran las acciones que debe realizar para optimizar su ambiente y asegurar el rendimiento. Exploraremos esto más a fondo en el laboratorio de ",r.createElement(n.strong,null,"Acciones"),"."),"\n"),"\n"),"\n",r.createElement(n.li,null,"Estos son Widgets. Son paneles que contienen información relativa a tu ambiente."),"\n",r.createElement(n.li,null,"En el extremo izquierdo se encuentra el Navegador: puede utilizarlo para acceder a otras funciones de Turbonomic.","\n",r.createElement(a,{text:"Quiz Material"}),"\n"),"\n"),"\n",r.createElement(n.img,{src:"/1685632555999.71391090028/dashboard.png",alt:""}),"\n",r.createElement(n.p,null,"Haga clic en ",r.createElement(n.strong,null,"On-Prem")," en las pestañas de arriba para ver el estado de todo su ambiente on-prem."),"\n",r.createElement(n.img,{src:"/1685632556007.71391090031/onprem.png",alt:""}),"\n",r.createElement(n.p,null,"Ahora haga clic en la pestaña ",r.createElement(n.strong,null,"Cloud")," para centrarse en todos los ambientes de nube que se están supervisando."),"\n",r.createElement(n.p,null,"Dado que las instancias de Cloud suelen tener valores en dólares asociados, Turbonomic puede proporcionarle un informe detallado de las inversiones necesarias que debe realizar para garantizar el rendimiento y cuál sería el ahorro total de costes como resultado de tomar todas las medidas."),"\n",r.createElement(n.p,null,"Tenga en cuenta que la cantidad total en dólares es SI toma TODAS las acciones generadas por Turbonomic para las instancias de Cloud. Como puede ver en el siguiente ejemplo, el ahorro de costes es significativo en comparación con las inversiones necesarias. Y todo ello garantizando el rendimiento de la aplicación."),"\n",r.createElement(n.p,null,"Haga clic en ",r.createElement(n.strong,null,"Show All")," bajo ",r.createElement(n.strong,null,"Necessary Investments")," y ",r.createElement(n.strong,null,"Potential Savings")," para explorar las acciones relativas a cada uno. Repasaremos las acciones a fondo en el laboratorio de ",r.createElement(n.strong,null,"Acciones"),"."),"\n",r.createElement(n.img,{src:"/1685632555995.71391090027/cloud.png",alt:""}),"\n"),r.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"cadena-de-suministro"},r.createElement(n.h1,{id:"cadena-de-suministro"},"Cadena de suministro"),"\n",r.createElement(n.p,null,"Echemos un vistazo más de cerca a la ",r.createElement(n.strong,null,"Cadena de suministro"),". En las tres pestañas anteriores, haga clic en ",r.createElement(n.strong,null,"Applications")," para volver al panel principal. Las aplicaciones empresariales están formadas por múltiples componentes de aplicación que se ejecutan en muchas infraestructuras diferentes. Cada círculo de la cadena de suministro representa una entidad. Cada entidad tiene un nombre, un número y está rodeada por un círculo de colores. El verde es el estado deseado, el amarillo representa acciones de eficiencia y el rojo muestra que los recursos están congestionados. Véase el ejemplo siguiente."),"\n",r.createElement(a,{text:"Quiz Material"}),"\n",r.createElement(n.img,{src:"/1685632556015.71391090036/supply-chain1.png",alt:""}),"\n",r.createElement(n.p,null,"La dirección de las flechas también es significativa. Muestran la dirección de los recursos de la compra. Turbonomic ve los recursos disponibles como un mercado. Cada entidad puede vender recursos y/o comprarlos. Por ejemplo, una máquina virtual compra recursos al host en el que reside y luego los vende a los componentes de la aplicación que se ejecutan en ella. En este escenario, una VM es tanto un consumidor de recursos (del host físico) como un proveedor de recursos (para los componentes de la aplicación). Véase la imagen siguiente."),"\n",r.createElement(n.img,{src:"/1685632555991.7141090026/buysell.png",alt:""}),"\n",r.createElement(n.p,null,"Haga clic en la entidad Host de la cadena de suministro. Se abrirá una página con información sobre todos sus anfitriones, las políticas que se les aplican y una lista de acciones para ellos."),"\n",r.createElement(n.p,null,"Explore cada pestaña. La sección de acciones pendientes le muestra las acciones que Turbonomic le recomienda acometer para asegurar el rendimiento, ahorrar costes, etc. Analiza su ambiente una vez que lo añade como objetivo y comienza a proporcionar las acciones. Profundizaremos en las acciones en el laboratorio ",r.createElement(n.strong,null,"Acciones"),"."),"\n",r.createElement(n.img,{src:"/1685632556003.71391090029/host1.png",alt:""}),"\n"),r.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"navegador"},r.createElement(n.h1,{id:"navegador"},"Navegador"),"\n",r.createElement(n.p,null,"El Navegador le proporcionará un acceso rápido a diferentes partes de Turbonomic. Esta barra de herramientas permanecerá constante a medida que explore diferentes partes del ambiente."),"\n",r.createElement(n.img,{src:"/1685632556003.71391090030/nav1.png",alt:""}),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"El botón ",r.createElement(n.strong,null,"ON")," siempre le devolverá a la vista principal del panel de control. El dashboard principal puede ser diferente dependiendo de los permisos de acceso de los usuarios y de las personalizaciones - aprenderás más sobre esto en los laboratorios de ",r.createElement(n.strong,null,"Dashboard Personalizado"),"."),"\n",r.createElement(a,{text:"Quiz Material"}),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Utilice la página ",r.createElement(n.strong,null,"Buscar")," para encontrar las entidades que está buscando. Esta página le dará una vista categorizada de sus entidades y también le brindará filtros para acotar la entidad que está buscando."),"\n"),"\n"),"\n",r.createElement(n.img,{src:"/1685632556015.71391090034/search1.png",alt:""}),"\n",r.createElement(n.ol,{start:"3"},"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"La página de planificación de Turbonomic se utiliza para ejecutar simulaciones de escenarios hipotéticos que le ayudarán a conocer los resultados de determinados cambios antes de realizarlos. Un plan no afecta a los ambientes en tiempo real. Aprenderá más sobre esta importante función en el laboratorio de ",r.createElement(n.strong,null,"Planificación"),"."),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"En la página Colocación de la carga de trabajo, puede configurar reservas para guardar los recursos que necesitará para implementar máquinas virtuales en el futuro. Turbonomic calcula la ubicación óptima para estas máquinas virtuales y, a continuación, reserva los recursos de host y almacenamiento que necesitan."),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"La pestaña Dashboard (panel de control) le permitirá crear paneles de control personalizados que se adapten a sus necesidades. Aprenderá más sobre esto en el laboratorio ",r.createElement(n.strong,null,"Panel de control personalizado"),"."),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"La pestaña ",r.createElement(n.strong,null,"Reportes (Reports)")," le permitirá generar diferentes reportes de su ambiente y recursos. Al hacer clic en ",r.createElement(n.strong,null,"Reportes")," se abrirá una nueva ventana que contiene una lista de reportes predefinidos bajo la carpeta ",r.createElement(n.strong,null,"General"),". Explore los diferentes reportes."),"\n"),"\n"),"\n",r.createElement(n.img,{src:"/1685632556011.71391090033/report2.png",alt:""}),"\n",r.createElement(n.ol,{start:"7"},"\n",r.createElement(n.li,null,"La página ",r.createElement(n.strong,null,"Configuración")," incluye enlaces importantes como Políticas, Licencias, Administración de usuarios, Targets, etc. Usted explorará ",r.createElement(n.strong,null,"Objetivos (Targets)"),", ",r.createElement(n.strong,null,"Políticas (Policies)")," y ",r.createElement(n.strong,null,"Administración de Usuarios (User Management)")," extensivamente en sus laboratorios correspondientes."),"\n"),"\n",r.createElement(n.img,{src:"/1685632556015.71391090035/settings.png",alt:""})))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?r.createElement(n,e,r.createElement(l,e)):l(e)};var s=a(4184),i=a.n(s),c=a(4690),m=a(1140),u=a(2565),d=a(8531),p=a(3383),E=a(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:l,updated:o}}},children:s}=e,c=(0,r.useRef)(null),{0:g}=(0,r.useState)(""),b=(null===a||a)&&n;return r.createElement(r.Fragment,null,r.createElement(m.Z,{timeToComplete:l,updated:o},n[0].title||t||""),r.createElement(d.Z,{className:E.YS},r.createElement("article",{className:i()(E.Y2,!b&&E.ey),ref:c},r.createElement(u.Z,{components:{h1:()=>null}},s)),b&&r.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return r.createElement(c.Z,{pathname:n,title:a||t[0].title||void 0})};function f(e){return r.createElement(g,e,r.createElement(o,e))}},2565:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(7294),r=a(1151),l=a(987);const o={table:l.y6,a:l.IW,blockquote:l.R4,SubHeader:l.bU,img:l.fb,code:l.dn,QuizAlert:l.SA};var s=(0,t.memo)((function(e){let{children:n,components:a={}}=e;return t.createElement(r.Zo,{components:{...o,...a}},n)}))},4690:function(e,n,a){var t=a(7294),r=a(1072),l=a(2401);n.Z=e=>{const{title:n,description:a,pathname:o,children:s}=e,{description:i,title:c,origin:m}=(0,l.Z)(),{i18n:{language:u}}=(0,r.$G)(),d={title:n||c,description:a||i,url:""+m+(o||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:u}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,d.title),t.createElement("link",{rel:"canonical",href:d.url}),t.createElement("meta",{name:"description",content:d.description}),t.createElement("meta",{property:"og:title",content:d.title}),t.createElement("meta",{property:"og:url",content:d.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:d.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:d.title}),t.createElement("meta",{name:"twitter:url",content:d.url}),t.createElement("meta",{name:"twitter:description",content:d.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),s)}},3383:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(7294),r=a(7500),l=a(4184),o=a.n(l),s=a(6488);const i=function(e,n,a){return void 0===n&&(n=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:t,url:r,items:l}=e;n.splice(n.length,0,{depth:a,title:t,url:r}),l&&l.length>0&&i(l,n,a+1)})),n};var c=e=>{const{itemsList:n}=e,a=(0,t.useMemo)((()=>i(n[0].items||[])),[n]),l=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(r.rU,{to:"#",replace:!0},"On this page")),a.map(((e,n)=>{let{title:a,url:r}=e;return t.createElement("a",{className:o()("TableOfContents-module--link--b292b",l===r.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:r},a)}))))}},7315:function(e,n,a){a.d(n,{Y2:function(){return t},YS:function(){return l},ey:function(){return r}});var t="{mdx-fields__slug}-module--article--e3d5a",r="{mdx-fields__slug}-module--noToc--82387",l="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,a){a.d(n,{Zo:function(){return s},ah:function(){return l}});var t=a(7294);const r=t.createContext({});function l(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function s({components:e,children:n,disableParentContext:a}){let s;return s=a?"function"==typeof e?e({}):e||o:l(e),t.createElement(r.Provider,{value:s},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-102-es-md-62ee1f2c939f78ed308e.js.map