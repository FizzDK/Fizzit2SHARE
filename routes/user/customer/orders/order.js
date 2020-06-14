const exPress = require('express'), 
    router = exPress.Router();
    const stripe = require("stripe")("sk_test_0kGdk9ExaQ0bQYCH37BCsA1X");


router.post(`/PlaceOrder`, async (request, response) => {
    const       amount    =   request.body.amount,
                paymentMethod    =   request.body.paymentMethod,
                IntentsObj = {
                                amount: amount*100,
                                currency: 'dkk',
                                payment_method: paymentMethod.id
                            },
                confirmedPI = await stripe.paymentIntents.create(IntentsObj)
                .then(
                    strpPI =>{
                        console.log(`The payment Intent object is ${strpPI}`)
                        return stripe.paymentIntents.confirm(strpPI.id,{
                            payment_method: paymentMethod.id
                        })
                    }
                ).then(
                     strpCPI =>{
                            console.log(`The confirmed payment Intent object is ${strpCPI.status}`)
                        return strpCPI
                    }
                ).catch(
                    err =>{
                        return err
                    }
                )
        console.log(confirmedPI);
        response.json(confirmedPI)
})




module.exports = router;

