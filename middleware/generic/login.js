var requireOption = require('../common').requireOption;
var User = require('../../models/user');
var bcrypt = require('bcryptjs');

/**
 *  Manages session start and creates session-id.
 */

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
        if (req.method === "POST") {
            if (req.body.name.trim() && req.body.pwd.trim()) {
                User.findOne({name:req.body.name}).exec(function (err, user) {
                    if (err) { //If the query runs into an error
                        res.tpl.msg.push({type: "error", message: "Failed request"});
                        console.error(err);
                        return next();
                    }
                    if (!user) { //If the user does not exist
                        res.tpl.msg.push({type: "error", message: "Failed request"});
                        return next();
                    }
                    if (!bcrypt.compareSync(req.body.pwd, user.pwd)) {
                        res.tpl.msg.push({type: "error", message: "Hiba történt. Rossz felhasználónév, vagy jelszó."});
                        return next();
                    }
                    delete user.password;	//Remove the password from the user
                    req.session.user = user;
                    req.session.orderCount = user.cart.length;
                    res.tpl.msg.push({type: "success", message: "Successful login "});
                    return res.redirect('/');
                });
            }
            else {
                res.tpl.msg.push({type: "error", message: "Empty field"});
                return next();
            }
        }
        else {
            return next();
        }
    };

}