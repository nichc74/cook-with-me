
FROM python:3.11
WORKDIR /usr/src/app

# Install system dependencies
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git mariadb-server libmariadb-dev vim htop net-tools procps
# local path -> container path
COPY . /usr/src/app

RUN pip install django mysqlclient
RUN pip install djangorestframework 
RUN pip install django-cors-headers

# CMD python /usr/src/app/manage.py runserver 0.0.0.0:8000

# aws 
# RUN pip3 install awscli
# RUN aws configure set aws_access_key_id AKIARCH2QWHYIAUH6JQO
# RUN aws configure set aws_secret_access_key 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
# RUN aws s3 cp s3://cook-with-me-database-backup/alldb.sql /tmp/



# RUN unzip /home/awscliv2.zip
# RUN sudo ./aws/install

