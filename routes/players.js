const express = require('express')
const router = express.Router()
const Players = require('../models/players')

router.get('/new', (req, res) => {
res.render('players/new',{ player: new Player()})


})
router.get('/edit/:id', async (req, res) => {
    const player = await Player.findById(req.params.id)
res.render('players/edit',{ player: player})


})


router.get('/:id', async (req,res)=> {
    const player = await Player.findById()
    
    if (player == null) res.redirect('/')
   res.render('players/show',{player: player})
} )

router.get('/:id', async (req, res) =>{
    const player = await Player.findById()

    if (player == null) {
        return res.status(404).json({message: 'Can not find the player by id'})

    }
    res.redirect('/') //redirect to homepage
})



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

     res.redirect(`/players`)
    } catch (e) {
        res.render('articles/${path}', {article: article}
 
  
        )
}
}
}


module.exports = router