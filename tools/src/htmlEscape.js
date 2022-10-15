/**
 * 进行转义 html 标签字符串
 * @param str 字符串
 * @returns {*} 处理结果
 */
const htmlEscape = str => {
    return str.replace(/<|>|"|&/g, el => {
        switch (el) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

/**
 * 将转义的 html 字符串解析成 html
 * @param str 字符串
 * @returns {*} 处理结果
 */
const htmlUnEscape = str => {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, el => {
        switch (el) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}