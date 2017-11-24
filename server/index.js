const express =require('express')
const app = express()
const bodyParser =require('body-parser')
const contactListRouter = require('../contact')

app.use(bodyParser.urlencoded({ extend: false}))
app.use(bodyParser.json())
app.use('/', contactListRouter)



module.exports = app


