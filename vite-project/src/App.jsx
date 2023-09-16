import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='h-screen m-0'>
    <Header/>
    <Body/>
    <Footer/>
   </div>
  )
}

export default App
