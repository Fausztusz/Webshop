var requireOption = require('../common').requireOption;
var User = require('../../models/user');
/**
 * Load all the user
 * and put them on res.tpl.users
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
