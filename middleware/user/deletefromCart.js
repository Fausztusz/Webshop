/**
 * Delete product from the Users Cart
 */

var requireOption = require('../common').requireOption;
var User = require('../../models/user');
var Product = require('../../models/product');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        User.findById(req.session.user._id).select('cart').exec(function (err, kettle) {
            var back = [];
            kettle.cart.forEach(function (item, index, array) {
                if (item._id == req.body._id) {
                    //Do nothing
                }
                else back.push(item);
            });

            User.findByIdAndUpdate(req.session.user._id, {$set: {cart: back}}, function (error, cb) {
                req.session.orderCount--;
                return next();
            });
        });
    };
};