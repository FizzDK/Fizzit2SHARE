import React, { Component } from 'react';
import Left_Arrow from '../../Icons/Left_Arrow.png';
import EditAddress from '../Modals/Edit_Address';
import AddAddress from '../Modals/Add_Address';

class My_Address extends Component {

    constructor() {
        super()
        this.state = {
            isOpened: false,
            isAddOpened: false
        }
    }

    goBack() {
        this.props.history.push('/dashboard/profile')
    }

    toggleModal = () => {
        this.setState(prev => {
            return {
                isOpened: !prev.isOpened
            }
        })
    }
    
    toggleAddModal = () => {
        this.setState(prev => {
            return {
                isAddOpened: !prev.isAddOpened
            }
        })
    }

    render() {
        return (
            <div>
                <EditAddress open={this.state.isOpened} toggle={this.toggleModal.bind(this)} />
                <AddAddress open={this.state.isAddOpened} toggle={this.toggleAddModal.bind(this)} />
                <div className='my_address_section'>
                    <div className='arrow_container'>
                        <img src={Left_Arrow} alt='arrow' width='8%' onClick={this.goBack.bind(this)}></img>
                        <p> My addresses </p>
                    </div>

                    <div className='address_container'>
                        <h4> Home address </h4>
                        <p className='grey_border'></p>
                        <p > Tomas Soltes </p>
                        <p> Robert Jacobsens Vej 65, 502 </p>
                        <p> Kobenhavn S, 2300, Denmark </p>
                        <p> +4581910914 </p>

                    </div>

                    <div >
                        <button className='mob_dash_button' onClick={this.toggleModal}> Edit </button>
                        <button className='mob_dash_button' onClick={this.toggleAddModal}> Add new  </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default My_Address