let client = require('../models/Client');

// Obtener todos los usuarios como JSON
function index(req, res) {
    client.findAll().then(users => {
        res.json(users);
    });
}
function getById(request, response) {
    client.findOne({where:{id: request.params.id }}).then(user => {
        response.json(user);
    });
}
//Guardar un nuevo Usuario
function save(req, res) {
    client.create({
        ci: req.body.ci,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        lastName: req.body.lastName,
        motherLastName: req.body.motherLastName,
        phone: req.body.phone,
        active: req.body.active,
    }).then(function (data) {
        if (data) {
            res.status(200).send({message: 'se registro'});
        } else {
            res.status(400).send({message: 'no se registro'});
        }
    });
}

// user.create(req.body)
//     .then(user => res.json(user));

function update(req, res) {

    const updatedRim = {
        ci: req.body.ci,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        lastName: req.body.lastName,
        motherLastName: req.body.motherLastName,
        phone: req.body.phone,
        active: req.body.active,
    };
    client.update(updatedRim, {where: {id: req.params.id}})
        .then(user => {
            console.log(user);
            return res.status(200).json({message: "actualizado"});
        })
        .catch(function (err) {
            return res.status(404).json({message: "Server con problemas"});
        });

}

function destroy(req, res) {
    client.destroy({where: {id: req.params.id}})
        .then(user => {
            return res.status(200).json({message: "Eliminado"});
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
