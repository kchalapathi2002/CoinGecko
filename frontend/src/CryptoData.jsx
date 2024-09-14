import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EachCoin from './components/eachCoin';
import './components/CryptoData.css'

const CryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        setCryptoData(response.data);
        //console.log(cryptoData);
      } catch (err) {
        setError('Error fetching crypto data');
      }
    };

    fetchCryptoData();
    setInterval(fetchCryptoData, 10000);
    return () => clearInterval(setInterval);
  }, []);


  return (
    <div className="main">
      {error && <p>{error}</p>}
      {!cryptoData ? (
        <p>Loading...</p>
      ) : (
        <div className="cryptodata">
          <h2>Cryptocurrency Data</h2>



          <div className="coin-row-cd">
            <p>Name</p>
            <p>Price($)</p>
            <p>1H change</p>
            <p>24H change</p>
            <p >Market Cap($)</p>
          </div>



          <div className="crypto-grid">

          
            {
              cryptoData.map((coin)=>(
                <EachCoin 
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.price}
                marcap={coin.marketcap}
                change1={coin.percentage_1h}
                change24={coin.percentage_24h}
                />
              ))
            }
            </div>


        </div>
      )
      }
    </div>
  );
};

export default CryptoData;