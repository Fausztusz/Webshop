var requireOption = require('../common').requireOption;

/*
 * Get the products from the user cart
 * and pass them to res.tpl.cart
 */
module.exports = function (objectrepository) {

    var commentModel = requireOption(objectrepository, 'commentModel');

    return function (req, res, next) {

        return next();
    };

};


/*sudo ignore content bellow
 * res.tpl.cart=[
 * {
 * productID='',
 * productName='',
 * description='',
 * imageSRC='',
 * quantity=0,
 * price=0,
 * },
 *
 * {
 * productID='',
 * productName='',
 * description='',
 * imageSRC='',
 * quantity=0,
 * price=0,
 * },
 * ...
 * ]
 * */