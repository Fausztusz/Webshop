var requireOption = require('../common').requireOption;

/**
 * Get the product list and put the product on res.tpl.product
 */
module.exports = function (objectrepository) {

    var productModel = requireOption(objectrepository, 'productModel');
    var mockProduct = require('./mockProduct');

    return function (req, res, next) {
        res.tpl.product = mockProduct;
        return next();
    };
};