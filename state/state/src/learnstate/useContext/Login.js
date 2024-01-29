import React, { useContext } from 'react'
import { appContext } from './ContextTutorial';
const Login = () => {
    const {setUserName}=useContext(appContext);
  return (
    <div>
      <input type='text' placeholder='Ex'
        onChange={(event)=>{
            setUserName(event.target.value);
        }}
      />
    </div>
  )
}

export default Login
