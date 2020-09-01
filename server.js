require('dotenv').config();

var db = require('./db/db_configuration');

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


var cors = require('cors');

// var { response } = require('express');

app.use(express.static('public'));
app.use(cors());






app.get('/api/iQuiz/:id', (req,res) => {

    var id = Number(req.params.id);

db.query('SELECT * FROM questions WHERE id=$1',[id], (err,data) => {
    if (err) {
        console.log(err);
        res.send(err);
    } else {
        console.log(data);
        res.send(data.rows);
    }
});
});










app.listen(process.env.PORT || 5000,function() {
    console.log('We on');
});

module.exports = app;













