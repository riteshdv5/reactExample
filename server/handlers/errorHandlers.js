/*
   Catch Error Handlers
 */

exports.catchError = (fn) => {
 return function(req, res, next) {
    console.log(typeof fn)
    fn(req, res ,next).catch(function (err) {
        if (typeof err == "string") {
            res.status(400).json({
                message: err
            })
        } else {
            next(err)
        }
    })
 }
}

exports.mongooseErrors = (err, req, res, next) => {
    if(!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key)=>(message += err.errors[key].message + ", "))
    message = message.substr(0, message.length - 2);
    res.status(400).json({message})
}

exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || "";
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack : err.stack
    };
    res.status(err.status || 500).json(errorDetails);
};

exports.productErrors = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error : "Internal Server error"
    })
}

exports.notFound = (req,res, next)=>{
    res.status(404).json({
        message:"Route not found"
    })
}