import {useState} from "react";

function Counter() {
    const [count , setCount]= useState(0);

function Click(){
    alert("Button Was Clicked!.....");
}

const [name , setName] = useState("");

    return (
        <>
        <h1>{count}</h1> 
        <button onClick={() => setCount(count + 1 )}> Increase The Number </button><br/><br/>
        <button onClick = {Click}> Click ME</button><br/><br/>

        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name"/>
        <h3>{name}</h3>
       
        
        </>
    );
}

export default Counter;