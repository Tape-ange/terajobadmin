FROM node:16.10 as build

ARG environment

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm i -f && npm run build-develop


FROM nginx

COPY --from=build /usr/src/app/dist/out /usr/share/nginx/html

COPY --from=build /usr/src/app/default.conf /etc/nginx/conf.d/

EXPOSE 5144

CMD ["nginx", "-g", "daemon off;"]