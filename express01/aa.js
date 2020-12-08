
const fs = require('fs')
const path = require('path')
function aa(req,res,next){
    let data = req.url + '---' + req.method
    fs.appendFile(path.join(__dirname,'./file/1.text'),data,err=>{
        if(err) return '写入数据失败'
        console.log('写入成功');
        next()
    })
}
module.exports = { aa }