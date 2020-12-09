// 引入
const mysql = require('mysql')

// 创建数据库
const connection = mysql.createConnection({
    // ip地址
    host:'localhost',
    // 用户名
    user:'root',
    // 密码
    password:'root',
    // 数据库名
    database:'mydb'
})

// 开启链接
connection.connect()

// 执行sql连接语句
// const sql = 'select * from user'
// // 查询
// connection.query(sql,(err,result,fieds)=>{
//     if(err) throw err
//     console.log(result,'数据获取成功');
// })

// 添加
// const body = {
//     username:'王五',
//     age:100
// }
// const sql = 'insert into user set ?'
// connection.query(sql,body,(err,result,fieds)=>{
//     if(err) throw err
//     // 返回受影响的行数
//     console.log(result,'数据获取成功');
// })


// // 修改/编辑
// const body = {
//     id:3,
//     username:'王五哈哈哈',
//     age:50
// }
// const sql = 'update user set ? where id = ?'
// connection.query(sql,[body,body.id],(err,result,fieds)=>{
//     if(err) throw err
//     // 返回受影响的行数
//     console.log(result,'数据获取成功');
// })


//删除
// const sql = 'delete from user where id = ?'
// connection.query(sql,3,(err,result,fieds)=>{
//     if(err) throw err
//     // 返回受影响的行数
//     console.log(result,'数据获取成功');
// })

// ----
// 软删除
// const sql = 'update user set isdel =1 where id = ?'
// connection.query(sql,2,(err,result,fieds)=>{
//     if(err) throw err
//     // 返回受影响的行数
//     console.log(result,'数据获取成功');
// })
// 软删除查询
const sql = 'select * from user where isdel = 0'
// 查询
connection.query(sql,(err,result,fieds)=>{
    if(err) throw err
    console.log(result,'数据获取成功');
})
// --




// 关闭连接
connection.end()