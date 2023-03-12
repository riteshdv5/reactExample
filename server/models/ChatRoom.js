const mongoose = require("mongoose");

const chatRoomSchema = new mongoose.Schema({
    name:{
        type:String,
        require: "Name is required"
    }
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);