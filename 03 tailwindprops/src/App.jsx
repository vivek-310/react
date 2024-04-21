import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-green-500 text-3xl'>hello</h1>
      <h1 className='text-3xl bg bg-green-300 p-3 rounded-md'>vite with tailwind</h1>{""}
      <Card />
      <Card />
    </>
  )
}

export default App
