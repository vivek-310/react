import { useState,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [len, setlen] = useState(8)
  const[charallow,setchar]=useState(false)
  const[numberallow,setnumber]=useState(false)
  const[password,setPass]=useState('')

    const generatepassword=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallow) 
    str+="1234567890"
    if(charallow)
    str+="!@#$%^&*()_+"

    for (let i = 1; i < len; i++) {
      const char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
    }

    setPass(pass)
    },[len,numberallow,charallow]);


    useEffect(()=>{
      generatepassword();
    },[len,numberallow,charallow])
    
    const copyPassword=() =>{
      window.navigator.clipboard.writeText(password)
    }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder="password"
        readOnly
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         
        >copy</button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={20}
            value={len}
            className=' cursor-pointer'
            onChange={(e)=>{setlen(e.target.value)}}
            name=''
            id=''/>
            <label htmlFor='length'>length:{len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberallow}
            onChange={(e)=>{setnumber((prev)=>!prev)}}
            name="" id="" />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={charallow}
            onChange={(e)=>{setchar((pr)=>!pr)}}
            name="" id="" />
            <label>Characters</label>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
