import {memo} from "react";

function Child(){
    console.log("Child component rendered");
    return(<>
    <h2>Child Component</h2>
    </>)

}
export default memo(Child);