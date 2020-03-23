import React, { Component } from 'react';
import Bottom_Bar from './Bottom_Bar';
import My_Orders from './My_Orders';
import New_Order from './New_Order';
import Profile from './Profile';
import My_Address from './My_Address';
import My_Payment from './My_Payment';
import Membership from './Membership';
import Co2 from './Co2';
import Newsletter from './Newsletter';
import Help from './Help';

import { BrowserRouter, Route } from 'react-router-dom';


class Mob_Dash_Routes extends Component {
    
    render() {
        return (
            <div className='for_mobile_only'>
                <BrowserRouter>

                    <Route exact path='/dashboard/my_orders' component={My_Orders} />
                    <Route exact path='/dashboard' component={New_Order} />
                    <Route exact path='/dashboard/profile' component={Profile} />
                    <Route exact path='/dashboard/profile/my_address' component={My_Address} />
                    <Route exact path='/dashboard/profile/my_payment' component={My_Payment} />
                    <Route exact path='/dashboard/profile/membership' component={Membership} />
                    <Route exact path='/dashboard/profile/carbon_savings' component={Co2} />
                    <Route exact path='/dashboard/profile/newsletter' component={Newsletter} />
                    <Route exact path='/dashboard/profile/help' component={Help} />
                    <Bottom_Bar />
                </BrowserRouter>
            </div>
        )
    }
}

export default Mob_Dash_Routes