# stage 1
FROM node:alpine AS angular-ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm ci && npm run build

# stage 2
FROM nginx:alpine
COPY --from=angular-ui-build usr/src/app/dist/angular-ui /usr/share/nginx/html
EXPOSE 8080
