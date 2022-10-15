const express = require('express')
const router = express.Router()

// 挂载对应路由
router.get('/get', (req, res) => {
    // 获取客户端路径请求参数
    const query = req.query

    // 向客户端响应处理结果
    res.send({
        status: 0,
        msg: 'GET 请求成功',
        data: query
    })
})

// 挂载对应路由
router.post('/post', (req, res) => {
    // 获取请求体中 urlencoded 格式数据
    const body = req.body

    res.send({
        status: 0,
        msg: 'POST 请求成功',
        data: body
    })
})

// 挂载对应路由
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功'
    })
})



module.exports = router