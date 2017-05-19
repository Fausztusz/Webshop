var requireOption = require('../common').requireOption;

/**
 * Update product if we have the data for it
 */
module.exports = function (objectrepository) {
    var Product = requireOption(objectrepository, 'productModel');
    return function (req, res, next) {
        //Somehow this stuff pass a reference for the req.body
        //So I save the _id before I delete it
        var options = {};
        options = req.body;
        var productID = req.body._id;
        // If the user left the field blank the value don't change
        delete options._id; //Protect the original _id
        if (!req.body.name) delete options.name;
        if (!req.body.description) delete options.description;
        if (!req.body.picture) delete options.picture;
        if (req.body.price == 0) delete options.price;

        Product.findByIdAndUpdate(productID, {$set: options}, function (err, product) {
            if (err) {
                console.log('##### Failed query at updateProduct #####');
                console.log(err);
                res.error = err;
            }
            return next();

        });


    };

};