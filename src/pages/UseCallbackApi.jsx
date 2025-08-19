import React, { useState, useEffect, useCallback } from 'react';


const UseCallbackApi = () => {
    const [query, setQuery] = useState('');

    const debouncedSearch = useCallback(() => {
        const handler = setTimeout(() => {
            if (!query.trim()) return;



            console.log("🔍 Searching for:", query)
        }, 500)

        return () => {
            clearTimeout(handler)
        };

    }, [query]);

    useEffect(() => {
        const cleanup = debouncedSearch();
        return cleanup;
    }, [debouncedSearch])

    return (
        <div>
            <input type="text"
                className='p-2 border border-gray-300'
                placeholder='Type to search...'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}

export default UseCallbackApi