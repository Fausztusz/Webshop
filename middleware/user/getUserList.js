var requireOption = require('../common').requireOption;

/**
 * Load all the user
 * and put them on res.tpl.user
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository,'userModel');

    return function (req, res, next) {

        /**
         * The code will be "something like":
         *
         *  //lets find the user
         * userModel.findOne({}, function (err,results){
     *    if (err){
     *        return next(err);
     *    }
     *
     *    res.tpl.user = results;
     *
     *    return next();
     * });
         */
        return next();
    };

};