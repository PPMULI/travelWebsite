var jwt = require('jsonwebtoken');
const sec_pass = "Password";

const fetchuser = (req, res, next) =>{
    // get user from jwt
    const token = req.header('authtoken')
    const admintoken = req.header('authtokenadmin')

    if(!token && !admintoken)
    {
        res.status(401).send({error: "Please login"});
    }

    try{
        const data = jwt.verify(token, sec_pass);
        req.user = data.user;
        next();
    }
    catch{
        // console.log("fail1")
        res.status(401).send({error: "fail"});

    }
}
module.exports = fetchuser;