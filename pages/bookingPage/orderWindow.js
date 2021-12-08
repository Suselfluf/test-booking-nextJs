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
        this.currentTableNumber = props.currentTableNumber;
        this.TimeArray = [
            {id:1,time:"12:00:00 PM", reserved: false},
            {id:2,time:"15:00:00 PM", reserved: false},
            {id:3,time:"18:00:00 PM", reserved: false},
            {id:4,time:"9:00:00 PM", reserved: false}
        ];
        this.displayingData = null;

    }




    sendFetch = async (value) => {
        const day = value.getDate();
        let month = value.getMonth() + 1;
        if(month < 10){
            month = '0' + month;
        }
        const year = value.getFullYear();
        console.log(this.currentTableNumber)
        this.displayingData = year + '-' + month + '-' + day;
        const fetchInfo = this.displayingData + ' ' + this.currentTableNumber;

        await fetch('/api/reservDepsOnTable', {
            method: 'post',
            body: fetchInfo,
            headers: {
                'Content-Type': 'text/plain',
            },
        })
            .then(res => res.json().then(data => {
                console.log(data)
                this.TimeArray = [
                    {id:1,time:"12:00:00 PM", reserved: false},
                    {id:2,time:"15:00:00 PM", reserved: false},
                    {id:3,time:"18:00:00 PM", reserved: false},
                    {id:4,time:"9:00:00 PM", reserved: false}
                ];
                if (data.length == 0){
                    this.reservedTime = []
                }else{
                    for (const datum of data) {
                        let time = datum.Date.split(', ')
                        this.reservedTime.push(time[2])                         // Process input date to const and display options depends on reserved date
                        for (const timeOption of this.TimeArray) {              // Looping threw timeArray to check if it is reserved or not
                            if(time[2] == timeOption.time){
                                timeOption.reserved=!timeOption.reserved
                            }
                        }
                    }
                }
                // console.log(this.reservedTime)                               //Server's response
                // console.log(this.TimeArray)                                  //Options
                this.openTime(this.TimeArray)
            }));


        // get String with reservation info
        this.data.getData();


    }

    openTime = async (incomeDate) =>{
        this.setState({
            isTimeOpen:true,
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
                        <Calendar onClick = {this.toogleTimeOption}
                            onClickDay={(day) => {
                                this.sendFetch(day)
                            }}
                        />
                    </div>

                    <div className={styles.choice}>
                        <p>Chosen date: {this.displayingData}</p>
                        <p>Chosen table: {this.currentTableNumber}</p>
                        <p> Number of visitors:
                            <select className={styles.select}>  {/*Modifye select sass to make it rounded in options*/}
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </p>

                        {<p>{this.day}</p>}
                        {this.state.isTimeOpen ? this.state.date.map(item => (  // When user choose different from current date rerender timeoptions with coresponding reserved dates
                                <div key = {item.id} className={styles.timeTableCase}><TimeOption time = {item.time} reserved = {item.reserved} tableNum = {this.currentTableNumber} date ={this.displayingData}> </TimeOption></div>
                            )): null}
                    </div>
                </div>
            </>

        )
    }


}

export default OrderWindow