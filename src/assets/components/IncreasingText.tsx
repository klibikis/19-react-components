import React, { useEffect, useState } from 'react'
import { Button } from './button';
import { InputField } from './input';



export const IncreasingText = () => {

    const [count, setCount] = useState(100);
    const [inputText, setInputText] = useState("")

    const handleChange = (value: string) => {
        setInputText(value)
    }

document.title = inputText

    return (
        <>
            <div className='flex-row'>
                <Button
                buttonText = "+"
                onClick={() => {
                    setCount(count+1)
                }}
                />
            </div>
            <h2 style={{fontSize: count-84}}>{`Count: ${count}`}</h2>
            <InputField
            value = { inputText }
            customFunc = {(e) => handleChange(e.target.value)}
            />
            <h2>{inputText}</h2>
        </>
        
    );
}