var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userId: {
        type:String,
        unique:true
    },
    msg: String,
}, { timestamps: true });


module.exports = mongoose.model("Users", UserSchema)