import React, { useState, useEffect } from 'react'
import './App.css'
import { AngryJanisForm } from './assets/components/form1'
import { Button } from './assets/components/button'
import { ColorDropdown } from './assets/components/ColorDropdown'

function App() {
  const [inputArray, setInputArray] = useState<string[]>([])
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true)

  {useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false)
    }, 5000)
  }, [])};

  return (
    <div className="App container">

      <AngryJanisForm
        onSubmit = {(inputValue1: string, inputValue2: string) => {
          setInputArray([inputValue1, " ", inputValue2]);
        }}
      />
      <h1 className='text--violet'>{ inputArray }</h1>
      <Button
      isDisabled = { isDisabled }
      buttonText = { count }
      className = "count-button"
      onClick = {() => {
        setCount(count+1);
      }}
      />
      <div className='count-tablo'>
        { count * 2 }
      </div>
      <ColorDropdown/>
    </div>
  )
}

export default App
