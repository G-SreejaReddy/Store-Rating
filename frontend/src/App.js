// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardUser from './pages/DashboardUser';
import DashboardOwner from './pages/DashboardOwner';
import StoreDetails from './pages/StoreDetails';
// Correct import if you're using default export
import axios from '../src/api/axios';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/user" element={<DashboardUser />} />
        <Route path="/owner" element={<DashboardOwner />} />
        <Route path="/store/:id" element={<StoreDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
