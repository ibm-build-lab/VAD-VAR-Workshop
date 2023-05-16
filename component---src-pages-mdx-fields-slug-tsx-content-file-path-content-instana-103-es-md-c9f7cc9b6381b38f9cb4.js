"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7646],{7837:function(e,a,n){n.r(a),n.d(a,{Head:function(){return f},default:function(){return g}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",img:"img",ol:"ol",li:"li",code:"code",strong:"strong",em:"em"},(0,t.ah)(),e.components),{SubHeader:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),l.createElement(l.Fragment,null,l.createElement(a.h1,{id:"103-pruebas-de-capacidad-y-caos"},"103: Pruebas de capacidad y caos"),"\n",l.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",l.createElement(a.h2,{id:"analizando-una-prueba-de-capacidad-usando-instana"},l.createElement(a.a,{href:"#analizando-una-prueba-de-capacidad-usando-instana"},"Analizando una prueba de capacidad usando Instana")),"\n",l.createElement(a.p,null,"La perspectiva de la aplicación le ofrece un panel general que le da una primera impresión útil del escenario de la prueba de capacidad."),"\n",l.createElement(a.img,{src:"/1684232551637.0676862446/application-perspective.png",alt:""}),"\n",l.createElement(a.p,null,"Instana le ofrecerá información en tiempo real sobre toda su plataforma, lo que le permitirá comprender al instante las consecuencias de su prueba de capacidad."),"\n",l.createElement(a.p,null,"Llevaremos a cabo una pequeña prueba en la plataforma de tienda robótica facilitada por (",l.createElement(a.a,{href:"https://github.com/instana/robot-shop/tree/master/load-gen"},"Instana"),")."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Ejecute el script de generación de capacidad ofrecido por Instana"),"\n"),"\n",l.createElement(a.p,null,"En un terminal ejecute este comando ",l.createElement(a.code,null,"./load-gen.sh")," bajo su versión de robot-shop en el directorio ",l.createElement(a.code,null,"load-gen"),"."),"\n",l.createElement(a.p,null,"La salida del script debe parecerse a la siguiente imagen:"),"\n",l.createElement(a.img,{src:"/1684232551649.0679862449/load-gen-script.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la perspectiva de la aplicación para la tienda del robot, debería ver que el número de llamadas ha aumentado y que las llamadas erróneas también han aumentado."),"\n",l.createElement(a.img,{src:"/1684232551645.0676862448/erroneous-calls.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Utilización de la CPU y cambios de contexto durante la prueba de capacidad"),"\n",l.createElement(a.img,{src:"/1684232551641.0676862447/cpu-usage.png",alt:""}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Cuando la memoria se consume por completo, el sistema empieza a intentar solucionar la situación."),"\n",l.createElement(a.p,null,"El consumo de CPU aumenta y el ",l.createElement(a.strong,null,"cambio de contexto")," se convierte en un problema cada vez más grave, hasta que se descontrola por completo. En este punto está bastante claro cual es la causa raíz del funcionamiento de la Aplicación - no hay suficientes recursos de hardware para manejar la capacidad . Esto tiene sentido teniendo en cuenta que nuestra enorme pila tecnológica se está ejecutando en una máquina pequeña."),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Ver todas las trazas de API"),"\n"),"\n",l.createElement(a.p,null,"Exploremos una traza API seleccionándola de la lista ",l.createElement(a.em,null,"Top Traces")," para ver detalles sobre esas solicitudes.\nCon un solo clic en el enlace, cortamos a través de los datos de rastreo para obtener sólo las trazas relevantes. De la vista general podemos deducir qué servicio está involucrado y la latencia de cada una de las llamadas erróneas."),"\n",l.createElement(a.img,{src:"/1684232551653.0679862450/trace-calls.png",alt:""}),"\n",l.createElement(a.p,null,"Una prueba de capacidad, por muy realista que sea, sólo vale lo que se puede sacar de su análisis. Dado que Instana facilita aún más este proceso, es un complemento perfecto para las pruebas de capacidad."))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)};var o=n(7315),s=n(2125),i=n(403),d=n(4690),u=n(4184),m=n.n(u);const p={table:i.y6,a:i.IW,blockquote:i.R4,SubHeader:i.bU,img:i.fb,code:i.dn,QuizAlert:i.SA},E=l.memo((function(e){let{children:a}=e;return l.createElement(t.Zo,{components:{...p}},a)})),b=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0}}},children:t}=e,r=(0,l.useRef)(null),{0:c,1:i}=(0,l.useState)("");(0,l.useEffect)((()=>{if(!r.current)return;const e=r.current.querySelectorAll("h2,h3,h4,h5"),a=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&i(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{a.observe(e)})),()=>a.disconnect()}),[]);const d=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement("article",{className:m()(o.Y,!d&&o.e),ref:r},l.createElement(E,null,t)),d&&l.createElement(s.Z,{itemsList:a,maxDepth:1,currSection:c}))},f=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(d.Z,{pathname:a,title:n||t[0].title||void 0})};function g(e){return l.createElement(b,e,l.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-103-es-md-c9f7cc9b6381b38f9cb4.js.map