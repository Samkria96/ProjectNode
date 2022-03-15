const express = require ('express')
const app = express()
const port = 7000

app.listen(port,()=>{
    console.log(`port number is ${port}`)
})

app.use((req,res,next)=>{
    console.log("middleware connected")
    next()
})

app.get('/api/user/login',(req,res,next)=>{
    const data = [{
        name:'sahil'
    }]
    req.user=data;
    next()
},(req,res,next)=>{
    console.log("another midware called");
    res.send(req.user);
    next();
  
})
app.get('/api/user/signup',(req,res)=>{
     res.send("tell about us")
})
