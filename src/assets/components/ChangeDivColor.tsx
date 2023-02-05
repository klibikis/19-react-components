import React, { useState, useRef } from 'react'
import { Button } from './button';



export const ChangeDivColor = () => {

    const colorDiv = useRef<any>()

    const handleClick = () => {
        colorDiv.current.style.backgroundColor = "gold"
    }

    return (
        <div className='flex-row'>
            <div className="dropdown__block"
                ref = { colorDiv }>
            </div>
            <Button
            buttonText="Change color"
            onClick={() => {
                handleClick()
            }}
            />
        </div>
    );
}