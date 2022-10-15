const fs = require('fs')

/**
 * 文件路径
 * 写入内容
 * 编码格式(可选)
 * 读取后回调函数
 * err => 读取失败回调函数 (成功 为 null)
 * res => 读取文件结果
 */
fs.writeFile('../static/01-文件系统模块/hello.txt',
    'append content',
    'utf8',
    (err) => {

        if (err) return console.log(err.message)

    }
)