import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Error fetching posts:", error));
    }, []);
    return (
        <div>
            <h1>Fetched Posts</h1>
            <ul>
                {posts.slice(0, 5).map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default UseEffectAPI