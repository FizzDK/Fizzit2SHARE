const           jwt             =       require("jsonwebtoken");

function isLoggedin(request, response, next) {
    const token = request.cookies.FizzAuthToken;
    console.log(token)

    if (!token){
        return next();
    }
    try{
        const       decoded     =   jwt.verify(token, process.env.JWTSECRET);
    request.body.user            =   decoded.user;
    next();
    } catch(e){
        response.status(400).json({ error: e, msg: "Token is not valid"})
    }
}

module.exports = isLoggedin;
