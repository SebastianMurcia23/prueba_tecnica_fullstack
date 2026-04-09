FROM node:20-alpine AS construccion

WORKDIR /app

COPY package*.json ./
RUN npm ci        # sin python/make/g++ — bcryptjs no los necesita

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=construccion /app/dist ./dist
COPY --from=construccion /app/node_modules ./node_modules
COPY --from=construccion /app/package*.json ./

EXPOSE 3000

CMD ["node", "dist/main"]