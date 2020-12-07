// 1.引用模块
const fs = require('fs')

// 2.调用模块api
fs.readFile('../file/1.txt', (err, data) => {
    console.log(err, 'err');
    console.log(data.toString, 'data');
}) 