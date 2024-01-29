import React, { useState, createContext } from 'react'
import User from './User';
import Login from './Login';
export const appContext = createContext(null);
const ContextTutorial = () => {
    const [userName, setUserName] = useState("");
    return (
        <div>
            <appContext.Provider value={{userName,setUserName}}>
                <Login />
                <User />
            </appContext.Provider>
        </div>
    )
}

export default ContextTutorial
