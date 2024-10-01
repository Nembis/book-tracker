FROM node:20.14.0-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn

COPY . .

# USER node

EXPOSE 3000

CMD ["yarn", "dev"]
