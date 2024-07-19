"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2336],{67907:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return h}});var a=n(11151),l=n(67294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",blockquote:"blockquote",h2:"h2",a:"a",ol:"ol",li:"li",code:"code",img:"img",ul:"ul",pre:"pre"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"maximo-predict"},l.createElement(t.h1,{id:"maximo-predict"},"Maximo Predict"),"\n",l.createElement(t.p,null,"En este Ejercicio, aprenderá a configurar una ",l.createElement(t.strong,null,"puntuación de Predecir")," para una curva de ",l.createElement(t.strong,null,"Fin de Vida"),"."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Nota importante"),": En este ejercicio de laboratorio, crearemos registros utilizando ",l.createElement(t.strong,null,"XX")," como prefijo. Asegúrese de sustituir la palabra ",l.createElement(t.strong,null,"XX")," por sus iniciales durante el laboratorio."),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"requisito-previo"},l.createElement(t.h2,{id:"requisito-previo"},l.createElement(t.a,{href:"#requisito-previo"},"Requisito previo")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Asegúrese de haber completado el Laboratorio práctico de ",l.createElement(t.strong,null,"Maximo Monitor"),"."),"\n",l.createElement(t.li,null,"Asegúrese de haber completado el laboratorio práctico de ",l.createElement(t.strong,null,"Maximo")," Health"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Nota"),": Es importante comprender y disponer de conjuntos de datos de sensores en la aplicación Monitor y de datos de activos en la aplicación Manage."),"\n"),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Tendrá que descargar el ",l.createElement(t.code,null,"Predict_Envs.json")," disponible ",l.createElement(t.a,{href:"https://github.com/cloud-native-toolkit/mas-workshop/blob/main/Content/Health%20%2B%20Predict/Lab%20Exercises/Predict_Envs.json"},"aquí"),"."),"\n",l.createElement(t.li,null,"Necesitará descargar ",l.createElement(t.code,null,"db2_certificate.pem")," disponible ",l.createElement(t.a,{href:"https://github.com/cloud-native-toolkit/mas-workshop/blob/main/Content/Health%20%2B%20Predict/Lab%20Exercises/db2_certificate.pem"},"aquí"),"."),"\n",l.createElement(t.li,null,"Necesitará descargar ",l.createElement(t.code,null,"ca_public_cert.pem")," disponible ",l.createElement(t.a,{href:"https://github.com/cloud-native-toolkit/mas-workshop/blob/main/Content/Health%20%2B%20Predict/Lab%20Exercises/ca_public_cert.pem"},"aquí"),"."),"\n",l.createElement(t.li,null,"Cree su propio usuario en CP4D para ejecutar modelos de predicción."),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configurar-gestionar-aplicación"},l.createElement(t.h2,{id:"configurar-gestionar-aplicación"},l.createElement(t.a,{href:"#configurar-gestionar-aplicación"},"Configurar Gestionar aplicación")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Abra la aplicación ",l.createElement(t.strong,null,"Gestionar"),"."),"\n",l.createElement(t.li,null,"Vaya a la aplicación ",l.createElement(t.strong,null,"Activos")," y filtre los registros de activos creados en el ejercicio de laboratorio ",l.createElement(t.strong,null,"Maximo")," Health. por ejemplo ",l.createElement(t.code,null,"XX_ASSET%"),"."),"\n",l.createElement(t.li,null,"Cambie el estado de dos o tres activos cualesquiera a ",l.createElement(t.strong,null,"DECOMISADO"),". Por ejemplo, puede elegir ",l.createElement(t.code,null,"XX_ASSET2")," y ",l.createElement(t.code,null,"XX_ASSET4")," y cambiar el estado de Activo a ",l.createElement(t.strong,null,"DECOMISADO"),"."),"\n",l.createElement(t.li,null,"Asegúrese de rellenar los campos ",l.createElement(t.strong,null,"Fecha de instalación"),", ",l.createElement(t.strong,null,"Vida útil esperada")," en años y ",l.createElement(t.strong,null,"EOL estimado")," para cada activo, sin esto los modelos Predecir no se ejecutarán."),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configuración-predecir-aplicación"},l.createElement(t.h2,{id:"configuración-predecir-aplicación"},l.createElement(t.a,{href:"#configuración-predecir-aplicación"},"Configuración Predecir aplicación")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Abra la aplicación ",l.createElement(t.strong,null,"Predict")," desde ",l.createElement(t.strong,null,"Suite Navigator"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/000.png",alt:"Predict application"}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Para crear un Grupo de ",l.createElement(t.strong,null,"Predicción")," Haga clic en el menú de la izquierda y seleccione -> Predecir ",l.createElement(t.strong,null,"agrupación")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/001.png",alt:"Predict grouping"}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Haga clic en el botón azul ",l.createElement(t.strong,null,"Crear grupo")," ",l.createElement(t.code,null,"+")," para crear un nuevo grupo."),"\n",l.createElement(t.li,null,"Proporcione el nombre y la descripción como ",l.createElement(t.code,null,"XX_predictscores")),"\n",l.createElement(t.li,null,"Seleccione la consulta que creó en ",l.createElement(t.strong,null,"Gestionar")," aplicación, por ejemplo ",l.createElement(t.code,null,"xx_asset")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/002.png",alt:"Create predict group"}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Haga clic en el botón Crear."),"\n",l.createElement(t.li,null,"Compruebe que se ha creado el grupo y anote el valor de la columna ",l.createElement(t.strong,null,"Id. de grupo"),". En la siguiente captura de pantalla es: ",l.createElement(t.strong,null,"1005")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/003.png",alt:"Group ID"}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configurar-cloud-pak-para-datos"},l.createElement(t.h2,{id:"configurar-cloud-pak-para-datos"},l.createElement(t.a,{href:"#configurar-cloud-pak-para-datos"},"Configurar Cloud Pak para datos")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Utilice la url CP4D y la credencial suministrada para acceder a la instancia"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Nota"),": Esto será suministrado por los instructores durante el taller"),"\n"),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Haga clic en el menú hamburguesa de la izquierda y seleccione ",l.createElement(t.strong,null,"Todos los proyectos")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/004.jpg",alt:"All projects"}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Haga clic en el botón azul ",l.createElement(t.strong,null,"Nuevo proyecto")," ",l.createElement(t.code,null,"+")," para crear un nuevo proyecto."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/005.png",alt:"Create new project"}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"Seleccione ",l.createElement(t.strong,null,"Crear un proyecto vacío"),"."),"\n",l.createElement(t.li,null,"Introduzca el nombre y la descripción del proyecto como ",l.createElement(t.code,null,"XXPREDICTSCORE")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/006.png",alt:"Enter project name"}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Haga clic en el botón ",l.createElement(t.strong,null,"Crear")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/007.png",alt:"Create project"}),"\n",l.createElement(t.ol,{start:"7"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Seleccione la pestaña ",l.createElement(t.strong,null,"Activos")," y haga clic en la sección ",l.createElement(t.strong,null,"Soltar archivos de datos")," y seleccione los siguientes archivos que guardó anteriormente."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Predict_Envs.json"),"\n",l.createElement(t.li,null,"db2_certificate.pem"),"\n",l.createElement(t.li,null,"ca_public_cert.pem"),"\n"),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/008.png",alt:"Assets tab"}),"\n",l.createElement(t.ol,{start:"8"},"\n",l.createElement(t.li,null,"Seleccione la pestaña ",l.createElement(t.strong,null,"Activos")," y haga clic en el botón ",l.createElement(t.strong,null,"Nuevos Activos")," ",l.createElement(t.code,null,"+"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/009.png",alt:"Add assets"}),"\n",l.createElement(t.ol,{start:"9"},"\n",l.createElement(t.li,null,"Seleccione ",l.createElement(t.strong,null,"Editor de código")," y, a continuación, elija ",l.createElement(t.strong,null,"el editor de cuadernos Jupyter")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/010.png",alt:"Jupyter notebook"}),"\n",l.createElement(t.ol,{start:"10"},"\n",l.createElement(t.li,null,"Haga clic en la pestaña ",l.createElement(t.strong,null,"Desde archivo")," y arrastre y suelte el ",l.createElement(t.code,null,"PMI – End of life curve.ipynb"),". Puede descargar el cuaderno desde ",l.createElement(t.a,{href:"https://github.com/cloud-native-toolkit/mas-workshop/blob/main/Content/Health%20%2B%20Predict/Lab%20Exercises/PMI%20-%20End%20of%20Life%20Curve.ipynb"},"aquí")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/011.png",alt:"New notebook"}),"\n",l.createElement(t.ol,{start:"11"},"\n",l.createElement(t.li,null,"Haga clic en el botón ",l.createElement(t.strong,null,"Crear"),". Se abrirá el cuaderno ",l.createElement(t.code,null,"PMI – End of life curve"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/012.png",alt:"Notebook view"}),"\n",l.createElement(t.ol,{start:"12"},"\n",l.createElement(t.li,null,"Cambie la variable ",l.createElement(t.code,null,"asset_group_id")," para que coincida con la anotada anteriormente en la aplicación predict. En este caso es ",l.createElement(t.strong,null,"1005"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/013.png",alt:"Alter variable"}),"\n",l.createElement(t.ol,{start:"13"},"\n",l.createElement(t.li,null,"Selecciona la primera celda y pulsa el botón ",l.createElement(t.strong,null,"Ejecutar"),". Ejecuta cada celda una tras otra."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Nota"),": Una celda habrá terminado de ejecutar el código que contiene cuando el valor In ",l.createElement(t.code,null,"In [*]")," ] a la izquierda de la celda se llene con un número como ",l.createElement(t.code,null,"In [1]"),"."),"\n"),"\n",l.createElement(t.ol,{start:"14"},"\n",l.createElement(t.li,null,"Verifique la salida para Entrenar la instancia del modelo. Debería mostrar ",l.createElement(t.code,null,'"Finished execution of End of Life Curve Asset Group Pipeline."')," Al final."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/014.png",alt:"Verify output"}),"\n",l.createElement(t.ol,{start:"15"},"\n",l.createElement(t.li,null,"Ejecute cada celda hasta llegar a la celda ",l.createElement(t.strong,null,"Registrar la instancia del modelo entrenado"),"."),"\n",l.createElement(t.li,null,"El resultado final debería mostrar el mensaje ",l.createElement(t.code,null,"Registration was successful. New model ID = 20BB65D9-BA25-4173-95EC-A9E7E58DA5C7")),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/015.png",alt:"New model registered"}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"verificar-las-puntuaciones"},l.createElement(t.h2,{id:"verificar-las-puntuaciones"},l.createElement(t.a,{href:"#verificar-las-puntuaciones"},"Verificar las puntuaciones")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Vaya a la ",l.createElement(t.strong,null,"aplicación Predict")," y abra el ",l.createElement(t.strong,null,"grupo Predict")," creado anteriormente."),"\n",l.createElement(t.li,null,"Haga clic en el enlace Modelo de ",l.createElement(t.strong,null,"instancia entrenado"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/016.png",alt:"Trained instance"}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Elija las opciones que se indican a continuación:"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-text"},"Active : ON\nRun every : 1 Day\nStarting At : 9 AM\nDate : Enter future date\n")),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/017.png",alt:"Enter options"}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"Haga clic en el botón ",l.createElement(t.strong,null,"Guardar"),"."),"\n",l.createElement(t.li,null,"Abra cualquier activo de la lista y compruebe que la ",l.createElement(t.strong,null,"curva de fin de vida")," útil aparece como se muestra a continuación:"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Maximo/images/PREDICT/018.png",alt:"End of life curve"}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"¡Enhorabuena! Ha completado con éxito el Laboratorio Maximo Predict."))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(94184),i=n.n(o),s=n(24690),m=n(81140),u=n(48623),d=n(88531),E=n(13383),p=n(27315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:c}}},children:o}=e,s=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),b=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:c},t[0].title||a||""),l.createElement(d.Z,{className:p.YS},l.createElement("article",{className:i()(p.Y2,!b&&p.ey),ref:s},l.createElement(u.Z,{components:{h1:()=>null}},o)),b&&l.createElement(E.Z,{itemsList:t,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function h(e){return l.createElement(g,e,l.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-maximo-predict-es-md-b104f719371a31bb62a7.js.map