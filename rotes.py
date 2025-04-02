from main import app
from flask import render_template

#rota
@app.route("/")
def homepage():
    return render_template("homepage.html") 

@app.route("/servicos")
def servicos():
    return render_template("servicos.html") 

@app.route("/quemsomos")
def quemsomos():
    return render_template("quemsomos.html")

