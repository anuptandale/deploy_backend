/* eslint-disable no-undef */
const { promisify } = require('util');
const createRedisClient = require('./redis-connection');
const ONE_YEAR_IN_SECONDS = 100000;

async function setupRedis() {
  try {
    const redisClient = await createRedisClient();
    const setKey = promisify(redisClient.set).bind(redisClient);
    const getKey = promisify(redisClient.get).bind(redisClient);
    const EVAL = promisify(redisClient.eval).bind(redisClient);
    const DEL = promisify(redisClient.del).bind(redisClient);
    const TTL = promisify(redisClient.ttl).bind(redisClient);
    const setRedisKeyExpiry = promisify(redisClient.expire).bind(redisClient);

    return {
      redisClient,
      setKey,
      getKey,
      EVAL,
      DEL,
      TTL,
      setRedisKeyExpiry,
    };
  } catch (error) {
    console.error('Error setting up Redis:', error);
    throw error;
  }
}

async function cacheToRedis(
  method,
  params,
  key,
  expiryTimeInSeconds = ONE_YEAR_IN_SECONDS,
  isAPICall = false,
) {
  try {
    const { getKey, setKey, setRedisKeyExpiry } = await setupRedis();

    let data = await getKey(key);
    if (data) return JSON.parse(data);

    data = await method(params);
    if (isAPICall) {
      // Your API call error handling logic here
    }

    await setKey(key, JSON.stringify(data));
    await setRedisKeyExpiry(key, expiryTimeInSeconds);

    return data;
  } catch (error) {
    console.error('Error caching to Redis:', error);
    throw error;
  }
}

module.exports = {
  setupRedis,
  cacheToRedis,
};
