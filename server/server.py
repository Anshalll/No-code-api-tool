from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return "This is home page"

app.run(debug=True , host='0.0.0.0' , port=4000)