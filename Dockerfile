# node base image
FROM node:12.16.1 as node-image

# set working directory
WORKDIR /ui

# copy package.json file 
COPY package.json package.json

# install and cache app dependencies
RUN npm install --silent 

# Copy all the other Angular files
COPY . .

# generate build
RUN npm run build:production

# nginx base image
FROM nginx:alpine

# copy artifact build from the 'build environment'
COPY --from=node-image /ui/dist /usr/share/nginx/html

# Copy the default nginx.conf provided by node
#COPY --from=node-image ./nginx.conf /etc/nginx/conf.d/default.conf

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
