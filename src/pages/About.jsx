import React, { useState } from 'react'

const About = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }} className='p-4 bg-red-100'>Increase Count</button>
            <h1>{count}</h1>
        </div>
    )
}

export default About