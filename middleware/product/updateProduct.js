var requireOption = require('../common').requireOption;
var Product = require('../../models/product');

/**
 * Update product if we have the data for it
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {

        var option = {};
        option = req.body;
        // If the user left the field blank the value don't change
        delete option._id; //Protect the original _id
        if (!req.body.name) delete option.name;
        if (!req.body.description) delete option.description;
        if (!req.body.picture) delete option.picture;
        if (req.body.price == 0) delete option.price;

        Product.findByIdAndUpdate(req.body._id, {$set: option}, function (err, product) {
            if (err) {
                console.log('##### Failed query at updateProduct #####');
                console.log(err);
                return next();
            }
            else {
                return next();
            }
        });


    };

};