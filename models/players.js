const mongoose = require('MONGOOSE');


const MenuSchema = mongoose.Schema({

    name:{
        name: String,
        required: true
    },

   ranking:{
        type: Number,
        required: true
    },

     country:{
        type: String,
        required: true
    },

    

});



module.exports = mongoose.model('players', playersSchema);