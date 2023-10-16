"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5846],{1435:function(e,n,t){t.r(n),t.d(n,{Head:function(){return h},default:function(){return E}});var a=t(1151),l=t(7294);function o(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",ol:"ol",li:"li",code:"code",img:"img",em:"em",pre:"pre"},(0,a.ah)(),e.components);return l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-asistente-de-código-ibm-watsonx"},l.createElement(n.h1,{id:"102-asistente-de-código-ibm-watsonx"},"102: Asistente de código IBM watsonx"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},l.createElement(n.h2,{id:"objetivo"},l.createElement(n.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(n.p,null,"El objetivo de este laboratorio es ayudar a explorar/familiarizarse con algunas capacidades clave disponibles en watsonx Code Assistant (WCA)."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introducción"},l.createElement(n.h2,{id:"introducción"},l.createElement(n.a,{href:"#introducción"},"Introducción")),"\n",l.createElement(n.p,null,"watsonx Code Assistant utiliza un modelo base gestionado por el equipo de IBM Research y entrenado en ",l.createElement(n.a,{href:"https://galaxy.ansible.com/"},"Ansible Galaxy"),", ",l.createElement(n.a,{href:"https://github.com/"},"GitHub"),", y otras fuentes abiertas de datos."),"\n",l.createElement(n.p,null,"El modelo ofrece acceso a recomendaciones de contenido de Ansible mediante el uso de descripciones de automatización en lenguaje natural."),"\n",l.createElement(n.p,null,"El modelo está disponible a través de una extensión de Visual Studio Code (VS Code) llamada ",l.createElement(n.strong,null,"Ansible Lightspeed")," con ",l.createElement(n.a,{href:"https://www.ibm.com/products/watsonx-code-assistant"},"IBM watsonx Code Assistant"),"."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"cómo-obtener-una-recomendación-de-ansible-lightspeed"},l.createElement(n.h2,{id:"cómo-obtener-una-recomendación-de-ansible-lightspeed"},l.createElement(n.a,{href:"#cómo-obtener-una-recomendación-de-ansible-lightspeed"},"Cómo obtener una recomendación de Ansible Lightspeed")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Crea un nuevo playbook de Ansible creando un nuevo archivo llamado ",l.createElement(n.code,null,"lightspeed-demo.yml"),"."),"\n",l.createElement(n.p,null,"a. Seleccione ",l.createElement(n.strong,null,"Archivo > Nuevo archivo de texto"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/nuevo-archivo-de-texto.png",alt:""}),"\n",l.createElement(n.p,null,"b. Haga clic en ",l.createElement(n.strong,null,"Seleccionar un idioma")," en el nuevo archivo y aparecerá un menú desplegable y seleccione ",l.createElement(n.strong,null,"Ansible"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/select-ansible-language.png",alt:""}),"\n",l.createElement(n.p,null,"c. Guarde el archivo y nómbrelo ",l.createElement(n.code,null,"lightspeed-demo")," con una extensión YAML (",l.createElement(n.code,null,".yml")," o ",l.createElement(n.code,null,".yaml"),")"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En la esquina inferior derecha, deberías ver ",l.createElement(n.strong,null,"Lightspeed"),". Ansible Lightspeed está listo para que escribas playbooks."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Nota:")," Comprueba que tu entorno Python también está seleccionado."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/lightspeed-status-bar.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añade una nueva tarea Ansible con un nombre en inglés sencillo que diga ",l.createElement(n.code,null,'Print debug message that says "Hello World!"'),"."),"\n",l.createElement(n.p,null,"Una vez que pulses la tecla ",l.createElement(n.em,null,"Enter"),", la sugerencia aparecerá como texto difuminado."),"\n",l.createElement(n.p,null,"Lightspeed recomendará código basado en el texto que escribiste en el campo nombre en la sección playbook."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/debug-message.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Puedes aceptar la recomendación pulsando la tecla ",l.createElement(n.em,null,"Tab"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/tab-key.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añadamos una segunda tarea a nuestro Playbook. Escribe una frase en un nuevo campo ",l.createElement(n.code,null,"name")," que diga ",l.createElement(n.code,null,"Print today's date and time"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/decline-recommendation.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse la tecla ",l.createElement(n.em,null,"Esc")," para rechazar la recomendación. La recomendación difuminada debería desaparecer."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Puede ver lo sencillo que es aceptar y rechazar una recomendación. Intentemos añadir un modo de tarea avanzado. Cree una nueva tarea con esta sentencia ",l.createElement(n.code,null,"HTTP GET request to the public URL https://bam-api.res.ibm.com/v1/models"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/http-request.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse la tecla ",l.createElement(n.em,null,"Enter")," y acepte la recomendación pulsando la tecla ",l.createElement(n.em,null,"Tab"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/accept-http-request.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añada otra tarea con la frase ",l.createElement(n.code,null,"Print the result"),". Pulse la tecla ",l.createElement(n.em,null,"Enter")," y acepte la recomendación pulsando la tecla ",l.createElement(n.em,null,"Tab"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/print-result.png",alt:""}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Nota"),": Lightspeed también proporciona recomendaciones sobre el código fuente en la ventana de depuración situada junto al terminal. Muestra más información si la amplías."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/source-code-recommendations.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Puedes ejecutar tu Ansible Playbook con el siguiente comando de terminal. Deberías ver cómo se ejecutan las tareas que hemos creado."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"hljs language-bash"},"ansible-playbook lightspeed-demo.yml\n")),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/run-playbook.png",alt:""}),"\n",l.createElement(n.p,null,"Puedes seguir experimentando con la creación de nuevas tareas. Si no obtiene una recomendación que se alinee con la intención del nombre de su tarea, entonces reformular su declaración para proporcionar más información sobre lo que se desea puede conducir a mejores recomendaciones."),"\n",l.createElement(n.p,null,"Las acciones que realiza cuando se le proporciona una recomendación influyen en el proceso de formación del modo."),"\n",l.createElement(n.p,null,"Si se acepta una recomendación y luego se realizan más ediciones, entonces el acto de cambiar la recomendación por otra cosa se considerará una modificación de la recomendación. Esto indicará a Ansible y a Watson Code Assistant que la recomendación requirió una edición adicional para cumplir con el uso previsto. Esta información se utilizará como contexto en el entrenamiento del modelo para indicaciones similares en el futuro."),"\n"),"\n")))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},c=t(4184),s=t.n(c),i=t(4690),m=t(1140),u=t(2565),d=t(8531),p=t(3383),b=t(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:t=!0,title:a,timeToComplete:o,updated:r}}},children:c}=e,i=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),h=(null===t||t)&&n;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:o,updated:r},n[0].title||a||""),l.createElement(d.Z,{className:b.YS},l.createElement("article",{className:s()(b.Y2,!h&&b.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},c)),h&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:g})))},h=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:a}}}}=e;return l.createElement(i.Z,{pathname:n,title:t||a[0].title||void 0})};function E(e){return l.createElement(g,e,l.createElement(r,e))}},2565:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),l=t(1151),o=t(7563);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA,Danger:o.b0,Warning:o.v3,CopyText:o.O5};var c=(0,a.memo)((function(e){let{children:n,components:t={}}=e;return a.createElement(l.Zo,{components:{...r,...t}},n)}))},3383:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),l=t(7500),o=t(4184),r=t.n(o),c=t(6488);const s=function(e,n,t){return void 0===n&&(n=[]),void 0===t&&(t=0),e.forEach((e=>{const{title:a,url:l,items:o}=e;n.splice(n.length,0,{depth:t,title:a,url:l}),o&&o.length>0&&s(o,n,t+1)})),n};var i=e=>{const{itemsList:n}=e,t=(0,a.useMemo)((()=>s(n[0].items||[])),[n]),o=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return t.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),t.map(((e,n)=>{let{title:t,url:l}=e;return a.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:l},t)}))))}},7315:function(e,n,t){t.d(n,{Y2:function(){return a},YS:function(){return o},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,t){t.d(n,{Zo:function(){return c},ah:function(){return o}});var a=t(7294);const l=a.createContext({});function o(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:o(e),a.createElement(l.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-102-es-md-1b7b29d5cad65412c7ba.js.map