/**
 * Delete the product object, if its already loaded
 */
var Product = require('../../models/product');
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function (req, res, next) {

        Product.findByIdAndRemove(req.body._id, function (err ,cb) {
            if (err){
                console.log('##### Failed query at deleteProduct #####');
                console.log(err);
            }
            return next();
        });
    };

};