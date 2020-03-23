import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WCart from '../../../Icons/White_Cartridge.png';
import WPlus from '../../../Icons/White_Plus.png';
import WMinus from '../../../Icons/White_Minus.png';
import '../../../mob styling/new_order.css';

class SelectQuantity extends Component {
    render() {
        return (
            <div >
                <div className='cart_quantityWrapper'>
                    <div style={{ position: 'relative' }}>
                        <img src={WCart} alt='white_cartridge' width='8%'></img>
                        <span className='co2'> CO2 cartridge </span>
                        <span className='co2_price' > 79kr </span>
                    </div>

                    <p> The price is based on your<br /> membership plan.</p>
                    <div className='see_plans'>
                        <Link to='' className='see_plan_link'>See other plans</Link>
                        <div className='cart_input_section'>
                            <img src={WMinus} alt='decrement' width='11%' style={{ position: 'relative', top: '-4px' }}></img>
                            <input type='number' defaultValue='1' />
                            <img src={WPlus} alt='increment' width='11%'></img>
                        </div>
                    </div>
                </div>

                <div className='backup_cart'>

                    <div className="custom_checkbox mob_backup">
                        <input type="checkbox"  id='checkbox' />
                        <label htmlFor="checkbox"></label>
                    </div>
                    <div className='cart_gas'>
                        <h5> Backup cartridge + gas </h5>
                        <span> 79kr </span>
                    </div>

                    <p> We lend you a backup cartridge <br /> without charge,
                        so you always have <br /> one for replacement. You only pay for a gas.</p>
                </div>

            </div>
        )
    }
}

export default SelectQuantity