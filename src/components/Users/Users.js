import React, {useState, useEffect} from 'react'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';
import RandomPhotos from './RandomPhotos/RandomPhotos';

const Users = ()=>{

    const [users, setUsers] = useState();
    
    function getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json))
    }
    useEffect(()=>{
        getUsers()
    }, [])

    return(
        <div className={`container-fluid ${s.users__wrapper}`}>
            <div className={`container ${s.users}`}>
                <h2 className={` ${s.heading}`}>Users</h2>
                <div className={` ${s.list}`}>
                    {users? users.map(user=>{
                        return(
                        <NavLink to={`/user/${user.id}`} key={user.id} className={`${s.list_item}`}>
                            <h3 className={` ${s.username}`}>Nickname: {user.username}</h3>
                            <RandomPhotos userId={user.id}/>
                        </NavLink>
                        )
                    }):null}
                    
                </div>    
            </div>
        </div>
    )
}

export default Users