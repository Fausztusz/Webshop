/**
 * If the user is got permit to execute a command, redirects to next
 * else redirect to /
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (req.session.user.role === 1) {
            return next();
        }
        else res.redirect('/')
    };
};