const express=require('express');
const urlRoute=require('./routes/url')
const {connectToMongoDb}=require('./connect')
const app=express();
const PORT=7000;

connectToMongoDb('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log("Connect to MongoDb"))

app.use(express.json());

app.use('/url',urlRoute)



app.listen(PORT,()=> console.log("Server Started "))
