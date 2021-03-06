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
    res.sendFile('index.html');
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
app.post('/skills', function(req, res) {
    var skills = JSON.parse(fs.readFileSync('./data.json'));
    skills.push({name: req.body.name, level: req.body.level});
    fs.writeFileSync('./data.json', JSON.stringify(skills));
    res.redirect('/skills');
})

app.get('*', function(req,res) {
    res.sendFile(__dirname + '/static/html/404.html');
})

app.listen(process.env.PORT || 3000);