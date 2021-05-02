const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
axios = require('axios');
require('dotenv/config');

var port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json())

// import
const playersRoute = require('./routes/players');

app.set('view engine', 'ejs')
//middleware
app.use('/players', playersRoute);

//ROUTES
const playersRouter = require('./routes/players')
app.use(express.static('views/players'))


app.get('/',(req, res)=> {
    const players = [{
        title: 'Cricket Players List 2021',
        name:'anyone',
        ranking: 'any',
        country: 'any'

    }]
    res.redirect('players/index', {players: players});
});



// mongodb connection
//mongoose.connect( process.env.DB_CONNECTION, { useUnifiedTopology: true },
//() => console.log('connected to database'));



app.listen(8000);
