const user = require('../models/User');
const role = require('../models/Role');
const bcrypt = require('bcrypt-nodejs');

//Obtener todos los usuarios como JSON
function index(req, res) {
    user.findAll({
        include:
            [
                {
                    model: role
                }
            ]
    }).then(users => {
        res.json(users);
    });
}

function getById(request, response) {
    user.findOne({where:{id: request.params.id }}).then(user => {
        response.json(user);
    });
    user.findOne({where:{id: request.params.id }},
    {
        include:
            [
                {
                    model: role
                }
            ]
    }).then(users => {
        res.json(users);
    });
}

//Guardar un nuevo Usuario
function save(req, res) {
    console.log(req.body);

    bcrypt.hash(req.body.password, null, null, function (err, hash) {
        user.create({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            lastName: req.body.lastName,
            motherLastName: req.body.motherLastName,
            nick: req.body.nick,
            password: hash,
            active: req.body.active,
            roleId: req.body.roleId
        }).then(function (data) {
            if (data) {
                res.status(200).send({message: 'se registro'});
            } else {
                res.status(400).send({message: 'no se registro'});
            }
        });
    });
}

// user.create(req.body)
//     .then(user => res.json(user));

function update(req, res) {

    bcrypt.hash(req.body.password, null, null, function (err, hash) {
        const updatedUser = {
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            lastName: req.body.lastName,
            motherLastName: req.body.motherLastName,
            nick: req.body.nick,
            password: hash,
            active: req.body.active,
            roleId: req.body.roleId
        };
        user.update(updatedUser, {where: {id: req.params.id}})
            .then(user => {
                console.log(user);
                return res.status(200).json({message: "actualizado"});
            })
            .catch(function (err) {
                return res.status(404).json({message: "Server con problemas"});
            });
    });
}

function destroy(req, res) {
    user.destroy({where: {id: req.params.id}})
        .then(user => {
            return res.status(200).json({message: "eliminado"});;
        })
        .catch(function (err) {
            console.log(err);
            return res.status(404).json({message: "No ha sido eliminado"}); // server problems
        });
}

module.exports = {
    destroy,
    update,
    index,
    save,
    getById
};
