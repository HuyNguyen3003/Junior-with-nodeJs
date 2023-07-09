const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/graphQL')
    .then(() => {
        console.log('connected success db')
    })
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(5000, () => {
    console.log('app is runing at port 5000')
})