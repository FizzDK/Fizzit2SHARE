import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Bar from '../../Icons/Bottom_bar.png';
import User from '../../Icons/User.png';
import Carts from '../../Icons/Carts.png';
import Cart from '../../Icons/Cart.png';
import User1 from '../../Icons/User1.png';
import Carts1 from '../../Icons/Carts1.png';
import Cart1 from '../../Icons/Cart1.png';
import '../../css files/mob_dash.css';

class Bottom_Bar extends Component {

    constructor() {
        super()
        this.state = {
            activeBottomBarlink: 0,
        }
    }

    componentWillMount() {

        this.setState({ activeBottomBarlink: JSON.parse(localStorage.getItem('activeBottomBarlink')) })
    }

    changeActiveIndex = (newIndex) => {
        this.setState({ activeBottomBarlink: newIndex });
        localStorage.setItem('activeBottomBarlink', newIndex)
    }

    componentWillUnmount() {
        localStorage.setItem('activeBottomBarlink', 0)
    }

    render() {
        return (
            <div>
                <div className='bottom_bar_wrapper'>
                    <img src={Bar} alt='Bottom_Bar' width='100%'></img>

                    <div >
                        <ul className='bottom_bar_links'>
                            <li>
                                <NavLink exact to='/dashboard/my_orders' className='mob_bar_link' activeClassName='active_link' onClick={() => this.changeActiveIndex(1)}>
                                    <img src={this.state.activeBottomBarlink === 1 ? Carts1 : Carts} alt='carts' width='13%'></img>
                                    <span>
                                        My orders
                                   </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to='/dashboard' className='mob_bar_link custom_styling' activeClassName='active_link' onClick={() => this.changeActiveIndex(0)}>
                                    <div>
                                        <img src={this.state.activeBottomBarlink === 0 ? Cart1 : Cart} alt='carts' width='28%'></img>
                                    </div>
                                    <span>
                                        New order
                                   </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/profile' className='mob_bar_link' activeClassName='active_link' onClick={() => this.changeActiveIndex(2)}>
                                    <img src={this.state.activeBottomBarlink === 2 ? User1 : User} alt='carts' width='20%'></img>
                                    <span>
                                        Profile
                                   </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bottom_Bar