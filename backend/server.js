require('dotenv').config()
const express = require ('express');
const taskRoutes = require('./routes/taskRoutes')
const mongoose = require('mongoose')
const app = express();


//




//you must add this to parse json files
app.use(express.json())
//using our taskRoutes

app.use('/api/tasks' , taskRoutes)




//connect to mongodb then start listening!
mongoose.connect(process.env.MONGO_URI)
.then(() => {

app.listen(process.env.PORT ,() =>{
    console.log('listening on port 4001')
});

})

.catch((err) => {
    console.log(err);
})

