import React, { useState, useMemo } from 'react';

const UseMemo = () => {

    const factorial = (n) => {
        console.log('Calculating factorial....');

        if (n <= 0) return 1n;
        return BigInt(n) * factorial(n - 1)
    }

    const [number, setNumber] = useState(0);

    const Solvednumber = useMemo(() => factorial(number), [number])
    return (
        <div>
            <input type="number"
                value={number}
                onChange={e => setNumber(Number(e.target.value))} />

            <h1 className='text-yellow-300 bg-fuchsia-400 text-center text-2xl'>Factorial:{Solvednumber.toString()}</h1>
        </div>

    )
}

export default UseMemo