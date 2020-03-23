import React, { Component } from 'react';
import Select_Quantity from './OrderStepper/Select_Quantity';
import Delivery_Time from './OrderStepper/Delivery_Time';
import Delivery from './OrderStepper/Delivery';
import Payment from './OrderStepper/Payment';
import Summary from './OrderStepper/Summary';
import Prev from '../../Icons/Prev1.png';
import Next from '../../Icons/Next1.png';

class New_Order extends Component {
    constructor() {
        super()
        this.state = {
            ativeStep: 0
        }
    }

    nextStep = () => {
        this.setState((prev) => {
            return {
                ativeStep: prev.ativeStep + 1
            }
        })
    }

    prevStep = () => {
        this.setState((prev) => {
            return {
                ativeStep: prev.ativeStep - 1
            }
        })
    }

    render() {
        const steps = [
            {
                label: "Select Quantity",
                component: <Select_Quantity />
            },
            {
                label: "Delivery Time",
                component: <Delivery_Time />
            },
            {
                label: "Delivery",
                component: <Delivery />
            },
            {
                label: "Payment",
                component: <Payment />
            },
            {
                label: "Summary",
                component: <Summary />
            },
        ]
        return (
            <div className='stepper_Container'>

                <div className='stepper_top'>
                    <img src={Prev} alt='previous' width='8%' onClick={this.state.ativeStep > 0 ? this.prevStep : null} />
                    <div className='progess_bar'>
                        <span> {this.state.ativeStep + 1}. </span>
                        <span className='label'> {steps[this.state.ativeStep].label}  </span><br />
                        <div className='progress_dots'>
                            <label className={this.state.ativeStep + 1 === 1 ? 'dot active_dot' : 'dot'}></label>
                            <label className={this.state.ativeStep + 1 === 2 ? 'dot active_dot' : 'dot'}></label>
                            <label className={this.state.ativeStep + 1 === 3 ? 'dot active_dot' : 'dot'}></label>
                            <label className={this.state.ativeStep + 1 === 4 ? 'dot active_dot' : 'dot'}></label>
                            <label className={this.state.ativeStep + 1 === 5 ? 'dot active_dot' : 'dot'}></label>
                        </div>
                    </div>
                    <img src={Next} alt='next' width='8%' style={{ visibility: this.state.ativeStep + 1 === steps.length ? 'hidden' : '' }} />
                </div>

                <div className='step_component'>
                    {steps[this.state.ativeStep].component}
                </div>

                <div className='stepper_BTN'>
                    <button className='cont_step' onClick={this.nextStep} style={{ display: `${this.state.ativeStep + 1 === steps.length ? 'none' : ''}` }}> Continue </button>
                    <button className='place_order' style={{ display: `${this.state.ativeStep + 1 === steps.length ? '' : 'none'}` }} > Place order </button>
                </div>

            </div>
        )
    }
}

export default New_Order