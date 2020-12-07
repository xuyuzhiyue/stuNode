
const fs = require('fs')


// path 写入的文件路径
// data 写入的数据
// options 可选的v参数 默认为 utf8
// callback 只有一个参数 err 错误对象
fs.writeFile('./2.txt','写入数据writeFilte',err=>{
    if(err) throw '数据写入错误'
    console.log('数据写入成功');
})
