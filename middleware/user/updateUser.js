/**
 * Edit the user object, if its already loaded
 */

var requireOption = require('../common').requireOption;
var User = require('../../models/user');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        //Somehow this stuff pass a reference for the req.body
        //So I save the _id before I delete it
        var options = {};
        options = req.body;
        var userID = req.body._id;
        // If the user left the field blank the value don't change
        delete options._id; //Protects the original _id
        if (!options.name) delete options.name;
        if (!options.email) delete options.email;
        if (!options.picture) delete options.picture;
        if (!(options.role == 0 || options.role == 1)) delete options.picture; //Prevents invalid role commit


        User.findByIdAndUpdate(userID, {$set: options}, function (err, cb) {
            if (err) {
                console.log('##### Failed query at updateUser ######');
                console.log(err);
                next();
            }
            else {
                return next();
            }
        });
    };

};