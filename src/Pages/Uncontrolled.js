import React, { useRef} from "react";

function Uncontrolled(){
    const inputRef = useRef();

    const handleSubmit = ()=>{
        alert(inputRef.current.value);
    };

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSubmit}>Submit </button>
        </div>
    );
}

export default Uncontrolled;