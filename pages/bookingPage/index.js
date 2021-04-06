
import {BarScheme} from './barScheme'
import NavPanel from "../navPanel";
import Head from "next/head";
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
                <BarScheme></BarScheme>
            </>
        )
    }

}
export default bookingPage;

