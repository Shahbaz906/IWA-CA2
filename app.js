const express = require('express');
const app = express();


//ROUTES
app.get('/',(req, res)=> {
    res.send('we are at home');
});


app.get('/posts',(req, res)=> {
    res.send('we are on post');
});



app.listen(8000);
