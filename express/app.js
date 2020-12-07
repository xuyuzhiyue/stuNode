// 在express中出现乱码，把end - 》 改为 send


// 1.引用 express 
const express = require('express')
const path = require('path')
// 2.创建服务
const app = express()

// 静态资源的使用
app.use(express.static(path.join(__dirname,'./views')))
app.use('/images',express.static(path.join(__dirname,'./images')))

// // 3.监听请求
// app.get('/',(req,res)=>{
//     console.log('hello');
//     res.end('hello express')
// })

// app.get('/index.html',(req,res)=>{
//     res.send('首页')
// })
// 读取文件
// app.get('/index.html',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/index.html'))
// })

app.post('/api/post',(req,res)=>{
    res.end('post')
})
// 4.监听端口

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})