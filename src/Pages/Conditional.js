import React from "react";

function Conditional(){

    const message = true;

//     let isLoggedin = true;

//  if(isLoggedin){
//     return <h1>Welcome User I'm Conditional Rendering</h1>;
//  }else {
//     return <h1>I am not Conditional Rendering</h1>;
//  }
    
    return(
        <div>
            {message && <h2>You have new message</h2>}
        </div>
    );

    
} 


export default Conditional;