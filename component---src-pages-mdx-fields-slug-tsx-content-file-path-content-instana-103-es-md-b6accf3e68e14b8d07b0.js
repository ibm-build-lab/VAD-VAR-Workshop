"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7646],{7837:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",img:"img",em:"em",strong:"strong",ol:"ol",li:"li",code:"code"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-alerta-y-sintéticos"},l.createElement(t.h1,{id:"103-alerta-y-sintéticos"},"103: Alerta y sintéticos"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alertas"},l.createElement(t.h2,{id:"alertas"},l.createElement(t.a,{href:"#alertas"},"Alertas")),"\n",l.createElement(t.p,null,"Instana es compatible con 13 tecnologías para ",l.createElement(t.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=apis-alerting#alerting-integrations"},"canales de alerta"),"."),"\n",l.createElement(t.img,{src:"/1685971900992.81981104073/supported-channels.png",alt:"Canales de alerta compatibles con Instana"}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"añadir-slack-como-canal-de-alerta"},l.createElement(t.h2,{id:"añadir-slack-como-canal-de-alerta"},l.createElement(t.a,{href:"#añadir-slack-como-canal-de-alerta"},"Añadir ",l.createElement(t.em,null,"Slack")," como canal de alerta")),"\n",l.createElement(t.p,null,"Para crear alertas, primero necesitamos crear un canal de alertas. Este es un proceso sencillo que consiste en añadir un webhook entrante a ",l.createElement(t.em,null,"Slack")," para un canal ",l.createElement(t.em,null,"Slack")," específico. Para evitar que cada persona cree un nuevo canal, utilizaremos uno existente para este laboratorio."),"\n",l.createElement(t.p,null,"Todos, por favor, uníos al canal ",l.createElement(t.strong,null,"#alert-lab")," en ",l.createElement(t.em,null,"Slack"),"."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"enviando-eventos-específicos-al-canal"},l.createElement(t.h2,{id:"enviando-eventos-específicos-al-canal"},l.createElement(t.a,{href:"#enviando-eventos-específicos-al-canal"},"Enviando eventos específicos al canal")),"\n",l.createElement(t.p,null,"Ahora que el canal ha sido creado, podemos proceder a decidir qué alertas queremos enviar a ",l.createElement(t.em,null,"Slack"),". Para esta demo enviaremos todos los avisos de la tienda del robot directamente al canal ",l.createElement(t.em,null,"Slack"),"."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"En la barra lateral de navegación de la izquierda, haga clic en la sección ",l.createElement(t.strong,null,"Settings"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"En la página ",l.createElement(t.strong,null,"Settings"),", en la barra lateral de navegación de la izquierda, haga clic en la sección ",l.createElement(t.em,null,"Alerts")," que se encuentra justo encima de los Canales de alerta. A continuación, haga clic en el botón ",l.createElement(t.strong,null,"New Alert"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Para el nombre utiliza este pattern, ",l.createElement(t.code,null,"<tu-nombre>-slack"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"En ",l.createElement(t.strong,null,"Events"),", elija la opción ",l.createElement(t.strong,null,"Alert on Event Type(s)"),", y luego active todas las opciones. Esto nos permitirá mostrar cómo se muestran los diferentes eventos en ",l.createElement(t.em,null,"Slack"),"."),"\n",l.createElement(t.img,{src:"/1685971900988.81961104070/create-alert.png",alt:"Crear alerta Slack"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"En ",l.createElement(t.strong,null,"Scope"),", elija la opción ",l.createElement(t.strong,null,"Application Perspective")," y, a continuación, seleccione la opción ",l.createElement(t.strong,null,"Add Application Perspectives"),". A continuación, ",l.createElement(t.strong,null,"Select All")," las opciones."),"\n"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"Observación: Si utiliza Instana para observar varias aplicaciones, puede añadir alertas de varias aplicaciones diferentes a la vez, o puede crear varias alertas, una para cada perspectiva.")),"\n",l.createElement(t.img,{src:"/1685971900988.81961104069/app-perspective.png",alt:"Perspectiva de la aplicación"}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"En Canales de alerta, seleccione ",l.createElement(t.strong,null,"lab-4")," y, a continuación, haga clic en ",l.createElement(t.strong,null,"Create"),". Este canal permitirá a Instana enviar mensajes al canal ",l.createElement(t.em,null,"Slack")," de ",l.createElement(t.strong,null,"#alert-lab"),"."),"\n"),"\n",l.createElement(t.p,null,"Ya está. Ahora, a medida que se generen eventos desde Instana, se enviarán al canal ",l.createElement(t.em,null,"Slack"),". Este método de alerta potente y flexible permite alertas específicas, como el uso de diferentes canales ",l.createElement(t.em,null,"Slack")," para alertas de diferente gravedad o incluso enviar mensajes a los desarrolladores desde PagerDuty para problemas críticos."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"sintéticos"},l.createElement(t.h2,{id:"sintéticos"},l.createElement(t.a,{href:"#sintéticos"},"Sintéticos")),"\n",l.createElement(t.p,null,"Los sintéticos son una novedad en Instana. Permiten simular experiencias de usuario en su aplicación y monitorizar varias características de rendimiento."),"\n",l.createElement(t.p,null,"Aviso: Synthetics sólo está disponible en una instancia SaaS, no on-prem."),"\n",l.createElement(t.p,null,"En esta sección crearemos pruebas sintéticas para monitorizar nuestra aplicación. Para crear una prueba sintética, primero debe tener un Punto de Presencia (PoP) instalado y en funcionamiento. Múltiples PoPs pueden ser desplegados en clusters en varias regiones geográficas para simular la experiencia del usuario en esas regiones. Las instrucciones para instalar PoPs se pueden encontrar ",l.createElement(t.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=beta-pop-deployment"},"aquí.")," Esto está fuera del alcance de este laboratorio, y utilizaremos un PoP existente ya registrado en el panel de Instana."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"En la instancia de Instana SaaS (",l.createElement(t.a,{href:"https://sandbox-partner.instana.io/#/home"},"https://sandbox-partner.instana.io/#/home"),"), vaya a ",l.createElement(t.strong,null,"Synthetic Monitoring")," en el menú de navegación de la izquierda y haga clic en ",l.createElement(t.strong,null,"Create New Test"),"."),"\n"),"\n",l.createElement(t.img,{src:"/1685971901000.82061104075/synthetic-create.png",alt:"Crear sintético"}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Para familiarizarnos con la funcionalidad, crearemos un sintético de ping."),"\n",l.createElement(t.p,null,"En ",l.createElement(t.strong,null,"Paso 2: Solicitar detalles")," añada la URL para la región específica de su solicitud y elija ",l.createElement(t.strong,null,"synthetic-dc")," como Punto de Presencia. Haga clic en Siguiente."),"\n",l.createElement(t.img,{src:"/1685971900992.81981104071/dc-pop.png",alt:"Añadir PoP DC"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Para la Frecuencia elija 1 Minuto, y haga clic en Siguiente."),"\n",l.createElement(t.img,{src:"/1685971900996.821104074/syn-timing.png",alt:"Temporización sintética"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Nombre su sintético utilizando este modelo ",l.createElement(t.code,null,"<su nombre>-synthetic"),", y escriba una descripción opcional. Marque ",l.createElement(t.strong,null,"All Services")," y haga clic en el botón ",l.createElement(t.strong,null,"Create"),"."),"\n",l.createElement(t.img,{src:"/1685971900992.81981104072/karsten-synthetic.png",alt:"crear prueba sintética de ping"}),"\n"),"\n"),"\n",l.createElement(t.p,null,"Ahora puede ver los análisis y métricas de su prueba sintética en la lista ",l.createElement(t.strong,null,"Tests"),".")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(4184),s=n.n(i),o=n(4690),m=n(1140),u=n(2565),d=n(8531),p=n(3383),E=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:c}}},children:i}=e,o=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),h=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:c},t[0].title||a||""),l.createElement(d.Z,{className:E.YS},l.createElement("article",{className:s()(E.Y2,!h&&E.ey),ref:o},l.createElement(u.Z,{components:{h1:()=>null}},i)),h&&l.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:g})))},h=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(o.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(g,e,l.createElement(c,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1151),r=n(5045);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,CopyText:r.O5};var i=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...c,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:c,children:i}=e,{description:s,title:o,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),d={title:t||o,description:n||s,url:""+m+(c||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:u}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,d.title),a.createElement("link",{rel:"canonical",href:d.url}),a.createElement("meta",{name:"description",content:d.description}),a.createElement("meta",{property:"og:title",content:d.title}),a.createElement("meta",{property:"og:url",content:d.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:d.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:d.title}),a.createElement("meta",{name:"twitter:url",content:d.url}),a.createElement("meta",{name:"twitter:description",content:d.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(7500),r=n(4184),c=n.n(r),i=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&s(r,t,n+1)})),t};var o=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:r(e),a.createElement(l.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-103-es-md-b6accf3e68e14b8d07b0.js.map