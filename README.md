# NodeJsTask

# Task Queue with Rate Limiter and Redis

This project implements a task queue using Bull, a popular Node.js library, with a rate limiter for managing task execution limits. The project utilizes Redis for task management and rate limiting.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Logging](#logging)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- Bull (for task queue)
- Redis (for caching and rate limiting)
- Rate-limiter-flexible (for rate limiting)

## Installation

1. Clone the repository:

   git clone https://github.com/viraj57l/NodeJsTask.git

2. Install the required dependencies:
   npm install
   
3. Make sure to replace the values with your actual Redis server details if they differs.
   
4. Running the Project
   Start your Redis server. If Redis is installed locally, you can run:
   redis-server
   
5.The server will be running on http://localhost:8000 ,it can differ in other devices check on which port the server is running by logging the server port in console.

6.API Endpoints
You can run this on postman
POST method  /api/task
Request Body:
{
  "user_id": "123"
}
Responses:
200 OK: Task queued successfully.
202 Accepted: Rate limit exceeded. Task queued for later execution.

#Logging
Task completion logs are stored in logs/task_log.txt. Ensure that the logs directory exists in the root of the project.
