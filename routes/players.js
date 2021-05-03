const express = require('express')

const Player = require('../models/players')
const router = express.Router()


router.get('/new_player', (req, res) => {
res.render('players/new_player')


})

router.get('/:id', async (req,res)=> {
    const player = await Player.findByid(req.params.id)
   res.render('players/show',{player: player})
} )

router.post('/', async (req, res)=> {
let Player = new Player({
     player: req.body.player,
  Ranking: req.body.Ranking,
   country: req.body. country
})

await player.save()

try {
player = await player.save();
res.redirect(`/players/${player.id}`)
} catch (e) {
    console.log(e)
res.render('players/new_player', {player : player})
}

})

module.exports = router