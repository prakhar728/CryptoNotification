const axios = require('axios');

const assets=['btc','ada','bch','dot','trx','eth','doge','eos','bat','zil'];
let obj =new Object();
function getAssetWazir (assets){
    
    //MAKING CONNECTION
    axios.get('https://api.wazirx.com/api/v2/market-status')
    .then(function (response) {
        // handle success
        var j=0;
        for(var i=0;i< response["data"]["markets"].length;i++){
            if(response["data"]["markets"][i]["quoteMarket"]=="inr" && assets.includes(response["data"]["markets"][i]["baseMarket"])){
                const objTemp = {
                  coin:response["data"]["markets"][i]["baseMarket"],
                  price:response["data"]["markets"][i]["last"]
                }
                obj[`ID${j}`]=objTemp;
                j=j+1;
            }
        }
        console.log(obj);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      
}
getAssetWazir(assets);