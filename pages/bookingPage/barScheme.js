
import styles from '../../styles/barScheme.module.sass'
import {Table} from './table'

import React from 'react'



export class BarScheme extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div className={styles.restHall}>
                <div className={styles.wrapper}>
                    <div className={styles.hall}>
                        <div className={styles.tables}>
                            <div className={styles.place} id={styles.rounded1}>
                                <Table number ={1} chairs ={3}></Table>
                            </div>
                            <div className={styles.place}>
                                <Table number ={2} chairs ={8}></Table>
                            </div>
                            <div className={styles.place}>
                                <Table number ={3} chairs ={8}></Table>
                            </div>
                            <div className={styles.place} id={styles.rounded}>
                                <Table number ={4} chairs ={3}></Table>
                            </div>
                            <div className={styles.danceFloor}>
                            </div>
                            <div className={styles.place} id={styles.rounded}>
                                <Table number ={5} chairs ={3}></Table>
                            </div>
                            <div className={styles.place} id={styles.rounded1}>
                                <Table number ={6} chairs ={3}></Table>
                            </div>
                            <div className={styles.place}>
                                <Table number ={7} chairs ={8}></Table>
                            </div>
                            <div className={styles.place}>
                                <Table number ={8} chairs ={8}></Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default BarScheme

//
// <Table number='1' chairs = {3}></Table>
// <Table number='2' chairs = {8}></Table>
// <Table number='3' chairs = {8}></Table>
// <Table number='4' chairs = {3}></Table>
// <div className={styles.danceFloor}>
// </div>
// <Table number='5' chairs = {3}></Table>
// <Table number='6' chairs = {3}></Table>
// <Table number='7' chairs = {8}></Table>
// <Table number='8' chairs = {8}></Table>