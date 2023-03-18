const express = require('express')
const app = express()
const { createClient } = require('redis');
const client = createClient({
    url: 'redis://127.0.0.1:6379'
});
const { addDelayEventOrder }=require('./send')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))


app.post('/check', async (req, res) => {

  const {id} = req.body
    await addDelayEventOrder(id)



  
    return res.json({   
        status: 'success',
        msg: 'ok',
        time: new Date().getTime(),
   
    })
})





app.listen(3000, () => {
    console.log(`app running at 3000`)
})