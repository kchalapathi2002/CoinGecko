const express = require('express');
const cors=require('cors');
const { fetchCoinData } = require('./fromCoinGecko');
const app = express();
app.use(cors());
app.get('/', async (req, res) => {
  try {
    const cryptoData = await fetchCoinData();
    res.json(cryptoData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crypto data' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});