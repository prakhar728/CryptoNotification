from flask import Flask
from flask_mailer import Mailer, Email

app = Flask(__name__)
smtp = Mailer(app)

mail = Email(
    subject='hi, there',
    text='awesome message',
    to=['prakharojha12@gmail.com'],
    from_addr='testingitout@example.com'
)
smtp.send(mail)