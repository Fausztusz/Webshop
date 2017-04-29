/**
 * Get a product from id
 */
var requireOption = require('../common').requireOption;
var Product = require('../../models/product');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        Product.findById(req.body._id, function (err, product) {
            if (!err) {
                res.tpl.product = product;
                next();
            }
            else {
                console.log('####### Query error at getProductbyID #######');
                console.log(err);
                next()
            }
        });
    };

};
