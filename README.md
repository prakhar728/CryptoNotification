# StockNotification

## About Project

This was build in collab with [Tushar Singh](https://github.com/tusharsinghofficial)- who managed the front-end part.
It display the price of the CryptoCoins with a one minute delay.

## Steps to run on Local Machine

1. Download zip file or fork and clone in your machine.
2. Download flask in the machine using `pip install flask` 
3. Make a new text file with the name *api_key*.
4. Get your API key from [Alpha Vantage](https://www.alphavantage.co/support/#support) and paste it in the text file
5. Run `python app.py` in the command line to run the local flask server.

## Points to be Noted

This was built using the Free Version of the Alpha Vantage Api thus only 5 request can be made in a minute, forcing the server to do it again will break it and the server stops giving error.
When this happens revert the changes done in the *digitalCurrency.json* file.

**This project is still a work under construction.**
