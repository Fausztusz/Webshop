/**
 * Delete the user object, if its already loaded
 */

var requireOption = require('../common').requireOption;
var User = require('../../models/user');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        User.findByIdAndRemove(req.body._id, function (err, user) {
            if (err) {
                console.log('###### Failed query at deleteUser #####');
                console.log(err);
                return next();
            }
            else return next();
        });
    };

};