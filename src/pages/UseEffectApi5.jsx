import React, { useEffect, useState } from 'react'

const UseEffectApi5 = () => {

    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const controller = new AbortController();

        const fetchPost = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`,
                    { signal: controller.signal }
                );
                if (!res.ok) throw new Error(`HTTP error!status:${res.status}`);
                const data = await res.json();
                setPost(data);
                setError(null);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                    setPost(null);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
        return () => controller.abort();
    }, [postId])
    return (
        <div>
            <h1>Use Effect Api 5</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {post && (
                <div>
                    <h1>{post.id}</h1>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
            <button onClick={() => setPostId(id => Math.min(1, id - 1))} className='p-2 bg-green-200 mr-2'>⏮️</button>
            <button onClick={() => setPostId(id => Math.max(100, id + 1))} className='p-2 bg-green-200'>⏭️</button>

        </div>
    )
}

export default UseEffectApi5