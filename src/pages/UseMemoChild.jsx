import React, { useState, useMemo } from 'react';

const Child = React.memo(({ style, count, darkMode, setDarkMode }) => {
    console.log('Child Rendered');
    return (<div style={style}>I am the child [{count}]<p>Theme:[{darkMode ? 'Dark' : 'Light'}]</p></div>

    )
})

const UseMemoChild = () => {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const style = useMemo(() => {
        return {
            backgroundColor: darkMode ? 'aliceblue' : 'black',
            color: darkMode ? 'black' : 'white',
            padding: '10px',
            margin: '10px'
        }
    }, [darkMode]);

    return (
        <div>
            <button className='bg-green-300 p-4 hover:bg-green-500 hover:rounded' onClick={() => setCount(count + 1)}>Increment Count</button>
            <br />
            <button className='bg-blue-300 p-4 hover:bg-blue-500' onClick={() => setDarkMode(!darkMode)}>Toggle Theme[{darkMode ? 'Dark' : 'Light'}]</button>
            <Child style={style} count={count} darkMode={darkMode} />
        </div>
    )
}

export default UseMemoChild