const mongoose = require('mongoose')
const DailyTask= require ('../models/tasksModel')

const allTask = async (req ,res) => {
const alltasks =  await DailyTask.find({}).sort({createdAt: -1})
res.status(200).json(alltasks)
    
}

const addTask =  async (req , res) =>{
    const {Gym , Steps ,Calories , Sleep , Water} = req.body ;

    try{

    const day = await DailyTask.create({Gym , Steps , Calories ,Sleep , Water})
    res.status(200).json(day)


    }
    catch(err){
 res.status(400).json({error:error.message})
    }


}




module.exports=
{
allTask,
addTask

}