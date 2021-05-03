const express = require('express')
const router = express.Router()


router.get('/new_player', (req, res) => {
res.render('players/new_player',{ player: new player})


})
router.get('/edit/:id', (req, res) => {
    const player = await player.findById(req.params.id)
res.render('players/edit',{ player: new player})


})


router.get('/:id', async (req,res)=> {
    const player = await Player.findByidone(req.params.id)
    if (player == null) res.redirect('/')
   res.render('players/show',{player: player})
} )



router.post('/', async (req, res, next)=> {
  req.player = new player() 
next()
}, savePlayerAndRedirect('player_new'))
router.put('/:id',(req, res) =>{

router.delete('/:id', async (req, res) =>{
    await player.findByIdAndDelete(req.param.id)
    res.redirect('/')
})


function savePlayerAndRedirect(path){
    return async(req, res) => {
    let Player = req.Player
    player.player = req.body.player
    player.Ranking = req.body.Ranking
    player.country = req.body.country


try {
player = await player.save()
res.redirect(`/players/${player.player}`)
} catch (e) {
    console.log(e)
res.render('players/${path}', {player : country})
}
     }
   }
})


module.exports = router