import React, {useState} from 'react'

function HookCounterFour() {
    const [items, setitems] = useState([])

    const addItem = () => {
        setitems([ ...items, {
        id: items.lenght,
        value: Math.random().toString(20)
        }])
    }
    return (
        <div>
            <button onClick ={addItem}>Add items</button>
            <ul>
                {items.map(item => (
                <li key = {items.id}> {item.value}</li>
                ))}
            </ul> 
        </div>
    )
}

export default HookCounterFour
