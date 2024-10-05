# Use a slim Node.js base image
FROM node:20-slim AS base

# Set up pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to use pnpm
RUN corepack enable

# Copy the project files
WORKDIR /app
COPY . /app

# Build stage
FROM base AS build

# Install dependencies using pnpm fetch and frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm fetch --frozen-lockfile && \
    pnpm install --frozen-lockfile

# Build your application
RUN pnpm run build

# Production stage
FROM base AS production

# Copy only necessary files for production
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

# Expose the port your application listens on
EXPOSE 4000

# Start your application
CMD ["pnpm", "start"]