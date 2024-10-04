### Build Step
# pull the Node.js Docker image
FROM node:lts-bookworm AS builder
ENV PUBLIC_MEDUSA_BACKEND_URL=https://medusa.nexus.mawoka.eu
ENV PUBLIC_MEDUSA_PUBLISHABLE_API_KEY=pk_e0070ce5dc78348b1b76ca622b701a241f597006b2dbde415648982e7189d275
# change working directory
WORKDIR /usr/src/app
# copy the package.json files from local machine to the workdir in container

# run npm install in our local machine
RUN corepack enable pnpm
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm i

# copy the generated modules and all other files to the container
COPY . .

# build the application
RUN pnpm run build

### Serve Step
# pull the Node.js Docker image
FROM node:lts-bookworm-slim

# change working directory
WORKDIR /app
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/pnpm-lock.yaml .
RUN corepack enable && corepack prepare pnpm@7.13.2 --activate && pnpm i
# copy files from previous step
COPY --from=builder /usr/src/app/build .
COPY --from=builder /usr/src/app/node_modules ./node_modules

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# the command that starts our app
CMD ["pnpm", "run", "run:prod"]
