"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6944],{56315:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return v}});var t=n(11151),l=n(67294);function o(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",strong:"strong",p:"p",h3:"h3",ul:"ul",li:"li",ol:"ol",img:"img",code:"code",blockquote:"blockquote"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"gestión-de-activos-de-ia-con-versiones"},l.createElement(a.h1,{id:"gestión-de-activos-de-ia-con-versiones"},"Gestión de activos de IA con versiones"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"gestión-de-activos-de-ia-con-versiones-para-modelos-generativos-de-ia"},l.createElement(a.h2,{id:"gestión-de-activos-de-ia-con-versiones-para-modelos-generativos-de-ia"},l.createElement(a.a,{href:"#gestión-de-activos-de-ia-con-versiones-para-modelos-generativos-de-ia"},"Gestión de activos de IA con versiones para modelos ",l.createElement(a.strong,null,"generativos")," de IA")),"\n",l.createElement(a.p,null,"En este laboratorio, configurará el seguimiento de modelos utilizando un nuevo enfoque y versión para gobernar y gestionar activos de IA con modelos ",l.createElement(a.strong,null,"generativos")," de IA entrenados para resumir reclamaciones de seguros."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"requisitos-previos"},l.createElement(a.h3,{id:"requisitos-previos"},l.createElement(a.a,{href:"#requisitos-previos"},"Requisitos previos")),"\n",l.createElement(a.p,null,"Completa los siguientes laboratorios L3 de watsonx.governance para un modelo ",l.createElement(a.strong,null,"generativo")," de IA:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,l.createElement(a.a,{href:"/watsonx/watsonxgov/102"},"Módulo 102: Definir un caso de uso de un modelo de IA"))),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,l.createElement(a.a,{href:"/watsonx/watsonxgov/103"},"Módulo 103: Configurar un proyecto IBM watsonx.ai"))),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,l.createElement(a.a,{href:"/watsonx/watsonxgov/104"},"Módulo 104: Seguimiento de un modelo de IA"))),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"caso-práctico"},l.createElement(a.h3,{id:"caso-práctico"},l.createElement(a.a,{href:"#caso-práctico"},"Caso práctico")),"\n",l.createElement(a.p,null,"Para este caso de uso, el departamento de reclamaciones de automóviles de la gran compañía de seguros quiere utilizar un modelo de IA generativa para resumir las reclamaciones de seguros de automóviles, lo que creen que reducirá significativamente la carga de trabajo de su departamento de revisión de reclamaciones y mejorará el tiempo de respuesta de las reclamaciones. Han estado probando el uso de un modelo de IA generativa, pero creen que este modelo de fundación concreto no está generando los detalles necesarios en los resúmenes y ha llegado el momento de probar un nuevo enfoque y modelo de fundación para resolver sus dudas antes de empezar a utilizar el modelo en producción."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"crear-nueva-plantilla-de-aviso"},l.createElement(a.h3,{id:"crear-nueva-plantilla-de-aviso"},l.createElement(a.a,{href:"#crear-nueva-plantilla-de-aviso"},"Crear nueva plantilla de aviso")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"En la plataforma IBM watsonx, haga clic en el ",l.createElement(a.strong,null,"Menú de navegación")," de la parte superior izquierda para expandirlo. Localice la sección ",l.createElement(a.strong,null,"Proyectos")," del menú, ampliándola si es necesario, y haga clic en ",l.createElement(a.strong,null,"Ver todos los proyectos"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/navigation-menu-projects.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Seleccione el proyecto de IA ",l.createElement(a.strong,null,"generativa")," que creó en ",l.createElement(a.strong,null,"el laboratorio 103")," (por ejemplo, ",l.createElement(a.code,null,"<tus iniciales o cadena única> - Auto claim summary"),")."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/generative-project-select.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Haga clic en la pestaña ",l.createElement(a.strong,null,"Activos")," del proyecto. En la lista de activos, seleccione la entrada ",l.createElement(a.strong,null,"Resumen de siniestros de seguros"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/select-insurace-claim-summarization.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"En la esquina superior derecha, pulse el botón ",l.createElement(a.strong,null,"TXT")," para ver el texto completo que se está utilizando para esta plantilla."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/view-full-prompt-text.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Pulse el botón ",l.createElement(a.strong,null,"Generar")," para generar una salida a partir de la entrada del texto de resumen completo. Observe los detalles generados para el resumen en el output. Esta plantilla utiliza el modelo de fundación ",l.createElement(a.strong,null,"flan-ul2-20b"),". Comparará este resultado de output con la versión que se creará con un modelo de fundación diferente."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/flan-generate-output.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Selecciona el icono ",l.createElement(a.strong,null,"Guardar")," disquete en la parte superior y pulsa ",l.createElement(a.strong,null,"Guardar como"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/save-prompt-template.png",alt:""}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"En la ventana ",l.createElement(a.strong,null,"Guarde su trabajo"),", rellene la siguiente información y, a continuación, pulse el botón ",l.createElement(a.strong,null,"Guardar"),":"),"\n"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Tipo de activo:")," Plantilla de consulta"),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre:")," ",l.createElement(a.code,null,"New insurance claim summarization")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Tarea:")," Resumir"),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Ver en el proyecto después de guardar:")," Asegúrese de que la opción ",l.createElement(a.strong,null,"Ver")," en el proyecto después de guardar está seleccionada"),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/save-work.png",alt:""}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"Seleccione de la lista de activos la nueva plantilla de aviso de ",l.createElement(a.strong,null,"resumen de siniestro de seguro"),". Se abrirá una ventana emergente ",l.createElement(a.strong,null,"Editar esta plantilla de prompt")," . Seleccione ",l.createElement(a.strong,null,"Editar"),"."),"\n",l.createElement(a.li,null,"En la esquina superior derecha, pulse el botón ",l.createElement(a.strong,null,"Modelo: flan-ul2-20b")," y, a continuación, seleccione ",l.createElement(a.strong,null,"Ver todos los modelos de fundación")," para cambiar el modelo utilizado para esta nueva versión."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/view-all-foundation-models.png",alt:""}),"\n",l.createElement(a.ol,{start:"10"},"\n",l.createElement(a.li,null,"En la lista de modelos de fundación, seleccione el modelo ",l.createElement(a.strong,null,"llama-3-70b-instruct")," y, a continuación, pulse el botón ",l.createElement(a.strong,null,"Seleccionar modelo"),"."),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Nota: Si utilizas watsonx.ai on-prem, es posible que veas diferentes modelos compatibles con tus GPU."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/select-llama.png",alt:""}),"\n",l.createElement(a.ol,{start:"11"},"\n",l.createElement(a.li,null,"Repita ",l.createElement(a.strong,null,"los pasos 4 y 5")," para generar el output de esta versión utilizando el nuevo modelo ",l.createElement(a.strong,null,"llama-3-70b-instruct"),". Compare el output resultante con el output de la versión original utilizando el modelo ",l.createElement(a.strong,null,"flan-ul2-20b"),". Observe cómo esta nueva versión que utiliza el modelo de fundación ",l.createElement(a.strong,null,"llama-3-70b-instruct")," genera un resumen más detallado en el output. Esto está más en línea con lo que el departamento de reclamaciones de automóviles de la gran compañía de seguros estaba buscando para resumir las reclamaciones de seguros de automóviles."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/llama-generate-output.png",alt:""}),"\n",l.createElement(a.p,null,"Ha creado con éxito una nueva versión de una plantilla de solicitud utilizando un modelo de fundación diferente."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"configurar-el-seguimiento-de-modelos"},l.createElement(a.h3,{id:"configurar-el-seguimiento-de-modelos"},l.createElement(a.a,{href:"#configurar-el-seguimiento-de-modelos"},"Configurar el seguimiento de modelos")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Haga clic en el icono ",l.createElement(a.strong,null,"Información")," situado en la esquina superior derecha y haga clic en ",l.createElement(a.strong,null,"Ver hoja informativa")," en la sección ",l.createElement(a.strong,null,"Acerca de esta plantilla de consulta"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/view-ai-factsheet.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"En la sección ",l.createElement(a.strong,null,'"Gobernanza"')," de la ",l.createElement(a.strong,null,"ficha sobre IA"),', haga clic en el botón " ',l.createElement(a.strong,null,"Seguimiento de la IA"),' ".'),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/generative-track-in-ai-use-case.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Haga clic en el botón de opción situado a la izquierda del caso de uso de IA que creó en ",l.createElement(a.strong,null,"el laboratorio 102")," (por ejemplo, ",l.createElement(a.code,null,"<tus iniciales o cadena única> - Claim summarization"),"). Haga clic en ",l.createElement(a.strong,null,"Siguiente"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/select-generative-ai-use-case.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Cuando se le pida que ",l.createElement(a.strong,null,"Defina el enfoque"),", pulse el botón ",l.createElement(a.strong,null,"Nuevo enfoque")," y asigne al nuevo enfoque el nombre ",l.createElement(a.code,null,"Llama approach"),", después pulse ",l.createElement(a.strong,null,"Crear"),". Confirme que el enfoque recién creado está seleccionado y pulse ",l.createElement(a.strong,null,"Siguiente"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/select-new-approach.png",alt:""}),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/new-approach.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Cuando se le pida que asigne una versión del modelo, seleccione ",l.createElement(a.strong,null,"Personalizada")," e ingrese ",l.createElement(a.code,null,"0.0.2")," para el ",l.createElement(a.strong,null,"número de Versión"),", después haga clic en ",l.createElement(a.strong,null,"Siguiente"),". Tenga en cuenta que aquí puede asignar manualmente un número de versión, o elegir un número de versión más apto para producción en función del estado del modelo. Haga clic en ",l.createElement(a.strong,null,"Seguimiento de activos")," para iniciar el seguimiento del modelo."),"\n",l.createElement(a.li,null,"Tenga en cuenta que la sección ",l.createElement(a.strong,null,"Gobernanza")," de la ",l.createElement(a.strong,null,"ficha de datos de IA")," contiene ahora información sobre el caso de uso de IA asociado, el enfoque utilizado, la versión del modelo y la fase del ciclo de vida (",l.createElement(a.strong,null,"Desarrollo"),")."),"\n"),"\n",l.createElement(a.p,null,"Ha configurado correctamente el seguimiento de modelos para un modelo de IA ",l.createElement(a.strong,null,"generativa")," utilizando un nuevo enfoque y versión."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"ver-el-caso-de-uso-de-ia-actualizado-con-el-modelo-rastreado"},l.createElement(a.h3,{id:"ver-el-caso-de-uso-de-ia-actualizado-con-el-modelo-rastreado"},l.createElement(a.a,{href:"#ver-el-caso-de-uso-de-ia-actualizado-con-el-modelo-rastreado"},"Ver el caso de uso de IA actualizado con el modelo rastreado")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"En la esquina superior derecha de la sección ",l.createElement(a.strong,null,"Gobernanza")," de la ",l.createElement(a.strong,null,"ficha de datos")," de IA, haga clic en la flecha ",l.createElement(a.strong,null,"Ver detalles")," para acceder al caso de uso de IA asociado."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/view-details.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Haga clic en la pestaña ",l.createElement(a.strong,null,"Ciclo de vida")," y, a continuación, desplácese hacia abajo hasta el mapa de modelos contenidos en las secciones ",l.createElement(a.strong,null,"Llama approach"),"  y ",l.createElement(a.strong,null,"enfoque Predeterminado"),". Observe que la nueva versión del modelo aparece en el ",l.createElement(a.strong,null,"Llama approach"),", mientras que el modelo original sigue apareciendo en el ",l.createElement(a.strong,null,"enfoque Predeterminado"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/107/generative-lifecycle-visualization.png",alt:""}),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," la pestaña ",l.createElement(a.strong,null,"Ciclo de vida")," del ",l.createElement(a.strong,null,"caso de uso de IA")," es útil para que las partes interesadas y los usuarios empresariales obtengan una visión general rápida de todos los modelos que intentan abordar un problema concreto, con la posibilidad de profundizar para obtener más información según sea necesario, todo ello sin necesidad de acceder al proyecto en el que trabajan los desarrolladores y los ingenieros de datos."),"\n"),"\n",l.createElement(a.p,null,"Ha habilitado con éxito el seguimiento del modelo utilizando un nuevo enfoque y versión, y ahora puede observar los cambios a medida que el modelo atraviesa el ciclo de vida."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"enhorabuena-has-llegado-al-final-del-laboratorio-107-para-la-gestión-de-activos-de-ia-con-versiones"},l.createElement(a.h3,{id:"enhorabuena-has-llegado-al-final-del-laboratorio-107-para-la-gestión-de-activos-de-ia-con-versiones"},l.createElement(a.a,{href:"#enhorabuena-has-llegado-al-final-del-laboratorio-107-para-la-gestión-de-activos-de-ia-con-versiones"},"Enhorabuena, has llegado al final del laboratorio 107 para la gestión de activos de IA con versiones.")))))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(o,e)):o(e)},s=n(94184),i=n.n(s),c=n(24690),u=n(81140),m=n(48623),d=n(88531),g=n(13383),p=n(27315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:o,updated:r}}},children:s}=e,c=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:o,updated:r},a[0].title||t||""),l.createElement(d.Z,{className:p.YS},l.createElement("article",{className:i()(p.Y2,!b&&p.ey),ref:c},l.createElement(m.Z,{components:{h1:()=>null}},s)),b&&l.createElement(g.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(c.Z,{pathname:a,title:n||t[0].title||void 0})};function v(e){return l.createElement(E,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-gov-107-es-md-f0eb2754b2c1dd118b68.js.map