//THIS IS HOW TO RUN THE WHOLE CODE

const wazirx = require('./wazirX');

const assets=['btc','ada','bch','dot','trx','eth','doge','eos','bat','zil'];

const getData = async(assets) =>{
  const result = await wazirx(assets);
  console.log(result);
}

getData(assets);
