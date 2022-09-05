
const {Router} = require('express');
const { locationClima, currentClima, forecastClima } = require('../controllers/climaController');
const router = Router();

/**
 *  @swagger
 *  components:
 *      schemas:
 *          Location:
 *              type: object
 *              properties:
 *                  ip_address:
 *                      type: string
 *                      description: IP del usuario
 *                  city:
 *                      type: string
 *                      description: Nombre de la ciudad de la IP del usuario
 *                  region:
 *                      type: string
 *                      description: Nombre de la region de la IP del usuario
 *                  postal_code:
 *                      type: string
 *                      description: Codigo postal de la IP del usuario
 *                  country:
 *                      type: string
 *                      description: Pais de la IP del usuario
 *                  country_code:
 *                      type: string
 *                      description: Codigo del pais del usuario
 *                  continent:
 *                      type: string
 *                      description: Continente de la IP del usuario
 *                  continent_code:
 *                      type: string
 *                      description: Codigo del continente
 *                  longitude:
 *                      type: number
 *                      description: Longitud de la IP del usuario
 *                  latitude:
 *                      type: number
 *                      description: Longitud de la IP del usuario
 *                  timezone:
 *                      type: object
 *                      description: Zona horaria de la IP del usuario
 *          Current:
 *              type: object
 *              properties:
 *                  coord:
 *                      type: object
 *                      description: coordenadas de la ciudad
 *                  weather:
 *                      type: array
 *                      description: clima de la ciudad
 *                  main:
 *                      type: object
 *                      description: temeratura de la ciudad
 *                  visibility:
 *                      type: number
 *                      description: temeratura de la ciudad
 *                  wind:
 *                      type: object
 *                      description: viento de la ciudad
 *                  sys:
 *                      type: object
 *                      description: informacion del pais de la ciudad
 *                  timezone:
 *                      type: number
 *                      description: zona horaria de la ciudad
 *                  id:
 *                      type: number
 *                      description: id de la ciudad
 *                  name:
 *                      type: string
 *                      description: Nombre de la ciudad
 *                  fecha:
 *                      type: string
 *                      description: Fecha de la ciudad
 *          Forecast:
 *              type: object
 *              properties:
 *                  list:
 *                      type: array
 *                      description: Listado del clima de la ciudad
 *                  city:
 *                      type: object
 *                      description: Informacion del clima de la ciudad
 */

/**
 *  @swagger
 *  /v1/location:
 *      get:
 *          summary: Obtener informacion del usuario segun la ip
 *          tags: [Location]
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              items:
 *                                  $ref: '#/components/schemas/Location'
 *              400:
 *                  description: Bad request
 *              404:
 *                  description: The service does not exist
 *              500:
 *                  description: Server Error
 */

router.get('/location',[],locationClima);

/**
 * @swagger
 *  /v1/current:
 *      get:
 *          summary: Obtener informacion del clima actual segun la ip
 *          tags: [Current]
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              items:
 *                                  $ref: '#/components/schemas/Current'
 *              400:
 *                  description: Bad request
 *              404:
 *                  description: The service does not exist
 *              500:
 *                  description: Server Error
 */

/**
 * @swagger
 *  /v1/current/{city}:
 *      get:
 *          summary: Obtener informacion del clima actual segun la ciudad
 *          tags: [Current]
 *          parameters:
 *              -   in: path
 *                  name: city
 *                  type: string
 *                  required: true
 *                  description: Nombre de la ciudad
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              items:
 *                                  $ref: '#/components/schemas/Current'
 *              400:
 *                  description: Bad request
 *              404:
 *                  description: The service does not exist
 *              500:
 *                  description: Server Error
 */


router.get('/current/:city?',[],currentClima);

/**
 *  @swagger
 *  /v1/forecast: 
 *      get:
 *          summary: Obtener informacion del clima en los proximos cinco dias segun la ip
 *          tags: [Forecast]
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              items:
 *                                  $ref: '#/components/schemas/Forecast'
 *              400:
 *                  description: Bad request
 *              404:
 *                  description: The service does not exist
 *              500:
 *                  description: Server Error
 */

/**
 *  @swagger
 *  /v1/forecast/{city}: 
 *      get:
 *          summary: Obtener informacion del clima en los proximos cinco dias segun la ciudad
 *          tags: [Forecast]
 *          parameters:
 *              -   in: path
 *                  name: city
 *                  type: string
 *                  required: true
 *                  description: Nombre de la ciudad
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              items:
 *                                  $ref: '#/components/schemas/Forecast'
 *              400:
 *                  description: Bad request
 *              404:
 *                  description: The service does not exist
 *              500:
 *                  description: Server Error
 */

router.get('/forecast/:city?',[],forecastClima);

module.exports = router;