import react, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

const UseReducer4 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <h1 className="text-center text-2xl bg-gray-200 mb-2">Count:<strong className="p-4 text-red-800">{state.count}</strong></h1>
            <button className='bg-red-400 p-2 hover:bg-red-500 mr-2' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button className='bg-green-400 p-2 hover:bg-green-500 mr-2' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button className='bg-blue-400 p-2 hover:bg-blue-500' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div >
    );
}

export default UseReducer4