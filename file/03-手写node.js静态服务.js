// 1.引用 http 模块
const http = require('http')
const fs = require('fs')
const path = require('path')


// 2.创建服务
const server = http.createServer()

// 3.监听请求
server.on('request', (req, res) => {
    if (req.url === '/index') {
        fs.readFile(path.join(__dirname, '../view/index.html'), 'utf8', (err, data) => {
            // if (err) throw '数据返回错误'
            res.end(data)
        })
    }
    else if (req.url === '/movie.html') {
        fs.readFile(path.join(__dirname, '../view/movie.html'), 'utf8', (err, data) => {
            // if (err) throw '数据返回错误'
            res.end(data)
        })
    } else {

        res.end(`<!DOCTYPE html>
        <html lang="zh-CN">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        
        <body>
            其他数据
        </body>
        
        </html>`)
    }
})

// 4.监听端口号
// port 端口号
// ip 默认是 127.0.0.1
// callback 用于提示
server.listen('3000', () => {
    console.log('http://127.0.0.1:3000');
})
