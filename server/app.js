const express =  require('express');
const errorHandlers = require('./handlers/errorHandlers.js');

const app = express();
const cors = require('cors')
global.__basedir = __dirname;


app.use(cors()) 

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Bring in the routers
app.use("/user", require('./routes/user'));
app.use("/upload", require('./routes/fileUpload'));


//setup error handlers
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);
if(process.env.ENV == "DEVELOPMENT"){
    app.use(errorHandlers.developmentErrors);
}else{
    app.use(errorHandlers.productErrors)
}

module.exports= app;