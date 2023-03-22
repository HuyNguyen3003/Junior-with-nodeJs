const express = require('express')
const { resolve } = require('path')
const client = require('redis')
require('./init.mongoDB')
const User = require('./modules.mongoDB.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post("/",async (req,res)=>{

    try{
        const { userId, msg } = req.body
       await User.create({ userId: userId, msg: msg })

   
        

    }catch(e){
        console.log(e)
        res.json('changle IdUser')
    }
  

})






app.listen(5000,()=>{
    console.log('app is running at 5000')
})


