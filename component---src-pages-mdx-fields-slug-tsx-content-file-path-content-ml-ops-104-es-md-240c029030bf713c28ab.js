"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1193],{8946:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return h}});var l=n(1151),t=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",img:"img",ol:"ol",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",span:"span",ul:"ul",h3:"h3",blockquote:"blockquote"},(0,l.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),t.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"despliegue-de-modelos-y-funciones"},t.createElement(a.h1,{id:"despliegue-de-modelos-y-funciones"},"Despliegue de modelos y funciones"),"\n",t.createElement(a.p,null,"Un modelo sólo es útil si se utiliza; este modelo tiene que estar disponible de forma fácilmente consumible. Y lo que es más, el proceso de despliegue de modelos también tiene que hacerse de forma ordenada. Por ejemplo, no se puede permitir que cualquiera ponga modelos en producción. Para ello, el entorno de Cloud Pak for Data incluye espacios de despliegue."),"\n",t.createElement(a.p,null,"Cualquiera puede crear su propio espacio de despliegue personal y promover modelos a él. Sin embargo, en una empresa, los administradores designados deben ser los únicos capaces de promover un modelo a un espacio de despliegue de producción."),"\n",t.createElement(a.p,null,"En esta sección del laboratorio, verás lo que se requiere para desplegar modelos. También explorará FactSheets y verá cómo y por qué puede desplegar funciones de Python."),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-creación-de-un-espacio-de-despliegue"},t.createElement(a.h2,{id:"1-creación-de-un-espacio-de-despliegue"},t.createElement(a.a,{href:"#1-creación-de-un-espacio-de-despliegue"},"1. Creación de un espacio de despliegue")),"\n",t.createElement(a.p,null,"Antes de desplegar cualquier modelo, hay que crear un espacio de despliegue:"),"\n",t.createElement(a.img,{src:"/1685747170035.04031108875/85.png",alt:"Hamburger"}),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"En la pantalla de inicio de [IBM Cloud Pak for Data], haga clic en el menú de navegación (cuatro barras horizontales apiladas)."),"\n",t.createElement(a.li,null,"Seleccione ",t.createElement(a.strong,null,"Despliegues"),"."),"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Espacios"),". Si ya tiene privilegios de administrador en un espacio de despliegue, puede utilizar ese espacio y saltar al paso 9. De lo contrario, continúe con estas instrucciones."),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Nuevo espacio de despliegue"),", arriba a la derecha."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170039.04031108876/86.png",alt:"new_space"}),"\n",t.createElement(a.ol,{start:"5"},"\n",t.createElement(a.li,null,'Asigne a este nuevo espacio de despliegue un nombre como "espacio de despliegue de laboratorio".'),"\n",t.createElement(a.li,null,"Asegúrese de que está seleccionado el servicio de almacenamiento que creó para este laboratorio."),"\n",t.createElement(a.li,null,"Seleccione en el menú desplegable el servicio de aprendizaje automático que ha creado para este laboratorio."),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Crear")," de la parte inferior derecha."),"\n",t.createElement(a.li,null,"Haga clic en ",t.createElement(a.strong,null,"Cerrar"),"."),"\n"),"\n",t.createElement(a.p,null,"Ahora puede ver su espacio de despliegue recién creado en la pestaña ",t.createElement(a.strong,null,"Espacios"),". Si hace clic en el nombre del espacio de despliegue, verá varias pestañas: ",t.createElement(a.strong,null,"Visión general"),", ",t.createElement(a.strong,null,"Activos"),", ",t.createElement(a.strong,null,"Despliegues"),", ",t.createElement(a.strong,null,"Trabajos")," y ",t.createElement(a.strong,null,"Gestionar"),". Visitará algunas de estas pestañas más adelante en este laboratorio."),"\n",t.createElement(a.p,null,"Tenga en cuenta que en la sección ",t.createElement(a.strong,null,"Gestionar")," de un espacio de despliegue, puede añadir colaboradores igual que lo haría para un proyecto."),"\n",t.createElement(a.ol,{start:"10"},"\n",t.createElement(a.li,null,"Vuelva a su ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/projects/?context=cpdaas"},"lista de proyectos")," y haga clic en el nombre de su proyecto."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-implantar-un-modelo-en-línea"},t.createElement(a.h2,{id:"2-implantar-un-modelo-en-línea"},t.createElement(a.a,{href:"#2-implantar-un-modelo-en-línea"},"2. Implantar un modelo en línea")),"\n",t.createElement(a.p,null,"En la sección del laboratorio ",t.createElement(a.a,{href:"/mlops/102"},"Aumentar las herramientas de código")," abierto, has creado algunos modelos. Es hora de desplegar uno de ellos. Desplegarás el modelo creado utilizando un entorno Spark."),"\n",t.createElement(a.img,{src:"/1685747170039.04031108877/87.png",alt:"Deploy_promote2space"}),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Activos")," de su proyecto."),"\n",t.createElement(a.li,null,"Haga clic en los tres puntos verticales al final de la línea para el modelo de ",t.createElement(a.strong,null,"desafío de desgaste - chispa"),"."),"\n",t.createElement(a.li,null,"Seleccione ",t.createElement(a.strong,null,"Promover al espacio"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170043.04031108878/88.png",alt:"promote_to_space"}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"Utilice el menú desplegable ",t.createElement(a.strong,null,"Espacio de destino")," para seleccionar el espacio que creó en el paso anterior."),"\n",t.createElement(a.li,null,"Seleccione la casilla de verificación ",t.createElement(a.strong,null,"Ir al modelo en el espacio")," después de promoverlo."),"\n",t.createElement(a.li,null,"Haz clic en el botón azul ",t.createElement(a.strong,null,"Promover")," de la parte inferior derecha."),"\n"),"\n",t.createElement(a.p,null,"Con el paso 5, evitas tener que navegar a ",t.createElement(a.strong,null,"Despliegues"),", luego seleccionar el espacio y después hacer clic en tu modelo. De esta manera, se le llevará allí automáticamente, y estará listo para desplegar el modelo."),"\n",t.createElement(a.ol,{start:"7"},"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Nuevo despliegue")," de la derecha."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170047.04051108879/89.png",alt:"create_deployment"}),"\n",t.createElement(a.ol,{start:"8"},"\n",t.createElement(a.li,null,"Seleccione Mosaico ",t.createElement(a.strong,null,"en línea")," como tipo de despliegue."),"\n",t.createElement(a.li,null,"Asigne un nombre al despliegue, por ejemplo, ",t.createElement(a.strong,null,"Desafío de desgaste - Despliegue de chispa"),"."),"\n",t.createElement(a.li,null,"Haga clic en el botón ",t.createElement(a.strong,null,"Crear")," de la parte inferior derecha."),"\n"),"\n",t.createElement(a.p,null,"Se tarda unos segundos en crear el servicio y, a continuación, se completa el despliegue del modelo. En el siguiente paso, explorarás cómo puedes llamar a tu despliegue recién creado desde un punto final de la API REST o probar tu modelo utilizando la interfaz de usuario (UI) integrada de Watson Studio Cloud."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-probar-un-modelo-a-través-de-la-interfaz-de-usuario-ui"},t.createElement(a.h2,{id:"3-probar-un-modelo-a-través-de-la-interfaz-de-usuario-ui"},t.createElement(a.a,{href:"#3-probar-un-modelo-a-través-de-la-interfaz-de-usuario-ui"},"3. Probar un modelo a través de la interfaz de usuario (UI)")),"\n",t.createElement(n),"\n",t.createElement(a.p,null,"Desde donde lo dejó en el paso anterior, haga clic en el nombre de la implantación."),"\n",t.createElement(a.p,null,"Lo primero que verás es la pestaña de ",t.createElement(a.strong,null,"referencia API"),". Esta pestaña proporciona toda la información que necesitas para utilizar tu modelo. En primer lugar, le da el punto final de la API, que se verá como:"),"\n",t.createElement(a.div,{"data-rehype-pretty-code-fragment":""},t.createElement(a.pre,{"data-language":"txt","data-theme":"default"},t.createElement(a.code,{"data-language":"txt","data-theme":"default"},t.createElement(a.span,{className:"line"},t.createElement(a.span,{style:{color:"#8d8d8d"}},"us-south.ml.cloud.ibm.com/ml/v4/deployments/e4d5734c-2f6e-4715-889d-08f26c357332/predictions?version=2022-08-03")),"\n",t.createElement(a.span,{className:"line"},t.createElement(a.span,{style:{color:"#8d8d8d"}}))))),"\n",t.createElement(a.p,null,"A continuación, proporciona fragmentos de código para varios lenguajes que le ayudarán a empezar a utilizar su modelo con diversos tipos de código de aplicación. Para completar el fragmento de código, debe proporcionar una ",t.createElement(a.strong,null,"clave API")," de la sección ",t.createElement(a.a,{href:"#augmenting-open-source-tools"},"Aumentar las herramientas de código abierto")," que autorizará el acceso al modelo. También debe proporcionar los datos que se puntuarán. Estos datos representan un registro similar a los datos de entrenamiento. Se proporcionan en formato JSON."),"\n",t.createElement(a.p,null,"También puedes probar tu modelo a través de la interfaz de usuario de Watson Studio Cloud seleccionando la pestaña Prueba. Dispones de múltiples métodos para introducir los registros que quieres puntuar:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Escriba los registros en la tabla proporcionada."),"\n",t.createElement(a.li,null,"Importe un archivo que siga la plantilla CSV."),"\n",t.createElement(a.li,null,"Pegue el contenido JSON en el espacio proporcionado."),"\n",t.createElement(a.li,null,"Importar un archivo JSON."),"\n"),"\n",t.createElement(a.p,null,"El modelo ",t.createElement(a.strong,null,"attrition challenger - spark")," no contiene todos los metadatos necesarios para soportar archivos CSV. En este laboratorio, utilizará un archivo JSON que contiene registros para puntuar."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Haz clic con el botón derecho en ",t.createElement(a.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Outcomes-Projects/main/TrustedAI-L3-Tech-Lab/records_to_score.json"},"records_to_score.json"),' y utiliza la opción "Descargar archivo enlazado como..." o "Guardar como...", según el navegador que utilices, y guarda el archivo en tu máquina local. Si el archivo guardado tiene extensión "txt", cámbiela por "json".'),"\n"),"\n",t.createElement(a.p,null,"Si la opción de clic con el botón derecho no está disponible, basta con hacer clic en el enlace. El contenido del archivo se mostrará en una nueva pestaña. Guarde su contenido en un archivo de su equipo local."),"\n",t.createElement(a.img,{src:"/1685747170047.04051108881/90.png",alt:"TestOnlineDeploy"}),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Prueba"),"."),"\n",t.createElement(a.li,null,"Suelte el archivo ",t.createElement(a.strong,null,"records_to_score.json")," en la sección de entrada de pantalla, sobre el texto JSON de ejemplo donde se puede ver: ",t.createElement(a.strong,null,'"input_data":[]')),"\n",t.createElement(a.li,null,"Haz clic en el botón azul ",t.createElement(a.strong,null,"Predecir")," de la parte inferior derecha."),"\n",t.createElement(a.li,null,"Seleccione la ",t.createElement(a.strong,null,"vista JSON"),"."),"\n",t.createElement(a.li,null,"Desplácese hasta la parte inferior de la sección de campos. Verá cuatro campos adicionales: ",t.createElement(a.strong,null,"features"),", ",t.createElement(a.strong,null,"rawPrediction"),", ",t.createElement(a.strong,null,"probability"),", ",t.createElement(a.strong,null,"prediction"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170047.04051108882/91.png",alt:"DeployTestResult"}),"\n",t.createElement(a.ol,{start:"7"},"\n",t.createElement(a.li,null,"Desplácese hasta el final del primer registro para ver los nuevos campos."),"\n"),"\n",t.createElement(a.p,null,"La sección de ",t.createElement(a.strong,null,"valores")," necesita algunas explicaciones. Obtiene todos los valores de entrada pasados al modelo y cuatro campos adicionales como sigue (puede ver estos nombres en la sección de campos al principio de los resultados de la predicción):"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.strong,null,"características"),": Una matriz de valores del registro de entrada"),"\n",t.createElement(a.li,null,t.createElement(a.strong,null,"rawPrediction"),": Valores brutos de predicción para cada posibilidad. Por ejemplo, +1,18 para ninguna deserción y -0,73 para deserción."),"\n",t.createElement(a.li,null,t.createElement(a.strong,null,"probabilidad"),": probabilidad de que se produzca cada suceso, o una medida de la confianza que tiene el modelo en su predicción. Cuanto más se acerque el valor a 1, más confianza tendrá el modelo. Ejemplo: 0,914 y 0,086"),"\n",t.createElement(a.li,null,t.createElement(a.strong,null,"predicción"),": Resultado de la predicción. Por ejemplo: 1 si el modelo predice que el empleado dejará la empresa, o 0 si el modelo predice que el empleado se quedará."),"\n"),"\n",t.createElement(a.p,null,"Con estos campos adicionales no sólo se sabe lo que predijo el modelo, sino también su nivel de confianza. Una aplicación podría aprovechar esta ventaja para lanzar una alerta cuando el nivel de confianza esté por debajo de un determinado umbral."),"\n",t.createElement(a.p,null,"En las pruebas, si el nivel de confianza es siempre del 100%, lo más probable es que indique un problema con el modelo; por ejemplo, podría sugerir que el modelo es demasiado específico para los datos de entrenamiento y que se está probando con los datos que se utilizaron para el entrenamiento."),"\n",t.createElement(a.p,null,"El resultado de un modelo varía en función de la herramienta o biblioteca que se utilice. Aun así, tener el resultado en formato JSON permite cierta flexibilidad a la hora de procesar estos resultados si se utilizan varios modelos creados con diferentes herramientas y bibliotecas."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"4-utilizar-una-implantación-por-lotes"},t.createElement(a.h2,{id:"4-utilizar-una-implantación-por-lotes"},t.createElement(a.a,{href:"#4-utilizar-una-implantación-por-lotes"},"4. Utilizar una implantación por lotes")),"\n",t.createElement(a.p,null,"Hay otra forma de desplegar modelos: el despliegue por lotes."),"\n",t.createElement(a.p,null,"Un despliegue por ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/deploy-batch-details.html?context=cpdaas&audience=wdp"},"lotes")," procesa datos de entrada de un archivo, una conexión de datos o datos conectados en un bucket de almacenamiento, y escribe la salida en un destino seleccionado. El procesamiento por lotes se realiza a través de un trabajo desplegado que puede programarse para una ejecución única o como un trabajo recurrente."),"\n",t.createElement(a.p,null,"Los trabajos por lotes son ideales para procesar grandes conjuntos de datos sin requisitos de tiempo real: los resultados pueden analizarse a medida que están disponibles. Programar trabajos por intervalos también podría ser útil en situaciones en las que los registros añadidos en el transcurso de un día pueden procesarse por la noche y los resultados pueden revisarse al comienzo del día siguiente."),"\n",t.createElement(a.p,null,"Hay que tener en cuenta dos datos importantes cuando se trabaja con modelos por lotes:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"El activo de datos de entrada debe estar en el mismo espacio de despliegue que el modelo desplegado."),"\n",t.createElement(a.li,null,"El tipo de activo de datos disponible varía según el ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/deploy-batch-input-by-framework.html?context=cpdaas&audience=wdp"},"tipo de marco del modelo"),"."),"\n"),"\n",t.createElement(a.p,null,"En el siguiente ejercicio, volverás a desplegar el modelo attrition challenger - spark, esta vez en modo batch. Los modelos Spark sólo aceptan datos en línea. La salida se genera como un registro, como verás más adelante."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Haga clic en el icono de hamburguesa de la parte superior izquierda para abrir el ",t.createElement(a.strong,null,"menú de navegación")," y, a continuación, seleccione ",t.createElement(a.strong,null,"Despliegues"),"."),"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Espacios")," y, a continuación, haga clic en el nombre vinculado del espacio de despliegue que creó al principio de esta sección."),"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Activos"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170047.04051108883/92.png",alt:"Deploy_batch"}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"Pasa el ratón por encima del modelo Desafío ",t.createElement(a.strong,null,"de desgaste - chispa")," y haz clic en el icono ",t.createElement(a.strong,null,"Desplegar")," (cohete) que aparece."),"\n",t.createElement(a.li,null,"Haga clic en el mosaico Despliegue ",t.createElement(a.strong,null,"por lotes"),"."),"\n",t.createElement(a.li,null,"Déle un nombre, por ejemplo, ",t.createElement(a.strong,null,"desafío de desgaste -")," lote de ",t.createElement(a.strong,null,"chispas")," y, opcionalmente, introduzca una descripción."),"\n",t.createElement(a.li,null,'Desplácese hacia abajo y anote las especificaciones de hardware disponibles. Mantenga el valor predeterminado de "1 CPU y 4 GB de RAM".'),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Crear")," de la parte inferior derecha."),"\n"),"\n",t.createElement(a.p,null,"Esto le llevará al despliegue, donde podrá crear un trabajo para probar el modelo por lotes desplegado."),"\n",t.createElement(a.img,{src:"/1685747170047.04051108884/93.png",alt:"new_job"}),"\n",t.createElement(a.ol,{start:"9"},"\n",t.createElement(a.li,null,"Haga clic en el botón ",t.createElement(a.strong,null,"Nuevo trabajo")," de la derecha."),"\n",t.createElement(a.li,null,'Dale un nombre al trabajo, por ejemplo "Primer trabajo por lotes", y haz clic en el botón azul ',t.createElement(a.strong,null,"Siguiente")," de la parte inferior derecha."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170051.04051108885/94.png",alt:"job_retention"}),"\n",t.createElement(a.ol,{start:"11"},"\n",t.createElement(a.li,null,"Haga clic en la ",t.createElement(a.strong,null,'"i"')," situada junto a ",t.createElement(a.strong,null,"Ajustes de retención de ejecución de trabajos")," para hacerse una idea de lo que hace. Haga clic en el botón ",t.createElement(a.strong,null,"Siguiente"),"."),"\n",t.createElement(a.li,null,"Deje el conmutador ",t.createElement(a.strong,null,"Programar desactivado")," en desactivado. Pulse el botón ",t.createElement(a.strong,null,"Siguiente"),"."),"\n",t.createElement(a.li,null,"Puede configurar el trabajo para que envíe notificaciones cuando tenga éxito o falle, pero por ahora, omita esto y haga clic en el botón ",t.createElement(a.strong,null,"Siguiente"),"."),"\n",t.createElement(a.li,null,"Borra todos los datos del campo de ",t.createElement(a.strong,null,"entrada"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170051.04051108886/95.png",alt:"BatchInput"}),"\n",t.createElement(a.ol,{start:"15"},"\n",t.createElement(a.li,null,"Anteriormente ha utilizado el archivo ",t.createElement(a.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Outcomes-Projects/main/TrustedAI-L3-Tech-Lab/records_to_score.json"},"records_to_score.json"),". Copie su contenido en el campo de entrada. Pulse el botón ",t.createElement(a.strong,null,"Siguiente"),"."),"\n"),"\n",t.createElement(a.p,null,"En los casos en que se utilicen marcos para admitir otros tipos de datos de entrada, se identificaría un archivo de salida como parte de la definición del trabajo."),"\n",t.createElement(a.ol,{start:"16"},"\n",t.createElement(a.li,null,"Haga clic en el botón ",t.createElement(a.strong,null,"Crear"),"."),"\n"),"\n",t.createElement(a.p,null,"En este punto, se crea y ejecuta el trabajo."),"\n",t.createElement(a.img,{src:"/1685747170051.04051108887/96.png",alt:"job_link"}),"\n",t.createElement(a.ol,{start:"17"},"\n",t.createElement(a.li,null,"Haga clic en el enlace de la tarea que ha creado para abrir la pantalla de detalles de la tarea."),"\n"),"\n",t.createElement(a.img,{src:"/1685747170051.04051108888/97.png",alt:"timestamp"}),"\n",t.createElement(a.ol,{start:"18"},"\n",t.createElement(a.li,null,"Cuando el ",t.createElement(a.strong,null,"estado")," muestre ",t.createElement(a.strong,null,"Completado"),", haga clic en la marca de tiempo para ver el resultado."),"\n"),"\n",t.createElement(a.p,null,'En la salida, puede ver el mismo formato que en el procesamiento en línea con los cuatro campos adicionales añadidos a los registros de predicción: "features", "rawPrediction", "probability" y "prediction".'),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"5-consulte-las-fichas-descriptivas-actualizadas-del-modelo-implantado"},t.createElement(a.h2,{id:"5-consulte-las-fichas-descriptivas-actualizadas-del-modelo-implantado"},t.createElement(a.a,{href:"#5-consulte-las-fichas-descriptivas-actualizadas-del-modelo-implantado"},"5. Consulte las fichas descriptivas actualizadas del modelo implantado")),"\n",t.createElement(a.p,null,"Ya ha desplegado uno de los modelos creados por el bloc de notas en un paso anterior. Como ha activado el seguimiento de FactSheet para este modelo, ahora puede ver los metadatos del modelo, que se han actualizado automáticamente para reflejar el despliegue del modelo."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,'Navegue hasta la entrada del modelo de catálogo que ha creado en la sección " ',t.createElement(a.a,{href:"https://cp4d-outcomes.techzone.ibm.com/data-fabric-lab/trusted-ai#Augmenting_open-source_tools"},"Aumentar las herramientas de código abierto"),' " del laboratorio. Puede copiar y pegar la URL del activo del catálogo en una nueva pestaña del navegador si la guardó anteriormente.'),"\n"),"\n",t.createElement(a.img,{src:"/1685747170051.04051108889/98.png",alt:"entry_catalog_search"}),"\n",t.createElement(a.p,null,"También puede escribir el nombre de la entrada en el campo de búsqueda de la parte superior de la pantalla y pulsar ",t.createElement(a.strong,null,"Intro"),". Esto buscará en sus catálogos activos con este nombre."),"\n",t.createElement(a.img,{src:"/1685747170051.04051108890/99.png",alt:"filter_type"}),"\n",t.createElement(a.p,null,"Si es necesario, ajuste el filtro desplegable ",t.createElement(a.strong,null,"Tipo de")," la izquierda a ",t.createElement(a.strong,null,"Entrada")," modelo. Seleccione la entrada modelo que creó anteriormente en la lista de resultados de la búsqueda."),"\n",t.createElement(a.img,{src:"/1685747169891.03741108744/100.png",alt:"entry_asset"}),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Activos")," para la entrada del modelo. Observe que ahora hay una nueva entrada en el ",t.createElement(a.strong,null,"Deploy")," bucket. El modelo spark, que desplegó anteriormente, tiene ahora una nueva entrada. Como se ha promocionado a un espacio de despliegue, aparece debajo de ese espacio en el bucket."),"\n"),"\n",t.createElement(a.img,{src:"/1685747169927.0381108759/101.png",alt:"deployed_spark_entry"}),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"Haga clic en el nombre del modelo Spark desplegado en la tabla. Observe que la sección Información de ",t.createElement(a.strong,null,"despliegue")," contiene información sobre cuándo se desplegó el modelo, su espacio de despliegue asociado y cuántas copias se están ejecutando. Observe también que la sección ",t.createElement(a.strong,null,"Información de evaluación")," está en blanco, ya que el modelo está a la espera de una evaluación."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"6-desplegar-una-función-python"},t.createElement(a.h2,{id:"6-desplegar-una-función-python"},t.createElement(a.a,{href:"#6-desplegar-una-función-python"},"6. Desplegar una función Python")),"\n",t.createElement(a.p,null,"Ya has visto que es fácil desplegar modelos para su uso a través de una API REST."),"\n",t.createElement(a.p,null,"El despliegue de funciones le ofrece la posibilidad de ocultar detalles (como las credenciales), preprocesar datos antes de pasarlos a los modelos, gestionar errores e incluir llamadas a varios modelos, todo ello dentro de la función desplegada en lugar de en su aplicación."),"\n",t.createElement(a.p,null,"Para demostrar esta capacidad, este laboratorio despliega una función que utiliza el modelo de ",t.createElement(a.strong,null,"despliegue attrition challenger - spark")," ya desplegado. La mayor parte de esta parte del laboratorio es a través de un cuaderno, pero es necesario preparar cierta información de antemano."),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"reunir-las-credenciales-necesarias"},t.createElement(a.h3,{id:"reunir-las-credenciales-necesarias"},t.createElement(a.a,{href:"#reunir-las-credenciales-necesarias"},"Reunir las credenciales necesarias")),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Asegúrese de que dispone de la clave de API que se creó en la sección ",t.createElement(a.strong,null,"Crear una clave de API y un token de proyecto")," de la sección ",t.createElement(a.a,{href:"/mlops/102"},"Aumentar las herramientas de código abierto"),". Si ya no tiene su clave de API, siga las instrucciones proporcionadas en esa sección para crear una nueva. Recuerde que no puede volver atrás y recuperar esta clave."),"\n",t.createElement(a.li,null,"Deberá recuperar el GUID de su espacio de despliegue. Vaya a su ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/ml-runtime?context=cpdaas"},"lista de espacios")," y haga clic en el enlace de su espacio."),"\n"),"\n",t.createElement(a.img,{src:"/1685747169931.0381108760/102.png",alt:"Space_guid"}),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Gestionar"),"."),"\n",t.createElement(a.li,null,"Copie el ",t.createElement(a.strong,null,"GUID del")," espacio utilizando el icono de ",t.createElement(a.strong,null,"copia")," situado a la derecha del GUID y guárdelo para más tarde."),"\n"),"\n",t.createElement(a.img,{src:"/1685747169931.0381108761/103.png",alt:"SparkDeployDetails"}),"\n",t.createElement(a.ol,{start:"5"},"\n",t.createElement(a.li,null,"También necesitará el ID de despliegue del modelo Spark desplegado. Seleccione la pestaña ",t.createElement(a.strong,null,"Despliegues"),"."),"\n",t.createElement(a.li,null,"Haga clic en el enlace ",t.createElement(a.strong,null,"Desafío de desgaste - Despliegue de chispas")," de la lista."),"\n"),"\n",t.createElement(a.img,{src:"/1685747169931.0381108762/104.png",alt:"deployment_id"}),"\n",t.createElement(a.ol,{start:"7"},"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Detalles del despliegue"),"."),"\n",t.createElement(a.li,null,"Copie el ",t.createElement(a.strong,null,"ID de implantación")," utilizando el icono de ",t.createElement(a.strong,null,"copia")," situado a la derecha del ID y guárdelo para más tarde."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"ejecutar-el-cuaderno"},t.createElement(a.h3,{id:"ejecutar-el-cuaderno"},t.createElement(a.a,{href:"#ejecutar-el-cuaderno"},"Ejecutar el cuaderno")),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vuelva a su ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/projects?context=cpdaas"},"lista de proyectos")," y haga clic en el enlace del proyecto que esté utilizando."),"\n"),"\n",t.createElement(a.img,{src:"/1685747169935.03831108763/105.png",alt:"edit_function_notebook"}),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Activos"),"."),"\n",t.createElement(a.li,null,"Seleccione el tipo de activo ",t.createElement(a.strong,null,"Código fuente")," en la lista de la izquierda."),"\n",t.createElement(a.li,null,"Haga clic en los tres puntos verticales a la derecha del cuaderno de ",t.createElement(a.strong,null,"laboratorio de la función 04-Deploy")," y seleccione ",t.createElement(a.strong,null,"Editar"),". Sigue las instrucciones y ejecuta el cuaderno."),"\n"),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"La edición de este cuaderno se realiza de la misma manera que la edición del cuaderno de ",t.createElement(a.strong,null,"laboratorio 01-Acceso a")," ",t.createElement(a.strong,null,"datos")," en la sección ",t.createElement(a.strong,null,"Acceso a datos"),"."),"\n"),"\n",t.createElement(a.p,null,"El resto de esta sección asume la finalización con éxito de la ejecución del cuaderno."),"\n",t.createElement(a.ol,{start:"5"},"\n",t.createElement(a.li,null,"Vaya a su ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/ml-runtime?context=cpdaas"},"lista de")," espacios y haga clic en el enlace de su espacio."),"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Activos"),". Observe que la ",t.createElement(a.strong,null,"función de desgaste de")," funciones aparece ahora en la sección ",t.createElement(a.strong,null,"Funciones"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1685747169935.03831108764/106.png",alt:"deployed_function"}),"\n",t.createElement(a.ol,{start:"7"},"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Despliegues"),"."),"\n",t.createElement(a.li,null,"Haga clic en el enlace de la función desplegada: ",t.createElement(a.strong,null,"función de desgaste"),"."),"\n",t.createElement(a.li,null,"Seleccione la pestaña ",t.createElement(a.strong,null,"Prueba"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1685747169935.03831108765/107.png",alt:"predict_function"}),"\n",t.createElement(a.ol,{start:"10"},"\n",t.createElement(a.li,null,"Arrastre y suelte el archivo records_to_score.json en el campo de entrada de texto."),"\n",t.createElement(a.li,null,"Haga clic en el botón ",t.createElement(a.strong,null,"Predecir")," de la parte inferior derecha."),"\n",t.createElement(a.li,null,"Opcionalmente: Cambiar la vista a una vista JSON."),"\n"),"\n",t.createElement(a.p,null,"Como has visto, puedes llamar a la función Python desplegada utilizando tanto el cuaderno como la interfaz de usuario de Watson Studio Cloud. Las funciones Python desplegadas pueden ser útiles para preprocesar los datos enviados a los modelos, manipular los datos que devuelven los modelos o incluso combinar entradas y salidas de varios modelos. En este caso, la función Python llamó al modelo de despliegue ",t.createElement(a.strong,null,"attrition challenger - spark")," y procesó los resultados para devolver solo la predicción y su probabilidad."))))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,l.ah)(),e.components);return a?t.createElement(a,e,t.createElement(r,e)):r(e)};var c=n(4184),s=n.n(c),i=n(4690),d=n(1140),u=n(2565),m=n(8531),p=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:c}=e,i=(0,t.useRef)(null),{0:E}=(0,t.useState)(""),b=(null===n||n)&&a;return t.createElement(t.Fragment,null,t.createElement(d.Z,{timeToComplete:r,updated:o},a[0].title||l||""),t.createElement(m.Z,{className:g.YS},t.createElement("article",{className:s()(g.Y2,!b&&g.ey),ref:i},t.createElement(u.Z,{components:{h1:()=>null}},c)),b&&t.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return t.createElement(i.Z,{pathname:a,title:n||l[0].title||void 0})};function h(e){return t.createElement(E,e,t.createElement(o,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return c}});var l=n(7294),t=n(1151),r=n(5045);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,CopyText:r.O5};var c=(0,l.memo)((function(e){let{children:a,components:n={}}=e;return l.createElement(t.Zo,{components:{...o,...n}},a)}))},4690:function(e,a,n){var l=n(7294),t=n(1072),r=n(2401);a.Z=e=>{const{title:a,description:n,pathname:o,children:c}=e,{description:s,title:i,origin:d}=(0,r.Z)(),{i18n:{language:u}}=(0,t.$G)(),m={title:a||i,description:n||s,url:""+d+(o||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,m.title),l.createElement("link",{rel:"canonical",href:m.url}),l.createElement("meta",{name:"description",content:m.description}),l.createElement("meta",{property:"og:title",content:m.title}),l.createElement("meta",{property:"og:url",content:m.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:m.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:m.title}),l.createElement("meta",{name:"twitter:url",content:m.url}),l.createElement("meta",{name:"twitter:description",content:m.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,a,n){n.d(a,{Z:function(){return i}});var l=n(7294),t=n(7500),r=n(4184),o=n.n(r),c=n(6488);const s=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:t,items:r}=e;a.splice(a.length,0,{depth:n,title:l,url:t}),r&&r.length>0&&s(r,a,n+1)})),a};var i=e=>{const{itemsList:a}=e,n=(0,l.useMemo)((()=>s(a[0].items||[])),[a]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(t.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:t}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===t.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:t},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return l},YS:function(){return r},ey:function(){return t}});var l="{mdx-fields__slug}-module--article--e3d5a",t="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return c},ah:function(){return r}});var l=n(7294);const t=l.createContext({});function r(e){const a=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function c({components:e,children:a,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(t.Provider,{value:c},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-ml-ops-104-es-md-240c029030bf713c28ab.js.map