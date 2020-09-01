import React, { useState } from 'react'
import s from './PopUp.module.css'




const PopUp = ({visible, url}) => {

   
    if(!visible) return null
    
    function closeModal(){
        console.log('click');
        return !visible
    }
    return (
        <div className={s.PopUp}>
            <span onClick={closeModal}>Закрыть</span>
            <img src={url} alt="pic"/>
        </div>
    )
}
export default PopUp