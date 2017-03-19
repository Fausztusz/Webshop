var requireOption = require('../common').requireOption;

/**
 * Get the product list and put the product on res.tpl.product
 */
module.exports = function (objectrepository) {

    var productModel = requireOption(objectrepository, 'productModel');

    return function (req, res, next) {

        /**
         * Something like:
         *  productModel.find({},function(err,results){
     *    if (err){
     *      return next(new Error('Error getting product'));
     *    }
     *
     *    res.tpl.product = results;
     *    return next();
     *  )
     */

        return next();
    };

};