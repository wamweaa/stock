import React, { useState } from 'react';
import axios from 'axios';

const BuyStock = () => {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');
  const [message, setMessage] = useState('');

  const handleBuy = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/buy', {
        symbol,
        shares: parseInt(shares),
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: Could not buy stock.');
    }
  };

  return (
    <div>
      <h2>Buy Stock</h2>
      <form onSubmit={handleBuy}>
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
        <button type="submit">Buy</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BuyStock;
