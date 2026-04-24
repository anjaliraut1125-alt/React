import React from "react";

import './Home.css';

function Home(props){
    return(
        <>
        <h2 className="text">Here we Learn Props = {props.name}, {props.age} , {props.title}</h2>
        <hr style={{border: "1px solid black", width: "100%"}}/>
        </>

        
    );
}

export default Home;