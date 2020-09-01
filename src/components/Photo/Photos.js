import React,{useState, useEffect} from 'react'
import s from './Photos.module.css'
import Photo from './Photo/Photo';



const Photos = () => {
    const [viewPhotos, setViewPhotos] = useState();
    const [allPhotos, setAllPhotos] = useState();
    // const [visible, setVisible] = useState();
    let chunk = 1
    function getViewPhotos() {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=200')
        .then((response) => response.json())
        .then((json) => setViewPhotos(json))
    }
    
    useEffect(()=>{
        getViewPhotos()
    }, [])
    function getChunkPhotos(chunk, chunkSize) {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((json) => {
            setAllPhotos(json.slice(200, chunk*chunkSize))
        })
    }
    const chunkHandler = ()=>{
        if(window.innerHeight - window.scrollY < 10) {
            getChunkPhotos(++chunk, 500)
        } 
    }
    useEffect(()=>{
        window.addEventListener('scroll', chunkHandler)
        
        return ()=> {
            window.removeEventListener('scroll', chunkHandler)
        }
        // eslint-disable-next-line
    }, [viewPhotos])
    return(
        <div className='container-fluid flex-center'>
            <div className={`container ${s.img_container}`}>
                {viewPhotos? viewPhotos.slice(0, 1000).map(viewPhoto=>{
                    return (
                        <div key={viewPhoto.id}>
                            <Photo url={viewPhoto.url}/>
                        </div>
                    )
                }):null}
                {allPhotos? allPhotos.map(allPhoto => {
                    return (
                        <div key={allPhoto.id}>
                            <Photo url={allPhoto.url}/>
                        </div>
                    )
                }):null}
            </div>
        </div>
    )
}

export default Photos