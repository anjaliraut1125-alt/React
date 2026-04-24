// controlled components
import React, { useState} from "react";

function ControlledForm(){
    const [name , setName] = useState("");

    return(
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
            placeholder="Enter Name"/>

            <h3>Your Name: {name}</h3>
        </div>
    );
}

export default ControlledForm;