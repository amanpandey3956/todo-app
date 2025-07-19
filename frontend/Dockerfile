# Use Nginx as a static file server
FROM nginx:alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the frontend files to Nginx's web directory
COPY . /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Nginx starts automatically in this base image
