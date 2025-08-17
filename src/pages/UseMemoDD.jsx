import React, { useState, useMemo } from 'react'

const UseMemoDD = () => {
    const [minAge, setMinAge] = useState(0);
    const [colorToggle, setColorToggle] = useState(false);

    const users = [
        { id: 1, name: 'Alice', age: 20 },
        { id: 1, name: 'Bob', age: 35 },
        { id: 1, name: 'Wagner', age: 19 },
        { id: 1, name: 'Adolf', age: 28 },
        { id: 1, name: 'Diddy', age: 42 },
    ]

    const filteredUsers = useMemo(() => {
        console.log('Filtering users...');
        return users.filter(user => user.age >= minAge);
    }, [users, minAge]);



    return (
        <div>
            <input type="number"
                placeholder='minimun age....'
                value={minAge}
                onChange={e => setMinAge(Number(e.target.value))}
                className='p-2 border mb-4'
            />

            <button
                onClick={() => setColorToggle(!colorToggle)}
                className='bg-blue-500 p-2 text-white hover:bg-blue-600'
            >Toggle Color</button>

            <ul className={colorToggle ? 'text-red-500' : 'text-blue-500'}>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}-{user.age}</li>
                ))}
            </ul>

        </div>
    )
}

export default UseMemoDD