import React, { useState, useCallback, use } from 'react';

const Child = React.memo(({ onClick }) => {
    console.log("Child Rendering");
    return (
        <div>
            <button onClick={onClick}
                className='bg-red-200 rounded p-2' >
                Call Parent Function
            </button>
        </div>
    )
})

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Parent rendered agan")
    }, []);

    return (
        <div>
            <h2>Parent Count:{count}</h2>
            <button
                className='bg-red-200 rounded p-2'
                onClick={() => setCount(count + 1)}
            >
                Increment Count
            </button>
            <Child onClick={handleClick} />
        </div>
    )
}

export default UseCallBack