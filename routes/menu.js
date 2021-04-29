const express = require('express');
const router = express.Router();
const Menu = require('../model/Menu');


router.get('/', (req, res) =>{
res.send('We are on menu');
});

router.post('/', (req, res) =>{
    const menu = new Menu({
        section: req.body.section,
        entree: req.body.entree,
        item: req.body.item,
        price: req.body.price
    });

    post.save()
    .then(data =>{
        res.jason(data);
    })
    .catch(err => {
        res.jason({message: err});
    });

});



module.exports = router;