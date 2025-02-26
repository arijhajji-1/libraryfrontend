FROM node:20.11.1-alpine

WORKDIR /app

# Copy package.json and lock files separately to leverage Docker cache
COPY package.json .
COPY pnpm-lock.yaml .

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Set environment variables for development (local) build
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
COPY .env.${NODE_ENV} .env

# Build the application (if needed)
RUN pnpm run build

# Expose port
EXPOSE 8888

# Command to run the application
CMD [ "pnpm", "run", "preview" ]
