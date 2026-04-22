import React,{useState, useEffect} from 'react'

export default function APIintegration() {
    
    const[user, setUser]=useState([]);
    const[loading, setLoading]=useState(false);
    const[error, setError]=useState(null);
       
       useEffect(() => {
           async function fetchUsers() {
            try{
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                


                if (!response.ok) {
                  throw new Error("failed data due to fetch");
                }
                 
                const data=await response.json();

                setUser(data)

            }catch (err){
              setError(err.message);

            }finally {
                setLoading(false);

            }
            }
            fetchUsers();

           },[]);
            if (loading) return <p>Loading...!</p>;
            if (error) return <p style={{color:"red"}}>{error}</p>;
          
  return (
    <div>
        <h2>User list</h2>
              {user.map((user) =>(
                <div key={user.id}>
                  <nav style={{padding:"20px",border:"2px solid black"}}>
                    <h3>{user.name}</h3>
                    <h3>{user.username}</h3>
                     <h3>{user.email}</h3>
                     <h3>{user.phone}</h3>
                     <h3>{user.website}</h3>
                     <h3>{user.company.name}</h3>
                     <h3>{user.address.city}</h3>
                     </nav>
                     </div>
          ))
          }    
          </div>
  )
} 

