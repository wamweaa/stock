import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const StockPriceFeed = () => {
  const [stockPrices, setStockPrices] = useState({});

  useEffect(() => {
    socket.on('stock_update', (data) => {
      setStockPrices(data);
    });

    return () => {
      socket.off('stock_update');
    };
  }, []);

  return (
    <div>
      <h2>Live Stock Prices</h2>
      <ul>
        {Object.keys(stockPrices).map((symbol) => (
          <li key={symbol}>
            {symbol}: ${stockPrices[symbol]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockPriceFeed;
