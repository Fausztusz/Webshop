var requireOption = require('../common').requireOption;
var Product = require('../../models/product');

/**
 * Create product from the users input
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {

        var product = new Product(req.body);
        console.log(req.body);
        product.save(function (err, cb) {
            if (err){
                console.log('##### Failed query at createProduct #####');
                console.log(err);
                next();
            }
            else return next();
        });
    };

};