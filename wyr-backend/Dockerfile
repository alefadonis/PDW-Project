# Use Node.js 18 base image
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

# Use a non-root user for better security (recommended for Podman)
RUN useradd -m appuser && chown -R appuser /app
USER appuser

# Start the Express server
CMD ["node", "index.ts"]
