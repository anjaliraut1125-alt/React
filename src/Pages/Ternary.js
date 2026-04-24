import React from "react";

function Ternary(){
    const isLoggedin = false;
  
    return(
        <div>
            {isLoggedin ? <h1>Welcome Back</h1>: <h1>Ternary Operator</h1>}
            <hr style={{border: "1px solid black", width: "100%"}}/>

        </div>
    );

}

export default Ternary;