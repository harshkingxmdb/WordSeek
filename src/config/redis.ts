import IORedis from "ioredis";

import { env } from "./env";

const isTls = env.REDIS_URI.startsWith("rediss://");

export const redis = new IORedis(env.REDIS_URI, {
  maxRetriesPerRequest: null,
  tls: isTls ? { rejectUnauthorized: false } : undefined,
});
