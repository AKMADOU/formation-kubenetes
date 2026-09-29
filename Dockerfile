FROM node:20-alpine
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 2026
VOLUME app/logs
USER node
CMD ["npm", "run", "start"]