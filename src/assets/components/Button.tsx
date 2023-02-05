import React, { useState } from 'react'
import { InputField } from './input'

type ButtonProps = {
    buttonText: string | number,
    onClick?: () => void,
    className?: string,
    isDisabled?: boolean 
    innerRef? : any
}

export const Button = ({ buttonText, onClick, className, isDisabled, innerRef }: ButtonProps) => {

    return (
        <button 
        ref = {innerRef}
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