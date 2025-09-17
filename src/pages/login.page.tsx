
import axios from 'axios'
import reactLogo from '../assets/react.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export const LoginPage = () =>
{
    const [users, setUsers] = useState([])
    const getData = async () =>
    {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users').then((res) => res.data);

        setUsers(res)

    }
    return (
        <div>
            <img src={reactLogo} alt="" />
            <button onClick={getData}>getData</button>

            <ul>
                {users.map((user: { name: string }) => (
                    <li>{user.name}</li>
                ))}
            </ul>
            <Link to={'/about'} >
                About
            </Link>
        </div>
    )
}
