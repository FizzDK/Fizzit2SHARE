import React, { Component } from 'react';
import CardPayment from './CardPayment';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import '../../css files/order_cartridge.css';

const stripePromise = loadStripe(`pk_test_KumvLf3gFSmKo3Nyr2vOlGla`);

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paymentRequest: false,
            paid: false,
            processPay: false
        }
    }
    
    componentDidUpdate = ()=>{
        if(this.state.processPay){
            this.setState({
                paymentRequest: false
            })
        }
    }

    processPayment = async (amount,paymentMethod) => {
      console.log(`Processing Payment now`);
      await axios.post(`/users/${this.state.user.login.loginEmail}/orders/PlaceOrder`, {amount,paymentMethod
      }).then(
          servResponse => {
              if (!servResponse.errors){
                this.setState({
                  paymentRequest: false
                })
              }
          }
      ).catch(
          err => {
            this.setState({
              processPay: true
            })
              return toaster.danger('Payment Failed, Check card and other details', { id: 'forbidden-action' })
          }
      )
    }


    render() {
        return (
            this.state.paid ? (<h3>Payment Recieved, Thank you</h3>) :
                (
                    <div>
                        <div style={{ position: 'relative' }} >
                        </div>
                        <div className='dash_pageContainer'>
                            <div className='dash_headingWrapper'>
                                <h3 className='dash_heading'> Delivery time </h3>
                                <div className='dash_left_border'></div>
                            </div>
                            <div>
                            <div className='delivery_payment_container'>
                                <div>
                                    <div className='dash_headingWrapper'>
                                        <h3 className='dash_heading'> Delivery address  </h3>
                                        <div className='dash_left_border'>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='dash_headingWrapper'>
                                        <h3 className='dash_heading'> Paymnet method  </h3>
                                        <div className='dash_left_border'>
                                         </div>
                                    </div>
                                    <div className='delivery_payment '>
                                        <Elements stripe={stripePromise}>
                                            <ElementsConsumer>
                                                {({ elements, stripe }) => (
                                                    <CardPayment
                                                        processPayment={this.props.processPayment}
                                                        paymentRequest={this.state.paymentRequest}
                                                        addtoCart={this.props.addtoCart}
                                                        stripe={stripe}
                                                        elements={elements}
                                                    />
                                                )}
                                            </ElementsConsumer>
                                        </Elements>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='dash_headingWrapper'>
                                <h3 className='dash_heading'> Summary </h3>
                                <div className='dash_left_border'>
                                </div>
                            </div>
                             <div className='place_orderContainer'>
                                <div style={{ margin: '40px 0' }}>
                                    <button 
                                        className='place_order_link' 
                                        onClick={()=>{this.setState({paymentRequest: true})}}
                                    > Place order </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )
        )
    }
}

export default App