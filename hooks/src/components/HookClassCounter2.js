import React, {useState} from 'react'
// use state with prev states
function HookClassCounter2() {
    const initialcount = 0
    const [count, setcount] = useState(initialcount)

    
    return (
        <div>
            <div>counter {count}</div>
            <button onClick = {() => setcount(initialcount)}>Reset</button>
            <button onClick = {() => setcount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick = {() => setcount(prevCount => prevCount - 1)}>Decrement</button>         
        </div>
    )
}

export default HookClassCounter2
