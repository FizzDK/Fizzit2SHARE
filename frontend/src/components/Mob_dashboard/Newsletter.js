import React, { Component } from 'react';
import Left_Arrow from '../../Icons/Left_Arrow.png';
import Chekbox from '../../Icons/Green-checkbox.png';
import Checkbox from '../../Icons/Checkbox1.png';

class Newsletter extends Component {

    constructor() {
        super()
        this.state = {
            isSubscribed: false
        }
    }

    goBack() {
        this.props.history.push('/dashboard/profile')
    }

    toggleSubs = () => {
        this.setState(prev => {
            return {
                isSubscribed: !prev.isSubscribed
            }
        })
    }

    render() {
        return (
            <div className='my_address_section'>
                <div className='arrow_container'>
                    <img src={Left_Arrow} alt='arrow' width='8%' onClick={this.goBack.bind(this)}></img>
                    <p> Newsletter </p>
                </div>

                <div className='Co2_section1' style={{ display: !this.state.isSubscribed ? '' : 'none' }}>
                    <h1> Sign up <br /> for our Newsletter </h1>
                    <div >

                        <table className='newsletter_subs_benefits'>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={Chekbox} alt='checkbox' width='6%'></img>
                                        Stay up to date with our news
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={Chekbox} alt='checkbox' width='6%'></img>
                                        Learn more about environment
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={Chekbox} alt='checkbox' width='6%'></img>
                                        Your email is safe with us, we don't spam
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <input type='email' placeholder='Enter your email address' className='input_email' />
                    </div>

                    <button className='subs_BTN' onClick={this.toggleSubs}> Subscribe </button>
                </div>

                <div className='Co2_section2' style={{ display: this.state.isSubscribed ? '' : 'none' }}>
                    <div className='subscribe_checkpoint'>

                        <img src={Checkbox} alt='checkbox' width='15%'></img>
                        <p>
                            You are now subscriber <br /> of our newsletter
                        </p>
                    </div>

                    <table className='newsletter_subs_benefits'>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={Chekbox} alt='checkbox' width='6%'></img>
                                    Stay up to date with our news
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={Chekbox} alt='checkbox' width='6%'></img>
                                    Learn more about environment
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={Chekbox} alt='checkbox' width='6%'></img>
                                    Your email is safe with us, we don't spam
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button className='mob_dash_button' onClick={this.toggleSubs}> Unsubscribe </button>
                </div>
            </div>
        )
    }
}

export default Newsletter