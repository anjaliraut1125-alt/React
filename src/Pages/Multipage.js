import React from "react";
import {Link} from "react-router-dom";

function Multipage(){
    return(

        <> 
        <Link to = "/">Home  | </Link> 
        <Link to = "/about">About | </Link> 
        <Link to = "/register">Register | </Link> 
        <Link to = "/counter">Counter |</Link> 



        
        </>
       
       
    );

}

export default Multipage;