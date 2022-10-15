const express = require('express')  
const app = express()

// 导入路由模块
const router = require('./03-router')

// 注册路由模块
app.use(router)

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})