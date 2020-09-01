import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './Album.module.css'


const Album = () => {
    const [albumPhotos, setAlbumPhotos] = useState()

    let {albumId} = useParams()

    const getAlbumPhotos = ()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then((response) => response.json())
        .then((json) => setAlbumPhotos(json))
    }
    useEffect(()=>{
        getAlbumPhotos()
        // eslint-disable-next-line
    }, [])
    return(
        <div className='container-fluid flex-center'>
            <div className={`container ${s.list}`}>
                {albumPhotos? albumPhotos.map(albumPhoto=>{
                    return(
                        <img key={albumPhoto.id} src={albumPhoto.url} alt="pic" className={s.img}/>
                    )
                }): null}
            </div>
        </div>
    )
}

export default Album