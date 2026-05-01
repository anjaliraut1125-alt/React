import React, { useState} from "react";

function Register(){

    const [form , setForm] = useState({

        name  : "",
        email : "",
        password : ""
    });

    const [error , setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.name === "" || form.email === "" || form.password === ""){
            setError("All fields are required");
        }else if (!form.email.includes("@")){
            setError("Invalid Email");
        }else if (form.password.length < 6){
            setError ("Password must be at least 6 characters");
        }else {
            setError("");
            alert ("Registration Successful");
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}><h1>Register Form</h1>

        <input type = "text" name="name" placeholder="Enter Name" value={form.name} 
        onChange={handleChange}/>
        <br/>
        <br/>


        <input type = "email" name="email" placeholder="Enter Your Email" value={form.email} 
        onChange={handleChange}/>
        <br/>
        <br/>

        <input type = "password" name="password" placeholder="Enter Your Password" value={form.password} 
        onChange={handleChange}/>
        <br/>
        <br/>

        <button type="submit">Register Here!</button>

        {error && <p style={{color : "red"}}>{error}</p>}
        <hr style={{border: "1px solid black", width: "100%"}}/>

        </form>

        </>
    );

}


export default Register;