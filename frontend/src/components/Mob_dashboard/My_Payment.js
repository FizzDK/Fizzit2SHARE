import React, { Component } from 'react';
import Left_Arrow from '../../Icons/Left_Arrow.png';
import Pay_Card from '../../Icons/Pay_Card.png';
import Edit_Card from '../Modals/Edit_Card';
import Add_Card from '../Modals/Add_Card';

class My_Payment extends Component {

    constructor() {
        super()
        this.state = {
            isOpenedEdit: false,
            addCard: false
        }
    }


    goBack() {
        this.props.history.push('/dashboard/profile')
    }

    toggleEditPay = () => {
        this.setState(prev => {
            return {
                isOpenedEdit: !prev.isOpenedEdit
            }
        })
    }
    
    toggleAddCard = () => {
        this.setState(prev => {
            return {
                addCard: !prev.addCard
            }
        })
    }
    render() {
        return (
            <div>
                <Edit_Card open={this.state.isOpenedEdit} toggle={this.toggleEditPay.bind(this)} />
                <Add_Card open={this.state.addCard} toggle={this.toggleAddCard.bind(this)} />

                <div className='my_address_section'>
                    <div className='arrow_container'>
                        <img src={Left_Arrow} alt='arrow' width='8%' onClick={this.goBack.bind(this)}></img>
                        <p> My payment methods </p>
                    </div>

                    <div className='payment_cardContainer'>
                        <img src={Pay_Card} alt='Pay_Card' width='100%'></img>
                    </div>

                    <div >
                        <button className='mob_dash_button' onClick={this.toggleEditPay}> Edit </button>
                        <button className='mob_dash_button' onClick={this.toggleAddCard}> Add new  </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default My_Payment