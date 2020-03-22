const           exPress         =       require("express"),
                user            =       require(`../../models/User`),
                customer        =       require(`../../models/Customer`),
                verifyuser      =       require(`../../middleware/authmiddle`),
                isLoggedIn      =       require(`../../middleware/isLoggedIn`),
                router          =       exPress.Router();

router.get(`/`,verifyuser,(request,response) => {
    const usr = request.body.user;
    customer.findOne({user: usr.id})
    .then(
        (custObj) => {
            if(!custObj){
                user.findById(usr.id)
                .then( 
                    (usrObj) =>{
                        return response.json(usrObj)
                })
            }
            return response.json(custObj)
        }
    ).catch(
        (err) => {
            response.json(err)
        }
    )
})

router.post(`/deleteProfile`,verifyuser,(request,response) => {
    const usr = request.body.user;
    user.findOneAndDelete({_id: usr.id})
    .then(
        (usrObj) => {
            response.json(usrObj)
        }
    ).catch(
        (err) => {
            response.json(err)
        }
    )
})

router.post(`/:user/:item/:action`,verifyuser,(request,response) => {
    const           action      =           request.param.action,
                    item        =           request.params.item,
                    user         =          request.body.user,
                    oldValue    =           request.body.data.OldValue
                    newValue    =           request.body.data.NewValue;
                

    user.findOne({_id: user.id})
    .then(
        (usrObj) => {
            if(Array.isArray(usrObj[item])){
                const itemIndex = usrObj[item].indexOf(oldValue);
                if (action === "Add"){
                    usrObj[item].push(newValue);
                }
                if (action === "Update"){
                    usrObj[item][itemIndex] = newValue;
                }
                if (action === "Delete"){
                    usrObj[item].splice([itemIndex],1);
                }
            }
            if(item === ("loginEmail" || "password")){
                if (action === "Update"){
                    usrObj[login][item] = newValue
                } else {
                    return response.json({msg: `Warning ${item} cannot be ${action}ed`})
                }
            }
            usrObj[item]    = newValue;
            usrObj.save()
            .then(
                userObj =>{
                    return response.json(userObj)
                }
            ).catch(
                err =>{
                    return response.json(err)
                }   
            )
        }
    ).catch(
        (err) => {
            response.json(err)
        }
    )
})

router.get(`/getStatus`,isLoggedIn, (request,response) =>{
    const   user    = request.body.user;
    console.log(`The result of getStatus call is ${user}`);     
    if (!user){
        return response.json({isAuthenticated: false})
    }
        return response.json({isAuthenticated: true})

})

module.exports = router;