from flask import Flask, render_template
app = Flask(__name__)

# sudo docker build --tag=online-resume .
# sudo docker run --name online-resume -d -p 80:5000 --rm online-resume:latest


@app.route('/')
def single_page_app():
    return render_template('single-page-app.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0")
