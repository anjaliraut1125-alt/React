import React from "react";

import './Home.css';

function Home(props){
    return(
        <>
        <br/>
        <h2 className="text">I am Basic Routing ,{props.name}, {props.age} , {props.title}</h2>
        <hr style={{border: "1px solid black", width: "100%"}}/>
        </>

        
    );
}

export default Home;