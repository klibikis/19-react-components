import React, { useEffect, useState, useRef } from 'react'
import { InputField } from './input'
import { Button } from './button'


type InputFieldProps = {
    onSubmit: (inputValue1:string, inputValue2: string) => void
}

export const AngryJanisForm = ( { onSubmit }: InputFieldProps) => {

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");


    return(
        <form
        className='input__container'
        onSubmit={(e) => {
            e.preventDefault();
            onSubmit(inputValue1, inputValue2);
            setInputValue1("");
            setInputValue2("");
        }}>
            <div className="input__inputs">
                <InputField
                value = { inputValue1 }
                customFunc = {(e) => {
                    setInputValue1(e.target.value)
                }}
                />
                <InputField
                value = { inputValue2 }
                customFunc = {(e) => {
                    setInputValue2(e.target.value)
                }}
                />
            </div>
            <Button
            buttonText = "SUBMIT"
            />
            
        </form>        
    )
}