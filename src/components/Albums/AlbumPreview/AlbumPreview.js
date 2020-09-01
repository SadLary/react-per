import React, { useState, useEffect } from 'react'
import s from './AlbumPreview.module.css'



const AlbumPreview = (props) => {

    const [previewImg, setPreviewImg] = useState()

    async function getPreviewImg(){
        await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${props.albumId}&_limit=6`)
            .then((response) => response.json())
            .then((json) => setPreviewImg(json))
    }
    useEffect(()=>{
        getPreviewImg()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {previewImg? previewImg.map(previewPic => {
                return(
                    <img key={previewPic.id} src={previewPic.url} className={s.preview_img} alt="pic"/>
                )
            }):null}
        </div>
    )
}

export default AlbumPreview