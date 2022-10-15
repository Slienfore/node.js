const http = require('http'), fs = require('fs'), path = require('path')

// 创建 web 服务器
const server = http.createServer()

// 监听服务器内容
server.on('request', (req, res) => {
    // 获取请求资源内容
    const url = req.url
    // /clock/index.html /clock/index.css /clock/index.js
    // 将请求的 URL 地址映射为 具体文件路径
    const filePath = path.join(__dirname, '../', './static/02-Http模块', url)

    // 读取完文件之后 => 相应给客户端
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.end('404 Not fount')

        res.end(data)
    })
})

// 启动服务器
server.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})