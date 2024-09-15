import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import EachCoin from './eachCoin';
import './CryptoData.css';
import LastFinalizedBlock from './LastFinalizedBlock';
import _ from 'lodash';

const CryptoData = () => {
  const [Coin1, setCoin1] = useState(null);
  const [Coin2, setCoin2] = useState(null);
  const [Coin3, setCoin3] = useState(null);
  const [Coin4, setCoin4] = useState(null);
  const [Coin5, setCoin5] = useState(null);
  const [Coin6, setCoin6] = useState(null);
  const [error, setError] = useState(null);

  const prevdata0=useRef([]);
  const prevdata1=useRef([]);
  const prevdata2=useRef([]);
  const prevdata3=useRef([]);
  const prevdata4=useRef([]);
  const prevdata5=useRef([]);

  const [Block, setBlock] = useState('');
  const prevblock=useRef('');


  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const block = await axios.get('http://localhost:5000/finalized');
        //console.log(block.data);
        if(! _.isEqual(block.data, prevblock.current)){
          console.log(block.data);
          setBlock(block.data);
          prevblock.current=block.data;
          }

        const response = await axios.get('http://localhost:5000');
        const data0=response.data[0];
        const data1=response.data[1];
        const data2=response.data[2];
        const data3=response.data[3];
        const data4=response.data[4];
        const data5=response.data[5];
        if(! _.isEqual(data0, prevdata0.current)){
        setCoin1(data0);
        prevdata0.current=data0;
        }
        if(! _.isEqual(data1, prevdata1.current)){
          setCoin2(data1);
          prevdata1.current=data1;
          }
          if(! _.isEqual(data2, prevdata2.current)){
            setCoin3(data2);
            prevdata2.current=data2;
            }
            if(! _.isEqual(data3, prevdata3.current)){
              setCoin4(data3);
              prevdata3.current=data3;
              }
              if(! _.isEqual(data4, prevdata4.current)){
                setCoin5(data4);
                prevdata4.current=data4;
                }
                if(! _.isEqual(data5, prevdata5.current)){
                  setCoin6(data5);
                  prevdata5.current=data5;
                  }
      } catch (err) {
        setError('Error fetching crypto data');
      }
    };

    fetchCryptoData();
    setInterval(fetchCryptoData, 5000);
    return () => clearInterval(setInterval);
  },[]); 


  return (
    <div className="main">
      {error && <p>{error}</p>}
      {!Coin1 ? (
        <p>Loading...</p>
      ) : (
        <div className="cryptodata">
          <h2>Cryptocurrency Data</h2>
          <div className='lastfinalized'>
            <LastFinalizedBlock value={Block}/>
          </div>



          <div className="coin-row-cd">
            <p>Name</p>
            <p>Price($)</p>
            <p>1H change</p>
            <p>24H change</p>
            <p >Market Cap($)</p>
          </div>



          <div className="crypto-grid">
          <EachCoin at={Coin1} />
          <EachCoin at={Coin2} />
          <EachCoin at={Coin3} />
          <EachCoin at={Coin4} />
          <EachCoin at={Coin5} />
          <EachCoin at={Coin6} />
            </div>


        </div>
      )
      }
    </div>
  );
};

export default CryptoData;