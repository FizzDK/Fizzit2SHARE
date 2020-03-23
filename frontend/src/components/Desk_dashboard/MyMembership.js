import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../css files/order_cartridge.css';

class MyMembership extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className='dash_pageContainer'>

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

                <div className='wouldYou'>
                    <h2> Would you like to change your membership plan?</h2>
                    <Link to='/order' className='seePlans'> See our plans </Link>
                </div>

                </div>
        )
    }
}

export default MyMembership