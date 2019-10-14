import React, {useState} from 'react'
// use hook
function HookCounter() {

  const [state, setstate] = useState(0)
    return (
        <div>
            <button onClick ={( )=> setstate(state + 1)}>counter{state}</button>
        </div>
    )
}

export default HookCounter
