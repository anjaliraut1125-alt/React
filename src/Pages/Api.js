import React, {useState, useEffect } from "react";

function Api(){
    const [users , setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    },[]);

    return(
        <div>
            <h1>Name Of User List </h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name}  </li>
                ))}
            </ul>
            
            
        </div>
    );
}

export default Api;