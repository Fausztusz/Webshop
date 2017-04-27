var requireOption = require('../common').requireOption;

/**
 * Validate the user's data. If it's valid than pass the data to the db.
 * Else redirect to the register page
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        return next();
    };

};
