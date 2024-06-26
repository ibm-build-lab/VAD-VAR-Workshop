"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5744],{80969:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return v}});var t=n(11151),l=n(67294);function i(e){const a=Object.assign({section:"section",h1:"h1",p:"p",img:"img",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",ol:"ol"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-desglose-de-aplicaciones-empresariales"},l.createElement(a.h1,{id:"103-desglose-de-aplicaciones-empresariales"},"103: Desglose de aplicaciones empresariales"),"\n",l.createElement(a.p,null,"Veamos cómo Turbonomic ayuda a los ingenieros de fiabilidad del sitio con sus tareas. En comparación con la función de gestor de SRE, un SRE suele estar interesado en el estado de una aplicación específica y en las medidas que pueden tomarse para garantizar su rendimiento, mitigando cualquier riesgo antes de que afecte a los usuarios finales."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/eddie.png",alt:""}),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Nota: La aplicación empresarial que elija puede diferir de la presentada en este guión. Por favor, ajuste su historia en consecuencia"),"\n"),"\n",l.createElement(a.p,null,'Haga clic en cualquiera de las aplicaciones que aparecen en el widget de las principales aplicaciones empresariales, por ejemplo "Cotización del día". Si no aparece en la vista principal, haga clic en ',l.createElement(a.strong,null,"MOSTRAR TODAS")," para abrir la lista completa."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/qotd.png",alt:""}),"\n",l.createElement(a.p,null,"Cuando se llega a esta aplicación de negocio, la cadena de suministro ha cambiado de mostrar todas las entidades en el entorno global a sólo las entidades que son relevantes para la aplicación seleccionada. Esta aplicación de negocio consiste en 23 transacciones de negocio ",l.createElement(a.strong,null,"(A)"),", 12 servicios ",l.createElement(a.strong,null,"(B)"),", y 20 componentes de aplicación ",l.createElement(a.strong,null,"(C)")," ejecutándose en 18 contenedores ",l.createElement(a.strong,null,"(D)")," que se asientan sobre 2 máquinas virtuales ",l.createElement(a.strong,null,"(E)"),". Esta máquina virtual está conectada a 2 volúmenes de almacenamiento ",l.createElement(a.strong,null,"(F)"),". Observe que las entidades pueden tener diferentes colores donde:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,'El "rojo" indica un riesgo de rendimiento en el que las entidades deben trasladarse a un host más óptimo o ampliarse debido a la congestión de recursos o a un aprovisionamiento insuficiente.'),"\n",l.createElement(a.li,null,'el "amarillo" indica oportunidades de eficiencia en las que se pueden recuperar recursos por exceso de provisión; y'),"\n",l.createElement(a.li,null,'"verde" indica entidades en su estado deseado, que es lo que buscamos.'),"\n"),"\n",l.createElement(a.p,null,"El resultado es que, al delimitar la aplicación específica, se puede ver rápidamente dónde hay riesgo de congestión o dónde se desperdician potencialmente los recursos."),"\n",l.createElement(a.p,null,"Puede ver las métricas de los tiempos de respuesta ",l.createElement(a.strong,null,"(G)")," y las transacciones por segundo ",l.createElement(a.strong,null,"(H)")," junto con sus objetivos de nivel de servicio (SLO) que puede establecer en la sección de políticas de Turbonomic. Esta información procede de la herramienta APM conectada, en este caso Instana, lo que se indica en la esquina superior izquierda ",l.createElement(a.strong,null,"(I)"),"."),"\n",l.createElement(a.p,null,"La estructura de la cadena de suministro también se importó de Instana, donde la Aplicación de Negocio se define como una agrupación lógica de Transacciones de Negocio, Servicios y Componentes de Aplicación."),"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.strong,null,"Transacción comercial")),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/business-transaction.png",alt:""}),"\n",l.createElement(a.p,null,"Si se refiere a la Transacción de Negocio, representa una capacidad dentro de su Aplicación de Negocio que satisface una respuesta a una petición iniciada por el usuario. Su rendimiento afecta directamente a la experiencia del usuario."),"\n",l.createElement(a.p,null,"Haga clic en el ",l.createElement(a.strong,null,"Servicio")),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/service.png",alt:""}),"\n",l.createElement(a.p,null,"La entidad de Servicio está formada por uno o más Componentes de Aplicación que realizan una función definida y medible como parte de una petición interna o iniciada por el usuario. Su rendimiento es clave para comprender el rendimiento de la aplicación, pero sólo afecta indirectamente a la experiencia del usuario."),"\n",l.createElement(a.p,null,"Haga clic en el ",l.createElement(a.strong,null,"componente de aplicación")),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/app-components.png",alt:""}),"\n",l.createElement(a.p,null,"Por último, si va al componente de aplicación, verá un componente de software, código de aplicación o una unidad de procesamiento dentro de un servicio que consume recursos para poder realizar su función para la aplicación empresarial. Turbonomic puede recomendar acciones para ajustar la cantidad de recursos disponibles para los componentes de la aplicación."),"\n",l.createElement(a.p,null,"Turbonomic no recomienda acciones para una aplicación de negocio, transacciones o servicios, pero sí recomienda acciones para los componentes de aplicación subyacentes y las entidades de infraestructura, proporcionando así visibilidad de los riesgos que tienen un impacto directo en el rendimiento de la aplicación de negocio. Por ejemplo, puede ver aquí las acciones para reducir el tamaño del montón (asignación de memoria) para una máquina virtual Java (JVM) y la máquina virtual (VM) que aloja esa JVM."),"\n",l.createElement(a.p,null,"Exploremos las acciones de Turbonomic con más detalle."),"\n",l.createElement(a.p,null,"Haga clic en el botón verde ",l.createElement(a.strong,null,"ON")," en la esquina superior izquierda para volver a la página de inicio de Turbonomic. Haga clic en ",l.createElement(a.strong,null,"MOSTRAR TODO")," en la parte inferior del widget ",l.createElement(a.strong,null,"Acciones pendientes"),"."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/landing-page-pending.png",alt:""}),"\n",l.createElement(a.p,null,"Puede ver aquí, en el widget Acciones pendientes, los tipos de acciones que se generan. Estas pueden ser:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,'acciones de "colocación" para mover una máquina virtual al host o almacenamiento más deseable de un nivel a otro'),"\n",l.createElement(a.li,null,'acciones de "supresión" para eliminar volúmenes de almacenamiento que han quedado huérfanos'),"\n",l.createElement(a.li,null,'acciones de "escalado" para redimensionar una máquina virtual, un contenedor o una base de datos'),"\n",l.createElement(a.li,null,'acciones de "parada" o "suspensión" para desactivar recursos ociosos y evitar cargos innecesarios, y'),"\n",l.createElement(a.li,null,'acciones de "inicio/compra" para encender nuevas máquinas virtuales, aprovisionar un nuevo host o comprar instancias reservadas (RI) en la nube.'),"\n"),"\n",l.createElement(a.p,null,"En este ejemplo, hay más de 500 acciones que se pueden tomar para mover este entorno híbrido al estado óptimo o lo que llamamos el estado deseado. Puedes ver que hay acciones para escalar la CPU virtual o la memoria virtual de las máquinas virtuales, acciones de aprovisionamiento para añadir un host en un clúster donde los recursos son bajos y acciones de movimiento para mover una máquina virtual de un host a otro."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/landing-page-pending-filter.png",alt:""}),"\n",l.createElement(a.p,null,"Dado que hay cientos y a veces miles de acciones en un entorno, Turbonomic le permite aplicar filtros a la lista de acciones para ayudarle a ordenar rápidamente la lista. Al hacer clic en AÑADIR FILTRO y abrir el menú desplegable, puede filtrar las acciones por tipo de acción, modo de acción, categoría de acción, prerrequisito de acción o tipo de entidad."),"\n",l.createElement(a.p,null,'Quizás se pregunte: "¿Cómo sabe una SRE que estas son las acciones correctas que hay que tomar?". Para cada acción, Turbonomic no solo muestra el estado actual del entorno, sino que también muestra el impacto positivo en el entorno si se realiza la acción sugerida. Vamos a ampliar un par de acciones para mostrar esto, empezando por una acción de movimiento.'),"\n",l.createElement(a.p,null,"Despliegue ",l.createElement(a.strong,null,"Mover")," -> ",l.createElement(a.strong,null,"Máquinas Virtuales")," (o ",l.createElement(a.strong,null,"Mover")," -> ",l.createElement(a.strong,null,"Container Pods")," si el otro no está visible). Haga clic en el botón ",l.createElement(a.strong,null,"DETALLES")," de cualquier registro."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/move.png",alt:""}),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Nota: Dependiendo de la acción seleccionada, el riesgo detectado (motivo de la acción que se va a generar) - RENDIMIENTO en este caso - puede ser diferente. Ajuste su narración en consecuencia."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/move-detail.png",alt:""}),"\n",l.createElement(a.p,null,"Si nos fijamos en la descripción de esta acción de movimiento, la máquina virtual (o contenedor Pod) se está moviendo a un nuevo host debido a la congestión de memoria en el host actual. Para cada una de las métricas mostradas, el valor de la izquierda es el estado actual, mientras que el valor de la derecha es el estado proyectado después de realizar la acción."),"\n",l.createElement(a.p,null,"A continuación, veamos una acción de escalado de VM."),"\n",l.createElement(a.p,null,"Expanda ",l.createElement(a.strong,null,"Escala")," -> ",l.createElement(a.strong,null,"Máquinas Virtuales"),". Haga clic en ",l.createElement(a.strong,null,"DETALLES")," de cualquier acción de escalado de máquinas virtuales."),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Nota: Dependiendo de la acción seleccionada, los gráficos asociados y los detalles de la acción pueden ser diferentes. Adapte su narración en consecuencia."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/scale-detail.png",alt:""}),"\n",l.createElement(a.p,null,"Para el escalado de máquinas virtuales, Turbonomic utiliza cálculos de percentiles para medir la utilización de la CPU virtual y de la memoria virtual con mayor precisión, e impulsar acciones de escalado que mejoren la utilización general y reduzcan el coste de las máquinas virtuales en nube. Cuando examine los detalles de una acción de escalado pendiente en una máquina virtual, verá gráficos que resaltan los percentiles de utilización de la CPU virtual y/o de la memoria virtual para un periodo de observación determinado, y los percentiles proyectados después de ejecutar la acción. La configuración de agresividad de Turbonomic es el percentil 95 con un período de observación de 30 días. Esto significa que, en este ejemplo, Turbonomic muestra que la utilización de vCPU está por debajo del 93% durante el 95% del tiempo en los últimos 30 días. Debido a que esto está muy por encima de la configuración actual para el estado deseado del 70%, hay una acción para cambiar el tamaño de la vCPU. Se puede ver que después de esta acción de redimensionamiento, la utilización del percentil de vCPU se proyecta por debajo del 62% durante el 95% del tiempo. La razón por la que se ve que el percentil de vMem aumenta es porque hay una acción correspondiente para reducir el tamaño de vMem que no se muestra aquí."),"\n",l.createElement(a.p,null,"Por ejemplo, si el modo de acción se establece en manual, un SRE puede hacer clic en esta casilla de verificación, desplazarse hacia arriba y hacer clic en ",l.createElement(a.strong,null,"EJECUTAR ACCIONES")," y esta máquina virtual se moverá al nuevo host o, en el caso de la acción de cambio de tamaño, se cambiará el tamaño de la máquina virtual. Además, puede crear políticas de automatización para que Turbonomic adopte un enfoque preventivo y tome automáticamente estas medidas antes de que se produzcan problemas."),"\n",l.createElement(a.p,null,"Esto mantiene el entorno en el estado deseado sin intervención humana y minimiza la cantidad de tiempo que los equipos de TI deben dedicar a depurar los problemas de recursos de las aplicaciones después de que se produzcan y garantiza que las aplicaciones obtengan los recursos que necesitan exactamente cuando los necesitan."),"\n",l.createElement(a.p,null,"En otras palabras, Turbonomic garantiza que la demanda de las aplicaciones se satisface en tiempo real con la oferta de recursos de TI disponibles. Por último, estas acciones pueden programarse para ejecutarse durante una ventana de mantenimiento e incluso obtener aprobaciones mediante solicitudes de cambio a través de la integración de Turbonomic con ServiceNow. Exploremos cómo SRE puede establecer políticas de automatización."),"\n",l.createElement(a.p,null,"Vamos a crear una única política de automatización para la colocación y redimensionamiento de máquinas virtuales. Además, supongamos que desea que las acciones de colocación se ejecuten en cualquier momento en que se genere la acción y que desea que las acciones de aumento y reducción de tamaño para vCPU y vMem se produzcan cada noche."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a ",l.createElement(a.strong,null,"Configuración")," > ",l.createElement(a.strong,null,"Políticas")," > ",l.createElement(a.strong,null,"NUEVA POLÍTICA")," > ",l.createElement(a.strong,null,"Política de automatización")," > ",l.createElement(a.strong,null,"Máquinas virtuales"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/policy.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,'Dé un nombre a la política: por ejemplo, "VM_placement_resize".'),"\n",l.createElement(a.li,null,"Alcance esta política a un grupo de máquinas virtuales y, en este caso, vamos a automatizar dentro de un único clúster (seleccione ",l.createElement(a.strong,null,"ad_win"),")."),"\n",l.createElement(a.li,null,"En ",l.createElement(a.strong,null,"AUTOMATION WORKFLOW"),", haga clic en ",l.createElement(a.strong,null,"ADD ACTION"),". Puede elegir el tipo de acción ",l.createElement(a.strong,null,"Mover")," para automatizar la colocación, ",l.createElement(a.strong,null,"Generación de la acción")," a ",l.createElement(a.strong,null,"Automatizada")," y, a continuación, ",l.createElement(a.strong,null,"Enviar"),"."),"\n",l.createElement(a.li,null,"Para añadir la automatización del redimensionamiento, haga clic de nuevo en ",l.createElement(a.strong,null,"AÑADIR ACCIÓN"),". Puede elegir los cuatro tipos de acción ",l.createElement(a.strong,null,"vCPU Resize Up"),", ",l.createElement(a.strong,null,"vMem Resize Up"),", ",l.createElement(a.strong,null,"vCPU Resize Down")," y ",l.createElement(a.strong,null,"vMem Resize Down")," para automatizar los cambios de tamaño de las máquinas virtuales."),"\n",l.createElement(a.li,null,"Establezca la acción Generar en Automático."),"\n",l.createElement(a.li,null,"Para los redimensionamientos, dijimos que querías hacerlos en un horario entre la medianoche y las 5 am, lo que se puede hacer con un Horario de Ejecución de Acciones. Agreguemos el horario."),"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"AGREGAR PROGRAMA")," desde ",l.createElement(a.strong,null,"Programa de Ejecución"),". Seleccione ",l.createElement(a.strong,null,"12AM a 5AM")," y haga clic en ",l.createElement(a.strong,null,"GUARDAR"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/103/policy-config.png",alt:""}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"ENVIAR")," en ",l.createElement(a.strong,null,"Flujo de trabajo de automatización"),"."),"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"GUARDAR POLÍTICA")," y ",l.createElement(a.strong,null,"APLICAR")," para aplicar la política."),"\n"),"\n",l.createElement(a.p,null,"Puedes ver que hay mucha flexibilidad en la configuración de las políticas, y tienes el control total si esas acciones se toman manualmente o de forma totalmente automatizada."))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(i,e)):i(e)},c=n(94184),r=n.n(c),s=n(24690),u=n(81140),d=n(48623),m=n(88531),p=n(13383),g=n(27315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:i,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:i,updated:o},a[0].title||t||""),l.createElement(m.Z,{className:g.YS},l.createElement("article",{className:r()(g.Y2,!b&&g.ey),ref:s},l.createElement(d.Z,{components:{h1:()=>null}},c)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function v(e){return l.createElement(E,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-103-es-md-d9070aaf230e17f2b2c5.js.map