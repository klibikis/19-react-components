import React, { useState } from 'react'
import { Button } from './button';
import { ColorBlock } from './ColorBlock'


export const ColorDropdown = () => {

    const [activeColor, setActiveColor] = useState("");
    const [colorBlockArray, setColorBlockArray] = useState<string[]>([]);


    return(
        <div className="wrapper">
            <div className="flex-row">
                <Button
                background = { activeColor }
                buttonText={"+"}
                onClick = {() => {
                    setColorBlockArray([...colorBlockArray, activeColor])
                }}
                />
                <select className='select__menu' 
                defaultValue= 'purple'
                onChange = {(e) => {
                    setActiveColor(e.target.value)
                }}
                >
                    <option value = "purple">purple</option>
                    <option value = "violet">violet</option>
                    <option value = "blueviolet">blue violet</option>
                    <option value = "darkorchid">darkorchid</option>
                    <option value = "darkmagenta">darkmagenta</option>
                    <option value = "indigo">indigo</option>
                </select>
            </div>
            <div className="flex-row flex-wrap">
                {colorBlockArray.map(color => {
                    return (
                        <ColorBlock
                            color = { color }
                        />
                    )
                })}
            </div>
        </div>
    )
}