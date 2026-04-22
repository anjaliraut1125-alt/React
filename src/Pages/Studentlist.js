import React from "react";

function Studentlist(){
    // keys in recat
    const users = [
        {id: 1, name: "Amit"},
        {id: 2, name: "Pooja"}
    ];

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} </li>
            ))}
        </ul>
    );

    // Lists in React
    // const students = ["Anjali" , "Aarti" , "Ram" , "Mohan"];

    // return (
    //     <>
    //     <ol>
    //         {students.map((name) => (

    //             <li>{name}</li>
    //         ))}
    //     </ol>
    //     </>
    // );


}

export default Studentlist;