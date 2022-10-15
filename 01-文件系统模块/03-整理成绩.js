const fs = require('fs')

// 读取成绩内容
fs.readFile('../static/01-文件系统模块/score.txt',
    'utf8', (err, data) => {
        if (err) return console.log(err.message)

        // 分割成绩数据 [ '小红=99', '小白=100', '小黄=70', '小黑=88' ]
        const arrOld = data.split(' ')

        // [ '小红 : 99', '小白 : 100', '小黄 : 70', '小黑 : 88'
        const newArr = arrOld.map(val => val.replace('=', ' : '))

        // 添加换行符
        const res = newArr.join('\r\n')

        fs.writeFile('../static/01-文件系统模块/hello.txt',
            res, err => {
                if (err) return console.log(err.message)
            }
        )
    })