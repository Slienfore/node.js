// 时间处理
const date = require('./src/dateAccess')
const escape = require('./src/htmlEscape')

module.exports = {// 由于对外面暴露的是 exports 对象, 那么将所有内部属性展开
    ...date,
    ...escape
}