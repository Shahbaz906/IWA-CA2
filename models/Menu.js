const mongoose = require('MONGOOSE');


const MenuSchema = mongoose.Schema({

    section:{
        name: String,
        required: true
    },

     entree:{
        type: String,
        required: true
    },

     item:{
        type: String,
        required: true
    },

    Price:{
type: Number,
required: true
}

});



module.exports = mongoose.model('Menu', MenuSchema);