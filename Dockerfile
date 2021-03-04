
FROM debian:latest
WORKDIR /usr/src/cook-with-me

# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git &&\
    apt-get install -y python3

# local path -> container path
COPY . /usr/src/cook-with-me

# CMD ["apt-get", "install", "git"]