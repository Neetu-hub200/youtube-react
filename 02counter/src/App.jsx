import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    // console.log("clicked", counter);
    }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>Footer {counter}</p>
    </>
  )
}

export default App
