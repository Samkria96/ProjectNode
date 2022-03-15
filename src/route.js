const express = require ('express')
const app = express()
const port = 5000
app.get('/',(req,res)=>{
    res.send("server created")
})
app.get('/about',(req,res)=>{
     res.send("tell about us")
})
app.listen(port,()=>{
    console.log(`port number is ${port}`)
})