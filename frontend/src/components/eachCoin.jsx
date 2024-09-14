import React from 'react';
import './eachCoin.css'

const EachCoin = ({ image, name, symbol, price, marcap, change1, change24 }) => {
    //console.log(name);
    return (
        <div className="coin-row">
            <p>
            <div className="coin-data">
                <img src={image} alt="" width="35" height="35"></img>
                <p>{name}({symbol.toUpperCase()})</p>
            </div>
            </p>
            <p className="coin-price">${price}</p>
            <p className={change1>0?"positive":"negative"}>
                {Math.floor(change1*100)/100}%
            </p>
            <p className={change24>0?"positive":"negative"}>
                {Math.floor(change24*100)/100}%
            </p>
            <p>{marcap}</p>
            
        </div>
    );
};

export default EachCoin;