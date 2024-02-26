import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './pages/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Sidebar />
    
  )
}

export default App
