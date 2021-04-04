import styles from '../../styles/bookingPage.module.css'

import React from 'react'



export class RoundTable1 extends React.Component{
    constructor(props) {
        super(props);
        this.number = props.number
    }

    booking = (e) => {
        if(!e.target.style.border){
            e.target.style.border = 'solid 3px black'
        }
        else {
            e.target.removeAttribute('style')
        }
        console.log(this.number)                      // Номер стола
    }



    render(){
        return(
            <div className={styles.table} id={styles.rounded1} onClick={this.booking}><h2>{this.number}</h2></div>
        )
    }

}

export default RoundTable1