const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message: "Authorization header missing"
        });
    }
    if (authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({
                message: "No access Token"
            });
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log(`The decoded user is ${req.user}`);
            next();
        } catch (err) {
            res.status(400).json({
                message: "token is not valid",
                error: err.message
            });
        }
    }
    else{
        return res.status(401).json({
            message: "Authorization header format is invalid"
        });
    }
}


module.exports = verifyToken;