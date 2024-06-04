"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7731],{5420:function(e,a,t){t.r(a),t.d(a,{Head:function(){return E},default:function(){return h}});var n=t(1151),l=t(7294);function o(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ol:"ol",li:"li",strong:"strong",pre:"pre",code:"code",span:"span",blockquote:"blockquote",img:"img",h3:"h3"},(0,n.ah)(),e.components),{QuizAlert:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(t,{text:"¡Atención! ¡El material del cuestionario se marcará así!"}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"trabajando-con-minio"},l.createElement(a.h1,{id:"trabajando-con-minio"},"Trabajando con MinIO"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introducción-al-almacenamiento-de-objetos"},l.createElement(a.h2,{id:"introducción-al-almacenamiento-de-objetos"},l.createElement(a.a,{href:"#introducción-al-almacenamiento-de-objetos"},"Introducción al almacenamiento de objetos")),"\n",l.createElement(a.p,null,"Uno de los principales atractivos de watsonx.data es que se pueden almacenar grandes cantidades de datos en el almacenamiento de objetos a un coste relativamente bajo, con motores de consulta adecuados (como Presto y Spark) que acceden a los datos de forma simultánea. Esto permite descargar los datos existentes del almacén de datos de la empresa (EDW) de un cliente, donde los requisitos de rendimiento y/o la frecuencia con la que se accede a los datos no justifican los costes de tener esos datos en el almacén (tenga en cuenta que los costes no se limitan al almacenamiento de datos en sí; hay costes en la preparación y el traslado de datos al almacén, costes de almacenamiento adicionales para imágenes de copia de seguridad más grandes, el impacto de ejecutar cargas de trabajo de prioridad relativamente baja al mismo tiempo que cargas de trabajo de prioridad más alta, etc.)."),"\n",l.createElement(a.p,null,"Watsonx.data Developer Edition incluye un almacén de objetos local compatible con S3 llamado MinIO. En lugar de utilizar un almacén de objetos S3 externo (que es ciertamente posible con watsonx.data), este laboratorio utiliza el almacén de objetos local MinIO. Necesitará credenciales MinIO para iniciar sesión y utilizar la consola MinIO. Esto incluye una clave de acceso (nombre de usuario) y una clave secreta (contraseña). Estos valores son específicos de su entorno y se almacenan como variables de entorno en el contenedor Presto."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Abra una ventana de comandos de terminal en el servidor watsonx.data como usuario ",l.createElement(a.strong,null,"root"),"."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"  sudo su - \n")),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Ejecute el siguiente comando para extraer y mostrar la clave de acceso (nombre de usuario). Tome nota de esto y guárdelo en un lugar que pueda consultar más adelante."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"  docker ",l.createElement(a.span,{className:"hljs-built_in"},"exec")," ibm-lh-presto ",l.createElement(a.span,{className:"hljs-built_in"},"printenv")," | grep LH_S3_ACCESS_KEY | sed ",l.createElement(a.span,{className:"hljs-string"},"'s/.*=//'"),"\n")),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Ejecute el siguiente comando para extraer y mostrar la clave secreta (contraseña). Toma nota de esto y guárdalo en un lugar al que puedas referirte más tarde."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"  docker ",l.createElement(a.span,{className:"hljs-built_in"},"exec")," ibm-lh-presto ",l.createElement(a.span,{className:"hljs-built_in"},"printenv")," | grep LH_S3_SECRET_KEY | sed ",l.createElement(a.span,{className:"hljs-string"},"'s/.*=//'"),"\n")),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Abra la consola MinIO en una nueva ventana del navegador. Puede encontrar la URL en los detalles de su reserva de TechZone."),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," Es posible que reciba una advertencia sobre un posible riesgo de seguridad, en cuyo caso puede proceder como lo hizo anteriormente con la consola watsonx.data."),"\n"),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Consulte las credenciales MinIO que copió anteriormente e introduzca la clave de acceso para el ",l.createElement(a.strong,null,"Nombre de usuario")," y la clave secreta para la ",l.createElement(a.strong,null,"Contraseña"),". Haga clic en el botón ",l.createElement(a.strong,null,"Iniciar sesión"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/104/minio.png",alt:""}),"\n",l.createElement(a.p,null,"Se abre la pantalla ",l.createElement(a.strong,null,"del navegador de objetos"),". Existen dos cubos por defecto: ",l.createElement(a.strong,null,"hive_bucket")," y ",l.createElement(a.strong,null,"iceberg_bucket"),". Ya hay una serie de objetos dentro de estos cubos - las tablas pre-pobladas en el ",l.createElement(a.strong,null,"hive_bucket")," y las tablas que ha creado en ",l.createElement(a.strong,null,"iceberg_bucket"),"."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/104/minio-buckets.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Vuelve a la pantalla ",l.createElement(a.strong,null,"del administrador de infraestructuras")," en la consola de ",l.createElement(a.strong,null,"watsonx"),".data y observa cómo estos dos buckets se registraron previamente en watsonx.data."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/104/watsonx-data-buckets.png",alt:""}),"\n",l.createElement(a.p,null,"Todas las tablas creadas en el catálogo ",l.createElement(a.strong,null,"hive_data")," tienen sus archivos (objetos) en el bucket hive-bucket. Del mismo modo, todas las tablas creadas en el catálogo ",l.createElement(a.strong,null,"iceberg_data")," tienen sus archivos (objetos) en ",l.createElement(a.strong,null,"iceberg_bucket"),"."),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"Vuelve a la consola MinIO. Haz clic en la fila ",l.createElement(a.strong,null,"iceberg_bucket"),"."),"\n"),"\n",l.createElement(a.p,null,"Hay dos carpetas en la lista, una para cada esquema que se ha creado en el catálogo asociado a este bucket (",l.createElement(a.strong,null,"iceberg_data"),"). Watsonx.data utiliza el nombre del esquema para la carpeta cuando la crea (como cuando creó el esquema ",l.createElement(a.strong,null,"mi_esquema")," anteriormente en el laboratorio). Recuerde que cuando creó el esquema ",l.createElement(a.strong,null,"newschema")," utilizando la CLI de Presto, especificó la ubicación como 's3a://iceberg-bucket/newschema', que coincide con lo que ve aquí."),"\n",l.createElement(t,{text:"Material del cuestionario: presta atención a la estructura del objeto S3"}),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/104/minio-buckets-schema.png",alt:""}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"Haga clic en la fila de la carpeta ",l.createElement(a.strong,null,"newschema"),"."),"\n"),"\n",l.createElement(a.p,null,"En la carpeta ",l.createElement(a.strong,null,"newschema")," hay una subcarpeta llamada ",l.createElement(a.strong,null,"users"),". Cuando creó la tabla de usuarios en la CLI de Presto, se creó esta subcarpeta con el mismo nombre que la tabla."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/104/minio-buckets-users.png",alt:""}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"Haga clic en la fila de la carpeta de ",l.createElement(a.strong,null,"usuarios"),"."),"\n"),"\n",l.createElement(a.p,null,"Hay dos subcarpetas dentro de la carpeta de la tabla. La carpeta de ",l.createElement(a.strong,null,"datos")," contiene los archivos Parquet que contienen los datos reales de la tabla. La carpeta de ",l.createElement(a.strong,null,"metadatos")," contiene una serie de archivos de metadatos (de diferentes formatos de archivo de datos) utilizados por Iceberg."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/104/minio-buckets-users-data.png",alt:""}),"\n",l.createElement(a.ol,{start:"10"},"\n",l.createElement(a.li,null,"Revise los archivos de las carpetas de ",l.createElement(a.strong,null,"datos")," y ",l.createElement(a.strong,null,"metadatos"),". Verás una mezcla de archivos Parquet y Avro."),"\n"),"\n",l.createElement(a.p,null,"Para retroceder en la jerarquía de carpetas, utilice las ",l.createElement(a.strong,null,"migas de pan")," situadas en la parte superior del panel de navegación. Si hace clic en el icono <, accederá a la carpeta principal de la carpeta en la que se encuentra."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/104/minio-buckets-users-navigation.png",alt:""}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"enhorabuena-has-llegado-al-final-del-laboratorio-104"},l.createElement(a.h3,{id:"enhorabuena-has-llegado-al-final-del-laboratorio-104"},l.createElement(a.a,{href:"#enhorabuena-has-llegado-al-final-del-laboratorio-104"},"Enhorabuena, has llegado al final del laboratorio 104.")),"\n",l.createElement(a.p,null,"Haga clic en, ",l.createElement(a.a,{href:"/watsonx/watsonxdata/105"},"laboratorio 105")," para iniciar el siguiente laboratorio.")))))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?l.createElement(a,e,l.createElement(o,e)):o(e)};var s=t(4184),c=t.n(s),i=t(4690),m=t(1140),u=t(8623),d=t(8531),b=t(3383),p=t(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:t=!0,title:n,timeToComplete:o,updated:r}}},children:s}=e,i=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),E=(null===t||t)&&a;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:o,updated:r},a[0].title||n||""),l.createElement(d.Z,{className:p.YS},l.createElement("article",{className:c()(p.Y2,!E&&p.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},s)),E&&l.createElement(b.Z,{itemsList:a,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:n}}}}=e;return l.createElement(i.Z,{pathname:a,title:t||n[0].title||void 0})};function h(e){return l.createElement(g,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-104-es-md-66a3107bce9066f14b3e.js.map