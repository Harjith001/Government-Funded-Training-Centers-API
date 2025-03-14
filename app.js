import express from "express"

const app = express();
const port = 5500;
app.listen(port,()=>{
    console.log("App running");
})

app.get('/',(req,res)=>{
    res.send("API is working properly");
})

