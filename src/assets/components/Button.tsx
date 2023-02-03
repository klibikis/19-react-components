import React, { useState } from 'react'
import { InputField } from './input'

type ButtonProps = {
    buttonText: string | number,
    onClick?: () => void,
    className?: string,
    isDisabled?: boolean 
}

export const Button = ({ buttonText, onClick, className, isDisabled }: ButtonProps) => {

    return (
        <button 
        disabled = { isDisabled }
        className={ 'button ' + className + " " + (isDisabled && "button--disabled") }
        onClick={() => {
            onClick?.()
        }}
        >
            { buttonText }
        </button>
    );
}