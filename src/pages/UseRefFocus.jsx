import React, { useRef, useEffect } from 'react';

const UseRefFocus = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        inputRef1.current.focus();
    }, []);

    const handleKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            nextRef.current?.focus();
        }
    }

    return (
        <form action="">
            <input type="text"
                placeholder='Enter your name...'
                ref={inputRef1}
                onKeyDown={(e) => handleKeyDown(e, inputRef2)} />
            <input type="age"
                placeholder='Enter your name...'
                ref={inputRef2}
                onKeyDown={(e) => handleKeyDown(e, inputRef3)} />
            <input type="text"
                placeholder='Enter your name...'
                ref={inputRef3}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        alert('Submit')
                    }
                }} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UseRefFocus