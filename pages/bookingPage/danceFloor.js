import styles from '../../styles/bookingPage.module.css'

import React from 'react'



export class DanceFloor extends React.Component{
    constructor(props) {
        super(props);
    }

    action = () =>{
        document.querySelectorAll('.bookingPage_block__fEhkF').forEach( (e,index)=>{
            if ((index/10<1)&&(index%2==0)){
                e.style.backgroundColor = 'black'
            }
            if((index/20<1)&&(index%2==1)&&(index>10)){
                e.style.backgroundColor = 'black'
            }
            if((index/30<1)&&(index%2==0)&&(index>19)){
                e.style.backgroundColor = 'black'
            }
            if((index/40<1)&&(index%2==1)&&(index>29)){
                e.style.backgroundColor = 'black'
            }
            if((index/50<1)&&(index%2==0)&&(index>39)){
                e.style.backgroundColor = 'black'
            }
            if((index/60<1)&&(index%2==1)&&(index>49)){
                e.style.backgroundColor = 'black'
            }
            if((index/70<1)&&(index%2==0)&&(index>59)){
                e.style.backgroundColor = 'black'
            }
            if((index/80<1)&&(index%2==1)&&(index>69)){
                e.style.backgroundColor = 'black'
            }
            if((index/90<1)&&(index%2==0)&&(index>79)){
                e.style.backgroundColor = 'black'
            }
            if((index/100<1)&&(index%2==1)&&(index>89)){
                e.style.backgroundColor = 'black'
            }
        })
    }
    componentDidMount() {
        const pool = document.querySelector('.bookingPage_danceFloor__35Gto')
        for (let i=0; i<100;i++){
            const div = document.createElement('div')
            div.classList.add(`${styles.block}`)
            pool.append(div)
        }
        this.action()
    }

    render(){
        return(
            <div className={styles.danceFloor}>
            </div>
        )
    }

}

export default DanceFloor