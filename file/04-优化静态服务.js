const http = require('http')
const fs = require('fs')

const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
    readFileStatic(req.url, res)
})

server.listen('3000', () => {
    console.log('http://127.0.0.1:3000')
})

// 定义一个函数
function readFileStatic(paths, res) {
    fs.readFile(path.join(__dirname, '../view', paths),'utf8', (err, data) => {
        if(err) return console.log('获取数据失败');
        res.end(data)
    })
}