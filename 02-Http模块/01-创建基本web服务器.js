const http = require('http')

// 创建 web 服务器 实例
const server = http.createServer()

// 监听客户端请求
server.on('request', (req, res) => {

    console.log(req.url)// /
    console.log(req.method)// GET

    // 防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')

    res.end('你好 Node')
})

// 启动服务器
server.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})