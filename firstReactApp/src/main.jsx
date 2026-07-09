import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google------</a>
)

// export default MyApp  // Comment this out if you're rendering directly


const anotherUser = "Chai aur react"




const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target: '_blank' },
  'Click me to visit google !!!!',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App/>
    {/* Render the component */}
    {/* <MyApp /> */}
    
    {/* Render the variable - use {} for JS expressions */}
    {anotherElement}
    
    {/* ✅ This will work - wrapped in {} */}
    {/* {reactElement} */}
  </StrictMode>,
)