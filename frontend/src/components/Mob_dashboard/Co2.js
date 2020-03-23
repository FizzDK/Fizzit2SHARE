import React, { Component } from 'react';
import Left_Arrow from '../../Icons/Left_Arrow.png';
import Chekbox from '../../Icons/Green-checkbox.png';
import Checkbox from '../../Icons/Checkbox1.png';

class Co2 extends Component {

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
                    <p> CO2 Savings </p>
                </div>

                <div className='Co2_section1' style={{ display: !this.state.isSubscribed ? '' : 'none' }}>
                    <h1> Sign up <br /> for our Tree Lover </h1>

                    <p> Short sentence about what Tree Lover is.</p>
                    <p>
                        <img src={Chekbox} alt='checkbox' width='5%'></img>
                        Short sentence about benefits of Tree Lover
                    </p>

                    <button className='subs_BTN' onClick={this.toggleSubs}> Subscribe </button>
                </div>

                <div className='Co2_section2' style={{ display: this.state.isSubscribed ? '' : 'none' }}>
                    <div className='subscribe_checkpoint'>

                        <img src={Checkbox} alt='checkbox' width='15%'></img>
                        <p>
                            You are now subscriber <br /> of Tree Lover
                        </p>
                    </div>

                    <p className='here_info'> Here will be infographics <br /> how much CO2 you saved </p>

                    <button className='mob_dash_button'  onClick={this.toggleSubs}> Unsubscribe </button>
                </div>
            </div>
        )
    }
}

export default Co2