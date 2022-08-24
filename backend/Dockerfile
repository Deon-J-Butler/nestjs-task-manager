FROM node:18
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 9229 9230

WORKDIR /backend/dist/src
COPY package.json yarn.lock ./
COPY tsconfig.json ./
RUN chown node:node -R ./
USER node
RUN yarn install --omit=optional && npm cache clean --force
CMD ["nest", "start:dev"]