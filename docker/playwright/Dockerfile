FROM mcr.microsoft.com/playwright:v1.50.1-noble

WORKDIR /app

COPY package*.json ./ pnpm-lock.yaml ./

RUN npm install pnpm -g

RUN pnpm install

COPY . .

RUN npx playwright install-deps

CMD ["npx", "playwright", "test"]