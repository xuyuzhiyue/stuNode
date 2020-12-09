const express= require('express')
const path = require('path')
const app = express()
const artTemplate = require('art-template')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// ejs 设置引擎模板的类型
app.set('engine view','ejs')
// 设置模板的位置
app.set('views',path.join(__dirname,'./views'))


app.get('/',(req,res)=>{
    res.send('首页')
})

app.get('/haha',(req,res)=>{
    const data  = {
        name:'张三',
        age:178
    }
    res.render('aa.ejs',data)
})


app.post('/api/post',(req,res)=>{
    console.log(req.body);
    res.send('post')
})

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})