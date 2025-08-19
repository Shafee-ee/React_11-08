import React, { useState, useCallback, useMemo } from 'react';

const users = [
    { id: 1, name: "shafee", age: "32" },
    { id: 2, name: "Azeem", age: "22" },
    { id: 3, name: "Abdul", age: "42" },
    { id: 4, name: "Ghani", age: "30" },
    { id: 5, name: "shaaz", age: "30" },
    { id: 6, name: "shahid", age: "30" },
];

const Child = React.memo(({ filterList }) => {
    console.log("Child Rendered");
    const filtered = filterList();

    return (
        <div>
            <h3>Filtered Users:</h3>
            <ul>
                {filtered.map((user) => (
                    <li key={user.id}>Name:{user.name} Age:{user.age}</li>
                ))}
            </ul>
        </div>
    )
});

const UseCallBackFilter = () => {
    const [query, setQuery] = useState('');

    const filterList = useCallback(() => {
        return users.filter(user =>
            user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
    }, [query])

    return (
        <div>
            <input type="text"
                className='border p-2'
                placeholder='Search User...'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />

            <Child filterList={filterList} />
        </div>
    )
}

export default UseCallBackFilter