import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function StockChart() {
  const [stockData, setStockData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT_HERE');
        const data = response.data; // Check the structure of this data
        
        // Ensure these fields exist in the response
        if (data.labels && data.prices) {
          const chartData = {
            labels: data.labels,
            datasets: [
              {
                label: 'Stock Prices',
                data: data.prices,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          };
          setStockData(chartData);
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h2>Stock Prices</h2>
      {stockData.labels.length > 0 && stockData.datasets.length > 0 ? (
        <Line data={stockData} />
      ) : (
        <div>Loading chart data...</div>
      )}
    </div>
  );
}

export default StockChart;
