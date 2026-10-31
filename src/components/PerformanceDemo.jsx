import {useState} from 'react';
import Child from './Child';    
function PerformanceDemo(){
    const [count,setCount] = useState(0);
    console.log("PerformanceDemo rendered");

return(
    <div>
        <h1>Performance Demo</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <Child />
    </div>
)
}
export default PerformanceDemo;
