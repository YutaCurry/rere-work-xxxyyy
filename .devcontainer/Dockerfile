FROM --platform=linux/amd64 ubuntu:jammy-20220531

WORKDIR /workspace

RUN apt update && \
    apt install curl unzip -y

# Install git
RUN apt install git -y

# Install nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs



