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