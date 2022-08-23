FROM node:16 as build-stage
COPY ./ ./
RUN npm install
RUN npm run build

FROM nginx:1.15
COPY --from=build-stage ./build/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]