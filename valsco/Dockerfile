FROM node:alpine3.18 as nodework
WORKDIR /valsco
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build


FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /valsco/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]
