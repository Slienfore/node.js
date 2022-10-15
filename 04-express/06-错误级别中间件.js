const express = require('express')
const app = express()

app.get('/', (req, res) => {
    throw new Error('服务器内部发生错误')
})

app.use((err, req, res, next) => {
    console.log('发生错误 => ', err.message)
    res.send('Error ' + err.message)
})

app.listen(8080, () => {
    console.log('Running at http://127.0.0.1:8080')
})