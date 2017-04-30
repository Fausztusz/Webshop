/**
 * Create new user from the given data
 */

var requireOption = require('../common').requireOption;
var User = require('../../models/user');
var bcrypt = require('bcryptjs');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (req.body.name.length >= 4 && req.body.email.length >= 4/* && req.body.email.length >= 4*/) {
            User.findOne({name: req.body.name}, function (err, cb) {
                if (err){console.log(err); return next()}
                if (cb) return next(); //Not unique

                var data ={
                    name: req.body.name,
                    pwd: bcrypt.hashSync(req.body.pwd,bcrypt.genSaltSync(10)),
                    email: req.body.email,
                    picture: req.body.picture
                };
                user = new User(data);
                user.save(data, function (error) {
                    if(err){console.log(error); next()}
                    console.log('Successful registration');
                    return next();
                })
            })
        }
        else {
            //Invalid user data
          return next()
        }
    };
};