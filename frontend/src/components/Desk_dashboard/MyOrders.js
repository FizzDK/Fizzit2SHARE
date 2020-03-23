import React, { Component } from 'react';
import Cart from '../../Icons/Cart1.png';
import Location from '../../Icons/Location.png';
import Clock from '../../Icons/Clock.png';
import '../../css files/myorder.css';

class MyMembership extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className='dash_pageContainer'>

                <div className='' >
                    <div className='dash_headingWrapper'>
                        <h3 className='dash_heading'> My orders  </h3>
                        <div className='dash_left_border'></div>
                    </div>
                    <h4 className='sub_heading'> Upcoming </h4>

                    <div className='upcoming_orderContainer'>
                        <div className='upcoming_order_details'>
                            <div className='detail_section'>
                                <img src={Cart} alt='cartridge' width='25%'  />
                                <h4> CO2 cartridge </h4>
                                <p> Quantity: 1</p>
                            </div>
                            <div className='detail_section'>
                                <img src={Location} alt='location' width='20%' />
                                <h4> Home address </h4>
                                <p> Robert Jacobsens</p>
                            </div>
                            <div className='detail_section'>
                                <img src={Clock} alt='clock' width='24%' />
                                <h4> Thrusday, 15:00 </h4>
                                <p> 14 Nov 2019 </p>
                            </div>
                        </div>

                        <div className='order_price_details'>
                            <table className='order_price_number'>
                                <tbody>
                                    <tr>
                                        <th> Total price: </th>
                                        <td> 79kr </td>
                                    </tr>
                                    <tr>
                                        <th> Order number: </th>
                                        <td> 927589259 </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div>
                                <button className='order_change'> Change </button>
                            </div>
                        </div>

                    </div>

                    <h4 className='sub_heading'> Order history </h4>
                    <div className='order_history_table'>
                        <table>
                            <thead>
                                <tr className='headerStyle'>
                                    <th> Order </th>
                                    <th> Date </th>
                                    <th> Address </th>
                                    <th> Order price </th>
                                    <th> Status </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 27597593 </td>
                                    <td> 12/02/16 </td>
                                    <td> Home address </td>
                                    <td> 87.2kr </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View order</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 27597593 </td>
                                    <td> 12/02/16 </td>
                                    <td> Home address </td>
                                    <td> 87.2kr </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View order</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 74923847 </td>
                                    <td> 14/12/16 </td>
                                    <td> Work address </td>
                                    <td> 27.2kr </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View order</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 75486498 </td>
                                    <td> 12/12/16 </td>
                                    <td> Home address </td>
                                    <td> 187.2kr </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View order</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyMembership