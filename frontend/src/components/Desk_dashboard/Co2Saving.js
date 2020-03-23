import React, { Component } from 'react';
import '../../css files/co2saving.css';

class Co2Saving extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className='dash_pageContainer'>

                <div className='' >
                    <h3 className='dash_heading'> My CO2 savings </h3>
                    <div className='dash_left_border'></div>

                    <div className='co2_contentWrapper'>

                        <div className='tree_hunger'>
                            <h3> You are now Tree hunger </h3>
                            <p> Don't like the content or simply don't want to us to send you mails anymore?</p>
                        </div>
                        <span className='spacer'></span>
                        <div>
                            <button className='unsubscribe'> Unsubscribe </button>
                        </div>
                    </div>

                    <div className='how_much_saved'>
                        <h1> Here will be  infographics how much CO2 you saved </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Co2Saving