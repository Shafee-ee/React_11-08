import React, { useState, useReducer } from 'react';

const initialState = {
    todo: [],
}

const reducer = (state, action) => {

}

const UseReducer3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { todo } = state;
    const [newTodo, setNewTodo] = useState('');

    return (
        <div>
            <input type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder='Add Tasks' />

            <button
                onClick={() => {
                    if (!newTodo.trim()) return;
                    dispatch({ type: 'add', payload: newTodo.trim() });
                    setNewTodo();
                }}
                className='p-2 bg-red-300 hover:bg-red-400'
            >Add Task</button>
        </div>
    )
}

export default UseReducer3