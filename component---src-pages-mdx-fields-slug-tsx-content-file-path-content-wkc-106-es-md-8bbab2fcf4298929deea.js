"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3531],{5735:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return v}});var t=a(1151),l=a(7294);function o(e){const n=Object.assign({section:"section",h1:"h1",p:"p",a:"a",h4:"h4",h2:"h2",img:"img",ol:"ol",li:"li"},(0,t.ah)(),e.components),{CopyText:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CopyText",!0),l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"106-gestión-de-datos-virtuales"},l.createElement(n.h1,{id:"106-gestión-de-datos-virtuales"},"106: Gestión de datos virtuales"),"\n",l.createElement(n.p,null,"Watson Query puede integrarse con Watson Knowledge Catalog para gobernar los datos virtuales que se publican en un catálogo gobernado. Esta sección es **optativo **para los vendedores técnicos y los business partners que estén interesados en aprender a gobernar los datos virtualizados en **Consulta de Watson **utilización de las características de gobernabilidad de datos de **Catálogo de conocimientos de Watson **. Esta sección utiliza un ejemplo de enmascaramiento muy simple basado en nombres de columna utilizando el **Redacción **método de enmascaramiento, para demostrar la integración entre los dos servicios con la menor cantidad de configuración y configuración. It **no **utilizar el **privacidad de datos avanzada **métodos de enmascaramiento definidos en el ",l.createElement(n.a,{href:"https://vest.buildlab.cloud/en/wkc/102#7-create-data-protection-rules"},"Crear reglas de protección de datos "),"sección de este **Gobernanza de datos **laboratorio arriba."),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"suministrar-un-servicio-de-catálogo-de-conocimientos-de-watson"},l.createElement(n.h4,{id:"suministrar-un-servicio-de-catálogo-de-conocimientos-de-watson"},l.createElement(n.a,{href:"#suministrar-un-servicio-de-catálogo-de-conocimientos-de-watson"},"Suministrar un servicio de catálogo de conocimientos de Watson")),"\n",l.createElement(n.p,null,"Antes de continuar, debe tener un **Catálogo de conocimientos de Watson **servicio suministrado en la misma cuenta de nube y región de nube donde **Consulta de Watson **el servicio se suministra. Si no es así, vaya al **Prestación de los Servicios **paso de la ",l.createElement(n.a,{href:"https://vest.buildlab.cloud/en/wkc/getting-started"},"Cómo empezar "),"Sección de la **Laboratorio de tejido de datos **y siga las instrucciones para el suministro de uno."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-crear-autorizaciones-de-servicio"},l.createElement(n.h2,{id:"1-crear-autorizaciones-de-servicio"},l.createElement(n.a,{href:"#1-crear-autorizaciones-de-servicio"},"1. Crear autorizaciones de servicio")),"\n",l.createElement(n.p,null,"Con el fin de **Consulta de Watson **para publicar en un catálogo gobernado y hacer cumplir **Catálogo de conocimientos de Watson **reglas de protección de datos, se debe crear un servicio a la autorización de servicio en su cuenta de IBM Cloud utilizando **Identificación y gestión de accesos **(IAM)."),"\n",l.createElement(n.img,{src:"/1686007646544.26781105125/image389.png",alt:""}),"\n",l.createElement(n.p,null,"Ir a la ",l.createElement(n.a,{href:"https://cloud.ibm.com/login"},"IBM Cloud "),"Iniciar sesión en la página."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Especifique el ID de IBM."),"\n",l.createElement(n.li,null,"Seleccione la opción **Continuar **."),"\n"),"\n",l.createElement(n.p,null,"Cuando se le solicite, especifique la contraseña y las solicitudes de autenticación adicionales que se le presenten."),"\n",l.createElement(n.img,{src:"/1686007646548.26781105127/image390.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Seleccione la opción **Gestionar **en la barra de herramientas."),"\n",l.createElement(n.li,null,"Seleccione la opción **Acceso (IAM) **elemento de menú."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646548.26781105128/image391.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Seleccione la opción **Autorizaciones **elemento de menú de la **Gestionar el acceso **del menú de la izquierda."),"\n",l.createElement(n.li,null,"Seleccione la opción **Crear **."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646548.26781105129/image392.png",alt:""}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"Seleccione **Esta cuenta **como cuenta de origen. (Debe seleccionarse de forma predeterminada)."),"\n",l.createElement(n.li,null,"Utilización de la **Servicio de origen **desplegable, empezar a escribir **Watson sabe **en el área de búsqueda, seleccione **Catálogo de conocimientos de Watson **de la lista de servicios."),"\n",l.createElement(n.li,null,"Seleccione la opción **Todos los recursos **para ver cómo desea ampliar el ámbito del acceso de servicio de origen."),"\n",l.createElement(n.li,null,"Utilización de la **Servicio de destino **desplegable, seleccione **Consulta de Watson **de la lista de servicios. (Debe ser el único servicio listado)."),"\n",l.createElement(n.li,null,"Seleccione la opción **Todos los recursos **para ver cómo desea ampliar el ámbito del acceso de servicio de destino."),"\n",l.createElement(n.li,null,"Desplácese **Abajo **en la parte inferior de la página de autorizaciones."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646548.26781105130/image393.png",alt:""}),"\n",l.createElement(n.ol,{start:"13"},"\n",l.createElement(n.li,null,"Seleccione el recuadro de selección **Acceso de servicio **Sección siguiente **DataAccess (sólo para autorización de servicio a servicio) **."),"\n",l.createElement(n.li,null,"Haga clic en **Autorizar **."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646552.2681105131/image394.png",alt:""}),"\n",l.createElement(n.p,null,"Verá el nuevo servicio a la autorización de servicio en su cuenta de nube en el **Gestionar autorizaciones **."),"\n",l.createElement(n.ol,{start:"15"},"\n",l.createElement(n.li,null,"Seleccione la opción **IBM Cloud **en la esquina superior izquierda para volver a la página de inicio."),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-crear-catálogo-gobernado"},l.createElement(n.h2,{id:"2-crear-catálogo-gobernado"},l.createElement(n.a,{href:"#2-crear-catálogo-gobernado"},"2. Crear catálogo gobernado")),"\n",l.createElement(n.p,null,"Para poder gobernar los datos virtuales en **Consulta de Watson **, usted necesitará un **gobernado **El catálogo que se crea en la misma cuenta que el **Consulta de Watson **El servicio se despliega. Este es un catálogo que se ha creado con el **Aplicar políticas de datos **opción habilitada. No puede utilizar el **Catálogo de activos de plataforma **porque es **no **un catálogo gobernado y no puede modificarse para convertirse en uno."),"\n",l.createElement(n.p,null,"Si usted ha hecho el **Gobernanza de datos **laboratorio técnico, debe tener un catálogo gobernado creado en su cuenta. Si no es así, puede utilizar un catálogo gobernado existente, en la misma cuenta y región que el **Consulta de Watson **El servicio se despliega o crea un nuevo catálogo gobernado."),"\n",l.createElement(n.p,null,"Si necesita crear un catálogo gobernado, vaya al ",l.createElement(n.a,{href:"https://vest.buildlab.cloud/en/wkc/104#1-create-the-catalog"},"Crear el catálogo "),"de este laboratorio para instrucciones sobre cómo crear uno."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-crear-regla-de-protección-de-datos"},l.createElement(n.h2,{id:"3-crear-regla-de-protección-de-datos"},l.createElement(n.a,{href:"#3-crear-regla-de-protección-de-datos"},"3. Crear regla de protección de datos")),"\n",l.createElement(n.p,null,"En este paso, creará una regla de protección de datos para proteger la información de tarjeta de crédito sensible en la **CLIENTE **activo de datos virtual, utilizando el **Redacción **Método de enmascaramiento, por lo que los valores no son visibles para aquellos que no tienen autorización para ver la información. Creará la regla de protección de datos utilizando **Nombre de columna **como criterio de la condición de regla para las columnas nombradas: **CREDIT_CARD_NUMBER **, **CREDIT_CARD_CVV **y **CREDIT_CARD_EXPIRY **."),"\n",l.createElement(n.img,{src:"/1686007646624.26881105169/image7.png",alt:""}),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Seleccione la opción **Navegación **(las 4 líneas horizontales apiladas en la esquina superior izquierda)."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646556.2681105132/image395.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"Seleccione la opción **Gobierno > Reglas **."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646556.2681105133/image396.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Utilización de la **Añadir regla **desplegable, seleccione **Nueva norma **."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646124.26271104842/image133.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Seleccione **Regla de protección de datos **."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646128.2631104843/image134.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Seleccione la opción **Siguiente **."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646560.2681105134/image397.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"Copie el texto siguiente y péguelo en el **Nombre **:"),"\n"),"\n",l.createElement(a,{text:"Cómo proteger la información de tarjeta"}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"Copie el texto siguiente y péguelo en el **Definición empresarial **:"),"\n"),"\n",l.createElement(a,{text:"Proteger todos los componentes de una tarjeta de crédito. Incluyendo el número de tarjeta de crédito, el número de validación de tarjeta de crédito (CVV) y la fecha de vencimiento de la tarjeta de crédito utilizando el método de enmascaramiento de privacidad de datos."}),"\n",l.createElement(n.p,null,"Especificar la regla **Criterios **para **Condición 1 **como sigue:"),"\n",l.createElement(n.ol,{start:"8"},"\n",l.createElement(n.li,null,"Utilización de la **Si **desplegable de sentencias a la izquierda, seleccione **Nombre de columna **."),"\n",l.createElement(n.li,null,"Utilización de la **Si **desplegable de sentencias a la derecha, seleccione **contiene cualquiera **."),"\n",l.createElement(n.li,null,"Copie el texto siguiente y péguelo en el **Nombre de columna **:"),"\n"),"\n",l.createElement(a,{text:"CREDIT_CARD_NUMBER, CREDIT_CARD_CVV, CREDIT_CARD_EXPIRY"}),"\n",l.createElement(n.ol,{start:"11"},"\n",l.createElement(n.li,null,"Pulse el botón **Introduzca **o **Retorno **en el teclado."),"\n"),"\n",l.createElement(n.p,null,"Especificar la regla **Acción **como sigue:"),"\n",l.createElement(n.ol,{start:"12"},"\n",l.createElement(n.li,null,"Utilización de la **entonces **Declaración **Acción **desplegable a la izquierda, seleccione **columnas de máscara **."),"\n",l.createElement(n.li,null,"Utilización de la **entonces **Declaración **en columnas que contengan **desplegable a la derecha, seleccione **Nombre de columna **."),"\n",l.createElement(n.li,null,"El **CREDIT_CARD_NUMBER **, **CREDIT_CARD_CVV **, y **CREDIT_CARD_EXPIRY **Las columnas se rellenarán automáticamente para usted."),"\n",l.createElement(n.li,null,"Seleccione **Redact **como método de enmascaramiento en la **Seleccionar método de enmascaramiento **."),"\n",l.createElement(n.li,null,"Haga clic en **Crear **."),"\n"),"\n",l.createElement(n.img,{src:"/1686007646560.2681105135/image398.png",alt:""}),"\n",l.createElement(n.p,null,"Usted debe ver un **¡Creado correctamente! **y vea la nueva regla creada."),"\n",l.createElement(n.ol,{start:"17"},"\n",l.createElement(n.li,null,"Seleccione la opción **Normas **La indicación de ruta en la esquina superior izquierda para volver a la página principal de reglas."),"\n"),"\n",l.createElement(n.p,null,"El gobierno de datos ahora está configurado para **Consulta de Watson **a utilizar **Catálogo de conocimientos de Watson **para proteger la información sensible de tarjetas de crédito.")))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)};var i=a(4184),c=a.n(i),s=a(4690),d=a(1140),m=a(2565),u=a(8531),p=a(3383),g=a(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:o,updated:r}}},children:i}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:o,updated:r},n[0].title||t||""),l.createElement(u.Z,{className:g.YS},l.createElement("article",{className:c()(g.Y2,!b&&g.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},i)),b&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:n,title:a||t[0].title||void 0})};function v(e){return l.createElement(E,e,l.createElement(r,e))}},2565:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7294),l=a(1151),o=a(5045);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA,CopyText:o.O5};var i=(0,t.memo)((function(e){let{children:n,components:a={}}=e;return t.createElement(l.Zo,{components:{...r,...a}},n)}))},4690:function(e,n,a){var t=a(7294),l=a(1072),o=a(2401);n.Z=e=>{const{title:n,description:a,pathname:r,children:i}=e,{description:c,title:s,origin:d}=(0,o.Z)(),{i18n:{language:m}}=(0,l.$G)(),u={title:n||s,description:a||c,url:""+d+(r||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:m}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,u.title),t.createElement("link",{rel:"canonical",href:u.url}),t.createElement("meta",{name:"description",content:u.description}),t.createElement("meta",{property:"og:title",content:u.title}),t.createElement("meta",{property:"og:url",content:u.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:u.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:u.title}),t.createElement("meta",{name:"twitter:url",content:u.url}),t.createElement("meta",{name:"twitter:description",content:u.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(7294),l=a(7500),o=a(4184),r=a.n(o),i=a(6488);const c=function(e,n,a){return void 0===n&&(n=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:t,url:l,items:o}=e;n.splice(n.length,0,{depth:a,title:t,url:l}),o&&o.length>0&&c(o,n,a+1)})),n};var s=e=>{const{itemsList:n}=e,a=(0,t.useMemo)((()=>c(n[0].items||[])),[n]),o=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),a.map(((e,n)=>{let{title:a,url:l}=e;return t.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:l},a)}))))}},7315:function(e,n,a){a.d(n,{Y2:function(){return t},YS:function(){return o},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,a){a.d(n,{Zo:function(){return i},ah:function(){return o}});var t=a(7294);const l=t.createContext({});function o(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||r:o(e),t.createElement(l.Provider,{value:i},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-wkc-106-es-md-8bbab2fcf4298929deea.js.map