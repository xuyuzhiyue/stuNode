const express  = require('express')
const path = require('path')
const router = express.Router()
const artTemplate = require('art-template')

router.get('/',(req,res)=>{
    res.send('首页')
})

router.get('/index.html',(req,res)=>{
    const data  = {
        name:'张三',
        age:178
    }
    const html  = artTemplate(path.join(__dirname,'./views/index.html'),data)
    res.send(html)
})


router.post('/api/post',(req,res)=>{
    console.log(req.body);
    res.send('post')
})

module.exports = router