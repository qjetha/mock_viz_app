from flask import Flask, render_template

app = Flask(__name__)

# Set Single Flask Route (index)
@app.route('/', methods=['GET'])
def index():
	
	return render_template("viz.html")