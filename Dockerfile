FROM httpd:2.4
MAINTAINER Rémi GATTAZ "remi.gattaz@gmail.com"

# Add lareleve-front applicaion
COPY dist /usr/local/apache2/htdocs/
