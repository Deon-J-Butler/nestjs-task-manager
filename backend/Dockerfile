FROM postgres

FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json ./

RUN chown node:node -R ./
USER node

RUN npm install --no-optional && npm cache clean --force

ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT

CMD ["npm", "run", "start", "dev"]