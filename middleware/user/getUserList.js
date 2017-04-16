var requireOption = require('../common').requireOption;

/**
 * Load all the user
 * and put them on res.tpl.user
 */
module.exports = function (objectrepository) {
        var mockUser = require('./mockUser');

        return function (req, res, next) {
            res.tpl.users = mockUser;
            return next();
        };

};
