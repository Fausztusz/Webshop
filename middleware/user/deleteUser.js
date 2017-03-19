/**
 * Delete the user object, if its already loaded
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {

        return next();
    };

};