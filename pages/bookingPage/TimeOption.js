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
        this.currentTableNumber = props.tableNum
        this.date = props.date
    }




    componentDidMount() {


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    handleClick = async () => {

        const time = this.time.split(' ')[0]


        const fetchInfo = this.date + ' ' + time + ' ' + this.currentTableNumber

        alert(fetchInfo)



        // await fetch('/api/bookTable', {
        //     method: 'post',
        //     body: fetchInfo,
        //     headers: {
        //         'Content-Type': 'text/plain',
        //     },
        // }).then(res => res.json().then(data => {
        //     console.log(data)
        // }));

    }


    render(){

        return(
            <>

                {this.props.reserved ? <div className={styles.optionCaseReserved}> Reserved</div> : <div title={"Click To book"} className={styles.optionCaseFree} onClick={this.handleClick}>{this.time}</div>}

            </>

        )
    }


}
