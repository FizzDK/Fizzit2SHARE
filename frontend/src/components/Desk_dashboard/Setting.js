import React, { Component } from 'react';
import { Button } from 'antd';
import Mastercard from '../../Icons/Mastercard.png';
import Visa from '../../Icons/Visa.png';
import Plus from '../../Icons/Plus2.png';
import Checkbox from '../../Icons/Checkbox3.png';
import axios from 'axios';
import EditUserInfo from '../Modals/EditUserInfo';

import '../../css files/setting.css';

class Setting extends Component {


    constructor() {
        super()
        this.state = {
            isEditOpened: false
        }
    }

    newspaperSubs = () => {

        let subsEmail = this.refs.email.value;
        if (!subsEmail) return;

        axios.post('', { newsletterSubsEmail: subsEmail })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    toggleEditModal = () => {
        this.setState(prev => {
            return {
                isEditOpened: !prev.isEditOpened
            }
        })
    }

    render() {
        return (
            <div className='dash_pageContainer'>
                <EditUserInfo open={this.state.isEditOpened} toggle={this.toggleEditModal.bind(this)} />
                <h3 className='dash_heading'>Personal info </h3>
                {/* <div className='dash_left_border'></div> */}


                <div className='setting_page_section'>
                    <div className='user_personal_info'>
                        <button className='edit_tag' onClick={this.toggleEditModal}> Edit </button>
                        <div >
                            <table className='info'>
                                <tbody>
                                    <tr>
                                        <th> Name </th>
                                        <td> Tomas Soltes </td>
                                    </tr>
                                    <tr>
                                        <th> Email </th>
                                        <td> tomas.soltes@gmail.com </td>
                                    </tr>
                                    <tr>
                                        <th> Phone Number </th>
                                        <td> +728247979 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='signin_option'>
                        <h3> You are now signed in <br /> with Facebook. </h3>
                        <p> If you want to sign in with your <br /> email you have to create a password.</p>

                        <button> Create a password </button>
                    </div>
                </div>

                <h3 className='dash_heading'>Delivery address <img src={Plus} alt='plus' width='2.1%' className='plus_icon' /> </h3>
                {/* <div className='dash_left_border'></div> */}

                <div className='setting_page_section'>

                    <div className='delivery_addres'>
                        <span > Default address </span>
                        <button> Edit </button>
                        <p className='grayBorder'></p>
                        <p > Tomas Soltes </p>
                        <p> Robert Jacobsens Vej 65, 502 </p>
                        <p> Kobenhavn S, 2300, Denmark </p>
                        <p> +4581910914 </p>

                    </div>
                    <div className='delivery_addres'>
                        <span > Work address </span>
                        <button > Edit </button>
                        <p className='grayBorder'></p>
                        <p > Tomas Soltes </p>
                        <p> Robert Jacobsens Vej 65, 502 </p>
                        <p> Kobenhavn S, 2300, Denmark </p>
                        <p> +4581910914 </p>

                    </div>
                </div>

                <h3 className='dash_heading'>Payment method <img src={Plus} alt='plus' width='2.1%' className='plus_icon' /> </h3>
                {/* <div className='dash_left_border'></div> */}

                <div className='setting_page_section' style={{ marginBottom: '50px' }}>
                    <div className='delivery_payment ' style={{ marginRight: '40px' }}>
                        <div className='delivery_innerWrrapper'>

                            <div className='cardWrapper' >
                                <img src={Mastercard} alt='mastercard' width='35%' draggable={false}></img>
                                <span className='card_title'> Mastercard</span> <br />
                                <span className='card_number'> **** **** **** **** 3786 </span>
                            </div>

                            <Button> Edit </Button>
                        </div>
                    </div>
                    <div className='delivery_payment '>
                        <div className='delivery_innerWrrapper'>

                            <div className='cardWrapper' >
                                <img src={Visa} alt='mastercard' width='35%' draggable={false}></img>
                                <span className='card_title'> Visa</span> <br />
                                <span className='card_number'> **** **** **** **** 3786 </span>
                            </div>

                            <Button> Edit </Button>
                        </div>
                    </div>

                </div>

                <h3 className='dash_heading'>Newsletter subscription (Subscribed)  </h3>
                {/* <div className='dash_left_border'></div> */}

                <div className='newsletter_sectionContainer'>
                    <div className='newsletter_innerWrapper'>
                        <div className='newsletter'>
                            <h4 > You are now subscriber of our newsletter </h4>
                            <div>
                                <img src={Checkbox} alt='checkbox' width='1.6%' className='check_icon'></img>
                                <span> Stay up to date with our latest news </span>
                            </div>
                            <div>
                                <img src={Checkbox} alt='checkbox' width='1.6%' className='check_icon'></img>
                                <span> Learn more about environmnet </span>
                            </div>
                            <div>
                                <img src={Checkbox} alt='checkbox' width='1.6%' className='check_icon'></img>
                                <span>  Your email is safe with us, we don't spam </span>
                            </div>
                        </div>
                        <span className='spacer'></span>
                        <div style={{ marginTop: '100px' }}>
                            <button className='unsubscribe'> Unsubscribe </button>
                        </div>
                    </div>
                </div>

                <h3 className='dash_heading'>Newsletter subscription (Not subscribed)  </h3>
                <div className='dash_left_border'></div>

                <div className='newsletter_sectionContainer'>
                    <div className='newsletter_innerWrapper'>
                        <div className='newsletter'>
                            <h2> Sign up for our Newsletter </h2>
                            <div>
                                <img src={Checkbox} alt='checkbox' width='1.6%' className='check_icon'></img>
                                <span> Stay up to date with our latest news </span>
                            </div>
                            <div>
                                <img src={Checkbox} alt='checkbox' width='1.6%' className='check_icon'></img>
                                <span> Learn more about environmnet </span>
                            </div>
                            <div>
                                <img src={Checkbox} alt='checkbox' width='1.6%' className='check_icon'></img>
                                <span>  Your email is safe with us, we don't spam </span>
                            </div>
                        </div>
                        <span className='spacer'></span>
                        <div className='subscribeInput'>
                            <input type='email' ref='email' placeholder='Enter your email address' /> <br />
                            <button className='Subscribe'> Subscribe </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Setting