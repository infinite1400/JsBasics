import React, { useContext } from 'react'
import { appContext } from './ContextTutorial'

const User = () => {
    const {userName}=useContext(appContext);
  return (
    <div>
      <h1>User : {userName}</h1>
    </div>
  )
}

export default User
