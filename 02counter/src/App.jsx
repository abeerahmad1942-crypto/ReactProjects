import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

    const [counter, setCounter] = useState(5)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(prevCounter =>  prevCounter + 1)
    setCounter(prevCounter =>  prevCounter + 1)
    setCounter(prevCounter =>  prevCounter + 1)
    setCounter(prevCounter =>  prevCounter + 1)
  }
  const removeValue = () => {
    if (counter == 0) {
      alert("Value not be zero")
      breaks;
    }
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Chai aur cide</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
