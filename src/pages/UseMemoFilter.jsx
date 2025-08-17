import React, { useState, useMemo } from 'react'

const UseMemoFilter = () => {
    const [filter, setFilter] = useState('');

    const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);

    const filteredNumbers = useMemo(() => {
        console.log(`Filtering numbers....`);
        return numbers.filter(num => num > Number(filter || 0));

    }, [numbers, filter])
    return (
        <div>
            <input type="text"
                placeholder='Enter a min value'
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className='p-2 border mb-4' />

            <div>
                {filteredNumbers.map(num => (
                    <span key={num} className='inline-block m-1 bg-yellow-200 hover:bg-yellow-400 p-2 border border-pink-900'>{num}</span>
                ))}
            </div>

        </div>
    )
}

export default UseMemoFilter