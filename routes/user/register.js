// const exPress = require("express"),
//     bCrypt = require("bcryptjs"),
//     jwt = require("jsonwebtoken"),
//     router = exPress.Router();

// const user = require(`../../models/User`);

// router.post(`/Tilmeld`, (request, response) => {
//     const reqData = request.body.data;
//     console.log(reqData);
//     let newUser = new user({}),
//         searchString,
//         userInfo;

//     if (reqData.hasOwnProperty('profileObj')) {
//         searchString = {
//             "login.google_id": reqData.profileObj.googleId
//         }
//         userInfo = reqData.profileObj,
//             newUser.name = {
//                 firstName: userInfo.givenName,
//                 lastName: userInfo.familyName
//             }
//         newUser.login = {
//             google_id: userInfo.googleId,
//             loginEmail: userInfo.email
//         }
//     } else if (reqData.hasOwnProperty('userID')) {
//         searchString = {
//             "login.facebook_id": reqData.userID
//         }
//         newUser.name = {
//             firstName: reqData.first_name,
//             lastName: reqData.last_name
//         }
//         newUser.login = {
//             facebook_id: reqData.userID,
//             loginEmail: reqData.email
//         }
//     } else {
//         searchString = {
//             "login.loginEmail": reqData.loginEmail
//         }
//         newUser.login = {
//             loginEmail: reqData.loginEmail
//         }
//     }
//     user.findOne(searchString).then(
//         usr => {
//             newUser.save();
//             if (usr) return response.json({ userExists: true, actCreated: false })
//             const payload = {
//                 user: {
//                     loginEmail: newUser.login.loginEmail
//                 }
//             };
//             if (reqData.loginEmail) {
//                 bCrypt.genSalt(10, (err, salt) => {
//                     bCrypt.hash(reqData.password, salt, (err, hash) => {
//                         if (err) throw err;
//                         newUser.login.password = hash;
//                         newUser.save()
//                             .then(
//                                 usrObj => {
//                                     payload.user.id = usrObj._id
//                                 }
//                             )
//                     })
//                 })
//             }
//             jwt.sign(payload, process.env.JWTSECRET, { expiresIn: 3600 }, (err, token) => {
//                 if (err) throw err;
//                 console.log(token)
//                 const respObj = {
//                     token,
//                     payload
//                 }
//                 // response.cookie(respObj);
//                 return response.json({ actCreated: true, userExists: false,
//                 user: newUser});
//             });
//         }
//     ).catch(
//         err => {
//             console.log(err);
//         }
//     )
// })

// module.exports = router;