//Bring in Models
require('./models/User');
require('./models/Message');
require('./models/ChatRoom');
// config.js
require('dotenv').config();

const app  = require('./app');
const mongoose = require('mongoose') ;

mongoose.connect(process.env.DATABASE);

mongoose.connection.on("error", (err)=>{
    console.log("Mongoosee Connection ERROR : " + err.message);
});

mongoose.connection.once("open",()=>{
    console.log("Mongoose Connected");
});


app.listen(8000,()=>{
    console.log("Server is listeining on port 8000");
});