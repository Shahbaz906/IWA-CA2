const express = require('express');
const router = express.Router();




router.get('/', (req, res) =>{
res.send('We are players');
});

router.post('/', (req, res) =>{
    res.send('post is working');
});

module.exports = router;