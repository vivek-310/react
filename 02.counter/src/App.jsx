import { useState } from 'react'
import "./App.css"

function App() {
  const[counter ,setcounter]=useState(0)

  const addvalue=()=>{
    setcounter((x)=>x+1);
    setcounter((x)=>x+1);
  }

  const removevalue=()=>{
    setcounter(counter-1)
  }
  // let counter=15;

  // const addvalue=()=>{
  //   counter+=1;
  //   console.log(counter)
  // }
  return (
    <>
      <h1>react course</h1>
      <h2>counter value:{counter}</h2>
      <button
      onClick={addvalue}
      >add value:</button> {" "}
      <button
      onClick={removevalue}
      >remove value:</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
