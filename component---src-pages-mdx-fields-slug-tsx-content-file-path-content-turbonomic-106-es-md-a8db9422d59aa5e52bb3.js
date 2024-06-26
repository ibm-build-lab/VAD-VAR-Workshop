"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7590],{99669:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return h}});var t=n(11151),l=n(67294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",ol:"ol",img:"img",h3:"h3",em:"em",h4:"h4"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"106-acciones-y-políticas-turbonómicas"},l.createElement(a.h1,{id:"106-acciones-y-políticas-turbonómicas"},"106: Acciones y políticas turbonómicas"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},l.createElement(a.h2,{id:"objetivo"},l.createElement(a.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(a.p,null,"En este laboratorio:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Explorar diferentes tipos de acciones"),"\n",l.createElement(a.li,null,"Explorar las políticas existentes"),"\n",l.createElement(a.li,null,"Crear una política de automatización"),"\n",l.createElement(a.li,null,"Programar una política de automatización"),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Tenga en cuenta que el número y los tipos de acciones pueden variar en función de su entorno")),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"explorar-diferentes-tipos-de-acciones"},l.createElement(a.h2,{id:"explorar-diferentes-tipos-de-acciones"},l.createElement(a.a,{href:"#explorar-diferentes-tipos-de-acciones"},"Explorar diferentes tipos de acciones")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya al panel principal pulsando el botón ",l.createElement(a.strong,null,"On")," del navegador. A continuación, seleccione ",l.createElement(a.strong,null,"Mostrar todo")," en la sección ",l.createElement(a.strong,null,"Acciones pendientes"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/pendingactions.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"En esta página verá todas las acciones pendientes, tanto en la nube como en local. Si echa un vistazo a la lista de la izquierda, verá que las acciones están clasificadas por tipo. Dedica unos minutos a explorar las acciones yendo a las pestañas on-prem o cloud."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/actionpage.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Mientras exploras las acciones, notarás que cada tipo de acción tiene múltiples entidades a las que afecta. Por ejemplo, el tipo ",l.createElement(a.strong,null,"Scale")," - que es básicamente una acción de redimensionamiento para entidades en la nube - afecta a VMs, bases de datos, almacenamiento VM y volúmenes. Echemos un vistazo más de cerca a algunas de estas acciones."),"\n"),"\n",l.createElement(a.p,null,"Navegue hasta ",l.createElement(a.strong,null,"Volúmenes")," en Tipo de acción de ",l.createElement(a.strong,null,"escala"),"."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/scalevolume.png",alt:""}),"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Azure"),". A continuación, haga clic en ",l.createElement(a.strong,null,"Detalles")," para una acción que es ",l.createElement(a.strong,null,"Rendimiento")," del mercado y reduce su coste. Es posible que tenga que desplazarse a la derecha para localizar el botón."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/volumedetail.png",alt:""}),"\n",l.createElement(a.p,null,"Esta página muestra todos los detalles acerca de esta acción, incluyendo por qué se generó, cuál es el impacto si se toma, los costos o ahorros de costos asociados con la toma de esta acción, e información importante acerca de si causará tiempo de inactividad si se toma y si es reversible o no. Echemos un vistazo más de cerca a la información especificada en el detalle de esta acción."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Esta sección le informa de la acción, la entidad a la que afecta, la ubicación en la que existe la entidad y el motivo. En esta imagen, tenemos una acción de volumen de escalado para la entidad denominada ",l.createElement(a.strong,null,"ptericdisks3_datadisk_2")," en el despliegue denominado ",l.createElement(a.strong,null,"EA - Desarrollo")," y el motivo es Congestión de IOPS."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,'La sección "Aspectos esenciales de la acción" ofrece una visión rápida de lo que necesita saber para emprender esta acción.'),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"La acción puede ser aceptada y ejecutada inmediatamente significa que actualmente no hay restricciones que te impidan tomarla ahora mismo. Exploraremos más a fondo lo que esto significa cuando hablemos de los modos de acción."),"\n",l.createElement(a.li,null,"Si hay o no tiempo de inactividad asociado a la adopción de esta medida. En nuestro ejemplo, este cambio requiere un periodo de inactividad, por lo que al plantearse tomarlo hay que planificarlo con antelación e informar a los usuarios de este volumen de inactividad previsto."),"\n",l.createElement(a.li,null,"Si esta acción es o no reversible."),"\n"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En esta sección aprenderá por qué se genera esta acción. Normalmente, Turbonomic observa la entidad durante un periodo de tiempo y captura el percentil 95 de la misma. Considerando el ejemplo mostrado en la imagen inferior, Turbonomic nos dice que la utilización de IOPS es de aproximadamente el 100% el 95% del tiempo durante un periodo de observación de 30 días. Esto significa que hay una congestión de IOPS en este volumen, por lo que se genera una acción de escalado para esta entidad con el fin de moverla a un volumen más adecuado."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"El gráfico del percentil 95 de IOPS."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Gráfico de IOPS medias diarias."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"La línea de puntos representa el percentil 95 previsto después de tomar esta medida."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Comparación detallada entre el estado actual de los recursos y el resultado previsto tras la adopción de la medida."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Comparación detallada del ahorro de costes si toma esta medida. Observe cómo el escalado a un volumen diferente se traducirá en mayores IOPS, menor utilización e incluso ahorro de dinero. Entonces, ¿por qué no lo haría?"),"\n"),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/actiondetail1.png",alt:""}),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/actiondetail2.png",alt:""}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"optimizar-los-recursos-locales"},l.createElement(a.h3,{id:"optimizar-los-recursos-locales"},l.createElement(a.a,{href:"#optimizar-los-recursos-locales"},"Optimizar los recursos locales")),"\n",l.createElement(a.p,null,"En esta sección, tomará acciones que optimizarán sus recursos on-prem a la vez que aseguran el rendimiento. La realización de dichas acciones tendrá como resultado la liberación de recursos por parte de entidades o VMs que no estén utilizando lo que tienen durante el periodo de observación (por defecto 30 días) para que puedan ser asignados a cargas de trabajo que necesiten dichos recursos."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a la pestaña ",l.createElement(a.strong,null,"On-Prem")," de su página de acciones. A continuación, en ",l.createElement(a.strong,null,"Redimensionar"),", seleccione ",l.createElement(a.strong,null,"Máquinas virtuales"),"."),"\n",l.createElement(a.li,null,"Desplácese por la lista y seleccione una acción para reducir el tamaño de la memoria virtual que tenga ",l.createElement(a.strong,null,"Eficiencia")," como categoría de acción. Haga clic en ",l.createElement(a.strong,null,"Detalles"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/optimize1.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Compruebe los detalles, se dará cuenta de que la utilización de la memoria virtual de esta máquina virtual estuvo por debajo del 1% durante el 95% del tiempo a lo largo de 30 días. Esto significa que esta máquina virtual ha sobreasignado memoria que no consume. Por tanto, puede reducir con seguridad la capacidad de memoria sin dejar de ofrecer un rendimiento óptimo. Observe los resultados proyectados de tomar la acción, que aumentará la utilización del 1% al 2%, lo que es perfectamente aceptable."),"\n"),"\n",l.createElement(a.p,null,"Una vez que apruebe todos los detalles y se asegure de que esta acción es segura, haga clic en el botón ",l.createElement(a.strong,null,"Ejecutar acción")," en la parte inferior de la página de detalles. Una vez que ejecute esta acción, Turbonomic utilizará llamadas a la API para ajustar la memoria virtual de esta máquina virtual por usted. Por lo tanto, no necesitará iniciar sesión en su entorno vCenter. Si la acción se ejecuta correctamente, verá una marca de verificación verde junto a esa acción."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/optimize2.png",alt:""}),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"políticas-turbonómicas"},l.createElement(a.h2,{id:"políticas-turbonómicas"},l.createElement(a.a,{href:"#políticas-turbonómicas"},"Políticas turbonómicas")),"\n",l.createElement(a.p,null,"Has aprendido a realizar acciones manualmente. Pero, ¿y si quisiéramos automatizar esto? Una vez que validamos que es seguro y bueno tomar una determinada acción y confiamos en ella, podemos permitir que las entidades actúen según sus propias decisiones."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"explorar-las-políticas-existentes"},l.createElement(a.h3,{id:"explorar-las-políticas-existentes"},l.createElement(a.a,{href:"#explorar-las-políticas-existentes"},"Explorar las políticas existentes")),"\n",l.createElement(a.p,null,l.createElement(a.em,null,"Como recordatorio, por favor asegúrese de que ha iniciado sesión con un usuario ",l.createElement(a.strong,null,"Administrador"),". Si no ha iniciado sesión como usuario administrador, no dispondrá de los permisos necesarios para ejecutar los laboratorios.")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a ",l.createElement(a.strong,null,"Configuración")," y, a continuación, a ",l.createElement(a.strong,null,"Políticas"),". En esta página, verá una lista de todas las políticas existentes."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/policy1.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"En la lista de la izquierda, seleccione ",l.createElement(a.strong,null,"Valores por defecto"),". Esto mostrará una lista de todas las políticas por defecto del sistema."),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.em,null,l.createElement(a.strong,null,"Consejo"),": Estas políticas por defecto permanecen efectivas a menos que el usuario cree una política que afecte a los mismos recursos pero con criterios diferentes. La política definida por el usuario anula la política por defecto.")),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/defaultpolicy.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Desplácese hacia abajo en la lista de políticas predeterminadas y haga clic en ",l.createElement(a.strong,null,"Valores predeterminados de almacenamiento"),". Observe que esta política establece la aceptación de la acción ",l.createElement(a.strong,null,"Redimensionar")," en recomendar. Esto hará que todas las acciones de cambio de tamaño generadas para el almacenamiento se establezcan solo como recomendadas y no se puedan ejecutar en Turbonomic."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/storage1.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Respectivamente, para la acción que exploró para una máquina virtual en nube en la que podría aceptarla manualmente y ejecutarla dentro de Turbonomic, hay un conjunto de políticas predeterminado que lo define:"),"\n"),"\n",l.createElement(a.p,null,"Navegue hasta la política ",l.createElement(a.strong,null,"Virtual Machine Defaults")," de la lista de políticas por defecto. Puede ver que todas las acciones de escalado en la nube están configuradas como ",l.createElement(a.strong,null,"Manual"),", lo que permite aceptarlas y ejecutarlas (suponiendo que no haya requisitos previos para ellas)."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/vm1.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"crear-una-política-de-automatización"},l.createElement(a.h3,{id:"crear-una-política-de-automatización"},l.createElement(a.a,{href:"#crear-una-política-de-automatización"},"Crear una política de automatización")),"\n",l.createElement(a.p,null,"Creará una política de automatización para definir cómo desea que Turbonomic trate las acciones a medida que aparecen. Tenga en cuenta que las políticas definidas por el usuario anularán las políticas predeterminadas del sistema que afecten a la misma entidad."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"añadir-restricciones-al-objetivo-de-nivel-de-servicio-slo-de-tiempo-de-respuesta"},l.createElement(a.h4,{id:"añadir-restricciones-al-objetivo-de-nivel-de-servicio-slo-de-tiempo-de-respuesta"},l.createElement(a.a,{href:"#añadir-restricciones-al-objetivo-de-nivel-de-servicio-slo-de-tiempo-de-respuesta"},"Añadir restricciones al objetivo de nivel de servicio (SLO) de tiempo de respuesta")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a ",l.createElement(a.strong,null,"Políticas")," desde ",l.createElement(a.strong,null,"Configuración"),". A continuación, haga clic en ",l.createElement(a.strong,null,"Nueva política de automatización")," en la parte superior derecha de la ventana."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/auto1.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"Aplicación empresarial"),". Una vez hecho aparecerá la ventana del Editor de Políticas."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/businessapplication.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"En el editor de políticas, asigne a su política un nombre único como response_time_YourInitials. Luego en ",l.createElement(a.strong,null,"Alcance")," haga click en ",l.createElement(a.strong,null,"Seleccionar grupo de aplicaciones de negocio"),". Esto especificará que grupo de aplicaciones de negocio serán afectadas por esta política."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/policyname.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Una vez que haga clic en ",l.createElement(a.strong,null,"Seleccionar")," ",l.createElement(a.strong,null,"grupo de aplicaciones")," empresariales, aparecerá la ventana del editor ",l.createElement(a.strong,null,"Seleccionar grupo de aplicaciones")," empresariales."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/businessappeditor.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Haga clic en el botón ",l.createElement(a.strong,null,"Nuevo grupo"),". Aparecerá la ventana del editor ",l.createElement(a.strong,null,"Añadir miembros a un nuevo")," grupo."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/newgroupbtn.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"(1) Nombra tu grupo ",l.createElement(a.strong,null,"Instana Services"),". Cambie el tipo a (2) ",l.createElement(a.strong,null,"Estático")," en el menú desplegable ",l.createElement(a.strong,null,"Tipo"),". (3) Seleccione ",l.createElement(a.strong,null,"RobotShop")," y (4) ",l.createElement(a.strong,null,"Cotización del día"),". Luego (5) haga clic en el botón ",l.createElement(a.strong,null,"Guardar grupo")),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/groupeditor.png",alt:""}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"Seleccione el grupo ",l.createElement(a.strong,null,"Servicios Instana")," y haga clic en el botón ",l.createElement(a.strong,null,"Seleccionar"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/selectgroup.png",alt:""}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"En el editor de políticas, añada las restricciones ",l.createElement(a.strong,null,"Habilitar SLO")," de tiempo de respuesta y ",l.createElement(a.strong,null,"SLO de tiempo de respuesta (ms)")," y, a continuación, haga clic en ",l.createElement(a.strong,null,"Guardar política"),". Puede que reciba un mensaje diciendo que la política puede tardar 10 minutos en hacerse efectiva, haga clic en ",l.createElement(a.strong,null,"Sí")," para continuar."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/savepolicy.png",alt:""}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"Para comprobar si su política está creada, intente buscar el nombre de su política en la lista. también puede realizar cambios y editarla según sea necesario desde aquí."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/verifypolicy.png",alt:""}),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"programar-una-póliza"},l.createElement(a.h3,{id:"programar-una-póliza"},l.createElement(a.a,{href:"#programar-una-póliza"},"Programar una póliza")),"\n",l.createElement(a.p,null,"Puede establecer una programación para una política de automatización, que establece una ventana de tiempo en la que la política entra en vigor. Además, una política programada puede incluir acciones programadas. Cuando la política está en vigor, Turbonomic recomienda o ejecuta automáticamente esas acciones a medida que se generan. Algunas de esas acciones podrían ser perjudiciales, por lo que es posible que desee aplazar su ejecución a una ventana de tiempo no crítica. En este caso, deberá establecer un calendario de ejecución de acciones dentro de la política programada."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Haga clic en la política de automatización, response_time_YourInitials, que acabamos de crear."),"\n",l.createElement(a.li,null,"Expanda el Horario ",l.createElement(a.strong,null,"de la Política")," y haga clic en ",l.createElement(a.strong,null,"Adjuntar Horario"),". A continuación, haga clic en ",l.createElement(a.strong,null,"Nuevo")," calendario"),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/attachschedule.png",alt:""}),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/newschedule.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Esta sección definirá cuándo está en vigor su póliza."),"\n",l.createElement(a.p,null,"A. Dé a su programa de pólizas un nombre como policy_schedule_YourInitials."),"\n",l.createElement(a.p,null,"B. Seleccione ",l.createElement(a.strong,null,"Semanal")," en Recurrencia."),"\n",l.createElement(a.p,null,"C. Configurar para que se repita cada semana sólo los ",l.createElement(a.strong,null,"sábados")," y ",l.createElement(a.strong,null,"domingos"),"."),"\n",l.createElement(a.p,null,"D. Seleccione la fecha de hoy como fecha de inicio y ",l.createElement(a.strong,null,"Ninguna")," como fecha final."),"\n",l.createElement(a.p,null,"E. Establezca las 12:00 como hora de inicio y 12 para las horas de duración. Tenga en cuenta que si usted está completando este laboratorio por la tarde hora local, es posible que desee ajustar este tiempo de 12:00 a unas horas después de su hora actual. La razón es que el sistema no le permitirá crear una política en el pasado."),"\n",l.createElement(a.p,null,"F. Seleccione su zona horaria."),"\n",l.createElement(a.p,null,"G. Compruebe el Resumen y haga clic en ",l.createElement(a.strong,null,"Enviar"),"."),"\n"),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/editschedule.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Seleccione el horario que acaba de crear y haga clic en ",l.createElement(a.strong,null,"Fijar")),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/setschedule.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Ahora debería estar de vuelta en la página ",l.createElement(a.strong,null,"Configurar la Política de Aplicaciones Empresariales"),". Compruebe toda la información y asegúrese de que es correcta. Una vez hecho esto, haga clic en ",l.createElement(a.strong,null,"Guardar política"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Turbonomic/images/106/savepolicy2.png",alt:""}))))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},i=n(94184),c=n.n(i),s=n(24690),m=n(81140),u=n(48623),d=n(88531),p=n(13383),g=n(27315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:o}}},children:i}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},a[0].title||t||""),l.createElement(d.Z,{className:g.YS},l.createElement("article",{className:c()(g.Y2,!b&&g.ey),ref:s},l.createElement(u.Z,{components:{h1:()=>null}},i)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(E,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-106-es-md-a8db9422d59aa5e52bb3.js.map