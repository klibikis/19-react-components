import React, { useState, useRef } from 'react'
import { Button } from './button';



export const CloneDiv = () => {

    const colorDiv = useRef<any>()

    const handleClick = () => {
        if(colorDiv.current) {
            const currentDiv = colorDiv.current;
            const clonedDiv = currentDiv.cloneNode(true)
            currentDiv.parentNode?.appendChild(clonedDiv)
        }
    }

    return (
        <>
            <div className='flex-row'>
                <div className="dropdown__block"
                    ref = { colorDiv }>
                </div>
            </div>
            <Button
                innerRef = {colorDiv}
                buttonText="Clone div"
                onClick={() => {
                    handleClick()
                }}
                />
        </>
    );
}