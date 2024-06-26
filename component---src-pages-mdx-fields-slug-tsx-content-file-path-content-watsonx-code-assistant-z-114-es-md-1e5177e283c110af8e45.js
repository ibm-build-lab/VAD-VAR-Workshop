"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2894],{82436:function(e,a,t){t.r(a),t.d(a,{Head:function(){return b},default:function(){return h}});var n=t(11151),l=t(67294);function r(e){const a=Object.assign({section:"section",h1:"h1",h3:"h3",a:"a",p:"p",strong:"strong",h2:"h2",ol:"ol",li:"li",img:"img",code:"code",blockquote:"blockquote",ul:"ul"},(0,n.ah)(),e.components),{QuizAlert:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(t,{text:"¡Aviso! ¡El material del cuestionario se marcará así!"}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"114-ibm-watsonx-code-assistant-wca-for-z-transformar-código-cobol-a-java"},l.createElement(a.h1,{id:"114-ibm-watsonx-code-assistant-wca-for-z-transformar-código-cobol-a-java"},"114: IBM watsonx Code Assistant (WCA) for Z Transformar código COBOL a Java"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"objetivo"},l.createElement(a.h3,{id:"objetivo"},l.createElement(a.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(a.p,null,"El objetivo de este laboratorio es centrarse en la fase de ",l.createElement(a.strong,null,"transformación")," del ciclo de vida de modernización de aplicaciones de mainframe para aplicaciones z/OS. La conversión del código de COBOL a Java aprovecha las capacidades de IA generativa que forman parte de Code Assistant for Z para generar código Java a partir del código COBOL refactorizado. El código Java producido es un Java orientado a objetos con una buena arquitectura que se ha optimizado para los tiempos de ejecución y las calidades de servicio de IBM Z con la interoperabilidad, integración y estandarización necesarias."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"transformación-de-código-cobol-a-java"},l.createElement(a.h2,{id:"transformación-de-código-cobol-a-java"},l.createElement(a.a,{href:"#transformación-de-código-cobol-a-java"},"Transformación de código COBOL a Java")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Haga clic en el botón ",l.createElement(a.strong,null,"Inicio de")," Windows (el logotipo de Microsoft Windows en la esquina inferior izquierda de la pantalla de demostración) y seleccione el entorno de desarrollo integrado (IDE) ",l.createElement(a.strong,null,"Visual Studio Code"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/open-vscode.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Expanda el twistie ",l.createElement(a.strong,null,"Nuevo: IBM")," ",l.createElement(a.strong,null,"watsonx Code Assistant")," ",l.createElement(a.strong,null,"for Z en Z Open Editor"),", y seleccione ",l.createElement(a.strong,null,"Habilitar la integración de IBM watsonx Code Assistant for Z con Z Open Editor (requiere una cuenta)"),", si no está ya seleccionada. A continuación, cierre la ventana ",l.createElement(a.strong,null,"Bienvenido a")," Z Open Editor haciendo clic en la ",l.createElement(a.strong,null,"X")," situada en la parte superior del nombre de la pestaña."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/enable-wcaz.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"En el panel ",l.createElement(a.strong,null,"Explorador")," de la izquierda, expanda ",l.createElement(a.strong,null,"IBM WATSONX CODE ASSISTANT FOR Z")," en la parte inferior. Verá una advertencia de que al IDE le falta una clave de API. Haga clic en la advertencia ",l.createElement(a.strong,null,"Falta la clave watsonx")," API (el texto amarillo)."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/select-missing-api-key.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"En la parte superior de la pantalla IDE - Visual Studio Code aparece el cuadro ",l.createElement(a.strong,null,"Introducir clave API watsonx (Pulse 'Enter' para confirmar o 'Escape' para cancelar)"),". Introduzca ",l.createElement(a.code,null,"ABCDEFGH")," y pulse la tecla ",l.createElement(a.strong,null,"Intro")," de su teclado."),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," ",l.createElement(a.strong,null,"ABCDEFGH")," es una API falsa sólo para esta demostración. En un entorno real, se debe utilizar una clave de API real."),"\n"),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"En el panel ",l.createElement(a.strong,null,"Explorador")," de la izquierda, expanda el twistie ",l.createElement(a.strong,null,"NAZARE-DEMO-CICS-GENAPP (WORKSPACE)"),", y haga clic en ",l.createElement(a.strong,null,"LGACDB01.cbl")," bajo la sección cobol. Una nueva pestaña se abre a la derecha mostrando el código COBOL. Desplácese hasta la ",l.createElement(a.strong,null,"línea 151")," para ver la parte ",l.createElement(a.strong,null,"INSERT CUSTOMER")," del código. Usted notará que este es el código COBOL que se exportó desde el libro de trabajo de la fase de ",l.createElement(a.strong,null,"Refactorización")," del laboratorio anterior."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/open-cobol-code.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"En el panel ",l.createElement(a.strong,null,"Explorador")," de la izquierda, haga clic con el botón derecho en ",l.createElement(a.strong,null,"LGACDB01.cbl")," y seleccione ",l.createElement(a.strong,null,"Importar")," programa COBOL. ",l.createElement(a.strong,null,"Nota:")," El programa COBOL se importa a ",l.createElement(a.strong,null,"IBM WATSONX CODE ASSISTANT FOR Z")," como ",l.createElement(a.strong,null,"base\\LGACDB01.cbl"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/import-cobol.png",alt:""}),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"En el panel ",l.createElement(a.strong,null,"Explorador"),", en ",l.createElement(a.strong,null,"IBM WATSONX CODE ASSISTANT FOR Z"),", expanda el twistie ",l.createElement(a.strong,null,"base\\LGACDB01.cbl"),". Verá dos entradas: Generar identificadores ",l.createElement(a.strong,null,"Java")," y ",l.createElement(a.strong,null,"Generar métodos Java"),". Haga clic en ",l.createElement(a.strong,null,"Generar identificadores Java"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generate-java-identifiers.png",alt:""}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"Aparecerá una barra de entrada ",l.createElement(a.strong,null,"Generar Clases")," Java en la parte superior central de la pantalla IDE - Visual Studio Code. Introduzca ",l.createElement(a.code,null,"java")," como el directorio relativo dentro del área de trabajo para generar las clases java, y pulse la tecla ",l.createElement(a.strong,null,"Intro")," de su teclado."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/java-class-directory.png",alt:""}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"Se abre una nueva barra de entrada en el mismo lugar. Introduzca ",l.createElement(a.code,null,"com.ibm.wcaz")," como nombre del paquete Java utilizado por las clases Java generadas y pulse la tecla ",l.createElement(a.strong,null,"Intro")," del teclado."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/java-package.png",alt:""}),"\n",l.createElement(a.ol,{start:"10"},"\n",l.createElement(a.li,null,"Aparece una nueva pestaña de ",l.createElement(a.strong,null,"identificadores Java")," en la parte derecha de la ventana. Haga clic en los twisties para expandir los artefactos ",l.createElement(a.strong,null,"LGACDB01")," y ",l.createElement(a.strong,null,"CUSTOMER"),". Puede ver las variables que se utilizan en los artefactos ",l.createElement(a.strong,null,"LGACDB01")," y ",l.createElement(a.strong,null,"CUSTOMER"),". A continuación, haga clic en ",l.createElement(a.strong,null,"Generar clases Java"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generate-java-classes.png",alt:""}),"\n",l.createElement(a.p,null,"En el panel ",l.createElement(a.strong,null,"Explorador"),", observará las clases java recién generadas en el directorio ",l.createElement(a.strong,null,"java\\com\\ibm\\wcaz"),"."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generated-java-classes.png",alt:""}),"\n",l.createElement(a.ol,{start:"11"},"\n",l.createElement(a.li,null,"Haga doble clic en la clase ",l.createElement(a.strong,null,"Customer.java")," para abrirla.",l.createElement(a.strong,null,"Customer.java")," se abre en una nueva pestaña. En la clase ",l.createElement(a.strong,null,"Customer"),".java, puedes ver los getter, setters, y variables overrides (Puede que tengas que desplazarte para ver todo el código)."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/customer-class.png",alt:""}),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Ahora haz doble clic en la clase ",l.createElement(a.strong,null,"CustomerRequest.java")," para abrirla. ",l.createElement(a.strong,null,"CustomerRequest.java")," se abre en una nueva pestaña. En la parte inferior de ",l.createElement(a.strong,null,"CustomerRequest.java")," (puede que tenga que desplazarse para ver todo el código), haga clic con el botón derecho en el nombre del método ",l.createElement(a.strong,null,"insertCustomer"),". A continuación, haga clic en ",l.createElement(a.strong,null,"IBM Watsonx Code Assistantfor Z")," y seleccione ",l.createElement(a.strong,null,"Generate Method"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/insert-customer-method.png",alt:""}),"\n",l.createElement(a.ol,{start:"13"},"\n",l.createElement(a.li,null,"Se abre una nueva pestaña ",l.createElement(a.strong,null,"java-generate")," a la derecha. Haga clic en ",l.createElement(a.strong,null,"Insertar")," en la parte inferior derecha de la pestaña ",l.createElement(a.strong,null,"java-generate")," para insertar el método Java en el archivo de código ",l.createElement(a.strong,null,"CustomerRequest.java"),"."),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generate-method.png",alt:""}),"\n",l.createElement(a.p,null,"Observe que los detalles del método Java se añaden al archivo de clase ",l.createElement(a.strong,null,"CustomerRequest.java")," en el método ",l.createElement(a.strong,null,"insertCustomer"),"."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/Z/images/114/generated-method.png",alt:""}),"\n",l.createElement(a.p,null,"Ha completado con éxito la fase ",l.createElement(a.strong,null,"Transformacíon")," del ciclo de vida de modernización de aplicaciones de mainframe. En este laboratorio:"),"\n",l.createElement(t,{text:"Hay una pregunta de prueba sobre la fase de Transformacíon."}),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Ha utilizado el libro de trabajo ",l.createElement(a.strong,null,"LGACDB01")," que exportó en la fase de ",l.createElement(a.strong,null,"Refactorización")," para insertar la funcionalidad de cliente"),"\n",l.createElement(a.li,null,"Ha importado este libro de trabajo utilizando IBM watsonx Code Assistant para z"),"\n",l.createElement(a.li,null,"Has generado clases Java y métodos Java"),"\n"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"enhorabuena-ha-llegado-al-final-del-laboratorio-114-utilizando-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},l.createElement(a.h3,{id:"enhorabuena-ha-llegado-al-final-del-laboratorio-114-utilizando-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},l.createElement(a.a,{href:"#enhorabuena-ha-llegado-al-final-del-laboratorio-114-utilizando-ibm-watsonx-code-assistant-wca-for-z-transform-cobol-code-to-java"},"Enhorabuena, ha llegado al final del laboratorio 114 utilizando IBM watsonx Code Assistant (WCA) for Z Transform COBOL Code to Java.")),"\n",l.createElement(a.p,null,"Ya puedes ",l.createElement(a.strong,null,l.createElement(a.a,{href:"https://learn.ibm.com/course/view.php?id=16039"},"completar el cuestionario"))," de IBM watsonx Code Assistant for Z for Technical Sales Level 3 Quiz."),"\n",l.createElement(a.p,null,"Una vez completado el cuestionario, haga clic en ",l.createElement(a.strong,null,l.createElement(a.a,{href:"/watsonx/codeassistant/z"},"IBM watsonx Code Assistant for Z"))," para ir a la página de inicio de IBM watsonx Code Assistant for Z.")))))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)};var s=t(94184),c=t.n(s),i=t(24690),m=t(81140),d=t(48623),u=t(88531),g=t(13383),E=t(27315);const p=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:t=!0,title:n,timeToComplete:r,updated:o}}},children:s}=e,i=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),b=(null===t||t)&&a;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},a[0].title||n||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:c()(E.Y2,!b&&E.ey),ref:i},l.createElement(d.Z,{components:{h1:()=>null}},s)),b&&l.createElement(g.Z,{itemsList:a,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:n}}}}=e;return l.createElement(i.Z,{pathname:a,title:t||n[0].title||void 0})};function h(e){return l.createElement(p,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-z-114-es-md-1e5177e283c110af8e45.js.map