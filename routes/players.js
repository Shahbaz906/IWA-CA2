const express = require('express')
//const players = require('../models/players')
const router = express.Router()




router.get('/', (req, res) =>{
res.render('players/new_player', { players: new player()});
});

router.post('/', (req, res) =>{
    res.send('post is working');
});

module.exports = router;