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

    booking = async (e) => {
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

            //  await fetch('/api/reservDepsOnTable', {
            //     method: 'post',
            //     body: this.number,
            //     headers: {
            //         'Content-Type': 'text/plain',
            //     },
            // })
            //     .then(res => res.json().then(data => {
            //
            //     }))
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