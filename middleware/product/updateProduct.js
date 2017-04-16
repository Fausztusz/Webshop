var requireOption = require('../common').requireOption;

/**
 * Create (or update) task if we have the data for it
 * update if we have a res.tpl.task, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /task/:id
 */
module.exports = function (objectrepository) {

    var productModel = requireOption(objectrepository, 'productModel');

    return function (req, res, next) {
        return next();
    };

};