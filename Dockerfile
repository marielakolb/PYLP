FROM ubuntu:16.04

ARG web_document_root=/home
ENV WEB_DOCUMENT_ROOT=$web_document_root

WORKDIR $web_document_root

COPY /bin/pfc2-0.9.40.x86_64.tar.gz /usr/local/bin 

RUN tar -xvf /usr/local/bin/pfc2-0.9.40.x86_64.tar.gz -C /usr/local/bin/

ENTRYPOINT ["tail", "-f", "/dev/null"]