"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2931],{8909:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return h}});var t=a(11151),l=a(67294);function r(e){const n=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",ol:"ol",li:"li",img:"img",ul:"ul",code:"code",pre:"pre",span:"span",em:"em"},(0,t.ah)(),e.components),{Warning:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Warning",!0),l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-utilización-de-notebooks-de-jupyter-con-solicitudes"},l.createElement(n.h1,{id:"104-utilización-de-notebooks-de-jupyter-con-solicitudes"},"104: Utilización de notebooks de Jupyter con solicitudes"),"\n",l.createElement(n.p,null,"En secciones anteriores ha estado trabajando con la ingeniería de solicitud a través de la consola. Sin embargo, no es así como suelen funcionar los ingenieros de datos e IA. En esta sección, creará un cuaderno Jupiter para una solicitud y trabajará con solicitudes en un cuaderno de Jupiter en ",l.createElement(n.strong,null,"watsonx.ai"),"."),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"obtención-de-una-clave-de-api"},l.createElement(n.h2,{id:"obtención-de-una-clave-de-api"},l.createElement(n.a,{href:"#obtención-de-una-clave-de-api"},"Obtención de una clave de API")),"\n",l.createElement(n.p,null,"Para ejecutar un cuaderno de Jupiter necesitará su clave de API. Si no ha generado uno antes, puede hacerlo siguiendo los pasos que se indican a continuación."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Inicie sesión en IBM Cloud Console, o si está utilizando el Prompt Lab, puede pulsar el icono en la esquina superior izquierda."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image123.png",alt:""}),"\n",l.createElement(n.p,null,"Seleccione la opción ",l.createElement(n.strong,null,"Acceso (IAM)")," del menú emergente (es posible que tenga que iniciar sesión en la consola de nube)."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image124.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Acceso (IAM)")," para poner en marcha el ",l.createElement(n.strong,null,"Panel Gestionar acceso y usuarios"),". Buscar y seleccionar el elemento de claves de API del panel de la izquierda."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image125.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Sobre la ",l.createElement(n.strong,null,"Teclas de API")," panel, pulse ",l.createElement(n.strong,null,"Crear"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image126.png",alt:""}),"\n",l.createElement(n.p,null,"En el siguiente panel-necesita proporcionar un nombre. Puede utilizar cualquier nombre. En el ejemplo aquí, el nombre ",l.createElement(n.strong,null,"Clave de api watsonx.ai")," se utiliza. Haga clic en ",l.createElement(n.strong,null,"Crear"),"."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image127.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Se creará una clave de API para usted. En el panel resultante, tiene varias opciones:"),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,'Seleccione el icono "ojo" azul de la derecha para ver la clave'),"\n",l.createElement(n.li,null,"Copiar la clave"),"\n",l.createElement(n.li,null,"Descargar la clave"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image128.png",alt:""}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Se recomienda")," que usted descarga su llave. Esta clave se descargará en un archivo llamado ",l.createElement(n.strong,null,"apikey.json"),". Es posible que desee cambiar el nombre de este archivo para asegurarse de que se acuerda de lo que es. Si es necesario, siempre puede crear otra clave de API."),"\n",l.createElement(n.p,null,"Es posible que vea este mensaje:"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image129.png",alt:""}),"\n",l.createElement(n.p,null,"Simplemente cierre esta ventana y el ",l.createElement(n.strong,null,"Teclas de API"),"."),"\n",l.createElement(n.p,null,"Ahora que tienes la llave, estás listo para trabajar con el cuaderno de Jupiter."),"\n",l.createElement(n.p,null,"Para obtener más información, consulte ",l.createElement(n.a,{href:"https://cloud.ibm.com/docs/account?topic=account-userapikey&interface=ui#create_user_key"},"Creación de una clave de API "),"."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"creación-de-un-cuaderno-jupiter-desde-una-solicitud"},l.createElement(n.h2,{id:"creación-de-un-cuaderno-jupiter-desde-una-solicitud"},l.createElement(n.a,{href:"#creación-de-un-cuaderno-jupiter-desde-una-solicitud"},"Creación de un cuaderno Jupiter desde una solicitud")),"\n",l.createElement(n.p,null,"Si recuerda desde el ejercicio de sesión de solicitud y solicitud, hay una tercera opción cuando elige guardar una solicitud, esto es lo que hará ahora."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Abra el laboratorio de solicitud watsonx.ai y desplácese hasta el ",l.createElement(n.strong,null,"Proyectos")," y seleccione para abrir el proyecto que estaba utilizando. En un taller que establece el proyecto se le proporcionará. Si usted está ejecutando el laboratorio por su cuenta, lo más probable es que sea ",l.createElement(n.strong,null,"Caja de seguridad de [su nombre]"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image130.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"En la lista de activos (bajo el ",l.createElement(n.strong,null,"Activos"),"), seleccione la pestaña ",l.createElement(n.code,null,"{uniqueid}\\_Flan\\_ul2\\_prompt\\_session\\_v1")," sesión de solicitud que ha guardado en el laboratorio 103."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image131.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"reloj"),"de la izquierda para abrir el historial de esta sesión de solicitud."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image132.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Si el ",l.createElement(n.strong,null,"Ahora")," la versión no está resaltada, púlselo ahora."),"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Guardar trabajo")," y, a continuación, seleccione ",l.createElement(n.strong,null,"Guardar como"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image133.png",alt:""}),"\n",l.createElement(n.p,null,"Seleccione la opción ",l.createElement(n.strong,null,"Cuaderno")," teja y rellena los campos de la siguiente manera:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Utilice el ",l.createElement(n.strong,null,"Nombre")," ",l.createElement(n.code,null,"{uniqueid}_Flan_ul2_notebook_v1")),"\n",l.createElement(n.li,null,"Utilice el ",l.createElement(n.strong,null,"Descripción")," ",l.createElement(n.code,null,"Jupyter notebook, Flan ul2 prompt")),"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Ver en el proyecto después de guardar")),"\n",l.createElement(n.li,null,"Pulse en ",l.createElement(n.strong,null,"Guardar")),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image134.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Watsonx.ai")," abrirá el cuaderno Jupiter con el contenido de la solicitud."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image135.png",alt:""}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"lápiz")," en la barra de menús superior para ir a la modalidad de edición."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image137.png",alt:""}),"\n",l.createElement(a,{text:"Ahora puedes trabajar con el cuaderno Jupyter"}),"\n",l.createElement(n.ol,{start:"8"},"\n",l.createElement(n.li,null,"Inspeccionar el cuaderno y las distintas celdas"),"\n"),"\n",l.createElement(n.p,null,"La primera celda es la celda de configuración. ",l.createElement(n.strong,null,"Watsonx.ai")," ha rellenado automáticamente todos los datos necesarios, como wml_url, y configura una clase de inferencia que realiza una llamada REST API al modelo ",l.createElement(n.strong,null,"watsonx")," foundation para generar una salida a partir de tu entrada. Esta parte del cuaderno no es el objetivo de este laboratorio, por lo que no dedicarás más tiempo a esta celda."),"\n",l.createElement(n.ol,{start:"9"},"\n",l.createElement(n.li,null,"La siguiente celda define las credenciales necesarias para trabajar con la API watsonx. Cuando ejecutes esta celda, se te pedirá que introduzcas tu clave API."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image138.png",alt:""}),"\n",l.createElement(n.p,null,'Debe introducir su clave API y "pulsar enter" como se le indica, antes de ejecutar la siguiente celda. Se le pedirá cada vez que introduzca su clave API. Como solución alternativa, puede modificar el código cambiando la línea ',l.createElement(n.code,null,"apikey"),":"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"hljs language-py"},l.createElement(n.span,{className:"hljs-comment"},"# from"),"\napikey = getpass.getpass(",l.createElement(n.span,{className:"hljs-string"},'"Please enter your api key (hit enter):"'),"),\n",l.createElement(n.span,{className:"hljs-comment"},"# to"),"\napi = ",l.createElement(n.span,{className:"hljs-string"},'"[your API key]"'),"\n")),"\n",l.createElement(n.p,null,"Por ejemplo, puede tener este aspecto:"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image139.png",alt:""}),"\n",l.createElement(n.p,null,"Después de este cambio, no necesitará proporcionar su clave para cada sesión de ejecución del bloc de notas."),"\n",l.createElement(n.ol,{start:"10"},"\n",l.createElement(n.li,null,"La siguiente celda identifica el modelo que está utilizando. Para los 5 modelos disponibles, estos son los nombres respectivos que debe utilizar para ",l.createElement(n.strong,null,"model_id")," en un cuaderno Jupyter:"),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"flan-ul2-20b"),' model_id="google/flan-ul2"'),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"flan-t5-xxl-11b"),' model_id="google/flan-t5-xxl"'),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"gpt-neox-20b"),' model_id="eleutherai/gpt-neox-20b"'),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"mpt-7b-instruct2"),' model_id="ibm/mpt-7b-instruct2"'),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"mt0-xxl-13b"),' model_id="bigscience/mt0-xxl"'),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"starcoder-15.5b"),' model_id="bigcode/starcoder"'),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"llama-2-70b-chat"),' model_id="meta-llama/llama-2-70b-chat"'),"\n"),"\n",l.createElement(n.ol,{start:"11"},"\n",l.createElement(n.li,null,"La siguiente sección contiene una lista de los parámetros del modelo que puede actualizar. Son los mismos que desde la interfaz de usuario."),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"decoding_method")," greedy or sample"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"min_new_tokens")," 0 o mayor"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"max_new_tokens")," entero positivo"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"temperatura")," 0,0 a 1,0"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"top_k")," 0 a 100"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"top_p")," 0,0 a 1,0"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"pena_repetición")," 1,0 a 2,0"),"\n"),"\n",l.createElement(n.p,null,"Ahora que has puesto tu clave API en el cuaderno, puedes experimentar fácilmente cambiando estos parámetros de configuración de tiempo de ejecución y ver cómo pueden afectar a la salida."),"\n",l.createElement(n.p,null,"Por ejemplo, pruebe a cambiar los valores de ",l.createElement(n.strong,null,"max_new_tokens")," en combinación con diferentes valores de ",l.createElement(n.strong,null,"repetition_penalty"),"; y cambiando los valores de ",l.createElement(n.strong,null,"top_p")," y ",l.createElement(n.strong,null,"top_k"),"."),"\n",l.createElement(n.ol,{start:"12"},"\n",l.createElement(n.li,null,"La siguiente sección define el id del proyecto, no deberías necesitar tocarlo."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image140.png",alt:""}),"\n",l.createElement(n.ol,{start:"13"},"\n",l.createElement(n.li,null,'La siguiente sección es su "prompt" - su entrada en el motor de inferencia.'),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/104/image141.png",alt:""}),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,'Desde el punto de vista del modelo, todo lo que hay entre el par de comillas dobles triples ("") es la solicitud.'),"\n",l.createElement(n.li,null,"Tenga en cuenta que éste era el ejemplo de pregunta de una sola vez en el que trabajó anteriormente. Al hacer esto (de forma similar para few-shots), simplemente lo inserta antes de la sección de la que desea obtener resultados."),"\n",l.createElement(n.li,null,"Puede utilizar este cuaderno para probar rápidamente un ejemplo de ",l.createElement(n.em,null,'"pocos disparos'),'": sólo tiene que insertar otra sección de muestra en la celda.'),"\n",l.createElement(n.li,null,"Otro punto importante que debe recordar es que aquí las palabras ",l.createElement(n.strong,null,"Entrada")," y ",l.createElement(n.strong,null,"Salida")," no son ",l.createElement(n.em,null,'"fijas"')," y puede cambiarlas. Debería intentar cambiar Output por algo diferente como Summarize o Conclusion. Si lo cambias, podrías cambiar también el Output en el one-shot (en medio del cuadro de texto), o tu respuesta podría ser sorprendente."),"\n",l.createElement(n.li,null,"Tenga siempre en cuenta que NO se trata de un humano leyendo la entrada como lenguaje natural. Un modelo ve la entrada como una serie de tokens, y está calculando la probabilidad - cambiar palabras en lugares clave (como la última palabra en el prompt) puede tener impactos interesantes."),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"resumen-de-la-sección"},l.createElement(n.h2,{id:"resumen-de-la-sección"},l.createElement(n.a,{href:"#resumen-de-la-sección"},"Resumen de la sección")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"En esta sección, has aprendido a crear un cuaderno Jupyter desde el Prompt Lab."),"\n",l.createElement(n.li,null,"Necesitas tu propia clave API para utilizar el cuaderno, puedes introducir la clave API en el cuaderno, por lo que no necesitas proporcionarla en cada ejecución."),"\n",l.createElement(n.li,null,"Puede utilizar el bloc de notas para probar rápidamente a cambiar el indicador, el modelo o cualquiera de los parámetros de configuración."),"\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var c=a(94184),i=a.n(c),s=a(24690),u=a(81140),m=a(48623),d=a(88531),p=a(13383),g=a(27315);const E=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:r,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:o},n[0].title||t||""),l.createElement(d.Z,{className:g.YS},l.createElement("article",{className:i()(g.Y2,!b&&g.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},c)),b&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:n,title:a||t[0].title||void 0})};function h(e){return l.createElement(E,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-104-es-md-77598efa467fabb52349.js.map