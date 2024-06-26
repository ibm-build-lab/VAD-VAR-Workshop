"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5652],{28827:function(e,a,n){n.r(a),n.d(a,{Head:function(){return E},default:function(){return g}});var t=n(11151),l=n(67294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",ol:"ol",h3:"h3",code:"code",blockquote:"blockquote",strong:"strong",h4:"h4"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"laboratorio-105-creación-de-aplicaciones-de-ia-con-langchain-y-watsonxai"},l.createElement(a.h1,{id:"laboratorio-105-creación-de-aplicaciones-de-ia-con-langchain-y-watsonxai"},"Laboratorio 105: Creación de aplicaciones de IA con Langchain y watsonx.ai"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"acerca-de"},l.createElement(a.h2,{id:"acerca-de"},l.createElement(a.a,{href:"#acerca-de"},"Acerca de")),"\n",l.createElement(a.p,null,l.createElement(a.a,{href:"https://docs.langchain.com/docs/"},"Langchain")," es un framework que ayuda a desarrollar aplicaciones más complejas basadas en IA. Funciona con muchos modelos lingüísticos y proporciona un conjunto de herramientas para que la lógica compleja sea más manejable, como el envío de instrucciones del sistema y humanas, indicaciones dinámicas utilizando plantillas, encadenamiento, análisis sintáctico de salida, etc."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Módulo python de Langchain: ",l.createElement(a.a,{href:"https://pypi.org/project/langchain/"},"https://pypi.org/project/langchain/")),"\n",l.createElement(a.li,null,"Compatible con Python y Javascript / Typescript"),"\n"),"\n",l.createElement(a.p,null,"Hoy, vamos a utilizar Langchain con ",l.createElement(a.a,{href:"https://www.ibm.com/products/watsonx-ai"},"watsonx.ai"),", y el ",l.createElement(a.a,{href:"https://ibm.github.io/watson-machine-learning-sdk/"},"IBM Watson Machine Learning SDK"),", específicamente la ",l.createElement(a.a,{href:"https://ibm.github.io/watson-machine-learning-sdk/fm_extensions.html#langchain"},"extensión Langchain")," del SDK. Langchain ya proporciona soporte para más de 70 LLMs, pero en caso de que quieras soportar uno nuevo, también hay funcionalidad LLM personalizada. Más ",l.createElement(a.a,{href:"https://python.langchain.com/docs/modules/model_io/models/llms/custom_llm"},"información")),"\n",l.createElement(a.p,null,"La primera parte comienza con una suave introducción a algunas capacidades de langchain, incluyendo cómo inicializar un modelo, cambiar los parámetros de inferencia, utilizar plantillas, cadenas y cargar documentos. A continuación, pasaremos a la síntesis de grandes cantidades de texto, que incluye más partes móviles."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"hay-dos-maneras-de-llevar-a-cabo-estos-laboratorios-langchain"},l.createElement(a.h2,{id:"hay-dos-maneras-de-llevar-a-cabo-estos-laboratorios-langchain"},l.createElement(a.a,{href:"#hay-dos-maneras-de-llevar-a-cabo-estos-laboratorios-langchain"},"Hay dos maneras de llevar a cabo estos laboratorios Langchain:")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Localmente en su ordenador portátil (requiere un poco más de experiencia técnica)"),"\n",l.createElement(a.li,null,"En nuestro entorno compartido JupyterHub"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-ejecute-los-laboratorios-localmente-en-su-ordenador-portátil"},l.createElement(a.h2,{id:"1-ejecute-los-laboratorios-localmente-en-su-ordenador-portátil"},l.createElement(a.a,{href:"#1-ejecute-los-laboratorios-localmente-en-su-ordenador-portátil"},"1: Ejecute los laboratorios localmente en su ordenador portátil:")),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"requisitos-previos"},l.createElement(a.h3,{id:"requisitos-previos"},l.createElement(a.a,{href:"#requisitos-previos"},"Requisitos previos")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Asegúrese de que Python >= 3.11 está instalado.",l.createElement(a.code,null,"python3 --version"),")"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En tu terminal, navega a una carpeta donde quieras trabajar, y crea un Entorno Virtual: ",l.createElement(a.code,null,"python3 -m venv langchain")," Nota: puede que quieras crear esto en una carpeta donde no haya otros proyectos o control de versiones para evitar conflictos."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Active el entorno:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"MacOS + Linux: ",l.createElement(a.code,null,"source langchain/bin/activate")),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Windows:"),"\n",l.createElement("pre",null,l.createElement(a.p,null,l.createElement(a.code,null,"# If using Windows cmd.exe: (command prompt)"),"\n",l.createElement(a.code,null,"langchain\\Scripts\\activate.bat"),"\n",l.createElement(a.code,null,"# If using Windows PowerShell:"),"\n",l.createElement(a.code,null,"langchain\\Scripts\\Activate.ps1"))),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Puedes desactivarlo después con ",l.createElement(a.code,null,"deactivate")," cuando termines con los laboratorios."),"\n"),"\n"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Descargue ",l.createElement(a.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/requirements.txt"},"requirements.txt")," en su carpeta e instale los requisitos: ",l.createElement(a.code,null,"python3 -m pip install -r requirements.txt")),"\n"),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"NOTA"),": Si utiliza Windows, puede que tenga que aumentar la longitud por defecto de su variable PATH. Instrucciones ",l.createElement(a.a,{href:"https://www.howtogeek.com/266621/how-to-make-windows-10-accept-file-paths-over-260-characters/"},"aquí")),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"NOTA"),": ChromaDB requiere que tengas instaladas las herramientas de compilación de C++. Si la instalación muestra un error similar a ",l.createElement(a.code,null,"Failed building wheel for chroma-hnswlib"),", intente lo siguiente:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Windows: Instalar ",l.createElement(a.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"herramientas de compilación de C++")),"\n",l.createElement(a.li,null,"MacOS: Asegúrese de que las herramientas de línea de comandos de Xcode están instaladas ",l.createElement(a.code,null,"xcode-select --install")),"\n",l.createElement(a.li,null,"Linux (basado en Debian): Asegúrese de tener instalada la versión Python -dev y los ",l.createElement(a.code,null,"sudo apt install python3.11-dev build-essential")),"\n"),"\n"),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Descarga ",l.createElement(a.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/env-test.ipynb"},"env-test.ipynb")," en tu carpeta, e inicia Jupyter Notebook con ",l.createElement(a.code,null,"jupyter notebook"),". Ejecuta el ",l.createElement(a.code,null,"env-test.ipynb")," para asegurarte de que no hay ningún error con tu entorno o dependencias."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Utilizando el archivo ",l.createElement(a.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/.env.example"},".env.example"),", cree un archivo ",l.createElement(a.code,null,".env")," en su carpeta."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Rellene los valores del archivo ",l.createElement(a.code,null,".env"),":"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"NOTA:")," Si asiste a un taller, pregunte a sus instructores cómo adquirir estos valores. A continuación encontrará instrucciones adicionales sobre cómo encontrar estos valores."),"\n"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Puede encontrar",l.createElement(a.code,null,"API_KEY")," en ",l.createElement(a.a,{href:"https://cloud.ibm.com/iam/apikeys"},"cloud.ibm.com/iam/apikeys")," después de iniciar sesión. (Si no tiene acceso para crear una clave de API, póngase en contacto con el administrador de su cuenta de IBM Cloud)."),"\n",l.createElement(a.li,null,l.createElement(a.code,null,"IBM_CLOUD_URL")," debe ser la URL de su nube IBM regional, como en ",l.createElement(a.code,null,".env.example"),'. Puede encontrar este valor haciendo clic en el botón "Ver código" situado junto al menú desplegable del modelo en Prompt Lab. Debe utilizar la URL ',l.createElement(a.strong,null,"sin")," rutas (también conocida como ",l.createElement(a.a,{href:"https://us-south.ml.cloud.ibm.com"},"https://us-south.ml.cloud.ibm.com)"),"."),"\n"),"\n",l.createElement("img",{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/karsten/ws-follow-on/content/Watsonx/WatsonxAI/images/105/instance-url.png",alt:"instance-url",width:"250"}),"\n",l.createElement("img",{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/karsten/ws-follow-on/content/Watsonx/WatsonxAI/images/105/instance-url-2.png",alt:"instance-url",width:"250"}),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.code,null,"PROJECT_ID")," puede encontrarse en ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/projects/?context=wx"},"proyectos watsonx")," en la pestaña de gestión de proyectos. El id también forma parte de la URL: ",l.createElement(a.code,null,"https://dataplatform.cloud.ibm.com/projects/<project-id>/manage/general?context=wx")),"\n"),"\n"),"\n"),"\n",l.createElement(a.p,null,"Después de terminar los requisitos previos, complete los laboratorios con los cuadernos jupyter a continuación."),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-ejecuta-los-laboratorios-en-jupyterhub"},l.createElement(a.h2,{id:"2-ejecuta-los-laboratorios-en-jupyterhub"},l.createElement(a.a,{href:"#2-ejecuta-los-laboratorios-en-jupyterhub"},"2: Ejecuta los laboratorios en JupyterHub:")),"\n",l.createElement(a.p,null,"Para el taller, tu instructor te proporcionará la URL de JupyterHub, y tu correo electrónico estará en la lista de permitidos. Sólo tendrás que registrarte para establecer tu contraseña, y luego podrás iniciar sesión. Después sigue las instrucciones de los cuadernos de introducción y resumen. Son los mismos cuadernos que aparecen a continuación. Si es necesario, siga el paso 7 anterior para obtener los valores de las variables de entorno."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"cuadernos"},l.createElement(a.h3,{id:"cuadernos"},l.createElement(a.a,{href:"#cuadernos"},"Cuadernos:")),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"primera-parte"},l.createElement(a.h4,{id:"primera-parte"},l.createElement(a.a,{href:"#primera-parte"},"Primera parte:")),"\n",l.createElement(a.p,null,"Completa el laboratorio siguiendo las instrucciones del cuaderno: ",l.createElement(a.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/langchain-intro.ipynb"},"langchain-intro.ipynb")),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"segunda-parte"},l.createElement(a.h4,{id:"segunda-parte"},l.createElement(a.a,{href:"#segunda-parte"},"Segunda parte:")),"\n",l.createElement(a.p,null,"Completa el laboratorio siguiendo las instrucciones del cuaderno: ",l.createElement(a.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/105/langchain-summarization.ipynb"},"langchain-summarization.ipynb"))))))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},c=n(94184),i=n.n(c),s=n(24690),u=n(81140),m=n(48623),d=n(88531),p=n(13383),h=n(27315);const b=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:b}=(0,l.useState)(""),E=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:o},a[0].title||t||""),l.createElement(d.Z,{className:h.YS},l.createElement("article",{className:i()(h.Y2,!E&&h.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},c)),E&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:b})))},E=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function g(e){return l.createElement(b,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-105-es-md-1833dda091972773c260.js.map