# Client App
FROM nginx:1.17.1-alpine
LABEL authors="Erikson Mizael"
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/Bob /usr/share/nginx/html
