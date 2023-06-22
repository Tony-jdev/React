import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import "./Users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('q') ?? '');
    
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setUsers(result);
    }

    useEffect(() => { getUsers(); }, []);

    const searchHandler = (e) => {
        setTextSearch(e.target.value);
        setSearch({ q: e.target.value});
    };

    const filterUsers = (user) => {
        if(search.get('q'))return new RegExp(search.get('q'), 'i').test(user.name);
        return true;
    }

    return (
        <div className='users'>
            <div className="users-list ">
                <input type="text" value={textSearch} onChange={searchHandler}/>
                {users.filter(filterUsers).map(user => <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>)}
            </div>
            <Outlet />
        </div>
    );
}

export default Users;
