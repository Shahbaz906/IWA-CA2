const express = require('express')
const router = express.Router()


router.get('/new_player', (req, res) => {
res.render('players/new_player',{ player: new player})


})
router.get('/edit/:id', async (req, res) => {
    const player = await player.findById(req.params.id)
res.render('players/edit',{ player: new player})


})


router.get('/:id', async (req,res)=> {
    const player = await Player.findByidOne(req.params.id)
    if (player == null) res.redirect('/')
   res.render('players/show',{player: player})
} )



router.post('/', async (req, res, next)=> {
  req.player = new player() 
next()
}, savePlayerAndRedirect('new'))
router.put('/:id', async (req, res, next) =>{
    req.player = await player.finfById(req.params.id)
    next()
}, savePlayerAndRedirect('edit'))



router.delete('/:id', async (req, res) =>{
    await player.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function savePartAndRedirect(path) { 
  return async (req, res) => {
    let player = req.player
    player.Player= req.body.player
   player.Ranking = req.body.Ranking
   player.Country = req.body.Country
   
    try {
      player = await player.save() 

     res.redirect(`/`)
    } catch (e) {
 
 return res.status(400).json({message: 'Validation fail for the request'}) 
  }
}
}


module.exports = router