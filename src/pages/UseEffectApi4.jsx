import React, { useEffect, useState } from 'react'

const UseEffectApi4 = () => {
    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState(null);;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

                if (!res.ok) {
                    throw new Error(`HTTP error! status:${res.status}`)
                }
                const data = await res.json();
                setPost(data);
            } catch (error) {
                setError(error.message);
                setPost(null)
                console.error("Error fecthind data:", error);
            } finally {
                setLoading(false)
            }
        }

        fetchPost();
    }, [postId])

    return (
        <div className='p-4 bg-blue-100'>
            <h1 className='text-2xl text-center'>Search Post ID</h1>
            <input
                className='p-2 text-bold'
                type="number"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                min="1"
                max="100" />

            {error && <p className='text-red-700'>Error fetching data:{error}</p>}
            {
                loading ? (<p>Loading...</p>) : post ? (
                    <div>
                        <h2 className='p-2  text-3xl text-bold bg-red-300'>{post.id}-{post.title}</h2>
                        <p className='text-2xl'>{post.body}</p>
                    </div>
                ) : (<p>No post Found</p>)
            }
        </div>
    )
}

export default UseEffectApi4