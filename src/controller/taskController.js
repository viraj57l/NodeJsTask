const ratelimiter =require('../utils/rateLimter')
const taskQueue =require('../queue/taskQueue');
const { onePerSecondLimiter, twentyPerMinuteLimiter } = require('../utils/rateLimter');
const { logTaskToFile } = require('../utils/fileLogger');

exports.handleTask =async(req,res) =>{
    const userId =req.body.user_id;
    try{
        await onePerSecondLimiter.consume(userId);       // adding rate limiter for 1 task per second
        await twentyPerMinuteLimiter.consume(userId)     // adding rate limiter for 20 task per min
        await taskQueue.addTask({userId});        // queueing tasks

         // logging the entries
         const logEntry = `${userId} - task queued at - ${Date.now()}\n`;
         await logTaskToFile(logEntry);                 //logged the task to the text file

        res.status(200).send('Task queued succesfully');
    }catch(err){
       
       
            // logging the task being queued due to rate limit exceeded
            const logEntry = `${userId} - rate limit exceeded, task queued at - ${Date.now()}\n`;
            await taskQueue.addTask({userId});
            await logTaskToFile(logEntry);     //logged the task to the text file

            res.status(202).send('Rate limit exceeded. Task queued for later execution');
        
        
    }
};