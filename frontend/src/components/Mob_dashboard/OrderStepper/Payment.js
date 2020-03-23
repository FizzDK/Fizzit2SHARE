import React, { Component } from 'react';
import Left_Arrow from '../../../Icons/Left_Arrow.png';
import Pay_Card from '../../../Icons/Pay_Card.png';
import Edit_Card from '../../Modals/Edit_Card';
import Add_Card from '../../Modals/Add_Card';

class Payment extends Component {

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


                <div className='payCard_wrapper'>
                    <img src={Pay_Card} alt='Pay_Card' width='130%'></img>
                </div>

                <div className='mob_dash_BTNWrapper'>
                    <button className='mob_dash_button' onClick={this.toggleEditPay}> Edit </button>
                    <button className='mob_dash_button' onClick={this.toggleAddCard}> Add new  </button>
                </div>
            </div>
        )
    }
}

export default Payment