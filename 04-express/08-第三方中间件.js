const express = require('express')
const app = express()

// 导入解析表单数据中间件 body-parser
const parser = require('body-parser')
app.use(parser.urlencoded({extended: false}))

app.get('/', (req, res) => {

    console.log(req.body)// [Object: null prototype] { name: 'alias', password: '3306' }

    res.send('Hello body-parser')
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})