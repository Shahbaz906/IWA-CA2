const mongoose = require('MONGOOSE');


const MenuSchema = mongoose.Schema({

   title:{
        name: String,
        required: true
    },
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