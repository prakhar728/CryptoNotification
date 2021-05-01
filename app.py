from flask import Flask, render_template
import getStock
import json

app = Flask(__name__)

# @app.route('/') This means this is just for domain currently local host
# @app.route('Www.WebsiteName.com/') This is for the home page for a site online


@app.route('/')
def homePage():
    f=open('digitalCurrency.json')
    data=json.load(f)
    f.close()
    getStock.update_Json()
    return render_template('updated.html',currencies=data)
# The code that goees runs when this url runs

if __name__ == "__main__":
    app.run(debug=True)
