import React, { Component } from 'react';
import { Button } from 'antd';

class DateSlot extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className='section_content'>
                    <div className='display_flex'>

                        <Button className='btn_styling' >
                            <span className='date'> {this.props.date} </span>
                            <span className='month'> {this.props.month} </span>
                            <p className='day'> {this.props.day} </p>
                            <span className='date'> {this.props.Date} </span>
                            <span className='month'> {this.props.Month} </span>
                            <p className='day'> {this.props.Day} </p>
                        </Button>

                    </div>
                </div>
            </div>
        )
    }
}

export default DateSlot