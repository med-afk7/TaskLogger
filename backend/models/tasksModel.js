const mongoose = require ('mongoose');
const { type } = require('os');

const Schema = mongoose.Schema;

const tasksSchema = new Schema ({

Gym :{type :Boolean , required:true},
Steps:{type :Number , required:true},
Calories:{type :Number , required:true},
Sleep :{type :Number , required:true},
Water:{type :Number, required:true}



} ,{timestamps : true})

module.exports = mongoose.model('DailyTask' , tasksSchema);