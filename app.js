const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const bodyParser = require('body-parser');
const Player = require('./models/players')
require('dotenv/config')
const ejs = require('ejs')

var port = process.env.PORT || 8000;

app.use(bodyParser.json());
const playerRoute = require('./routes/players')
const methodOverride = require('method-override')



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))



app.use(methodOverride('_method'))


app.use(express.static('views/players'))

app.get('/', async (req, res) =>{
    const players = await Player.find()
    res.render('players/index',{ players: players})
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true,}) 

const db = mongoose.connection
//mongoose.set('useCreateIndex', true);

db.once('open', () => console.log('Connected to DB'))
db.on('error', (error) => console.error(error))
 


app.use('/players', playerRoute);
//app.listen(8000);
app.listen(port, function(error){
    console.log('server is running on port: ' + port);
});
