const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id : {
        type: mongoose.Types.ObjectId,
        required:true
    },
    username : {
        required: true,
        unique: true,
        type : String
    },
    phone : {
        required: true,
        unique : true,
        type : Number
    }
})


module.exports = mongoose.model('User',userSchema)