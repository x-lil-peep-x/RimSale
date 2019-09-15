var express = require('express');
var UserController = require('../controller/UserController');
var api = express.Router();

//Rutas de usuario
api.get('/index',UserController.index);
api.post('/create',UserController.save);
api.put('/update/:id',UserController.update);
api.put('/delete/:id',UserController.destroy);

module.exports = api;