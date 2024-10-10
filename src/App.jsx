import React from "react";
import Navbar from './Navigation/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/home'
import Work from './Components/Work'
import Contact from './Components/contact'
import Todolist from './Components/Todolist'
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        </div>
        <div style={{padding: '50px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
        </div>
      </Router>
      </div>
  )
}
export default App;
