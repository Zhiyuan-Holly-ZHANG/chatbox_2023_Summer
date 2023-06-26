from flask import Flask, render_template, request, jsonify
# Flask 是一个使用Python 编写的轻量级Web 应用程序框架

from chat import get_response
from chatgpt import f1
app = Flask(__name__)


@app.get("/") 
def index_get():
    return render_template("base.html")


@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # 
    response = get_response(text)
    response = f1(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)
