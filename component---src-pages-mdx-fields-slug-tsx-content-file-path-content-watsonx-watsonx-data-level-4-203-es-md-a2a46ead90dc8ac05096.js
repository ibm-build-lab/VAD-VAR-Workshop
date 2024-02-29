"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9810],{1616:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return h}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",h3:"h3",strong:"strong",ol:"ol",li:"li",img:"img",code:"code",blockquote:"blockquote",ul:"ul",pre:"pre",span:"span"},(0,t.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(n,{text:"¡Aviso! ¡El material del cuestionario se marcará así!"}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"203-modernización-del-almacén-de-datos-netezza"},l.createElement(a.h1,{id:"203-modernización-del-almacén-de-datos-netezza"},"203: Modernización del almacén de datos Netezza"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},l.createElement(a.h2,{id:"objetivo"},l.createElement(a.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(a.p,null,"El objetivo de este laboratorio es mostrar cómo se puede utilizar IBM watsonx.data para la modernización del almacén de datos para una instancia de Netezza Performance Server as a Service (NPSaaS) que se ejecuta en Microsoft Azure para mover una carga de trabajo a watsonx.data."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"requisitos-previos"},l.createElement(a.h2,{id:"requisitos-previos"},l.createElement(a.a,{href:"#requisitos-previos"},"Requisitos previos")),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"watsonxdata-medio-ambiente"},l.createElement(a.h3,{id:"watsonxdata-medio-ambiente"},l.createElement(a.a,{href:"#watsonxdata-medio-ambiente"},"watsonx.data Medio ambiente")),"\n",l.createElement(a.p,null,"Este laboratorio requiere que ya disponga de un entorno IBM watsonx.data aprovisionado. Esto se hace en el ",l.createElement(a.strong,null,l.createElement(a.a,{href:"/watsonx/watsonxdata/1"},"Módulo 1: Configuración del entorno")),"."),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configuración-de-un-conector-de-almacén-de-datos-para-presto"},l.createElement(a.h2,{id:"configuración-de-un-conector-de-almacén-de-datos-para-presto"},l.createElement(a.a,{href:"#configuración-de-un-conector-de-almacén-de-datos-para-presto"},"Configuración de un conector de almacén de datos para Presto")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Abra la consola (interfaz de usuario) de su ",l.createElement(a.strong,null,"entorno watsonx.data")," en una nueva ventana del navegador."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/watsonx-ui.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"En la interfaz de usuario de watsonx.data, seleccione el icono ",l.createElement(a.strong,null,"Gestor de datos")," en el menú de la izquierda."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/data-manager-icon.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Haga clic en el menú desplegable ",l.createElement(a.strong,null,"Crear")," y seleccione ",l.createElement(a.strong,null,"Crear esquema"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/create-schema.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"En la ventana emergente ",l.createElement(a.strong,null,"Crear esquema"),", seleccione ",l.createElement(a.strong,null,"iceberg_data")," para el ",l.createElement(a.strong,null,"Catálogo")," e introduzca ",l.createElement(a.code,null,"flight_delay")," para el ",l.createElement(a.strong,null,"Nombre"),". El campo ",l.createElement(a.strong,null,"Ruta")," se establece automáticamente basándose en el nombre del esquema, pero puede anularse si es necesario. Sin embargo, ",l.createElement(a.strong,null,"no")," lo ",l.createElement(a.strong,null,"cambie")," aquí. Ahora haga clic en el botón ",l.createElement(a.strong,null,"Crear"),". El esquema ",l.createElement(a.strong,null,"flight_delay")," está ahora creado bajo el cubo ",l.createElement(a.strong,null,"iceberg_data"),"."),"\n",l.createElement(a.li,null,"En la interfaz de usuario de watsonx.data, seleccione el icono ",l.createElement(a.strong,null,"Administrador de infraestructuras")," en el menú de la izquierda."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/infrastructure-manager-icon.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Haga clic en el menú desplegable ",l.createElement(a.strong,null,"Añadir componente")," de la derecha y seleccione ",l.createElement(a.strong,null,"Añadir base de datos"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/im-add-database.png",alt:""}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"En la ventana emergente ",l.createElement(a.strong,null,"Añadir base de datos"),", introduzca/seleccione la siguiente información para añadir la ",l.createElement(a.strong,null,"base de datos Netezza Performance Server as a Service (NPSaaS) en Microsoft Azure")," y, a continuación, haga clic en ",l.createElement(a.strong,null,"Registrar"),":"),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," El anfitrión del laboratorio le proporcionará las credenciales de la base de datos Netezza Performance Server as a Service (NPSaaS) en Microsoft Azure."),"\n"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Tipo de base de datos:")," IBM Netezza"),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre de la base de datos:")," ",l.createElement(a.code,null,"NZ_FLIGHTS")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre para mostrar:")," ",l.createElement(a.code,null,"NZ_FLIGHTS")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre de host:")," ",l.createElement(a.strong,null,"Obtenido del host del laboratorio")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Puerto:")," ",l.createElement(a.strong,null,"Obtener de host de laboratorio")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre de usuario:")," ",l.createElement(a.strong,null,"Get from lab host")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Contraseña:")," ",l.createElement(a.strong,null,"Obtenida del host del laboratorio")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Estado de la conexión:")," Haga clic en ",l.createElement(a.strong,null,"Probar conexión"),". Si la prueba de conexión se realiza correctamente, el estado de la ",l.createElement(a.strong,null,"conexión")," mostrará ",l.createElement(a.strong,null,"Exitoso"),". ",l.createElement(a.strong,null,"Nota:")," Si la prueba no se ha realizado correctamente, recibirá un mensaje de error como el que se muestra a continuación con el motivo del fallo. Vuelva a introducir todos los campos y haga clic en ",l.createElement(a.strong,null,"Volver a probar")," para probar de nuevo la conexión. Las razones más comunes para que se produzca un error aquí son que ha escrito algo incorrectamente."),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Conexión SSL:")," Activa el interruptor de conexión ",l.createElement(a.strong,null,"SSL")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre de catálogo:")," ",l.createElement(a.code,null,"netezza")),"\n"),"\n",l.createElement(a.p,null,"La base de datos Netezza se ha añadido a watsonx.data, pero no hay conexión entre el catálogo Netezza y el motor Presto (presto-01). Será necesario vincular ambos para utilizar el motor Presto para consultar la base de datos Netezza."),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con la adición de la conexión a Netezza."}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"En la sección ",l.createElement(a.strong,null,"Catálogos"),", pase el puntero del ratón sobre el mosaico ",l.createElement(a.strong,null,"netezza")," y aparecerá el icono ",l.createElement(a.strong,null,"Gestionar asociaciones"),". Haga clic en él."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/catalog-manage-associations.png",alt:""}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"En la ventana emergente ",l.createElement(a.strong,null,"Gestionar asociaciones"),", seleccione la casilla de verificación del motor ",l.createElement(a.strong,null,"presto-01")," y, a continuación, haga clic en ",l.createElement(a.strong,null,"Guardar y reiniciar motor"),". Una línea debería conectar ahora el mosaico ",l.createElement(a.strong,null,"presto-01")," de la sección ",l.createElement(a.strong,null,"Motores")," con el mosaico ",l.createElement(a.strong,null,"netezza")," de la sección ",l.createElement(a.strong,null,"Catálogos"),". Esta conexión indica que los recursos están ahora asociados."),"\n"),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con el acceso a su base de datos mediante el motor de consultas de Presto."}),"\n",l.createElement(a.ol,{start:"10"},"\n",l.createElement(a.li,null,"En la interfaz de usuario de watsonx.data, seleccione el icono ",l.createElement(a.strong,null,"Gestor de datos")," en el menú de la izquierda."),"\n",l.createElement(a.li,null,"Seleccione el catálogo ",l.createElement(a.strong,null,"netezza")," y expándalo. La tabla ",l.createElement(a.strong,null,"AIRLINE_DELAY_CAUSE")," debería aparecer en el esquema ",l.createElement(a.strong,null,"ADMIN"),", lo que indica que la conexión a la base de datos está operativa y funciona correctamente."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/airline_delay_cause.png",alt:""}),"\n",l.createElement(a.p,null,"Aunque en esta sección se ha utilizado un conector de base de datos IBM Netezza, el proceso es idéntico para configurar el conector Presto para cualquier almacén de datos compatible. Se requerirá información comparable para cualquier almacén de datos que se añada (nombre de host de la base de datos, nombre de la base de datos, nombre de usuario y contraseña que tiene privilegios en la base de datos, el número de puerto de la base de datos, y si la conexión es Secure Sockets Layer (SSL) o no)."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"creación-de-tablas-y-carga-de-datos-en-watsonxdata"},l.createElement(a.h2,{id:"creación-de-tablas-y-carga-de-datos-en-watsonxdata"},l.createElement(a.a,{href:"#creación-de-tablas-y-carga-de-datos-en-watsonxdata"},"Creación de tablas y carga de datos en watsonx.data")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"En la ventana ",l.createElement(a.strong,null,"Gestor de datos"),", seleccione la tabla ",l.createElement(a.strong,null,"AIRLINE_DELAY_CAUSE")," en el esquema ",l.createElement(a.strong,null,"ADMIN")," y consulte la pestaña ",l.createElement(a.strong,null,"Esquema de tabla")," para ver la estructura de la tabla (nombres de columna, tipos de datos y si la columna es anulable)."),"\n",l.createElement(a.li,null,"Desplácese a la pestaña ",l.createElement(a.strong,null,"Muestra de datos")," y examine el contenido de la tabla."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/data-sample-tab.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Para hacerse una idea del volumen de datos de la tabla ",l.createElement(a.strong,null,"AIRLINE_DELAY_CAUSE"),", en la interfaz de usuario watsonx.data, seleccione el icono del ",l.createElement(a.strong,null,"área de trabajo de consulta")," en el menú de la izquierda."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/query-workspace-icon.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Despeje el editor SQL y pase el ratón por encima del símbolo ",l.createElement(a.strong,null,"</>")," situado a la derecha del nombre de la tabla ",l.createElement(a.strong,null,"AIRLINE_DELAY_CAUSE")," y elija la opción ",l.createElement(a.strong,null,"Generar SELECT"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/generate-select.png",alt:""}),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con la generación de plantillas de consulta en el espacio de trabajo de consultas."}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Edite la sentencia SQL generada para que se parezca a la sentencia SQL de abajo. A continuación, haga clic en el botón ",l.createElement(a.strong,null,"Ejecutar en presto-01")," de la derecha."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-sql"},l.createElement(a.span,{className:"hljs-keyword"},"SELECT"),"\n  ",l.createElement(a.span,{className:"hljs-built_in"},"COUNT"),"(",l.createElement(a.span,{className:"hljs-operator"},"*"),")\n",l.createElement(a.span,{className:"hljs-keyword"},"FROM"),'\n  "netezza"."ADMIN"."AIRLINE_DELAY_CAUSE";\n')),"\n",l.createElement(a.p,null,"El conjunto de resultados de la parte inferior de la ventana ",l.createElement(a.strong,null,"Espacio de trabajo de consulta")," indica que la tabla ",l.createElement(a.strong,null,"AIRLINE_DELAY_CAUSE")," de Netezza contiene ",l.createElement(a.strong,null,"336.028")," filas."),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Construir la sentencia CREATE TABLE AS SELECT (CTAS) es un proceso de dos pasos. Despeje el editor SQL y pase el cursor sobre el símbolo ",l.createElement(a.strong,null,"</>")," a la derecha del esquema ",l.createElement(a.strong,null,"flight_delay")," bajo la entrada ",l.createElement(a.strong,null,"iceberg_data")," y elija la opción ",l.createElement(a.strong,null,"Generar ruta"),". En la subventana SQL, añada ",l.createElement(a.code,null,"CREATE TABLE")," antes de la cadena de ruta y añada ",l.createElement(a.code,null,'."flight_delay_cause" AS')," a la derecha de la información de la ruta. Asegúrese de que el cursor está al final de la sentencia al concluir el proceso de edición (después del AS). Su sentencia SQL debe parecerse a la siguiente sentencia SQL."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-sql"},l.createElement(a.span,{className:"hljs-keyword"},"CREATE")," ",l.createElement(a.span,{className:"hljs-keyword"},"TABLE"),' "iceberg_data"."flight_delay"."flight_delay_cause" ',l.createElement(a.span,{className:"hljs-keyword"},"AS")," \n")),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"Continuando con el segundo paso de la sentencia CTAS, pase el puntero del ratón sobre la entrada de la tabla Netezza ",l.createElement(a.strong,null,"AIRLINE_DELAY_CAUSE")," y seleccione el símbolo ",l.createElement(a.strong,null,"</>")," situado a la derecha del nombre de la tabla y elija la opción ",l.createElement(a.strong,null,"Generar SELECT"),". La instrucción ",l.createElement(a.strong,null,"SELECT")," para la tabla Netezza ",l.createElement(a.strong,null,"AIRLINE_DELAY_CAUSE")," debe aparecer después de la parte ",l.createElement(a.strong,null,"CREATE TABLE...AS")," de la instrucción. Edite la instrucción ",l.createElement(a.strong,null,"SELECT")," generada para eliminar la parte ",l.createElement(a.strong,null,"LIMIT 10")," (no elimine el punto y coma ; delimitador). Su sentencia SQL debería parecerse a la que se muestra a continuación. A continuación, haga clic en el botón ",l.createElement(a.strong,null,"Ejecutar en presto-01")," de la derecha."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-sql"},l.createElement(a.span,{className:"hljs-keyword"},"CREATE")," ",l.createElement(a.span,{className:"hljs-keyword"},"TABLE"),' "iceberg_data"."flight_delay"."flight_delay_cause" ',l.createElement(a.span,{className:"hljs-keyword"},"AS")," ",l.createElement(a.span,{className:"hljs-keyword"},"SELECT"),"\n  ",l.createElement(a.span,{className:"hljs-operator"},"*"),"\n",l.createElement(a.span,{className:"hljs-keyword"},"FROM"),'\n  "netezza"."ADMIN"."AIRLINE_DELAY_CAUSE"\n;\n')),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con el conjunto de resultados de esta declaración SELECT"}),"\n",l.createElement(a.p,null,"Una vez que la sentencia se haya ejecutado correctamente, debería haber una nueva tabla ",l.createElement(a.strong,null,"flight_delay_cause")," bajo el esquema ",l.createElement(a.strong,null,"flight_delay")," dentro del catálogo ",l.createElement(a.strong,null,"iceberg_data"),". La sentencia ",l.createElement(a.strong,null,"CREATE TABLE...")," tendrá una marca de verificación verde a la derecha para indicar que la ejecución se ha realizado correctamente y que las filas (recuento) de la nueva tabla son ",l.createElement(a.strong,null,"336.028")," (coincide con el recuento de filas de la tabla Netezza original)."),"\n",l.createElement(a.p,null,"Una vez creada una tabla y cargados los datos, es práctica común realizar una prueba rápida para asegurarse de que los datos de la tabla tienen un aspecto razonable y no hay problemas obvios con la nueva tabla. Una vez cargada la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," como tabla Iceberg en el almacén de datos, el recuento de filas de la nueva tabla coincide con el recuento de filas de la tabla Netezza original. Como otra prueba, vamos a verificar que la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," contiene el rango de fechas esperado (2003 a 2023) de datos. Esta prueba se llevará a cabo utilizando las partes del gestor de datos y del espacio de trabajo de consulta de la interfaz de usuario de watsonx.data."),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con la visualización de las definiciones de columnas de una tabla."}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"En la interfaz de usuario de watsonx.data, seleccione el icono ",l.createElement(a.strong,null,"Gestor de datos")," en el menú de la izquierda."),"\n",l.createElement(a.li,null,"Seleccione la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," en el catálogo ",l.createElement(a.strong,null,"iceberg_data")," y observe las columnas definidas para la tabla. Como queremos verificar que se han cargado los meses y años de datos correctos, los nombres de columna necesarios son ",l.createElement(a.strong,null,"MONTH")," y ",l.createElement(a.strong,null,"YEAR"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/month-year.png",alt:""}),"\n",l.createElement(a.ol,{start:"10"},"\n",l.createElement(a.li,null,"En la interfaz de usuario de watsonx.data, seleccione el icono ",l.createElement(a.strong,null,"Espacio de trabajo de consulta")," en el menú de la izquierda."),"\n",l.createElement(a.li,null,"Despeja el editor SQL y pasa el ratón por encima del símbolo ",l.createElement(a.strong,null,"</>")," situado a la derecha de la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," bajo la entrada ",l.createElement(a.strong,null,"iceberg_data")," y elige la opción ",l.createElement(a.strong,null,"Generar SELECT"),"."),"\n",l.createElement(a.li,null,"Edite la sentencia SQL generada para que se parezca a la sentencia SQL de abajo. A continuación, haga clic en el botón ",l.createElement(a.strong,null,"Ejecutar en presto-01")," de la derecha."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-sql"},l.createElement(a.span,{className:"hljs-keyword"},"SELECT"),"\n  ",l.createElement(a.span,{className:"hljs-keyword"},"DISTINCT"),"(",l.createElement(a.span,{className:"hljs-keyword"},"YEAR"),")\n",l.createElement(a.span,{className:"hljs-keyword"},"FROM"),'\n  "iceberg_data"."flight_delay"."flight_delay_cause"\n',l.createElement(a.span,{className:"hljs-keyword"},"ORDER")," ",l.createElement(a.span,{className:"hljs-keyword"},"BY"),"\n  ",l.createElement(a.span,{className:"hljs-number"},"1"),";\n")),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con el nombre de la tabla de consulta SQL."}),"\n",l.createElement(a.ol,{start:"13"},"\n",l.createElement(a.li,null,"Al desplazarse por el conjunto de resultados en la parte inferior de la ventana (utilizando la tecla ",l.createElement(a.strong,null,">")," en la parte inferior derecha) se verifica que la tabla contiene los datos de los años ",l.createElement(a.strong,null,"2003")," a ",l.createElement(a.strong,null,"2023"),". En combinación con la verificación anterior del recuento de filas, la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," se ha trasladado correctamente a una tabla Iceberg."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/result-set.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"privilegios-de-objeto"},l.createElement(a.h2,{id:"privilegios-de-objeto"},l.createElement(a.a,{href:"#privilegios-de-objeto"},"Privilegios de objeto")),"\n",l.createElement(a.p,null,"Una vez creadas las tablas y cargados los datos en el Data Lakehouse, el paso final es asegurarse de que las aplicaciones, individuos o grupos/roles necesarios han recibido el acceso requerido para poder utilizar los nuevos datos dentro del Data Lakehouse. Esta sección describe la concesión de privilegios a la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," que se creó en la parte anterior de este laboratorio."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"En la interfaz de usuario de watsonx.data, seleccione el icono ",l.createElement(a.strong,null,"Control de")," acceso en el menú de la izquierda."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/access-control.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Seleccione la fila ",l.createElement(a.strong,null,"iceberg_data")," para mostrar la ventana Control de acceso (por defecto)."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/ac-iceberg_data.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Por defecto, el rol ",l.createElement(a.strong,null,"Admin")," se asigna al nombre de usuario ",l.createElement(a.strong,null,"ibmlhadmin")," (el login utilizado al iniciar la UI de watsonx.data). Se pueden añadir accesos adicionales seleccionando el botón Añadir ",l.createElement(a.strong,null,"acceso"),". Al seleccionar Añadir acceso se mostrarán todos los nombres de usuario conocidos en watsonx.data lakehouse y se podrá conceder a estos nombres de usuario acceso al catálogo ",l.createElement(a.strong,null,"iceberg_data"),"."),"\n",l.createElement(a.li,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Objetos de datos")," en la parte superior de esta ventana. Esto mostrará la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," (ya que es el único objeto físico bajo ",l.createElement(a.strong,null,"iceberg_data"),"). La información proporcionada en las pestañas es información que forma parte de otros menús dentro de la UI watsonx.data excepto para la pestaña ",l.createElement(a.strong,null,"Time")," Travel. ",l.createElement(a.strong,null,"Time")," Travel permite revertir una tabla a versiones anteriores de la misma para recuperarse de cambios no intencionados en la tabla. Dado que la tabla ",l.createElement(a.strong,null,"flight_delay_cause")," no tiene ninguna otra actividad excepto la carga inicial de datos, no es posible ",l.createElement(a.strong,null,"realizar")," Time Travel. Si hubiera varias entradas de ",l.createElement(a.strong,null,"Time")," Travel, la tabla podría revertirse a versiones anteriores de la tabla."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/data-objects.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Cerrar la ventana ",l.createElement(a.strong,null,"iceberg_data")," Control de acceso (por defecto)."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/ac-iceberg_data-close.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"En la ventana principal de ",l.createElement(a.strong,null,"Control de acceso"),", seleccione la pestaña ",l.createElement(a.strong,null,"Políticas")," en la parte superior. No hay políticas definidas, ya que en esta ventana no se muestran entradas. Seleccione el botón ",l.createElement(a.strong,null,"Añadir política")," para entender una política de watsonx.data y lo que define una política."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/ac-add-policy.png",alt:""}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"El primer panel solicita información básica, como el ",l.createElement(a.strong,null,"nombre de la política")," y una ",l.createElement(a.strong,null,"descripción")," (opcional). Por defecto, la política está ",l.createElement(a.strong,null,"Inactiva")," al crearse, y esta es una buena práctica a mantener (puede activar la política después de crearla y verificar que es correcta). Dé a la política el nombre ",l.createElement(a.code,null,"flightdelaycausepolicy")," y seleccione el botón ",l.createElement(a.strong,null,"Siguiente")," para continuar."),"\n",l.createElement(a.li,null,"En el siguiente panel seleccione ",l.createElement(a.strong,null,"iceberg_data")," para el catálogo, ",l.createElement(a.strong,null,"flight_delay")," para el esquema, ",l.createElement(a.strong,null,"flight_delay_cause")," para la tabla, ",l.createElement(a.strong,null,"all")," para las columnas de la tabla, y seleccione el botón ",l.createElement(a.strong,null,"Siguiente")," para continuar."),"\n"),"\n",l.createElement(n,{text:"Hay una pregunta de prueba relacionada con la visualización de las definiciones de columnas de una tabla."}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"El siguiente panel permite definir reglas seleccionando el botón ",l.createElement(a.strong,null,"Añadir regla"),". El panel no muestra ninguna regla, ya que no hay ninguna definida por defecto. Seleccione el botón Añadir ",l.createElement(a.strong,null,"regla"),". Esto muestra otra ventana para introducir que permiten reglas de acceso específicas como acciones (crear, soltar, alterar, insertar, seleccionar y truncar) y qué grupos o usuarios incluir en la regla. Seleccione ",l.createElement(a.strong,null,"Permitir")," para el ",l.createElement(a.strong,null,"tipo de Regla"),", ",l.createElement(a.strong,null,"seleccionar")," para las ",l.createElement(a.strong,null,"Acciones"),", ",l.createElement(a.strong,null,"Usuarios")," para los ",l.createElement(a.strong,null,"Usuarios/grupos"),", ",l.createElement(a.strong,null,"ibmlhadmin")," para el ",l.createElement(a.strong,null,"usuario Seleccionar"),", y seleccione el botón ",l.createElement(a.strong,null,"Añadir")," para añadir la nueva regla."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/add-rule.png",alt:""}),"\n",l.createElement(a.ol,{start:"10"},"\n",l.createElement(a.li,null,"Dado que esta imagen de watsonx.data Developer no tiene usuarios adicionales (sólo ibmlhadmin) ni grupos definidos, no es necesario continuar con el Control de ",l.createElement(a.strong,null,"acceso"),". Seleccione el botón ",l.createElement(a.strong,null,"Cancelar")," para salir de la ventana ",l.createElement(a.strong,null,"Crear política de")," control de acceso."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/203/ac-cancel-policy.png",alt:""}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"enhorabuena-ha-llegado-al-final-del-laboratorio-203"},l.createElement(a.h3,{id:"enhorabuena-ha-llegado-al-final-del-laboratorio-203"},l.createElement(a.a,{href:"#enhorabuena-ha-llegado-al-final-del-laboratorio-203"},"Enhorabuena, ha llegado al final del laboratorio 203.")),"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.a,{href:"/watsonx/watsonxdata"},"IBM")," watsonx.data para ir a la página de inicio de IBM watsonx.data.")))))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)};var c=n(4184),s=n.n(c),i=n(4690),d=n(1140),m=n(8623),u=n(8531),E=n(3383),g=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:o}}},children:c}=e,i=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:o},a[0].title||t||""),l.createElement(u.Z,{className:g.YS},l.createElement("article",{className:s()(g.Y2,!b&&g.ey),ref:i},l.createElement(m.Z,{components:{h1:()=>null}},c)),b&&l.createElement(E.Z,{itemsList:a,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(p,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-level-4-203-es-md-a2a46ead90dc8ac05096.js.map