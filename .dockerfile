# Usando ultima version de node
FROM node:latest as build

# setiando directorio de trabajo
WORKDIR /app

# copiando package.json a directorio de trabajo
COPY package*.json ./

# instalando dependencias
RUN npm install

# copiando dependencias instaladas anteriormente
COPY . .

# Construyendo app para produccion
RUN npm run build --prod

# Usaremos NGINX  para desplegar angular app
FROM nginx:latest

# copiando NGIX image del paso anterior
COPY --from=build /app/dist /usr/share/nginx/html

# servir en puerto 80
EXPOSE 80

# Lanzando NGINX
CMD ["nginx", "-g", "daemon off;"]