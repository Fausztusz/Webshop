/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        console.log('user:'+res.tpl.user);
        console.log('role:'+res.tpl.role);
        console.log('product:'+res.tpl.product);

        res.render(viewName, res.tpl);
    };

};
