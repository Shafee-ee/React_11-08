import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
    }
};

const useReduce = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className='p-20'>
            <h1 className='py-2 bg-gray-300'>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })} className='bg-blue-200 mr-2 p-2'>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })} className='bg-red-200 mr-2 p-2'>-</button>
            <button onClick={() => dispatch({ type: 'reset' })} className='bg-green-200 mr-2 p-2'>Reset</button>

        </div>
    )
}

export default useReduce