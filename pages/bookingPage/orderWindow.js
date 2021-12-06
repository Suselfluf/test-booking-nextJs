import styles from '../../styles/orderWindow.module.sass'
import React from 'react'
import Calendar from 'react-calendar';
import {reservingForm} from "../forms/reservingForm";
import {TimeOption} from "./TimeOption";


export class OrderWindow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isTimeOpen:false,
            date:null
        }
        this.data = new reservingForm();
        this.reservedTime = [];
        this.day = null;
        this.TimeArray = [
            {id:1,time:"12:00:00 PM", reserved: false},
            {id:2,time:"15:00:00 PM", reserved: false},
            {id:3,time:"18:00:00 PM", reserved: false}, // for checking
            {id:4,time:"9:00:00 PM", reserved: false}
        ];

    }




    sendFetch = async (value) => {
        const day = value.getDate();
        let month = value.getMonth() + 1;
        if(month < 10){
            month = '0' + month;
        }
        const year = value.getFullYear();

        const chosenDate = year + '-' + month + '-' + day;
        // console.log(this.data.getData())


        // await fetch('/api/inc', {                                        // Example for fetch
        //     method: 'post',
        //     // body: JSON.stringify(this.data),
        //     body: chosenDate,
        //     headers: {
        //         'Content-Type': 'text/plain',
        //         // 'Accept': 'application/json'
        //     },
        // })
        //     .then(res => res.json().then(data => {
        //         console.log(data)
        //         // this.openTime(data)
        //         this.res = data
        //         for (const resKey of data) {
        //             // console.log(resKey.Date)
        //         }
        //         const res = JSON.stringify(data)
        //         this.openTime(JSON.stringify(data))
        //     }));

        await fetch('/api/getReservs', {
            method: 'post',
            body: chosenDate,
            headers: {
                'Content-Type': 'text/plain',
            },
        })
            .then(res => res.json().then(data => {
                for (const datum of data) {
                    let time = datum.Date.split(', ')
                    console.log(time[2])
                    this.reservedTime.push(time[2])   // Process input date to const and display options depends on reserved date
                    for (const timeOption of this.TimeArray) {  // Looping threw timeArray to check if it is reserved or not
                        if(time[2] == timeOption.time){
                            timeOption.reserved=!timeOption.reserved
                        }
                    }
                }
                // console.log(this.reservedTime)   //Server's response
                // console.log(this.TimeArray)  //Options
                this.openTime(this.TimeArray)
            }));

        // get String with reservation info
        this.data.getData();


    }

    openTime = async (incomeDate) =>{
        this.setState({
            isTimeOpen:!this.state.isTimeOpen,
            date:incomeDate
        });

    }



    render(){

        const {currentTableNumber, closeTab} = this.props

        return(
            <>
                <div className={styles.wrapper}>

                    <div className={styles.header}>
                        <p id={styles.title}>Your reservation</p>
                        <button onClick={closeTab} className={styles.btn}>X</button>
                    </div>

                    <div className={styles.content}>
                        <p>Table number: {currentTableNumber}</p>
                        <h1>Choose date of your visit</h1>
                        <Calendar
                            onClickDay={(day) => {
                                this.sendFetch(day)
                            }}
                        />
                    </div>

                    <div className={styles.choice}>
                        <p>Chosen date: </p>
                        {<p>{this.day}</p>}
                        {this.state.isTimeOpen ? this.state.date.map(item => (  // When user choose different from current date rerender timeoptions with coresponding reserved dates
                                <div key = {item.id} className={styles.timeTableCase}><TimeOption time = {item.time} reserved = {item.reserved}> </TimeOption></div>
                            )): null}
                    </div>
                </div>
            </>

        )
    }


}

export default OrderWindow