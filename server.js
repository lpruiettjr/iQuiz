require(‘dotenv’).config();

const db = require('./db/db_configuration');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


const cors = require('cors');

const { response } = require('express');

app.use(express.static('public'));
app.use(cors());






app.get('/api/iQuiz/:id', (req,res) => {

    const id = Number(req.params.id);

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
























app.listen(process.env.PORT,function() {
    console.log('We on');
});

module.exports = pool;