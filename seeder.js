/**
 * Run once to populate the db
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webshop');
var User = require('./models/user');
var Product = require('./models/product');


var users = [
    new User({
        name: 'ButWhy?',
        pwd: 'Idontknow',
        role: 1,
        email: 'but@why.com',
        picture: 'https://media.giphy.com/media/1M9fmo1WAFVK0/giphy.gif',
        cart: [{
            productid: '1',
            quantity: 5
        }, {
            productid: '2',
            quantity: 4
        }, {
            productid: '3',
            quantity: 7
        }]
    }),
    new User({
        name: 'AstleyFan99',
        pwd: 'KeepItRolli\'n',
        role: 1,
        email: 'rick@roll.com',
        picture: './images/nevergonnagiveyouup.jpg',
        cart: [{
            productid: '1',
            quantity: 5
        }, {
            productid: '2',
            quantity: 4
        }, {
            productid: '3',
            quantity: 7
        }]
    }),
    new User({
        name: 'KermitTheGreatAndPowerful',
        pwd: 'NotJustaPuppet',
        role: 0,
        email: 'great@powerful.com',
        picture: './images/evilkermit.jpg',
        cart: [{
            productid: '1',
            quantity: 5
        }, {
            productid: '2',
            quantity: 4
        }, {
            productid: '3',
            quantity: 7
        }]
    }),
    new User({
        name: 'admin',
        pwd: 'admin',
        role: 1,
        email: 'admin@admin.com'
    }),
    new User({
        name: 'user',
        pwd: 'user',
        role: 0,
        email: 'user@user.com'
    })
];


var products = [
    new Product({
        name: 'Succes Baby',
        description: 'Another succesful homework',
        picture: './images/SuccessBaby.png',
        price: 15
    }),
    new Product({
        name: 'Survive',
        description: 'The semester',
        picture: 'https://media.giphy.com/media/rjWu7ks7deuxa/giphy.gif',
        price: 100
    }),
    new Product({
        name: 'Not my business Kermit',
        description: 'There is a lot of copy paste',
        picture: './images/notmybusiness.jpg',
        price: 35
    }),
    new Product({
        name: 'Pathetic',
        description: 'Classic Skinner',
        picture: './images/pathetic.jpg',
        price: 25
    }),
    new Product({
        name: 'Wubba Lubba Dubb Dub',
        description: 'I\' in a great pain',
        picture: './images/wubbalubbadubdub.jpg',
        price: 35
    }),
    new Product({
        name: 'Confession Bear',
        description: 'Instant ragret',
        picture: './images/confessionbear.jpg',
        price: 35
    })
];

function seed() {
    users.forEach(function (element) {
        element.save();
    });
    products.forEach(function (element) {
        element.save();
    });
    return (function () {
        mongoose.disconnect();
    })
}
seed();
console.log('DONE!');