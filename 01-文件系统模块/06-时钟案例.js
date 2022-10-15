const fs = require('fs')
const path = require('path')

console.log()
console.log(-1088 << 4)
console.log()

// \s 匹配空白字符 \S 匹配字符串 => 匹配任意字符
const styleReg = /<style>[\s\S]*<\/style>/
const scriptReg = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, '../', '/static/01-文件系统模块', 'index.html'),
    'utf8', (err, data) => {

        // 拆解 css
        resolveCss(data)
        // 拆解 JS
        resolveJS(data)
        // 拆解 Html
        resolveHtml(data)
    }
)

// 拆解 Html
const resolveHtml = data => {
    // 由于 html 需要引入 css、js 文件, 可以将 style、script 标签 替换 引入标签

    const acs = data.replace(styleReg, '<link rel="stylesheet" href="./index.css"/>')
        .replace(scriptReg, '<script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname, '../', '/static/01-文件系统模块', '/clock/index.html'),
        acs, (err) => {
            if (err) return console.log(err.message)
        }
    )
}

// 拆解 CSS
const resolveCss = data => {
    // 提取内容
    const res = styleReg.exec(data)// 数组索引为 0 为匹配的结果

    // 将 <style></style> 标签进行替换
    const acs = res[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, '../', '/static/01-文件系统模块', '/clock/index.css'),
        acs, (err) => {
            if (err) return console.log(err.message)
        })
}
// 拆解 JS
const resolveJS = data => {
    // 提取内容
    const res = scriptReg.exec(data)// 数组索引为 0 为匹配的结果

    // 将 <script></script> 标签进行替换
    const acs = res[0].replace('<script>', '')
        .replace('</script>', '')

    fs.writeFile(path.join(__dirname, '../', '/static/01-文件系统模块', '/clock/index.js'),
        acs, (err) => {
            if (err) return console.log(err.message)
        })
}