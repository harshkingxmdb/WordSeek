release: bun run db:migrate latest
worker: bash -c 'export REDIS_URI=${REDIS_URI:-$REDIS_URL}; bun run src/index.ts'
