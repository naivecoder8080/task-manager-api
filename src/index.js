const express=require ('express');
const userRouter=require('./routers/user');
const taskRouter=require('./routers/task');
require('./db/mongoose.js')

const app=express();
const port=process.env.PORT;

app.use(express.json())
app.get('',(req,res)=>{
    res.send('Welcome to Task Manager!')
    });
app.use(userRouter);
app.use(taskRouter);


app.listen(port,()=>{
    console.log('Server is up on port',port);
})


