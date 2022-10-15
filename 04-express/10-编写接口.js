const express = require('express')
const app = express()

// 配置解析表单数据中间件
app.use(express.urlencoded({extended: false}))


// 配置 cors 中间件之前, 配置 JSONP 接口(JSONP 仅支持 GET 请求)
app.get('/api/jsonp', (req, res) => {
    // 获取函数名称
    const fun = req.query.callback

    // 获取调用函数名称
    const data = {name: 'alias', password: 3306}

    // 拼接函数调用
    const funStr = `${fun}(${JSON.stringify(data)})`// fun(data) => 类似于调用函数

    res.send(funStr)
})

// 注册路由之前, 配置 cors 中间件 => 解决接口跨域问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./11-apiRouter')
// 挂载路由, 添加统一访问前缀
app.use('/api', router)

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})