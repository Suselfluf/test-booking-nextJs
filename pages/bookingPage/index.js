import {Table} from './table'
import {RoundTable} from './roundTable'
import {RoundTable1} from './roundTable1'
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
                                <RoundTable number='1'></RoundTable>
                                <Table number='2'></Table>
                                <Table number='3'></Table>
                                <RoundTable1 number='4'></RoundTable1>
                                <DanceFloor></DanceFloor>
                                <RoundTable1 number='5'></RoundTable1>
                                <RoundTable number='6'></RoundTable>
                                <Table number='7'></Table>
                                <Table number='8'></Table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default bookingPage;
