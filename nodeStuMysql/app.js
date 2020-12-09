const express= require('express')
const path = require('path')
const app = express()
const artTemplate = require('art-template')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const router = require('./router')
app.use(router)

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})