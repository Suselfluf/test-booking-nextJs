import styles from '../../styles/barMenu.module.sass'

import React from 'react'



export class BarMenu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isOpenMenu:false
        }
    }

    componentDidMount() {

    }

    showMenu = (e) =>{

        this.setState({isOpenMenu:!this.state.isOpenMenu})

    }

    render(){
        return(
            <>
                <div className={this.state.isOpenMenu? styles.wrapper1 : styles.wrapper} onClick={this.showMenu}>
                    {this.state.isOpenMenu? <ul className={styles.ul_list}>
                        <li>Beer</li><li>5$</li>
                        <li>Vodka</li> <li>2$</li>
                        <li>Whiskey</li><li>4$</li>
                        <li>Port </li><li>3$</li>
                        <li>Wine</li><li>2$</li>
                        <li>Sonti</li><li>5$</li>
                    </ul>: null}
                </div>
            </>

        )
    }

}

export default BarMenu