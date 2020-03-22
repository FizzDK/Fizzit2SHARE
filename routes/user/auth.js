const               exPress         =       require("express"),
                    bCrypt          =       require("bcryptjs"),
                    jwt             =       require("jsonwebtoken"),
                    router          =       exPress.Router();

const               user            =       require(`../../models/User`);

router.post(`/LogInd`, (request, response) => {
    const reqData = request.body.data;
    console.log(reqData);
    let newUser = new user({}),
        searchString,
        userInfo;

    if (reqData.hasOwnProperty('profileObj')) {
        searchString = {
            "login.google_id": reqData.profileObj.googleId
        }
        userInfo = reqData.profileObj,
            newUser.name = {
                firstName: userInfo.givenName,
                lastName: userInfo.familyName
            }
        newUser.login = {
            google_id: userInfo.googleId,
            loginEmail: userInfo.email
        }
    } else if (reqData.hasOwnProperty('userID')) {
        searchString = {
            "login.facebook_id": reqData.userID
        }
        newUser.name = {
            firstName: reqData.first_name,
            lastName: reqData.last_name
        }
        newUser.login = {
            facebook_id: reqData.userID,
            loginEmail: reqData.email
        }
    } else {
        searchString = {
            "login.loginEmail": reqData.loginEmail
        }
        newUser.login = {
            loginEmail: reqData.loginEmail
        }
    }
    user.findOne(searchString).then(
        async usr => {
            if (!usr) {
                response.json({ userExists: false })
                return;
            }
            if (reqData.loginEmail) {
              await  bCrypt.compare(reqData.password, usr.login.password)
                    .then(
                        (isMatch) => {
                            if (!isMatch){
                                response.json({ userExists: true, credentials: false });
                                return;
                            }
                            return; 
                        })
            }
            const payload = {
                user: {
                    id: usr._id,
                    loginEmail: usr.login.loginEmail
                }
            };
            jwt.sign(payload, process.env.JWTSECRET, { expiresIn: 3600 }, (err, token) => {
                if (err) throw err;
                const respObj = {
                    token,
                    payload
                }
                let ckexpDate = new Date();
                response.cookie('FizzAuthToken',token,{
                    domain: '.fizzit.green',
                    expires: new Date(ckexpDate.setDate(ckexpDate.getDate()+30)),
                    httpOnly: true
                });
                return response.json({payload,userExists:true, credentials: true});
            });
        }
    ).catch(
        err => {
            console.log(err);
        }
    )
})

router.post(`/LogUd`,(request,response) => {
    console.log(`The token is ${request.cookies.FizzAuthToken}`);
    const       jwtToken     =       request.cookies.FizzAuthToken;
    jwt.verify(jwtToken, process.env.JWTSECRET, function(err,decoded){
        if(err){
            response.status(400).json({msg: "Token is expired or Invalid"})
        }
        let     payload  = decoded;
        let ckexpDate = new Date();
        const       InvalidToken    =   jwt.sign({ payload, iat: Math.floor(Date.now() / 1000) - 30 }, process.env.JWTSECRET);
        console.log(InvalidToken);
        response.clearCookie('FizzAuthToken', {domain: 'fizzit.green', path: '/'})
        response.end()
    })
})


module.exports = router;