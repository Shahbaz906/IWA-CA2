const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
axios = require('axios');
require('dotenv/config');
const app = express();

const Play = require('./models/players')


var port = process.env.PORT || 8000;


app.use(bodyParser.json())





// import
const playersRoute = require('./routes/players');






//ROUTES
const playersRouter = require('./routes/players')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.static('views/players'))

app.use(express.json())


app.get('/', async (req,res)=> {
   /*const players = [{
        //title: 'Cricket Players List 2021', ranking: 'any'

        player:'BaBar Azam',
        rating: '865',
        country: 'Pakistan '

    }]     */
    const players = await Play.find();
    res.render('players/index', {players: players})
})



mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, }) 

const db = mongoose.connection

db.once('open', () => console.log('Connected to DB'))
db.on('error', (error) => console.error(error))
 

//middleware
app.use('/players', playersRoute);
app.listen(9000);
