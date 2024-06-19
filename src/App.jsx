
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  // const [FormData,setFormData] =useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(previousData)=>({...previousData
  //     [name]:value
  //   })
  // }

  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/" element={<Signup/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
