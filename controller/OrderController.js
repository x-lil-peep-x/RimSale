let order = require('../models/Order');
let client = require('../models/Client');
let user = require('../models/User');

//Obtener todos los usuarios como JSON
function index(req, res) {
    order.findAll({
        include:
            [
                {
                    model: client
                },
                {
                    model: user
                }
            ]
    }).then(orders => {
        res.json(orders);
    });
}

//Guardar un nuevo Usuario
function save(req, res) {
    order.create({
        totalAmount: req.body.totalAmount,
        totalAmountDiscount: req.body.totalAmountDiscount,
        date: req.body.date,
        clientId: req.body.clientId,
        userId: req.body.userId,
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

    const updatedOrder = {
        totalAmount: req.body.totalAmount,
        totalAmountDiscount: req.body.totalAmountDiscount,
        date: req.body.date,
        clientId: req.body.clientId,
        userId: req.body.userId,
    };
    order.update(updatedOrder, {where: {id: req.params.id}})
        .then(user => {
            console.log(user);
            return res.status(404).json({message: "actualizado"});
        })
        .catch(function (err) {
            return res.status(404).json({message: "Server con problemas"});
        });

}

function destroy(req, res) {
    order.destroy({where: {id: req.params.id}})
        .then(order => {
            return res.status(404).json({message: "Eliminado"});
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
    save
};