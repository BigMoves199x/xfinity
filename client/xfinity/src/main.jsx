import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Password from './components/Password';
import BillingInfo from './components/BillingInfo';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Pass" element={<Password />} />
        <Route path="/Billing" element={<BillingInfo />} />
      </Routes>
    </Router>
  </StrictMode>
);
