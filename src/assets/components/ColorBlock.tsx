import React, { useState } from 'react'

type ColorBlockProps = {
    color: string
}

export const ColorBlock = ({ color }: ColorBlockProps) => {


    return(
        <div className="dropdown__block"
        style={{backgroundColor: color}}>

        </div>
    )
}