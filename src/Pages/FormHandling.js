import React, {useState} from "react";

function FormHandling(){
    const[email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Email :" +email);
    }

    return(
        <>

        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit">Submit</button>

        <hr style={{border: "1px solid black", width: "100%"}}/>

        </form>
        
        
        
        
        </>
    );


}

export default FormHandling;