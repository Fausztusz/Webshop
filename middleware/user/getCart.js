/**
 * Get all product from the users cart
 */
var Product = require('../../models/product');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.tpl.cart = [];

        res.tpl.user.cart.forEach(function (item) {
            Product.findById(item.product).exec(function (err, productid) {
                if (err) {
                    console.log('##### Failed query at getCart #####');
                    console.log(err);
                    //Handle the error
                    next();
                }
                else {
                    res.tpl.cart.push(productid);
                    console.log('DONE');
                }
            });
        });
        return next();
    };
};