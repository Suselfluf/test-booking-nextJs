import styles from '../../styles/timeTable.module.sass'
import React from 'react'
import Calendar from 'react-calendar';
import {reservingForm} from "../forms/reservingForm";


export class TimeTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render(){

        return(
            <>
                <div className={styles.wrapper}>
                    <div className={styles.timeCase}>12:00</div>
                    <div className={styles.timeCase}>15:00</div>
                    <div className={styles.timeCase}>18:00</div>
                    <div className={styles.timeCase}>21:00</div>
                </div>
            </>

        )
    }


}
