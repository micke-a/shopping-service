FROM java:8
MAINTAINER Mikael Andersson mail.micke@gmail.com

EXPOSE 8080 8081
COPY shopping-service-dw.jar /opt/
COPY config.yml /opt/

CMD java -jar \
    /opt/shopping-service-dw.jar server \
    /opt/config.yml