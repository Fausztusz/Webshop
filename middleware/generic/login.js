var requireOption = require('../common').requireOption;
var User = require('../../models/user');

/**
 *  Manages session start and creates session-id.
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        if (req.method === "POST") {
            if (req.body.name.trim() && req.body.pwd.trim()) {
                User.findOne(req.body).exec(function (err, user) {
                    // console.log('USER ', user, '/USER');
                    if (err) {
                        res.tpl.msg.push({type: "error", message: "Hiba történt. Nem tudtuk elvégezni a műveletet."});
                        console.error(err);
                        return next();
                    }
                    if (!user) {
                        res.tpl.msg.push({type: "error", message: "Hiba történt. Rossz felhasználónév, vagy jelszó."});
                        return next();
                    }
                    delete user.password;	//Remove the password from the user
                    req.session.user = user;
                    res.tpl.role = user.role;
                    res.tpl.msg.push({type: "success", message: "Sikeres bejelentkezés!"});
                    return res.redirect('/');
                });
            }
            else {
                res.tpl.msg.push({type: "error", message: "Hiba történt. Töltsd ki a kötelező mezőket!"});
                return next();
            }
        }
        else {
            return next();
        }
    };

}