import React, { useState, useEffect } from 'react'
import s from './RandomPhotos.module.css'



const RandomPhotos = (props) => {

    const [albums, setAlbums] = useState();
    const [randAlbum, setRandAlbum] = useState();
    const [randPhotos, setRandPhotos] = useState();

    function getAlbums() {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}/albums`)
        .then((response) => response.json())
        .then((json) => setAlbums(json))
    }
    useEffect(()=>{
        getAlbums()
        // eslint-disable-next-line
    }, [])

    function setAlbumsNumber(){
        if(albums){
            const arrayLength = albums.length
            const albumNumber = Math.floor(Math.random() * (arrayLength)) + 1
            setRandAlbum(albumNumber)
        }
    }
    useEffect(()=>{
        setAlbumsNumber()
        // eslint-disable-next-line
    }, [albums])

    function getPhotosFromRandAlbum() {
        if(randAlbum){
            fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${randAlbum}&_limit=6`)
            .then((response) => response.json())
            .then((json) => setRandPhotos(json))
        }    
    }
    useEffect(()=>{
        getPhotosFromRandAlbum()
        // eslint-disable-next-line
    }, [randAlbum])
    return (
        <div>
            {randPhotos? randPhotos.map(randPhoto => {
                return(
                    <img key={randPhoto.id} src={randPhoto.url} className={s.rand_img} alt="pic"/>
                )
            }):null}
        </div>
    )
}

export default RandomPhotos