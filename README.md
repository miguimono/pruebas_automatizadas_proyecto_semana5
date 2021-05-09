# Pruebas Automatizadas - Proyecto Semana 5

## Integrantes:

* Santiago Alejandro Salinas Vargas
* Oscar Javier Jiménez Mejía

## Descripción:
Este repositorio contiene el código y los resultados obtenidos del proceso de pruebas E2E con las herramientas Puppeteer y Kraken de la semana 5 para la plataforma Ghost.

## Funcionalidades bajo pruebas:

Las funcionalidades bajo prueba estan alrededor de los POSTS en la plataforma Ghost. 
Se ha identificado cada funcionalidad por una letra, que servirá para explicar la lógica de los escenarios de pruebas:

* L: login. Esta funcionalidad corresponde al ingreso a la plataforma Ghost. Aplica a todos los escenarios.
* O: logout. Esta funcionalidad corresponde a la salida de a la plataforma Ghost. Aplica a todos los escenarios.
* C: crear. Esta funcionalidad corresponde a la creación de un nuevo POST en la plataforma Ghost.
* M: modificar. Esta funcionalidad corresponde a la modificacion de un POST que no se hayan publicado.
* MP: modificar. Esta funcionalidad corresponde a la modificacion de un POST que ya se hayan publicado (actualización).
* P: publicar. Esta funcionalidad corresponde a la publicación de un POST en la plataforma Ghost.
* E: Eliminar. Esta funcionalidad corresponde a la eliminación de un POST en la plataforma Ghost.

## Escenarios de pruebas:

Los excenarios de pruebas combinan en diferente orden las funcionalidades en prueba para poder determinar posibles fallos generados en su interacción.
Algunos escenarios requieren tareas previas para alistar el sistema Ghost para ejecutarlo, a estas actividades se les definió como : precondicion.
De igual manera algunos escenarios requieren tareas posteriores para dejar el sistema Ghost igual que antes de aplicar el escenario de pruebas, a estas actividades se les definió como : postcondicion

* Escenario de prueba 1: LCO
Este escenario combina las funcionalidades Logueo y Creación de un POST. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 2: LMO
Este escenario combina las funcionalidades Logueo y Modificación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 3: LPO
Este escenario combina las funcionalidades Logueo y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 4: LEO
Este escenario combina las funcionalidades Logueo y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 5: LCMO
Este escenario combina las funcionalidades Logueo, Creación y Modificación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 6: LCPO
Este escenario combina las funcionalidades Logueo, Creación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 7: LCEO
Este escenario combina las funcionalidades Logueo, Creación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 8: LMEO
Este escenario combina las funcionalidades Logueo, Modificación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 9: LMPO
Este escenario combina las funcionalidades Logueo, Modificación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 10: LMCO 
Este escenario combina las funcionalidades Logueo, Modificación y Creación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 11: LPEO
Este escenario combina las funcionalidades Logueo, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 12: LPMO
Este escenario combina las funcionalidades Logueo, Publicación y Modificación (actualización) de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 13: LMPEO
Este escenario combina las funcionalidades Logueo, Modificación, Publicación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 14: LMCEO
Este escenario combina las funcionalidades Logueo, Modificación, Creación y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 15: LCMPO
Este escenario combina las funcionalidades Logueo, Creación, Modificación y Publicación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 16: LPMEO
Este escenario combina las funcionalidades Logueo, Publicación, Modificación (actualización) y Eliminación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 17: LMCPO
Este escenario combina las funcionalidades Logueo, Modificación, Creación y Publicación de un POST prexistente en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 18: LCPMO
Este escenario combina las funcionalidades Logueo, Creación, Publicación y Modificación (actualización) de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 19: LCPEO
Este escenario combina las funcionalidades Logueo, Creación, Publicación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

* Escenario de prueba 20: LCPMEO
Este escenario combina las funcionalidades Logueo, Creación, Publicación, Modificación y Eliminación de un POST en la plataforma Ghost. Finalmente sale de la plataforma (Logout).

## PUPPETEER:

### Instalación:

Una vez se clona el repositorio es necesario instalara las librerías necesarias para su funcionamiento. Para ello ubiquese en la carpeta "pupperteer" y ejecute el siguiente comando:

npm install

Luego de unos minutos concluirá la instalación de todas las librerías necesarias.

### Ejecución:

Para poder ejecutar los escenarios de pruebas se debe seguir los siguientes pasos:

1. Ejecutar la plataforma Ghost en el entorno local bajo el puerto 2368. Si esto no es así se requiere modificar el archivo puppeteer/src/index.js en las lineas 100 y 101 con la información adecuada. 
2. Ubicarse en la carpeta "puppeteer" y ejecutar el comando: node ./src/index.js

### Resultados:

Los resultados obtenidos de la ejecución de pueden pobservar por la consola y en la generación de imágenes PNG guardadas en la carpeta puppeteer/images. El nombre de cada imágen contiene el escenario de prueba (EP) a la cual pertenece, las funcionalidades que hacen parte del escenario de pruebas, indice y nombre de la funcionalidad específica probada e índice interno de los pasos dentro de la funcionalidad. 
Por ejemplo: EP02-LMO-02-modificar-01.png, se interpreta como:
* Escenario de Pruebas 02 : EP02.
* Informacipon de la secuencia de pruebas : Login, Modificación y Salida : LMO.
* Pertenencia de la prueba a la funcionalidadad : 02-modificar.
* Índice de la imagen en los pasos de prueba de la funcionalidad : 01. 

## KRAKEN:
