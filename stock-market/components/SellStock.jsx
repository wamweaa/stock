import React, { useState } from 'react';
import axios from 'axios';

const SellStock = () => {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');
  const [message, setMessage] = useState('');

  const handleSell = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/sell', {
        symbol,
        shares: parseInt(shares),
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: Could not sell stock.');
    }
  };

  return (
    <div>
      <h2>Sell Stock</h2>
      <form onSubmit={handleSell}>
        <label>
          Stock Symbol:
          <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
        </label>
        <br />
        <label>
          Number of Shares:
          <input type="number" value={shares} onChange={(e) => setShares(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Sell</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SellStock;
