const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    cellphone:{
        type: Number,
        required:true
    },
    user:{
     type: String,
     required:true
    },
    password:{
     type: String,
     required: true
    },
    address:{
        type:String,
        required:true
    },
    createAd:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('user',userSchema);