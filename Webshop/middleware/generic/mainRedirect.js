/**
 * If the user is LOGGED in, it redirects to /webshop
 * ELSE redirect to /login.
 */
module.exports = function () {

    return function (req, res, next) {
        if(req.session && req.session.user)
            return res.redirect('/webshop');
        else
            return res.redirect('/login');
    };

};