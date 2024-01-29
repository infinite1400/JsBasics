import React,{useState} from 'react'

const StartTutorial=()=> {
    // let counter=0;
    const [counter,setCounter]=useState(0);
    // this is the hook the first value will be variable and the 
    // second value will we the function that updates the value
    // of the variable inside the function useState();
    // the pass value will determine the initial value of the 
    // variable inside state....
    const increment=()=>{
        setCounter(counter+1);
    };
    const [inputValue,setInputValue]=useState("Murari");
    const onChange=(event)=>{
        const newValue=event.target.value;
        setInputValue(newValue);
    }
  return (
    <div>
    {counter}
    <button onClick={increment} >Increment</button>
    <input placeholder='enter something...' onChange={onChange} />
    {inputValue}
    </div>
  )
}

export default StartTutorial
