import React from 'react'
import s from './PopUp.module.css'




const PopUp = ({visible, url, toggle}) => {

   
    if(!visible) return null

    return (
        <div className={s.wrapper}>
            <div className={s.popUp}>
                <span className={s.popUp_close} onClick={toggle}>Закрыть</span>
                <img src={url} alt="pic"/>
            </div>
        </div>    
    )
}
export default PopUp