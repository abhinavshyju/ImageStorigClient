import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import UploadPage from './pages/UploadPage';

const App = () => {

  return (
    <BrowserRouter>
      <div className="flex justify-between font-mono text-white px-2 py-4" >
        <h1 className='font-bold text-2xl'>ImageStock</h1>
        <div className=" flex gap-5">
        <Link to="/">View</Link>
        <Link to="/upload">Upload Image</Link>
        </div>
        </div>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage/>}/>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
