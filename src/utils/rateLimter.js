const {RateLimiterRedis} =require('rate-limiter-flexible');
const redis =require('../config/redisConfig');


// rate limiter for 1 request per second
const onePerSecondLimiter = new RateLimiterRedis({
    storeClient: redis,
    points: 1,          // allow 1 request
    duration: 1,        // per second
    blockDuration: 1    // block for 1 second if limit exceeded
});

// rate limiter for 20 requests per minute
const twentyPerMinuteLimiter = new RateLimiterRedis({
    storeClient: redis,
    points: 20,         // allow 20 requests
    duration: 60,       // per minute
    blockDuration: 1    // block for 1 second if limit exceeded
});

module.exports ={
    onePerSecondLimiter,
    twentyPerMinuteLimiter
};