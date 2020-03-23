import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../../Icons/Black_Cart.png';
import '../../../mob styling/new_order.css';

class DeliveryTime extends Component {
    render() {
        return (
            <div className='deliverytime_container'>

                <h3 > Choose a time when you will be at home in <br />
                    order to exchange your empty patron for .</h3>

                <div className='date_time_container'>
                    <h5> Select time and date </h5>

                    <p>
                        <span> 12 Nov, Thrusday </span>
                        <span> 14:00 - 15:00 </span>
                    </p>
                </div>


            </div>
        )
    }
}

export default DeliveryTime