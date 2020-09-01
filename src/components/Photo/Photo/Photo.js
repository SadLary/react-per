import React, { useState } from 'react'
import PopUp from '../../PopUpImg/PopUp'
import s from './Photo.module.css'

const Photo = ({url})=>{
    const [visible, setVisible] = useState(false)

    const handlePopUp = ()=>{
        setVisible(!visible)
        console.log(visible);
    }
    return (
        <div>
            <img src={url} className={s.image} alt="pic" onClick={handlePopUp}/>
            <PopUp visible={visible} url={url}/>  
        </div>
    )
}
export default Photo