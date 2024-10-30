const  redisConfig =require('../config/redisConfig');
const Queue =require('bull');

const taskQueue =new Queue('taskQueue ',{redis:redisConfig});

taskQueue.process(async(job)=>{
    const { userId } = job.data;
    await task({ body: { user_id: userId } });    
});

module.exports = {
    addTask: (data) => taskQueue.add(data, { jobId: `user_${data.userId}`, delay: 1000 })
};