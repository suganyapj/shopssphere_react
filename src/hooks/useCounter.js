import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increase() {
    setCount(count + 1);
  }
function decrease(){
  if(count>0){
    setCount(count - 1);
  }
}
  return{ count, decrease, increase };

}


export default useCounter;