import React, { useRef, useState } from 'react'

const UseRef = () => {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const [currentFocus, setCurrentFocus] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentFocus === 1) {
            inputRef2.current.focus();
            setCurrentFocus(2);
        } else if (currentFocus === 2) {
            inputRef3.current.focus();
            setCurrentFocus(3);
        } else {
            inputRef1.current.focus();
            setCurrentFocus(1)
        }
    }

    return (
        <div>
            <h1>Auto focus</h1>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='enter your text here..'
                    ref={inputRef1} />
                <br />

                <input type="text"
                    ref={inputRef2} />
                <br />
                <input type="text"
                    ref={inputRef3} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UseRef