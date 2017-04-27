var express = require('express');
var app = express();

//For accessing POST request parameters
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(express.static('public'));
app.set('view engine', 'ejs');

/**
 * Session above all
 */
var session = require('express-session');
app.use(session({
    secret: 'I_double-dare_you',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}));

/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];
    res.tpl.msg = [];

    return next();
});

require('./routes/outside')(app);
require('./routes/products')(app);
require('./routes/users')(app);
require('./routes/webshop')(app);

// Middleware for authentication
var authMW = require('./middleware/generic/auth');

//Middleware to redirect requests to /
var mainRedirectMW = require('./middleware/generic/mainRedirect');

app.get('/',
    authMW(),
    mainRedirectMW()
);

app.use(function (err, req, res, next) {
    //Mert mindig jobb egy Sam L. Jackson idézet mint egy hibaüzenet
    res.status(500).send('The path of the righteous man is ' +
        'beset on all sides by the iniquities of the selfish and the tyranny of evil men!<br>' +
        'Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, ' +
        'for he is truly his brother\'s keeper and the finder of lost children.<br>' +
        'And I will strike down upon thee with great vengeance and furious anger ' +
        'those who would attempt to poison and destroy ' +
        'My brothers.<br> <h3> And you will know My name is the Lord when I lay ' +
        'My vengeance upon thee. </h3>' +
        '<h1>And btw you have an ERROR</h1>');

    //Flush out the stack to the console
    console.error(err.stack);
});

var server = app.listen(3000, function () {
    console.log('Listening to port 3000')
});