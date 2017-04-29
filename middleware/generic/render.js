/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        //It's pretty crappy but easier than make sure that I don't miss it at a route
        res.tpl.orderCount = req.session.orderCount;
        res.render(viewName, res.tpl);
    };
};
