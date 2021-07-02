import styles from '../../styles/orderWindow.module.sass'
import React from 'react'
import Calendar from 'react-calendar';
import {reservingForm} from "../forms/reservingForm";


export class OrderWindow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            marked: false,
        }
        this.day = 0;
        this.data = new reservingForm();

    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    handleChange = (value) =>{
        this.setState({marked:!this.state.marked})
        this.day = value.toString().split(" ");

        this.data.setData(this.day[0], this.day[1], this.day[2], this.day[3]);

        this.day = this.day[0] + " " + this.day[1] + " " + this.day[2] + " " + this.day[3];
        console.log(this.day)

        console.log('Request has started')


        const form = {'name':'Daniil'}

        const body = { a: 1 };

        fetch('/api/inc', {
            method: 'post',
            body: JSON.stringify(this.data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .then(text => console.log(text));

        console.log('Request has ended');


        this.data.getData();



        //console.log(this.day.getMonth())         // Декодировать время
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
                            onChange={(value) => this.handleChange(value)}
                        />
                    </div>
                    <div className={styles.choice}>
                        <p>Chosen date: </p>
                        {<p>{this.day}</p>}         
                    </div>
                </div>
            </>

        )
    }


}

export default OrderWindow