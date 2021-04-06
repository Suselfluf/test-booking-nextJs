import styles from '../../styles/table.module.sass'

import React from 'react'



export class Table extends React.Component{
    constructor(props) {
        super(props);
        this.number = props.number
        this.chairs = props.chairs
    }

    booking = (e) => {
        let item = e.target.closest('h2')               // Починить чтобы при нажатии на цифру выделялся блок
        if (item != null){
            return 0
        }else{
            if(!e.target.style.border){
                e.target.style.border = 'solid 3px black'
            }
            else {
                e.target.removeAttribute('style')
            }
            console.log(this.number)                      // Номер стола
        }
        alert(item)

    }

    render(){
        return(
            <div className={this.chairs === 3 ? styles.rounded : styles.table} onClick={this.booking}>
                <h2>{this.number}</h2>
            </div>
        )
    }

}

export default Table