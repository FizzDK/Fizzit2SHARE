import React, { Component } from 'react';
import Clock from '../../Icons/Clock.png';


class My_Orders extends Component {
    render() {
        return (
            <div className='my_order_pageContainer'>

                <div className='upcoming_orderWrapper'>
                    <h4 className='order_sub_heading'> Upcoming </h4>
                    <div className='left_border'></div>
                    <div className='upcoming_order'>
                        <div className='order_timeWrapper'>
                            <img src={Clock} alt='clock' width='16%' ></img>
                            <h3>Thrusday, 15:00</h3>
                            <h4>14 Nov 2019</h4>
                        </div>

                        <table>
                            <tbody>
                                <tr>
                                    <th> Item: </th>
                                    <td> CO2 cartridge </td>
                                </tr>
                                <tr>
                                    <th> Quantity: </th>
                                    <td> 1 </td>
                                </tr>
                                <tr>
                                    <th> Total price: </th>
                                    <td> 79kr </td>
                                </tr>
                                <tr>
                                    <th> Order number: </th>
                                    <td>73849749</td>
                                </tr>
                                <tr>
                                    <th> Address: </th>
                                    <td> Robert Jacobsens Vej 65, 798</td>
                                </tr>
                            </tbody>
                        </table>

                        <button className='change_order'> Change </button>
                    </div>
                </div>
                <div>
                    <h4 className='order_sub_heading'> Order history </h4>
                    <div className='left_border'></div>
                    <div className='mob_orderHistory'>
                        <table>
                            <thead>
                                <tr className='headerStyle'>
                                    <th> Date </th>
                                    <th> Items </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 12/02/16 </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 12/02/16 </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 14/12/16 </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 12/12/16 </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 14/12/16 </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 12/12/16 </td>
                                    <td> Despatched </td>
                                    <td>
                                        <button>  View </button>
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

export default My_Orders