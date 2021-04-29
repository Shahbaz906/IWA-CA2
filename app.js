const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// import
const menuRoute = require('./routes/menu');

//middleware
app.use('/menu', menuRoute);

//ROUTES
app.get('/menu',(req, res)=> {
    res.send('we are in Menu');
});


// mongodb connection
mongoose.connect( process.env.DB_CONNECTION, { useUnifiedTopology: true },
() => console.log('connected to database'));



app.listen(8000);
