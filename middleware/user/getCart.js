/**
 * Get all product from the users cart
 */
var Product = require('../../models/product');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.tpl.cart = [];
        var done = 0;
        res.tpl.total = 0;
        res.tpl.user.cart.forEach(function (item, index) {
            Product.findById(item.product).exec(function (err, product) {
                if (err) {
                    console.log('##### Failed query at getCart #####');
                    console.log(err);
                    res.tpl.cart = {};
                    //Handle the error
                    next();
                }
                else if (product) {
                    product['quantity'] = item.quantity;
                    product['identity'] = item._id;
                    res.tpl.cart.push(product);
                    res.tpl.total += item.quantity * product.price;
                    done++;
                    if (done === res.tpl.user.cart.length) next();
                }
                else { //If a product was deleted which was in the cart
                    done++;
                    if (done === res.tpl.user.cart.length) next();
                }
            });
        });

        //If the cart is empty
        if (res.tpl.user.cart.length === 0) {
            res.tpl.user.cart = {};
            return next();
        }
    };
};