import React, { useRef, useState } from 'react'

const UseRefOTP = () => {

    const [currentFocus, setCurrentFocus] = useState(1);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentFocus === 1) {
            inputRef2.current.focus();
            setCurrentFocus(2)
        } else if (currentFocus === 2) {
            inputRef3.current.focus();
            setCurrentFocus(3);
        } else if (currentFocus === 3) {
            inputRef4.current.focus();
            setCurrentFocus(4);
        } else {
            inputRef1.current.focus();
            setCurrentFocus(1)
        }
    }


    return (
        <div className='bg-red-100 p-20'>
            <h1 className='text-center mb-4 text-2xl text-gray-800'>Enter your OTP</h1>
            <form className='flex' onSubmit={handleSubmit}>
                <input type="number" className='p-2' max='9' min='0' ref={inputRef1}
                /> <p>-</p>
                <input type="number"
                    className='p-2'

                    max='9'
                    min='0'
                    ref={inputRef2}

                    onPaste={(e) => {
                        e.preventDefault();
                        const pasted = e.clipboardData.getData("text").trim();
                        if (pasted.length >= 4 && /^\d+$/.test(pasted)) {
                            inputRef1.current.value = pasted[0];
                            inputRef2.current.value = pasted[1];
                            inputRef3.current.value = pasted[2];
                            inputRef4.current.value = pasted[3];
                            inputRef4.current.focus();
                        }
                    }}

                />
                <p>-</p>
                <input type="number"
                    className='p-2'

                    max='9'
                    min='0'

                    ref={inputRef3}

                />

                <p>-</p>
                <input type="number"
                    className='p-2'

                    max='9'
                    min='0'

                    ref={inputRef4}

                />

                <button onClick={handleSubmit}>Next</button>
            </form>
        </div>
    )
}

export default UseRefOTP