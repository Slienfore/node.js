const express = require('express')
const app = express()

// 托管静态页面
app.use(express.static('../static/05-身份验证/pages'))

// 配置 session 中间件
const session = require('express-session')
app.use(session({
    secret: 'slienfore',
    resave: false,
    saveUninitialized: true
}))

app.use(express.urlencoded({extended: false}))

// 用户进行登录
app.post('/api/login', (req, res) => {
    const user = req.body

    if (user.username !== 'alias' ||
        user.password !== '3306') {
        return res.send({status: 1, msg: 'loin fail'})
    }

    req.session.user = user// 用户信息
    req.session.isLogin = true// 用户登陆状态

    res.send({status: 0, msg: 'login success'})
})

// 获取用户名
app.get('/api/username', (req, res) => {
    if (!req.session.isLogin) return res.send({status: 1, msg: 'fail'})

    res.send({
        status: 0, msg: 'success',
        username: req.session.user.username// 获取 session 数据
    })
})

// 退出登录
app.post('/api/logout', (req, res) => {
    // 清空 当前客户端的 session 信息
    req.session.destroy()

    res.send({status: 0, msg: 'logout success'})
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080/')
})