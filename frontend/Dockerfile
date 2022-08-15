FROM node:16 as build-stage
COPY ./ ./
RUN npm install --no-optional && npm cache clean --force
RUN npm run build

FROM nginx:1.15
COPY --from=build-stage ./build/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]