
import styles from '../../styles/barScheme.module.sass'
import {Table} from './table'
import {BarMenu} from './barMenu'
import {OrderWindow} from './orderWindow'

import React from 'react'



export class BarScheme extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orderOpen:false,
            reservedTable:0,
            currentTableNumber:0
        }
    }

    handleState = (number) =>{
        this.setState({orderOpen:!this.state.orderOpen, currentTableNumber:number})
        this.state.reservedTable = number

    }

    resetTableOrder = () => {
        this.setState({currentTableNumber:0})
    }


    render(){
        return(
            <div className={styles.restHall}>
                <div className={styles.wrapper}>
                    <div className={styles.hall}>
                        <div className={styles.tables}>
                            <div className={styles.place} id={styles.rounded1}>
                                <Table number ={1} chairs ={3} changeState={this.handleState}></Table>
                            </div>
                            <div className={styles.place} onClick={this.check}>
                                <Table number ={2} chairs ={8} changeState={this.handleState}></Table>
                            </div>
                            <div className={styles.place}>
                                <Table number ={3} chairs ={8} changeState={this.handleState}></Table>
                            </div>
                            <div className={styles.place} id={styles.rounded}>
                                <Table number ={4} chairs ={3} changeState={this.handleState}></Table>
                            </div>
                            <div className={styles.danceFloor}>
                            </div>
                            <div className={styles.place} id={styles.rounded}>
                                <Table number ={5} chairs ={3} changeState={this.handleState}></Table>
                            </div>
                            <div className={styles.place} id={styles.rounded1}>
                                <Table number ={6} chairs ={3} changeState={this.handleState}></Table>
                            </div>
                            <div className={styles.place}>
                                <Table number ={7} chairs ={8} changeState={this.handleState}></Table>
                            </div>
                            <div className={styles.place}>
                                <Table number ={8} chairs ={8} changeState={this.handleState}></Table>
                            </div>
                        </div>
                        <BarMenu></BarMenu>
                        {this.state.currentTableNumber!==0? <OrderWindow reservedTable ={this.state.reservedTable} currentTableNumber = {this.state.currentTableNumber} closeTab = {this.resetTableOrder}></OrderWindow>:null}
                    </div>
                </div>
            </div>
        )
    }

}

export default BarScheme

