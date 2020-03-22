const exPress = require("express"),
    user = require(`../../../../models/User`),
    customer = require(`../../../../models/Customer`),
    order = require('../../../../models/Order'),
    verifyuser = require(`../../../../middleware/authmiddle`),
    subscribeUser   = require('../../subscribe'),
    router = exPress.Router();

router.get(`/orders`, verifyuser, (request, response) => {
    const usr = request.body.user;
    customer.findOne({ user: usr })
        .then(
            (custObj) => {
                order.find({ customer: custObj.id })
                    .then(
                        (orderlist) => {
                            response.json(orderlist)
                        }
                    )
            }
        ).catch(
            (err) => {
                response.json(err)
            }
        )
})

router.post(`/PlaceOrder`, verifyuser, (request, response) => {
    const       {user, cart, paymentToken}    =   request.body;
    if(cart.refill){
        if (cart.plan) { 
            if (user.status === "Member") {
                return response.json({isMember: true});
            }
            subscribeUser(user, cart.plan, paymentToken)
            .then(
                subObj => {
                    user.status =  "Member";
                    orderRefills(user, refill.number)
                }
            )
        }               
    }
})                                                                          

router.post(`/changeOrder`, verifyuser, (request, response) => {
    const orderdata = request.body.orderdata;
    order.findOneAndUpdate({ id: orderdata.id })
        .then(
            (orderObj) => {
                orderObj.noRefills = request.body.noRefills,
                orderObj.shippingAdd = request.body.noRefills
                orderObj.save()
                    .then(
                        response.json(orderObj)
                    )
            }
        ).catch(
            (err) => {
                response.json(err)
            }
        )
})

router.post(`/cancelOrder`, verifyuser, (request, response) => {
    const order = request.body.order;
    order.deleteOne({ id: order.id })
        .then(
            (orderObj) => {

            }
        ).catch(
            (err) => {
                response.json(err)
            }
        )
})

module.exports = router;

// app.get("/Ordrer", isLoggedIn, function (request, response) {
// 	Product.findOne({ name: "FizzCO2" }).then(
// 		function (prodObj) {
// 			if (!isLoggedIn) {
// 				var refillPrice = prodObj.price;
// 			} else {
// 				findCust().then(
// 					function (custObj) {
// 						refillPrice = custObj.plans
// 					}
// 				).catch(
// 					function (err) {
// 						console.log(err);
// 						response.render("MsgFailed");
// 					}
// 				)
// 			}
// 		}
// 	).catch(
// 		function (err) {
// 			console.log(err);
// 			response.render("MsgFailed");
// 		}
// 	)
// });