const express = require('express');

const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ngos', NgoController.list);
routes.post('/ngos', NgoController.create);

routes.get('/profile', ProfileController.list);

routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


routes.get('/', (request, response) => {
  // return response.send("Olá, dev!");
  return response.json({
    texto: "Olá, dev!",
    evento: "Semana Omnistack 11.0",
    aluno: "Ana Paula Mauad"
  });
});

module.exports = routes;