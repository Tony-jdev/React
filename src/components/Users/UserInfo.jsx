import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import UsersContext from '../../contexts/UsersContext';

const UserInfo = () => {
    const { id } = useParams();
    const users = useContext(UsersContext);
    const [user, setUser] = useState({});

    const getUser = async () => {
        // const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
        // const result = await response.json();
        //const response = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
        setUser(users.find(user => user.id.toString() === id));
    }

    useEffect(() => {
       getUser();
    }, [id]);

    return (
        <div>
            <h1>{user?.name}</h1>
        </div>
    );
}

export default UserInfo;
