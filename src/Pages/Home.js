import React from "react";

import './Home.css';

function Home(props){
    return(
        <h2 className="text">Welcome {props.name}, {props.age} , {props.title}</h2>
    );
}

export default Home;