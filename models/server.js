const express = require('express');
const {createServer } = require('http');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerView = {
  definition:{
    openapi: '3.0.0',
    info: {
      title: 'Pronostico del Tiempo',
      version: '1.0.0'
    }
  },
  apis: [`${path.join(__dirname, '../routes/*.js')}`],
};
class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.server = createServer(this.app);

    this.middlewares();
    this.rutas();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.static('public'));
    this.app.set('trust proxy',['loopback', 'linklocal', 'uniquelocal']);
  }

  rutas() {
    this.app.use('/v1', require('../routes/clima'));
    this.app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerView)));
  }
  listen() {
    this.server.listen(this.port, ()=>{
      console.log('El servidor se encuentra corriendo en el puerto', this.port);
    });
  }
}

module.exports = Server;