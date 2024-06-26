"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1301],{64988:function(e,a,n){n.r(a),n.d(a,{Head:function(){return g},default:function(){return h}});var t=n(11151),l=n(67294);function o(e){const a=Object.assign({section:"section",h1:"h1",p:"p",em:"em",h2:"h2",a:"a",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote",img:"img",h3:"h3",pre:"pre",code:"code",ol:"ol"},(0,t.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"204-implementar-los-casos-de-uso-del-rag"},l.createElement(a.h1,{id:"204-implementar-los-casos-de-uso-del-rag"},"204: Implementar los casos de uso del RAG"),"\n",l.createElement(a.p,null,"En este laboratorio, revisará y ejecutará ejemplos de aplicaciones LLM que implementan el patrón de ",l.createElement(a.em,null,"Generación Aumentada de Recuperación (RAG)")," para trabajar con LLM. Ampliaremos los conceptos aprendidos en los laboratorios anteriores."),"\n",l.createElement(n,{text:"¡Aviso! ¡El material del cuestionario se marcará así!"}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"software-acceso-y-archivos-necesarios"},l.createElement(a.h2,{id:"software-acceso-y-archivos-necesarios"},l.createElement(a.a,{href:"#software-acceso-y-archivos-necesarios"},"Software, acceso y archivos necesarios")),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Para completar este laboratorio necesitarás acceso a ",l.createElement(a.strong,null,"watsonx.ai")),"\n",l.createElement(a.li,null,"Algunos conocimientos de Python"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"visión-general-de-rag"},l.createElement(a.h2,{id:"visión-general-de-rag"},l.createElement(a.a,{href:"#visión-general-de-rag"},"Visión general de RAG")),"\n",l.createElement(a.p,null,l.createElement(a.em,null,"RAG (Generación Aumentada de Recuperación)"),' es uno de los casos de uso más comunes en la IA generativa porque nos permite trabajar con datos "externos al modelo", por ejemplo, datos que no se utilizaron para el entrenamiento del modelo. Muchos casos de uso requieren trabajar con datos propios de la empresa, y es una de las razones por las que la RAG se utiliza con frecuencia en aplicaciones de IA generativa. RAG también nos permite añadir algunos guardarraíles a la salida generada y reducir la alucinación.'),"\n",l.createElement(a.p,null,"RAG puede aplicarse a varios casos de uso de la IA, entre ellos:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Preguntas y respuestas"),"\n",l.createElement(a.li,null,"Resumen"),"\n",l.createElement(a.li,null,"Generación de contenidos"),"\n"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,'Una analogía de "interacción humana" de la GAR es proporcionar un documento a una persona y pedirle que responda a una pregunta basándose en la información que contiene.'),"\n"),"\n",l.createElement(a.p,null,'RAG es "un patrón de aplicación" que puede aplicarse con múltiples tecnologías. Sin embargo, hay dos pasos clave:'),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Durante el paso de ",l.createElement(a.strong,null,"recuperación"),", buscamos en una base de conocimientos (documentos, sitios web, bases de datos, etc.) para encontrar información relevante para las instrucciones enviadas al modelo. La recuperación puede basarse en la búsqueda por palabras clave o en algoritmos más avanzados, como la similitud semántica."),"\n",l.createElement(a.li,null,"El paso de ",l.createElement(a.strong,null,"generación"),' es similar al de la generación en casos de uso no RAG. La principal diferencia es que la información recuperada en el primer paso se proporciona como "contexto" (incluido en la solicitud). Indicar al modelo que se base únicamente en el "contexto recuperado", en contraste con el conocimiento general que se utilizó para entrenar al LLM, es el paso clave para evitar alucinaciones.'),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/204/2.png",alt:"rag_diagram"}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"bases-de-datos-vectoriales"},l.createElement(a.h3,{id:"bases-de-datos-vectoriales"},l.createElement(a.a,{href:"#bases-de-datos-vectoriales"},"Bases de datos vectoriales")),"\n",l.createElement(a.p,null,'La "base de conocimientos" para la etapa de recuperación suele implementarse como una ',l.createElement(a.strong,null,"base de datos")," vectorial. Las bases de datos vectoriales no son nuevas, se utilizan desde hace varios años para la búsqueda semántica."),"\n",l.createElement(a.p,null,"La búsqueda semántica es una técnica de búsqueda cuyo objetivo es comprender la intención y el contexto de la consulta de un usuario. Es más avanzada que la búsqueda tradicional basada en palabras clave, que se basa en la coincidencia de palabras clave específicas."),"\n",l.createElement(a.p,null,"Algunas bases de datos vectoriales populares son:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Chroma (código abierto)"),"\n",l.createElement(a.li,null,"Milvus"),"\n",l.createElement(a.li,null,"Elasticsearch"),"\n",l.createElement(a.li,null,"SingleStore"),"\n",l.createElement(a.li,null,"Pinecone"),"\n",l.createElement(a.li,null,"Redis"),"\n",l.createElement(a.li,null,"Postgres"),"\n"),"\n",l.createElement(a.p,null,"Algunas bases de datos vectoriales, como _Chroma, son bases de datos en memoria, lo que las convierte en una buena opción para experimentar y crear prototipos de casos de uso de RAG. Las bases de datos en memoria no necesitan ser instaladas ni configuradas. Esto se debe a que todos sus datos se almacenan en memoria volátil durante el tiempo de ejecución del programa. Sin embargo, el inconveniente de esto es que tendremos que cargar los datos cada vez que ejecutemos la aplicación."),"\n",l.createElement(a.p,null,"Las bases de datos vectoriales almacenan datos no estructurados en formato numérico. Para los casos de uso de IA, utilizamos un término específico para describir los datos no estructurados convertidos: ",l.createElement(a.strong,null,l.createElement(a.em,null,l.createElement(a.em,null,"embeddings"))),". Las ",l.createElement(a.em,null,"embeddings")," se crean utilizando un modelo de embeddings, por ejemplo, un popular modelo de código abierto ",l.createElement(a.em,null,"word2vec_"),"."),"\n",l.createElement(a.p,null,'Una de las principales características de las incrustaciones es la capacidad de preservar las relaciones. Con las incrustaciones, las palabras pueden "sumarse y restarse" como los vectores en matemáticas. Uno de los ejemplos más famosos que lo demuestran es el siguiente:'),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-txt"},"king - man + woman = queen\n")),"\n",l.createElement(a.p,null,"En otras palabras, la suma de los vectores asociados a las palabras ",l.createElement(a.em,null,"rey")," y ",l.createElement(a.em,null,"mujer")," y la resta de ",l.createElement(a.em,null,"hombre")," es igual al vector asociado a la palabra ",l.createElement(a.em,null,"reina"),". Este ejemplo describe una relación de género."),"\n",l.createElement(a.p,null,"Otro ejemplo podría ser:"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-txt"},"Paris - France + Poland = Warsaw\n")),"\n",l.createElement(a.p,null,"La diferencia vectorial entre ",l.createElement(a.em,null,"París")," y ",l.createElement(a.em,null,"Francia")," recoge aquí el concepto de capital."),"\n",l.createElement(a.p,null,'He aquí un ejemplo de búsqueda semántica de la palabra "educación". Fíjese en las palabras "punto más cercano" de la tabla. La medida está en números porque la búsqueda se realizó utilizando datos vectoriales (numéricos).'),"\n",l.createElement(a.p,null,l.createElement(a.a,{href:"https://projector.tensorflow.org/"},"Aquí")," puede seguir experimentando."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/204/3.png",alt:"semantic_search_example"}),"\n",l.createElement(a.p,null,"Basándonos en lo que hemos debatido hasta ahora, podemos sacar las siguientes conclusiones:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Disponemos de varias ",l.createElement(a.em,null,"bases de datos vectoriales")," para la aplicación de los casos de uso de la GAR"),"\n",l.createElement(a.li,null,"Podemos elegir entre varios ",l.createElement(a.em,null,"modelos de embeddings")," para convertir datos no estructurados en vectores"),"\n",l.createElement(a.li,null,"La recuperación de información relevante es el primer paso en el patrón GAR, y la calidad puede verse afectada por la elección de una base de datos vectorial y un modelo de embeddings."),"\n"),"\n",l.createElement(n),"\n",l.createElement(a.p,null,"Además de los factores mencionados, la carga de datos en la base de datos vectorial requiere ",l.createElement(a.strong,null,l.createElement(a.em,null,'"chunking"')),", que es el proceso de dividir el texto en secciones que se cargan en la base de datos. No existe una pauta única para definir los trozos porque el tamaño óptimo depende del contenido con el que trabajemos."),"\n",l.createElement(a.p,null,'Para los casos de uso de IA generativa, normalmente empezamos con trozos de tamaño fijo, que deben ser "semánticamente significativos". Por ejemplo, si en su documento cada párrafo tiene aproximadamente 200 palabras, convierta el número de palabras en varios tokens (puede variar según el LLM) y utilice este número como tamaño inicial del chunk. Además del tamaño del chunk, también tenemos que especificar el solapamiento (la misma información en más de un chunk).'),"\n",l.createElement(a.p,null,'Los proveedores de modelos deberían publicar información sobre el tamaño de trozo y el porcentaje de solapamiento recomendados para casos de uso específicos. Sin embargo, aunque se publique esta información, los desarrolladores tendrán que experimentar para encontrar el tamaño de trozo óptimo. Si no encuentra información sobre el solapamiento recomendado, puede empezar con un 10 por ciento (especificado en el formato de "número de tokens", por ejemplo, ',l.createElement(a.em,null,"100")," si su tamaño de chunk es ",l.createElement(a.em,null,"1000"),")."),"\n",l.createElement(a.p,null,"En resumen, debemos seguir los siguientes pasos a la hora de implementar el caso de uso RAG:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Seleccione una base de datos vectorial. Al trabajar con watsonx.ai, debemos confirmar que la base de datos vectorial seleccionada es compatible. ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-rag.html?context=wx&audience=wdp"},"Consulte la documentación de IBM para conocer las últimas actualizaciones"),"."),"\n",l.createElement(a.li,null,"Seleccione el modelo de embeddings. Confirma que el modelo de embeddings funciona con la base de datos vectorial seleccionada."),"\n",l.createElement(a.li,null,"Experimente con el tamaño de los trozos."),"\n"),"\n",l.createElement(a.p,null,'Como hemos comentado anteriormente, la segunda parte del caso de uso RAG, el envío de instrucciones a LLM, es similar a los patrones no RAG. Los desarrolladores deben prestar especial atención a los límites de tokens porque el contenido recuperado se añadirá a la instrucción. Si se supera el límite de tokens en la entrada, el modelo no podrá generar la salida. Esta comprobación deberá implementarse como "código personalizado" en sus aplicaciones LLM.'),"\n",l.createElement(a.p,null,"La API WML devuelve errores si se supera el tamaño del token."),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/204/4.png",alt:"wml_error"}),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"rag-en-documentos-con-langchain-y-chromadb"},l.createElement(a.h2,{id:"rag-en-documentos-con-langchain-y-chromadb"},l.createElement(a.a,{href:"#rag-en-documentos-con-langchain-y-chromadb"},"RAG en documentos con LangChain y ChromaDB")),"\n",l.createElement(a.p,null,"Para ejecutar el laboratorio de esta sección comenzaremos por iniciar sesión en la plataforma watsonx; después de navegar a la página de inicio de watsonx ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/wx/home"},"aquí"),", querremos abrir el editor de Notebook que podemos utilizar para ejecutar el notebook asociado a este laboratorio."),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Si no sabes cómo acceder a watsonx.ai o no estás seguro de cómo abrir el editor de cuadernos, sigue ",l.createElement(a.a,{href:"/watsonx/watsonxai/100#how-do-i-import-a-jupyter-notebook-in-watsonxai"},"este enlace de referencia")," que te guiará a través del proceso para acceder a watsonx.ai y abrir el editor de cuadernos Jupyter."),"\n"),"\n",l.createElement(a.p,null,"Utilice los siguientes valores para este laboratorio:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre:")," ",l.createElement(a.code,null,"{uniqueid}-rag-chromadb")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"URL del cuaderno:")," ",l.createElement(a.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/204/use_case_rag.ipynb")),"\n"),"\n",l.createElement(a.p,null,"Después de iniciar y crear tu cuaderno, puedes seguir y ejecutar cada celda del cuaderno para completar el laboratorio. El cuaderno contiene comentarios que explican lo que hace el código en cada celda, así como cualquier entrada necesaria que puedas necesitar para ejecutar con éxito una celda."),"\n",l.createElement(a.p,null,"¡Buena suerte!"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"rag-utilizando-un-sitio-web-opcional"},l.createElement(a.h2,{id:"rag-utilizando-un-sitio-web-opcional"},l.createElement(a.a,{href:"#rag-utilizando-un-sitio-web-opcional"},"RAG utilizando un sitio web (opcional)")),"\n",l.createElement(a.p,null,"Este cuaderno es muy similar al anterior. Sin embargo, a diferencia del anterior, en lugar de obtener el contenido de un archivo determinado, se implementará un raspador web que permita responder a una pregunta sobre una página web determinada."),"\n",l.createElement(a.p,null,"Este cuaderno se puede ejecutar dentro de la plataforma watsonx; después de navegar a la página de inicio de watsonx ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/wx/home"},"aquí"),", querremos abrir el editor de cuadernos que podemos utilizar para ejecutar el cuaderno asociado a este laboratorio."),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,"Si no sabes cómo acceder a watsonx.ai o no estás seguro de cómo abrir el editor de cuadernos, sigue ",l.createElement(a.a,{href:"/watsonx/watsonxai/100#how-do-i-import-a-jupyter-notebook-in-watsonxai"},"este enlace de referencia")," que te guiará a través del proceso para acceder a watsonx.ai y abrir el editor de cuadernos Jupyter."),"\n"),"\n",l.createElement(a.p,null,"Utilice los siguientes valores para este laboratorio:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"Nombre:")," ",l.createElement(a.code,null,"uniqueid-rag-web-chromadb")),"\n",l.createElement(a.li,null,l.createElement(a.strong,null,"URL del cuaderno:")," ",l.createElement(a.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/204/use_case_rag_web.ipynb")),"\n"),"\n",l.createElement(a.p,null,"Después de iniciar y crear tu cuaderno, puedes seguir y ejecutar cada celda del cuaderno para completar el laboratorio. El cuaderno contiene comentarios que explican lo que hace el código en cada celda, así como cualquier entrada necesaria que puedas necesitar para ejecutar con éxito una celda.")))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(o,e)):o(e)};var s=n(94184),c=n.n(s),i=n(24690),d=n(81140),m=n(48623),u=n(88531),p=n(13383),b=n(27315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:o,updated:r}}},children:s}=e,i=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),g=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:o,updated:r},a[0].title||t||""),l.createElement(u.Z,{className:b.YS},l.createElement("article",{className:c()(b.Y2,!g&&b.ey),ref:i},l.createElement(m.Z,{components:{h1:()=>null}},s)),g&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(E,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-level-4-204-es-md-eb58b45a032ac787b6b1.js.map