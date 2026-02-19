# Start from the official Node.js image
FROM node:18-alpine

# Create a folder for the app inside the container
WORKDIR /app

# Copy your app.js from GitHub into the container
COPY app.js .

# Tell Docker that the app uses port 3000
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
