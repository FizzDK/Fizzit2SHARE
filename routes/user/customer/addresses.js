const exPress = require("express"),
    customer = require(`../../../models/Customer`),
    addresses = require(`../../../models/Address`),
    verifyuser = require(`../../../../middleware/authmiddle`),
    router = exPress.Router();

router.get(`/Addresses`, verifyuser, (request, response) => {
    const usr = request.body.user;
    customer.findOne({ user: usr.id })
        .then(
            (custObj) => {
                return response.json(custObj.addresses)
            }
        ).catch(
            (err) => {
                response.json(err)
            }
        )
})
router.post(`/add`,verifyuser, (request,response) => {
    const    {user, addObj}     = request.body;
    addresses.create(addObj)
    .then(
        addressObj => {
            customer.findOne({user: user.id})
            .then(
                custObj =>{
                    custObj.addresses.push(addressObj)
                    custObj.save()
                    .then(
                        savedCustObj =>{
                            return response.json(savedCustObj.addresses)
                        }
                    )
                }
            ).catch(
                err =>{
                    return response.json(err);
                }
            )
        }
    )
})

router.post(`/:addressid/:action`, verifyuser, (request, response) => {
    const           {addressID, action}       =         request.params,
                    addData                           =         request.body.data,
                    updateItems                       =         addData.items;
    if (action === "Delete"){
        addresses.findByIdAndDelete(addressID).then(
            deletedAddress => {
                return response.json({deletedAddress, msg: "Address deleted"})
            }
        ).catch(
            err => {
                return  response.json(err,{msg: "Database delete error"});
            }
        )
    }
    addresses.findById(addressID)
    .then(
        addObj => {
            for (var [key,value] in updateItems){
                addObj[key] = value;
            }
            addObj.save()
            .then(
                savedaddObj =>{
                    return response.json(savedaddObj)
                }
            ).catch(
                err =>{
                    return response.json(err,{msg: "Database save error"})
                }
            )
        }
    )
})

module.exports = router;