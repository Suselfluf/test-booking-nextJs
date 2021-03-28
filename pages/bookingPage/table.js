import styles from '../../styles/bookingPage.module.css'

import React from 'react'

//
// export default function table(){
//     return(
//         <div className="table top-middle">
//             <div className="person"><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
//             <div className="person"><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
//             <div className="tableImg"><h2>{this.props.number}</h2><img src="https://img.icons8.com/ios/100/000000/table.png"/></div>
//             <div className="person"><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
//             <div className="person"><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div></div>
//     )
// }


export class Table extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={styles.table}>
                <div className={styles.person}><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
                <div className={styles.person}><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
                <div className={styles.tableImg}><h2 id={styles.tableNumber}>{this.props.number}</h2><img src="https://img.icons8.com/ios/100/000000/table.png"/></div>
                <div className={styles.person}><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div>
                <div className={styles.person}><img src="https://img.icons8.com/windows/55/000000/person-male.png"/></div></div>
        )
    }

}

export default Table