import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + state.step, clicks: state.clicks + 1 };
        case "decrement":
            return { ...state, count: state.count - state.step, clicks: state.clicks - 1 };
        case "reset":
            return { ...state, count: 0, clicks: 0 };
        case "setStep":
            return { ...state, step: action.payload }
        default:
            return state;
    }
}

const UseReducer2 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, step: 1, clicks: 0 })
    return (
        <div style={{ backgroundColor: 'pink' }}>
            <h1 className='p-6 bg-gray-200 text-center text-3xl'>{state.count} * {state.clicks}</h1>
            <input className="p-4 text-center text-2xl"
                type="number"
                value={state.step}
                onChange={(e) => dispatch({ type: 'setStep', payload: Number(e.target.value) })} />
            <button className='p-4 bg-green-300 rounded hover:bg-green-400 text-2xl' onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className='p-4 bg-red-300 rounded hover:bg-red-400 text-2xl' onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button className='p-4 bg-blue-300 rounded hover:bg-blue-400 text-2xl' onClick={() => dispatch({ type: 'reset' })}>reset</button>

        </div>
    )
}

export default UseReducer2