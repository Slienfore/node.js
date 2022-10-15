const express = require('express')
const qs = require('querystringify')
const app = express()

// 自定义解析表单数据中间件
app.use((req, res, next) => {
    // 监听客户端发送到服务端数据, 并存储发送过来的请求体参数
    let str = ''
    req.on('data', val => {// 存储所有数据
        str += val
    })
    
    // 监听接受完所有的数据传输完成
    req.on('end', () => {
        // 将字符串格式的请求体数据, 解析成为对象格式
        const body = qs.parse(str)

        // 将解析出来的数据对象挂载为 req.body
        req.body = body
        next()
    })
})

app.post('/', (req, res) => {
    res.send(req.body)
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})