const jwt = require('jsonwebtoken');


verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(401); //invalid token
            // decodes the username from the token and adds it to the req object so that it can be used in the route handler
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles
            next();
        }
    );
}

module.exports = verifyJWT;