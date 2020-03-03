FROM gcr.io/google-appengine/nodejs

WORKDIR /home/app

COPY . /home/app

RUN npm install

ENTRYPOINT [ "npm", "start" ]