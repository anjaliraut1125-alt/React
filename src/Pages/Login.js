import React, {useState} from "react";

function Login(){
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");


 const handleSubmit = (e) => {
    e.preventDefault();

    if(email === "" || password === ""){
        alert("All Fields are required");
    }else{
        alert("Login Succesfully");
    }
 };


  return(
    <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <input type="email" placeholder="Enter Email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>

        <br/>
        <br/>

        <input type="password" placeholder="Enter Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <br/>
        <br/>


        <button type="submit">Login</button>
        <hr style={{border: "1px solid black", width: "100%"}}/>
        

    </form>
  );


}



export default Login;