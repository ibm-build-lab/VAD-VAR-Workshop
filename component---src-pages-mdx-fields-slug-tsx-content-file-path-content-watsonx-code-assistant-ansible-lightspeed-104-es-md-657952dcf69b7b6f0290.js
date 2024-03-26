"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9914],{6349:function(e,n,a){a.r(n),a.d(n,{Head:function(){return h},default:function(){return E}});var t=a(1151),l=a(7294);function o(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",ol:"ol",li:"li",img:"img",code:"code",em:"em",pre:"pre",span:"span"},(0,t.ah)(),e.components);return l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-asistente-de-código-ibm-watsonx"},l.createElement(n.h1,{id:"104-asistente-de-código-ibm-watsonx"},"104: Asistente de código IBM watsonx"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},l.createElement(n.h2,{id:"objetivo"},l.createElement(n.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(n.p,null,"El objetivo de este laboratorio es ayudarle a explorar/familiarizarse con algunas capacidades clave disponibles en IBM watsonx Code Assistant (WCA)."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introducción"},l.createElement(n.h2,{id:"introducción"},l.createElement(n.a,{href:"#introducción"},"Introducción")),"\n",l.createElement(n.p,null,"IBM watsonx Code Assistant utiliza un modelo de base gestionado por el equipo de IBM Research y formado en ",l.createElement(n.a,{href:"https://galaxy.ansible.com/"},"Ansible Galaxy"),", ",l.createElement(n.a,{href:"https://github.com/"},"GitHub")," y otras fuentes de datos abiertas."),"\n",l.createElement(n.p,null,"El modelo ofrece acceso a recomendaciones de contenido de Ansible mediante el uso de descripciones de automatización en lenguaje natural."),"\n",l.createElement(n.p,null,"El modelo está disponible a través de una extensión de Visual Studio Code (VS Code) llamada ",l.createElement(n.strong,null,"Ansible Lightspeed")," with ",l.createElement(n.a,{href:"https://www.ibm.com/products/watsonx-code-assistant"},"IBM watsonx Code Assistant"),"."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"cómo-obtener-una-recomendación-de-ansible-lightspeed"},l.createElement(n.h2,{id:"cómo-obtener-una-recomendación-de-ansible-lightspeed"},l.createElement(n.a,{href:"#cómo-obtener-una-recomendación-de-ansible-lightspeed"},"Cómo obtener una recomendación de Ansible Lightspeed")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Abra o cree un nuevo espacio de trabajo."),"\n",l.createElement(n.p,null,"a. Puede crear un nuevo espacio de trabajo seleccionando ",l.createElement(n.strong,null,"Archivo > Guardar espacio de trabajo como"),"..."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/save-workspace.png",alt:""}),"\n",l.createElement(n.p,null,"b. Nombre el espacio de trabajo ",l.createElement(n.code,null,"ansible-lightspeed"),". A continuación, haga clic en el botón ",l.createElement(n.strong,null,"Guardar"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/workspace-name.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Crea un nuevo playbook de Ansible creando un nuevo archivo llamado ",l.createElement(n.code,null,"lightspeed-demo.yml"),"."),"\n",l.createElement(n.p,null,"a. Seleccione ",l.createElement(n.strong,null,"Archivo > Nuevo archivo de texto")),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/new-text-file.png",alt:""}),"\n",l.createElement(n.p,null,"b. Haga clic en ",l.createElement(n.strong,null,"Seleccionar un idioma")," en el nuevo archivo y aparecerá un menú desplegable, a continuación, seleccione ",l.createElement(n.strong,null,"Ansible")),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/select-ansible-language.png",alt:""}),"\n",l.createElement(n.p,null,"c. Guarde el archivo y nómbrelo ",l.createElement(n.code,null,"lightspeed-demo")," con una extensión YAML (",l.createElement(n.code,null,".yml")," o ",l.createElement(n.code,null,".yaml"),")"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En la esquina inferior derecha, debería ver ",l.createElement(n.strong,null,"Lightspeed"),". Ansible Lightspeed está listo para que escribas playbooks."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Nota:")," ",l.createElement(n.em,null,"Compruebe que su entorno Python también está seleccionado.")),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/lightspeed-status-bar.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añade una nueva tarea Ansible con un nombre en inglés sencillo que diga ",l.createElement(n.code,null,'Print debug message that says "Hello World!"'),"."),"\n",l.createElement(n.p,null,"Una vez pulsada la tecla ",l.createElement(n.em,null,"Intro"),", la sugerencia aparecerá como texto difuminado."),"\n",l.createElement(n.p,null,"Lightspeed recomendará código basado en el texto que has escrito en el campo nombre en la sección playbook."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/debug-message.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Puede aceptar la recomendación pulsando la tecla ",l.createElement(n.em,null,"Tab"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/tab-key.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añadamos una segunda tarea a nuestro Playbook. Escribe una frase en un nuevo campo de ",l.createElement(n.code,null,"name")," que diga ",l.createElement(n.code,null,"Print today's date and time"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/decline-recommendation.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse la tecla ",l.createElement(n.em,null,"Esc")," para rechazar la recomendación. La recomendación difuminada debería desaparecer."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Puede ver lo sencillo que es aceptar y rechazar una recomendación. Intentemos añadir una tarea más avanzada. Crea una nueva tarea con esta oracíon ",l.createElement(n.code,null,"HTTP GET request to the url https://bam-api.res.ibm.com/v1/models with bearer token with variable name bam_bearer_token"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/http-request.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse la tecla ",l.createElement(n.em,null,"Intro")," y acepte la recomendación pulsando la tecla ",l.createElement(n.em,null,"Tabulador"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/accept-http-request.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Puedes copiar y pegar tu token de acceso ",l.createElement(n.a,{href:"https://bam.res.ibm.com/"},"BAM")," en lugar del ",l.createElement(n.code,null,"{{ bam_bearer_token }}")," o puedes recuperar tu token de acceso de tu entorno local y asignarlo a una variable en tu ansible playbook añadiendo el siguiente código:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"hljs language-yml"},"  ",l.createElement(n.span,{className:"hljs-attr"},"vars:"),"\n    ",l.createElement(n.span,{className:"hljs-attr"},"bam_bearer_token:")," ",l.createElement(n.span,{className:"hljs-string"},'"',l.createElement(n.span,{className:"hljs-template-variable"},"{{ lookup('env','bam_bearer_token') }}"),'"'),"\n")),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/environment-variable.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añada otra tarea con la frase ",l.createElement(n.code,null,"Print the result"),". Pulse la tecla ",l.createElement(n.em,null,"Intro")," y acepte la recomendación pulsando la tecla ",l.createElement(n.em,null,"Tabulador"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/print-result.png",alt:""}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Nota"),": ",l.createElement(n.em,null,"Lightspeed también ofrece recomendaciones sobre el código fuente en la ventana de depuración situada junto al terminal. Muestra más información si la amplías.")),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/source-code-recommendations.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Puedes ejecutar tu Ansible Playbook con el siguiente comando de terminal. Debería ver cómo se ejecutan las tareas que hemos creado."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"hljs language-bash"},"ansible-playbook lightspeed-demo.yml\n")),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Ansible-Lightspeed/images/104/run-playbook.png",alt:""}),"\n",l.createElement(n.p,null,"Puede seguir experimentando con la creación de nuevas tareas. Si no obtiene una recomendación que se ajuste a la intención del nombre de su tarea, puede reformular su enunciado para proporcionar más información sobre lo que desea y obtener mejores recomendaciones."),"\n",l.createElement(n.p,null,"Las acciones que se llevan a cabo cuando se proporciona una recomendación influyen en el proceso de formación del modelo."),"\n",l.createElement(n.p,null,"Si se acepta una recomendación y luego se realizan ediciones adicionales, el acto de cambiar la recomendación por otra cosa se considerará una modificación de la recomendación. Esto indicará a Ansible y a IBM watsonx Code Assistant que la recomendación requería una edición adicional para satisfacer el uso previsto. Esta información se utilizará como contexto en el entrenamiento del modelo para indicaciones similares en el futuro."),"\n"),"\n")))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},s=a(4184),c=a.n(s),i=a(4690),m=a(1140),u=a(8623),d=a(8531),p=a(3383),b=a(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:o,updated:r}}},children:s}=e,i=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),h=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:o,updated:r},n[0].title||t||""),l.createElement(d.Z,{className:b.YS},l.createElement("article",{className:c()(b.Y2,!h&&b.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},s)),h&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:g})))},h=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:n,title:a||t[0].title||void 0})};function E(e){return l.createElement(g,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-ansible-lightspeed-104-es-md-657952dcf69b7b6f0290.js.map