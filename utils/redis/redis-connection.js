const redis = require('redis');
const dotenv = require('dotenv');
dotenv.config();

const createRedisClient = () => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient({
      port: process.env.REDIS_PORT,
      host: process.env.HOSTNAME,
    });

    redisClient.on('connect', () => {
      console.log(
        `Connected with redis server: host: ${process.env.HOSTNAME} port: ${process.env.REDIS_PORT}`,
      );
      resolve(redisClient);
    });

    redisClient.on('error', (err) => {
      console.error('Error while creating connection:', err);
      reject(err);
    });
  });
};

const setupRedis = async () => {
  try {
    const client = await createRedisClient();
    console.log('Client connected:', client.connected);

    const setKey = (key, value, expiryInSeconds) => {
      return new Promise((resolve, reject) => {
        client.set(key, value, 'EX', expiryInSeconds, (err, reply) => {
          if (err) {
            console.error('Error setting key:', err);
            reject(err);
          } else {
            resolve(reply);
          }
        });
      });
    };

    const getKey = (key) => {
      return new Promise((resolve, reject) => {
        client.get(key, (err, reply) => {
          if (err) {
            console.error('Error getting key:', err);
            reject(err);
          } else {
            resolve(reply);
          }
        });
      });
    };

    const setExpiry = (key, expiryInSeconds) => {
      return new Promise((resolve, reject) => {
        client.expire(key, expiryInSeconds, (err, reply) => {
          if (err) {
            console.error('Error setting expiry:', err);
            reject(err);
          } else {
            resolve(reply);
          }
        });
      });
    };

    return { client, setKey, getKey, setExpiry };
  } catch (error) {
    console.error('Error setting up Redis:', error);
    throw error;
  }
};

module.exports = { setupRedis };
