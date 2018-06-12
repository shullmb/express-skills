var express = require('express');
var path = require('path');
var fs = require('fs');
var bp = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended:false}));

// default route
app.get('/', function(req,res) {
    res.sendFile('html/index.html');
})

app.listen(process.env.PORT || 3000);