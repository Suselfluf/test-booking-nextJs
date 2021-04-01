import {Table} from './table'
import {BarCounter} from './barCounter'
import {DanceFloor} from './danceFloor'
import styles from '../../styles/bookingPage.module.css'

import Head from "next/head";
import NavPanel from "../navPanel";
import React from "react";

export class bookingPage extends React.Component{
    constructor() {
        super();
    }

    render(){
        return(
            <>
                <Head>
                    <title>Booking Page</title>
                </Head>
                <NavPanel></NavPanel>
                <div className={styles.restHall}>
                    <div className={styles.wrapper}>
                        <div className={styles.hall}>
                            <div className={styles.tables}>
                                <Table number='1'></Table>
                                <Table number='2'></Table>
                                <Table number='3'></Table>
                                <Table number='4'></Table>
                                <Table number='5'></Table>
                                <DanceFloor></DanceFloor>
                                <Table number='6'></Table>
                                <Table number='7'></Table>
                            </div>
                            <BarCounter></BarCounter>
                            <div className={styles.door}>Enterance</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default bookingPage;
