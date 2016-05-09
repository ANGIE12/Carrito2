var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');
var app = express();
var indexRoute = require('./routes/index');
var productsRoute = require('./routes/products');
var usersRoute = require('./routes/users');
var salesRoute = require('./routes/sales');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'public/views'));
app.engine("html",require("ejs").renderFile);
app.set('view engine', 'html');

app.use('/',indexRoute);
app.use('/products',productsRoute);
app.use('/users',usersRoute);
app.use('/sales',salesRoute);

app.listen(3000, function() {  
	console.log("Servidor escuchando en el puerto 3000");
});

module.exports = app;

