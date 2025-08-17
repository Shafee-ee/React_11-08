import React, { useEffect, useRef } from 'react'

const UseRefScroll = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [])

    return (
        <div>
            <div className='bg-gray-300 h-96 p-20'>
                <h1 className='text-center text-2xl'>Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima aut veritatis tenetur ratione nostrum error molestias obcaecati maiores quae optio ducimus voluptatibus earum mollitia labore, placeat accusantium qui suscipit totam!</p>
            </div>
            <div className='bg-blue-300  h-96 p-20'>
                <h1 className='text-center text-2xl'>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima aut veritatis tenetur ratione nostrum error molestias obcaecati maiores quae optio ducimus voluptatibus earum mollitia labore, placeat accusantium qui suscipit totam!</p>
            </div>
            <div className='bg-red-300 h-96 p-20'>
                <h1 className='text-center text-2xl '>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima aut veritatis tenetur ratione nostrum error molestias obcaecati maiores quae optio ducimus voluptatibus earum mollitia labore, placeat accusantium qui suscipit totam!</p>
            </div>

            <div className='bg-green-300 h-96 p-20'>
                <h1 className='text-center text-2xl ' ref={scrollRef}>Scroll to</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima aut veritatis tenetur ratione nostrum error molestias obcaecati maiores quae optio ducimus voluptatibus earum mollitia labore, placeat accusantium qui suscipit totam!</p>
            </div>
        </div>
    )
}

export default UseRefScroll