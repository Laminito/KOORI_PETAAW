FROM node:18
RUN mkdir kooriBackend
COPY . ./kooriBackend
WORKDIR /kooriBackend/.
RUN npm cache clean --force
RUN npm install
EXPOSE 3001
CMD [ "npm", "start"]