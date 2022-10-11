FROM python:3.10

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install 'https://github.com/RoysManfo/Dynamic/tree/main/packages/django-auth-forms' | pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["py", "manage.py", "runserver"]
