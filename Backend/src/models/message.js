const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name:{
        type: String,
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
        user:{
            type: String,
            required:true
        }
    },
    message:{
        type: String,
        required:true
    },
    createAd:{
        type: String,
        required:true
    }
})


module.exports = mongoose.model('message',messageSchema);