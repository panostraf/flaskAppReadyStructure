from flask import request, render_template
from app import app
import os



@app.route("/",methods=['GET','POST'])
# @app.route("/en",methods=['GET','POST'])
def home():
    return render_template('index.html')
