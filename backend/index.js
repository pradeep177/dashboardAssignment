const express = require('express')
const env = require('dotenv')
const app = express()
// const mongoose = require('mongoose')
require('./config/db')
const cors = require('cors')

// const url = 'mongodb+srv://root:root@cluster0.99ruj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(express.json())

const auth = require('./routes/user')
const data = require('./routes/data')

//demo api
app.get('/hello', (req,res,next) => {
    res.status(200).send("hello from server")
})

app.use(cors())

app.use('/',auth)
app.use('/',data)

//envirnoment variable
env.config();

app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
})