const express = require('express')

// 创建 web 服务器
const app = express()

// GET 请求
app.get('/user', (req, res) => {
    res.send({msg: 'Hello Node(GET Request)'})
})

// POST 请求
app.post('/user', (req, res) => {
    res.send({msg: 'Hello Node(POST Request)'})
})

// 获取请求路径参数
app.get('/', (req, res) => {
    console.log(req.query)

    res.send(req.query)
})

// 获取 URL 中的动态参数(匹配路径中的值, 作为动态参数的值)
app.get('/user/:name/:password', (req, res) => {
    // 动态匹配 URL 参数
    console.log(req.params)

    res.send(req.params)// { "name": "alias", "password": "3306" }
})

// 启动服务器
app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})


