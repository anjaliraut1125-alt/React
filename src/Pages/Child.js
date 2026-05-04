import { useContext } from "react";
import { MyContext } from "./MyContext.";
import { useParams } from "react-router-dom";

function Child(){
    const name = useContext(MyContext);


    const {id} = useParams();
    return(
        <>
        <h1>Welcome {name} this is useContext</h1>
        <h2>User Id: {id}</h2>  
        <hr style={{border: "1px solid black", width: "100%"}}/>
        </>
    );
}

export default Child;