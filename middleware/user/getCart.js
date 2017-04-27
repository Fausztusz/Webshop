/**
 * Get the product from the users by _id cart and put to to the res.tpl.product
 */
var requireOption = require('../common').requireOption;
var User = require('../../models/user');
var Product= require('../../models/product');
module.exports = function (objectrepository) {
    return function (req, res, next) {


        return next();
    };

};

/*
var requireOption = require('../common').requireOption;
var User = require('../../models/user');
module.exports = function (objectrepository) {

    //var userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        User.find({}).exec(function (err, users) {

            if (err) {
                console.error(err);
                return res.redirect('/');
            }
            res.tpl.users = users;
            return next();
        });
    };
};*/
