import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentSearchTerm, setCurrentSearchTerm] = useState("Dogs")

  return (
    <>
    <Header />
    <ShowSearch />
    <ShowList />
    </>
  )
}

export default App
