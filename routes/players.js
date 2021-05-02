const express = require('express')

const Play = require('../models/players')
const router = express.Router()


router.get('/new', (req, res) => {
res.render('players/new_player')


})

router.get('/:id', (req,res)=> {
    const players = Players.findByid(req.params.id)
   if (players == null ) res.redirect 
res.send(params.id)
} )

router.post('/', async (req, res)=> {
const player = await Players({
     player: req.body.player,
  Ranking: req.body.Ranking,
   country: req.body. country

})

try {
const new_player = await players.save();
res.redirect(`/players/${players.id}`)
} catch (e) {
    console.log(e)
res.render('players/new_player', {players : players})
}

})

module.exports = router