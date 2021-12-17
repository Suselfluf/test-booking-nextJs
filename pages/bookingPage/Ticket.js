import styles from '../../styles/Ticket.module.sass'
import React from 'react'


export class Ticket extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }

    }






    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {




    }



    componentWillUnmount() {

    }

    reserveTable = async () => {
        // let time = this.time.split(' ')[0]
        // if(time == "9:00:00"){
        //     time = "21:00:00"
        // }
        // const fetchInfo = this.date + ' ' + time + '/' + this.currentTableNumber + '/' + this.numOfVisitors

        await fetch('/api/bookTable', {
            method: 'post',
            body: this.props.reservingInfo,
            headers: {
                'Content-Type': 'text/plain',
            },
        }).then(res => res.json().then(data => {
            console.log(data)
        }));

    }



    render(){

        const {closeTab,reservingInfo} = this.props
        const data = reservingInfo.split('/')
        const date = data[0]
        const table = data[1]
        const persons = data[2]


        return(
            <>
                <div className={styles.backGround}>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.content} >
                        <div className={styles.header}><p className={styles.infoText}>Reservation info</p><div onClick={closeTab} id={styles.closeButton}>&#10008;</div></div>
                        <div className={styles.information}><p className={styles.infoText}>Chosen date:</p><p className={styles.infoText}>{date}</p><p className={styles.infoText}>Reserving table: {table}</p><p className={styles.infoText}>Number of visitors: {persons}</p></div>
                        <div className={styles.approve} onClick={this.reserveTable}>Submit</div>
                    </div>
                </div>

            </>

        )
    }


}
