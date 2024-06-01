import React from 'react'
import { useState } from 'react'

function Login() {
    const[userName,setuserName]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        // preventing
    }
  return (
    <div>
        <h2>login</h2>
        <input type="text"
        placeholder='username'
        onChange={(e)=>setuserName(e.target.value)}
        value={userName}
        />
        {" "}
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'
        />
        {" "}
        <button
        onClick={handleSubmit}
        >submit</button>
        
    </div>
  )
}

export default Login