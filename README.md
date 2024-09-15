Title:Crypto Prices tracking using Coingecko Api

File structure defining important files:
-backend
    -Apis  (Contains API's required for the website)
      -fromCoinGecko.js  (Contains a function which gets data from Coingecko Api and filter required data and returns that data)
      -Finalizedblock.js  (Contains a function which gets data from Alchemy api and returns last finalized block)
    -fromMyApi.js  (used to connect frontend with backend)
-frontend
  -src
    -components  (contains components of the frontend along with css files)
      -CryptoData.jsx  (This frontend component get data from Api every 5 seconds and compare it with previousily stored data if they are different then it will pass the data to child components)
      -CryptoData.css
      -eachCoin.jsx  (It is a component which will show the coin data)
      -eachCoin.css
      -LastFinalizedBlock.jsx  (It is a component which will show the Last finalized block of ethereum)
      -LastFinalizedBlock.css
    -App.jsx
    -App.css
    -index.jsx
    -index.css

Prerequisite for running the project:
1.Node.js
2.React

How to setup the application:
1.Clone the repository:
   git clone https://github.com/kchalapathi2002/CoinGecko.git
2.Navigate to backend:
   cd backend
   install required dependencies using npm install:
      express,cors,axios...
3.Navigate to frontend
   cd frontend
   install required dependencies using npm install:
      react-router-dom,axios,lodash...
4.Run the project:
   cd backend>node fromMyApi.js
   cd frontend>npm start

How to use the application:
After running this application a page will be opened on localhost 3000 which displays the live prices of Bitcoin,Ethereum,Tether,Matic,BNB and TRON. It will als displays the last finalized block in Ethereum blockchain.
