import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Summary extends Component {
    render() {
        return (
            <div className='mob_orderSummary'>
                <div>
                    <div className='cart_section'>
                        <div className='cartWrapper'>
                            {/* <img src={Cart} alt='cartridge' width='17%' /> */}
                            <h4> CO2 cartridge </h4>
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <input defaultValue='1' className='cart_input' readOnly />
                        </div>
                        <span style={{ fontWeight: '500', paddingTop: '20px' }}> 79 kr  </span>
                    </div>
                    <div className='delivery_section'>
                        <p> Delivery </p>
                        <span> Free </span>
                    </div>
                    <p className='summary_border'></p>
                    <div className='total_summary '>
                        <h2> Total </h2>
                        <h2> 98 kr </h2>
                    </div>
                </div>

                <div className='summary_checkbox'>

                    <span > Yes, I agree to
                    <Link to='' className='summary_link'> Terms & conditions </Link>,
                    <Link to='' className='summary_link'> privacy </Link> and
                    <Link to='' className='summary_link'> policies</Link>.
                    </span> <br />

                </div>
            </div>
        )
    }
}

export default Summary