import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import Login from './pages/Login';
import '../src/index.css';
import Signup from './pages/Signup';


export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />

    </Routes>
    
    </BrowserRouter>
  );
}
