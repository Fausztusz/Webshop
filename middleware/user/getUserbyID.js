/**
 * Get user from _id
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {
    var UserModel = requireOption(objectRepository, 'userModel');
    return function (req, res, next) {
        UserModel.findById(req.body._id, function (err, user) {
            if (!err) {
                res.tpl.user = user;
                next();
            }
            else {
                console.log('####### Query error at getUserbyID #######');
                console.log(err);
                next()
            }
        });
    };
};