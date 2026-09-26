FROM nginx:1.30.5-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY pages/ /usr/share/nginx/html/pages/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
