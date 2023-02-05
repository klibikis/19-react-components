import React, { useEffect, useState } from 'react'
import { Button } from './button';
import { InputField } from './input';



export const ChangingCountInput = () => {

    const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        console.log("First render")
    }, []);

    console.log("Render")

    const handleChange = (value: string) => {
        setInputText(value)
        console.log("Changing input")
    }



    return (
        <>
            <div className='flex-row'>
                <Button
                buttonText = "+"
                onClick={() => {
                    setCount(count+1)
                    console.log("Changing count")
                }}
                />
            </div>
            <h2>{`Count: ${ count }`}</h2>
            <InputField
            value = { inputText }
            customFunc = {(e) => handleChange(e.target.value)}
            />
            <h2>{inputText}</h2>
        </>
        
    );
}