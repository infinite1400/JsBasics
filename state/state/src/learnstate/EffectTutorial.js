import React, { useEffect, useState } from 'react'
import axios from 'axios'
const EffectTutorial = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {
        // console.log('hello World');
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.data[0].email);
                console.log(res.data);
                console.log("API WAS CALLED");
            })
            .catch((err) => {
                console.log(err);
            })
    }, [count]);
    return (
        <div>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                Click
            </button>
        </div>
    )
}

export default EffectTutorial
