---
title: Visual Inspection Prereqs
timeToComplete: 30
updated: 2024-07-16
---
# Requisitos previos del laboratorio de inspección visual de Maximo

## Paso 1: Acceso al entorno de demostración de Maximo Application Suite

Para completar este laboratorio es necesario tener acceso a la última versión del entorno de clúster de demostración de Maximo Application Suite (MAS) en todo el mundo. Para hacer una reserva para el entorno de demostración de MAS, realice los siguientes pasos,

1.  Haga clic en este [**formulario del Monday**](https://forms.monday.com/forms/9753d4c0fbbf082f119601a5d6b01f00?r=use1) para solicitar acceso al entorno de demostración de MAS.
2.  En este formulario, introduzca su **nombre** y dirección **de correo electrónico** y haga clic en **Enviar**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.010.png)

3.  Una vez que reciba un correo electrónico notificándole que su entorno está listo para ser utilizado, localice el enlace URL (Localizador Uniforme de Recursos) en este correo electrónico para la **URL MVI** del entorno de demostración y la lista de credenciales de inicio de sesión correspondientes. Esta URL y las credenciales de inicio de sesión se utilizarán más adelante en el script de demostración. Tome nota del nombre de usuario y la contraseña para Maximo Visual Inspection (MVI), ya que serán necesarios para iniciar sesión en la aplicación en un paso posterior.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.011.png)

### Paso 2: Descargar las imágenes del tanque de entrenamiento y validación para el modelo de IA

1.  **Descargue** la carpeta de imágenes de [Seismic ](https://ibm.seismic.com/Link/Content/DCpWQCmg4Wbg889TgW8X383JR7XB)a su máquina local. Estas imágenes de tanques de sedimentación se utilizarán para entrenar el modelo de visión por ordenador en los pasos posteriores.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.016.jpeg)

2.  **Descomprima** el archivo descargado y anote la ubicación del directorio donde descomprimió el archivo. Una vez descargadas y descomprimidas las imágenes, vuelva a la pantalla MVI **Data sets** (del paso 1 de esta sección)

> Observe que en la carpeta de imágenes descargadas hay dos subcarpetas que contienen imágenes de tanques de sedimentación en condiciones de limpieza y suciedad. En esta demostración utilizaremos las imágenes de ambas carpetas para entrenar y probar el modelo de inteligencia artificial.

3.  Descomprima las carpetas de formación y de prueba y anote la ubicación del directorio en el que ha descomprimido estos archivos.

## Paso 3: Instalar la aplicación móvil MVI:

1.  Abra Apple App Store en su iPhone o iPad y busque IBM Maximo `IBM Maximo Visual Inspection` y haga clic en el resultado (IBM Maximo Visual Inspection).

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.018.jpeg)

2.  Si hace clic en el resultado de la búsqueda de la aplicación, accederá a la página de información y descarga de la aplicación. Esta página contiene una descripción general de alto nivel de la aplicación IBM MVI Mobile.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.019.jpeg)

3.  Pulsa el botón del icono de **descarga** (o el botón **Obtener**, según el dispositivo) para instalar la aplicación en tu dispositivo.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.020.jpeg)

4.  Una vez instalado tendrás un icono de Maximo Visual en una de las páginas de la pantalla de inicio de tu dispositivo.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.021.png)

5.  Si aún se encuentra en la página de MVI Mobile en la App Store, haga clic en el botón **ABRIR** para ejecutar la aplicación (o, alternativamente, si ha ido a su pantalla de inicio, haga clic en el **icono de Maximo Visual** para iniciarla).
6.  Si es la primera vez que inicia la aplicación, se le presentarán los Términos y Condiciones. Léalos y haga clic en **Aceptar** (no se muestra la figura del paso).
7.  En este punto puedes elegir entre explorar MVI Mobile (modo demo) o empezar de inmediato. Haga clic en **Ya tengo una cuenta** (puesto que ya tiene una cuenta del servidor de formación MVI - donde etiquetó las imágenes del tanque).

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.022.jpeg)

8.  Se le pedirá que permita que MVI Mobile acceda a la Cámara, Fotos y Bluetooth; haga clic en **OK** para cada uno (la figura no se muestra para este paso).
9.  Una vez que todos los permisos están permitidos, aparece la página **Nombre de este dispositivo**, introduzca un nombre de su elección en el campo Nombre del dispositivo (por ejemplo, "iPad del tanque de sedimentación"). Introduzca una ubicación de su elección en el campo Ubicación (por ejemplo, "Oficina"). A continuación, haga clic en **Siguiente**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.023.jpeg)

10. En este punto puede pulsar **Siguiente** y salir de la aplicación. Las tareas restantes forman parte de la demostración y se definen en la[ cuarta parte ](#_page0_x57.00_y546.00)del script de demostración.

## Paso 4: Regístrese en la cuenta de prueba de Twilio para recibir notificaciones por mensaje de texto (SMS)

MVI Mobile y MVI Edge están estrechamente integrados con Twilio[(https://www.twilio.com)](https://www.twilio.com), una plataforma de comunicaciones en la nube como servicio que permite a los consumidores realizar y recibir llamadas telefónicas, enviar y recibir mensajes de texto y realizar otras funciones de comunicación.

Esta integración permite a MVI Mobile y MVI Edge enviar una notificación por mensaje de texto (SMS) a un número de teléfono móvil cuando se completa una inspección. En el mensaje se incluye información sobre los objetos detectados en la imagen de inspección.

El envío de mensajes de texto a través de Twilio requiere una cuenta Twilio. También requiere que se asigne un número de teléfono a su cuenta. Este no es su propio número de teléfono personal, sino uno que Twilio proporciona para usted. Es un número de teléfono real que proporciona efectivamente una aplicación de software (MVI Mobile y Edge en este caso) con una presencia virtual dentro de la red de telefonía física. El número de teléfono Twilio se utilizará para enviar mensajes de texto a su propio teléfono móvil personal o corporativo. En otras palabras, usted recibirá mensajes de texto en su propio teléfono móvil, y vendrán del número de teléfono Twilio asignado a usted.

Twilio se ha asociado con varios proveedores de telecomunicaciones de todo el mundo, con los que ha reservado bloques de números de teléfono.

Twilio ofrece una cuenta de prueba con una cantidad precargada de crédito (esta cantidad puede variar dependiendo de dónde se encuentre en el mundo). **No se requiere tarjeta de crédito** para registrarse en esta cuenta de prueba.

Siga las instrucciones siguientes para registrarse en una cuenta Twilio y anote los datos de su cuenta en particular;

1.  Servicio de mensajería SID
2.  Cuenta SID
3.  Token de autorización
4.  Número de teléfono Twilio

**Acciones:**

1.  Visite el sitio web de Twilio[(https://www.twilio.com/).](http://www.twilio.com/\))
2.  Haga clic en el botón **Inscribirse** situado en el extremo superior derecho de la pantalla.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.024.jpeg)

3.  Rellene sus datos personales **(A)** y haga clic en el botón **Iniciar la prueba gratuita** **(B)**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.025.jpeg)

4.  Se le enviará un correo electrónico de verificación a la dirección de correo electrónico que proporcionó al registrarse en el paso anterior. Haga clic en el enlace **Confirme su dirección de correo** electrónico que recibirá en su bandeja de entrada.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.026.jpeg)

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.027.jpeg)

5.  Una vez verificado su correo electrónico, también se le pedirá que verifique su número de teléfono móvil personal o corporativo. Introduzca su **número de** teléfono móvil y haga clic en el botón **Verificar**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.028.jpeg)

6.  Una vez que hayas recibido el código de verificación en tu número de teléfono como SMS, introdúcelo

(**A)** y, a continuación, haga clic en **Enviar (B)**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.029.jpeg)

7.  Se le plantearán una serie de preguntas sobre cómo pretende utilizar Twilio. Responda a las preguntas según sea necesario (puede inspirarse en la siguiente captura de pantalla)

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.030.jpeg)

8.  Ahora se le llevará a la pantalla principal del tablero de instrumentos. Si alguna vez abandona la página, siempre puede hacer clic en **Mi primera** etiqueta de **cuenta Twilio** en la parte superior izquierda de la pantalla para volver a ella.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.031.jpeg)

Usted comenzará con un saldo de prueba de crédito. Cada número de teléfono que el suministro (sólo se utiliza uno en esta demo) y todas las interacciones de texto / API entre MVI Mobile y Twilio, y Twilio y su teléfono móvil, consumirá parte de este crédito.

9.  En el panel de control, haga clic en el botón **Obtener un número de prueba**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.032.jpeg)

10. A continuación, desplácese hacia abajo donde su número de teléfono recién aprovisionado ahora será visible bajo la etiqueta **Mi número de teléfono Twilio**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.033.jpeg)

Ahora tienes un número de teléfono asociado a tu cuenta. El siguiente paso es configurar un servicio de mensajería dentro de Twilio y asociarlo a su nuevo número de teléfono. Esto se hace con la capacidad de "Mensajería" de Twilio, que permite enviar y recibir mensajes de texto (SMS) en todo el mundo.

11. En el panel lateral izquierdo del cuadro de mandos principal, haga clic en **Mensajería****(A)** y, a continuación, en **Servicios** en el submenú que se abre.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.034.jpeg)

12. Aparece la página Servicios de**mensajería** a la derecha, haga clic en el botón azul **Crear servicios de mensajería**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.035.jpeg)

13. Cuando se le pida que cree el nuevo servicio de mensajería, introduzca un nombre de su elección para el **NOMBRE AMIGO** (por ejemplo, **"Servicio de alerta de detección del estado del tanque")** y, a continuación, seleccione **Notificar a mis usuarios** con este fin en el menú desplegable. Por último, haga clic en el botón **Crear** servicio de mensajería.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.036.jpeg)

14. A continuación se le pedirá que añada remitentes a su servicio de mensajería. Haga clic en el botón **Añadir re** mitentes.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.037.jpeg)

15. Se abre la pantalla**Añadir remitentes**. Seleccione **Número de teléfono** en la opción **Tipo de re** mitente del menú desplegable **(A)** y haga clic en **Continuar (B)**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.038.jpeg)

16. Aparecerá la página**Añadir Remitentes**. En la parte inferior de la pantalla, verá los números Twilio asignados a su cuenta. Haga clic en la casilla junto al número asignado a su cuenta. Por último, haz clic en **Añadir** números de teléfono. Ahora ha configurado las alertas de inspección por SMS que se enviarán a través de este número Twilio.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.039.jpeg)

17. Para registrar el SID del servicio de mensajería, haga clic en **Propiedades** en el panel lateral izquierdo para ver las propiedades del servicio de mensajería recién creado.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.040.jpeg)

18. Tome nota del SID del Servicio de Mensajería de la pantalla **(A)** (puede copiarlo en un nuevo archivo de bloc de notas). Después, haga clic en **Mi primera cuenta Twilio** para volver a la pantalla principal del panel **(B)**.

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.041.jpeg)

19. En la pantalla del cuadro de mandos, registre la siguiente información (puede copiarla en el mismo archivo de bloc de notas en el que registró el SID de los Servicios de Mensajería en el paso anterior).

*   Cuenta SID
*   Token de autorización (haga clic en **Mostrar** para ver el valor)
*   Número de teléfono

![](../_attachments/mvi.f2962fae-95d4-4d63-9e23-211e54c72214.042.jpeg)

20. Guarde el archivo de Bloc de notas donde registró los detalles de la cuenta Twilio. Utilizará esta información para configurar MVI Mobile/MVI Edge y la conectividad Twilio en[ la Parte cuatro : Paso 3 Integración de MVI Mobile con la cuenta Twilio.](#_page0_x57.00_y407.00)
