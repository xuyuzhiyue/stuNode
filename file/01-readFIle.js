// 1.引用模块
const fs = require('fs')

// 2.调用模块api
// path 读取的路径
// options 可选的参数默认为null    其实会输出 buffer 二进制 可以用data.toString转换
// data读取数据
fs.readFile('../file/1.txt', 'utf8',(err, data) => {
    if(err){
        throw '数据返回错误'
    }
    console.log(data,'成功读取文件');
}) 