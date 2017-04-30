/**
 * Run once to populate the db
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/Webshop');
var User = require('./models/user');
var Product = require('./models/product');
var bcrypt =require('bcryptjs');

var users = [
    new User({
        name: 'ButWhy?',
        pwd: bcrypt.hashSync('Idontknow',bcrypt.genSaltSync(10)),
        role: 1,
        email: 'but@why.com',
        picture: 'https://media.giphy.com/media/1M9fmo1WAFVK0/giphy.gif',
        cart: []
    }),
    new User({
        name: 'AstleyFan99',
        pwd: bcrypt.hashSync('KeepItRollin',bcrypt.genSaltSync(10)),
        role: 1,
        email: 'rick@roll.com',
        picture: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        cart: []
    }),
    new User({
        name: 'KermitTheGreatAndPowerful',
        pwd: bcrypt.hashSync('NotJustaPuppet',bcrypt.genSaltSync(10)),
        role: 0,
        email: 'great@powerful.com',
        picture: 'http://i2.kym-cdn.com/entries/icons/original/000/021/668/kermie.JPG',
        cart: []
    }) ,
    new User({
        name: 'Harambe',
        pwd: bcrypt.hashSync('dicksout',bcrypt.genSaltSync(10)),
        role: 0,
        email: 'theone@gmail.com',
        picture: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/06/gorilla-shot-boy-zookeper-explains-harambe-amanda-odonoughue-cincinnati-zoo-1.jpg',
        cart: []
    }),
    new User({
        name: 'admin',
        pwd: bcrypt.hashSync('admin',bcrypt.genSaltSync(10)),
        role: 1,
        email: 'admin@admin.com'
    }),
    new User({
        name: 'user',
        pwd:  bcrypt.hashSync('user',bcrypt.genSaltSync(10)),
        role: 0,
        email: 'user@user.com'
    })
];


var products = [
    new Product({
        name: 'Succes Baby',
        description: 'Another succesful homework',
        picture: 'https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg',
        price: 15
    }),
    new Product({
        name: 'Survive',
        description: 'The semester',
        picture: 'https://media.giphy.com/media/rjWu7ks7deuxa/giphy.gif',
        price: 100
    }),
    new Product({
        name: 'Absolutely barbaric',
        description: 'The error handling in this site',
        picture: 'http://i0.kym-cdn.com/photos/images/newsfeed/001/209/105/7b2.jpeg',
        price: 5
    }),
    new Product({
        name: 'Not my business Kermit',
        description: 'There is a lot of copy paste',
        picture: 'https://media4.giphy.com/media/Wgx6zPreg4aac/200_s.gif',
        price: 35
    }),
    new Product({
        name: 'Pathetic',
        description: 'Classic Skinner',
        picture: 'http://i2.kym-cdn.com/photos/images/original/001/211/614/e93.jpg',
        price: 25
    }),
    new Product({
        name: 'Wubba Lubba Dub Dub',
        description: 'I\'m in a great pain',
        picture: 'https://ih0.redbubble.net/image.104525267.7495/flat,1000x1000,075,f.jpg',
        price: 35
    }),
    new Product({
        name: 'Confession Bear',
        description: 'Instant ragret',
        picture: 'https://imgflip.com/s/meme/Confession-Bear.jpg',
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