"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3531],{5735:function(e,n,t){t.r(n),t.d(n,{Head:function(){return b},default:function(){return v}});var a=t(1151),l=t(7294);function r(e){const n=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",a:"a",h4:"h4",hr:"hr",h2:"h2",img:"img",ol:"ol",li:"li"},(0,a.ah)(),e.components),{CopyText:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CopyText",!0),l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"106-gestión-de-datos-virtuales"},l.createElement(n.h1,{id:"106-gestión-de-datos-virtuales"},"106: Gestión de datos virtuales"),"\n",l.createElement(n.p,null,"Watson Query puede integrarse con Watson Knowledge Catalog para gobernar los datos virtuales que se publican en un catálogo gobernado. Esta sección es ",l.createElement(n.strong,null,"optativo")," para los vendedores técnicos y los business partners que estén interesados en aprender a gobernar los datos virtualizados en ",l.createElement(n.strong,null,"Consulta de Watson")," utilización de las características de gobernabilidad de datos de ",l.createElement(n.strong,null,"Catálogo de conocimientos de Watson"),". Esta sección utiliza un ejemplo de enmascaramiento muy simple basado en nombres de columna utilizando el ",l.createElement(n.strong,null,"Redacción")," método de enmascaramiento, para demostrar la integración entre los dos servicios con la menor cantidad de configuración y configuración. It ",l.createElement(n.strong,null,"no")," utilizar el ",l.createElement(n.strong,null,"privacidad de datos avanzada")," métodos de enmascaramiento definidos en el ",l.createElement(n.a,{href:"https://vest.buildlab.cloud/es/wkc/102#7-create-data-protection-rules"},"Crear reglas de protección de datos")," sección de este ",l.createElement(n.strong,null,"Gobernanza de datos")," laboratorio arriba."),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"suministrar-un-servicio-de-catálogo-de-conocimientos-de-watson"},l.createElement(n.h4,{id:"suministrar-un-servicio-de-catálogo-de-conocimientos-de-watson"},l.createElement(n.a,{href:"#suministrar-un-servicio-de-catálogo-de-conocimientos-de-watson"},"Suministrar un servicio de catálogo de conocimientos de Watson")),"\n",l.createElement(n.hr),"\n",l.createElement(n.p,null,"Antes de continuar, debe tener un ",l.createElement(n.strong,null,"Catálogo de conocimientos de Watson")," servicio suministrado en la misma cuenta de nube y región de nube donde ",l.createElement(n.strong,null,"Consulta de Watson")," el servicio se suministra. Si no es así, vaya al ",l.createElement(n.strong,null,"Prestación de los Servicios")," paso de la ",l.createElement(n.a,{href:"https://vest.buildlab.cloud/es/wkc/getting-started"},"Cómo empezar")," Sección de la ",l.createElement(n.strong,null,"Laboratorio de tejido de datos")," y siga las instrucciones para el suministro de uno."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-crear-autorizaciones-de-servicio"},l.createElement(n.h2,{id:"1-crear-autorizaciones-de-servicio"},l.createElement(n.a,{href:"#1-crear-autorizaciones-de-servicio"},"1. Crear autorizaciones de servicio")),"\n",l.createElement(n.p,null,"Con el fin de ",l.createElement(n.strong,null,"Consulta de Watson")," para publicar en un catálogo gobernado y hacer cumplir ",l.createElement(n.strong,null,"Catálogo de conocimientos de Watson")," reglas de protección de datos, se debe crear un servicio a la autorización de servicio en su cuenta de IBM Cloud utilizando ",l.createElement(n.strong,null,"Identificación y gestión de accesos")," (IAM)."),"\n",l.createElement(n.img,{src:"/1686266602857.76881104948/image389.png",alt:""}),"\n",l.createElement(n.p,null,"Ir a la ",l.createElement(n.a,{href:"https://cloud.ibm.com/login"},"IBM Cloud")," Iniciar sesión en la página."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Especifique el ID de IBM."),"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Continuar"),"."),"\n"),"\n",l.createElement(n.p,null,"Cuando se le solicite, especifique la contraseña y las solicitudes de autenticación adicionales que se le presenten."),"\n",l.createElement(n.img,{src:"/1686266602861.76881104950/image390.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Gestionar")," en la barra de herramientas."),"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Acceso (IAM)")," elemento de menú."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602865.76881104951/image391.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Autorizaciones")," elemento de menú de la ",l.createElement(n.strong,null,"Gestionar el acceso")," del menú de la izquierda."),"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Crear"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602865.76881104952/image392.png",alt:""}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Esta cuenta")," como cuenta de origen. (Debe seleccionarse de forma predeterminada)."),"\n",l.createElement(n.li,null,"Utilización de la ",l.createElement(n.strong,null,"Servicio de origen")," desplegable, empezar a escribir ",l.createElement(n.strong,null,"Watson sabe")," en el área de búsqueda, seleccione ",l.createElement(n.strong,null,"Catálogo de conocimientos de Watson")," de la lista de servicios."),"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Todos los recursos")," para ver cómo desea ampliar el ámbito del acceso de servicio de origen."),"\n",l.createElement(n.li,null,"Utilización de la ",l.createElement(n.strong,null,"Servicio de destino")," desplegable, seleccione ",l.createElement(n.strong,null,"Consulta de Watson")," de la lista de servicios. (Debe ser el único servicio listado)."),"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Todos los recursos")," para ver cómo desea ampliar el ámbito del acceso de servicio de destino."),"\n",l.createElement(n.li,null,"Desplácese ",l.createElement(n.strong,null,"Abajo")," en la parte inferior de la página de autorizaciones."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602865.76881104953/image393.png",alt:""}),"\n",l.createElement(n.ol,{start:"13"},"\n",l.createElement(n.li,null,"Seleccione el recuadro de selección ",l.createElement(n.strong,null,"Acceso de servicio")," Sección siguiente ",l.createElement(n.strong,null,"DataAccess (sólo para autorización de servicio a servicio)"),"."),"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"Autorizar"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602869.76881104954/image394.png",alt:""}),"\n",l.createElement(n.p,null,"Verá el nuevo servicio a la autorización de servicio en su cuenta de nube en el ",l.createElement(n.strong,null,"Gestionar autorizaciones"),"."),"\n",l.createElement(n.ol,{start:"15"},"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"IBM Cloud")," en la esquina superior izquierda para volver a la página de inicio."),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-crear-catálogo-gobernado"},l.createElement(n.h2,{id:"2-crear-catálogo-gobernado"},l.createElement(n.a,{href:"#2-crear-catálogo-gobernado"},"2. Crear catálogo gobernado")),"\n",l.createElement(n.p,null,"Para poder gobernar los datos virtuales en ",l.createElement(n.strong,null,"Consulta de Watson")," , usted necesitará un ",l.createElement(n.strong,null,"gobernado")," El catálogo que se crea en la misma cuenta que el ",l.createElement(n.strong,null,"Consulta de Watson")," El servicio se despliega. Este es un catálogo que se ha creado con el ",l.createElement(n.strong,null,"Aplicar políticas de datos")," opción habilitada. No puede utilizar el ",l.createElement(n.strong,null,"Catálogo de activos de plataforma")," porque es ",l.createElement(n.strong,null,"no")," un catálogo gobernado y no puede modificarse para convertirse en uno."),"\n",l.createElement(n.p,null,"Si usted ha hecho el ",l.createElement(n.strong,null,"Gobernanza de datos")," laboratorio técnico, debe tener un catálogo gobernado creado en su cuenta. Si no es así, puede utilizar un catálogo gobernado existente, en la misma cuenta y región que el ",l.createElement(n.strong,null,"Consulta de Watson")," El servicio se despliega o crea un nuevo catálogo gobernado."),"\n",l.createElement(n.p,null,"Si necesita crear un catálogo gobernado, vaya al ",l.createElement(n.a,{href:"https://vest.buildlab.cloud/es/wkc/104#1-create-the-catalog"},"Crear el catálogo")," de este laboratorio para instrucciones sobre cómo crear uno."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-crear-regla-de-protección-de-datos"},l.createElement(n.h2,{id:"3-crear-regla-de-protección-de-datos"},l.createElement(n.a,{href:"#3-crear-regla-de-protección-de-datos"},"3. Crear regla de protección de datos")),"\n",l.createElement(n.p,null,"En este paso, creará una regla de protección de datos para proteger la información de tarjeta de crédito sensible en la ",l.createElement(n.strong,null,"CLIENTE")," activo de datos virtual, utilizando el ",l.createElement(n.strong,null,"Redacción")," Método de enmascaramiento, por lo que los valores no son visibles para aquellos que no tienen autorización para ver la información. Creará la regla de protección de datos utilizando ",l.createElement(n.strong,null,"Nombre de columna")," como criterio de la condición de regla para las columnas nombradas: ",l.createElement(n.strong,null,"CREDIT_CARD_NUMBER"),", ",l.createElement(n.strong,null,"CREDIT_CARD_CVV"),", y ",l.createElement(n.strong,null,"CREDIT_CARD_EXPIRY"),"."),"\n",l.createElement(n.img,{src:"/1686266602941.76951104992/image7.png",alt:""}),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Navegación")," (las 4 líneas horizontales apiladas en la esquina superior izquierda)."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602873.7691104955/image395.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Gobierno > Reglas"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602873.7691104956/image396.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Utilización de la ",l.createElement(n.strong,null,"Añadir regla")," desplegable, seleccione ",l.createElement(n.strong,null,"Nueva norma"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602381.7651104664/image133.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Regla de protección de datos"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602381.7651104665/image134.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Siguiente"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602873.7691104957/image397.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"Copie el texto siguiente y péguelo en el ",l.createElement(n.strong,null,"Nombre")," :"),"\n"),"\n",l.createElement(t,{text:"Cómo proteger la información de tarjeta"}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"Copie el texto siguiente y péguelo en el ",l.createElement(n.strong,null,"Definición empresarial")," :"),"\n"),"\n",l.createElement(t,{text:"Proteger todos los componentes de una tarjeta de crédito. Incluyendo el número de tarjeta de crédito, el número de validación de tarjeta de crédito (CVV) y la fecha de vencimiento de la tarjeta de crédito utilizando el método de enmascaramiento de privacidad de datos."}),"\n",l.createElement(n.p,null,"Especificar la regla ",l.createElement(n.strong,null,"Criterios")," para ",l.createElement(n.strong,null,"Condición 1")," como sigue:"),"\n",l.createElement(n.ol,{start:"8"},"\n",l.createElement(n.li,null,"Utilización de la ",l.createElement(n.strong,null,"Si")," desplegable de sentencias a la izquierda, seleccione ",l.createElement(n.strong,null,"Nombre de columna"),"."),"\n",l.createElement(n.li,null,"Utilización de la ",l.createElement(n.strong,null,"Si")," desplegable de sentencias a la derecha, seleccione ",l.createElement(n.strong,null,"contiene cualquiera"),"."),"\n",l.createElement(n.li,null,"Copie el texto siguiente y péguelo en el ",l.createElement(n.strong,null,"Nombre de columna")," :"),"\n"),"\n",l.createElement(t,{text:"CREDIT_CARD_NUMBER, CREDIT_CARD_CVV, CREDIT_CARD_EXPIRY"}),"\n",l.createElement(n.ol,{start:"11"},"\n",l.createElement(n.li,null,"Pulse el botón ",l.createElement(n.strong,null,"Introduzca")," o ",l.createElement(n.strong,null,"Retorno")," en el teclado."),"\n"),"\n",l.createElement(n.p,null,"Especificar la regla ",l.createElement(n.strong,null,"Acción")," como sigue:"),"\n",l.createElement(n.ol,{start:"12"},"\n",l.createElement(n.li,null,"Utilización de la ",l.createElement(n.strong,null,"entonces")," Declaración ",l.createElement(n.strong,null,"Acción")," desplegable a la izquierda, seleccione ",l.createElement(n.strong,null,"columnas de máscara"),"."),"\n",l.createElement(n.li,null,"Utilización de la ",l.createElement(n.strong,null,"entonces")," Declaración ",l.createElement(n.strong,null,"en columnas que contengan")," desplegable a la derecha, seleccione ",l.createElement(n.strong,null,"Nombre de columna"),"."),"\n",l.createElement(n.li,null,"El ",l.createElement(n.strong,null,"CREDIT_CARD_NUMBER"),", ",l.createElement(n.strong,null,"CREDIT_CARD_CVV"),", y ",l.createElement(n.strong,null,"CREDIT_CARD_EXPIRY")," Las columnas se rellenarán automáticamente para usted."),"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Redact")," como método de enmascaramiento en la ",l.createElement(n.strong,null,"Seleccionar método de enmascaramiento"),"."),"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"Crear"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686266602877.7691104958/image398.png",alt:""}),"\n",l.createElement(n.p,null,"Usted debe ver un ",l.createElement(n.strong,null,"¡Creado correctamente!")," y vea la nueva regla creada."),"\n",l.createElement(n.ol,{start:"17"},"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Normas")," La indicación de ruta en la esquina superior izquierda para volver a la página principal de reglas."),"\n"),"\n",l.createElement(n.p,null,"El gobierno de datos ahora está configurado para ",l.createElement(n.strong,null,"Consulta de Watson")," a utilizar ",l.createElement(n.strong,null,"Catálogo de conocimientos de Watson")," para proteger la información sensible de tarjetas de crédito.")))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var c=t(4184),i=t.n(c),s=t(4690),d=t(1140),m=t(2565),u=t(8531),g=t(3383),E=t(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:t=!0,title:a,timeToComplete:r,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),b=(null===t||t)&&n;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:o},n[0].title||a||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:i()(E.Y2,!b&&E.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},c)),b&&l.createElement(g.Z,{itemsList:n,maxDepth:2,currSection:p})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:n,title:t||a[0].title||void 0})};function v(e){return l.createElement(p,e,l.createElement(o,e))}},2565:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),l=t(1151),r=t(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var c=(0,a.memo)((function(e){let{children:n,components:t={}}=e;return a.createElement(l.Zo,{components:{...o,...t}},n)}))},3383:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),l=t(7500),r=t(4184),o=t.n(r),c=t(6488);const i=function(e,n,t){return void 0===n&&(n=[]),void 0===t&&(t=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;n.splice(n.length,0,{depth:t,title:a,url:l}),r&&r.length>0&&i(r,n,t+1)})),n};var s=e=>{const{itemsList:n}=e,t=(0,a.useMemo)((()=>i(n[0].items||[])),[n]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return t.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),t.map(((e,n)=>{let{title:t,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:l},t)}))))}},7315:function(e,n,t){t.d(n,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,t){t.d(n,{Zo:function(){return c},ah:function(){return r}});var a=t(7294);const l=a.createContext({});function r(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-wkc-106-es-md-ea1115c23d31694a1bba.js.map