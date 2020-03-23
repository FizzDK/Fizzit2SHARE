import React, { Component } from 'react';

import {Button } from 'antd';

import '../../css files/order_cartridge.css';

class TimeSlot extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
                <div className='section_content'>
                    <div className='display_flex'>
                         <div className='timeWrapper'>
                            <Button> {this.props.startTime} - {this.props.endTime} </Button>
                        </div>

                    </div>
                </div>
        )
    }
}

export default TimeSlot