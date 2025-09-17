FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN pnpm i 

COPY . .

RUN pnpm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/nginx/html

EXPOSE 80 

CMD ["nginx", "-g" , "daemon off;"]