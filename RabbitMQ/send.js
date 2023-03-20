const express = require('express')
const app = express()
const { send } = require('./services/Queuemsg')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))



app.post('/', async (req, res) => {

    const { msg } = req.body


    send('abc',msg)

    return res.json({
        status: 'success',
        msg: 'ok',

    })
})


app.listen(5000, () => {
    console.log('Get running at 5000')
})