import React from "react";

import './Home.css';

function Home(props){
    return(
        <h2 class="text">Welcome {props.name}, {props.age} , {props.title}</h2>
    );
}

export default Home;