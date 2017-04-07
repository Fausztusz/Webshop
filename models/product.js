/**
 * Product model (mock)
 * @constructor
 */
var Product = function () {
};

/**
 * An instance
 */
var productInstanceMock = {
    id: 1,
    name: 'Dank',
    description: 'Lorem ipsum',
    price:1,
    imageSRC:''
};

/**
 * Find all elements with the criteria
 * @param criteria
 * @param cb error first callback
 * @returns {*}
 */
Product.prototype.find = function (criteria, cb) {

    //returns 3 mocked item
    return cb(null, [productInstanceMock, productInstanceMock, productInstanceMock]);
};

/**
 * Save the item to the db
 * @param cb error first callback
 * @returns {*}
 */
Product.prototype.save = function (cb) {
    return cb(null, this);
};

/**
 * Delete an object
 * @param cb
 * @returns {*}
 */
Product.prototype.remove = function (cb) {
    return cb(null);
};

module.exports = Product;


/*

var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getProductListMW = require('../middleware/product/getProductList');
var updateProductMW = require ('../middleware/products/updateProduct');
var getProductMW = require ('../middleware/items/getProduct');
var getTypeListMW = require ('../middleware/generic/getTypeList');
var deleteItemMW = require ('../middleware/items/deleteItem');
var itemModel = {};

module.exports = function (app) {

    var objectRepository = {
        itemModel: itemModel
    };

    /!**
     * Create new item
     *!/

    app.use('/items/new',
        authMW(objectRepository),
        updateItemMW(objectRepository),
        renderMW(objectRepository, 'item_edit')
    );

    /!**
     * Edit the item details
     *!/

    app.use('/items/:itemid/edit',
        authMW(objectRepository),
        getItemMW(objectRepository),
        getTypeListMW(objectRepository),
        updateItemMW(objectRepository),
        renderMW(objectRepository, 'item_edit')
    );

    /!**
     * Delete item
     * - then redirect to /items
     *!/

    app.use('/items/:itemid/delete',
        authMW(objectRepository),
        getItemMW(objectRepository),
        deleteItemMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/items');
        }
    );

    /!**
     * List all items
     *!/

    app.use('/items',
        authMW(objectRepository),
        getItemListMW(objectRepository),
        renderMW(objectRepository, 'items')
    );

};
*/
