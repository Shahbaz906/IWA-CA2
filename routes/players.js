const express = require('express')

const Play = require('../models/players')
const router = express.Router()


router.get('/new', (req, res) => {
res.render('players/new_player')


})

router.get('/:id', (req,res)=> {
    const play = Play.findByid(req.params.id)
   if (play == null ) res.redirect 
res.send(params.id)
} )

router.post('/', async (req, res)=> {
let play = new Play({
     player: req.body.player,
  Ranking: req.body.Ranking,
   country: req.body. country

})
try {
part = await part.save();
res.redirect(`/players/${play.id}`)
} catch (e) {
    console.log(e)
res.render('players/new_player', {play : play})
}

})

module.exports = router