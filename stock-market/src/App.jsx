import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import BuyStock from '../components/BuyStock';
import SellStock from '../components/SellStock';
import Portfolio from '../components/Portfolio';
import StockChart from '../components/StockChart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/buy" element={<BuyStock />} />
        <Route path="/sell" element={<SellStock />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/stocks" element={<StockChart />} />
      </Routes>
    </Router>
  );
}

export default App;
