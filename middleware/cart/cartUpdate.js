var requireOption = require('../common').requireOption;

/**
 * Create (or update) the user cart if we have the data for it
 * update if we have a res.tpl.cart, create if we don't have
 *  - if there is no cart, set tpl.error
 *  - if everything is ok redirect to /cart
 */
module.exports = function (objectrepository) {

    var taskModel = requireOption(objectrepository, 'taskModel');

    return function (req, res, next) {


        return next();
    };

};