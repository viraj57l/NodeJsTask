const express =require('express');
const router= express.Router();
const taskController =require('../controller/taskController');

router.post('/task',taskController.handleTask);

module.exports =router;