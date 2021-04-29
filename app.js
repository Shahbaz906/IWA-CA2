const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
axios = require('axios');
require('dotenv/config');


const app = express();

app.use(bodyParser.json())

// import
const menuRoute = require('./routes/menu');

//middleware
app.use('/menu', menuRoute);

//ROUTES
app.get('/menu',(req, res)=> {
    res.redirect('we are in Menu');
});
app.post('/menu', (req, res) =>{
    res.json({result: 'post was sent'});
});


// mongodb connection
mongoose.connect( process.env.DB_CONNECTION, { useUnifiedTopology: true },
() => console.log('connected to database'));



app.listen(8000);
