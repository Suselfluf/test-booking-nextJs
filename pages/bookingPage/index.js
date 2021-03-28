import {Table} from './table'
import styles from '../../styles/bookingPage.module.css'
import {useRouter} from "next/router";
import Head from "next/head";
import NavPanel from "../navPanel";

export default function bookingPage(){
    const route = useRouter()
    console.log(route)
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
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

