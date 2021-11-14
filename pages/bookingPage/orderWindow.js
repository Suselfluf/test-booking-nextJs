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
            reservedTime:"null"
        }
        this.choose = 0;
        this.data = new reservingForm();
        this.res = 'null';
        this.day = null;

    }




    sendFetch = async (value) => {
        console.log(value.getMonth() + 1)

        const day = value.getDate();
        let month = value.getMonth() + 1;
        if(month < 10){
            month = '0' + month;
        }
        const year = value.getFullYear();

        const chosenDate = year + '-' + month + '-' + day;
        console.log("Converted string from Calendar: " + chosenDate);
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
            // body: JSON.stringify(this.data),
            body: chosenDate,
            headers: {
                'Content-Type': 'text/plain',
            },
        })
            .then(res => res.json().then(data => {
                console.log(data)                   // Process input date to const and display options depends on reserved date
            }));

        // get String with reservation info
        this.data.getData();


    }

    openTime = async (data) =>{
        this.setState({
            isTimeOpen:true,
            reservedTime:data
        });

    }



    render(){

        const {currentTableNumber, closeTab} = this.props
        const TimeArray = [
            {id:1,time:"12:00"},
            {id:2,time:"15:00"},
            {id:3,time:"18:00"},
            {id:4,time:"21:00"}
        ];

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
                        {this.state.isTimeOpen ? TimeArray.map(item => (
                                <div key = {item.id} className={styles.timeTableCase}><TimeOption time = {item.time}> </TimeOption></div>
                            )): null}

                    </div>

                </div>
            </>

        )
    }


}

export default OrderWindow