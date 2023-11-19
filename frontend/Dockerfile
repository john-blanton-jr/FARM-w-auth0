# Use the official Node.js image
FROM node

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm i

# Copy the local source code to the container
# COPY . .

# Expose the application's port
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]