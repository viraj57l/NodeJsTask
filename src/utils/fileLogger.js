const fs =require('fs');
const path =require('path');

const logFilePath =path.join(__dirname,'../../logs/task_log.txt');

async function logTaskToFile(user_id) {
    const timestamp = new Date().toISOString();               // getting the timestamp
    const logEntry = `${timestamp} - ${user_id} - task completed\n`; // logging entry 


    // adding to the  log text file
    fs.appendFile(logFilePath,logEntry ,(err) =>{
        if(err){
            console.log('Failed to write to log file',err);
        }
    });
    
}

module.exports ={
    logTaskToFile,
};