let rim = require('../models/Rim');
let detail = require('../models/Detail');
let bcrypt = require('bcrypt-nodejs');

//Obtener todos los usuarios como JSON
function index(req, res) {
    rim.findAll(
        {
            include:
                [
                    {
                        model: detail
                    }
                ]
        }
    ).then(users => {
        res.json(users);
    });
}

//Guardar un nuevo Usuario
function save(req, res) {
    rim.create({
        brand: req.body.brand,
        hoop: req.body.hoop,
        price: req.body.price,
        amountAvailable: req.body.amountAvailable,
        description: req.body.description,
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
        brand: req.body.brand,
        hoop: req.body.hoop,
        price: req.body.price,
        amountAvailable: req.body.amountAvailable,
        description: req.body.description,
        active: req.body.active,
    };
    rim.update(updatedRim, {where: {idRim: req.params.id}})
        .then(user => {
            console.log(user);
            return res.status(404).json({message: "actualizado"});
        })
        .catch(function (err) {
            return res.status(404).json({message: "Server con problemas"});
        });

}

function destroy(req, res) {
    rim.destroy({where: {idRim: req.params.id}})
        .then(user => {
            return res.status(404).json({message: "Eliminado"});
        })
        .catch(function (err) {
            return res.status(404).json({message: "No ha sido eliminado"}); // server problems
        });
}

module.exports = {
    destroy,
    update,
    index,
    save
};