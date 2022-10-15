const express = require('express')
const app = express()

// 局部生效中间件函数
const mw = (req, res, next) => {
    console.log('局部生效中间件函数')
    next()
}

// 使用局部中间件(仅在当前路由中生效)
app.get('/', mw, (req, res) => {
    res.send('Home Page')
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})