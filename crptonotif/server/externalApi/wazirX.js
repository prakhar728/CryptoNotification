const axios = require('axios');


const getAssetWazir=async(assets)=>{
  try{
let resp = await axios.get("https://api.wazirx.com/api/v2/market-status");
let obj =[];
await resp.data.markets.map(async(m)=>{
if(m.quoteMarket=="inr"&&assets.includes(m.baseMarket)){
obj.push({
  coin: m.baseMarket,
price:m.last
})
};


});
return obj;
}catch(err){
console.log(err)
}

}
module.exports = getAssetWazir
