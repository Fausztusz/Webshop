var requireOption = require('../common').requireOption;

/**
 * Ends current session and destroys the session-id.
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        req.session.destroy(function (err) {
            if (err) console.log(err);
        });
        return res.redirect('/');
    };

};
