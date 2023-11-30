const express=require ('express')
const app=express()
const routes=require ('./routes/routes')
const mongoose=require('mongoose')
const uri="mongodb+srv://ansh:KRQWJleVjfNZqZYX@cluster0.pn7oy3b.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use('/',routes);


mongoose.connect(uri)
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("server created");
})