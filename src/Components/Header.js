import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <h1>Welcome To Header</h1>
        <Link to= "/">Home</Link> |
        <Link to= "/about">   About</Link> 

        </>
        
    );
}

export default Header;