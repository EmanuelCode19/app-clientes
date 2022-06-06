const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    cellphone:{
        type: Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    user:{
        id:{
            type: String,
            required:true
        },
        name:{
            type: String,
            required:true
        },
        cellphone:{
            type: String,
            required:true  
        },
        user:{
            type: String,
            required:true
        },
        address:{
            type: String,
            required:true
        }
    },
    message:{
        type: String,
        required:false
    },
    createAd:{
        type: String,
        required:true
    }
})


module.exports = mongoose.model('client',clientSchema);