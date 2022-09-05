require('dotenv').config();
const Servidor = require('../models/server');
const server = new Servidor();
const request = require('supertest');
server.listen();

describe('GET curent 5 city', ()=>{
  test('prueba clima de Salta', async()=>{
    const response = await request(server.app).get('/v1/current/salta').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de Cordoba', async()=>{
    const response = await request(server.app).get('/v1/current/cordoba').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de Mar del Plata', async()=>{
    const response = await request(server.app).get('/v1/current/Mar del Plata').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de London', async()=>{
    const response = await request(server.app).get('/v1/current/London').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de una ciudad inexistente', async()=>{
    const response = await request(server.app).get('/v1/current/asdasd').send();
    expect(response.statusCode).toBe(400);
  });
});

describe('GET forecast 5 city', ()=>{
  test('prueba clima de Salta', async()=>{
    const response = await request(server.app).get('/v1/forecast/salta').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de Cordoba', async()=>{
    const response = await request(server.app).get('/v1/forecast/cordoba').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de Mar del Plata', async()=>{
    const response = await request(server.app).get('/v1/forecast/Mar del Plata').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de London', async()=>{
    const response = await request(server.app).get('/v1/forecast/London').send();
    expect(response.statusCode).toBe(200);
  });
  test('prueba clima de una ciudad inexistente', async()=>{
    const response = await request(server.app).get('/v1/forecast/asdasd').send();
    expect(response.statusCode).toBe(400);
  });
});