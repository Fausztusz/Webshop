/**
 * Get a user from id
 */
var requireOption = require('../common').requireOption;
var User = require('../../models/user');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        User.findOne({_id: req.session.user._id}, function (err, user) {
            if (!err) {
                res.tpl.user = user;
                //console.log('####### RES.tpl.user #######\n' + res.tpl.user);
                next();
            }
            else {
                console.log('####### Query error #######' + err);
                next()
            }
        });
    };

};
