import React, { useState, useReducer } from 'react';

const initialState = {
    todos: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }] };
        case 'toggle':
            return { ...state, todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo) };
        case 'remove':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
}

const UseReducer3 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { todos } = state;
    const [newTodo, setNewTodo] = useState('');
    return (
        <div className='bg-gray-200 p-10'>
            <input type="text"
                value={newTodo}

                onChange={(e) => { setNewTodo(e.target.value) }}
                placeholder='Add todo...' />
            <button onClick={

                (e) => {
                    if (!newTodo.trim()) return;

                    dispatch({ type: 'add', payload: newTodo.trim() })
                    setNewTodo('')
                }}
                className='ml-3 bg-red-400 px-3 py-2 hover:bg-red-600'>
                Add Task</button>

            <ul>

                {todos.map(todo => (
                    <li>{todo.text}<button onClick={(e) => { e.stopPropagation(); dispatch({ type: 'remove', payload: todo.id }) }} className='ml-3 bg-blue-500 px-3 py-2 hover:bg-blue-600'>❌</button></li>

                ))}
            </ul>
        </div >
    )
}

export default UseReducer3