const express = require ('express')
const router = express.Router();

const {allTask,
        addTask,
        editTask

} = require  ('../controllers/taskController')


//get all days
router.get('/',allTask);


//add a day 
router.post('/' ,addTask)

router.patch('/:id' , editTask)


module.exports = router
