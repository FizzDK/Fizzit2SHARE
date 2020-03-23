import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Left_Arrow from '../../Icons/Left_Arrow.png';

class Membership extends Component {

    constructor() {
        super()
        this.state = {
            isSubscribed: false,
         
        }
    }

    goBack() {
        this.props.history.push('/dashboard/profile')
    }
    gotoPlans() {
        this.props.history.push('/order')
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
            <div>
               
                <div className='my_address_section'>
                    <div className='arrow_container'>
                        <img src={Left_Arrow} alt='arrow' width='8%' onClick={this.goBack.bind(this)}></img>
                        <p> Membership </p>
                    </div>

                    <div className='if_dont_membership' style={{ display: !this.state.isSubscribed ? '' : 'none' }}>
                        <h1> You don't have <br /> any membership plan</h1>

                        <p> We calculated that you could save <br /> more than
                       <span> 60kr per month </span> if you <br /> would subscribed to or <span>Fizzit Lover </span> </p>

                        <p className='dont_believe'> Don't believe? <button onClick={this.toggleSubs}> See calculations </button></p>

                        <Link to='/order' className='our_plans' > See our plans </Link>
                    </div>

                    <div style={{ display: this.state.isSubscribed ? '' : 'none' }}>

                        <div className='fizzit_lover'  >
                            <h2 > Fizzit Lover  </h2>
                            <p > Perfect for consumption <br /> 2-3 cartridges per month</p>
                            <div style={{ position: 'relative' }}>
                                <sup className='lover_kr'>kr</sup> <span className='lover_month_figure'> 29 </span>
                                <span className='lover_month' > /month </span>
                            </div>
                            <div className='ms_planBorder' style={{ borderColor: 'white' }}></div>
                            <span className='lover_cartridge'> Cartridge: 69 kr</span>

                        </div>

                        <div style={{ marginBottom: '100px' }}>
                            <button className='mob_dash_button' onClick={this.toggleSubs}> Unsubscribe </button>
                            <button className='mob_dash_button'> Change  </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Membership