import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import { Route,RouterProvider,createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
