const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token){
        jwt.verify(token, req.app.get("secretKey"), (err, decoded) =>{
            if(err){
                return res.json({
                    status: false,
                    message: "Failed to authenticate your token"
                });
            }else{
                req.decoded = decoded;
                next();
            }
        });
    }else{
        return res.status(403).send({
            succes: false,
            message: "No token provided. You need to Log in or Sign up to see the maps."
        });
    }
};