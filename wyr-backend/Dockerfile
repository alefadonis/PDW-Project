FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the Express server
CMD ["node", "server.js"]
