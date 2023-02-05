import React, { useState, useRef } from 'react'
import { Button } from './button';


export const MoveDiv = () => {

    const MoveDiv = useRef<any>()
    const [isInCorner, setIsInCorner] = useState(false)

    const handleClick = () => {
        const currentDiv = MoveDiv.current;
        if(!isInCorner) {
            currentDiv.innerHTML = 'esmu stūrī';
            currentDiv.style.position = 'absolute';
            currentDiv.style.top = '0px';
            currentDiv.style.right = '0px';
            setIsInCorner(!isInCorner)
        }else{
            currentDiv.innerHTML = '';
            currentDiv.style.position = '';
            setIsInCorner(!isInCorner)

        }
    }

    return (
        <>
            <div className='flex-row'>
                <div className="dropdown__block transition"
                    ref = { MoveDiv }>
                </div>
            </div>
            <Button
                innerRef = {MoveDiv}
                buttonText="Move div"
                onClick={() => {
                    handleClick()
                }}
                />
        </>
    );
}