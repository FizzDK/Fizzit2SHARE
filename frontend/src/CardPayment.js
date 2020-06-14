import React, { Component, Fragment } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

import '../../css files/order_cartridge.css';


class CardPayment extends Component {
    constructor(props){
        super(props)
        this.state={
            amount: 25
        }
    }
    processCard = async ({ elements, stripe }) =>{
        console.log('Processing Card')
        console.log({ elements, stripe })
        // Block native form submission.
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardNumber = elements.getElement(CardNumberElement)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumber,
            billing_details: {
                name: this.props.user.name.firstName + " " + this.props.user.name.lastName
            }
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            this.props.processPayment(this.state.amount,paymentMethod);
        }
    }



    componentDidUpdate(prevProps, prevState) {
        if (this.props.paymentRequest) {
            const { stripe, elements } = this.props;
            this.processCard({ elements, stripe })
        }
    }

    stripeCard =() =>{
        return (
            <Fragment>
                <CardNumberElement className="MyCardElement" id='cardNumber' style={{
                    base: {
                        color: "#32325d",
                        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                        fontSmoothing: "antialiased",
                        fontSize: "16px",
                        "::placeholder": {
                            color: "#aab7c4"
                            }
                        },
                    invalid: {
                        color: "#fa755a",
                        iconColor: "#fa755a"
                    }
                }} />
                <CardExpiryElement />
                <CardCvcElement />
                <div style={{ visibility: this.props.cart.plan.planName ? 'hidden' : '' }}>
                    <label htmlFor="savecard">Amount</label>
                    <input id="amount" type="number" value={this.state.amount} onChange={this.changeAmount} ></input>
                </div>
            </Fragment>
        )
    }
    
    
    render() {
        console.log(this.state)
        return(
        this.stripeCard()
        )
    }
}

export default CardPayment


