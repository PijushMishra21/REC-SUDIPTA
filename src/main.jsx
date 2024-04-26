import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client'
import HomePage from './Homepage/HomePage'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import ContactUs from './NavPages/ContactUs';
import Header from './Homepage/Header';
import './Homepage/Header.css';
import About from './NavPages/About';
import Services from './NavPages/Services';
import WorkSample from './NavPages/WorkSample';
import ScrollToTop from "./Homepage/ScrollToTop";
// import { react } from '@vitejs/plugin-react';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <ScrollToTop  />
     <Header />
   <Routes>

          <Route path='/' element={<HomePage />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/WorkSample" element={<WorkSample />} />
          <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>

  </BrowserRouter>

  </React.StrictMode>,
)
