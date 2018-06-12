var express = require('express');
var path = require('path');
var fs = require('fs');
var bp = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.use(bp.urlencoded({extended:false}));

// default route
app.get('/', function(req, res) {
    // TODO: add links to index.html so that users can navigate
    res.sendFile(__dirname + '/static/html/index.html');
})

app.get('/skills', function(req, res) {
    var skills = fs.readFileSync('./data.json');
    skills = JSON.parse(skills);
    res.render('skills', {skills: skills});
})

// TODO: Add GET route that returns static page containing form
app.get('/skills/new', function(req, res) {
    res.sendFile(__dirname + '/static/html/new.html')
})

// TODO: Add POST route that writes new skill to the file, redirects to skills index
// TODO: Form should have action='/skills' and method='POST'

app.listen(process.env.PORT || 3000);