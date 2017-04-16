var requireOption = require('../common').requireOption;
var Product = require('../../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webshop');
var mock = require('./mockProduct');
/**
 * Get the product list and put the product on res.tpl.product
 */
module.exports = function (objectrepository) {

    var productModel = requireOption(objectrepository, 'productModel');

    return function (req, res, next) {
       res.tpl.product = mock;

        Product.find().exec(function (err, products) {
            if (err) {
                console.error(err);
                return res.redirect('/');
            }

            return;
        });

/*
        Product.find().exec(function (err, animals) {
            console.log('ANIMALS::: \n \n \n');
            console.log(animals);
            console.log('MOCK::: \n \n \n');
            res.tpl.product = animals;
            console.log(res.tpl.product);

        });
*/
        return next();
    };
};

