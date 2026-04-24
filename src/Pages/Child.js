import { useContext } from "react";
import { MyContext } from "./MyContext.";

function Child(){
    const name = useContext(MyContext);
    return(
        <>
        <h1>Welcome {name} this is useContext</h1>
        <hr style={{border: "1px solid black", width: "100%"}}/>
        </>
    );
}

export default Child;