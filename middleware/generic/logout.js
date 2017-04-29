var requireOption = require('../common').requireOption;

/**
 * Ends current session and destroys the session-id.
 */
var user = require('../../models/user');
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        req.session.user = undefined;
        req.session.orderCount = undefined;
        return res.redirect('/');
    };

};
