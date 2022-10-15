const express = require('express')
const app = express()

// 将用户信息加密成 JWT 字符串
const jwt = require('jsonwebtoken')
// 将加密的 JWT 字符串 解密成信息
const expressJWT = require('express-jwt')

// 定义 secret 密钥
const secretKey = 'alias love'

// 注册将 JWT 字符串 解析还原成 JSON 对象中间件
app.use(
    // 解析 token 中间件
    expressJWT.expressjwt({secret: secretKey, algorithms: ["HS256"]})
        .unless({// 指定哪些接口不需要访问权限
            path: [/^\/api\//],
        })
)

// 允许跨域访问资源
const cors = require('cors')
app.use(cors())

// 解析 post 表单数据中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// 用户进行登录
app.post('/api/login', (req, res) => {
    const user = req.body

    if (user.username !== 'alias' ||
        user.password !== '3306') {
        return res.send({status: 1, msg: 'loin fail'})
    }

    res.send({
        status: 0, msg: 'login success',
        // 生成 token 字符串
        token: jwt.sign(
            // 用户信息
            {username: user.username},
            // 加密密钥
            secretKey,
            {expiresIn: '30s'}// 配置对象 => 可用于配置当前 token 有效期
        )
    })
})

// 有权限的接口 => 获取用户信息
app.get('/admin/getInfo', (req, res) => {
    // 使用 req.auth() 获取用户信息
    console.log('用户信息', req.auth)

    res.send({
        status: 200,
        msg: 'GetInfo Success',
        // 发送给客户端的用户信息
        data: req.auth
    })
})

// 捕获失效的 JWT 中间件
app.use((err, req, res, next) => {
    // token 解析失效错误
    if (err.name === 'UnauthorizedError') {
        return res.send({status: 401, msg: '无效的token'})
    }

    // 其它错误
    res.send({status: 500, msg: '未知错误'})
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080/')
})