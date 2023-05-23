FROM node:latest as angular

# Install Angular CLI
RUN npm install -g @angular/cli

WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json /app/

# Install project dependencies
RUN npm ci --force

# Copy the entire project
COPY . .

# Build the Angular application
RUN ng build --configuration=production

FROM nginx:alpine

# Copy the built Angular files into the NGINX server
COPY --from=angular /app/dist/requests-http /usr/share/nginx/html

# Copy NGINX configuration
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port (if needed)
EXPOSE 80


# docker build -t curso-angular
# docker run -p 8081:80