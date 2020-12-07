// 1.引用 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer()

// 3.监听请求
server.on('request',(req,res)=>{
    console.log('处理数据');
    res.end('hello node server')
})

// 4.监听端口号
// port 端口号
// ip 默认是 127.0.0.1
// callback 用于提示
server.listen('3000',()=>{
    console.log('http://127.0.0.1:3000');
})
