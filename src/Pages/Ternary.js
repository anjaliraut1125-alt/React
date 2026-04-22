import React from "react";

function Ternary(){
    const isLoggedin = false;
  
    return(
        <div>
            {isLoggedin ? <h1>Welcome Back</h1>: <h1>Ternary Operator</h1>}
        </div>
    );

}

export default Ternary;