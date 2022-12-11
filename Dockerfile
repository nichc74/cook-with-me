
FROM debian:latest
WORKDIR /usr/src/app

# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git &&\
    apt-get install -y python3 &&\
    apt-get install -y python3-pip &&\
    apt-get install -y mariadb-server libmariadb-dev &&\
    apt-get install -y vim &&\
    apt-get install -y htop &&\
    apt-get install -y net-tools &&\
    apt-get install -y procps

# local path -> container path
COPY . /usr/src/app

RUN pip3 install django
RUN pip3 install mysqlclient

# aws 
# RUN pip3 install awscli
# RUN aws configure set aws_access_key_id AKIARCH2QWHYIAUH6JQO
# RUN aws configure set aws_secret_access_key 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
# RUN aws s3 cp s3://cook-with-me-database-backup/alldb.sql /tmp/



# RUN unzip /home/awscliv2.zip
# RUN sudo ./aws/install

