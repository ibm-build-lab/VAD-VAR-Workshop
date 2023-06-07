"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8714],{7186:function(e,a,n){n.r(a),n.d(a,{Head:function(){return h},default:function(){return f}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",p:"p",img:"img",ul:"ul",li:"li",strong:"strong",ol:"ol",a:"a",blockquote:"blockquote",h2:"h2",em:"em",code:"code"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-uso-de-ibm-mq-e-ibm-event-streams-para-la-replicación-de-datos-casi-en-tiempo-real"},l.createElement(a.h1,{id:"102-uso-de-ibm-mq-e-ibm-event-streams-para-la-replicación-de-datos-casi-en-tiempo-real"},"102: Uso de IBM MQ e IBM Event Streams para la replicación de datos casi en tiempo real"),"\n",l.createElement(a.p,null,"En este laboratorio utilizará IBM MQ e IBM Event Streams para replicar datos de una base de datos transaccional a una base de datos de informes. El patrón utilizado permite un escalado horizontal continuo para minimizar la latencia entre el momento en que la transacción se consigna en la base de datos transaccional y el momento en que está disponible para su consulta en la base de datos de informes."),"\n",l.createElement(a.p,null,"A continuación se muestra la arquitectura de la solución que construirá:"),"\n",l.createElement(a.img,{src:"/1686155955617.7468781252/architecture.png",alt:"Architecture diagram"}),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"El microservicio ",l.createElement(a.strong,null,"de cartera")," se sitúa en el centro de la aplicación. Este microservicio:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"envía las transacciones completadas a una cola IBM MQ."),"\n",l.createElement(a.li,null,"llama al servicio ",l.createElement(a.strong,null,"trade-history")," para obtener datos comerciales históricos agregados."),"\n"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"El origen ",l.createElement(a.strong,null,"Kafka Connect")," utiliza el marco Kafka Connect y un origen IBM MQ para consumir los datos de transacción de IBM MQ y enviarlos a un tema en IBM Event Streams. Al escalar este servicio horizontalmente, puede reducir la latencia entre el momento en que la transacción se consigna en la base de datos transaccional y el momento en que está disponible para su consulta en la base de datos de informes,"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"El sumidero ",l.createElement(a.strong,null,"Kafka Connect")," utiliza el marco Kafka Connect y un sumidero Mongodb para recibir los datos de transacción de IBM Event Streams y publicarlos en la base de datos de informes. Al escalar este servicio horizontalmente, puede reducir la latencia entre el momento en que la transacción se consigna en la base de datos transaccional y el momento en que está disponible para su consulta en la base de datos de informes."),"\n"),"\n"),"\n",l.createElement(a.p,null,"Este laboratorio se divide en los siguientes pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-1-uninstall-the-traderlite-app"},"Desinstalar la aplicación TraderLite")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-2-create-a-topic-in-the-event-streams-management-console"},"Crear un tema en la consola de gestión de flujos de eventos")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-3-add-messaging-components-to-the-trader-lite-app"},"Añadir componentes de mensajería a la aplicación Trader Lite")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-4-generate-some-test-data-with-the-traderlite-app"},"Generar algunos datos de prueba con la aplicación Trader Lite")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-5-view-messages-in-ibm-mq"},"Compruebe que sus operaciones se han enviado como mensajes a IBM MQ")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-6-start-kafka-replication"},"Iniciar la replicación de Kafka")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-7-verify-transaction-data-was-replicated-to-the-trade-history-database"},"Verificar que los datos de las transacciones se han replicado en la base de datos del historial comercial.")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#step-8-examine-the-messages-sent-to-your-event-streams-topic"},"Examine los mensajes enviados a su tema Event Streams")),"\n",l.createElement(a.li,null,l.createElement(a.a,{href:"#summary"},"Resumen")),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," Puede hacer clic en cualquier imagen de las siguientes instrucciones para ampliarla y ver más detalles. Cuando lo hagas, haz clic en el botón Atrás de tu navegador para volver al estado anterior."),"\n"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-1-desinstalar-la-aplicación-traderlite"},l.createElement(a.h2,{id:"paso-1-desinstalar-la-aplicación-traderlite"},l.createElement(a.a,{href:"#paso-1-desinstalar-la-aplicación-traderlite"},"Paso 1: Desinstalar la aplicación TraderLite")),"\n",l.createElement(a.p,null,"Si ha completado los laboratorios de integración de API Connect y/o Salesforce, entonces ya tendrá la aplicación en ejecución. Para este laboratorio es más fácil instalar la aplicación desde cero para que pueda utilizar el entorno OpenShift GUI (en lugar de editar el archivo yaml de una instancia existente) para seleccionar todas las opciones necesarias para esta aplicación. Si la aplicación ",l.createElement(a.em,null,"NO")," está instalada, vaya al ",l.createElement(a.strong,null,"paso 2"),"."),"\n",l.createElement(a.p,null,"1.1 Vaya a la consola OpenShift de su clúster de taller. Seleccione su proyecto ",l.createElement(a.strong,null,l.createElement(a.em,null,"studentnnn")),". En la navegación de la izquierda seleccione ",l.createElement(a.strong,null,"Operadores instalados")," en la sección ",l.createElement(a.strong,null,"Operadores")," y seleccione el ",l.createElement(a.strong,null,"operador TraderLite"),"."),"\n",l.createElement(a.a,{href:"/1686155955749.7473781527/traderlite-operator.png"},l.createElement(a.img,{src:"/1686155955749.7473781527/traderlite-operator.png",alt:""})),"\n",l.createElement(a.p,null,"1.2 Haga clic en la pestaña de ",l.createElement(a.strong,null,"la aplicación TraderLite")),"\n",l.createElement(a.a,{href:"/1686155955737.747781521/traderlite-crd.png"},l.createElement(a.img,{src:"/1686155955737.747781521/traderlite-crd.png",alt:""})),"\n",l.createElement(a.p,null,"1.3 Haga clic en los 3 periodos a la derecha del CRD TraderLite existente y seleccione ",l.createElement(a.strong,null,"Eliminar TraderLite")," en el menú contextual."),"\n",l.createElement(a.a,{href:"/1686155955709.747781506/select-traderlite-crd2.png"},l.createElement(a.img,{src:"/1686155955709.747781506/select-traderlite-crd2.png",alt:""})),"\n",l.createElement(a.p,null,"1.4 En el área de navegación de la izquierda, seleccione ",l.createElement(a.strong,null,"Pods")," en la sección ",l.createElement(a.strong,null,"Workloads"),". Debería ver que los pods ",l.createElement(a.em,null,"traderlite-xxxxx-yyyyy")," están terminados."),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.em,null,"Nota: Puede introducir ",l.createElement(a.code,null,"traderlite")," en el campo de búsqueda por nombre para filtrar los pods.")),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-2-crear-un-tema-en-la-consola-de-gestión-de-flujos-de-eventos"},l.createElement(a.h2,{id:"paso-2-crear-un-tema-en-la-consola-de-gestión-de-flujos-de-eventos"},l.createElement(a.a,{href:"#paso-2-crear-un-tema-en-la-consola-de-gestión-de-flujos-de-eventos"},"Paso 2: Crear un tema en la consola de gestión de flujos de eventos")),"\n",l.createElement(a.p,null,"2.1 Vaya a la pestaña del navegador CP4I Platform Navigator"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota"),": Si ha cerrado la pestaña Platform Navigator de su navegador, siga las instrucciones de las ",l.createElement(a.a,{href:"https://ibmcp4i.github.io/cloudpakforintegration-multitenant-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(a.p,null,"2.2 Haga clic en el enlace a la instancia de flujos de eventos"),"\n",l.createElement(a.a,{href:"/1686155955681.747781286/nav-to-es.png"},l.createElement(a.img,{src:"/1686155955681.747781286/nav-to-es.png",alt:""})),"\n",l.createElement(a.p,null,"2.3 Si se le pide que inicie sesión, seleccione el registro de usuarios ",l.createElement(a.strong,null,"Enterprise LDAP")," e inicie sesión con sus credenciales."),"\n",l.createElement(a.p,null,"2.4 Haga clic en la ficha ",l.createElement(a.strong,null,"Crear un tema")),"\n",l.createElement(a.a,{href:"/1686155955633.7468781262/create-topic.png"},l.createElement(a.img,{src:"/1686155955633.7468781262/create-topic.png",alt:""})),"\n",l.createElement(a.p,null,"2.5 Utiliza tu nombre de usuario para el nombre del tema. Por ejemplo, si tu nombre de usuario es ",l.createElement(a.code,null,"estudiante005"),", entonces llama al tema ",l.createElement(a.code,null,"estudiante005"),". Haz clic en ",l.createElement(a.strong,null,"Siguiente"),"."),"\n",l.createElement(a.p,null,"2.6 Deje el valor predeterminado para la retención de mensajes y haga clic en ",l.createElement(a.strong,null,"Siguiente"),"."),"\n",l.createElement(a.p,null,"2.7 Deje el valor predeterminado para las réplicas y haga clic en ",l.createElement(a.strong,null,"Crear tema"),"."),"\n",l.createElement(a.p,null,"2.8 Debería ver su nuevo tema en la lista."),"\n",l.createElement(a.a,{href:"/1686155955689.747781291/new-topic.png"},l.createElement(a.img,{src:"/1686155955689.747781291/new-topic.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-3-añadir-componentes-de-mensajería-a-la-aplicación-trader-lite"},l.createElement(a.h2,{id:"paso-3-añadir-componentes-de-mensajería-a-la-aplicación-trader-lite"},l.createElement(a.a,{href:"#paso-3-añadir-componentes-de-mensajería-a-la-aplicación-trader-lite"},"Paso 3: Añadir componentes de mensajería a la aplicación Trader Lite")),"\n",l.createElement(a.p,null,"En esta sección se instalará la aplicación TraderLite para empezar a almacenar transacciones como mensajes MQ, sin configurar la parte KafkaConnect que moverá las transacciones fuera de MQ, a Event Streams y luego a MongoDB. Esto demuestra cómo MQ puede servir como un almacenamiento fiable y un buffer de reenvío, especialmente durante una interrupción temporal de la red."),"\n",l.createElement(a.p,null,"3.1 Vaya a la consola OpenShift de su clúster de taller. Seleccione su proyecto ",l.createElement(a.strong,null,l.createElement(a.em,null,"studentnnn")),"."),"\n",l.createElement(a.p,null,"3.2 Haga clic en ",l.createElement(a.strong,null,"Operadores instalados")," (en la sección ",l.createElement(a.strong,null,"Operadores")," ) en el menú de navegación de la izquierda y, a continuación, haga clic en el ",l.createElement(a.strong,null,"Operador TraderLite")," de la lista."),"\n",l.createElement(a.a,{href:"/1686155955713.747781507/select-traderlite-operator.png"},l.createElement(a.img,{src:"/1686155955713.747781507/select-traderlite-operator.png",alt:""})),"\n",l.createElement(a.p,null,"3.3 Haga clic en ",l.createElement(a.strong,null,"Crear Instancia")," para iniciar la instalación de la aplicación TraderLite."),"\n",l.createElement(a.a,{href:"/1686155955737.747781522/traderlite-create-instance.png"},l.createElement(a.img,{src:"/1686155955737.747781522/traderlite-create-instance.png",alt:""})),"\n",l.createElement(a.p,null,"3.4 Nombre de la instancia ",l.createElement(a.em,null,"traderlite")),"\n",l.createElement(a.p,null,"3.5 Ajuste los siguientes valores:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"En ",l.createElement(a.strong,null,"Kafka Access")," seleccione el tema ",l.createElement(a.strong,null,"studentnnn")),"\n",l.createElement(a.li,null,"Activar ",l.createElement(a.strong,null,"KafkaIntegration")),"\n",l.createElement(a.li,null,"En ",l.createElement(a.strong,null,"Mqaccess")," selecciona la cola ",l.createElement(a.strong,null,"STUDENTNNN.QUEUE")," que corresponda a tu nombre de usuario."),"\n"),"\n",l.createElement(a.a,{href:"/1686155955745.7473781525/traderlite-create-values.png"},l.createElement(a.img,{src:"/1686155955745.7473781525/traderlite-create-values.png",alt:""})),"\n",l.createElement(a.p,null,"3.6 Desplácese hacia abajo y haga clic en ",l.createElement(a.strong,null,"Crear")),"\n",l.createElement(a.p,null,"3.7 En la barra de navegación de la izquierda, seleccione ",l.createElement(a.strong,null,"Pods")," (en la sección ",l.createElement(a.strong,null,"Workloads")," ) y espere a que todos los pods TraderLite tengan el estado ",l.createElement(a.strong,null,"Running")," y estén en estado ",l.createElement(a.strong,null,"Ready"),". mkdocs"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.em,null,"Nota: Sabrá que los pods traderlite-xxxxx están listos cuando la columna ",l.createElement(a.code,null,"Listo")," muestre ",l.createElement(a.code,null,"1/1"),".")),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-4-generar-algunos-datos-de-prueba-con-la-aplicación-traderlite"},l.createElement(a.h2,{id:"paso-4-generar-algunos-datos-de-prueba-con-la-aplicación-traderlite"},l.createElement(a.a,{href:"#paso-4-generar-algunos-datos-de-prueba-con-la-aplicación-traderlite"},"Paso 4: Generar algunos datos de prueba con la aplicación TraderLite")),"\n",l.createElement(a.p,null,"4.1 En la consola de OpenShift, haga clic en ",l.createElement(a.strong,null,"Rutas")," en el menú de navegación de la izquierda, en la sección ",l.createElement(a.strong,null,"Redes")," y, a continuación, haga clic en el icono situado junto a la URL de la aplicación ",l.createElement(a.strong,null,"Tradr")," (la interfaz de usuario de TraderLite)."),"\n",l.createElement(a.a,{href:"/1686155955753.7473781529/traderlite-run-tradr.png"},l.createElement(a.img,{src:"/1686155955753.7473781529/traderlite-run-tradr.png",alt:""})),"\n",l.createElement(a.p,null,"4.2 Inicie sesión con el nombre de usuario ",l.createElement(a.code,null,"stock")," y la contraseña ",l.createElement(a.code,null,"trader")),"\n",l.createElement(a.a,{href:"/1686155955721.747781511/stock-trader-login.png"},l.createElement(a.img,{src:"/1686155955721.747781511/stock-trader-login.png",alt:""})),"\n",l.createElement(a.p,null,"4.3 Haga clic en ",l.createElement(a.strong,null,"Añadir cliente")," y rellene el formulario. Debe utilizar formatos válidos de correo electrónico y número de teléfono para evitar errores de validación."),"\n",l.createElement(a.a,{href:"/1686155955685.747781289/new-client.png"},l.createElement(a.img,{src:"/1686155955685.747781289/new-client.png",alt:""})),"\n",l.createElement(a.p,null,"4.4 Haga clic en ",l.createElement(a.strong,null,"Guardar")),"\n",l.createElement(a.p,null,"4.5 Haga clic en el ",l.createElement(a.strong,null,"ID de")," la cartera del nuevo cliente para ver los detalles de la cartera"),"\n",l.createElement(a.a,{href:"/1686155955689.747781290/new-portfolio.png"},l.createElement(a.img,{src:"/1686155955689.747781290/new-portfolio.png",alt:""})),"\n",l.createElement(a.p,null,"4.6 Compre algunas acciones de 2 ó 3 empresas diferentes y luego venda una parte de una de las acciones que acaba de comprar. Para comprar acciones, haga clic en el botón ",l.createElement(a.code,null,"Comprar")," acciones, luego seleccione una empresa e introduzca la cantidad de acciones. Para vender acciones, pulse el botón ",l.createElement(a.code,null,"Vender acciones"),", después seleccione el símbolo de la empresa e introduzca el número de acciones que desea vender."),"\n",l.createElement(a.a,{href:"/1686155955605.7468781242/a-few-trades.png"},l.createElement(a.img,{src:"/1686155955605.7468781242/a-few-trades.png",alt:""})),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," Su ROI será incorrecto porque todavía no estamos replicando los datos históricos de operaciones que entran en el cálculo del ROI."),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-5-ver-mensajes-en-ibm-mq"},l.createElement(a.h2,{id:"paso-5-ver-mensajes-en-ibm-mq"},l.createElement(a.a,{href:"#paso-5-ver-mensajes-en-ibm-mq"},"Paso 5: Ver mensajes en IBM MQ")),"\n",l.createElement(a.p,null,"5.1 Vaya a la pestaña del navegador CP4I Platform Navigator"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota"),": Si ha cerrado la pestaña Platform Navigator de su navegador, siga las instrucciones de las ",l.createElement(a.a,{href:"https://ibmcp4i.github.io/cloudpakforintegration-multitenant-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(a.p,null,"5.2 Haga clic en el enlace a la instancia MQ"),"\n",l.createElement(a.a,{href:"/1686155955685.747781288/nav-to-mq.png"},l.createElement(a.img,{src:"/1686155955685.747781288/nav-to-mq.png",alt:""})),"\n",l.createElement(a.p,null,"5.3 Si se le pide que inicie sesión, seleccione el registro de usuarios ",l.createElement(a.strong,null,"Enterprise LDAP")," e inicie sesión con sus credenciales."),"\n",l.createElement(a.p,null,"5.4 Haga clic en el mosaico ",l.createElement(a.strong,null,"Gestionar QMTRADER")),"\n",l.createElement(a.a,{href:"images/manager-qmtrader-tile.png"},l.createElement(a.img,{src:"/1686155955665.747781279/manage-qmtrader-tile.png",alt:""})),"\n",l.createElement(a.p,null,"5.5 Haga clic en la cola ",l.createElement(a.strong,null,"STUDENTNNN.QUEUE")," que corresponda a su nombre de usuario."),"\n",l.createElement(a.a,{href:"/1686155955737.747781520/trader-queue.png"},l.createElement(a.img,{src:"/1686155955737.747781520/trader-queue.png",alt:""})),"\n",l.createElement(a.p,null,"5.5 Debería ver mensajes para las operaciones que acaba de ejecutar. El número de mensajes en la cola variará en función del número de operaciones de compra/venta que haya realizado en los pasos anteriores."),"\n",l.createElement(a.a,{href:"/1686155955673.747781282/mq-messages.png"},l.createElement(a.img,{src:"/1686155955673.747781282/mq-messages.png",alt:""})),"\n",l.createElement(a.p,null,"5.6 Mantén abierta la pestaña del navegador con la interfaz web de MQ, ya que la necesitarás más adelante en el laboratorio."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-6-iniciar-la-replicación-de-kafka"},l.createElement(a.h2,{id:"paso-6-iniciar-la-replicación-de-kafka"},l.createElement(a.a,{href:"#paso-6-iniciar-la-replicación-de-kafka"},"Paso 6: Iniciar la replicación de Kafka")),"\n",l.createElement(a.p,null,"En esta sección se configurará la aplicación TraderLite para empezar a mover los datos de las transacciones fuera de MQ, a Kafka y luego a la base de datos de informes MongoDB."),"\n",l.createElement(a.p,null,"6.1 Vaya a la consola OpenShift de su clúster asignado. En la navegación de la izquierda, seleccione ",l.createElement(a.strong,null,"Operadores instalados")," y seleccione el ",l.createElement(a.strong,null,"operador TraderLite"),"."),"\n",l.createElement(a.p,null,"6.2 Haga clic en la pestaña de ",l.createElement(a.strong,null,"la aplicación TraderLite")),"\n",l.createElement(a.a,{href:"/1686155955737.747781521/traderlite-crd.png"},l.createElement(a.img,{src:"/1686155955737.747781521/traderlite-crd.png",alt:""})),"\n",l.createElement(a.p,null,"6.3 Haga clic en los 3 periodos a la derecha del CRD TraderLite existente y seleccione ",l.createElement(a.strong,null,"Editar TraderLite")," en el menú contextual."),"\n",l.createElement(a.p,null,"6.4 Desplácese hasta la línea 432 y establezca ",l.createElement(a.strong,null,"Kafka Connect enabled")," en ",l.createElement(a.strong,null,"true (")," deje el resto de valores sin modificar)."),"\n",l.createElement(a.a,{href:"/1686155955661.747781276/kafka-connect-enabled.png"},l.createElement(a.img,{src:"/1686155955661.747781276/kafka-connect-enabled.png",alt:""})),"\n",l.createElement(a.p,null,"6.5 Haga clic en ",l.createElement(a.strong,null,"Guardar"),"."),"\n",l.createElement(a.p,null,"6.6 En la navegación de la izquierda seleccione ",l.createElement(a.strong,null,"Operadores Instalados")," y seleccione el operador ",l.createElement(a.strong,null,"Flujos de Eventos"),"."),"\n",l.createElement(a.a,{href:"/1686155955649.747781269/es-operator.png"},l.createElement(a.img,{src:"/1686155955649.747781269/es-operator.png",alt:""})),"\n",l.createElement(a.p,null,"6.7 Haz clic en la pestaña ",l.createElement(a.strong,null,"Todas las instancias")," y espera a que los conectores ",l.createElement(a.em,null,"mq-source")," y ",l.createElement(a.em,null,"mongodb-sink")," estén en estado ",l.createElement(a.em,null,"Listo")," antes de continuar."),"\n",l.createElement(a.a,{href:"/1686155955661.747781277/kc-status.png"},l.createElement(a.img,{src:"/1686155955661.747781277/kc-status.png",alt:""})),"\n",l.createElement(a.p,null,"6.8 Vuelve a la pestaña del navegador con la consola MQ y comprueba que todos los mensajes han sido consumidos por el conector ",l.createElement(a.em,null,"mq-source"),". ",l.createElement(a.em,null,"(Nota: Es posible que tengas que volver a cargar esta pestaña del navegador para ver que se han consumido los mensajes).")),"\n",l.createElement(a.a,{href:"/1686155955669.747781281/mq-empty.png"},l.createElement(a.img,{src:"/1686155955669.747781281/mq-empty.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-7-verificar-que-los-datos-de-las-transacciones-se-han-replicado-en-la-base-de-datos-del-historial-comercial"},l.createElement(a.h2,{id:"paso-7-verificar-que-los-datos-de-las-transacciones-se-han-replicado-en-la-base-de-datos-del-historial-comercial"},l.createElement(a.a,{href:"#paso-7-verificar-que-los-datos-de-las-transacciones-se-han-replicado-en-la-base-de-datos-del-historial-comercial"},"Paso 7: Verificar que los datos de las transacciones se han replicado en la base de datos del Historial Comercial")),"\n",l.createElement(a.p,null,"7.1 Vaya a la consola OpenShift del clúster de su taller. En la navegación de la izquierda, seleccione ",l.createElement(a.strong,null,"Rutas")," en la sección ",l.createElement(a.strong,null,"Redes"),"."),"\n",l.createElement(a.p,null,"7.2 Copie el enlace del microservicio ",l.createElement(a.em,null,"de historial comercial")," y péguelo en una nueva pestaña del navegador."),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," Recibirá un mensaje 404 (No encontrado) si intenta acceder a esta URL tal cual. Esto se debe a que el microservicio ",l.createElement(a.em,null,"de historial")," comercial requiere información adicional sobre la ruta."),"\n"),"\n",l.createElement(a.a,{href:"/1686155955733.747781518/trade-history.png"},l.createElement(a.img,{src:"/1686155955733.747781518/trade-history.png",alt:""})),"\n",l.createElement(a.p,null,"7.3 Añada la cadena ",l.createElement(a.code,null,"/trades/1000")," a la dirección que ha pegado: debería obtener un JSON con las transacciones de prueba que ha ejecutado anteriormente."),"\n",l.createElement(a.a,{href:"/1686155955733.747781519/trade-history2.png"},l.createElement(a.img,{src:"/1686155955733.747781519/trade-history2.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-8-examinar-los-mensajes-enviados-a-su-tema-event-streams"},l.createElement(a.h2,{id:"paso-8-examinar-los-mensajes-enviados-a-su-tema-event-streams"},l.createElement(a.a,{href:"#paso-8-examinar-los-mensajes-enviados-a-su-tema-event-streams"},"Paso 8: Examinar los mensajes enviados a su tema Event Streams")),"\n",l.createElement(a.p,null,"8.1 Vaya a la pestaña del navegador CP4I Platform Navigator"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota"),": Si ha cerrado la pestaña Platform Navigator de su navegador, siga las instrucciones de las ",l.createElement(a.a,{href:"https://ibmcp4i.github.io/cloudpakforintegration-multitenant-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(a.p,null,"8.2 Haga clic en el enlace a la instancia de flujos de eventos"),"\n",l.createElement(a.a,{href:"/1686155955681.747781286/nav-to-es.png"},l.createElement(a.img,{src:"/1686155955681.747781286/nav-to-es.png",alt:""})),"\n",l.createElement(a.p,null,"8.3 Si se le pide que inicie sesión, seleccione el registro de usuarios ",l.createElement(a.strong,null,"Enterprise LDAP")," e inicie sesión con sus credenciales."),"\n",l.createElement(a.p,null,"8.4 Haga clic en el icono de temas"),"\n",l.createElement(a.a,{href:"/1686155955729.747781517/topics-icon.png"},l.createElement(a.img,{src:"/1686155955729.747781517/topics-icon.png",alt:""})),"\n",l.createElement(a.p,null,"8.5 Haga clic en el tema correspondiente a su nombre de usuario."),"\n",l.createElement(a.a,{href:"/1686155955729.747781516/topic-name.png"},l.createElement(a.img,{src:"/1686155955729.747781516/topic-name.png",alt:""})),"\n",l.createElement(a.p,null,"8.6 Seleccione un mensaje para ver sus detalles"),"\n",l.createElement(a.a,{href:"/1686155955669.747781280/message-details.png"},l.createElement(a.img,{src:"/1686155955669.747781280/message-details.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"resumen"},l.createElement(a.h2,{id:"resumen"},l.createElement(a.a,{href:"#resumen"},"Resumen")),"\n",l.createElement(a.p,null,"Enhorabuena. Ha completado con éxito los siguientes pasos clave en este laboratorio:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Configuración de la aplicación Trader Lite para utilizar MQ"),"\n",l.createElement(a.li,null,"Despliegue de Kafka Connect con IBM Event Streams"),"\n",l.createElement(a.li,null,"Generación de transacciones en la aplicación Trader Lite y verificación de la replicación de los datos a través de MQ y Event Streams."),"\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},s=n(4184),o=n.n(s),i=n(4690),m=n(1140),d=n(2565),u=n(8531),p=n(3383),E=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:c}}},children:s}=e,i=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),h=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:c},a[0].title||t||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:o()(E.Y2,!h&&E.ey),ref:i},l.createElement(d.Z,{components:{h1:()=>null}},s)),h&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:g})))},h=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function f(e){return l.createElement(g,e,l.createElement(c,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(1151),r=n(7563);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var s=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...c,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7294),l=n(7500),r=n(4184),c=n.n(r),s=n(6488);const o=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&o(r,a,n+1)})),a};var i=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>o(a[0].items||[])),[a]),r=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return s},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function s({components:e,children:a,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:s},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-cp-4-i-102-es-md-20cc075651cf5bd9fb39.js.map