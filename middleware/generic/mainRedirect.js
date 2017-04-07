/**
 * If the user is LOGGED in, it redirects to /webshop.html
 * ELSE redirect to /login.
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};