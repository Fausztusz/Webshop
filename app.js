var express= require('express');
var app= express();
var path = require('path');

app.use(express.static(__dirname + '/pages'));

app.get('/', function (request,response) {
        response.sendFile(path.join(__dirname + '/pages/webshop.html'));
});

app.get('/webshop', function (request,response) {
        response.sendFile(path.join(__dirname + '/pages/webshop.html'));
});

app.get('/cart', function (request,response) {
    response.sendFile(path.join(__dirname + '/pages/cart.html'));
});

app.get('/editusers', function (request,response) {
    response.sendFile(path.join(__dirname + '/pages/editusers.html'));
});

app.get('/createproduct', function (request,response) {
    response.sendFile(path.join(__dirname + '/pages/createproduct.html'));
});

app.get('/login', function (request,response) {
    response.sendFile(path.join(__dirname + '/pages/login.html'));
});

app.get('/forgetpassword', function (request,response) {
    response.sendFile(path.join(__dirname + '/pages/forgetpassword.html'));
});
app.get('/pay', function (request,response) {
    response.writeHead(301,
        {Location: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
    );
    response.end();
});

app.listen(928, function () {
    console.log('Listening to port 928')
});