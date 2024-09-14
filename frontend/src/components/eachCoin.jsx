import React from 'react';
import './eachCoin.css'

const EachCoin = ({ at }) => {
    return (
        <div className="coin-row">
            <p>
            <div className="coin-data">
                <img src={at.image} alt="" width="35" height="35"></img>
                <p>{at.name}({at.symbol.toUpperCase()})</p>
            </div>
            </p>
            <p className="coin-price">${at.price}</p>
            <p className={at.percentage_1h>0?"positive":"negative"}>
                {Math.floor(at.percentage_1h*100)/100}%
            </p>
            <p className={at.percentage_24h>0?"positive":"negative"}>
                {Math.floor(at.percentage_24h*100)/100}%
            </p>
            <p>{at.marketcap}</p>
            
        </div>
    );
};

export default EachCoin;