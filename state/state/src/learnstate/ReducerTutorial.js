import React, { useState, useReducer } from 'react'
//use Reducer is used to have multiple useState hooks in one
// single useReducer hooks

// const [count,setCount]=useState(0);
// const [showText,setShowText]=useState(true);
const ReducerTutorial = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1, showText: state.showText };
            case 'toggleShowText':
                return { count: state.count, showText: !state.showText };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: 'increment' });
                    dispatch({ type: 'toggleShowText' });
                    // setCount(count+1);
                    // setShowText(!showText);
                }}
            >
                Click Here
            </button>

            {state.showText && <p>This is a text</p>}
        </div>
    )
}

export default ReducerTutorial