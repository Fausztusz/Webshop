var express= require('express');
var app= express();
// var path = require('path');

app.use(express.static('static'));

require('./routes/employeelist')(app);
require('./routes/inventorylist')(app);
require('./routes/itemlist')(app);
require('./routes/outside')(app);



app.use(function (req,res,next) {
   res.tpl={};
   return next();
});

var server=app.listen(928, function () {
    console.log('Listening to port 928')
});