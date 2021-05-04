const express = require('express')
const router = express.Router()
const Player = require('../models/players')

router.get('/new', (req, res) => {
res.render('players/new',{ player: new player})


})
router.get('/edit/:id', async (req, res) => {
    const player = await Player.findById(req.params.id)
res.render('players/edit',{ player: new player})


})


router.get('/:id', async (req,res)=> {
    const player = await Player.findByIdOne(req.params.id)
    if (player == null) res.redirect('/')
   res.render('players/show',{player: player})
} )



router.post('/', async (req, res, next)=> {
  req.player = new Player() 
next()
}, savePlayerAndRedirect('new'))
router.put('/:id', async (req, res, next) =>{
    req.player = await Player.finfById(req.params.id)
    next()
}, savePlayerAndRedirect('edit'))



router.delete('/:id', async (req, res) =>{
    await Player.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function savePlayerAndRedirect(path) { 
  return async (req, res) => {
    let player = req.player
    player.player= req.body.player
   player.Ranking = req.body.Ranking
   player.country = req.body.country
   
    try {
      player = await player.save() 

     res.redirect(`/`)
    } catch (e) {
 
 return res.status(400).json({message: 'Validation fail for the request'}) 
  }
}
}


module.exports = router