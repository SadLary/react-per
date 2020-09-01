import React, {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import s from './User.module.css'
import RandomPhotos from '../RandomPhotos/RandomPhotos';


const User = () => {
    const [albums, setAlbums] = useState();
    let { userId } = useParams();

    function getAlbums() {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then((response) => response.json())
        .then((json) => setAlbums(json))
    }
    useEffect(()=>{
        getAlbums()
        // eslint-disable-next-line
    },[])
    console.log(albums);
    return(
        <div className='container-fluid flex-center'>
            <div className='container'>
            <h2>User`s albums</h2>
                <div className={s.list}>
                    {albums? albums.map(album=>{
                        return(
                        <NavLink to={`/albums/${album.id}`} key={album.id} className={s.list_item}>
                            <p className={s.name}>{album.title.length > 30 ? album.title.slice(0, 30)+'...' : album.title}</p>
                            <RandomPhotos userId={userId}/>
                        </NavLink>
                        )
                    }):null}
                    
                </div>
            </div>
        </div>
    )
}

export default User