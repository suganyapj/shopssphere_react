import{useMemo,useState} from "react";
function UseMemoDemo(){
const[count,setCount] = useState(0);
const[name,setName]=useState("");
const doubleCount=useMemo(
()=>{console.log("Calculating double count"); return count * 2;},[count]

);
return (
    <div>
<input  placeholder="Type your name" value={name} onChange={(e) => setName(e.target.value)} />

      <h1>useMemo Demo</h1>

      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}


export default UseMemoDemo;