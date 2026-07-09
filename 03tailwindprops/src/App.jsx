import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() { 
  let myObj = {
    username: "abeer",
    age: 21
  }
  // let arr = [1, 2, 3]
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Heading */}
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-8'>
        Tailwind test
      </h1>
      <Card username="abeerahmad" btnText="Click me"/>
      <Card username="Hammas Ali" btnText="Visit me"/>
      <Card username="Ahmed"/>
      <Card username="Awais"/>
      
    </div>
  )
}

export default App