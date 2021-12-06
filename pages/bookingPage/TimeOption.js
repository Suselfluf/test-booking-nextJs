import styles from '../../styles/timeOption.module.sass'
import React from 'react'


export class TimeOption extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
        this.time=props.time
        this.reserved=props.reserved
    }




    componentDidMount() {
        console.log(this.reserved)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }





    render(){

        return(
            <>
                {this.reserved? <div className={styles.optionCaseFree}>Reserved</div>: <div className={styles.optionCaseReserved}>{this.time} {this.reserved}</div>}

            </>

        )
    }


}
