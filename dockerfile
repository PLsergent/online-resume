FROM python:3.7
COPY ./app app
WORKDIR ./app
RUN pip install flask gunicorn
ENV FLASK_APP online_resume_app.py
EXPOSE 5000
CMD ["gunicorn", "-b", "0.0.0.0:5000", "online_resume_app:app"]
