

const querystring = require('querystring')
function bodyParser(req,res,next){
    let str = ''
    req.on('data',(chunk)=>{
       str += chunk
    })
    req.on('end',()=>{
        req.body = querystring.parse(str.toString())
        // console.log(querystring.parse(str.toString()),'str');
        next()
    })
}

module.exports = {
    bodyParser
}