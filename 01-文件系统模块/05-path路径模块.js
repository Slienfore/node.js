const fs = require('fs')
const path = require('path')

// ../ 抵消一层路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)// \a\d\e

// C:\Users\slien\Desktop\前端\Node\static\01-文件系统模块\hello.txt
const fullPath = path.join(__dirname, '../', './static/01-文件系统模块/hello.txt')

fs.readFile(fullPath,
    'utf8', (err, data) => {
        console.log(data)
    }
)

// hello => 将文件的 .txt 拓展名省略掉
console.log(path.basename(fullPath, path.extname(fullPath)))