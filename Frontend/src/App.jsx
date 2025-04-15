import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import NavBar from './components/NavBar';
import AddPage from './components/AddPage';
import GetPage from './components/GetPage';
import Home from './components/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
  
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddPage/>} />
          <Route path="/get" element={<GetPage />} />
        </Routes>
      </Router>
  
  )
}

export default App
