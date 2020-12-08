// 中间件
// 1。中间件就是一个普通的函数
// 2.该函数有三个主要的参数 req res next 
// 3.中间件需要使用 use 执行
// 4.中间件需要安装先后顺序执行
// 5.中间件的req 是共享
// 6.中间件的下一个中间件想要执行上一个中间件一定要执行next

const express = require('express')

const app = express()


const { aa } = require('./aa')
const { bodyParser } = require('./bodyParser')
app.use(aa)
app.use(bodyParser)

app.get('/',(req,res)=>{
    res.send('根目录数据')
})

app.post('/api/post',(req,res)=>{
    console.log(req.body.name);
    res.send('psot')
})

app.listen(3333,()=>{
    console.log('http://127.0.0.1:3333');
})

