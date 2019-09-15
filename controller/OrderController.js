let order = require('../models/Order');

//Obtener todos los usuarios como JSON
function index(req, res) {
    order.findAll().then(orders => {
        res.json(orders);
    });
}

//Guardar un nuevo Usuario
function save(req, res) {
    order.create({
        totalAmount: req.body.totalAmount,
        totalAmountDiscount: req.body.totalAmountDiscount,
        date: req.body.date,
        idClient: req.body.idClient,
        idUser: req.body.idUser,
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
            idClient: req.body.idClient,
            idUser: req.body.idUser,
        };
        order.update(updatedOrder , {where: {idSaleOrder: req.params.id}})
            .then(user => {
                console.log(user);
                return res.status(404).json({message: "actualizado"});
            })
            .catch(function (err) {
                return res.status(404).json({message: "Server con problemas"});
            });

}

function destroy(req, res) {
    order.destroy({where: {idSaleOrder: req.params.id}})
        .then(order => {
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