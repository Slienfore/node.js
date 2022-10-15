const express = require('express')
const app = express()

// 通过 express.json 中间件 => 解析表单中 JSON 格式中数据
app.use(express.json())

// Express.json() 内置中间件使用
app.post('/', (req, res) => {

    // 获取请求体参数(必须配置解析表单数据中间件)
    console.log(req.body)// { name: 'alias', age: 20 }

    res.send('Hello Express.json()')
})

// 通过 express.urlencoded() 中间件 => 解析表单中的 urlencoded 格式数据
app.use(express.urlencoded({extended: false}))

// Express.urlencoded() 内置中间件使用
app.post('/user', (req, res) => {
    // 获取 urlencoded 格式数据
    console.log(req.body)// [Object: null prototype] { name: 'alias', password: '3306' }

    res.send('Hello Express.urlencoded')
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})