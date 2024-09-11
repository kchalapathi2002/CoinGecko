const axios = require('axios');

async function fetchCoinData() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=CG-tmnPayZP2xwtcFyf4DNfhZqU', {
            params: {
                vs_currency: 'usd',
                ids: 'bitcoin',
                price_change_percentage: '1h,24h'
            }
        });

    const data=response.data[0];
   // console.log(data.id);
    const result = {
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        image: data.image,
        price: data.current_price,
        marketcap: data.market_cap,
        percentage_1h: data.price_change_percentage_1h_in_currency,
      };
      console.log('data:',result);
    return result;
  } catch (error) {
    console.error('Error fetching Bitcoin data:', error);
  }
}
//fetchCoinData();
module.exports = { fetchCoinData };
