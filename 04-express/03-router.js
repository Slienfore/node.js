const express = require('express')

// 创建路由对象
const router = express.Router()

// 挂载具体路由
router.get('/user/list', (req, res) => {
    res.send('Get user list')
})

// 挂载具体路由
router.post('/user/add', (req, res) => {
    res.send('Post user add')
})

// 直接将路由对象导出
module.exports = router