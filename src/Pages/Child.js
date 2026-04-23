import { useContext } from "react";
import { MyContext } from "./MyContext.";

function Child(){
    const name = useContext(MyContext);
    return(
        <h1>Welcome {name}</h1>
    );
}

export default Child;