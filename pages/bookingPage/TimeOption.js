import styles from '../../styles/timeOption.module.sass'
import React from 'react'


export class TimeOption extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            msg:null

        }
        this.time=props.time
        this.reserved=props.reserved
    }




    componentDidMount() {


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }


    render(){

        return(
            <>

                {this.props.reserved ? <div className={styles.optionCaseFree}> Reserved</div> : <div className={styles.optionCaseReserved}>{this.time}</div>}

            </>

        )
    }


}
