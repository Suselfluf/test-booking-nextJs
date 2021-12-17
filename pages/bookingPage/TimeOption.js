import styles from '../../styles/timeOption.module.sass'
import React from 'react'
import {Ticket} from "./Ticket";
import Link from 'next/link'


export class TimeOption extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            reserved:false,
            isTicketOpen:false,
        }
        this.time = props.time
        this.reserved = props.reserved
        this.currentTableNumber = props.tableNum
        this.date = props.date
        this.numOfVisitors = props.numOfVisitors
        this.fetchInfo = null;

    }

    checkActualityOfInfo = () =>{
        this.date !== this.props.date ? this.date = this.props.date : {}
        this.time !== this.props.time ? this.time = this.props.time : {}
        this.state.reserved !== this.props.reserved ? this.handleChange() : {}
        this.currentTableNumber !== this.props.tableNum ? this.currentTableNumber = this.props.tableNum : {}
        this.numOfVisitors !== this.props.numOfVisitors ? this.numOfVisitors = this.props.numOfVisitors : {}
        this.fetchInfo = this.date + ' ' +  this.time.split(' ')[0] + '/' + this.currentTableNumber + '/' + this.numOfVisitors
    }




    componentDidMount() {

        this.checkActualityOfInfo()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        this.checkActualityOfInfo()


    }

    handleChange = () => {
        this.setState({
            reserved:!this.state.reserved
        })
    }


    componentWillUnmount() {

    }



    openTicket = () => {
        this.setState({
            isTicketOpen: !this.state.isTicketOpen,
            reserved:true,
            openedWindow:true
        })
    }



    render(){


        return(
            <>

                {this.state.isTicketOpen ? <Ticket closeTab = {this.openTicket} reservingInfo = {this.fetchInfo}></Ticket> : console.log('No') }

                {(this.state.reserved || this.state.isTicketOpen) ? <div></div> : <div title={"Click To book"} className={styles.optionCaseFree} onClick={this.openTicket}>{this.time}</div>}

                {/*{(this.state.reserved || this.state.isTicketOpen) ? <div></div> : <Link href="/Ticket" ><div title={"Click To book"} className={styles.optionCaseFree} onClick={this.openTicket}>{this.time} {this.state.reserved.toString()}</div></Link>}*/}




            </>

        )
    }

 // Последняя строка работает как редирект на другую страницу по сути, погуглить как грамотно прокидывать пропсы, пропсы храняться в фетч инфо, перед ней строка с рабочим вариантом открытия нового компонента куда состояние не передается просто так
}
