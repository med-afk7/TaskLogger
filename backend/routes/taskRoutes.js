const express = require ('express')
const router = express.Router();

const {allTask,
        addTask} = require  ('../controllers/taskController')


//get all days
router.get('/',allTask);


//add a day 
router.post('/' ,addTask)



module.exports = router
