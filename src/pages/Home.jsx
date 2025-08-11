import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='p-20'>
            <h1 className='p-20'>React Learning PlayGround</h1>
            <button onClick={() => navigate("/about")} className='p-2 bg-blue-100 rounded hover:bg-red-200 ml-2'>Use State</button>
            <button onClick={() => navigate("/useEffect")} className='p-2 bg-red-100 rounded hover:bg-red-200 ml-2'>UseEffect</button>
            <button onClick={() => navigate("/useEffectApi")} className='p-2  bg-red-100 rounded hover:bg-red-200 ml-2'>UseEffect Api</button>
            <button onClick={() => navigate("/useEffectApi2")} className='p-2  bg-red-100 rounded hover:bg-red-200 ml-2'>UseEffect Api 2</button>
            <button onClick={() => navigate("/useEffectApi3")} className='p-2  bg-red-100 rounded hover:bg-red-200 ml-2'>UseEffect Api 3</button>
            <button onClick={() => navigate("/useEffectApi4")} className='p-2  bg-red-100 rounded hover:bg-red-200 ml-2'>UseEffect Api 4</button>
            <button onClick={() => navigate("/useEffectApi5")} className='p-2  bg-red-100 rounded hover:bg-red-200 ml-2'>UseEffect Api 5</button>
            <button onClick={() => navigate("/useReduce")} className='p-2 bg-green-100 hover:bg-green-200 ml-2'>use Reduce</button>
            <button onClick={() => navigate("/useReducer2")} className='p-2 bg-green-100 hover:bg-green-200 ml-2'>use Reduce 2</button>
            <button onClick={() => navigate("/useReducer3")} className='p-2 bg-green-100 hover:bg-green-200 ml-2'>use Reduce 3</button>


        </div>
    )
}

export default Home