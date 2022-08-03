FROM node:latest as builder
WORKDIR /app
COPY ..
RUN npm install && npm ng build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/bosco-cliente .
ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]