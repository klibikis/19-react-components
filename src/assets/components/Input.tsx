import React, { useState } from 'react'

type InputFieldProps = {
    value: string,
    customFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField = ( { value, customFunc}: InputFieldProps) => {

    return(
        <input 
        className='input'
        type = "text"
        placeholder = "Write something..."
        value = { value }
        onChange = {(e) => {
            customFunc(e)
        }}
        />
    )
}