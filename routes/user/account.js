const           exPress         =       require("express"),
                user            =       require(`../../models/User`),
                customer        =       require(`../../models/Customer`),
                verifyuser      =       require(`../../middleware/authmiddle`),
                router          =       exPress.Router();



router.get(`/`,verifyuser,(request,response) => {
    const usr = request.body.user;
    customer.findOne({user: usr})
    .then(
        (custObj) => {
            if(!custObj){
                user.findOne({user: usr})
                .then( 
                    (extUsr) =>{
                        return response.json(extUsr)
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