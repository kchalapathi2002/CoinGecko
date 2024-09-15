const express = require('express');
const cors=require('cors');
const { fetchCoinData } = require('./Apis/fromCoinGecko');
const { getLatestBlockNumber } = require('./Apis/Finalizedblock');
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

app.get('/finalized', async (req, res) => {
  try {
    const blockvalue = await getLatestBlockNumber();
    res.send(blockvalue);
  } catch (error) {
    res.status(500).json({ message: 'Error', details: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});