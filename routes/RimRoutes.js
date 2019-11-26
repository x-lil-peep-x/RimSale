const express = require('express');
const RimController = require('../controller/RimController');
const api = express.Router();

//Rutas de llantas
api.get('/index',RimController.index);
api.post('/create',RimController.save);
api.put('/update/:id',RimController.update);
api.delete('/delete/:id',RimController.destroy);

module.exports = api;
