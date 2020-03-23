import React, { Component } from 'react';
import Left_Arrow from '../../Icons/Left_Arrow.png';
import Go from '../../Icons/go.png';
import Contact_Form from '../../Icons/Contact_Form.png';
import BMail from '../../Icons/BMail.png';
import BPhone from '../../Icons/BPhone.png';

class Help extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    goBack() {
        this.props.history.push('/dashboard/profile')
    }

    render() {
        return (
            <div className='my_address_section'>
                <div className='arrow_container'>
                    <img src={Left_Arrow} alt='arrow' width='8%' onClick={this.goBack.bind(this)}></img>
                    <p> Help </p>
                </div>

                <div className='check_faq_page'>
                    <h2> Check our FAQ Page </h2>
                    <img src={Go} alt='arrow' width='25%' ></img>

                    <h4 style={{ fontWeight: '600', color: '#303030' }}> Couldn't find an answer? </h4>
                    <h4> You are welcome to contact us.</h4>

                    <table className='contact_details'>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={Contact_Form} alt='Contact_Form' width='18%' ></img>
                                    <span>   Contact form </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={BPhone} alt='Contact_Form' width='18%' ></img>
                                    <span>   +42 79283 9829 </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={BMail} alt='Contact_Form' width='18%' ></img>
                                    <span>   info@fizzit.green </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Help