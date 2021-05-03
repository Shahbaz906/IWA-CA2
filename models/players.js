const mongoose = require('mongoose');
const marked = require('marked')
const slugify = require ('slugify')

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
    },

    slug: {
        type: String,
        required: true,
        unique: true

    }

})
playersSchema.pre('validate', function(){
    
})





module.exports = mongoose.model('players', playersSchema);