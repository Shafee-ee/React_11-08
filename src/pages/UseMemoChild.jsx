import React, { useState, useMemo } from 'react';

const Child = React.memo(({ style }) => {
    console.log('Child Rendered');
    return <div style={style}>I am the child</div>
})

const UseMemoChild = () => {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    const style = useMemo(() => {
        return {
            backgroundColor: darkMode ? 'black' : 'white',
            color: darkMode ? 'white' : 'black',
            padding: '10px',
            margin: '10px'
        }
    }, [darkMode]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
            <br />
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme[{darkMode ? 'Dark' : 'Light'}]</button>
            <Child style={style} />
        </div>
    )
}

export default UseMemoChild