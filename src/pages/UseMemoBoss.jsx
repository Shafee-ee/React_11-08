import React, { useState, useMemo } from 'react';

const Child = React.memo(({ user }) => {
    console.log("Child Rendered");
    return (<div>{user.name} is {user.age} years old</div >)
}, (prevProps, nextProps) => {
    return prevProps.user.name === nextProps.user.name &&
        prevProps.user.age === nextProps.user.age;
})

const UseMemoBoss = () => {
    const [count, setCount] = useState(0);

    const user = {
        name: 'shafee',
        age: 32
    }

    return (
        <div>
            <Child user={user} />
            <button className='bg-blue-300 p-4 hover:rounded hover:border hover:border-black' onClick={() => setCount(count + 1)}>Increment Count[{count}]</button>
        </div>
    )
}

export default UseMemoBoss