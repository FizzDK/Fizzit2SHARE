const           jwt             =       require("jsonwebtoken");

function authmiddle(request, response, next){
    // console.log(request.cookies.FizzAuthToken);
    const   token   =     request.cookies.FizzAuthToken;

    if (!token){
        response.status(401).json({msg: "No token, authorization denied"})
    }
    try{
        const       decoded     =   jwt.verify(token, process.env.JWTSECRET);
    request.body.user            =   decoded.user;
    next();
    } catch(e){
        response.status(400).json({ msg: "Token is not valid"})
    }
}

module.exports = authmiddle;