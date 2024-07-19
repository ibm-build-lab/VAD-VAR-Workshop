"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5872],{64121:function(e,a,n){n.r(a),n.d(a,{Head:function(){return E},default:function(){return h}});var t=n(11151),o=n(67294);function l(e){const a=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",ol:"ol",li:"li",img:"img",blockquote:"blockquote",code:"code",em:"em",ul:"ul"},(0,t.ah)(),e.components);return o.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"maximo-inspección-visual-mvi---parte-1"},o.createElement(a.h1,{id:"maximo-inspección-visual-mvi---parte-1"},"Maximo Inspección Visual (MVI) - Parte 1"),"\n",o.createElement(a.p,null,"En este laboratorio verá primero la conexión entre Maximo Monitor y MVI."),"\n",o.createElement(a.p,null,"A continuación, creará su propio conjunto de datos, etiquetará y aumentará utilizando una instancia de IVM."),"\n",o.createElement(a.p,null,"¡ATENCIÓN! L3 Quiz Contenido denotado con 🟢"),"\n",o.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"maximo-monitor-y-mvi"},o.createElement(a.h2,{id:"maximo-monitor-y-mvi"},o.createElement(a.a,{href:"#maximo-monitor-y-mvi"},"Maximo Monitor y MVI")),"\n"),o.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-1-inicie-sesión-en-maximo-application-suite-navigator"},o.createElement(a.h2,{id:"paso-1-inicie-sesión-en-maximo-application-suite-navigator"},o.createElement(a.a,{href:"#paso-1-inicie-sesión-en-maximo-application-suite-navigator"},"Paso 1: Inicie sesión en Maximo Application Suite Navigator")),"\n",o.createElement(a.p,null,o.createElement(a.strong,null,"Acciones:")),"\n",o.createElement(a.ol,null,"\n",o.createElement(a.li,null,"Haga clic en el enlace ",o.createElement(a.strong,null,"URL MVI")," del correo electrónico que recibió con las instrucciones para utilizar el entorno de demostración."),"\n",o.createElement(a.li,null,"Se abre la página de inicio de sesión de IBM Maximo Application Suite. Introduzca ",o.createElement(a.strong,null,"el nombre de usuario MVI (A)")," y la ",o.createElement(a.strong,null,"contraseña (B)")," y haga clic en ",o.createElement(a.strong,null,"Iniciar sesión"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.003.png",alt:""}),"\n",o.createElement(a.p,null,"Una vez aceptadas las credenciales de acceso, se abre la ventana ",o.createElement(a.strong,null,"del navegador")," MAS Application Suite. Se muestran varias aplicaciones que componen el paquete de aplicaciones Maximo. En esta demostración, la atención se centrará en la aplicación Maximo Visual Inspection; sin embargo, la primera parte de esta demostración, examina brevemente los resultados de la inspección del modelo MVI AI en la aplicación MAS Monitor. (Nota: en este entorno de demostración, sólo están disponibles las aplicaciones necesarias para completar MVI L3)."),"\n",o.createElement(a.blockquote,null,"\n",o.createElement(a.p,null,"Nota: Si es la primera vez que inicia sesión en la aplicación MAS, es posible que se le pida que vea un recorrido rápido por la aplicación (tutorial práctico). Por favor, descarte cualquier recorrido de este tipo para los fines de esta demostración."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.004.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"3"},"\n",o.createElement(a.li,null,"En la página de ",o.createElement(a.strong,null,"navegación")," de MAS ",o.createElement(a.strong,null,"Suite"),", haga clic en la ficha ",o.createElement(a.strong,null,"Inspección visual (A)"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.005.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"4"},"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Get started (A")," ) en la pantalla MVI ",o.createElement(a.strong,null,"Welcome to IBM Maximo Visual Inspection"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.006.jpeg",alt:""}),"\n",o.createElement(a.p,null,"Se abre la página ",o.createElement(a.strong,null,"Conjuntos de datos"),"."),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.007.jpeg",alt:""}),"\n",o.createElement("br"),"\n",o.createElement("br"),"\n"),o.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-2-crear-un-conjunto-de-datos-para-el-entrenamiento-del-modelo-en-maximo-visual-inspection"},o.createElement(a.h2,{id:"paso-2-crear-un-conjunto-de-datos-para-el-entrenamiento-del-modelo-en-maximo-visual-inspection"},o.createElement(a.a,{href:"#paso-2-crear-un-conjunto-de-datos-para-el-entrenamiento-del-modelo-en-maximo-visual-inspection"},"Paso 2: Crear un conjunto de datos para el entrenamiento del modelo en Maximo Visual Inspection")),"\n",o.createElement(a.p,null,o.createElement(a.strong,null,"¿Qué es un conjunto de datos IVM y por qué es necesario crearlo?")),"\n",o.createElement(a.p,null,"Como primer paso hacia la construcción de su modelo de inspección de IA, debe crear un conjunto de datos en MVI que contenga imágenes de tanques limpios y sucios para enseñar al modelo cómo es cada clase."),"\n",o.createElement(a.p,null,"Los datos son el núcleo del aprendizaje automático (AM). En el caso de los modelos basados en la visión, estos datos adoptan la forma de imágenes o vídeos. Los modelos MVI ML incorporados detectan y aprenden de forma inteligente patrones en el conjunto de datos cargados y analizan estos datos repetidamente hasta que pueden discernir distinciones y, en última instancia, reconocer objetos de interés en las imágenes. Por ejemplo, para entrenar a un ordenador en el reconocimiento de neumáticos de automóvil, es necesario alimentarlo con grandes cantidades de imágenes de neumáticos y objetos relacionados con ellos para que aprenda las diferencias e identifique un neumático, especialmente uno con defectos."),"\n",o.createElement(a.p,null,"Para este modelo de caso de uso, se creará un conjunto de datos con un número limitado de imágenes de tanques limpios y sucios por motivos de brevedad; sin embargo, en escenarios del mundo real, un modelo de visión por ordenador requeriría muchas más imágenes y tiempo de procesamiento del que ofrece esta demostración."),"\n",o.createElement(a.p,null,"En esta demostración, usted carga manualmente las imágenes de tanques guardados desde su máquina local al tablero de instrumentos de la aplicación MVI, sin embargo, los modos de captura de imágenes incorporados en las aplicaciones MVI Mobile y MVI Edge (partes de la solución MVI) también se pueden utilizar para recoger y copiar imágenes automáticamente en la aplicación MVI. Ahora es el momento de empezar a crear un conjunto de datos."),"\n",o.createElement(a.p,null,o.createElement(a.strong,null,"Acción:")),"\n",o.createElement(a.ol,{start:"5"},"\n",o.createElement(a.li,null,"En la pantalla ",o.createElement(a.strong,null,"Conjuntos de datos")," MVI, haga clic en el icono azul ",o.createElement(a.strong,null,"Crear + (A)")," situado en la parte superior derecha."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.008.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"6"},"\n",o.createElement(a.li,null,"Introduzca ",o.createElement(a.code,null,"Sedimentation Tanks <YOUR INITIALS>")," para el campo ",o.createElement(a.strong,null,"Name")," en la ventana ",o.createElement(a.strong,null,"Create data set")," (ya que está compartiendo el entorno de demostración de Maximo Visual Inspection con otras personas se requiere un identificador único para evitar conflictos de nombres) ",o.createElement(a.strong,null,"(A).")),"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Crear (B)"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.009.jpeg",alt:""}),"\n",o.createElement(a.p,null,o.createElement(a.strong,null,"Importante:")," Este script de demostración no trata los nombres de los conjuntos de datos con ningún identificador único. Por lo tanto, a modo de ejemplo, si se le indica que haga clic en el conjunto de datos ",o.createElement(a.em,null,o.createElement(a.strong,null,"Tanques de sedimentación")),", deberá hacer clic en el conjunto de datos ",o.createElement(a.em,null,o.createElement(a.strong,null,"Tanques de sedimentación <SUS INICIALES>")),", es decir, el conjunto de datos que usted nombró junto con su identificador único."),"\n",o.createElement(a.ol,{start:"8"},"\n",o.createElement(a.li,null,"Haga clic en la mitad inferior del mosaico de ",o.createElement(a.strong,null,"Tanques de Sedimentación")," recién creado (donde se muestra un icono de imagen gris claro)."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.010.jpeg",alt:""}),"\n",o.createElement(a.p,null,"Una vez que haga clic en este mosaico, se abrirá una ventana para el conjunto de datos que acaba de crear. Como se muestra en los siguientes pasos, puedes realizar varias operaciones clave en esta página, como cargar imágenes, etiquetar objetos, aumentar datos y entrenar tu modelo."),"\n",o.createElement(a.ol,{start:"9"},"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Importar archivos")," para importar las imágenes del tanque de entrenamiento del modelo desde el directorio donde descomprimió los archivos de muestra."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.011.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"10"},"\n",o.createElement(a.li,null,"Navegue hasta la ubicación del directorio donde descomprimió la carpeta ",o.createElement(a.strong,null,"Images of Sedimentation Tanks for training (Imágenes de tanques de sedimentación para formación")," ), descargada y extraída en el",o.createElement(a.a,{href:"/maximo/mvi-prereq#step-2-download-the-training-and-validation-tank-images-for-the-ai-model"}," Paso 2 del trabajo previo.")),"\n",o.createElement(a.li,null,"Seleccione todas las imágenes de tanques de la carpeta y haga clic en ",o.createElement(a.strong,null,"Abrir"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.024.jpeg",alt:""}),"\n",o.createElement(a.p,null,"Tras unos segundos, las imágenes se cargan en el conjunto de datos recién creado. Este conjunto de datos incluye varias fotos de tanques de sedimentación limpios y sucios. Ahora está listo para etiquetar estas imágenes."),"\n"),o.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-3-etiquetar-el-conjunto-de-datos"},o.createElement(a.h2,{id:"paso-3-etiquetar-el-conjunto-de-datos"},o.createElement(a.a,{href:"#paso-3-etiquetar-el-conjunto-de-datos"},"Paso 3: Etiquetar el conjunto de datos")),"\n",o.createElement(a.p,null,"En este paso, etiquetará las imágenes del tanque. Etiquetar es marcar las imágenes de entrada con información sobre su contenido. En la detección de objetos, esto implicaría resaltar las apariciones de elementos de interés. En el caso de esta demostración, revisará cada una de las imágenes del tanque cargadas y resaltará la parte de la imagen que representa un tanque limpio o sucio. Durante la fase de entrenamiento, estas imágenes etiquetadas permitirán a su modelo aprender qué parte de la imagen representa un tanque y, a continuación, si esa parte de la imagen contiene un tanque limpio o sucio."),"\n",o.createElement(a.p,null,"Como puede imaginar, etiquetar correctamente las imágenes es fundamental para la precisión del modelo que está creando, ya que influye directamente en la calidad general del modelo entrenado. Sencillamente, cuando se trata de identificar objetos o clasificar imágenes, lo mejor es que sea un experto en el caso de uso, es decir, una persona con los conocimientos pertinentes en la materia, quien etiquete las imágenes. Esto garantizará la máxima calidad de la información que se introduzca en el entrenamiento del modelo. Tradicionalmente, los científicos de datos han sido el punto central de las iniciativas de IA y han malgastado su valioso tiempo etiquetando datos (a pesar de no ser ni siquiera expertos en la materia; por ejemplo, ¿podría un científico de datos etiquetar mejor un tanque sucio que el ingeniero de inspección in situ?) Con la IVM, un experto en la materia -sin conocimientos de ciencia de datos- puede etiquetar las imágenes y, a continuación, construir un modelo basado en ellas."),"\n",o.createElement(a.p,null,"Este enfoque reduce la barrera de entrada y permite a los expertos en la materia con poca o ninguna formación en IA crear e implantar modelos de IA operativos en cuestión de horas, no de días o semanas."),"\n",o.createElement(a.p,null,o.createElement(a.strong,null,"Acciones:")),"\n",o.createElement(a.p,null,"Una vez que todas las imágenes se cargan en MVI realizar los siguientes pasos:"),"\n",o.createElement(a.ol,null,"\n",o.createElement(a.li,null,"En el menú desplegable Seleccionar archivos, haga clic en ",o.createElement(a.strong,null,"Todos (A)")," para seleccionar automáticamente todas las imágenes del conjunto de datos."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.012.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"2"},"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Etiquetar objetos (B)"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.013.jpeg",alt:""}),"\n",o.createElement(a.p,null,"Se abre la página ",o.createElement(a.strong,null,"Etiquetar objetos / Tanques de sedimentación"),". Aquí es donde se crean las etiquetas para los tanques limpios y sucios y se asignan a la parte correspondiente de las imágenes en el conjunto de datos. A continuación se destacan varias secciones de la interfaz de usuario de la página Objetos de etiqueta para referencia de diseño."),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.026.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"3"},"\n",o.createElement(a.li,null,"Para iniciar el proceso de etiquetado, debe definir las etiquetas (limpias y sucias). Haga clic en ",o.createElement(a.strong,null,"+ Añadir etiqueta")," en la ventana ",o.createElement(a.strong,null,"Objetos")," del extremo derecho."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.027.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"4"},"\n",o.createElement(a.li,null,"En la ventana ",o.createElement(a.strong,null,"Añadir objetos"),' que se abre, escriba "clean" en el campo ',o.createElement(a.strong,null,"Crear objeto")," ",o.createElement(a.strong,null,"(A)")," y haga clic en el botón ",o.createElement(a.strong,null,"Añadir")," ",o.createElement(a.strong,null,"(B).")),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.028.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"5"},"\n",o.createElement(a.li,null,'Ahora, escribe "dirty" en la ventana ',o.createElement(a.strong,null,"Añadir objetos")," y haz clic en ",o.createElement(a.strong,null,"Añadir"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.029.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"6"},"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Aceptar")," para completar el proceso de Añadir etiqueta."),"\n",o.createElement(a.li,null,"Una vez definidas las etiquetas, puede comenzar el proceso de etiquetar los objetos del tanque adecuadamente. Asegúrese de que la primera imagen del tanque está seleccionada en el Navegador de Imágenes (verá un recuadro azul oscuro alrededor de la imagen seleccionada en el Navegador de Imágenes de la izquierda). Seleccione el nombre de la etiqueta ",o.createElement(a.strong,null,"limpia")," en la ventana ",o.createElement(a.strong,null,"Objetos")," de la derecha ",o.createElement(a.strong,null,"(A).")),"\n",o.createElement(a.li,null,"Haga clic en el icono ",o.createElement(a.strong,null,"Cuadro")," del menú de selección ",o.createElement(a.strong,null,"(B)")," y dibuje un cuadro alrededor de una porción de la imagen que denote el tanque limpio o sucio ",o.createElement(a.strong,null,"(C)"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.030.jpeg",alt:""}),"\n",o.createElement(a.p,null,"Debido a la posible clasificación aleatoria de imágenes, es posible que la primera imagen que vea en el navegador de imágenes sea la de un tanque sucio. En este caso, elija la etiqueta ",o.createElement(a.strong,null,"sucio")," en lugar de ",o.createElement(a.strong,null,"limpio")," y etiquete la primera imagen en el paso 7 de esta sección adecuadamente."),"\n",o.createElement(a.p,null,"En caso de que te equivoques al dibujar la casilla, selecciona la casilla errónea y haz clic en el icono de ",o.createElement(a.strong,null,"la papelera")," situado junto a la etiqueta. También puedes pulsar ",o.createElement(a.strong,null,"CTRL + Z")," o ",o.createElement(a.strong,null,"Comando + Z")," en el teclado de Windows y Mac, respectivamente, para deshacer la última acción."),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.032.png",alt:""}),"\n",o.createElement(a.ol,{start:"9"},"\n",o.createElement(a.li,null,"Etiquete todas las imágenes en el Navegador de Imágenes siguiendo las instrucciones de los pasos anteriores. Puede hacer clic en el botón ",o.createElement(a.strong,null,"azul de flecha hacia abajo")," para desplazarse y seleccionar las imágenes en secuencia para etiquetarlas."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.033.png",alt:""}),"\n",o.createElement(a.p,null,o.createElement(a.strong,null,"Consejos para el etiquetado de imágenes:")),"\n",o.createElement(a.ul,null,"\n",o.createElement(a.li,null,"Los tanques con agua azul están limpios."),"\n",o.createElement(a.li,null,"MVI recuerda su selección anterior de etiquetas, por lo que no necesita hacer clic en las etiquetas ",o.createElement(a.strong,null,"limpio")," o ",o.createElement(a.strong,null,"sucio")," cada vez para etiquetar cada nueva imagen. Sólo tiene que seleccionar la etiqueta adecuada la primera vez que inicie el etiquetado de objetos y seguir utilizándola hasta que sea necesario cambiar a otra etiqueta de objeto, por ejemplo, pasar de etiquetar una imagen de tanque limpio a una imagen de tanque sucio y viceversa."),"\n"),"\n",o.createElement(a.p,null,"Para su comodidad, una barra azul claro resalta la etiqueta que está actualmente en selección, como se muestra en la siguiente captura de pantalla."),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.035.png",alt:""}),"\n",o.createElement(a.ul,null,"\n",o.createElement(a.li,null,"Si hay más de un depósito (o porción de depósitos) en una imagen, dibuje recuadros de etiqueta separados alrededor de cada depósito, como se muestra en la captura de pantalla siguiente."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.037.png",alt:""}),"\n",o.createElement(a.ol,null,"\n",o.createElement(a.li,null,"Una vez que todas las imágenes de tanques del Navegador de imágenes estén debidamente etiquetadas, haga clic en el icono ",o.createElement(a.strong,null,"Atrás")," (no en el botón Atrás de su navegador) para volver a la página ",o.createElement(a.strong,null,"Conjunto de datos / Tanques de sedimentación"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.038.jpeg",alt:""}),"\n",o.createElement(a.p,null,"Se abre la página del conjunto de datos Tanques de Sedimentación. Observe cómo se muestran las etiquetas recién creadas junto con cada imagen de tanque correspondiente (en la captura de pantalla siguiente se resaltan algunas etiquetas)"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.014.jpeg",alt:""}),"\n"),o.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-4-aumento-de-datos"},o.createElement(a.h2,{id:"paso-4-aumento-de-datos"},o.createElement(a.a,{href:"#paso-4-aumento-de-datos"},"Paso 4: Aumento de datos")),"\n",o.createElement(a.p,null,"MVI ofrece una manera fácil y rentable de aumentar los conjuntos de datos. Llegados a este punto, ya ha etiquetado todas las imágenes de tanques del conjunto de datos cargado."),"\n",o.createElement(a.p,null,"Cuando se construye un modelo de visión por ordenador de aprendizaje profundo, cuantas más imágenes se añadan al conjunto de datos, más preciso será generalmente el modelo. Sin embargo, puede haber ocasiones en las que no se disponga de un conjunto de datos tan variado o lo suficientemente grande como para crear un modelo preciso y generalizado, y el coste de adquirir nuevos datos sea demasiado elevado."),"\n",o.createElement(a.p,null,"Para solucionar este problema, el IVM ofrece funciones de aumento de imágenes, que permiten aplicar filtros para realizar operaciones como voltear, desenfocar, enfocar y recortar, con el fin de crear imágenes adicionales, aumentando así el rendimiento del modelo y reduciendo el coste de adquisición de más datos. Este proceso de aumento multiplica varias veces el número original de imágenes. Y lo bueno es que cualquier etiquetado que se haya hecho en las imágenes originales se mantiene en las nuevas imágenes aumentadas para evitar tener que volver a trabajar."),"\n",o.createElement(a.p,null,"Para esta demostración, es justo suponer que es poco probable que una cámara de campo fija tome imágenes de los tanques en las mismas condiciones todas las veces. La iluminación variará en función del tiempo y la hora del día. Si la cámara es giratoria, su orientación respecto al tanque y el enfoque de la imagen también pueden variar. En lugar de intentar proporcionar imágenes para todos los escenarios posibles, el aumento de imágenes puede ayudar a simular estas diferentes condiciones. Así es como, el aumento de datos ayuda a añadir datos adicionales a su conjunto de datos para mejorar el rendimiento del modelo (precisión). Utilizará algunas de las opciones disponibles de aumento de datos MVI para añadir volumen y variedad a su conjunto de datos de imágenes de tanques."),"\n",o.createElement(a.p,null,o.createElement(a.strong,null,"Acciones:")),"\n",o.createElement(a.ol,null,"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Aumentar datos"),"."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.015.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"2"},"\n",o.createElement(a.li,null,"La ventana ",o.createElement(a.strong,null,"Aumentar datos")," se abre y muestra todos los filtros de aumento de datos disponibles de MVI. Seleccione los filtros ",o.createElement(a.strong,null,"Sharpen"),", ",o.createElement(a.strong,null,"Crop"),", ",o.createElement(a.strong,null,"Rotate"),", ",o.createElement(a.strong,null,"Vertical flip")," y ",o.createElement(a.strong,null,"Horizontal flip")," para generar imágenes adicionales ",o.createElement(a.strong,null,"(A)"),". Observe que el número de imágenes bajo las etiquetas ",o.createElement(a.strong,null,"Nuevas creaciones")," y ",o.createElement(a.strong,null,"Nuevo total")," aumenta a medida que se seleccionan más filtros."),"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Continuar (B).")),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.040.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"4"},"\n",o.createElement(a.li,null,"Se abre la ventana Aumentar ",o.createElement(a.strong,null,"datos"),". Nombre el nuevo conjunto de datos escribiendo ",o.createElement(a.code,null,"Augmented Sedimentation Tank <YOUR INITIALS>")," ",o.createElement(a.strong,null,"(A)")),"\n",o.createElement(a.li,null,"Haga clic en ",o.createElement(a.strong,null,"Crear conjunto de datos")," para crear su nuevo conjunto de datos aumentados ",o.createElement(a.strong,null,"(B)")),"\n"),"\n",o.createElement(a.p,null,o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.041.jpeg",alt:""})," Una vez que haga clic en ",o.createElement(a.strong,null,"Crear conjunto de datos"),", podrá seguir el progreso del proceso de aumento de datos en una pequeña ventana que aparece en la parte superior derecha de la pantalla."),"\n",o.createElement(a.p,null,"En esta ventana;"),"\n",o.createElement(a.ul,null,"\n",o.createElement(a.li,null,"Una barra de progreso azul indica que el aumento de datos está en curso."),"\n",o.createElement(a.li,null,"Un mensaje de confirmación de finalización y una marca de verificación verde indican que el proceso se ha completado."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.043.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"6"},"\n",o.createElement(a.li,null,"Haga clic en el enlace ",o.createElement(a.strong,null,"Conjunto")," de datos para volver a la página principal de ",o.createElement(a.strong,null,"Conjuntos de datos"),", donde podrá ver el conjunto de datos aumentado que acaba de crear."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.016.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"7"},"\n",o.createElement(a.li,null,"Se abre la página principal de ",o.createElement(a.strong,null,"Conjuntos de datos"),", que muestra tanto el conjunto de datos original como el aumentado. Observe el mayor número de imágenes en el conjunto de datos aumentado en comparación con el conjunto de datos original (el número de imágenes en cada conjunto de datos se muestra justo debajo de su nombre en el mosaico). Haga clic en la mitad inferior (la imagen del tanque de agua) de su recién creado mosaico de ",o.createElement(a.strong,null,"Tanques de Sedimentación A")," umentados."),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.017.jpeg",alt:""}),"\n",o.createElement(a.ol,{start:"8"},"\n",o.createElement(a.li,null,'Una vez abierta la página del conjunto de datos aumentado, observe cómo todas las imágenes aumentadas generadas por el IVM tienen un pequeño icono negro ("mágico") en la parte inferior derecha de la imagen. Observe también cómo las etiquetas de las imágenes se transfieren automáticamente de las imágenes originales a sus correspondientes imágenes aumentadas.'),"\n"),"\n",o.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/_attachments/mvi.1a40bb6d-e87f-4b74-929f-11f16746fc40.018.jpeg",alt:""}),"\n",o.createElement(a.p,null,"Enhorabuena, has creado un nuevo conjunto de datos aumentado a partir del original que está listo para ser entrenado. Ahora es el momento de crear el modelo de detección de objetos utilizando este conjunto de datos aumentado."),"\n",o.createElement(a.p,null,"La segunda parte del laboratorio de IVM está disponible ",o.createElement(a.a,{href:"/maximo/visual-inspection2"},"aquí"),".")))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?o.createElement(a,e,o.createElement(l,e)):l(e)},i=n(94184),s=n.n(i),c=n(24690),m=n(81140),d=n(48623),u=n(88531),p=n(13383),g=n(27315);const b=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:l,updated:r}}},children:i}=e,c=(0,o.useRef)(null),{0:b}=(0,o.useState)(""),E=(null===n||n)&&a;return o.createElement(o.Fragment,null,o.createElement(m.Z,{timeToComplete:l,updated:r},a[0].title||t||""),o.createElement(u.Z,{className:g.YS},o.createElement("article",{className:s()(g.Y2,!E&&g.ey),ref:c},o.createElement(d.Z,{components:{h1:()=>null}},i)),E&&o.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:b})))},E=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return o.createElement(c.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return o.createElement(b,e,o.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-maximo-visual-inspection-visual-inspection-es-md-b6e97e94a9a7b58781e6.js.map