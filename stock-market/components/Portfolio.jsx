import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('http://localhost:5000/portfolio/1');
        setPortfolio(response.data.portfolio);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <div>
      <h2>Your Portfolio</h2>
      <ul>
        {portfolio.length === 0 ? (
          <li>No stocks in portfolio.</li>
        ) : (
          portfolio.map((stock, index) => (
            <li key={index}>
              {stock.symbol}: {stock.shares} shares
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Portfolio;
