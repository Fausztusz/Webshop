/**
 * Delete product from the Users Cart
 */

var requireOption = require('../common').requireOption;
var User = require('../../models/user');
var Product = require('../../models/product');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        // User.findById(req.session.user._id).exec(function (err, whatever) {
        //     whatever.cart.findById(req.body).exec(function (err, cb) {
        //         console.log(cb);
        //     })
        // });


        /*
         //Tudom hogy van select() de az nem volt jó
         var option = '-regdate -picture -currency -role -_id -__v -name -email -pwd';
         User.findOne({_id:req.session.user._id},{cart: {$elemMatch: req.body}}).select(option).exec(function (err, target) {
         if(err){
         console.log('Failed query at deletefromCart');
         console.log(err);
         next();
         }
         else{
         //console.log(target);
         next()
         }

         });
         */
        User.findById(req.session.user._id).select('cart').exec(function (err, cb) {
            var back = [];
            cb.cart.forEach(function (item, index, array) {
                if (item.product != req.body.product) {
                    back.push(item)
                }
            });
            User.findById(req.session.user._id).select('cart').updateOne({"$push": back}).exec(function (error, callback) {
                console.log(error);
                console.log(callback);
                return next();
            })

        });
    };

};