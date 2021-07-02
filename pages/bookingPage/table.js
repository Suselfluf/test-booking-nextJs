import styles from '../../styles/table.module.sass'

import React from 'react'


export class Table extends React.Component{
    constructor(props) {
        super(props);
        this.number = props.number
        this.chairs = props.chairs
        this.state ={
            isReserved:false
        }
    }

    booking = (e) => {
        let item = e.target.closest('h2')               // Починить чтобы при нажатии на цифру выделялся блок
        if (item != null){
            return 0
        }else {
            if (!e.target.style.border) {
                if (this.chairs ===3){
                }else{
                    e.target.style.borderRadius = '9px'
                }
            } else {
                e.target.removeAttribute('style')
            }
            // Номер стола
            this.handleChange(this.number)
        }
    }

    handleChange = (number) =>{
        this.setState({isReserved:!this.state.isReserved})
        this.props.changeState(number)
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