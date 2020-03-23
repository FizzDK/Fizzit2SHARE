import React, { Component } from 'react';
import prev from '../../Icons/Prev.png';
import next from '../../Icons/Next.png';
import DateSlot from './DateSlot';
import TimeSlot from './TimeSlot';
import { Button } from 'antd';

const axios = require('axios').default;
axios.defaults.withCredentials = true;
class Calender extends Component {

    constructor() {
        super()
        this.state = {
            slicedFrom: 0,
            slicedTo: 8
        }
    }


    componentDidMount() {

        fetch("https://login.microsoftonline.com/45c9e5a4-7ffc-4e0e-bc60-9399dd04891a/oauth2/v2.0/token",
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'client_id': '1c3f165d-4121-4b7d-a343-39e378591c72',
                    'client_secret': 'yzkRFBR93_-mlobLFC974@_',
                    'scope': 'https://graph.microsoft.com/default',
                    'grant_type': 'client_credentials'
                },
              
                method: "POST"
              
            })
            .then(res => console.log(res))
            .then(json => console.log(json))
            .catch(err => console.log(err.message))

    }

    showNext = () => {
        this.setState((prev) => {
            return {
                slicedFrom: prev.slicedFrom + 1,
                slicedTo: prev.slicedTo + 1,
            }
        })

        console.log('working');

    }

    showPrev = () => {
        this.setState((prev) => {
            return {
                slicedFrom: prev.slicedFrom - 1,
                slicedTo: prev.slicedTo - 1,
            }
        })

        console.log('working');

    }


    render() {

        const dateSlots = [
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '22',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '12',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '14',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '15',
                Month: 'Nov',
                Day: 'Wednesday',
            },
            {
                Date: '11',
                Month: 'Nov',
                Day: 'Wednesday',
            },

        ]
        const { slicedFrom, slicedTo } = this.state;
        return (
            <div className='cart_sectionWrapper'>

                <div className='display_flex'>
                    <img src={prev} alt='previous_arrow' className='cart_icon prev_icon' draggable={false} onClick={this.showPrev} style={{ visibility: slicedFrom === 0 ? 'hidden' : '' }} />

                    {dateSlots.slice(slicedFrom, slicedTo).map((date, index) => {
                        return (

                            <div className='section_content'>
                                <div className='display_flex'>

                                    <Button className='btn_styling' >
                                        <span className='date'> {date.Date} </span>
                                        <span className='month'> {date.Month} </span>
                                        <p className='day'> {date.Day} </p>
                                    </Button>

                                </div>
                            </div>
                        )
                    })}


                    <img src={next} alt='next_arrow' className='cart_icon next_icon' draggable={false} onClick={this.showNext} style={{ visibility: dateSlots.length === slicedTo ? 'hidden' : '' }} />
                </div>
                <div className='display_flex'>
                    <img src={prev} alt='previous_arrow' className='cart_icon prev_icon' draggable={false} />
                    <TimeSlot
                        startTime="10"
                        endTime="11"
                    />
                    <TimeSlot />
                    <TimeSlot />
                    <TimeSlot />
                    <TimeSlot />
                    <img src={next} alt='next_arrow' className='cart_icon next_icon' draggable={false} />
                </div>


                <div className='display_flex padding_30' >
                    <p className='chose_time'>
                        Choose a time when you will be at home <br />
                        in order to exchange your empty patron for a full one
                        </p>
                    <span className='spacer'></span>
                    <p className='selected_delivery_slot'>
                        Thrusday, 12 Nov. 14:00 - 17:00
                    </p>
                </div>
            </div>
        )
    }
}

export default Calender