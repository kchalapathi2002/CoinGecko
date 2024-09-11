import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoData = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        setCryptoData(response.data);
        console.log(response);
      } catch (err) {
        setError('Error fetching crypto data');
      }
    };

    fetchCryptoData();
    //const interval = setInterval(fetchCryptoData, 5000);
   // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {!cryptoData ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Cryptocurrency Data</h2>
          <p><strong>ID:</strong> {cryptoData.id}</p>
          <p><strong>Price:</strong> {cryptoData.price}</p>
          <p><strong>Price Change (1h):</strong> {cryptoData.percentage_1h}%</p>
        </div>
      )}
    </div>
  );
};

export default CryptoData;