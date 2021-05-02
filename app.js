const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
axios = require('axios');
require('dotenv/config');


const app = express();

app.use(bodyParser.json())

// import
const playersRoute = require('./routes/players');

//middleware
app.use('/players', playersRoute);

//ROUTES
app.get('/players',(req, res)=> {
    res.redirect('we are at players');
});
app.post('/players', (req, res) =>{
    res.json({result: 'post was sent'});
});


// mongodb connection
mongoose.connect( process.env.DB_CONNECTION, { useUnifiedTopology: true },
() => console.log('connected to database'));



app.listen(8000);
