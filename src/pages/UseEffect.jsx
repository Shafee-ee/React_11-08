import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Rendered or count changed:", count)
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default UseEffect