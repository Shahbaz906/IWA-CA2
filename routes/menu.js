const express = require('express');
const router = express.Router();




router.get('/', (req, res) =>{
res.send('We are on menu');
});

router.post('/', (req, res) =>{
    res.send('post is working');
});

module.exports = router;