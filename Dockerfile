FROM node:20

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .

EXPOSE 8080
CMD ["npm", "run", "start:docker"]