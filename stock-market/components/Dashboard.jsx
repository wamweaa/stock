import React from 'react';
import StockPriceFeed from './StockPriceFeed';
import StockChart from './StockChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Stock Trading Dashboard</h1>
      <StockPriceFeed />
      <StockChart />
    </div>
  );
};

export default Dashboard;
