const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: "Name is required"
    },
    email : {
        type: String,
        required: "Email is required"
    },
    password : {
        type: String,
        required : "Password is required"
    }
},{
    timestamp :     true
});

module.exports = mongoose.model("User", userSchema);