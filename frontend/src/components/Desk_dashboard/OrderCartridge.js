import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import Calender from './Calender'
import { Link } from 'react-router-dom';
import Cart from '../../Icons/Black_Cart.png';
import Plus from '../../Icons/Plus1.png';
import Minus from '../../Icons/Minus1.png';
import Checkbox from '../../Icons/Checkbox1.png';
import Checkbox2 from '../../Icons/Checkbox2.png';
import Mastercard from '../../Icons/Mastercard.png';
import Add_Address from '../Modals/Add_Address';
import axios from 'axios';
import StripeProvider from '../StripeProvider';
import StripeCheckout from 'react-stripe-checkout';

import '../../css files/order_cartridge.css';

class OrderCartridge extends Component {

    constructor() {
        super()
        this.state = {
            CO2Input: 1,
            isAddOpened: false
        }
    }

    // componentWillMount() {
    //     axios.get('')
    //         .then(res => res.json())
    //         .catch(err => console.log(err))
    // }

    placeOrder = () => {
        let orderDetils = {}
        axios.post('', { orderDetils })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    increment_co2Cart = () => {
        this.setState(prev => {
            return {
                CO2Input: prev.CO2Input + 1
            }
        })
    }

    decrement_co2Cart = () => {
        this.setState(prev => {
            return {
                CO2Input: prev.CO2Input - 1
            }
        })
    }

    toggleCheck = (event) => {
        console.log(event.target.checked)
    }

    toggleAddModal = () => {
        this.setState(prev => {
            return {
                isAddOpened: !prev.isAddOpened
            }
        })
    }

    render() {
        return (
            <div>
                <div style={{ position: 'relative' }} >

                    <Add_Address open={this.state.isAddOpened} toggle={this.toggleAddModal.bind(this)} />
                </div>

                <div className='dash_pageContainer'>

                    <div className='dash_headingWrapper'>
                        <h3 className='dash_heading'> Delivery time </h3>
                        <div className='dash_left_border'></div>
                    </div>

                    <Calender />

                    <div className='dash_headingWrapper'>
                        <h3 className='dash_heading'> My membership </h3>
                        <div className='dash_left_border'></div>

                    </div>

                    <div className='cart_sectionWrapper '>
                        <div className='display_flex '>

                            <div className='selected_plan'>
                                <h3> Soda lover </h3>
                                <p> Exchange your empty patron for a full </p>
                                <p style={{ color: '#009EE2', fontWeight: '400' }}> Change membership plan </p>
                            </div>

                            <span className='spacer'></span>

                            <div className='plan_price'>
                                <span > 19 </span>    kr / month
                            <p> Price for patron: 79 kr </p>
                            </div>
                        </div>
                    </div>

                    <div className='delivery_payment_container'>
                        <div>
                            <div className='dash_headingWrapper'>
                                <h3 className='dash_heading'> Delivery address  </h3>
                                <div className='dash_left_border'></div>
                            </div>

                            <div className='delivery_address '>
                                <span > Default address </span>
                                <Button onClick={this.toggleAddModal}> Change </Button>
                                <p className='grayBorder'></p>
                                <p > Tomas Soltes </p>
                                <p> Robert Jacobsens Vej 65, 502 </p>
                                <p> Kobenhavn S, 2300, Denmark </p>
                                <p> +4581910914 </p>

                            </div>
                        </div>
                        <div>
                            <div className='dash_headingWrapper'>
                                <h3 className='dash_heading'> Paymnet method  </h3>
                                <div className='dash_left_border'></div>
                            </div>

                            <div className='delivery_payment '>
                                {/* <StripeProvider /> */}
                            </div>
                        </div>
                    </div>


                    <div className='dash_headingWrapper'>
                        <h3 className='dash_heading'> Backup cartridge </h3>
                        <div className='dash_left_border'></div>
                    </div>

                    <div className='cart_sectionWrapper'>
                        <div className='display_flex'>
                            <div className='backup_details'>

                                <div className="custom_checkbox">
                                    <input type="checkbox" onChange={(e) => this.toggleCheck(e)} id='checkbox1' />
                                    <label htmlFor="checkbox1"></label>
                                </div>
                                <h4> Backup cartridge + gas    </h4>
                                <p>
                                    We lend you a backup cartridge without charge, so you <br />
                                    always have one for replacement. You only pay for a gas.
                            </p>
                            </div>
                            <span className='spacer'></span>
                            <div className='backup_price'>
                                <span style={{ fontSize: '27px', fontWeight: '500' }}> 79</span>
                                <span> kr </span>
                            </div>
                        </div>
                    </div>


                    <div className='dash_headingWrapper'>
                        <h3 className='dash_heading'> Summary </h3>
                        <div className='dash_left_border'></div>
                    </div>

                    <div className='order_summary'>
                        <div className='cart_section'>
                            <div className='cartWrapper'>
                                <img src={Cart} alt='cartridge' width='17%' />
                                <h4> CO2 cartridge </h4>
                            </div>
                            <div style={{ paddingTop: '20px' }}>
                                <img src={Minus} alt='decrement_icon' width='15%' onClick={this.decrement_co2Cart} style={{ position: 'relative', top: '-4px', cursor: 'pointer' }} />
                                <input value={this.state.CO2Input} className='cart_input' readOnly />
                                <img src={Plus} alt='increment_icon' width='15%' onClick={this.increment_co2Cart} style={{ cursor: 'pointer', position: 'relative', top: '2px' }} />
                            </div>
                            <span style={{ fontWeight: '500', paddingTop: '20px' }}> {79 * this.state.CO2Input} kr  </span>
                        </div>
                        <div className='delivery_section'>
                            <p> Delivery </p>
                            <span> Free </span>
                        </div>
                        <p className='summary_border'></p>
                        <div className='total_summary '>
                            <h2> Total </h2>
                            <h2> 98 kr </h2>
                        </div>
                    </div>


                    <div className='place_orderContainer'>


                        {/* <div className="custom_checkbox">
                        <input type="checkbox" onChange={(e) => this.toggleCheck(e)} id='checkbox' />
                        <label htmlFor="checkbox"></label>
                    </div> */}
                        <span> Yes, I agree to
                        <Link to='' className='summary_link'> Terms & conditions </Link>,
                        <Link to='' className='summary_link'> privacy </Link> and
                        <Link to='' className='summary_link'> policies</Link>.
                    </span> <br />
                        <div style={{ margin: '40px 0' }}>
                            <Link to='' className='place_order_link'> Place order </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default OrderCartridge