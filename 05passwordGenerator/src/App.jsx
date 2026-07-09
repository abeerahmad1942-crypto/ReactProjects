import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
  
  // Password Generator Method
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      // ✅ FIXED: Removed +1 to prevent out of bounds
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  // Copy Password to Clipboard Method
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // UseEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-5 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center text-2xl font-bold mb-4'>
        🔐 Password Generator
      </h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-white text-gray-800 font-medium"
          placeholder="Generated Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shrink-0 transition-colors font-medium'
        >
          Copy
        </button>
      </div>
      
      <div className='flex flex-wrap gap-y-3 gap-x-4 text-sm'>
        {/* Length Slider */}
        <div className='flex items-center gap-x-2 flex-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer flex-1 accent-orange-500'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className='text-white font-medium whitespace-nowrap'>
            Length: <span className='text-orange-400'>{length}</span>
          </label>
        </div>
        
        {/* Numbers Checkbox */}
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            className="w-4 h-4 accent-orange-500 cursor-pointer"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className='text-white cursor-pointer'>
            Numbers
          </label>
        </div>
        
        {/* Characters Checkbox */}
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            className="w-4 h-4 accent-orange-500 cursor-pointer"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className='text-white cursor-pointer'>
            Characters
          </label>
        </div>
      </div>

      {/* Password Strength Indicator (Bonus) */}
      <div className="mt-4 pt-3 border-t border-gray-700">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Strength: {
            length < 8 ? 'Weak' :
            length < 12 ? 'Medium' :
            length < 16 ? 'Strong' : 'Very Strong'
          }</span>
          <span>{password.length} characters</span>
        </div>
      </div>
    </div>
  )
}

export default App