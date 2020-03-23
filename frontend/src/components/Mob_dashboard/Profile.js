import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import User from '../../images/Aswin.png';
import Location from '../../Icons/Location.png';
import Method from '../../Icons/Payment_Method.png';
import Membership from '../../Icons/Membership1.png';
import Co2 from '../../Icons/Blue_Co2.png';
import Help from '../../Icons/Help.png';
import Logout from '../../Icons/Logout1.png';
import EditUserInfo from '../Modals/EditUserInfo';
import { connect } from 'react-redux';
import { authToggle_Action } from '../../Store/Actions/actionTypes';
const axios = require('axios').default;
axios.defaults.withCredentials = true;

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            isEditOpened: false
        }
    }
    loggingOut = async () => {

        await axios.post('http://localhost:5000/users/auth/LogUd')
            .then(res => {
                console.log(res)
                if (res) {
                    this.props.dispatch(authToggle_Action(false))
                    return this.props.history.push('/login')
                }
            })
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
            <div>
                <EditUserInfo open={this.state.isEditOpened} toggle={this.toggleEditModal.bind(this)} />

                <div className='profile'>
                    <div >
                        <img src={User} alt='user_profile' className='image--cover'></img>
                    </div>

                    <div className='user_info'>
                        <h4> Tomas Soltes </h4>
                        <p> tomas.soltes@gmail.com </p>
                        <p> +42 78913 90 </p>
                        <button onClick={this.toggleEditModal}> Edit </button>
                    </div>
                </div>

                <div className='profile_navlinks'>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <img src={Location} alt='user_profile' width='30%'></img>
                                </th>
                                <td> <Link to='/dashboard/profile/my_address' className='prof_navlink'> My address</Link> </td>
                            </tr>
                            <tr>
                                <th>
                                    <img src={Method} alt='user_profile' width='50%'></img>
                                </th>
                                <td> <Link to='/dashboard/profile/my_payment' className='prof_navlink'> My Payment methods </Link> </td>
                            </tr>
                            <tr>
                                <th>
                                    <img src={Membership} alt='user_profile' width='45%'></img>
                                </th>
                                <td><Link to='/dashboard/profile/membership' className='prof_navlink'> Membership </Link> </td>
                            </tr>
                            <tr>
                                <th>
                                    <img src={Co2} alt='user_profile' width='45%'></img>
                                </th>
                                <td> <Link to='/dashboard/profile/carbon_savings' className='prof_navlink' > CO2 Savings  </Link></td>
                            </tr>
                            <tr>
                                <th>
                                    <img src={Co2} alt='user_profile' width='45%'></img>
                                </th>
                                <td> <Link to='/dashboard/profile/newsletter' className='prof_navlink'> Newsletter </Link> </td>
                            </tr>
                            <tr>
                                <th>
                                    <img src={Help} alt='user_profile' width='40%'></img>
                                </th>
                                <td><Link to='/dashboard/profile/help' className='prof_navlink'> Help </Link> </td>
                            </tr>
                            <tr>
                                <th>
                                    <img src={Logout} alt='user_profile' width='40%'></img>
                                </th>
                                <td> <button className='prof_navlink' onClick={this.loggingOut}> Logout </button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default connect()(Profile)