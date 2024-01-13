import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  // let Counter = 15;
  const [Counter, setCounter] = useState(15);

  const addValue = () =>{
    // setCounter(Counter+1);

    // setCounter((prevCount) => prevCount + 1 );
    // setCounter((prevCount) => prevCount + 1 );
    // setCounter((prevCount) => prevCount + 1 );
    // setCounter((prevCount) => prevCount + 1 );

    setCounter((prevCount) => prevCount + 1 );

  }
  const removeValue = () =>{
    setCounter(Counter-1);
  }


  return (
    <>
    <h1>React Course {Counter}</h1>
    <h2>Counter Value: {Counter}</h2>
    <button
     onClick={addValue}
     >Add Value{Counter}</button>
    <button onClick={removeValue}>Remove Value</button>
    <p>Footer: {Counter} </p>
    </>
  )
}

export default App
