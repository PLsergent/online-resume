from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def single_page_app():
    return render_template('single-page-app.html')
