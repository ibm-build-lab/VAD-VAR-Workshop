"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9160],{352:function(e,a,n){n.r(a),n.d(a,{Head:function(){return g},default:function(){return h}});var t=n(1151),l=n(7294);function o(e){const a=Object.assign({section:"section",h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",ol:"ol",li:"li",ul:"ul",code:"code",img:"img",pre:"pre",blockquote:"blockquote",span:"span",em:"em"},(0,t.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"201-apache-spark-con-watsonxdata"},l.createElement(a.h1,{id:"201-apache-spark-con-watsonxdata"},"201: Apache Spark con watsonx.data"),"\n",l.createElement(a.p,null,"Este laboratorio muestra cómo IBM watsonx.data puede integrarse con Apache Spark como motor de consulta. El entorno de laboratorio utiliza la imagen watsonx.data Developer Edition en un entorno aprovisionado de IBM TechZone. Puede encontrarlo aquí:"),"\n",l.createElement(a.p,null,l.createElement(a.a,{href:"https://techzone.ibm.com/collection/ibm-watsonxdata-developer-base-image/environments"},"https://techzone.ibm.com/collection/ibm-watsonxdata-developer-base-image/environments")),"\n",l.createElement(a.p,null,"Para los ejercicios de este laboratorio, Apache Spark se ejecuta por separado dentro de la imagen (no formaba parte del producto en el momento en que se escribió este laboratorio; este documento se actualizará cuando lo haga). Las ofertas IBM watsonx.data Software as a Service (SaaS) de watsonx.data en IBM Cloud y Amazon Web Services (AWS), requieren que Apache Spark se aprovisione como un servicio independiente",l.createElement(a.a,{href:"https://cloud.ibm.com/catalog/services/analytics-engine"},"(IBM Analytics Engine")," es el servicio Apache Spark en IBM Cloud)."),"\n",l.createElement(a.p,null,"Este laboratorio requiere que tenga un entorno watsonx.data ya instalado y en funcionamiento. Consulte la sección Requisitos previos e introducción para obtener más información."),"\n",l.createElement(a.p,null,"Watsonx.data se está desarrollando y publicando de forma ágil. Además de añadir nuevas funciones, es probable que la interfaz web cambie con el tiempo. Por lo tanto, es posible que las capturas de pantalla utilizadas en este laboratorio no sean siempre exactamente iguales a lo que se ve."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"obtener-ayuda"},l.createElement(a.h2,{id:"obtener-ayuda"},l.createElement(a.a,{href:"#obtener-ayuda"},"Obtener ayuda")),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Ayuda de la guía de laboratorio"),": Si necesita ayuda para interpretar alguno de los pasos de este laboratorio, publique sus preguntas en el canal de Slack #data-ai-demo-feedback (solo para IBMers). Los Business Partners pueden solicitar ayuda en el sitio web de Partner Plus Support."),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Entorno")," TechZone: Si se encuentra con algún problema relacionado con el entorno TechZone que se utiliza en este laboratorio, incluida la imposibilidad de aprovisionar un entorno, consulte la página de ",l.createElement(a.a,{href:"https://techzone.ibm.com/help"},"ayuda de TechZone"),"."),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"watsonx"),".data: La asistencia con el propio producto watsonx.data está disponible en el canal de Slack #watsonxdata-lakehouse-discussion-open-to-all-ibmers (solo IBMers). Además, consulte la documentación de watsonx.data según sea necesario (SaaS, software)."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"primeros-pasos"},l.createElement(a.h2,{id:"primeros-pasos"},l.createElement(a.a,{href:"#primeros-pasos"},"Primeros pasos")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Copie el contenido necesario de los detalles del entorno de IBM TechZone ",l.createElement(a.strong,null,'"Servicios publicados"')," en un documento de texto para poder acceder fácilmente a la información durante el ejercicio de laboratorio. La siguiente información es necesaria para este laboratorio Spark:"),"\n"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"SSH para watsonx ID de usuario")," - ",l.createElement(a.code,null,"ssh -p 00000 watsonx@region.techzone-services.com"),"donde ",l.createElement(a.code,null,"00000")," es el número de puerto y ",l.createElement(a.code,null,"region")," es la región que coincide con la reserva de IBM TechZone valores proporcionados."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Jupyter Notebook Server")," - ",l.createElement(a.code,null,"http://region.techzone-services.com:00000/notebooks/Table_of_Contents.ipynb")," donde ",l.createElement(a.code,null,"00000")," es el número de puerto que coincide con el valor proporcionado por la reserva de IBM TechZone."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/1.jpg",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"iniciar-watsonxdata"},l.createElement(a.h2,{id:"iniciar-watsonxdata"},l.createElement(a.a,{href:"#iniciar-watsonxdata"},"Iniciar watsonx.data")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Abra una ventana de terminal en su ordenador portátil e introduzca el comando SSH watsonx.data proporcionado en la información sobre ",l.createElement(a.strong,null,'"Servicios publicados"')," de su reserva de TechZone."),"\n",l.createElement(a.li,null,"El comando SSH es:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"ssh -p watsonx@region.techzone-services.com\n")),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"El número de puerto y la información de la región deben coincidir con los servicios de reserva de IBM TechZone que se le han proporcionado para que funcione el comando SSH"),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Si se le pregunta si desea proporcionar una huella digital, escriba ",l.createElement(a.strong,null,"sí"),". Esto cerrará la conexión SSH. Introduzca el comando de nuevo y este mensaje no se repetirá."),"\n"),"\n",l.createElement(a.p,null,"Introduzca ",l.createElement(a.strong,null,"watsonx.data")," como contraseña cuando se le solicite. Esta contraseña que escriba será invisible en el terminal."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/2.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Introduce el comando ",l.createElement(a.code,null,"sudo su -")," para cambiar tu usuario actual a root"),"\n",l.createElement(a.li,null,"Como usuario root, cambie el directorio actual a la ruta ",l.createElement(a.code,null,"/root/ibm-lh-dev/bin")),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"sudo su -\n",l.createElement(a.span,{className:"hljs-built_in"},"cd")," /root/ibm-lh-dev/bin\n")),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Después de cambiar al usuario root, verá el prefijo root en cada línea de comandos y el símbolo # precediendo la línea de comandos. Por ejemplo:"),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/3.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Compruebe el estado de watsonx.data para asegurarse de que todo se ha iniciado y se está ejecutando introduciendo el comando ",l.createElement(a.code,null,"./status.sh --all"),"."),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,'Hay dos guiones ("-") delante de la palabra clave "all".'),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"./status.sh --all\n")),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"La salida de la línea de comandos debería ser comparable a la del ejemplo siguiente (si se amplía la ventana del terminal, la salida será más legible). Si todos los servicios aparecen como ",l.createElement(a.em,null,"ejecutándose"),", watsonx.data se ha iniciado correctamente."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/4.jpg",alt:""}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Mantenga abierta la ventana del terminal")," y continúe con la siguiente sección del ejercicio."),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"iniciar-el-índice-de-jupyter-notebook"},l.createElement(a.h2,{id:"iniciar-el-índice-de-jupyter-notebook"},l.createElement(a.a,{href:"#iniciar-el-índice-de-jupyter-notebook"},"Iniciar el índice de Jupyter Notebook")),"\n",l.createElement(a.p,null,"La imagen de IBM TechZone contiene una tabla de contenidos de Jupyter Notebook que facilita el acceso al cuaderno Apache Spark utilizado en este laboratorio."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Abra un navegador web (Google Chrome y Mozilla Firefox han sido probados y funcionan con este laboratorio) y vaya a la ",l.createElement(a.strong,null,"URL de Jupyter Notebook - Servidor")," que registró anteriormente desde la sección ",l.createElement(a.strong,null,"Servicios publicados")," de su reserva de TechZone."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/5.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Desplácese hasta la parte inferior de la ventana del navegador hasta que vea la sección ",l.createElement(a.strong,null,"Configurar una")," contraseña. La ventana de su navegador debería mostrar ahora los campos ",l.createElement(a.strong,null,'"Token"'),' y " ',l.createElement(a.strong,null,"Nuevas contraseñas"),' " junto con un botón para ',l.createElement(a.strong,null,"iniciar sesión y establecer una nueva contraseña"),". Deje la ventana del navegador abierta y continúe con el siguiente paso."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/6.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Vuelva a la ventana de terminal que se le indicó que mantuviera abierta anteriormente. Introduzca el comando ",l.createElement(a.code,null,"jupyter server list")),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"jupyter server list\n")),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Copie el valor del token del primer elemento de la salida del comando"),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"El valor del token es ",l.createElement(a.strong,null,"watsonx.data")),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/7.jpg",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Vuelva a la ventana del navegador que se le indicó que mantuviera abierta y escriba el ",l.createElement(a.strong,null,"mismo")," valor de token en los campos ",l.createElement(a.strong,null,"Token")," y ",l.createElement(a.strong,null,"New")," Password de la ventana del navegador. A continuación, seleccione el botón ",l.createElement(a.strong,null,"Iniciar sesión y establecer nueva")," contraseña."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/8.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Ahora se muestra el índice Jupyter de este laboratorio."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/9.png",alt:""}),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Desplácese hacia abajo hasta la sección del índice ",l.createElement(a.strong,null,'"Acceso a watsonx.data con Python, Pandas y Apache Spark"'),". Haga clic en la flecha azul de la parte inferior derecha de la ficha ",l.createElement(a.strong,null,'"Acceso a watsonx.data con Spark"'),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/10.png",alt:""}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"El Jupyter Notebook para este laboratorio que tiene el código Spark se muestra ahora en la ventana del navegador. La segunda sección, ",l.createElement(a.strong,null,"Watsonx.data Development Systems Updates"),", detalla todos los elementos que se cambiaron para permitir que Apache Spark se ejecute en la imagen watsonx.data Development Lab. Dado que esta es la imagen que se está utilizando para este ejercicio de laboratorio, estos cambios ya están en efecto, y no hay nada que tengas que hacer para ejecutar Spark en este cuaderno."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/11.jpg",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"uso-de-apache-spark-en-un-cuaderno-jupyter-con-watsonxdata"},l.createElement(a.h2,{id:"uso-de-apache-spark-en-un-cuaderno-jupyter-con-watsonxdata"},l.createElement(a.a,{href:"#uso-de-apache-spark-en-un-cuaderno-jupyter-con-watsonxdata"},"Uso de Apache Spark en un cuaderno Jupyter con watsonx.data")),"\n",l.createElement(a.p,null,"En esta sección, los flujos de trabajo y comandos de Apache Spark se ejecutarán dentro de un Jupyter Notebook con watsonx.data como lakehouse."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Desplácese hacia abajo hasta la sección ",l.createElement(a.strong,null,"Copiar bibliotecas Spark"),". Observa cómo las celdas ejecutables (código) de los cuadernos Jupyter se resaltan con un rectángulo gris."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/12.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Una celda de Jupyter Notebook puede ejecutarse utilizando dos métodos:"),"\n"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Ejecutar celdas individuales haciendo clic en el ",l.createElement(a.strong,null,"icono Ejecutar")," (parece un botón de reproducción) de la barra de menús situada en la parte superior del cuaderno."),"\n",l.createElement(a.li,null,"Ejecutar todo el cuaderno pulsando el icono ",l.createElement(a.strong,null,"Avance rápido")),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Como alternativa al icono de menú, también se puede ejecutar una sola celda utilizando la macro de las teclas ",l.createElement(a.strong,null,"Mayús + Intro")," mientras la celda está seleccionada."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/13.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Seleccione la primera celda de código. Observe que la posición actual de la celda se resalta con una barra azul sólida a la izquierda de la celda."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/14.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Ejecuta esta primera celda de código"),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/15.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Después de ejecutar una celda de código, debería notar dos diferencias en la celda de código del cuaderno:"),"\n"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"El ",l.createElement(a.strong,null,"[]")," a la izquierda de la celda cambiará a ",l.createElement(a.strong,null,"[*]")," durante su ejecución."),"\n",l.createElement(a.li,null,"Cuando finaliza la ejecución, la celda cambia a ",l.createElement(a.strong,null,"[n]"),", donde el número (n) equivale al orden en que se ejecutaron las celdas"),"\n",l.createElement(a.li,null,"La salida se muestra directamente debajo de la celda de código (si se produce un error o una advertencia, también se mostrarán debajo de la celda)."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/16.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Ejecute todas las celdas de código restantes en orden dentro del cuaderno Jupyter, esperando a que se complete cada celda antes de ejecutar la siguiente celda de código."),"\n"),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con las tareas que se pueden realizar con Spark Engine."}),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"La mejor práctica es esperar hasta que el ",l.createElement(a.strong,null,"[*]")," de las celdas de código que se están ejecutando cambie a un número que indique que el procesamiento de la celda ha finalizado. Esto se debe a que algunas celdas dependen de la salida de celdas anteriores. Por ejemplo, si se necesita una librería Python para una función, hasta que la librería no esté cargada, intentar llamar a la función fallará."),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Ejecutar celdas de marcado (texto o documentación) dentro de un cuaderno está bien, pero no habrá salida ni tiempo de ejecución asignado a este tipo de celdas."),"\n"),"\n",l.createElement(a.p,null,"Para tener una idea de lo que estas celdas están haciendo al crear las diferentes tablas a través de SQL aquí hay una captura de pantalla del ",l.createElement(a.strong,null,"gestor de datos")," dentro de la consola web watsonx.data después de ejecutar las celdas:"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/16-1.png",alt:""}),"\n",l.createElement(a.p,null,"Este Jupyter Notebook creó buckets, tablas, cargó datos y realizó consultas usando Spark. El producto final de la ejecución del notebook limpia el entorno, se limpiará todo el trabajo realizado y se borrará el bucket de almacenamiento."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/201/17.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"resumen"},l.createElement(a.h2,{id:"resumen"},l.createElement(a.a,{href:"#resumen"},"Resumen")),"\n",l.createElement(a.p,null,"Ya has completado el laboratorio."),"\n",l.createElement(a.p,null,"En este laboratorio, se utilizó Apache Spark para crear un bucket de almacenamiento, crear tablas, cargar datos y realizar consultas contra esas tablas utilizando Spark SQL. Por último, después del ejercicio de laboratorio se limpió el entorno watsonx.data borrando los datos y eliminando el bucket de almacenamiento.")))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(o,e)):o(e)};var c=n(4184),s=n.n(c),i=n(4690),d=n(1140),u=n(8623),m=n(8531),p=n(3383),b=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:o,updated:r}}},children:c}=e,i=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),g=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:o,updated:r},a[0].title||t||""),l.createElement(m.Z,{className:b.YS},l.createElement("article",{className:s()(b.Y2,!g&&b.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},c)),g&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(E,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-level-4-201-es-md-4a987d9b55888efda177.js.map