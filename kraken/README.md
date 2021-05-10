## Kraken
### Instalación
Como precondición se debe tener en cuenta que el proyecto dentro de la carpeta *kraken* tiene dependencia del compilado de **KrakenMobile-1.0.9** por lo cual las dos carpetas deben existir al mismo nive para que la prueba funcione.
Se creó el archivo ```propetires.json``` en el cual se colocan las variables para la ejecución de la prueba.
### Ejecución
La forma de ejecutar la prueba es mediante el comando ```bundle exec kraken-mobile run --properties="properties.json"```
### Resultados
Los resultados de las pruebas se pueden validar en la carpeta *reports*, en la cual se genera una nueva subcarpeta por cada escenario ejecutado.