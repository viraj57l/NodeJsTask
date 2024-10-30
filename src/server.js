const cluster =require('cluster');
const os =require('os');
const express =require('express');
const taskRoutes =require('./routes/taskRoutes');

if(cluster.isPrimary){
    const numCPUs =os.cpus().length;
    for(let i =0; i<numCPUs; i++){
        cluster.fork();
    }

    cluster.on('exit',(worker)=>{
        console.log(`Worker ${worker.process.pid} exited .Restarting...`);
        cluster.fork();
        
    });
}else{
    const app =express();
    app.use(express.json());
    app.use('/api',taskRoutes);

    app.listen(8000,()=>{
        console.log(`Worker ${process.pid} is listening on port 8000`);
        
    });
}