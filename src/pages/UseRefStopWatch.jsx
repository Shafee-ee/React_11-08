import React, { useRef, useState } from 'react'

const UseRefStopWatch = () => {
    const timeRef = useRef(null);
    const [time, setTime] = useState(0);

    const handleStart = () => {
        if (timeRef.current !== null) return;

        timeRef.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    const handleReset = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
        setTime(0)
    }

    return (
        <div className='bg-red-200 p-20'>
            <h1 className='text-center bg-gray-200 mb-4 text-2xl text-green-600'>{time}</h1>
            <button className='p-2 bg-green-400 rounded hover:bg-green-500' onClick={handleStart}>Start</button>
            <button className='p-2 bg-red-400 rounded hover:bg-red-500' onClick={handleStop}>Stop</button>
            <button className='p-2 bg-blue-400 rounded hover:bg-blue-500' onClick={handleReset}>Reset</button>
        </div>
    )
}

export default UseRefStopWatch