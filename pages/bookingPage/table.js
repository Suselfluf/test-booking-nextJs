import styles from '../../styles/bookingPage.module.css'

import React from 'react'



export class Table extends React.Component{
    constructor(props) {
        super(props);
        this.number = props.number
    }

    booking = (e) => {
        if(!e.target.style.border){
            e.target.style.border = 'solid 1px yellow'
            e.target.style.borderRadius = '3px'
        }
        else {
            e.target.removeAttribute('style')
        }
        e.target.style.margin = '-1px'
        console.log(this.number)                      // Номер стола
        console.log(e.target.id)                      // Положение клиента
    }



    render(){
        return(
            <div className={styles.table}>
                <div><img className={styles.person} id='left-top' onClick={this.booking} src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
                <div><img className={styles.person} id='right-top' onClick={this.booking} src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
                <div className={styles.tableImg}><h2 id={styles.tableNumber}>{this.number}</h2><img src="https://img.icons8.com/ios/100/000000/table.png"/></div>
                <div><img className={styles.person} id='left-bottom' onClick={this.booking}  src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
                <div><img className={styles.person} id='right-bottom' onClick={this.booking} src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
            </div>
        )
    }

}

export default Table