import React,{useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import AlbumPreview from './AlbumPreview/AlbumPreview';
import s from './Albums.module.css'


const Albums = () => {
    const [albums, setalbums] = useState();
    
    function getAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((json) => setalbums(json))
    }
    useEffect(()=>{
        getAlbums()
    }, [])
    return(
        <div className='container-fluid flex-center'>
            <div className='container'>
                <div className={s.list}>
                    {albums? albums.map(album=>{
                        return (
                            <NavLink to={`/albums/${album.id}`} key={album.id} className={s.list_item}>
                                <p className={s.name}>{album.title.length > 30 ? album.title.slice(0, 30)+'...' : album.title}</p>
                                <div>
                                    <AlbumPreview albumId={album.id}/>
                                </div>
                            </NavLink>
                        )
                    }):null}
                </div>
            </div>
        </div>
    )
}

export default Albums