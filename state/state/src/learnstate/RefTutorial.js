import React,{useRef} from 'react'
// manipulate the DOM ! 
const RefTutorial = () => {
    const inputRef=useRef(null);
    const onClick=()=>{
        inputRef.current.focus();
        console.log(inputRef.current.value);
        inputRef.current.value="";
    }
  return (
    <div>
        <h1>Murari</h1>
        <input type='text' placeholder='Ex..' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial
