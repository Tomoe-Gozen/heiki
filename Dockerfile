FROM node:16

ENV PORT 3000

WORKDIR /app

COPY . /app

EXPOSE 3000
CMD [ "yarn", "dev" ]