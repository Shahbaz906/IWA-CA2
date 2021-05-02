const mongoose = require('mongoose');


const playersSchema = new mongoose.Schema({

   player:{
        type: String,
        required: true
    },
  

   Ranking:{
        type: Number,
        required: true
    },

     country:{
        type: String,
        required: true
    }

    

});



module.exports = mongoose.model('players', playersSchema);