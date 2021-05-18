
FROM debian:latest
WORKDIR /usr/src/cook-with-me

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
    # apt install -y 

# local path -> container path
COPY . /usr/src/cook-with-me

RUN pip3 install django
RUN python3 /usr/src/cook-with-me/server/cook_with_me/manage.py runserver localhost:8000
# RUN pip3 install mariadb
# RUN pip3 install mysqlclient
