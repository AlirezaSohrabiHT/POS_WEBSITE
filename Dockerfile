# Step 1: Use Node.js to build the Next.js app
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock for dependency installation
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN yarn build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy the Next.js static output to Nginx public directory
COPY --from=build /usr/src/app/.next /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
