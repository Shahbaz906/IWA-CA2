const express = require('express');
const app = express();
const mongoose = require ('mongoose');
require('dotenv/config');




// import



//ROUTES
app.get('/menu',(req, res)=> {
    res.send('we are in Menu');
});


// mongodb connection
mongoose.connect( process.env.DB_CONNECTION, { useUnifiedTopology: true },
() => console.log('connected to database'));



app.listen(8000);
