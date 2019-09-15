const express = require('express');
const OrderController = require('../controller/OrderController');
const api = express.Router();

//Rutas de llantas
api.get('/index',OrderController.index);
api.post('/create',OrderController.save);
api.put('/update/:id',OrderController.update);
api.put('/delete/:id',OrderController.destroy);

module.exports = api;