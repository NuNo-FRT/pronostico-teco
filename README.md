# Pronostico del tiempo
## Dependencias
 - Express.js
 - Axios
 - Dotenv
 - swagger-jsdoc
 - swagger-ui-express
 - eslint (devDependencies)
 - jest (devDependencies)
 - supertest (devDependencies)
## Servicios Apis

>  ### API de geolocalización de IP https://www.abstractapi.com/ 
> Obtención de la ubicación de cualquier IP mundial que ofrece datos de
> ciudad, región, país, latitud y longitud.

>  ### API de datos meteorológicos https://openweathermap.org/ 
> Recopilación de datos meteorológicos actuales y pronósticos.

## Inicializar servidor 
En caso de clonar el repositorio, se debe realizar los siguientes comando.
Crear un archivo **.env** en la raíz del directorio y colocar las variables de entorno proporcionadas en el archivo **.example.env** (cabe mencionar que se requerirá las key de los servicios api mencionados anteriormente). Una vez finalizado este paso se deberá colocar los siguientes comandos.
 - **npm install**
 - **npm start**
## Rutas Apis del servidor
Cualquiera de las siguientes rutas devuelven una respuesta en formaton json. En caso de introducir una ciudad inexistente o producirse algún error se retornara un json con el siguiente formato. `{msg:'Error en la peticion'}`
En caso de realizar un testeo desde el navegador puede utilizar la ruta `/doc` donde estara el servicio de **swagger.** 
>  ### /v1/location
> Devuelve los datos de ubicación city según ip-api.

>  ### /v1/current[/city]
> City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual.

>  ### /v1/forecast[/city]
>  City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días.

### Test rutas del servidor
Una vez realizados los pasos para inicializar el servidor, puede ejecutar el comando `npm test`  para que se realicen un testeo a las rutas del servidor `/v1/current/city` y `/v1/forecast/city` donde se reemplazara el parámetro city con las siguientes ciudades.
 - Salta
 - Cordoba
 - Mar del Plata
 - London
 - asdasd

Donde se espera que los primeros cuatro test devuelvan una respuesta de códigos de estado http **200** y el ultimo test devuelva una respuesta **400**.