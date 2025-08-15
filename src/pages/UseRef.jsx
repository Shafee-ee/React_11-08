import React, { useRef, useEffect } from 'react'

const UseRef = () => {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);



    useEffect(() => {
        inputRef1.current.focus();

        setTimeout(() => {
            inputRef2.current.focus();

        }, 1000)

        setTimeout(() => {
            inputRef3.current.focus();
        }, 2000)

    }, [])
    return (
        <div>
            <h1>Auto focus</h1>
            <input type="text"
                placeholder='enter your text here..'
                ref={inputRef1} />

            <input type="text"
                ref={inputRef2} />

            <input type="text"
                ref={inputRef3} />
        </div>
    )
}

export default UseRef