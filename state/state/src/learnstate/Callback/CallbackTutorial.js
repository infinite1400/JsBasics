import React, { useCallback, useState } from 'react'
import Child from './Child';
const CallbackTutorial = () => {
    const [data,setData]=useState("Hello my name is Murari Pandey");
    const [toggle,setToggle]=useState(false);
    const returnComment=useCallback(()=>{
        return data;
    },[data]);
  return (
    <div>
        <Child returnComment={returnComment}/>
      <button
      onClick={()=>{
        setToggle(!toggle);
      }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  )
}

export default CallbackTutorial
