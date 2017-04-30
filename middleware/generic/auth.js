/***
 * If the user is not logged in, redirects to /
 */

var user = require('../../models/user');
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function (req, res, next) {
        //Put the user's role to the res.tpl
        if (req.session.user) {
            res.tpl.user=req.session.user;
            res.tpl.role = req.session.user.role;
            return next();
        }
        else
            res.redirect('/');
    };
};