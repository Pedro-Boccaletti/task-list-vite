# Base image
FROM node:14.17.6-alpine3.14 AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the app files to the container
COPY . .

# Build the app for production
RUN npm run build

# Use a new base image for the final image
FROM nginx:1.21.3-alpine

# Copy the built app files to the nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

