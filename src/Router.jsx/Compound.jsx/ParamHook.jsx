import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';



export default function ParamHook() {

    const [user, setUser]=useState([])
    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
         .then(res=>res.json())
         .then((data)=> {
            setUser(data)
         })
    },[])



  return (
    <div>
      <h2>User Name List</h2>
      <ul>
        {user.map((user)=>(
            <li key ={user.id}>
              <Link to={`/Details/:${user.name}, ${user.email}, ${user.phone}, ${user.website}, ${user.company.name}, ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}>{user.name}</Link> 
             
            </li>
        ))}
      </ul>
    </div>
  )
}
