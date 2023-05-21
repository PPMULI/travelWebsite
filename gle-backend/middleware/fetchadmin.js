var jwt = require('jsonwebtoken');
const sec_pass = "Password";

const fetchuser = (req, res, next) =>{
    // get user from jwt
    const admintoken = req.header('authtokenadmin')

    if(!admintoken)
    {
        res.status(401).send({error: "Please login"});
    }

    try{
        const data = jwt.verify(admintoken, sec_pass);
        req.admin = data.admin;
        next();
    }
    catch{
        // console.log("fail1")
        res.status(401).send({error: "fail"});
    }
}
module.exports = fetchuser;