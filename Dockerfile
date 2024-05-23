FROM node:20.9.0
WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm@8.15.3
RUN pnpm install
RUN echo "Install dependencies completed.."
RUN rm -rf node_modules
COPY . .
RUN echo 'Start build..'
RUN pnpm run docs:build
RUN echo 'Build completed..'