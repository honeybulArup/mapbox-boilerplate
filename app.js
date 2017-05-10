var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

var index = require("./routes/index");

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.render('index');
});

app.listen(PORT, function() {
    console.log("Express Server Started on PORT: " + PORT);
})