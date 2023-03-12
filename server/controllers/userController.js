const mongoose = require('mongoose');
const User = mongoose.model("User")
const sha256 = require('js-sha256');
const jwt = require('jwt-then');

exports.register = async(req, res) => {
    const {name , email, password} = req.body;

    const emailRegex = /@gmail.com|@hotmail.com|@persistent.com|@yahoo.com/;

    if(!emailRegex.test(email)) throw "Email for your domain is not supported.";

    if(password.length < 8) throw "Password lenght must be atleast 8 character long.";

    const userExist = await User.findOne({
        email,
    })

    if(userExist) throw "User is already registered.";

    const user = new User({name, email, password: sha256(password + process.env.SALT)});

    await user.save();

    res.json({
        message : " User " + name + " successfully registered"
    })

}

exports.login = async(req, res) =>{
    const {email, password} = req.body;

    const user = await User.findOne({
        email,
        password: sha256(password + process.env.SALT)
    })

    if(!user) throw "Email and Password did not match.";

    const token = await jwt.sign({id: user.id}, process.env.JWTSECRET);

    res.json({
        message : "User Looged in Successfully",
        token: token
    })
}