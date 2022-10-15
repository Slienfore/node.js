const express = require('express')
const app = express()

// 中间件函数
const mw = (req, res, next) => {
    console.log('触发中间件函数')

    // 将流转关系转交给下一个中间件或路由
    next()
}

// 将中间处理函数 注册为全局生效的中间件
app.use(mw)

app.get('/', (req, res) => {
    res.send('Got it')
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})