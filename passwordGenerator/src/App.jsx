import {useState,useCallback,useEffect,useRef} from 'react'

import './App.css'


function App() {
  
  const [length,setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);

  const [password, setpassword] = useState()
  const passwordRef=useRef(null)

  //useCallBack funtion tab use higa jab ek hi function ko bar bar run akrna ho paar alaga alag cheze change hone par
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+="0123456789"
    }
    if(characterAllowed){
      str=str+"!@#$%^&*(){}[]"
    }

    for (let i = 1;  i<=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }

    setpassword(pass)

  },[length,numberAllowed,characterAllowed,setpassword])

  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select()  // copy karne pe jo blue highlight ara hai
    window.navigator.clipboard.writeText(password)
  },[password])// kuki copy sirf tabhi kaam ayega jab password change hoga

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    
      <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password'
              ref={passwordRef}>
              </input>
              <button 
              onClick={copyPasswordToClipBoard}
              className='text-white px-3 outline-none bg-blue-700 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-2'>
              <input type='range' min={6} max={100} value={length} className='cursor-pointer' 
              onChange={(e)=>{setLength(e.target.value)}}>
              </input> 
              <label>length:{length}</label>

            </div>
            <div className='flex items-center gap-x-1'>
              <input type='checkbox' defaultChecked={numberAllowed} id="numberInput" onClick={() => setnumberAllowed(!numberAllowed)}/>
              <label htmlFor='numberInput' >Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type='checkbox' defaultChecked={characterAllowed} id="characterInput" onClick={() => setcharacterAllowed(!characterAllowed)}/>
              <label htmlFor='characterInput' >Characters</label>
            </div>
          </div>
        </div>
      </>
        
  )
}

export default App
