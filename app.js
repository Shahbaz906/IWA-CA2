const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const bodyParser = require('body-parser');
const Player = require('./models/players')
require('dotenv/config')

var port = process.env.PORT || 8000;


const playerRoute = require('./routes/players')
const methodOverride = require('method-override')



app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false}))
app.use(express.static('views/players'))

app.get('/', async (req, res) =>{
    const players = await playerRoute.propfind().sort({ createdAt: 'desc'})
    res.render('players/index',{ players: players})
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true,}) 

const db = mongoose.connection

db.once('open', () => console.log('Connected to DB'))
db.on('error', (error) => console.error(error))
 

//middleware
app.use('/players', playerRoute);
app.listen(8000);
