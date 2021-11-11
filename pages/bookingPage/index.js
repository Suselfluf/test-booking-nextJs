
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
                    <meta name='keywords' content='next, javascript, next, and another keywords '/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <NavPanel></NavPanel>
                <BarScheme></BarScheme>
            </>
        )
    }

}
export default bookingPage;

