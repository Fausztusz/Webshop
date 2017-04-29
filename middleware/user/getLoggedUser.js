/**
 * Get the logged user from _id
 * Generally same as getUserbyId
 */
var requireOption = require('../common').requireOption;
var User = require('../../models/user');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        User.findById(req.session.user._id, function (err, user) {
            if (!err) {
                res.tpl.user = user;
                //console.log('####### RES.tpl.user #######\n' + res.tpl.user);
                next();
            }
            else {
                console.log('####### Query error at getLoggedUser #######');
                console.log(err);
                next()
            }
        });
    };

};