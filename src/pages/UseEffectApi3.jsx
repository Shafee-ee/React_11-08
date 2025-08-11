import React, { useEffect, useState } from 'react'

const UseEffectApi3 = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        console.log("Clock Mounted ⏰");

        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Clock unmounted,timer Cleaned ❌")
        }
    }, [])
    return (
        <div className='p-4'>
            <h1 className='p-4 bg-green-300'>Live Clock</h1>
            <h2 className='p-4 bg-blue-400 mt-4 rounded'>{time.toLocaleTimeString()}</h2>
        </div>
    )
}

export default UseEffectApi3