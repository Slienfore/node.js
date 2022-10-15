const express = require('express')

// 创建服务器
const app = express()

// 向外提供静态资源
app.use(express.static('../static/03-express/clock'))

app.listen(8080, () => {
    console.log('Running at http://lcoalhost:8080')
})  