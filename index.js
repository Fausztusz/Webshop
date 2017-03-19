var express= require('express');
var app= express();
// var path = require('path');

app.use(express.static('static'));

//require('./routes/productlist')(app);
//require('./routes/userlist')(app);
//require('./routes/itemlist')(app);
//require('./routes/outside')(app);
//require('./routes/productlist')(app);
/*app.use(function (req,res,next) {
   res.tpl={};
   return next();
});*/

app.get('/pay',function(req, res, next){
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
);


var server=app.listen(928, function () {
    console.log('Listening to port 928')
});