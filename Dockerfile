# build environment
FROM node:20-alpine as build 
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
# production environment
FROM nginx:1.22.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]