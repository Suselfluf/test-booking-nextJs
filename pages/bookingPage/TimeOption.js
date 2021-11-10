import styles from '../../styles/timeOption.module.sass'
import React from 'react'


export class TimeOption extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
        this.time=props.time
    }




    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }





    render(){

        return(
            <>
                <div className={styles.optionCase}>{this.time}</div>
            </>

        )
    }


}
