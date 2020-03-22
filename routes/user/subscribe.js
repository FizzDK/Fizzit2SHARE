const           user            =       require(`../../models/User`),
				customer        =       require(`../../models/Customer`),
				plan            =       require(`../../models/Plan`),
				subscription    =       require(`../../models/Subscription`);
                

const stripe =      require("stripe")("sk_test_0kGdk9ExaQ0bQYCH37BCsA1X");

subscribeUser = (currentUser, selectedplan, paidToken) =>{
    plan.findOne({ planName: selectedplan.planName }).then(
        function (fizzPlan) {
            stripe.customers.create({
                email: currentUser.login.loginEmail,
                phone: currentUser.login.mobilePhone,
                name: currentUser.firstName + " " + currentUser.lastName,
                source: paidToken
            }).then(
                function (stripeCust) {
                    customer.findOne({user: user.id})
                    .then(
                        fizzCustomer =>{
                            if(!fizzCustomer){
                                return fizzCustomer = customer.create({
                                    user: user.id,
                                    stripeID: stripeCust.id
                                })
                            }
                            fizzCustomer.stripeID = stripeCust.id
                            return fizzCustomer
                        }
                    ).catch(
                        err =>{
                            response.json({err})
                        }
                    )
                }
            ).then(
                function (fizzCus) {
                    return stripe.subscriptions.create({
                        customer: fizzCus.stripeID,
                        items: [{
                            plan: fizzPlan.stripeID
                        }]
                    })
                }
            ).then(
                function (stripeSub) {
                    return subscription.create({
                        plan: fizzPlan,
                        startDate: stripeSub.start_date,
                        stripeID: stripeSub.id
                    })
                }
            ).then(
                function (fizzSub) {
                    return customer.findOneAndUpdate({user: user.id },
                        { subscriptions: [fizzSub] }
                    );
                }
            ).then(
                function (fizzCust) {
                    return subscription.findOneAndUpdate({ plan: fizzPlan },
                        { customer: fizzCust._id }
                    )
                }
            ).finally(
                function (fizzSub) {
                    return response.json(fizzSub);
                }
            ).catch(
                function (err) {
                    return response.json(err);
                }
            )
        }
    ).catch(
        function (err) {
            return response.json(err);
        }
    )

}

unsubscribeUser = (user, subObj) =>{
    stripe.subscriptions.del(subObj.stripeID)
    .then(
        strpSub =>{
            return subscription.findOne({stripeID: strpSub.id})
        }
    ).then(
        fizzSub => {
            return subscription.findOneAndDelete({_id:fizzSub._id}) 
        }
    ).then(
        delfizzSub =>{
            customer.findOne({user: user._id})
            .then(
                custObj =>{
                    const itIndex = custObj.subscriptions.indexOf(delfizzSub);
                    custObj.subscriptions.splice(itIndex,1)
                    return response.json(custObj)
                }
            )
        }
    ).catch(
        err =>{
            return response.json(err)
        }
    )
}

module.exports.subscribeUser = subscribeUser;
module.exports.unsubscribeUser = unsubscribeUser;