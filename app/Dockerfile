# Use a slim Node.js base image
FROM node:20

# Set up pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to use pnpm
RUN corepack enable

# Copy the project files
WORKDIR /app
COPY . /app

# Build your application
RUN pnpm i
RUN pnpm run build

# Expose the port your application listens on
EXPOSE 4000

# Start your application
CMD ["pnpm", "start"]
