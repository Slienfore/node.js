const fs = require('fs')

// __dirname => 当前 js 文件指定所处目录
console.log(__dirname)// C:\Users\slien\Desktop\前端\Node\01-文件系统模块

fs.readFile(__dirname + '/../static/01-文件系统模块/hello.txt',// ../ 抵消一层目录
    'utf8', (err, data) => {
        if (err) return console.log(err.message)

        console.log(data)
    }
)