import React, {useState, useEffect} from 'react'

function HookUseEffect() {
    const [state, setstate] = useState(0)
    useEffect (
        () => {
            document.title = `Clicked ${state}`
        }

    )
    return (
        <div>
            <button onClick={() =>setstate(state+1)}>Change brower header count</button>
        </div>
    )
}

export default HookUseEffect
