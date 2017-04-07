var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');
// var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Webshop');
var Cat = mongoose.model('Cat', {name: String});
var kitty = new Cat({name: 'Zildjian'});
kitty.save(function (err) {
    console.log('meow');
});


app.use(express.static('public'));

app.set('view engine', 'ejs');

/**
 * Session above all
 */
app.use(session({
    secret: 'I double-dare you',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}));


/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
});

require('./routes/outside')(app);
require('./routes/products')(app);
require('./routes/users')(app);
require('./routes/webshop')(app);

app.get('/pay', function (req, res, next) {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
);


app.use(function (err, req, res, next) {
    //Mert mindig jobb egy Sam L. Jackson idézet mint egy hibaüzenet
    res.status(500).send('The path of the righteous man is ' +
        'beset on all sides by the iniquities of the selfish and the tyranny of evil men!' +
        'Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness,' +
        ' for he is truly his brother\'s keeper and the finder of lost children. ' +
        'And I will strike down upon thee with great vengeance and furious anger' +
        ' those who would attempt to poison and destroy' +
        ' My brothers. And you will know My name is the Lord when I lay' +
        ' My vengeance upon thee.' +
        ' And btw an ERROR');

    //Flush out the stack to the console
    console.error(err.stack);
});

var server = app.listen(928, function () {
    console.log('Listening to port 928')
});