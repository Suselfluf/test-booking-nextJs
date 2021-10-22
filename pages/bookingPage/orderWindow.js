import styles from '../../styles/orderWindow.module.sass'
import React from 'react'
import Calendar from 'react-calendar';
import {reservingForm} from "../forms/reservingForm";
import {TimeTable} from "./TimeTable";


export class OrderWindow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            marked: false,
            isTimeOpen:false
        }
        this.choose = 0;
        this.data = new reservingForm();
        this.response = null;
        this.day = null;

    }



    sendFetch = async (value) => {
        this.setState({marked: !this.state.marked})
        this.choose = value.toString().split(" ");
        this.day = this.choose[2] + ' ' + this.choose[1] + ' ' + this.choose[3];

        this.data.setData(this.choose[2], this.choose[1], this.choose[3]);

        console.log('Request has started')


        await fetch('/api/inc', {
            method: 'post',
            body: JSON.stringify(this.data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(res => res.json().then(data => console.log(data)));

        // get String with reservation info
        this.data.getData();


    }

    openTime = async (date) =>{
        this.setState({
            isTimeOpen:true
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
                            onChange={(value) => this.sendFetch(value)}
                            onClickDay={(day) => this.openTime(day)}
                        />
                    </div>

                    <div className={styles.choice}>
                        <p>Chosen date: </p>
                        {<p>{this.day}</p>}
                        {this.state.isTimeOpen ? <TimeTable/>: null}
                    </div>

                </div>
            </>

        )
    }


}

export default OrderWindow