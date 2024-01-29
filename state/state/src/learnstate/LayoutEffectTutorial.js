import React, {useEffect,useLayoutEffect,useRef} from 'react'

const LayoutEffectTutorial = () => {
    const inputref=useRef(null);
    // same as useEffect but it call before useEffect
    useLayoutEffect(()=>{
        console.log(inputref.current.value);
    },[]);

    useEffect(()=>{
        inputref.current.value="Pandey"
    },[]);

  return (
    <div>
      <input ref={inputref} value="Murari" />
    </div>
  )
}

export default LayoutEffectTutorial;
