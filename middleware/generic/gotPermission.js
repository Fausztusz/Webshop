/**
 * If the user is got permit to execute a command, redirects to next
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};