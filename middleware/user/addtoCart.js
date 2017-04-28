/**
 * Add a product to the users cart
 */
var requireOption = require('../common').requireOption;
var User = require('../../models/user');
var Product = require('../../models/product');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        userid = req.session.user._id;
        produtid = req.body._id;
        quantity = req.body.quantity;
        if (quantity !== 0 && produtid) {
            User.findByIdAndUpdate(userid, {
                $push: {
                    cart: {
                        product: produtid,
                        quantity: quantity
                    }
                }
            }, function (err, user) {
                if (err) return handleError(err);
                console.log('Succesfully updated the cart');
            });
        }
        else console.log('Failed to push to cart');
        return next();
    };

};