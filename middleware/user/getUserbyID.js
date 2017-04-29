/**
 * Get user from _id
 */
var requireOption = require('../common').requireOption;
var User = require('../../models/user');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        User.findById(req.body._id, function (err, user) {
            if (!err) {
                res.tpl.user = user;
                next();
            }
            else {
                console.log('####### Query error at getUserbyID #######');
                console.log(err);
                next()
            }
        });
    };
};