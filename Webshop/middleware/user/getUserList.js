var requireOption = require('../common').requireOption;
var User = require('../../models/user');
var mongoose = require('mongoose');
var mock= require('./mockUser');
/**
 * Load all the user
 * and put them on res.tpl.user
 */
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
};
