"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9700],{62368:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return h}});var l=a(11151),t=a(67294);function o(e){const n=Object.assign({section:"section",h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",em:"em",blockquote:"blockquote",ol:"ol",img:"img",strong:"strong",pre:"pre",code:"code"},(0,l.ah)(),e.components),{QuizAlert:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),t.createElement(t.Fragment,null,t.createElement(a,{text:"¡Aviso! ¡El material del cuestionario se marcará así!"}),"\n",t.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"bloques-de-construcción-de-aplicaciones-de-modelos-de-grandes-modelos-de-lenguaje"},t.createElement(n.h1,{id:"bloques-de-construcción-de-aplicaciones-de-modelos-de-grandes-modelos-de-lenguaje"},"Bloques de construcción de aplicaciones de modelos de grandes modelos de lenguaje"),"\n",t.createElement(n.p,null,'Este ejercicio práctico le mostrará cómo integrar grandes modelos lingüísticos (LLM) con aplicaciones cliente. Revisaremos varios ejemplos de código Python que se pueden utilizar como "bloques de construcción" para una aplicación LLM. A continuación, utilizaremos un prototipo de interfaz de usuario simple implementado con ',t.createElement(n.a,{href:"https://streamlit.io/"},"Streamlit")," para mostrar cómo se pueden invocar estos bloques de construcción desde las aplicaciones cliente."),"\n",t.createElement(n.p,null,"La ingeniería de prompts es sólo uno de los pasos del proceso de integración de los LLM en las aplicaciones empresariales. Está fuera del alcance de esta guía proporcionar una introducción a la ingeniería de prompts en watsonx.ai. Para una introducción a la ingeniería de prompts en watsonx.ai, consulte ",t.createElement(n.a,{href:"/watsonx/watsonxai"},"los Laboratorios VEST watsonx.ai L3"),"."),"\n",t.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"requisitos-previos"},t.createElement(n.h2,{id:"requisitos-previos"},t.createElement(n.a,{href:"#requisitos-previos"},"Requisitos previos")),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Acceso a watsonx.ai."),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"IDE de Python con entorno Python 3.10"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Vamos a utilizar el IDE de Python, ",t.createElement(n.a,{href:"https://code.visualstudio.com/"},"Visual Studio Code (VSCode)")),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"También tendrá que descargar los archivos de laboratorio de ",t.createElement(n.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/tree/main/content/Watsonx/WatsonxAI/files/202"},"esta carpeta GitHub")),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Nos referiremos a esta carpeta como la carpeta ",t.createElement(n.em,null,"repo"),"."),"\n"),"\n"),"\n"),"\n"),t.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"revisión-de-guiones-para-diversas-tareas-de-llm"},t.createElement(n.h2,{id:"revisión-de-guiones-para-diversas-tareas-de-llm"},t.createElement(n.a,{href:"#revisión-de-guiones-para-diversas-tareas-de-llm"},"Revisión de guiones para diversas tareas de LLM")),"\n",t.createElement(n.p,null,"En esta sección revisaremos 4 scripts Python y 2 notebooks que pueden ser utilizados como bloques de construcción para aplicaciones LLM."),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"Nota: Es posible que las preguntas y la configuración del modelo en los guiones no siempre devuelvan resultados perfectos. Si lo desea, puede modificar las instrucciones y los parámetros del modelo."),"\n"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Cargue los siguientes scripts de la carpeta repo/scripts en su IDE de Python:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"use_case_infererence.py"),"\n",t.createElement(n.li,null,"use_case_summary.py"),"\n",t.createElement(n.li,null,"use_case_generate.py"),"\n",t.createElement(n.li,null,"use_case_transform.py"),"\n"),"\n",t.createElement(n.p,null,"Como se puede deducir de los nombres de los scripts, éstos contienen indicaciones para los casos de uso más comunes de LLM. Cada script sigue una estructura de código similar:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"La librería ",t.createElement(n.em,null,"ibm-watson-machine-learning")," se utiliza para invocar LLMs desplegados en watsonx.ai."),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"La clave de la API de IBM Cloud y el identificador del proyecto watsonx se obtienen del archivo ",t.createElement(n.em,null,".env")," (archivo de entorno) que crearemos en un paso posterior de este laboratorio."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/credentials.png",alt:"credentials"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"La función parametrizada ",t.createElement(n.strong,null,"get_model(")," ) crea un objeto modelo que se utilizará para invocar al LLM con el fin de que la aplicación obtenga respuestas para el texto que se introduzca en el prompt."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_model.png",alt:"get_model"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"La función ",t.createElement(n.strong,null,"get_prompt")," () creará el mensaje final que se pasará al modelo. La función utilizará el texto de un parámetro pasado desde la función ",t.createElement(n.strong,null,"get_review()")," o ",t.createElement(n.strong,null,"get_sample_text()")," que será analizado por el LLM."),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"Es posible organizar el código sin codificar la parte de la instrucción del prompt, pero no lo cubriremos en este laboratorio."),"\n"),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_prompt.png",alt:"get_prompt"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"La función ",t.createElement(n.strong,null,"main(")," ) especifica los parámetros del modelo e invoca las demás funciones. La función imprime la salida LLM en el terminal."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/main.png",alt:"main"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Por último, cada script contiene al menos una función que puede ser llamada por un módulo externo de Python. Por ejemplo, en ",t.createElement(n.em,null,"use_case_generate.py"),", el nombre de la función es ",t.createElement(n.strong,null,"generate"),"."),"\n"),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Antes de ejecutar los scripts, cree un archivo ",t.createElement(n.em,null,".env")," en el directorio raíz de su proyecto y añada su clave de API de IBM Cloud y el identificador de proyecto watsonx."),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"Para obtener más información, consulte ",t.createElement(n.a,{href:"https://cloud.ibm.com/docs/account?topic=account-userapikey&interface=ui#create_user_key"},"Creación de una clave de API de IBM Cloud")," y ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-project-id.html?context=wx"},"Búsqueda de su ID de proyecto watsonx"),"."),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Abra un terminal y navegue hasta la ubicación de los scripts. Ejecute cada script. Por ejemplo, puede ejecutar uno de los scripts con el siguiente comando:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"hljs language-bash"},"   python ./use_case_generate.py\n")),"\n",t.createElement(n.p,null,"Mientras revisas y ejecutas el código, plantéate las siguientes preguntas:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"¿Cómo se puede mejorar este código?"),"\n",t.createElement(n.li,null,"¿Por qué los resultados pueden ser diferentes en cada ejecución?"),"\n",t.createElement(n.li,null,"¿Qué parámetros podemos ajustar para minimizar la variabilidad del resultado del modelo y hacerlo más determinista?"),"\n",t.createElement(n.li,null,"¿Por qué implementamos este código como scripts y no como cuadernos?"),"\n",t.createElement(n.li,null,"¿Cuándo tiene sentido implementar este código como cuadernos?"),"\n"),"\n"),"\n"),"\n",t.createElement(n.p,null,"A continuación, revisaremos la aplicación Streamlit de ejemplo que utiliza estos scripts en tiempo real."),"\n"),t.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"aplicación-streamlit-ui"},t.createElement(n.h2,{id:"aplicación-streamlit-ui"},t.createElement(n.a,{href:"#aplicación-streamlit-ui"},"Aplicación Streamlit UI")),"\n",t.createElement(n.p,null,"Streamlit es un framework de código abierto para crear aplicaciones Web. Lo incluimos en nuestro taller por su facilidad de uso. Aunque los clientes pueden utilizar Streamlit, no es un requisito para la integración con watsonx.ai."),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Carga la aplicación ",t.createElement(n.em,null,"Streamlit")," de ejemplo, ",t.createElement(n.em,null,"sample_llm_ui_demo.py"),", de la carpeta repo/scripts en tu IDE de Python."),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Para ejecutar este script, necesitarás instalar algunas dependencias en tu entorno Python. Puedes hacerlo descargando el ",t.createElement(n.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/content/Watsonx/WatsonxAI/files/202/requirements.txt"},"requirements.txt")," en tu proyecto, e instalar los requisitos ejecutando este comando:"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"python3 -m pip install -r requirements.txt"),"."),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"Importante: Si está ejecutando en Windows, necesitará ejecutar este script en un entorno Anaconda Python porque es el único entorno Python soportado en Windows. Tanto VS Code como Pycharm pueden configurarse para usar Anaconda."),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Revisemos la solicitud."),"\n",t.createElement(a,{text:"Esto estará en el cuestionario."}),"\n",t.createElement(n.p,null,"La mayor parte del código crea la interfaz de usuario y gestiona las interacciones. Los LLM se invocan en el evento de clic del botón. Cada clic enviará una solicitud para ejecutar un script e inferir nuestras indicaciones."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_summary_clicked.png",alt:"main"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Cuando ejecutes el script, Python abrirá la interfaz de usuario de Streamlit en tu navegador en la url local ",t.createElement(n.a,{href:"http://localhost:8501"},"http://localhost:8501.")),"\n",t.createElement(n.p,null,"Si invoca la aplicación Python desde un terminal, y no desde un IDE, utilice el siguiente comando:"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"hljs language-bash"},"   streamlit run ./sample_llm_ui_demo.py\n")),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Ejecute la aplicación y revise los resultados."),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Puede pegar diferentes reseñas en la interfaz web"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Probar los casos de uso Resumen y Extracción"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Si desea cambiar los parámetros del modelo, cámbielos en:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.em,null,"use_case_summary.py")," - function ",t.createElement(n.em,null,"get_summary()")),"\n",t.createElement(n.li,null,t.createElement(n.em,null,"use_case_inference.py")," - función extract( ",t.createElement(n.em,null,")")),"\n"),"\n"),"\n"),"\n",t.createElement(n.p,null,"A medida que experimente con diferentes modelos, notará que la salida no es perfecta. Estamos usando el mismo prompt para todos los modelos para mantener el código relativamente simple. En la mayoría de las aplicaciones de producción, el usuario final no tendrá la opción de elegir un modelo, por lo que podrá optimizar el indicador para obtener el mejor rendimiento."),"\n",t.createElement(a,{text:"Esto estará en el cuestionario."}),"\n",t.createElement(n.p,null,"En la actualidad, el modelo llama-70b-2-chat es uno de los mejores modelos de prompts de disparo cero. Aunque pueda parecer una opción obvia utilizar siempre llama-70b-2-chat en watsonx.ai, puede que no sea posible por varias razones:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Disponibilidad del modelo en el centro de datos (debido a recursos o licencias)"),"\n",t.createElement(n.li,null,"Coste de inferencia"),"\n",t.createElement(n.li,null,"Coste de alojamiento (para implantaciones locales o en nube híbrida)"),"\n"),"\n",t.createElement(n.p,null,"Puede que sea posible conseguir resultados similares con otros modelos o con versiones más pequeñas de llama utilizando prompting de pocos disparos o un ajuste fino, por eso es importante experimentar con varios modelos y entender las técnicas de prompt/turning. Te animamos a probar otros modelos (por ejemplo, granito y mpt-7b) en el ",t.createElement(n.strong,null,"Prompt Lab")," para experimentar y optimizar el prompt, y luego pegarlo en los módulos respectivos."),"\n"),"\n"),"\n",t.createElement(n.p,null,"A continuación, veremos una implementación alternativa de un caso de uso de clasificación."),"\n"),t.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"clasificación"},t.createElement(n.h2,{id:"clasificación"},t.createElement(n.a,{href:"#clasificación"},"Clasificación")),"\n",t.createElement(n.p,null,"La clasificación es uno de los casos de uso más consolidados en el Procesamiento del Lenguaje Natural (PLN). El uso de LLMs para la clasificación tiene pros y contras. Tenga en cuenta lo siguiente cuando utilice LLM para la clasificación:"),"\n",t.createElement(a,{text:"Esto estará en el cuestionario."}),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"A favor: Los LLM no requieren datos de formación"),"\n",t.createElement(n.li,null,"Inconveniente: sin un ajuste rápido o un ajuste fino, es probable que los LLM produzcan resultados menos precisos que los modelos ML tradicionales."),"\n",t.createElement(n.li,null,"Contra: coste de la inferencia (si se utiliza una oferta Cloud, el recuento de tokens se utiliza a menudo como métrica de carga)."),"\n"),"\n",t.createElement(n.p,null,'Para nuestro siguiente caso de uso, aplicaremos el enfoque tradicional de PNL porque tenemos datos etiquetados y nos gustaría "ahorrar" nuestro uso de tokens para tareas que no pueden ser completadas por los modelos tradicionales de PNL, como el resumen y la generación de contenidos.'),"\n",t.createElement(n.p,null,"Aunque no utilizaremos el prompt o LLM de despliegue para el Paso 1 de esta sección, le recomendamos que lo complete para comprender las capacidades de clasificación de los LLM."),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"En ",t.createElement(n.strong,null,"watsox.ai")," abre el ",t.createElement(n.strong,null,"Prompt Lab")," y prueba el prompt siguiendo las siguientes instrucciones."),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Ejemplo de solicitud: ",t.createElement(n.em,null,"Bank_complaint_classification.txt")," (en la carpeta repo/prompts)"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,'El prompt utiliza la técnica de "few-shot prompting" proporcionando ejemplos en el prompt después de la instrucción.'),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Modelo: flan o mpt"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Descodificación: codiciosa (Greedy)"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Dado que se trata de un caso de uso menos creativo o basado en hechos, utilizaremos la descodificación codiciosa. El muestreo producirá una mayor variabilidad/creatividad en el contenido generado (consulte ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-model-parameters.html?context=wx&audience=wdp&locale=es"},"la documentación")," para obtener más información)."),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Datos de muestra: ",t.createElement(n.em,null,"classification_training_data.csv")," (en la carpeta repo/data)"),"\n"),"\n"),"\n",t.createElement(n.p,null,"El conjunto de datos de muestra contiene datos etiquetados: fueron etiquetados por un analista que leyó las notas y asignó la clase (categoría/sujeto) de una reclamación."),"\n",t.createElement(n.p,null,"Cuando realice la prueba, pegue una sola celda de la columna ",t.createElement(n.strong,null,"narrativa de la reclamación del consumidor")," en la parte inferior de la solicitud y asegúrese de dejar la ",t.createElement(n.strong,null,"Clase")," en blanco."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/consumer_complaint_column.png",alt:"main"}),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/classification_prompt.png",alt:"main"}),"\n",t.createElement(n.p,null,"Aunque es posible automatizar las pruebas para todos los registros narrativos de reclamaciones de consumidores y compararlos con las etiquetas de clasificación para comprobar su precisión, no utilizaremos este enfoque en el laboratorio porque agotaría nuestra asignación de tokens del servicio ",t.createElement(n.em,null,"IBM Cloud/watsonx.ai"),"."),"\n",t.createElement(n.p,null,"Habrás notado que las notas son largas y, debido a las limitaciones de fichas para cada modelo, no podremos enviar un gran número de ejemplos (aprendizaje limitado a pocas tomas)."),"\n",t.createElement(n.p,null,"Es importante comprender los siguientes datos sobre las fichas:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Los LLMs tienen un límite para el número de tokens soportados. El número máximo de tokens suele aparecer en la documentación o en la interfaz de usuario, como has visto en el ",t.createElement(n.strong,null,"Prompt Lab"),"."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/max_token_prompt_lab.png",alt:"main"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"El número máximo de tokens incluye tanto los tokens de entrada como los de salida, también conocidos como ",t.createElement(n.em,null,"ventana contextual"),". Esto significa que no se puede proporcionar un número ilimitado de ejemplos en el prompt. Además, cada modelo tiene un número máximo de tokens de salida (véase ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx&audience=wdp&locale=es"},"la documentación"),")."),"\n"),"\n"),"\n",t.createElement(n.p,null,"La limitación de la restricción de tokens puede resolverse con varios enfoques. Si necesitamos proporcionar más ejemplos al modelo, podemos utilizar un enfoque llamado Multitask Prompt Tuning (MPT) o ajuste fino. No vamos a cubrir estos enfoques avanzados en este laboratorio."),"\n"),"\n"),"\n",t.createElement(n.p,null,"En este momento, pasaremos al enfoque tradicional de la PNL."),"\n",t.createElement(n.p,null,"Watson NLP es una biblioteca Python NLP que proporciona funciones de procesamiento del lenguaje natural para el análisis sintáctico y para diversas tareas de procesamiento de textos, como el análisis de sentimientos, la extracción de palabras clave y la clasificación."),"\n",t.createElement(n.p,null,"Watson NLP contiene tanto modelos predefinidos como modelos que pueden entrenarse con datos específicos para el caso de uso. Otra de las ventajas de Watson NLP es la compatibilidad con 20 idiomas. Puede obtener más información sobre Watson NLP en ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/watson-nlp-block-catalog.html?context=wx&audience=wdp&locale=es"},"la documentación"),"."),"\n",t.createElement(n.ol,{start:"2"},"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Importe los dos cuadernos NLP de muestra de la carpeta repo/notebooks a su proyecto watsonx.ai en IBM Cloud:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.em,null,"Classify_notes_model_build")),"\n",t.createElement(n.li,null,t.createElement(n.em,null,"Classify_notes_score")),"\n"),"\n",t.createElement("br"),"\n",t.createElement(n.p,null,"Para cada cuaderno, siga las siguientes instrucciones:"),"\n",t.createElement(n.p,null,"a. En watsonx.ai pulsa sobre la tesela ",t.createElement(n.strong,null,"Trabajar con datos y modelos en cuadernos Python o R"),"."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/notebook_tile.png",alt:"main"}),"\n",t.createElement(n.p,null,"b. Haga clic en la pestaña ",t.createElement(n.strong,null,"Archivo local")," de la izquierda y navegue hasta la carpeta git repo/notebooks descargada para seleccionar un cuaderno. Asegúrese de que está seleccionado el entorno NLP Runtime 23.1."),"\n",t.createElement(n.p,null,"c. Haga clic en ",t.createElement(n.strong,null,"Crear")," para importar la libreta."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/import_notebook.png",alt:"main"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Importa los datos utilizados por los cuadernos a tu proyecto. Los archivos de datos se encuentran en ",t.createElement(n.em,null,"repo/notebooks"),"."),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.em,null,"classification_training.csv")),"\n",t.createElement(n.li,null,t.createElement(n.em,null,"notes_scoring.csv")),"\n"),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/add_data.png",alt:"main"}),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Repasemos los cuadernos. En cada cuaderno se ofrece una explicación detallada de la formación y puntuación de los modelos. En un nivel alto, el cuaderno de construcción de modelos:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Utiliza los modelos NLP precompilados de Watson para la sintaxis y la embeddings."),"\n",t.createElement(n.li,null,"Entrena una SVM y un modelo ensemble utilizando datos de muestra."),"\n",t.createElement(n.li,null,"Evalúa la precisión del modelo."),"\n",t.createElement(n.li,null,"Guarda los modelos en el proyecto."),"\n"),"\n",t.createElement(n.p,null,"El cuaderno de puntuación de modelos carga los modelos del proyecto y puntúa los datos. Asumimos que este modelo se desplegará para la puntuación por lotes. Si nuestro objetivo fuera desplegar la clasificación para la puntuación en tiempo real, entonces podríamos envolverlo en una función de Python como se describe en ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/ml-deploy-py-function-write.html?context=wx&audience=wdp&locale=es"},"la documentación"),"."),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Abra el cuaderno de ",t.createElement(n.em,null,"construcción del modelo")," (Classify_notes_model_build) en modo ",t.createElement(n.em,null,"Edición")," y realice los cambios necesarios antes de ejecutarlo (consulte las instrucciones del cuaderno):"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Genere un token de acceso al proyecto. Consulte las instrucciones ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/token.html?context=cpdaas&locale=es"},"aquí"),"."),"\n",t.createElement(n.li,null,"Regenerar/actualizar el código para cargar los datos de entrenamiento."),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Abra el cuaderno de ",t.createElement(n.em,null,"puntuación del modelo")," (Classify_notes_score) en modo ",t.createElement(n.em,null,"Edición")," y realice los cambios necesarios antes de ejecutarlo (consulte las instrucciones del cuaderno):"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Genere un token de acceso al proyecto. Consulte las instrucciones ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/token.html?context=cpdaas&locale=es"},"aquí"),"."),"\n",t.createElement(n.li,null,"Regenerar/actualizar el código para cargar los datos de puntuación."),"\n"),"\n",t.createElement(n.p,null,"Mientras revisas y ejecutas el código, plantéate las siguientes preguntas:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"¿Por qué implementamos este código como un cuaderno y no como scripts?"),"\n",t.createElement(n.li,null,"¿Puede implementarse este código en scripts Python fuera de watsonx.ai?"),"\n",t.createElement(n.li,null,"¿Cómo se puede mejorar este código?"),"\n"),"\n"),"\n"),"\n",t.createElement(n.p,null,"Existen varias opciones para desplegar la calificación de modelos de clasificación. Aunque puede desplegarse para la calificación en tiempo real, un escenario más común es ejecutar la calificación como un trabajo por lotes. Un trabajo por lotes puede invocarse bajo demanda."),"\n",t.createElement(n.p,null,"En este laboratorio no vamos a recorrer el proceso de despliegue. Puedes leer más sobre el despliegue por lotes en ",t.createElement(n.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/deploy-batch-details.html?context=wx&audience=wdp&locale=es"},"la documentación"),". En este momento, en watsonx.ai tendrás que envolver el código de puntuación del modelo en una ",t.createElement(n.em,null,"función Python")," y desplegar la función para la puntuación por lotes."),"\n",t.createElement(n.p,null,"Es posible que haya observado que la aplicación ",t.createElement(n.em,null,"Streamlit")," de ejemplo tiene una opción ",t.createElement(n.strong,null,"Analizar datos")," en el menú desplegable de casos de uso."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/analyze_data_dropdown.png",alt:"main"}),"\n",t.createElement(n.ol,{start:"7"},"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"Ejecute la aplicación Streamlit y haga clic en el botón ",t.createElement(n.strong,null,"Ejecutar análisis"),"."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/run_analysis.png",alt:"main"}),"\n",t.createElement(n.p,null,"En nuestra aplicación de ejemplo no estamos invocando la calificación por lotes a petición, sino simplemente proporcionando el archivo con los resultados de la calificación."),"\n",t.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/202/get_notes_data.png",alt:"main"}),"\n",t.createElement(n.p,null,"En una implementación de producción, esta función debería realizar dos pasos:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Invocar el modelo configurado para la calificación por lotes (como se describe en la documentación mencionada)"),"\n",t.createElement(n.li,null,"Cargar resultados de la fuente de datos que se utilizó como fuente de datos de salida de la calificación por lotes."),"\n"),"\n"),"\n"),"\n"),t.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"conclusión"},t.createElement(n.h2,{id:"conclusión"},t.createElement(n.a,{href:"#conclusión"},"Conclusión")),"\n",t.createElement(n.p,null,"Ha finalizado el laboratorio de Bloques de Construcción de Aplicaciones LLM. En este laboratorio has aprendido:"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Cómo escribir trabajos con la biblioteca watson-machine-learning para invocar LLMs que realizan varias tareas."),"\n",t.createElement(n.li,null,"Cómo escribir código modular que pueda utilizarse desde aplicaciones cliente."),"\n",t.createElement(n.li,null,"Cómo implementar un caso de uso de clasificación con la biblioteca Watson NLP."),"\n",t.createElement(n.li,null,"Sobre la relación coste-rendimiento del enfoque basado en LLM y los casos en los que tiene más sentido aprovechar el ML tradicional (clasificación)."),"\n"))))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?t.createElement(n,e,t.createElement(o,e)):o(e)};var s=a(94184),c=a.n(s),i=a(24690),m=a(81140),u=a(48623),d=a(88531),p=a(13383),E=a(27315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:l,timeToComplete:o,updated:r}}},children:s}=e,i=(0,t.useRef)(null),{0:g}=(0,t.useState)(""),b=(null===a||a)&&n;return t.createElement(t.Fragment,null,t.createElement(m.Z,{timeToComplete:o,updated:r},n[0].title||l||""),t.createElement(d.Z,{className:E.YS},t.createElement("article",{className:c()(E.Y2,!b&&E.ey),ref:i},t.createElement(u.Z,{components:{h1:()=>null}},s)),b&&t.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:l}}}}=e;return t.createElement(i.Z,{pathname:n,title:a||l[0].title||void 0})};function h(e){return t.createElement(g,e,t.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-level-4-202-es-md-ec8d108560a766a849ad.js.map