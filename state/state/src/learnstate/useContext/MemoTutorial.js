import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const MemoTutorial = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("this is called");
        return longestName;
    }
    const getLongestName=useMemo(()=> findLongestName(data),[data]);
    // it will not be computed every time toggle changes it will only re-run 
    // data dependency changes in the state
    return (
        <div>
            <h1>{getLongestName}</h1>
            <button onClick={() => {
                setToggle(!toggle);
            }}
            >
                Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </div>
    )
}

export default MemoTutorial
