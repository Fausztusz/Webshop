/***
 * If the user is not logged in, redirects to /
 */

var user = require('../../models/user');
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};