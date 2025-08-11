import React, { useState, useEffect } from 'react'

const UseEffectAPi2 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data);
            }
            catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false)
            }
        }
        fetchPosts();
    }, [])
    return (
        <div>
            <h1>Fetched Posts</h1>
            <ul className='p-4'>
                {posts.slice(0, 5).map(post => (
                    <li key={post.id} className='p-2 bg-green-300'>
                        <strong>{post.id}-{post.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectAPi2