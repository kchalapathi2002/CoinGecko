const axios = require('axios');

async function fetchCoinData() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=CG-tmnPayZP2xwtcFyf4DNfhZqU', {
            params: {
                vs_currency: 'usd',
                ids: 'bitcoin,ethereum,matic-network,tether,binancecoin,tron',
                price_change_percentage: '1h,24h'
            }
        });
    const data1=response.data
    const result = data1.map(data => ({
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image,
      price: data.current_price,
      marketcap: data.market_cap,
      percentage_1h: data.price_change_percentage_1h_in_currency,
      percentage_24h: data.price_change_percentage_24h
    }));
    //console.log(result);
    return result;
  } catch (error) {
    console.error('Error fetching Bitcoin data:', error);
  }
}
//fetchCoinData();
module.exports = { fetchCoinData };
