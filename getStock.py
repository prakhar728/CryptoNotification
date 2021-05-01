import requests
import json
def get_live_updates(symbol,market,interval):
    api_key = open(r'./api_key.txt')
    api_url = f'https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol={symbol}&market={market}&interval={interval}&apikey={api_key}'
    raw_df = requests.get(api_url).json()  
    a=0
    for i in raw_df['Time Series Crypto (1min)']:
        if a==1:
            break
        a=a+1
        return raw_df['Time Series Crypto (1min)'][str(i)]["1. open"]
   

def update_Json():
    f=open('digitalCurrency.json',"r+")
    data=json.load(f)
    fr=open('digitalCurrency.json',"w")
    for i in data:
         i["Price"]= float(get_live_updates(i["Symbol"],"INR","1min",))
    fr.write(json.dumps(data)) 
    f.close()
    
    
    


     

    
        
        

    


