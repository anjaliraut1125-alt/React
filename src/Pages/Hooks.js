// import React, {useEffect} from "react";

// useEffect Hook

// function Hooks(){
//     useEffect(() => {
//         console.log("Page Loaded");
//     }, []);
    
//     return <h1>Hello React. I'm useEffect</h1>;
// }

// //run on state change
// import React, {useState , useEffect} from "react";

// function Hooks(){
//     const [count , setcount] = useState(0);

//     useEffect(() => {
//         console.log("Count Updated:", count);
//     }, [count]);

//     return(
//         <>
//         <h2>{count}</h2>
//         <button onClick={() => setcount(count-1)}> Decrease The Number  </button>
//         </>
//     );
//  }
 

 //useRef Hook
import React, {useRef} from "react";
 
function Hooks(){
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

return(
    <>
    <input ref={inputRef} type="text"/>
    <button onClick={focusInput}> Focus Input </button>
    <hr style={{border: "1px solid black", width: "100%"}}/>

    </>
);
}



export default Hooks;