# Deploy Stage 
FROM nginx:1.17.1-alpine

COPY ./dist/angular-ui /usr/share/nginx/html
