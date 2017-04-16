var requireOption = require('../common').requireOption;
var Product = require('../../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webshop');

/**
 * Get the product list and put the product on res.tpl.product
 */
module.exports = function (objectrepository) {

    var productModel = requireOption(objectrepository, 'productModel');

    return function (req, res, next) {

        Product.find({}).exec(function (err, products) {

            if (err) {
                console.error(err);
                return res.redirect('/');
            }
            res.tpl.product = products;
            return next();
        });
    };
};