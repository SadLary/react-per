import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Photo from '../../Photo/Photo/Photo'
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
                        <Photo key={albumPhoto.id} url={albumPhoto.url}/>
                    )
                }): null}
            </div>
        </div>
    )
}

export default Album